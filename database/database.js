var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var db_config  = require('../config/webconfig');

/**
 * create connect to database
 * @param {*} config 
 */
async function create_connect_to_sqlServer(config){
  var connection = new Connection(config);  

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId)
  });// end of connection

  return connection;
} // end of create_connect_to_sqlServer


/**
 * excute database query using Promise
 * @param {*} query 
 * @returns 
 */
async function handle_query(conn, query){
    var arr = new Array();
    // テーブルからすべての行を読み込む
    const request = new Request(query, err => {
        if (err) {
            console.error(err.message);
            conn.close();
        }
    });

    // 読み込んだ行データの表示
    return new Promise((resolve,reject) => {
        var result = "";
        request.on('row', function(columns) {
            columns.forEach(function(column) {
                if (column.value === null) {
                    console.log('NULL');
                } else {
                    result += column.value + ";";
                }
            }); // end of foreach
            arr.push(result.trim());
            result = "";
        }); // end of request
        
        request.on('error',    () => reject(error));
        request.on("doneProc", () => resolve(arr));
        
        // SQL ステートメントを実行
        conn.execSql(request);
    });
};

/**
 * read data from database every times
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function Read(req, res) {
    console.log('テーブルの行データを読み取っています...');
    var ret = new Array();
    var query_statement = "SELECT *  FROM table_persons";
    /* result value is "new Promise"  */
    var conn = await create_connect_to_sqlServer(db_config);

    let io = app.get('io');
    // receive data from http server
    io.on('connection', function (socket) {
        // when receive data on httpServer, excute query and send result to client every ttl 
        setInterval(
            async function () {
                // excute query
                var result = await handle_query(conn, query_statement);
                // send data to client with id = 'getLiveData'
                socket.emit('getLiveData', result);
            },
            db_config['ttl']
            )
    });

    return result;

}

function Read() {
    console.log('テーブルの行データを読み取っています...');
    var ret = new Array();
    query_statement = "SELECT *  FROM table_persons";
    /* result value is "new Promise"  */
    var result = handle_query(query_statement);

    return result;

}

module.exports.Read = Read;

/* Reference to link
1. https://learn.microsoft.com/ja-jp/sql/connect/node-js/step-3-proof-of-concept-connecting-to-sql-using-node-js?view=sql-server-ver16
2. https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise

3. https://github.com/nirajshar/Live-Data-Fetch-NodeJs-SocketIO/blob/master/index-mssql.js
*/

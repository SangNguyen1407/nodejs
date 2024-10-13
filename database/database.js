var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var config  = require('../database/webconfig');


var connection = new Connection(config);  
var query_statement = "";

connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
    handle_query(query_statement);
});

connection.connect();

function handle_query(query){
    var arr = new Array();
    // テーブルからすべての行を読み込む
    const request = new Request(query, err => {
        if (err) {
            console.error(err.message);
            connection.close();
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
                    result += column.value + " ";
                }
            }); // end of foreach
            arr.push(result.trim());
            result = "";
        }); // end of request
        
        request.on('error',    () => reject(error));
        request.on("doneProc", () => resolve(arr));
        
        // SQL ステートメントを実行
        connection.execSql(request);
    });
};

function Read(req, res) {
    console.log('テーブルの行データを読み取っています...');
    var ret = new Array();
    query_statement = "SELECT *  FROM table_persons";
    /* result value is "new Promise"  */
    var result = handle_query(query_statement);

    return result;

}

module.exports.Read = Read;

//https://learn.microsoft.com/ja-jp/sql/connect/node-js/step-3-proof-of-concept-connecting-to-sql-using-node-js?view=sql-server-ver16
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise


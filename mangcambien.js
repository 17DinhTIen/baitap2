var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mangcambien"
});
var i= 0;
con.connect(function() {
    // if (err) throw err;
    // console.log("Connected!");
    do{
            var dlcambien = `INSERT INTO dlcambien (id_cambien, temp, humi, light, dust) VALUES (ROUND(RAND()*4+1),ROUND(RAND()*40), ROUND(RAND()*100),ROUND(RAND()*1000),ROUND(RAND()*100))`;
            con.query(dlcambien, function (err, result) {
                if (err) throw err;
                console.log("Successful");});
            i++;
    }
    while(i<100);
});
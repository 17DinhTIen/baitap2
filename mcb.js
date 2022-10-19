var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wsn2"
});

//tạo database
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE wsn2", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });
//tạo table
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var datasensor = "CREATE TABLE datasensor (id int(10) auto_increment primary key,temp int(10),humi int(10),light int(10),dust int(10),date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP)";
//   con.query(datasensor, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var datasensor = `INSERT INTO datasensor (temp, humi, light, dust) VALUES (ROUND(RAND()*100), ROUND(RAND()*100),ROUND(RAND()*100),ROUND(RAND()*100))`;

    con.query(datasensor, function (err, result) {
      if (err) throw err;
      console.log("Successful");
    });
  });
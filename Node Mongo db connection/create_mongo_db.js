let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/e-portfolio";

MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
  if (err) throw err;
  let dbo = db.db("E-portfolio");
  dbo.createCollection("Qualifications", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/e-portfolio";

MongoClient.connect(url, { useNewUrlParser: true },  function(err, db) {
    if (err) throw err;
    var dbo = db.db("E-portfolio");

    dbo.collection("Qualifications").insert(
      {"Course":"Fundamentals of Digital Marketing",
      "Type":"Accreditation",
      "Issuer":"Open university & Google",
      "Issue date":"2019-01-19T23:00:00.000Z",
      "Certificate number":"7KB 6RC HDV"})

    db.close();
    
    console.log("You have registered " + dbo.collection("Qualifications").find().count() + " qualifications");
    
});
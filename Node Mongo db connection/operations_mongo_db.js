let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/e-portfolio";

MongoClient.connect(url, { useNewUrlParser: true }, async function(err, db) {
    if (err) throw err;
    let dbo = db.db("E-portfolio");

    /*dbo.collection("Qualifications").insertOn(
      {"Course":"Fundamentals of Digital Marketing",
      "Type":"Accreditation",
      "Issuer":"Open university & Google",
      "Issue date":"2019-01-19T23:00:00.000Z",
      "Certificate number":"7KB 6RC HDV"})
*/
    let res = await dbo.collection("Qualifications").find().count()
    console.log("You have registered " + res + " qualifications");
    
    db.close();
});
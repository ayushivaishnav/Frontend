// // Step 1- import expressjs
// // Step 2- initilise expressjs
 
function retrieveAll(req,res){
 
    res.send(users)
    }// // Step 3- define API
    const port = 8800
     
    //Step 1:
    var express = require("express")
    //Step 2:
    var app = express()
    // Step 3:
    var visitorCount = 0;
    app.get('/Welcome', (req, res) => {
      var today = new Date()
      visitorCount++;
      var resp = "<html><body><b>Today: " + today;
      resp += "<b><br><b>Visitor Count</b>: " + visitorCount
      resp += "<br><a href=/>Home Page</a></body></html>"
      res.send(resp)
    })
     
    app.get('/', (req, res) => {
      var resp = "<html><body><b>Welcome To Home Page</b><br>";
      resp += "<a href=/Welcome>Welcome Page</a></body></html>"
      res.end(resp);
     
    })
     
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
      console.log("Printed is http://localhost:8800/")
    })
     
     
    //require to retrieve data send through post request
    var bparser=require('body-parser')
    bparserinit=bparser.urlencoded({extended:false})
     
     
    var users = [
    { userID: "101", firstName: "Ayushi", lastName: "Vaishnav" },
    { userID: "102", firstName: "Yash", lastName: "Naravade" },
    { userID: "103", firstName: "Sarthak", lastName: "Garg" },]
     
     
    // Get User Details Using ID or Name
    function retrieveUser(req, res)
    {
      var status = false;
      var userid = req.query.uid
      var firstName = req.query.fname
      for (var user of users)
      {
        if (userid == user.userID || firstName==user.firstName)
        {
          status = true;
        break;
      }
      }
      if (status)
        {
          res.send(user);
        }
      else{
        res.end("<b>No Employee with this ID</b>" + userid);
    }
    }
     
    app.get('/getUser', retrieveUser)
     
    //Get by ID but Only Name
    function retrieveName(req,res){
      var status = false;
      var userid = req.query.uid
      for (var user of users)
      {
        if (userid == user.userID)
        {
          status = true;
        break;
      }
      }
      if (status)
        {
          res.send(`${user.firstName} ${user.lastName}`);
        }
      else{
        res.end("<b>No Employee with this ID</b>" + userid);
    }
    }
     
    app.get('/getNoID',retrieveName)
     
     
    //Delete A User
    function deleteUser(req,res){
      var status = false;
      var userid = req.query.uid
      for (var user of users)
      {
        if (userid == user.userID)
        {
          status = true;
       
        }
      }
      if(status)
      {
        users.splice(userIndex,1)
      }
    }
     
    app.get('/deleteuser',deleteUser)
     
     
    // Get All Users
    function retrieveAll(req,res){
     
      res.send(users)
      }
     
    app.get('/getAllUser',retrieveAll)
     
     
    // Add A user
    function addNewUser(req,res){
      var user_id=req.body.uid;
      var first_Name=req.body.fname;
      var last_Name=req.body.lname;
      var rval=users.push({userID:user_id,firstName:first_Name,lastName:last_Name})
      res.send("<b>User Added Total Users: </b>"+rval);
    }
     
    app.post('/addNewUser',bparserinit,addNewUser)
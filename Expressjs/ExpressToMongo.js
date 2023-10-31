var exp = require('express');
var dot = require('dotenv');
var mon = require('mongoose');
var bparser = require('body-parser');

//initialize the body parser
bparseinit = bparser.urlencoded({extended:false});


//initializing express
var app = exp(); 

//connection with database
mon.connect("mongodb://127.0.0.1:27017/local?directConnection=true&serverSelectionTimeoutMS=2000&appName=ExpressToMongo").then
(
    ()=>{console.log('Connected to the database...')}).catch(
    ()=>{console.log("Unable to connect. check the URL.")}
)

//define the structure of the collection
const userSchema={userId:String,password:String,emailid:String};
//link the structure with the name of the collection
//Actual collection name is Users
//model(<collectionName>, <schemaName>,<structureOfTheCollection>)
var UserData = mon.model("Users",userSchema);

//insert the data into the collection
//then check if data is inserted successful
//use save() function for inserting data

function getAllUsers(request, response)
{
//Retrieve all the records .If successfuly retrieved, display it. Else error.
UserData.find().then((data)=>{console.log(data);
response.send(data);
}).catch(
    (error)=>{console.log(error);
     response.send('Could not retrieve the data')

    })
}
function addNewUser(request,response)
{
    var udata = new UserData({
        'userId':request.body.userId,
        'password':request.body.password,
        'emailId':request.body.emailId})
        udata.save()
        .then((data)=>{
            console.log("inserted successfully")
        })
            .catch((error)=>{
    console.log(error)})
        response.send("Inserted data successfuly")
    
}
app.post('/addUser', bparseinit,addNewUser)
app.get('/allUsers', getAllUsers)
app.listen(8000, function(error)
{
    if(error != undefined)
    {
        console.log(error.message)
    }
    else
    {
        console.log('Connect to port 8000. Waiting for request.')
        console.log('On the browser, Visit http://localhost:8000/')
    }
})



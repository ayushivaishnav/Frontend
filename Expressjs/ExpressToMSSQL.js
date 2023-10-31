const mysql = require('mysql');
const cors = require('cors');
const express = require('express');
const app = express();
 
app.use(cors());
app.use(express.json());
 
const mssqlconnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'world',
  port: 3306
});
 
// You should use `mssqlconnection.connect()` to establish the connection, not within route handlers.
 
mssqlconnection.connect((error) => {
  if (error) {
    console.log('Error connecting to the database:');
    console.error(error);
  } else {
    console.log('Connected to the database....');
  }
});
 
// Define the variable to hold query results.
 
let queryresults = null;
 
// The processResults function should update the queryresults variable.
 
function processResults(error, results) {
  if (error) {
    console.error('Database error:', error);
  } else {
    queryresults = results;
    console.log(results);
  }
}
 
// The displayAllUsers function should use the query method to retrieve data and send it as JSON.
 
function displayAllUsers(request, response) {
  mssqlconnection.query('SELECT * FROM users', processResults);
  response.json(queryresults);
}
 
app.get('/getAll', displayAllUsers);
 
// The getUserById function should return data for a specific user by ID.
 
function getUserById(request, response) {
  const userid = request.query.userid;
  mssqlconnection.query('SELECT * FROM users WHERE userid = ?', [userid], processResults);
  response.json(queryresults);
}
 
app.get('/getById', getUserById);
 
// Define a status object to send responses to the client.
 
const status = { message: '' };
 
// The checkInsertStatus function should update the status object.
 
function checkInsertStatus(error) {
  if (error) {
    status.message = `<b>Insert Failure: ${error.message}</b>`;
  } else {
    status.message = '<b>Insert Successful</b>';
  }
}
 
// The insertUsers function should use response.json to send a response.
var statusMessage = '';
function checkInsertStatus(error)
{
  
  statusMessage =((error==undefined)? "<b>Insert Successful</b>" : "<b>Insert Failure" + error.message+"</b>");
}

function insertUsers(request, response) {
  const userid = request.body.userid;
  const password = request.body.password;
  const emailid = request.body.emailid;
  console.log(`${userid}\t\t${password}\t\t${emailid}`);
  mssqlconnection.query(
    'INSERT INTO users (userid, password, emailid) VALUES (?, ?, ?)',
    [userid, password, emailid],
    checkInsertStatus
  );
  response.send(JSON.stringify(statusMessage));
}
 
app.post('/insert', insertUsers);
 
// The updateUser function should return a response based on the result of the update.
 
function updateUser(request, response) {
  const userid = request.params.userid;
  const password = request.body.password;
  const emailid = request.body.emailid;
 
  mssqlconnection.query(
    'UPDATE users SET password = ?, emailid = ? WHERE userid = ?',
    [password, emailid, userid],
    (error, results) => {
      if (error) {
        console.error('Error updating user:', error);
        status.message = 'Error updating user';
        response.status(500).json(status);
      } else {
        status.message = 'User updated successfully';
        response.json(status);
      }
    }
  );
}
 
app.put('/update/:userid', updateUser);
 
// The deleteUser function should return a response based on the result of the delete.
 
function deleteUser(request, response) {
  const userid = request.body.userid;
  console.log(userid);
 
  mssqlconnection.query(
    'DELETE FROM users WHERE userid = ?',
    [userid],
    (error, results) => {
      if (error) {
        console.error('Error deleting user:', error);
        status.message = 'Error deleting user';
        response.status(500).json(status);
      } else {
        status.message = 'User deleted successfully';
        response.json(status);
      }
    }
  );
}
 
app.delete('/delete', deleteUser);
 
// Listen on port 9901
 
app.listen(9901, () => {
  console.log('Server is running on port 9901');
});
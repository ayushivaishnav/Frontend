const mysql = require("mysql");
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

const mssqlconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "world",
  port: 3306,
});

// You should use `mssqlconnection.connect()` to establish the connection, not within route handlers.

mssqlconnection.connect((error) => {
  if (error) {
    console.log("Error connecting to the database:");
    console.error(error);
  } else {
    console.log("Connected to the database....");
  }
});

// Define the variable to hold query results.

let queryresults = null;

// The processResults function should update the queryresults variable.

function processResults(error, results) {
  if (error) {
    console.error("Database error:", error);
  } else {
    queryresults = results;
    console.log(results);
  }
}

app.post("/login", (req, res) => {
  const { userid, password } = req.body;
  if (!userid || !password) {
    res.send("Both userid and password are required.");
  } else {
    try {
      mssqlconnection.query(
        "SELECT * FROM users WHERE userid = ?",
        [userid],
        (err, result) => {
          console.log(result);
          if (result[0] != null) {
            if (result[0].password == password) {
              res.json(result);
            } else {
              res.send("Invalid password");
            }
          } else {
            res.send("Invalid userid");
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
});

// The displayAllUsers function should use the query method to retrieve data and send it as JSON.

function displayAllUsers(request, response) {
  mssqlconnection.query("SELECT * FROM users", processResults);
  response.json(queryresults);
}

app.get("/getAll", displayAllUsers);

// The getUserById function should return data for a specific user by ID.

function getUserById(request, response) {
  const userid = request.query.userid;
  mssqlconnection.query(
    "SELECT * FROM users WHERE userid = ?",
    [userid],
    processResults
  );
  response.json(queryresults);
}

app.get("/getById", getUserById);

// Define a status object to send responses to the client.

const status = { message: "" };

// The checkInsertStatus function should update the status object.

function checkInsertStatus(error) {
  if (error) {
    status.message = `<b>Insert Failure: ${error.message}</b>`;
  } else {
    status.message = "<b>Insert Successful</b>";
  }
}

// The insertUsers function should use response.json to send a response.
var statusMessage = "";
function checkInsertStatus(error) {
  statusMessage = error == undefined;
}

function insertUsers(request, response) {
  const userid = request.body.userid;
  const password = request.body.password;
  const emailid = request.body.emailid;
  console.log(`${userid}\t\t${password}\t\t${emailid}`);
  mssqlconnection.query(
    "INSERT INTO users (userid, password, emailid) VALUES (?, ?, ?)",
    [userid, password, emailid],
    checkInsertStatus
  );
  response.send(JSON.stringify(statusMessage));
}

app.post("/insert", insertUsers);

// The updateUser function should return a response based on the result of the update.

function updateUser(request, response) {
  const userid = request.params.userid;
  const password = request.body.password;
  const emailid = request.body.emailid;

  mssqlconnection.query(
    "UPDATE users SET password = ?, emailid = ? WHERE userid = ?",
    [password, emailid, userid],
    (error, results) => {
      if (error) {
        console.error("Error updating user:", error);
        status.message = "Error updating user";
        response.status(500).json(status);
      } else {
        status.message = "User updated successfully";
        response.json(status);
      }
    }
  );
}

app.put("/update/:userid", updateUser);

// The deleteUser function should return a response based on the result of the delete.

function deleteUser(request, response) {
  const userid = request.body.userid;
  console.log(userid);

  mssqlconnection.query(
    "DELETE FROM users WHERE userid = ?",
    [userid],
    (error, results) => {
      if (error) {
        console.error("Error deleting user:", error);
        status.message = "Error deleting user";
        response.status(500).json(status);
      } else {
        status.message = "User deleted successfully";
        response.json(status);
      }
    }
  );
}

app.delete("/delete", deleteUser);

function insertContactus(request, response) {
  const sNo = request.body.sNo;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const email = request.body.email;
  const phone = request.body.phone;
  const address = request.body.address;
  console.log(firstName + "\t\t" + lastName + "\t" + email);
  mssqlconnection.query(
    "INSERT INTO contactus (sNo, firstName, lastName, email, phone, address) VALUES (?, ?, ?, ?, ?, ?)",
    [sNo, firstName, lastName, email, phone, address],
    checkInsertStatus
  );
  response.send(JSON.stringify(statusMessage));
}
app.post("/insertContacts", insertContactus);

//Get Contacts
function displayAllContactus(request, response) {
  mssqlconnection.query("SELECT * FROM contactus", processResults);
  response.json(queryresults);
}
app.get("/getAllContacts", displayAllContactus);

//Update Contacts
function updateContact(request, response) {
  const sNo = request.body.sNo;
  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const email = request.body.email;
  const phone = request.body.phone;
  const address = request.body.address;

  mssqlconnection.query(
    "UPDATE contactus SET firstName = ?, lastName=?, email = ?, phone=?, address=? WHERE sNo = ?",
    [firstName, lastName, email, phone, address, sNo],
    (error, results) => {
      if (error) {
        console.error("Error updating user:", error);
        status.message = "Error updating user";
        response.status(500).json(status);
      } else {
        status.message = "User updated successfully";
        response.json(status);
      }
    }
  );
}
app.put("/updateContacts/:sNo", updateContact);

//Delete Contacts
function deleteContact(request, response) {
  const sNo = request.body.sNo;
  console.log(sNo);

  mssqlconnection.query(
    "DELETE FROM contactus WHERE sNo = ?",
    [sNo],
    (error, results) => {
      if (error) {
        console.error("Error deleting user:", error);
        status.message = "Error deleting user";
        response.status(500).json(status);
      } else {
        status.message = "User deleted successfully";
        response.json(status);
      }
    }
  );
}
app.delete("/deleteContacts", deleteContact);
// Listen on port 9901

app.listen(9901, () => {
  console.log("Server is running on port 9901");
});

//authentication

// app.post('/api/Authenticate', (req, res) => {
//   const { userID, password } = req.body;

//   // Lookup user in your database
//   const customUser = customUsers.find((u) => u.userID === userID);

//   if (!customUser) {
//     return res.status(401).json({ success: false, message: 'Authentication failed. User not found.' });
//   }

//   // Compare hashed password
//   bcrypt.compare(password, customUser.password, (err, result) => {
//     if (result) {
//       return res.json({ success: true, message: 'Authentication successful' });
//     } else {
//       return res.status(401).json({ success: false, message: 'Authentication failed. Incorrect password.' });
//     }
//   });
// });
// Other routes and middleware here


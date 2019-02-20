const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const user = encodeURIComponent('admin');
const password = encodeURIComponent('D5G2cZ9k');
const authMechanism = 'DEFAULT';

// Connection URL
const url = `mongodb://${user}:${password}@localhost:27017/?authMechanism=${authMechanism}`;

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  client.close();
});
const express = require("express");
const mysql = require('mysql');
const app = express();
const uscore = require("underscore");
var binary = require('text-to-binary-converter');

app.use('/public/img', express.static(process.cwd() + "/public/img"));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
var binary = require('text-to-binary-converter');

let variable1 = binary.convert("Code");
let variable2 = binary.convert("Cake");

res.render('home', {'binary1':variable1, 'binary2':variable2} );
});

app.get('/languages', (req, res) => {
res.render('languages');
});

app.get('/sort_types', (req, res) => {
res.render('sort_types');
});

app.get('/variable_types', (req, res) => {
res.render('variable_types');
});

//start server
app.listen(3000, () => {
console.log("Expresss server running...")
} )
const { lstat } = require('fs');
const { ClientRequest } = require('http');

//  Funçao Conecta com BD

//  Funçao metodos


//  Módulos

/*const express = require('express');
const path = require('path');
const app = express();
const oracledb = require('oracledb');
const body = require('body-parser');
const bodyParser = require('body-parser');
const { send } = require('process');
const bd = new BD();
const handlebars = require('express-handlebars');
const { builtinModules } = require('module');*/


const net = require('net');
const { stdin, stdout } = require('process');
const readline = require('readline');

const client = new net.Socket();
const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

client.connect(3000, '127.0.0.1', () => {
    console.log("conectou, animal!");
    rl.addListener('line', line => {
        client.write(line);
    })
    rl.addListener('rec', rec => {
        client.on("ready", () => {
            console.log(client._read(1));
        })
    })
})

//  BodyParser
//app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));*/
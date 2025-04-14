const firebase = require("firebase/app");
require("firebase/database"); 
const vscode = require('vscode');
let code =''

function generateCode() {

    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return result;
  }
let team_code =  generateCode();

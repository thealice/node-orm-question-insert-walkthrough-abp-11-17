const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(function(resolve){
      const sql = `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )`
      
      db.run(sql, function(){
        resolve("questions table created");
      })      
    })
  }

  constructor(content){
    this.content = content;
  }

  function insert() {
    const self = this;
    
  }
}

module.exports = Question;
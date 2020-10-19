const connection = require("../server.js");  


class db {

    constructor (connection) {

            this.connection = connection;  

    }

     findAllEmployees() {

        
        return (this.connection.query("SELECT * FROM employee")); 
        
    }




}

module.exports = new db(connection); 
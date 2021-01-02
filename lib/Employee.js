// TODO: Write code to define and export the Employee class

class Employee{
    constructor(name, id, email) {
   this.name = name;
   this.id = id;
   this.email = email;
   this.role = "Employee";
   
   this.getName = function(){
    return this.name;
    };

    this.getEmail = function(){
        return this.email;
    };

    this.getId = function(){
        return this.id;
    };

    this.getRole = function(){
        return this.role;
    };
}
}

module.exports = Employee;
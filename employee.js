//module
var EmployeeClass=(function(){

    //constructor
    function Employee(id,name,age){
        this._id=id;
        this._name=name;
        this._age=age;
    }
    Employee.prototype.getId=function(){ return this._id;};
    Employee.prototype.setName=function(name){ return this._name=name;};
     return Employee;
});


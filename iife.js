//IIFE
//Constructor
//this
//object mutation
//prototype
//Binding :- "bind value for "this" [default,implicit,eplicit,new]
//new binding

//Constructor
// no explicit return statement
// Applied using "new" Binding

/*class Employee{
                  public Employee(id,name,age)
}*/
function Employee(id,name,age){

    this._id=id;
    this._name=name;
    this._age=age;
}

var obj=new Employee();

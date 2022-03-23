function Test(data){
var _data=data;
this.getData=function() { return _data;}
this.setData=function(value){_data=value;}
Test.instanceCount=Test.instanceCount+1;
}
Test.instanceCount = 0;

let test1 = new Test(0)

let test2 = new Test(1)

console.log(test2.getData());


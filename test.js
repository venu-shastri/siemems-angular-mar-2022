//JS - Module
//IIFE - Immediately Invoked Function Expression

(function(global){
//Module-function scope
    var xyz=100;
    //var test=new Function()
    function test(){
    //local scope
    var abc=3000;
    }
    //Namespace,Package
    global.test=global.test || {};
    global.test.xyz=xyz;
    global.test.testFun=test;

})(window);









var app = angular.module('myApp',[]);

app.controller('myCtrl',function($rootScope, myService){
    $rootScope.sharedVar = "Ankit";
vm = this;    
    vm.name="Himanshu";
    
    var sharedFromService = myService.getSharedVar();
    
})

app.controller('formController',function($rootScope, myService){
vm = this;    
    vm.name="Kunal";
    
    vm.shared = $rootScope.sharedVar; 
    
    
    
})

app.service('myService',myServiceDef);

function myServiceDef(){
     this.sharedVar = "Ankit from Service";
    
    this.getSharedVar = function(){
      this.sharedVar;
    }
    
    this.set
}



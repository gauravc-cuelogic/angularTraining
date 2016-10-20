'use strict';

angular.module('loginService.service', [])
    .service('loginService', loginServiceWrapper);

function loginServiceWrapper() {

  var service = {};
  var validCredentials = {
    "gaurav.chauriya@cuelogic.co.in" : "test",
    "chauriya@gmail.com" : "test"
  }

  function validateLogin(email, password) {
      if(validCredentials.hasOwnProperty(email) && validCredentials[email] === password){
        return true;
      }else{
        return false;
      }
  }



  service.validateLogin = validateLogin;


  return service;

};

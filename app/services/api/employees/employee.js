angular.module('employee.service', [])
    .factory('employeeService', [employeeService]);



function employeeService() {
    var service = {};
    var empData = {
        "empDetails":[
          {
              "id": 0,
              "first_name": "Gaurav",
              "last_name": "Chauriya",
              "address": "Pune, India.",
              "email": "gaurav@gmail.com",
              "age": "26",
              "gender": "Male",
              "education": "MCA"
          },
          {
            "id": 1,
            "first_name": "Jai",
            "last_name": "Kataria",
            "address": "Pune, India.",
            "email": "jai@gmail.com",
            "age": "27",
            "gender": "Male",
            "education": "MCA"
          },
          {
            "id": 2,
            "first_name": "Shayam",
            "last_name": "Sapate",
            "address": "Pune, India.",
            "email": "shayam@gmail.com",
            "age": "25",
            "gender": "Male",
            "education": "B.E"
          },
          {
            "id": 3,
            "first_name": "Sagar",
            "last_name": "Bhamre",
            "address": "Pune, India.",
            "email": "sagar@gmail.com",
            "age": "26",
            "gender": "Male",
            "education": "MCA"
          }]};
    service.getEmpList = getEmpList;

    return service;

    function getEmpList(id) {
      return id === undefined ? empData : empData.empDetails[id];
    }
    //END
};

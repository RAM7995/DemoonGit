//4 steps are involved here
//step 01:create a XHR object
//this will create a new object which will have 
//the interaction with servers via API
var request=new XMLHttpRequest();
//step 02: opening a request
//takes two parameters: "HTTP METHOD", "API URL"
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
//step 03:sending a request
request.send();
//step 04:once dsata is successfully loaded form server
//or status code is 200
request.onload=function(){
//the data coming from server is of type  string
//so we are converting into object
var data=JSON.parse(request.response);
console.log(data);
console.log(data[0].name+ " "+data[0].capital);
//i want to print all the country name and their captial in console
for(var i=0;i<data.length;i++){
    console.log(data[i].name+" "+data[i].captial);
}
}
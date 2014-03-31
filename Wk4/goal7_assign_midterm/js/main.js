/*
	* Mid Terms for PWA-1
*/
(function () {

var button = document.getElementById("info_btn"); 
var i = 0;

 var studentProfiles = [
 	new Student('Andre Guerra', '63955 Pioneer Loop Bend', 'OR', [2.5, 3.0, 4.0], new Date()),
 	new Student('Jimmy Fallon', '30 Rockefeller Plaza 7th Floor', 'New York', 'NY', new Date()),
 	new Student('Mark Zuckerberg', '1601 Willow Rd', 'Menlo Park', 'CA', [2.5, 3.0, 4.0], new Date())
 ];
 
 
 var next = function(e) {  

   if (i < max + 1){
   
   	var innerName = document.querySelector("#name").querySelector("p");
   	var innerAddress = document.querySelector("#address").querySelector("p");
   	var innerGpa = document.querySelector("#gpa").querySelector("p");
   	var innerAvgGpa = document.querySelector("#gpaavg").querySelector("p");
   	var innerDate = document.querySelector("#date").querySelector("p");
       
    /*
    innerName.innerHTML = 'Name:  ' + studentArray[i].name;
    innerAddress.innerHTML = 'Address:  ' + studentArray[i].address.street + ' ' + studentArray[i].address.city + ' ' + studentArray[i].address.state;
    innerGpa.innerHTML = 'GPA:  ' + gpaAvg(studentArray[i].gpa);
    innerDate.innerHTML = 'Date:  ' + studentArray[i].date;
	innerAvgGpa.innerHTML = 'Average GPA:  ' + gpaAvg(studentArray[i].gpa);
	*/
	
    innerName.innerHTML = 'Name:  ' + Student[i].name;
    innerAddress.innerHTML = 'Address:  ' + Student[i].studentAddress.studentStreet + ' ' + Student[i].studentAddress.studentCity + ' ' + 	Student[i].studentAddress.studentState;
    innerGpa.innerHTML = 'GPA:  ' + gpaAvg(Student[i].studentGPA);
    innerDate.innerHTML = 'Date:  ' + Student[i].getDate();
	innerAvgGpa.innerHTML = 'Average GPA:  ' + gpaAvg(Student[i].studentGPA);

    }else{
      button.onclick = "return false";    
      document.querySelector('.buttonred').innerHTML = 'DONE!!!';
    };
    
	
    i++;
    return false;
    e.preventDefault();

}
var max = studentProfiles.length - 1;

button.onclick = next;

})();

/*var studentArray = [
    {
        name: 'test1',
        address: {street: '3300 University', city: 'Winter Park', state: 'Florida'},
        gpa: [2.5, 3.0, 4.0],
        date: new Date()
    },
    {
        name: 'test2',
        address: {street: '123 Test Dr', city: 'Orlando', state: 'Florida'},
        gpa: [2.0, 3.2, 3.0],
        date: new Date()
    }];*/

 
/*var addStudent = function(newname, newstreet, newcity, newstate, newgpa, newdate){

  studentArray.push({
    name: newname,
      address: {street: newstreet, city: newcity, state: newstate},
      gpa: newgpa,
      date: newdate
  }); 
};*/
 
 
/* 
var next = function(e) {  

   if (i < max + 1){
   
   	var innerName = document.querySelector("#name").querySelector("p");
   	var innerAddress = document.querySelector("#address").querySelector("p");
   	var innerGpa = document.querySelector("#gpa").querySelector("p");
   	var innerAvgGpa = document.querySelector("#gpaavg").querySelector("p");
   	var innerDate = document.querySelector("#date").querySelector("p");
       
    /*
    innerName.innerHTML = 'Name:  ' + studentArray[i].name;
    innerAddress.innerHTML = 'Address:  ' + studentArray[i].address.street + ' ' + studentArray[i].address.city + ' ' + studentArray[i].address.state;
    innerGpa.innerHTML = 'GPA:  ' + gpaAvg(studentArray[i].gpa);
    innerDate.innerHTML = 'Date:  ' + studentArray[i].date;
	innerAvgGpa.innerHTML = 'Average GPA:  ' + gpaAvg(studentArray[i].gpa);
	*/
	/*
    innerName.innerHTML = 'Name:  ' + Student[i].name;
    innerAddress.innerHTML = 'Address:  ' + Student[i].studentAddress.studentStreet + ' ' + Student[i].studentAddress.studentCity + ' ' + Student[i].studentAddress.studentState;
    innerGpa.innerHTML = 'GPA:  ' + gpaAvg(Student[i].studentGPA);
    innerDate.innerHTML = 'Date:  ' + Student[i].getDate();
	innerAvgGpa.innerHTML = 'Average GPA:  ' + gpaAvg(Student[i].studentGPA);

    }else{
      button.onclick = "return false";    
      document.querySelector('.buttonred').innerHTML = 'DONE!!!';
    };
    
	
    i++;
    return false;
    e.preventDefault();

}
var max = Student.length - 1;

button.onclick = next;


    */


//console.log('Name: ' + studentArray.name);
//console.log('Address: ' + studentArray.address.street + ', ' + studentArray.address.city + ' ' + studentArray.address.state);
//console.log('GPA: ' + studentArray.gpa);
 
// JS "Class"
/* function newStudent (theName, theStreet, theCity, theState, theGPA) {
 
  this.name = theName;
  this.gpa = theGPA
  
  this.address = {
    street : theStreet,
    city : theCity,
    state : theState
  }
 
    console.log('Name: ' + this.name);
    console.log('Address: ' + this.address.street + ', ' + this.address.city + ' ' + this.address.state);
    console.log('GPA: ' + this.gpa);
 
} */
 
// function to create and add student object to array
/* var addStudent = function(newname, newstreet, newcity, newstate, newgpa, newdate){

  studentArray.push({
    name: newname,
      address: {street: newstreet, city: newcity, state: newstate},
      gpa: newgpa,
      date: newdate
  }); 
};

addStudent('Bugs Bunny', '123 Bond St', 'Waco', 'TX', [3.0,3.1,2.2], studentArray[i].date);
addStudent('Willy Wonka', '123 Wonka Way', 'Candy', 'NY', [4.0,3.7,3.8], studentArray[i].date);

*/





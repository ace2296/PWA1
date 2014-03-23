/*
	* Mid Terms for PWA-1
*/
(function () {

var studentName = document.querySelector("#name").querySelector("p");
var studentAddress = document.querySelector("#address").querySelector("p");
var studentGPA = document.querySelector("#gpa").querySelector("p");
var date = document.querySelector("#date").querySelector("p");
var studentAvgGpa = document.querySelector("#gpaavg").querySelector("p");
var studentPhone = document.querySelector("#phone").querySelector("p");
var button = document.getElementById("info_btn");

//button.onclick = ;


var student = [{
	name: 'Andre Guerra',
	address: {
		street: '123 Way Street',
		city: 'Bend',
		state: 'OR',
	},
	GPA: [4.0,3.5,3.2],
	
	addStudent : function(theName, theStreet, theCity, theState, theGPA) {
 
	  student.name = theName;
	  student.gpa = theGPA
	  
	  student.address = {
	    street : theStreet,
	    city : theCity,
	    state : theState
	  }
  
	}, //end addStudent

	//method to return address
	showAddresss : function() { //method
		var addr = this.address.street + ', ' + this.address.city + ' ' + this.address.state ;
		return addr;
	}
	
}];
 
// function to create and add student object to aray
student.addStudent('Jimmy Fallon','30 Rockefeller Plaza','New York','NY',[3.1,3.8,2.9]);

studentName.innerHTML = student.name;
studentAddress.innerHTML = student.showAddress();
studentGPA.innerHTML = student.gpa;



//student['GPA'] = [4.0,3.5,3.2]; //index notation
//student.GPA = [4.0,3.5,3.2]; //dot notation

console.log('Name: ' + student.name);
console.log('Address: ' + student.showAddress());
console.log('GPA: ' + student.GPA);

console.log('Name: ' + addStudent.name);
console.log('Address: ' + addStudent.showAddress());
console.log('GPA: ' + addStudent.GPA);


})();

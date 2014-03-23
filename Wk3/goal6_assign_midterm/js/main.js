/*
	* Mid Terms for PWA-1
*/
(function () {

var button = document.getElementById("info_btn"); 

var studentArray = {
	name: 'Andre Guerra',
	address: {
		street: '123 Way Street',
		city: 'Bend',
		state: 'OR',
	},
	gpa: [4.0,3.5,3.2]
};

console.log('Name: ' + studentArray.name);
console.log('Address: ' + studentArray.address.street + ', ' + studentArray.address.city + ' ' + studentArray.address.state);
console.log('GPA: ' + studentArray.gpa);
 
// JS "Class"
function Student (theName, theStreet, theCity, theState, theGPA) {
 
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
 
}
 
// function to create and add student object to array
function addStudent (theName, theStreet, theCity, theState, theGPA) {
  
  studentArray.push(new Student(theName, theStreet, theCity, theState, theGPA));
  
}

Student('Bugs Bunny', '123 Bond St', 'Waco', 'TX', [3.0,3.1,2.2]);
Student('Willy Wonka', '123 Wonka Way', 'Candy', 'NY', [4.0,3.7,3.8]);

//Average GPA function

var gpa = function(arr){

        var sum = 0;

        for(i= 0, j = arr.length; i < j; i++){   
            sum = sum + arr[i];
        }
        var avg = sum / arr.length;                
        return avg;                                 
    };



button.onclick = next;

function next() {
	document.querySelector("#name").querySelector("p").innerHTML = 'Name: ' + studentArray.name;
	document.querySelector("#address").querySelector("p").innerHTML = 'Address: ' + studentArray.address.street + ', ' + studentArray.address.city + ' ' + studentArray.address.state;
	document.querySelector("#gpa").querySelector("p").innerHTML = 'GPA: ' + studentArray.gpa;
}



})();
/*
	* Mid Terms for PWA-1
*/
(function () {

var button = document.getElementById("info_btn"); 
var i = 0;

var studentArray = [
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
    }];

//console.log('Name: ' + studentArray.name);
//console.log('Address: ' + studentArray.address.street + ', ' + studentArray.address.city + ' ' + studentArray.address.state);
//console.log('GPA: ' + studentArray.gpa);
 
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
var addStudent = function(newname, newstreet, newcity, newstate, newgpa, newdate){

  studentArray.push({
    name: newname,
      address: {street: newstreet, city: newcity, state: newstate},
      gpa: newgpa,
      date: newdate
  }); 
};

addStudent('Bugs Bunny', '123 Bond St', 'Waco', 'TX', [3.0,3.1,2.2], studentArray[i].date);
addStudent('Willy Wonka', '123 Wonka Way', 'Candy', 'NY', [4.0,3.7,3.8], studentArray[i].date);

//Average GPA function

var gpaAvg = function(arr){

        var sum = 0;

        for(i= 0, j = arr.length; i < j; i++){   
            sum = sum + arr[i];
        }
        var avg = sum / arr.length;                
        return avg;                                 
    };



button.onclick = next;

function next() {

   var innerName = document.querySelector("#name").querySelector("p");
   var innerAddress = document.querySelector("#address").querySelector("p");
   var innerGpa = document.querySelector("#gpa").querySelector("p");
   var innerAvgGpa = document.querySelector("#gpaavg").querySelector("p");
   var innerDate = document.querySelector("#date").querySelector("p");

   if (i !== max+1){
    innerName.innerHTML = 'Name:  ' + studentArray[i].name;
    innerAddress.innerHTML = 'Address:  ' + studentArray[i].address.street + ' ' + studentArray[i].address.city + ' ' + studentArray[i].address.state;
    innerGpa.innerHTML = 'GPA:  ' + studentArray[i].gpa;
    innerDate.innerHTML = 'Date:  ' + studentArray[i].date;
	//innerAvgGpa.innerHTML = 'Average GPA:  ' + avg;
	
    //console.log(studentArray[i].gpa);
  
    //var avg = gpaAvg(studentArray[i].gpa);
    
    // console.log(students[i].gpa.length)

    }else{
      button.onclick = "return false";    
      document.querySelector('.buttonred').innerHTML = 'DONE!!!';
    };
    i++
    return false;

}
var max = studentArray.length;


})();
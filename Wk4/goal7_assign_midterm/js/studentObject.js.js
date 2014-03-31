var Student = function(studentName, studentStreet, studentCity, studentState, studentGPA, date) {
	
	this.name = studentName;
	this.address = {street: studentStreet, city: studentCity, state: studentState};
	this.gpa = studentGPA;
 	
 	console.log('Name: ' + this.name);
 	console.log('Address: ' + this.address.street + ', ' + this.address.city + ' ' + this.address.state);
 	console.log('GPA: ' + this.gpa);
 };
 
 Student.prototype.gpaAvg = function(arr){

        var sum = 0;
        var j = 0;

        for(j= 0; j < arr.length; j++){   
            sum = sum + arr[j];
        }
        var avg = sum / arr.length;                
        return avg;                                 
 };

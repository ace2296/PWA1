var Student = function(studentName, studentStreet, studentCity, studentState, studentGPA, date) {

    this.name = studentName;
    this.address = {street: studentStreet, city: studentCity, state: studentState};

    // CHECK GPA FORMAT
    this.checkGPAformat(studentGPA);
    
    this.gpa = studentGPA;

    this.date = date;


    console.log('Name: ' + this.name);
    console.log('Address: ' + this.address.street + ', ' + this.address.city + ' ' + this.address.state);
    console.log('GPA: ' + this.gpa);
    console.log('DATE: ' + this.date.mmddyyyy());
};

Student.prototype.checkGPAformat = function(arr) { //Extra Credit (with a ton of research and no sleep O.o

    var checkGPA = '';
    var j = 0;

    for (j = 0; j < arr.length; j++) {
        checkGPA = arr[j].toString();

        if (!(checkGPA.match(/^\d{0,2}(?:\.\d{0,2}){0,1}$/))) {
            alert('Error in GPA format #.##: ' + arr[j].toString());
            return false;
        }
    }

    return true;
}

Student.prototype.gpaAvg = function() {
    var sum = 0;
    var j = 0;

    for (j = 0; j < this.gpa.length; j++) {
        sum = sum + this.gpa[j];
    }
    var avg = sum / this.gpa.length;
    return avg;
};
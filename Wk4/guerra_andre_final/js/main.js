/*
Name: Guerra, Andre
Date: 4/3/14
Assignment: Midterm Final
Class: PWA-1
*/
 
(function() {
    
    // Fix the date to mm-dd-yyyy format
    Date.prototype.mmddyyyy = function() {
        var yyyy = this.getFullYear().toString();
        var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
        var dd = this.getDate().toString();
        return (mm[1] ? mm : "0" + mm[0]) + '/' + (dd[1] ? dd : "0" + dd[0]) + '/' + yyyy; // padding
    };    
        
    var button = document.getElementById("info_btn");
    var i = 0; // for cycling all students
    var max = 0; // for counting all students
    
    var studentProfiles = [
        new Student('Andre Guerra', '63955 Pioneer Loop Bend', 'TEST', 'OR', [2.6, 3.0, 4.0], new Date()),
        new Student('Jimmy Fallon', '30 Rockefeller Plaza 7th Floor', 'New York', 'NY', [2.5, 3.0, 4.0], new Date()),
        new Student('Mark Zuckerberg', '1601 Willow Rd', 'Menlo Park', 'CA', [2.5, 3.0, 4.0], new Date())
    ];
    
    max = studentProfiles.length - 1;


    // Function to cycle through the students profiles
    var next = function(e) {

        if (i <= max) {

            var innerName = document.querySelector("#name").querySelector("p");
            var innerAddress = document.querySelector("#address").querySelector("p");
            var innerGpa = document.querySelector("#gpa").querySelector("p");
            var innerAvgGpa = document.querySelector("#gpaavg").querySelector("p");
            var innerDate = document.querySelector("#date").querySelector("p");


            innerName.innerHTML = 'Name:  ' + studentProfiles[i].name;
            innerAddress.innerHTML = 'Address:  ' + studentProfiles[i].address.street + ' ' + studentProfiles[i].address.city + ' ' + studentProfiles[i].address.state;
            innerGpa.innerHTML = 'GPA:  ' + studentProfiles[i].gpa;
            innerDate.innerHTML = 'Date:  ' + studentProfiles[i].date.mmddyyyy();
            innerAvgGpa.innerHTML = 'Average GPA:  ' + studentProfiles[i].gpaAvg().toFixed(2); // LIMIT DECIMALS TO 2

        }

        // STOP ON THE LAST ELEMENT
        if (i == max) {
            button.onclick = "return false";
            document.querySelector('.buttonred').innerHTML = 'DONE!!!';
        }

        i++;
        return false;
        e.preventDefault();

    }
    
    // Binding the next function to the onclick event of the button
    button.onclick = next;

})();
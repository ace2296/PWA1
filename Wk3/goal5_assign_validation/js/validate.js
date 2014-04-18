/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
     Created by: Andre Guerr
     Date: 4/17/14
*/

(function(){

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.
        var username = document.querySelector('#f_username'),
            email = document.querySelector('#f_email'),
            phone = document.querySelector('#f_phone'),
            ssn = document.querySelector('#f_ssn'),
            password = document.querySelector('#f_password');
        
        validateField(username);  //id = is the form input field ID
        validateField(email);
        validateField(phone);
        validateField(ssn);
        validateField(password);


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        if (inputName.name === 'f_username'){
          var pattern = /^[A-Z]+(([\'\,\.\- ][A-Z])?[a-zA-Z]*)*$/;

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.


        }else if (inputName.name === 'f_email'){
          var pattern = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/
        }else if (inputName.name === 'f_phone'){
          var pattern = /^[\\(]{0,1}([0-9]){3}[\\)]{0,1}[ ]?([^0-1]){1}([0-9]){2}[ ]?[-]?[ ]?([0-9]){4}[ ]*((x){0,1}([0-9]){1,5}){0,1}$/
        }else if (inputName.name === 'f_ssn'){
          var pattern = /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/;
        }else if (inputName.name === 'f_password'){
          var pattern = /^[A-Za-z]\w{3,14}$/;
        };
          

        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper




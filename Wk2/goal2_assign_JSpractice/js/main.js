// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    
    var avgNumbers = function(arr){

        var sum = 0;

        for(i= 0, j = arr.length; i < j; i++){      //For loop to calculate sum of the array values
            sum = sum + arr[i];
        }
        var avg = sum / arr.length;                 //Divide sum of array by the array length to calculate avarage
        return avg;                                 //Return average
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

        //PUT FUNCTION HERE
        var fullName = function(firstname, lastname){       //function to concatenate first and last name into full name
        name = firstname.concat(" ", lastname);         //concat first and last name with a space in between
        return name;                                    //return full name
    };
        

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function";
		
		 var wordCount = function (str){

        return str.split(" ").length;           //Split string where there is a space and count the length
    };

    console.log(wordCount(ipsum));
	

    //--------------------------------------------------------
    console.log("4. sentence char count");

        var charCount = function (chc){
			var count = chc.length;
			return count;      
    };

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

      var vowelsInWord = function (word){
		var vowelCount = 0;
        for (i = 0, j = word.length; i < j; i++){       //Use for loop to check each character in a word
            switch (word.charAt(i)) {                   //Add one to vowelCount for each case
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    vowelCount++;
                    break;
            }
        }
        return vowelCount;                              //Return number of vowels
    };

    console.log(vowelsInWord('JavaScript'));
    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

     var findNum = function(arr2, odd) {
		var result = [];

    for (i = 0; i < arr2.length; i++) {
        if (odd ^ arr2[i] % 2 == 0) {
            result.push(arr2[i]);
        }
    }

    return result;
}
       
    console.log(findNum([31,22,4,67,83,6,5,4], true));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();
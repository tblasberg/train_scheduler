// 1. Create HTML
    // 1.1 Rows within the table train schedule will be dynamic
    // 1.2 create form to add the trains
// 2.  


// Javascript
// for the dynamic table, create var with <td> 

$( document).ready(function() {
    
    //Firebase 
    var config = {
        apiKey: "AIzaSyD9xmctqgu4_bnfbYO4TMcliydHPrNgJG4",
        authDomain: "catch-me-if-you-train.firebaseapp.com",
        databaseURL: "https://catch-me-if-you-train.firebaseio.com",
        projectId: "catch-me-if-you-train",
        storageBucket: "catch-me-if-you-train.appspot.com",
        messagingSenderId: "959107479035"
    };
    firebase.initializeApp(config);
    
    // Variable to reference the database.
    var database = firebase.database();

    //on.value  on firebase to check for information 
    //capture information from user input
    //send the information to firebase
    //add and append the info on html

    //initial values
    var trainInfo = {
        trainName : [],
        destination : [],
        trainTime : [],
        frequency : []
    }

  //how should I set var trainTime? As integer or string?
  //should I set frequency on an array, or set as 0?
    // var frequency = 0;


    database.ref().on("value", function(snapchot){
        if  (snapshot.child("trainName").exists() && snapshot.child("destination").exists() && snapshot.child("trainTime").exists() && snapshot.child("frequency").exists()){
            trainName = snapshot.val().trainName;
            destination = snapshot.val().destination;
            trainTime = snapshot.val().trainTime;
            frequency = snapshot.val().frequency;
        } 
        else{
            console.log("trainName "+ trainName);
            console.log("Destination "+ destination);
            console.log("trainTime "+ trainTime);
            console.log("Frequency "+ frequency);

        }














    })







    
    
});

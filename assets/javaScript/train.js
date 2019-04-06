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

    // 1) on.value  on firebase to check for information 
    // 2) capture information from user input
    // 3) send the information to firebase
    // 4) add and append the info on html

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

    // step 1
    database.ref().on("value", function(snapchot){
        if  (snapshot.child("trainInfo.trainName").exists() && snapshot.child("trainInfo.destination").exists() && snapshot.child("trainInfo.trainTime").exists() && snapshot.child("trainInfo.frequency").exists()){
            trainInfo.trainName = snapshot.val().trainName;
            trainInfo.destination = snapshot.val().destination;
            trainInfo.trainTime = snapshot.val().trainTime;
            trainInfo.frequency = snapshot.val().frequency;
        } 
        else{
            console.log("trainName "+ trainInfo.trainName);
            console.log("Destination "+ trainInfo.destination);
            console.log("trainTime "+ trainInfo.trainTime);
            console.log("Frequency "+ trainInfo.frequency);
        }


        // step 2
        $(".btn-submit").on("click", function(event){
            event.preventDefault();
             
            var name = $("#name").val().trim();
            var dest = $("#dest").val().trim();
            var time = $("#time").val().trim();
            var freq = $("#freq").val().trim();

            console.log(name);
            console.log(dest);
            console.log(time);
            console.log(freq);

            database.ref().set({
                trainInfo.trainName : name,
                highPrice: bidderPrice
              });

        })
        











    })







    
    
});

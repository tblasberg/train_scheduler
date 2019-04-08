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
    
    //how should I set var trainTime? As integer or string?
    //should I set frequency on an array, or set as 0?
    // var frequency = 0;
    
    // step 1
    database.ref().on("child_added", function(snapshot){

// DO THE MATH
        var train = snapshot.val();
        var now = moment(); 
        var firstTrain = moment(train.trainTime, "HH:mm").subtract(1, "days");
        var firstTrainDiff = now.diff(firstTrain, "minutes");
        console.log(firstTrainDiff);
        var remainder = firstTrainDiff % train.frequency;
        console.log(remainder);
        //how long until next train ( frequency minus the remainder)
        var untilNextTrain = train.frequency - remainder;
        console.log(untilNextTrain);
        var nextArrival = now.add(untilNextTrain, "minutes").format("HH:mm");
        console.log("Next arrival "+ nextArrival);


        var newRow = $("<tr>");
        $("<td>").text(train.trainName).appendTo(newRow);
        $("<td>").text(train.destination).appendTo(newRow);
        $("<td>").text(train.frequency).appendTo(newRow);
        $("<td>").text(nextArrival).appendTo(newRow);
        $("<td>").text(untilNextTrain).appendTo(newRow);


        $("#trainTable").append(newRow);



    })
        
        
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
            
            var trainInfo = {
                trainName : name,
                destination : dest,
                trainTime : time,
                frequency : freq
            }
            
            
            database.ref().push(trainInfo);
            $("#form").reset();
        })
        











    







    
    
});

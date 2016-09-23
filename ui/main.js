//counter

var button = document.getElementById('counter');
var counter=0;
button.onclick = function(){
    
    // Make a request to counter end point
    
    
    //Captue the response and store into the variable
    
    //Render the variable in counter sapn
    counter = counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};


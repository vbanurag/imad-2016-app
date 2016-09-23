//counter

var button = document.getElementById('counter');

button.onclick = function(){
    
    // create a request to counter end point
    var request = new  XMLHttpRequest();
    
    //Captue the response and store into the variable
    
    request.onreadychangestate = function(){
       if(request.readyState === XMLHttpRequest.DONE) 
       {
           //take some action
           if(request.status === 200)
           {
               document.getElementById('a').innerHTML= 'hello';
               var count = request.responseText;
               var span = document.getElementById('count');
               span.innerHTML = count.toString();
           }
       }
       //do nothing
    };
    //Make a Request
    request.open('GET','http://vbanurag.imad.hasura-app.io/counter',true);
    request.send(null);
    
};


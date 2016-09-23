//counter

var button = document.getElementById('counter');

button.onclick = function(){
    
    // create a request to counter end point
    var request = new  XMLHttpRequest();
    
    //Captue the response and store into the variable
    
    request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE) {
           //take some action
           if(request.status === 200){
               
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


var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //Make a request to send sever and snd a name
    // create a request to counter end point
    var request = new  XMLHttpRequest();
    
    //Captue the response and store into the variable
    
    request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE) {
           //take some action
           if(request.status === 200){
               
               var names = request.responseText;
               names = JSON.parse(names);
                var list = '';
                for (var i = 0; i<names.length; i++)
                {
                    list += '<li>' + names[i] +'</li>';
                }
                var ul = document.getElementById('nameList');
                ul.innerHTML = list;
            }
       }
       //do nothing
    };
    //Make a Request
    var inputName = document.getElementById('name');
    var nam = inputName.value;
    request.open('GET','http://vbanurag.imad.hasura-app.io/submit-names?name=' + nam,true);
    request.send(null);
    //capture the list of list and rebder as list
    
    
};
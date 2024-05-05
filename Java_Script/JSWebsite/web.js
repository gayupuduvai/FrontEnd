var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter = counter + 1;
    if(counter>5){
        counter = 1;
    }
}, 3000);
    

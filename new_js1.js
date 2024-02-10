// This defines my variable for the timer used in the motion.
var timerid = null;

// My function for the start of movement for my image.
function move()
{
document.getElementById('Mememan').style.right = 
    parseInt(document.getElementById('Mememan').style.right) + 1 + 'px';    
}

window.onload=function()
{   


// This is what I am indicating for my button to do.
document.getElementById('button1').onclick=function(){

    if(timerid == null){
        timerid = setInterval("move()", 10);
    }else{
        clearInterval(timerid);
        timerid = null;
    }
}   

// Now the final indication and command for my 2nd "stop" button to reset the image.
var button2 = document.getElementById('button2');
button2.onclick= reloadPage;

    function reloadPage(){
        window.location.reload();
    }

}

console.log(typeof 42)





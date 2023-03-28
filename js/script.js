
function showTime(){
    var timeline = new Date();
    var hours = timeline.getHours();
    var minutes = timeline.getMinutes();
    var seconds = timeline.getSeconds();

    
    if (hours == 24){
        hours=0
    }

    if(hours<=0 && hours>12){
    }

    hours = hours < 10 ? "0" + hours : hours; 
    minutes = minutes < 10 ? "0" + minutes : minutes; 
    seconds = seconds < 10 ? "0" + seconds : seconds; 

    var time = hours + ":" + minutes + ":" + seconds +" ";
    document.getElementById("clockDisplay").textContent = time;

    setTimeout(showTime)
}

showTime();



function validation(event){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var form = document.getElementById("form");
    var text;
    error_message.style.padding="10px";
    
    if(firstname.length <2 ){
        text = "*נא להכניס שם פרטי תקין";
        error_message.innerHTML = text;
        return false;
        
    }
    if(firstname.length > 10 ){
        text = "*נא להכניס שם פרטי תקין";
        error_message.innerHTML = text;
        return false;
    }

    if(lastname.length < 1 ){
        text = "*נא להכניס שם משפחה תקין";
        error_message.innerHTML= text;
        return false;
    }

    if(lastname.length >10 ){
        text = "*נא להכניס שם משפחה תקין";
        error_message.innerHTML= text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10 ){
        text= "*נא להכניס מספר טלפון תקין";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "*נא להכניס אימייל תקין"
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <= 30){
        text = "*נא להכניס הודעה באורך של 30 תווים לפחות";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length > 150){
        text = "*נא להכניס הודעה באורך קטן מ 150 תווים ";
        error_message.innerHTML = text;
        return false;
    }
    
    localStorage.setItem("firstname",firstname);
    localStorage.setItem("lastname",lastname);
    localStorage.setItem("phone",phone);
    localStorage.setItem("email",email);
    localStorage.setItem("message",message);
    error_message.style.padding="0px"
    text=""
    error_message.innerHTML = text;
    
    document.getElementById("firstname").style.display="none"
    document.getElementById("lastname").style.display="none"
    document.getElementById("phone").style.display="none"
    document.getElementById("email").style.display="none"
    document.getElementById("message").style.display="none"
    document.getElementById("btn").style.display="none"
    document.getElementById("text").style.display="none"
    document.getElementById("ppp").style.display="block"
    event.preventDefault();
    

    return true;
}





   
    

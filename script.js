
function login(){
    //cookies will expires after a min to test the login after change to 1h
    let dateExpiration = new Date();
    dateExpiration.setTime(dateExpiration.getTime()+ 1 * 600 * 1000);
    document.cookie = `user=${document.getElementById("user").value}; expires=${dateExpiration.toUTCString()}; path=/`;
    document.cookie = `password=${document.getElementById("password").value}; expires=${dateExpiration.toUTCString()}; path=/`;

    
    if(document.getElementById("user").value=="mahdi"
        && document.getElementById("password").value=="atmani"){
            const cookies = document.cookie;
            window.location.href='dashboard.html';
}else{
    if(document.getElementById("user").value==""){
        startShake();

    }else{
    startShake();
    var pass = document.getElementById("password").style.color="red";
    var pass = document.getElementById("user").style.color="red";
} 
}
}


function startShake() {
    const shakingText = document.getElementById('form-login');
    
    if (shakingText.classList.contains('shaking')) {
        shakingText.classList.remove('shaking');
    }
    
    // Trigger a reflow to restart the animation
    void shakingText.offsetWidth;
    
    shakingText.classList.add('shaking');
    setTimeout(function () {
        shakingText.classList.remove('shaking');
    }, 500);
}

// for education

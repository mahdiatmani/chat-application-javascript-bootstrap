function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

if(getCookie('user')=='mahdi' && getCookie('password')=='atmani'){
    let test =document.getElementById('test_cookies');
    test.innerHTML=document.cookie;
}else{
    window.location.href='login.html';
}
/*the loading code to make it fade in 2s*/
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        // hide the loader
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".logo").style.display = "none";
        
        // show the content
        document.querySelector(".content").style.display = "block";
    }, 2000);
});


/*check if the cookie are right*/



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



/*check if the cookie are right*/



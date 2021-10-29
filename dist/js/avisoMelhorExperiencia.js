const checkDevice = () => {
    // navigator.userAgent.match(/Windows/i)
    if(
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Phone/i) ||
        navigator.userAgent.match(/Windows Phone/i)
        ){
        
        return true;

    } else{
        return false;
    }
}

let mobileDevice = checkDevice()

if(mobileDevice){
    document.querySelector('.deviceAccess').classList.toggle('desapear');

    var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

    window.addEventListener(orientationEvent, function() {
        if(window.orientation === 0){
            alert("Para uma melhor experiência utilize seu smartphone na horizontal.");
            document.querySelector('.image-device').classList.remove('desapear');
            document.querySelector('.deviceAccess').classList.toggle('desapear');
            
        }else{
            document.querySelector('.image-device').classList.toggle('desapear');
            document.querySelector('.deviceAccess').classList.remove('desapear');
        }

    }, false);

}else{
    document.querySelector('.image-device').classList.toggle('desapear');
}

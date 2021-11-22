let likes = 0;
function doSomething() {
   
    const heart = document.querySelector('svg[aria-label="Like"][width="24"]');
    const arrow = document.querySelector('svg[aria-label="Next"]');
    if (heart) {
        heart.parentNode.parentElement.click()
        likes++;
        console.log(`You've liked ${likes} post(s)`);
    }
    //arrow.parentElement.parentElement.click();
}

(function loop() {
    var rand = Math.random() * 5000;
    console.log('Random Time'+rand)
    setTimeout(function() {
            //alert('A');
            doSomething();
            loop();  
    }, rand);
}());

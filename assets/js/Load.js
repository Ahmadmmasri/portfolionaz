document.addEventListener("DOMContentLoaded", function() {
    document.body.className += " loaded";
    window.setTimeout(function() {
            document.querySelector('body').classList.remove('loaded')
            window.open('./Main.html', '_self');
        }, 3000)
        // code
});
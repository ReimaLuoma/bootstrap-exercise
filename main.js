var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

//MODAL SETUP

setTimeout(function() {
	let myModal = document.getElementById("demo-modal");
}, 500);
document.querySelector('.contact').addEventListener("click", function(){
    //console.log(document.getElementById('msg'));
    document.querySelector(".emailpopup").classList.add('emailpopupactive');
});

document.querySelector(".emailpopup .close-btn").addEventListener("click",function(){
    document.querySelector(".emailpopup").classList.remove('emailpopupactive')
});


document.querySelector('.msg').addEventListener("click", function(){
    //console.log(document.getElementById('msg'));
    document.querySelector(".emailpopup").classList.add('emailpopupactive');
});

document.querySelector(".emailpopup .close-btn").addEventListener("click",function(){
    document.querySelector(".emailpopup").classList.remove('emailpopupactive')
});


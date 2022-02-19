function openNav(){
    document.getElementById("moba").style.display="flex"
    
}
function close_nav(){
    document.getElementById("moba").style.display="none"
}
function upScroll(){
    //document.body.scrollTop = 0;
    //document.documentElement.scrollTop = 0;
    window.scroll({top: 0, behavior: 'smooth'});
}
window.onscroll=function() {scrollFunction()};

function scrollFunction(){
    let button=document.getElementById("upbtn")
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500 ){
        button.style.display="block"
    }
    else{
        button.style.display="none"
    }
}

function doc_btn(){
    document.getElementById("priemlog").style.display="flex"    
}

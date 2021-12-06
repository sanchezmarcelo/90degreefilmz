function redirectToInstagram(){
    window.location.href = "https://instagram.com/90degreefilmz?igshid=f9eghitdgg5g";       
}
function redirectToYoutube(){
    window.location.href = "https://www.youtube.com/channel/UCJbVi4Jy9Qqx0ULZkMZGSgQ";       
}
function redirectToFacebook(){
    window.location.href = "https://www.facebook.com/jay.harris.1217727";       
}

function toggleNav(){
    var x = document.getElementsByClassName("navMobile");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
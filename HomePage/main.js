// Navigation Bar
$("ul li").hover(
    function () {
        if (window.innerWidth > 768) {
            $(this).children(".inside").css({ "transition": "all 0.5s ease-out", "opacity": "1", "visibility": "visible", "top": "30px" })
        }


    },
    function () {
        if (window.innerWidth > 768) {
            $(this).children(".inside").css({ "transition": "all 0.3s ease-out", "opacity": "0.5", "visibility": "hidden", "top": "130px" })
        }

    }
)
var search = document.getElementById("searchInput")
search.style.visibility = "hidden"
$("#searchBar").click(function () {
    console.log(search.style.visibility)
    if (search.style.visibility == "hidden") {

        $(this).children("#searchInput").css({ "transition": "all 0.3s ease-out", "visibility": "visible", "top": "35px" })
    }
    else {
        $(this).children("#searchInput").css({ "transition": "all 0.1s ease-out", "visibility": "hidden", "top": "130px" })
    }


})



var elem = document.querySelector("#nav-list")
$(window).resize(
    function () {
        if (window.innerWidth > 768) {
            $("#nav-list").removeClass("insideVis")
            $("#searchInput").width("300px")
        }
    })
$("#toggle").click(
    function () {
        $("#nav-list").toggleClass("insideVis")
    }

)

// Create Section
var fadeElement = document.getElementById("fadeElement")
fadeElement.style.display = "inline-block"
//Create Animation


// ExplainWork Section



$(".circle").click(function () {
    $("#videOverlay").append(' <iframe id="youtubeVideo" src=" " frameborder="0" allow="autoplay"></iframe>')
    $("iframe").attr("src", "https://www.youtube-nocookie.com/embed/hw2smSOJIv4?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1 ")
    $("#videOverlay").css({ "display": "block" })

})

var imgSources=["1-project.jpg","2-project.jpg","3-project.jpg","4-project.jpg","5-project.jpg","6-project.jpg"]


// Our Projects
$(".gallery-img").click(function () {
    $("#videOverlay").css({ "display": "block" })
    $("#videOverlay").append("<div class='imagesBox'>"
   + "<img id='bigImages' src='../images/"+imgSources[i]+"' alt=''></div>"
+"<div id='btn-group'>"
         +"<div id='right-btn' class=' btn'>"
               +  "<i class='fas fa-arrow-right'></i>  </div>"
            +"<div id='left-btn' class=' btn'>"
                    +"<i class='fas fa-arrow-left '></i> </div> </div>")
})
var i=0

function moveLeft(){
    if(i==imgSources.length-1){
        i=-1

    }
     var myImg=document.getElementById("bigImages")
    myImg.src="../images/"+imgSources[i+1]
            i=i+1
}
function moveRight(){
    if(i==0){
        i=imgSources.length
    }
 
    var myImg=document.getElementById("bigImages")
    myImg.src="../images/"+imgSources[i-1]
    i=i-1
}

$(window).click(function (e) {
    console.log(e.target.id)
    if (e.target.id == "searchText") {
        $("#searchInput").css({
            "position": "absolute",
            "top": "30px",
            "right": "-10px",
            "visibility": "visible"

        })
    }
    if (e.target.id != "searchIcon" && search.style.visibility != "hidden" && e.target.name != "search") {
        $("#searchInput").css({ "transition": "all 0.1s ease-out", "visibility": "hidden", "top": "30px", "right": "-10px" })
    }
    if (e.target.id == "videOverlay") {
        if(  $("iframe").attr("src")!=" "){
            $("iframe").attr("src", " ")

        }
       
        $("#videOverlay").css({ "display": "none" })
        $("#videOverlay").children().remove()
    }
    if(e.target.id=="left-btn"){
         $("#left-btn").click(moveLeft)
        
       
    }
    if(e.target.id=="right-btn"){
        $("#right-btn").click(moveRight)
   }

})
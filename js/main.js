var ratingContainer = document.querySelector(".rating-option")
var ratings = ratingContainer.getElementsByClassName("star-value")

for(var i = 0; i < ratings.length; i++){
    ratings[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("selected")
        if (current.length > 0){
            current[0].className = current[0].className.replace(" selected", "")
        }
        this.className += " selected"
    })
}

const submitbtn = document.querySelector(".submit")
submitbtn.addEventListener("click", () => {
    for(var i = 0; i < ratings.length; i++){
        if(ratings[i].classList.contains("selected")){
            document.getElementById("result").textContent = i + 1
        }
    }
    document.querySelector(".rating").style.display = "none"
    document.querySelector(".thankyou-state").style.display = "flex"
})
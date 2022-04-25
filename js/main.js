const selectedRating = Array.from(document.querySelectorAll(".star-value"))

selectedRating.forEach((e) => {
    e.addEventListener("click", () => {
        selectedRating.forEach((e) => {
            e.classList.remove("selected")
        })
        e.classList.add("selected")
    })
})
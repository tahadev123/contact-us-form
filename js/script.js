const inputQuery = document.querySelectorAll(".input-query")
const queryBox = document.querySelectorAll(".query-box")
const submitButton = document.querySelector(".submit")
const message = document.querySelector(".message-box")

const submitHandler = () => {
    message.style.display = "block"
    setTimeout(() => {
        message.style.display = "none"
    }, 3000);
}

const activeQueryHandler = (index) => {
    queryBox[index].classList.add("active")
    if (index === 1) {
        queryBox[0].classList.remove("active")
    } else {
        queryBox[1].classList.remove("active")
    }
}

submitButton.addEventListener("click", submitHandler)
inputQuery.forEach((item, index) => {
    item.addEventListener("click", () => activeQueryHandler(index))
})
const adviceId = document.getElementById("id")
const advice = document.getElementById("advice")
const button = document.getElementById("btn")

getAdvice()



button.addEventListener("click", getAdvice)


 function getAdvice() {
    const config = {
        headers: {
            Accept: "application/json"
        },
    }

    fetch("https://api.adviceslip.com/advice", config)
    .then((res) => res.json())
    .then((data) => {
        advice.innerHTML = data.slip.advice
        adviceId.innerHTML = data.slip.id
    })



}
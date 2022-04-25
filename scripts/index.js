// Store the wallet amount to your local storage with key "amount"

let money = JSON.parse(localStorage.getItem("amount"))

document.querySelector("#add_to_wallet").addEventListener("click", function() {

    let mon = document.querySelector("#amount").value

    document.querySelector("#wallet").innerText = money

    localStorage.setItem("amount", mon)

})




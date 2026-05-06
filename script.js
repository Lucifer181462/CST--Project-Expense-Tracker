let text = document.getElementById("text")
let amount = document.getElementById("amount")
let type = document.getElementById("type")
let date = document.getElementById("date")
let btn = document.getElementById("btn")

let income = document.getElementById("income")
let expense = document.getElementById("expense")
let balance = document.getElementById("balance")
let history = document.getElementById("history")

let totalIncome = 0
let totalExpense = 0

btn.onclick = function () {

    let textValue = text.value
    let amountValue = Number(amount.value)
    let typeValue = type.value
    let dateValue = date.value



    if(typeValue == "Income"){
        totalIncome = totalIncome + amountValue
    }
    else{
        totalExpense = totalExpense + amountValue
    }

    let totalBalance = totalIncome - totalExpense

    income.innerHTML = "Rs. " + totalIncome
    expense.innerHTML = "Rs. " + totalExpense
    balance.innerHTML = "Rs. " + totalBalance

    
    let div = document.createElement("div")
    div.className = "txn"

    if(typeValue == "Income"){
        div.innerHTML = `
        <div>
            <div class="name">${textValue}</div>
            <div class="date">${dateValue}</div>
        </div>

        <div class="amt-in">+Rs. ${amountValue}</div>
        `
    }

    else{
        div.innerHTML = `
        <div>
            <div class="name">${textValue}</div>
            <div class="date">${dateValue}</div>
        </div>

        <div class="amt-out">-Rs. ${amountValue}</div>
        `
    }

    history.appendChild(div)

    text.value = ""
    amount.value = ""
    date.value = ""
}
console.log('new')
const billamount = document.getElementById('bill-amount')
const cashpayed = document.getElementById('cash-pay')
const check = document.getElementById('to-check')
const errormessage = document.getElementById('error-message')
const nonotes = document.getElementsByClassName('no-notes') 
console.log(nonotes)
const amtArray = [2000, 500, 100, 50, 20, 10]
check.addEventListener('click', () => {
    errormessage.style.display = "none"
    if (billamount.value > 0) {
        if (billamount.value <= cashpayed.value) {
            let cashReturn = cashpayed.value - billamount.value
            cashReturnToPay(cashReturn)

        } else {
            showMessage("amount is less than to pay")

        }
    } else {
        showMessage("No amount found")
    }
})

function showMessage(msg) {
    console.log(msg)
    errormessage.style.display = 'block'
    errormessage.innerHTML = msg
}

function cashReturnToPay(cashReturn) {
    for (let index = 0; index < amtArray.length; index++) {
        console.log(cashReturn)
        let noOfNotes = Math.trunc(cashReturn/amtArray[index])
        console.log('nu',noOfNotes)
        cashReturn %= amtArray[index]
        nonotes[index].innerText = noOfNotes
        
    }
        
}
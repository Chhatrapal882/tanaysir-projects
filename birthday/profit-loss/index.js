let intialPrice = document.querySelector('#initial-price')
let stocks = document.querySelector('#no-of-stocks')
let currentPrice = document.querySelector('#current-price')
let submitbtn = document.querySelector('#submit')
let message = document.querySelector('#output')
submitbtn.addEventListener('click', () => {
    const ip = intialPrice.value
    const s = stocks.value
    const cp = currentPrice.value
    console.log(ip, s, cp)
    calculateProfitAndLoss(ip, s, cp)
})

function calculateProfitAndLoss(initialprice, stocks, currentprice) {
    console.log(initialprice, stocks, currentprice)
    if (initialprice > currentprice) {
        let loss = (initialprice - currentprice) * stocks
        let lossPercentage = (loss / initialprice) * 100
        sendMessage(`The loss is ${loss} and the loss in percentage is ${lossPercentage}%`)
        message.style.color = "red"

    } else if (currentprice > initialprice) {
        let profit = (currentprice - initialprice) * stocks
        let ProfitPercentage = (profit / initialprice) * 100
        sendMessage(`The profit is ${profit} and the profit in percentage is ${ProfitPercentage}%`)
        message.style.color = "green"
    } else {
        sendMessage('No pain No gain')
        message.style.color = "blue"
    }
}

function sendMessage(msg) {
    message.innerHTML = msg
}   
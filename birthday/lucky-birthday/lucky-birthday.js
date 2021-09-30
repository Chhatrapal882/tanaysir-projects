
const dateofBirth = document.getElementById('dob')
const LuckyNumber = document.getElementById('lucky-number')
const check = document.getElementById('submitbtn')
const message = document.getElementById('result')

function checkLuckyOrNot() {
    const d = dateofBirth.value.replaceAll('-', '')
    let splitDate = d.split('')
    let sum = 0
    var total = 0
    for (let i = 0; i < splitDate.length; i++) {
        sum = sum + Number(splitDate[i])
        // console.log(sum)
        total = sum % LuckyNumber.value

    }
    if(total == 0 ){
        display('yay! you are lucky')
        messasge.style.color = "green"
    }else{
        display('ohh! you are not lucky')
        messasge.style.color = "red "
    }
}
    function display(msg) {
           message.innerHTML = msg 
    }
check.addEventListener('click', checkLuckyOrNot)




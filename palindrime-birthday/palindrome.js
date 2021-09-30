const reverseStr = (str) => {
    const revsersedStr = str.split("").reverse().join("")
    return revsersedStr

}

const ispalidrome = (str) => {
    var reverse = reverseStr(str)
    if (str == reverse) {
        return true
    }
    else {
        return false
    }
}
ispalidrome('saas')

const convertDateToString = (date) => {
    var dateStr = { day: '', month: '', year: '' }
    if (date.day < 10) {
        dateStr.day = '0' + date.day
    } else {
        dateStr.day = date.day.toString()
    }
    if (date.month < 10) {
        dateStr.month = '0' + date.month
    } else {
        dateStr.month = date.month.toString()
    }
    dateStr.year = date.year.toString()

    return dateStr
}
const getAllDateFormats = (date) => {
    var dateStr = convertDateToString(date)
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.year
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2)
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2)
    var yymmdd = dateStr.year.slice('-2') + dateStr.month + dateStr.year

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]
}

function checkPalindromeforAllDate(date) {
    var listofAllPalidrme = getAllDateFormats(date)
    var flag = false
    for (let i = 0; i < listofAllPalidrme.length; i++) {

        if (ispalidrome(listofAllPalidrme[i])) {
            flag = true;
        }

    }
    return flag
}


function isLeapYear(year) {
    if (year % 400 === 0) {
        return true
    } if (year % 100 === 0) {
        return false
    } if (year % 4 === 0) {
        return true
    }
    return false
}

function getNextDate(date) {
    var day = date.day + 1
    var month = date.month
    var year = date.year

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    // check for feb
    if (month === 2) {
        if (isLeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++
            } else {
                if (day > 28) {
                    day = 1
                    month++
                }
            }
        }
    }
    // check for other months
    else {
        // check if the date is exceeds max days in a month
        if (day > daysInMonth[month - 1]) {
            day = 1
            month++
        }
    }
    // increment the year if the month is greater than 12
    if (month > 12) {
        month = 1
        year++
    }
    return {
        day: day,
        month: month,
        year: year
    }
}
function getNextPalindromeDate(date) {
    var ctr = 0
    var nextDate = getNextDate(date)
    while (1) {
        ctr++;
        var isPalindorme = checkPalindromeforAllDate(nextDate)
        if (isPalindorme) {
            break

        }
        nextDate = getNextDate(nextDate)
    }
    return [ctr, nextDate]
}
var date = {
    day: 31,
    month: 01,
    year: 2020

}
// console.log(getNextPalindromeDate(date))

const inputref = document.getElementById('input-bday')
const showBtnref = document.getElementById('showbtn')
const result = document.getElementById('result')

const clickHandler = () => {
    const bdayStr = inputref.value
    console.log(bdayStr)
    if (bdayStr !== 0) {
        var listOfDate = bdayStr.split('-')
        console.log(listOfDate)
        var date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0]),
        }
        console.log(date)
        var ispallidrome = getNextPalindromeDate(date)
        console.log(ispallidrome)
        if (ispallidrome) {
            result.innerText = "Yay! your birthday is a palidrome !!"
        } else {
            var [ctr, nextDate] = getNextPalindromeDate(date)
            result.innerText = `The next palindrome dats is ${nextDate.day}-
        ${nextDate.month}-${nextDate.year},you missed it ${ctr} days`
        }
    }
}
showBtnref.addEventListener('click', clickHandler)
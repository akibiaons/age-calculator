const DayError = document.querySelector('.day-error');
const MonthError = document.querySelector('.month-error');
const YearError = document.querySelector('.year-error');
const YearResult = document.querySelector('.year-result');
const MonthResult = document.querySelector('.month-result');
const DayResult = document.querySelector('.day-result');
const SubmitBtn = document.querySelector('.btn');
const InputDay = document.querySelector('day');
const InputMonth = document.querySelector('month');
const InputYear = document.querySelector('year');
const InputRequiredError = 'This field is required';
const InputDayError = 'Must be a valid day';
const InputMonthError = 'Must be a valid month';
const InputYearError = 'Must be in the past';
const canvar = document.querySelector('.can');
// Above we declare some variables for the calculator form.

function CheckDayInput () {
    let value = InputDay.value;
    if (value == '') {
        DayError.innerHTML = InputRequiredError;
        return false;
    } else if (value < 1 || value > 31){
        DayError.innerHTML = InputDayError;
        return false;
    } else {
        DayError.innerHTML = '';
        return true;
    }
};
// Above is a function that checks for the day input to ensure the correct values.
function CheckMonthInput () {
    let value = InputMonth.value;
    if (value == '') {
        MonthError.innerHTML = InputRequiredError;
    } else if (value < 1 || value > 12) {
        MonthError.innerHTML = InputMonthError;
        return false;
    } else {
        MonthError.innerHTML = '';
        return true;
    }
};

function CheckYearInput () {
    let value = InputYear.value;
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    if (value == '') {
        YearError.innerHTML = InputRequiredError;
        return false;
    } else if (value > currentYear) {
        YearError.innerHTML = InputYearError;
        return false;
    } else {
        YearError.innterHTML = '';
        return true;
    }
};
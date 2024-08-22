function dayFinder() {

    //Year last two number and Quotient of that number
    const year = document.getElementById('year');
    const yearInput = year.value;
    
    // To check range and prevent form submission
    if (yearInput < 1000 || yearInput > 9999) {
        alert('Please enter a year between 1000 and 9999.');
        event.preventDefault(); 
    }

    if (!yearInput) return;

    const yeartoString = yearInput.toString();
    const yearLastTwoNumber = Number(yeartoString[2] + yeartoString[3]);
    const yearQuotient = Math.floor(yearLastTwoNumber / 4);

    //Century Code
    const yearFirstTwoNumber = Number(yeartoString[0] + yeartoString[1]);
    let yearReminder = (yearFirstTwoNumber % 4);

    let centuryCode;

    if (yearReminder == 0) {
        centuryCode = 6;
    }
    else if (yearReminder == 1) {
        centuryCode = 4;
    }
    else if (yearReminder == 2) {
        centuryCode = 2;
    }
    else {
        centuryCode = 0;
    }

    //Month Code
    const month = document.getElementById('month');
    const monthInput = month.value;

    if (monthInput < 1 || monthInput > 12) {
        alert('Please enter a valid month between 1 and 12.');
        event.preventDefault();
    }

    const monthtoString = monthInput.toString();


    let monthCode;

    if (monthtoString == 1) {
        monthCode = 0;
    }
    else if (monthtoString == 2) {
        monthCode = 3;
    }
    else if (monthtoString == 3) {
        monthCode = 3;
    }
    if (monthtoString == 4) {
        monthCode = 6;
    }
    else if (monthtoString == 5) {
        monthCode = 1;
    }
    else if (monthtoString == 6) {
        monthCode = 4;
    }
    if (monthtoString == 7) {
        monthCode = 6;
    }
    else if (monthtoString == 8) {
        monthCode = 2;
    }
    else if (monthtoString == 9) {
        monthCode = 5;
    }
    if (monthtoString == 10) {
        monthCode = 0;
    }
    else if (monthtoString == 11) {
        monthCode = 3;
    }
    else if (monthtoString == 12) {
        monthCode = 5;
    }
    else {

    }

    //Date
    const day = document.getElementById('day');
    const dayInput = day.value;

    if (dayInput < 1 || dayInput > 31) {
        alert('Please enter a valid day between 1 and 31.');
        event.preventDefault();
    }

    const daytoString = dayInput.toString();
    const dayNumber = Number(daytoString);

    //Addition of all the values
    const weekDayValue = yearLastTwoNumber + yearQuotient + centuryCode + monthCode + dayNumber;
    const additionValueReminder = (weekDayValue % 7);

    //Day Code
    let dayCode; 

    if (additionValueReminder == 0) {
        dayCode = 'Sunday';
    }
    else if (additionValueReminder == 1) {
        dayCode = 'Monday';
    }
    else if (additionValueReminder == 2) {
        dayCode = 'Tuesday';
    }
    else if (additionValueReminder == 3) {
        dayCode = 'Wednesday';
    }
    if (additionValueReminder == 4) {
        dayCode = 'Thursday';
    }
    else if (additionValueReminder == 5) {
        dayCode = 'Friday';
    }
    else if (additionValueReminder == 6) {
        dayCode = 'Saturday';
    }
    else {

    }

    //Day Finding
    const weekDay = document.getElementById("week-day");
    weekDay.innerHTML = dayCode;
}

// Day Finder Button
const submitBTN = document.getElementById('submit-btn');
submitBTN.addEventListener("click", dayFinder);
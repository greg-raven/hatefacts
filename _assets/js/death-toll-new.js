// Set the constants
const theYear = 2023; // change only this number at the beginning of each year
const deathsPerDay = 25; // the approximate number of deaths per day
const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

// Update the output fields
function countUp(yr, m, d, target) {
    const today = new Date();
    const todayY = today.getFullYear();
    const todayM = today.getMonth();
    const todayD = today.getDate();
    const todayString = `${monthArray[todayM]} ${todayD}, ${todayY}`;
    const pastString = `${monthArray[m - 1]} ${d}, ${yr}`;
    const difference = Math.round(
        (Date.parse(todayString) - Date.parse(pastString)) / (24 * 60 * 60 * 1000)
    );
    const number = difference * deathsPerDay;
    const usFormat = number.toLocaleString("en-US");
    document.getElementById(target).textContent = usFormat;
}

countUp(theYear, 1, 1, "number1");
document.getElementById("number2").textContent = theYear;
countUp(2001, 9, 11, "number3");

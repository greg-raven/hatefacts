$(document).ready(() => {
    const theYear = 2023; // change only this number at the beginning of each year
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
        const number = difference * 12; // 12 = the approximate number of deaths per day
        const usFormat = number.toLocaleString("en-US");
        $(target).text(usFormat);
    }

    countUp(theYear, 1, 1, "#number1");
    $("#number2").text(theYear);
    countUp(2001, 9, 11, "#number3");
});

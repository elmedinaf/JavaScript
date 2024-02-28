const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

const holidaysData = {
    January: ["New Year's Day", "Martin Luther King Day"],
    February: ["Valentine's Day", "Presidents' Day"],
    March: ["St. Patrick's Day", "Easter"],
    April: ["Earth Day", "Eid al-Fitr"],
    May: ["Cinco de Mayo", "Mother's Day"],
    June: ["Father's Day", "Flag Day"],
    July: ["Independence Day", "Ashura"],
    August: ["Book Lover's Day", "Friendship Day"],
    September: ["Labor Day", "World Letter Writing Day"],
    October: ["Columbus Day", "Halloween"],
    November: ["Veteran's Day", "Thanksgiving"],
    December: ["Christmas Day", "Hanukkah"],
};

const holidaysContainer = document.getElementById("holidaysContainer");

let holidaysHtml = '';

    for (let i = 0; i < months.length; i++) {
        const month = months[i];
        const holidays = holidaysData[month];

        holidaysHtml += `<div><h2>${month}</h2>`;

        if (holidays) {
            holidaysHtml += "<ul>";
            for (let j = 0; j < holidays.length; j++) {
                const holiday = holidays[j];
                holidaysHtml += `<li>${holiday}</li>`;
            }
            holidaysHtml += "</ul>";
        } else {
            holidaysHtml += "<p>No holidays found for this month.</p>";
        }

        holidaysHtml += "</div>";
    }

    holidaysContainer.innerHTML = holidaysHtml;

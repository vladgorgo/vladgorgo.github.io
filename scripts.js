function getYearsDifference(startDate) {
    const currentDate = new Date(); // Get today's date
    const start = new Date(startDate); // Convert the start date to a Date object

    let yearsDiff = currentDate.getFullYear() - start.getFullYear(); // Initial difference in years
    const isBeforeBirthday = (currentDate.getMonth() < start.getMonth()) || 
                             (currentDate.getMonth() === start.getMonth() && currentDate.getDate() < start.getDate());

    // If the current date is before the start date's month/day, subtract one year
    if (isBeforeBirthday) {
        yearsDiff--;
    }

    return yearsDiff;
}

const currentYear = new Date().getFullYear();

document.getElementById("aniExperienta").textContent = getYearsDifference("1993-01-19");
document.getElementById("aniExperienta2").textContent = getYearsDifference("1993-01-19");
document.getElementById("anCurent").textContent = currentYear;


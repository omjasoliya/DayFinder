document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dateInput = document.getElementById('date').value;
    const date = new Date(dateInput);

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[date.getDay()];

    document.getElementById('result').innerText = `The day is: ${dayName}`;
});

document.getElementById('toggleMode').addEventListener('change', function() {
    document.body.classList.toggle('night-mode');
});

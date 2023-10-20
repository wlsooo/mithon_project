/* JavaScript */
document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.querySelector('.calendar .days');
    const currentMonthElement = document.querySelector('.calendar .current-month');
    const prevMonthElement = document.querySelector('.calendar .prev-month');
    const nextMonthElement = document.querySelector('.calendar .next-month');

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

    function updateCalendar() {
        calendarBody.innerHTML = '';
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
        const firstDayOfWeek = firstDayOfMonth.getDay();

        for (let i = 0; i < firstDayOfWeek; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('day');
            calendarBody.appendChild(emptyDay);
        }

        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = i;

            if (currentYear === currentDate.getFullYear() && currentMonth === currentDate.getMonth() && i === currentDate.getDate()) {
                dayElement.classList.add('today');
            }

            const currentDay = new Date(currentYear, currentMonth, i).getDay();
            if (currentDay === 6) {
                dayElement.classList.add('saturday');
            } else if (currentDay === 0) {
                dayElement.classList.add('sunday');
            }

            calendarBody.appendChild(dayElement);
        }
    }

    function updateMonth() {
        currentMonthElement.textContent = `${currentYear}년 ${currentMonth + 1}월`;
        updateCalendar();
    }

    prevMonthElement.innerHTML = '<i class="bi bi-chevron-left"></i>';
    nextMonthElement.innerHTML = '<i class="bi bi-chevron-right"></i>';

    prevMonthElement.addEventListener('click', function() {
        if (currentMonth === 0) {
            currentYear--;
            currentMonth = 11;
        } else {
            currentMonth--;
        }
        updateMonth();
    });

    nextMonthElement.addEventListener('click', function() {
        if (currentMonth === 11) {
            currentYear++;
            currentMonth = 0;
        } else {
            currentMonth++;
        }
        updateMonth();
    });

    updateMonth();
});

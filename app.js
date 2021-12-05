function updateTime() {
    var currentDate = new Date();
    if (currentDate.getMinutes() <= 9) {
        var time = currentDate.getHours() + ":0" + currentDate.getMinutes();
    } else {
        var time = currentDate.getHours() + ":" + currentDate.getMinutes();
    }
    document.querySelector("#time-sub").innerHTML = time;
    document.querySelector("#time-main").innerHTML = time;

    var day = currentDate.getDay();
    if (day == 0) {
        document.querySelector("#date-main").innerHTML = "Sunday";
    }
    if (day == 1) {
        document.querySelector("#date-main").innerHTML = "Monday";
    }
    if (day == 2) {
        document.querySelector("#date-main").innerHTML = "Tuesday";
    }
    if (day == 3) {
        document.querySelector("#date-main").innerHTML = "Wednesday";
    }
    if (day == 4) {
        document.querySelector("#date-main").innerHTML = "Thursday";
    }
    if (day == 5) {
        document.querySelector("#date-main").innerHTML = "Friday";
    }
    if (day == 6) {
        document.querySelector("#date-main").innerHTML = "Saturday";
    }
}

const inner_main = document.querySelector(".inner-main");


var interval = setInterval(updateTime, 0);

const icons = document.querySelectorAll(".watchIcon");
icons.forEach(icon => {
    icon.classList.add("iconActive");
})

function openMessage(e) {
    if (!e.target.classList.contains("class") && !e.target.classList.contains("msg")) return;
    main.innerHTML = `
    <div class="message-content">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quos ab fugiat nesciunt minus.</span>
        <hr class="below-Message">
    </div>          
    `
}


const main = document.querySelector(".main-section");
main.addEventListener("click", openMessage);
var startStopPause = "play";
let minutes = 0,
    seconds = 0,
    hours = 0,
    days = 0,
    months = 0,
    years = 0,
    sec = 0,
    min = 0,
    day = 0,
    hour = 0,
    month = 0,
    year = 0;

var fun = "fas fa-play";
var fun2 = "start";

function showIconSection() {
    clearInterval(interval);
    icons.forEach(icon => {
        if (icon === this && this.dataset.name === "clock") { //only for clock button
            if (this.classList.contains("iconActive")) {
                icon.classList.remove("iconActive");
                if (this.dataset.name === "clock") {
                    if (seconds < 10) {
                        sec = '0' + seconds;
                    } else {
                        sec = seconds;
                    }
                    if (minutes < 10) {
                        min = '0' + minutes;
                    } else {
                        min = minutes;
                    }
                    if (hours < 10) {
                        hour = '0' + hours;
                    } else {
                        hour = hours;
                    }
                    if (days < 10) {
                        day = '0' + days;
                    } else {
                        day = days;
                    }
                    if (months < 10) {
                        month = '0' + months;
                    } else {
                        month = months;
                    }
                    if (years < 10) {
                        year = '0' + years;
                    } else {
                        year = years;
                    }
                    main.innerHTML = `
                            <div class="inner-main">
                                <div class="main-stopTime">
                                    <p><span class="years">${year}</span>:<span class="months">${month}</span>:<span class="days">${day}</span></p>
                                </div>
                                <div class="sub-stopTime">
                                    <p><span class="hours">${hour}</span>:<span class="minutes">${min}</span>:<span class="seconds">${sec}</span></p>
                                </div>
                                <div class="stop-icons">
                                    <i class="fas fa-redo" data-stop="redo"></i>
                                    <div class="startStop"><i class="${fun}" data-stop="${fun2}"></i></div>
                                    <i class="fas fa-stop" data-stop="stop"></i>
                                </div>
                            </div>                 
                            `
                }
            } else {
                this.classList.add("iconActive");
                main.innerHTML = `
                        <div class="inner-main">
                        <div class="inner-time">
                            <h4 class="time-main" id="time-main"></h4>
                            <p class="date-main" id="date-main"></p>
                        </div>
                        </div>
                `
                interval = setInterval(updateTime, 0);
            }
        } else {
            // icon.classList.add("iconActive");
        }
    });
}


icons.forEach(icon => icon.addEventListener("click", showIconSection));

function increaseTime() {
    seconds++;
    if (seconds >= 59) {
        minutes++;
    }
    if (minutes >= 59) {
        hours++;
    }
    if (hours >= 23) {
        days++;
    }
    if (days >= 30) {
        months++;
    }
    if (months >= 11) {
        years++;
    }
    if (document.querySelector(".seconds") != null) {
        if (seconds < 10) {
            document.querySelector(".seconds").innerHTML = '0' + seconds;
        } else {
            document.querySelector(".seconds").innerHTML = seconds;
        }
    }
    if (document.querySelector(".minutes") != null && seconds == 59) {
        if (minutes < 10) {
            document.querySelector(".minutes").innerHTML = '0' + minutes;
        } else {
            document.querySelector(".minutes").innerHTML = minutes;
        }
        seconds = 0;
    }
    if (document.querySelector(".hours") != null && minutes == 59) {
        if (hours < 10) {
            document.querySelector(".hours").innerHTML = '0' + hours;
        } else {
            document.querySelector(".hours").innerHTML = hours;
        }
        minutes = 0;
    }
    if (document.querySelector(".days") != null && hours == 234) {
        if (days < 10) {
            document.querySelector(".days").innerHTML = '0' + days;
        } else {
            document.querySelector(".days").innerHTML = days;
        }
        hours = 0;
    }
    if (document.querySelector(".months") != null && days == 30) {
        if (months < 10) {
            document.querySelector(".months").innerHTML = '0' + months;
        } else {
            document.querySelector(".months").innerHTML = months;
        }
        days = 0;
    }
    if (document.querySelector(".years") != null && months == 11) {
        if (years < 10) {
            document.querySelector(".years").innerHTML = '0' + years;
        } else {
            document.querySelector(".years").innerHTML = years;
        }
        months = 0;
    }

}


var inter;
const stopPausePlay = (e) => {
    if (e.target.dataset.stop == "start") {
        fun = "fas fa-pause";
        fun2 = "pause";
        document.querySelector(".startStop").innerHTML = `<i class="fas fa-pause" data-stop="pause"></i>`;

        if (inter) {
            clearInterval(inter);
        }
        if (seconds == 0 && minutes == 0 && hours == 0 && months == 0 && days == 0 && years == 0) {
            document.querySelector(".seconds").innerHTML = '00';
            document.querySelector(".minutes").innerHTML = '00';
            document.querySelector(".hours").innerHTML = '00';
            document.querySelector(".days").innerHTML = '00';
            document.querySelector(".months").innerHTML = '00';
            document.querySelector(".years").innerHTML = '00';
        }
        inter = setInterval(increaseTime, 1000);

    } else if (e.target.dataset.stop == "redo") {
        clearInterval(inter);
        document.querySelector(".startStop").innerHTML = `<i class="fas fa-play" data-stop="start"></i>`;
        document.querySelector(".seconds").innerHTML = '00';
        document.querySelector(".minutes").innerHTML = '00';
        document.querySelector(".hours").innerHTML = '00';
        document.querySelector(".days").innerHTML = '00';
        document.querySelector(".months").innerHTML = '00';
        document.querySelector(".years").innerHTML = '00';
        seconds = 0;
        minutes = 0;
        hours = 0;
        days = 0;
        months = 0;
        years = 0;
    } else if (e.target.dataset.stop == "pause") {
        fun = "fas fa-play";
        fun2 = "start";
        document.querySelector(".startStop").innerHTML = `<i class="fas fa-play" data-stop="start"></i>`;
        clearInterval(inter);
        if (seconds < 10) {
            document.querySelector(".seconds").innerHTML = '0' + seconds;
        } else {
            document.querySelector(".seconds").innerHTML = seconds;
        }
        if (minutes < 10) {
            document.querySelector(".minutes").innerHTML = '0' + minutes;
        } else {
            document.querySelector(".minutes").innerHTML = minutes;
        }
        if (hours < 10) {
            document.querySelector(".hours").innerHTML = '0' + hours;
        } else {
            document.querySelector(".hours").innerHTML = hours;
        }
        if (days < 10) {
            document.querySelector(".days").innerHTML = '0' + days;
        } else {
            document.querySelector(".days").innerHTML = days;
        }
        if (months < 10) {
            document.querySelector(".months").innerHTML = '0' + months;
        } else {
            document.querySelector(".months").innerHTML = months;
        }
        if (years < 10) {
            document.querySelector(".years").innerHTML = '0' + years;
        } else {
            document.querySelector(".years").innerHTML = years;
        }
    } else if (e.target.dataset.stop == "stop") {
        document.querySelector(".startStop").innerHTML = `<i class="fas fa-play" data-stop="start"></i>`;
        clearInterval(inter);
        if (seconds < 10) {
            document.querySelector(".seconds").innerHTML = '0' + seconds;
        } else {
            document.querySelector(".seconds").innerHTML = seconds;
        }
        if (minutes < 10) {
            document.querySelector(".minutes").innerHTML = '0' + minutes;
        } else {
            document.querySelector(".minutes").innerHTML = minutes;
        }
        if (hours < 10) {
            document.querySelector(".hours").innerHTML = '0' + hours;
        } else {
            document.querySelector(".hours").innerHTML = hours;
        }
        if (days < 10) {
            document.querySelector(".days").innerHTML = '0' + days;
        } else {
            document.querySelector(".days").innerHTML = days;
        }
        if (months < 10) {
            document.querySelector(".months").innerHTML = '0' + months;
        } else {
            document.querySelector(".months").innerHTML = months;
        }
        if (years < 10) {
            document.querySelector(".years").innerHTML = '0' + years;
        } else {
            document.querySelector(".years").innerHTML = years;
        }
        seconds = 0;
        minutes = 0;
        hours = 0;
        days = 0;
        months = 0;
        years = 0;
    }
}

const stopWatchIcons = document.querySelector(".stop-icons");
main.addEventListener("click", stopPausePlay);
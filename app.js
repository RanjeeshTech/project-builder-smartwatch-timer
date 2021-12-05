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

function showIconSection() {
    clearInterval(interval);
    icons.forEach(icon => {
        if (icon === this && this.dataset.name === "clock") { //only for clock button
            if (this.classList.contains("iconActive")) {
                icon.classList.remove("iconActive");
                if (this.dataset.name === "clock") {
                    main.innerHTML = `
                            <div class="inner-main">
                                <div class="main-stopTime">
                                    <p>00:00:22</p>
                                </div>
                                <div class="sub-stopTime">
                                    <p>00:00:15</p>
                                </div>
                                <div class="stop-icons">
                                    <i class="fas fa-redo" data-stop="redo"></i>
                                    <i class="fas fa-pause" data-stop="pause"></i>
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
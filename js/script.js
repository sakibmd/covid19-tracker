window.onload = function() { document.querySelector(".preloader").style.display = "none"; }

const Covid19 = {
    data() {
        return {
            country: "",
            covidInfoAll: [],

        };
    },
    created() {
        fetch("https://coronavirus-19-api.herokuapp.com/countries")
            .then(res => res.json())
            .then((data) => {
                this.covidInfoAll = data
            });
    },
    computed: {
        filteredData() {
            return this.covidInfoAll.filter(item => item.country.toLowerCase().startsWith(this.country.toLowerCase()));
        },
        now() {
            return Date.now();
        }
    }
}
Vue.createApp(Covid19).mount("#covid-update");


function currentTime() {
    var date = new Date(); /* creating object of Date class */
    console.log(date)
    var midday = "AM";
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    midday = (hour >= 12) ? "PM" : "AM";
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = day + "/" + month + "/" + year + " - " + hour + ":" + min + ":" + sec + ' ' +
        midday; /* adding time to the div */
    var t = setTimeout(function() { currentTime() }, 1000); /* setting timer */
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

currentTime(); /* calling currentTime() function to initiate the process */
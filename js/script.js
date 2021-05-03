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
        }
    }
}
Vue.createApp(Covid19).mount("#covid-update");
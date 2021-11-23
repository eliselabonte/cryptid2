import { ALPN_ENABLED } from "constants";
import { isConstructorDeclaration } from "typescript"

// arguments to function Location must be strings!

function Location(city, state) {

    let states = [
        { state: "Alabama", code: "US-AL" },
        { state: "Alaska", code: "US-AK" },
        { state: "Arizona", code: "US-AZ" },
        { state: "Arkansas", code: "US-AR" },
        { state: "California", code: "US-CA" },
        { state: "Colorado", code: "US-CO" },
        { state: "Connecticut", code: "US-CT" },
        { state: "Delaware", code: "US-DE" },
        { state: "Florida", code: "US-FL" },
        { state: "Georgia", code: "US-GA" },
        { state: "Hawaii", code: "US-HI" },
        { state: "Idaho", code: "US-ID" },
        { state: "Illinois", code: "US-IL" },
        { state: "Indiana", code: "US-IN" },
        { state: "Iowa", code: "US-IA" },
        { state: "Kansas", code: "US-KS" },
        { state: "Kentucky", code: "US-KY" },
        { state: "Louisiana", code: "US-LA" },
        { state: "Maine", code: "US-ME" },
        { state: "Maryland", code: "US-MD" },
        { state: "Massachusetts", code: "US-MA" },
        { state: "Michigan", code: "US-MI" },
        { state: "Minnesota", code: "US-MN" },
        { state: "Mississippi", code: "US-MS" },
        { state: "Missouri", code: "US-MO" },
        { state: "Montana", code: "US-MT" },
        { state: "Nebraska", code: "US-NE" },
        { state: "Nevada", code: "US-NV" },
        { state: "New Hampshire", code: "US-NH" },
        { state: "New Jersey", code: "US-NJ" },
        { state: "New Mexico", code: "US-NM" },
        { state: "New York", code: "US-NY" },
        { state: "North Carolina", code: "US-NC" },
        { state: "North Dakota", code: "US-ND" },
        { state: "Ohio", code: "US-OH" },
        { state: "Oklahoma", code: "US-OK" },
        { state: "Oregon", code: "US-OR" },
        { state: "Pennsylvania", code: "US-PA" },
        { state: "Rhode Island", code: "US-RI" },
        { state: "South Carolina", code: "US-SC" },
        { state: "South Dakota", code: "US-SD" },
        { state: "Tennessee", code: "US-TN" },
        { state: "Texas", code: "US-TX" },
        { state: "Utah", code: "US-UT" },
        { state: "Vermont", code: "US-VT" },
        { state: "Virginia", code: "US-VA" },
        { state: "Washington", code: "US-WA" },
        { state: "West Virginia", code: "US-WV" },
        { state: "Wisconsin", code: "US-WI" },
        { state: "Wyoming", code: "US-WY" }
    ]

    for (let i = 0; i < states.length; i++) {
        if (states[i].state === state) {
            let stateCode = states[i].code
            console.log(stateCode)
            findLatLong(city, stateCode);
        }
    }

    function findLatLong(city, stateCode) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${stateCode}&appid=032cfd72fed45f02a0aaa8c17a255834`)
            .then(function (response) {
                return responseParsed = response.json()
            })
            .then(function (responseParsed) {

                searchedCity = {
                    cityLat: responseParsed.coord.lat,
                    cityLon: responseParsed.coord.lon
                }

                findWeather(searchedCity)
            }
            )
    }

    function findWeather(searchedCity) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${searchedCity.cityLat}&lon=${searchedCity.cityLon}&exclude={part}&appid=032cfd72fed45f02a0aaa8c17a255834&units=imperial`)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                console.log(response)
            })
    }
}

export default Location
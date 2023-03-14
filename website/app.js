    // variablesn 
    const feelings = document.getElementById("feelings");
    const entry = document.getElementById('entry');
    const date = document.getElementById('date');
    const temp = document.getElementById('temp');
    const content = document.getElementById('content')
    const zipCode = document.getElementById("zip");
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Where to get climate information
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = ",&appid=3dd0bea0462fe4be44dae1e28b9a4fe7&units=metric";
// The address of the server to receive the data
const dating = () => {
    const feelings = document.getElementById("feelings").value;
    // Get weather information
    Weather(document.getElementById("zip").value).then((data) => {
        const {
            main: { temp },
        } = data;
        const information = {
            newDate,
            feelings,
            temp,
        };
        // git data 
        posting("http://localhost:3000/add", information);
        // add data to page 
        putData();
    });
};
// Add content to the page 
const putData = async () => {
    // Page elements 
    const res = await fetch("http://localhost:3000/all");
    try {
        const information = await res.json();
        date.innerHTML = information.newDate;
        temp.innerHTML = information.temp;
        content.innerHTML = information.feelings;
    } catch (error) {
        console.log(error);
    }
};

// addEventListener to generate 
const generate = document.getElementById("generate");
generate.addEventListener("click", dating);

// Obtaining information from abroad 
const Weather = async (zip) => {
    try {
        const weather = await fetch(baseURL + zip + apiKey);
        const dataWeather = await weather.json();
        return dataWeather;
    } catch (error) {
        console.log(error);
    }
};

// POST data
const posting = async (url = '', inf = {}) => {
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inf),
    });

    try {
        const newData = await res.json();
        return newData;
    } catch (error) {
        console.log(error);
    }
};


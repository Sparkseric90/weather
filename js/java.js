
/*Api Key*/
const key = "3fe7090d8590b76b6cb699220cf98822";


/*Allows you to input Zip code*/
var nameInput = document.getElementById('zip');
var wind;


/*Event listener for the "Submit button"*/
nameInput.addEventListener('submit', function (e) {

    /*listens for the zip code input, and if an incorrect format is input, it gives your a Error dialogue that pops up letting you know.*/
    e.preventDefault();
    let zip = document.getElementById('zip').elements["zipInput"].value;
    if (zip.length != 5) {
        alert('Sorry! The Zip code that has been provided is invalid! Try Again!');
    } else {
        getWeather(zip);

    }

});

/*this is where all the weather data comes from. It fetches the openweathermap JSON data and from here, using the Console log I can the data I need to display*/
function getWeather(zip) {
    let x = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}`;
    fetch(x)
        .then(Response => Response.json())
        .then(data => populateWeather(data))
        .catch(e => { alert('Error: Location Not Found, Please enter Valid Zipcode') });

};

/*conversions for temperature*/
function populateWeather(data) {
    let pic = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let celsius = (data.main.temp - 273.15);
    let fahrenheit = celsius * (9 / 5) + 32;




    

/*returns all of the data we called in the API, to display on the HTML bootstrap*/
    document.getElementById('town').innerHTML = data.name;
    document.getElementById('kelvin').innerHTML = data.main.temp + ' k';
    document.getElementById('imperial').innerHTML = fahrenheit.toFixed(0) + ' F';
    document.getElementById('metric').innerHTML = celsius.toFixed(0) + ' C';
    document.getElementById('condition').innerHTML = data.weather[0].main;
    document.getElementById('wind').innerHTML = data.wind.speed * '2.2' + ' mph winds';
    document.getElementById('pic').setAttribute("src", pic);

    
    /*console.log(data)*/
}

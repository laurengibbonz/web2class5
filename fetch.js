const lat = '-22.9028',

    long = '-43.2075',

    api = '8bd32c8b25477b92c6a32c7c6b7faa13',

    unit = 'metric',

    url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts&appid=${api}&units=${unit}`;



console.log(url);

document.querySelector('#cities').addEventListener('change', function(){
let cityValue = document.querySelector('#cities').value;
    if(cityValue == 'NYC') {
        lat = ;
        long = ;
        url =  XXX;
        createFetch(url)
    } if(cityValue == 'Beijing') {
        lat = ;
        long = ;
        url =  XXX;
        createFetch(url)
    } 
});


function updateUI(data) {
    console.log(data);

    document.querySelector('.current .temperature').innerHTML = `${Math.round(data.current.temp)}˚C`;
    document.querySelector('.current .advice').innerHTML = `${data.current.weather[0].main}`;
    document.querySelector('.current .icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" />`;
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.querySelector('.current .weekday').innerHTML = 'Current';

    let output = '';
    for(let i = 0; i < data.daily.length; i++) {
        console.log(Math.round(data.daily[i].temp.day));
        console.log(`i: ${i}`);
        console.log(document.querySelectorAll('.forecast .temperature')[i]);
        document.querySelectorAll('.forecast .temperature')[i].innerHTML = `${Math.round(data.daily[i].temp.day)}˚C`;
        document.querySelectorAll('.forecast .weekday')[i].innerHTML = daysOfWeek[new Date(data.daily[i].dt * 1000).getDay()];
        document.querySelectorAll('.forecast .advice')[i].innerHTML = data.daily[i].weather[0].main;
    }

}


function createFetch(url) {
    fetch(url)

    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(data) {
    
        return updateUI(data);
    
    })
    
    .catch(function(error) {
    
        console.log(error);
    
    });
}



		

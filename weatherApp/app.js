const search = document.getElementById("search");
const countryName = document.getElementById("country-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=b942e2aeaad2cbeffb7a95cbd8cfb50b`)
    .then(response => response.json())
    .then(data => showData(data))


search.addEventListener("click",()=>{
    const searchValue = document.getElementById("search-value").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=b942e2aeaad2cbeffb7a95cbd8cfb50b`)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error => alert('Please Insert Correct Country Name'))
})

function showData(data){
    const name = data.name;
        const temp = parseInt(data.main.temp - 273.15);
        const descrip = data.weather[0].description;
        countryName.innerHTML = `<i class="far fa-flag text-primary"></i> ${name}`;
        temperature.innerHTML = `<i class="fas fa-temperature-low text-primary"></i>  ${temp} °C`;
        description.innerText = descrip;
}
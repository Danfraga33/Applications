const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags['png']}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(2)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages.name}</p>
    <p class="country__row"><span>💰</span>${data.currencies.name}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html)
  countriesContainer.style.opacity = 1;
}




const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=3025610412976777920x102539 `)
    .then(res => 
    {if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
      return res.json()
 })
    .then(data => {
      // console.log(data)
      console.log(`You are in ${data.city},${data.state}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data[0].flags['png']);
      renderCountry(data[0])
    })
    .catch(err => console.log(`Wow!, ${err.message}`))
    
}
whereAmI(51.50354,-0.12768)
whereAmI(52.508,13.381)
whereAmI(19.037,72.873)
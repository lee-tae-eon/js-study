const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data));

const findMatches = (word, cities) => {
  return cities.filter((place) => {
    const regex = new RegExp(word, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const displayMatches = (e) => {
  const inputValue = e.target.value;
  const matchArray = findMatches(inputValue, cities);

  const HTML = matchArray
    .map((place) => {
      const regex = new RegExp(inputValue, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${inputValue}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${inputValue}</span>`
      );
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
    })
    .join("");

  suggest.innerHTML = HTML;
};

const search = document.querySelector(".search");
const suggest = document.querySelector(".suggestions");

search.addEventListener("input", displayMatches);

{
  /* <li><span class="name">${place.city} ${place.state}</span><span class="population">${place.population}</span></li> */
}

var visited_countries;
var country_param = new URL(location.href).searchParams.get("countries");

if (country_param) {
  // ISO 3166-1 codes are 3 digits and numeric https://en.wikipedia.org/wiki/ISO_3166-1_numeric
  visited_countries = country_param.split("-").map((n) => ("00" + n).substr(-3));
} else {
  visited_countries = [];
}

function countryOpacity(country) {
	return visited_countries.includes(country.id) ? 1.0 : 0.5;
}

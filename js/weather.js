const API_KEY = 'a339da6f28089d15cee7a8cb54084f1d';

getGeoLocation = (location) => {
	const lat = location.coords.latitude;
	const lon = location.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			const location = document.querySelector(
				'#weather span:first-child'
			);
			const weather = document.querySelector('#weather span:last-child');

			location.innerText = data.name;
			weather.innerText = data.weather[0].main;
		});
};

failGetGeoLocation = () => {
	alert('Can not get your geo location');
};

navigator.geolocation.getCurrentPosition(getGeoLocation, failGetGeoLocation);

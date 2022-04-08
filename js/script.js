output = document.getElementById('joke');

function getJoke() {
	request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			output.innerText = JSON.parse(this.responseText)['joke'];
		}
	};
	request.open('GET', 'https://icanhazdadjoke.com');
	request.setRequestHeader('Accept', 'application/json');
	request.send();
}

getJoke();
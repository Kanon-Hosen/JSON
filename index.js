const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '755fd20a8fmsh37e4f4363d1a71bp1c4f0bjsnb2174633616a',
		'X-RapidAPI-Host': 'latest-movies.p.rapidapi.com'
	}
};

fetch('https://latest-movies.p.rapidapi.com/movies', options)
	.then(response => response.json())
    .then(display => {
        for (const dis of display) {
            console.log(dis)
            const section = document.getElementById('section');
            const div = document.createElement('div');
            div.innerHTML = `
                <a href="${dis.url}">${dis.site}</a>
                <h5>${dis.title}</h5>
            `
            section.appendChild(div)
        }
    })
    .catch(err => console.error(err));
    

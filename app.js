// var theJoke;
var data;
// async function getRandom(){
// 	const jokeRes = await fetch('https://icanhazdadjoke.com/', {
//   headers: {
//   'Accept': 'application/json'
//   }
// 	});
// 	const resJson = await jokeRes.json()
// 	theJoke = resJson.joke
// 	console.log(theJoke)
// 	//return await theJoke;
// }


// api url
const api_url = "https://icanhazdadjoke.com/";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url, {
		  headers: {
		  'Accept': 'application/json'
		  }
		});
    
    // Storing data in form of JSON
    data = await response.json();
	console.log()
	//return (data);

}
// Calling that async function


const button = document.querySelector('.button');

button.addEventListener('click', function(){
	let content = document.querySelector('.joke');
	getapi(api_url);
	content.innerHTML = data.joke;
	console.log(data.joke)
})
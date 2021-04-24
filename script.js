var omdb_api="http://www.omdbapi.com/?i=tt3896198&apikey=d049c721";
	
var count = 10;
var searchvalue = (new URL(location.href).searchParams.get("search")).toUpperCase();
console.log(searchvalue);
async function getapi(server){
	const result = await fetch(server);
	var data=[];
	data.push(await result.json());
	console.log(data);
	display(data);
}
getapi(omdb_api);
function display(data){
	let output = ``;
	var moviecount = 0;
	for (let value of data){
if(((value.Title).toUpperCase()).includes(searchvalue) || ((value.Writer).toUpperCase()).includes(searchvalue)){
		output += `<div class="row">
<div class = "col1" onclick="more(${value.imdbID})"><img src= ${value.Poster} width="100%"><br>
${value.Title}<br>
${value.Year}<br>
${value.Rated}<br>
${value.Genre} 
<div id = ${value.imdbID} class="description" onclick="more(${value.imdbID})">
<b>Director:</b><br>
${value.Director}<br>
<b>Writer:</b><br>
${value.Writer}<br>
<b>Actors:</b><br>
${value.Actors}<br>
<b>Plot:</b><br>
${value.Plot}<br>
<b>Language:</b><br>
${value.Language}<br>
<b>Released:</b><br>
${value.Released}<br>
<b>Runtime:</b><br>
${value.Runtime}<br>
<b>Country:</b><br>
${value.Country}<br>
<b>Awards:</b><br>
${value.Awards}<br>
<b>Rating:</b><br>
<table>
<th>${value.Ratings[0].Source}</th>
<th>${value.Ratings[1].Source}</th>
<th>${value.Ratings[2].Source}</th><tr>
<td>${value.Ratings[0].Value}</td>
<td>${value.Ratings[1].Value}</td>
<td>${value.Ratings[2].Value}</td></tr>
</table>
<b>Type:</b><br>
${value.Type}<br>
<b>DVD:</b><br>
${value.DVD}<br>
<b>Box Office:</b><br>
${value.BoxOffice}<br>
<b>Production:</b><br>
${value.Production}<br>
<b>Website:</b><br>
${value.Website}
</div>
		</div>
</div>`;
footer.style.display = "block";
		moviecount ++;
		}
		if (moviecount >= count){
		break;	
		}
	}
document.getElementById("favourite").innerHTML = output;
}
function more(object){	
if (object.style.display === "none"){
	object.style.display = "block";
}
else{
	object.style.display = "none";
}
}
function morr(subject){
var desc = document.getElementById(subject);	
if (desc.style.display === "none"){
	desc.style.display = "block";
}
else{
	desc.style.display = "none";
}
}
function moremovies(){
	count += 5;
getapi(omdb_api);
	
}

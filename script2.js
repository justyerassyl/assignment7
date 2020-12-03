var info = document.querySelector("#cards");
var button = document.querySelector("button");
var icon = document.querySelector("img");

function onClickFn(event){
const url ="http://demo3262411.mockable.io/list-cars";
fetch(url).then(onSuccess, onError);
icon.style.display = "block";
}

function onSuccess(response){
	response.text().then(onProcessText);
}

function onError(error){
	info.innerHTML="";
	button.innerHTML = "Some error occur";
}

function onProcessText(text){
	icon.style.display = "none";
	for(var i=0; i<3; i++){
		var tag = document.createElement("div");
		tag.setAttribute("class", "card");

		var title = document.createElement("div");
		title.setAttribute("class", "title");
		var price = document.createElement("div");
		price.setAttribute("class", "price");

		tag.appendChild(title);
		tag.appendChild(price);
		info.appendChild(tag);
		console.log(info);
	}
	var titles = document.querySelectorAll(".title");
	var prices = document.querySelectorAll(".price");
	var obj = JSON.parse(text);

	for(var i=0; i<3; i++){
	titles[i].innerHTML = obj[i]["company"] + obj[i]["model"];
	prices[i].innerHTML = obj[i]["price"];
	}
	button.innerHTML = "Items are loaded";
}

button.addEventListener("click", onClickFn);


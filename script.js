function btn_getFile(){
	var div_container = document.getElementById("container")
	var div_content = document.createElement("div");
	div_content.textContent = "Hello world";
	while(div_container.firstChild){
		div_container.removeChild(div_container.firstChild);
	}
	div_container.appendChild(div_content);
}
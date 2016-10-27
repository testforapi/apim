function btn_userLogin(){
	var div_container = document.getElementById("user_container")
	var div_content = document.createElement("div");
	div_content.textContent = "User login success";
	while(div_container.firstChild){
		div_container.removeChild(div_container.firstChild);
	}
	div_container.appendChild(div_content);
}

function btn_createApp(){
	var div_container = document.getElementById("app_container")
	var div_content = document.createElement("div");
	div_content.textContent = "create app success and get cliet ID/secret pairs";
	while(div_container.firstChild){
		div_container.removeChild(div_container.firstChild);
	}
	div_container.appendChild(div_content);
}

function btn_getDoc(){
	var div_container = document.getElementById("doc_container")
	var div_content = document.createElement("div");
	div_content.textContent = "get API Doc below";
	while(div_container.firstChild){
		div_container.removeChild(div_container.firstChild);
	}
	div_container.appendChild(div_content);
}

function btn_getScope(){
	var div_container = document.getElementById("scope_container")
	var div_content = document.createElement("div");
	div_content.textContent = "get authorized scope below";
	while(div_container.firstChild){
		div_container.removeChild(div_container.firstChild);
	}
	div_container.appendChild(div_content);
}

function btn_getApps(){
	var div_container = document.getElementById("apps_container")
	var div_content = document.createElement("div");
	div_content.textContent = "get App list below";
	while(div_container.firstChild){
		div_container.removeChild(div_container.firstChild);
	}
	div_container.appendChild(div_content);
}
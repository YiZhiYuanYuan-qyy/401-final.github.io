// 初始化，图片旁边的下拉选择框
function initLogo(){
	var logo = document.getElementById("inputValueID");
	for(var i=1;i<=5;i++){
		logo.options.add(new Option(i,i));
	}
}

function selectLogo(){
	var logo = document.getElementById("inputValueID");
	var n = logo.value;
	var logoImg = document.getElementById("img1");
	logoImg.src = "images/"+n+".png";
}

// 初始化，图片旁边的下拉选择框
function initLogo1(){
	var logo = document.getElementById("inputValueID1");
	for(var i=1;i<=5;i++){
		logo.options.add(new Option(i,i));
	}
}

function selectLogo1(){
	var logo = document.getElementById("inputValueID1");
	var n = logo.value;
	var logoImg = document.getElementById("img2");
	logoImg.src = "images/"+n+".png";
}

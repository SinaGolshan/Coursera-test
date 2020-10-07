document.addEventListener("DOMContentLoaded", function (event) {

	function setHeight(){
		var sHeight = document.querySelector('#main-content div').offsetHeight;
		sHeight = String(sHeight) + "px";
		document.getElementById('sidebar').style.height = sHeight;
		var h = document.querySelector('#sidebar').offsetHeight;
	}
	setHeight();

	var flag = false;
	if(window.innerWidth < 767){
		document.getElementById('side-list').style.display = 'none';
	}


	document.getElementById('side-puller').addEventListener('click', function(event){

		var sWidth = document.getElementById('sidebar').clientWidth;
		
		if(sWidth === 0){
			if(window.innerWidth < 767){
				document.getElementById('sidebar').style.width = '30%';
				document.getElementById('main').style.width = '70%';
				document.getElementById('main').style.marginLeft = '30%';
				document.getElementById('side-list').style.display = 'block';
			}
			document.getElementById('side-puller').innerHTML = '<span class="glyphicon glyphicon-chevron-left"></span>';
			flag = true;
		}else{
			if(window.innerWidth < 767){
				document.getElementById('sidebar').style.width = '0%';
				document.getElementById('side-list').style.display = 'none';
				document.getElementById('main').style.width = '100%';
				document.getElementById('main').style.marginLeft = 'auto';
			}
			document.getElementById('side-puller').innerHTML = '<span class="glyphicon glyphicon-chevron-right"></span>';
			flag = false;
		}
	});

	window.addEventListener("resize", function(event){
		if(window.innerWidth > 767){
			document.getElementById('sidebar').style.width = '16.66%';
			document.getElementById('side-list').style.display = 'block';
			flag = false;
			document.getElementById('side-puller').innerHTML = '<span class="glyphicon glyphicon-chevron-right"></span>';
			
			document.getElementById('main').style.width = '100%';
			document.getElementById('main').style.marginLeft = 'auto';
		}else{
			if(!flag){
				document.getElementById('sidebar').style.width = '0px';
				document.getElementById('side-list').style.display = 'none';
			}
		}
	});

});
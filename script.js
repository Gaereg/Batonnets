function batonnets(id){
	var tabaton = document.querySelectorAll('.baton');
	var tabRetire = document.querySelectorAll('.retirer');
	if(id < tabRetire.length+4){
		for(i=0; i<id; i++){
			tabaton[i].setAttribute('class', 'baton retirer');
		}
	}	
}

function hover(id){
	var tabaton = document.querySelectorAll('.baton');
	var tabRetire = document.querySelectorAll('.retirer');

	if(id > tabRetire.length && id < tabRetire.length+4){
		for(i=id-1; i>id-4; i--){
			if(i > tabRetire.length-1){
				tabaton[i].setAttribute('class', 'baton dispo dispoHover');
			}
		}
	}
}

function normal(){
	var tabdispo = document.querySelectorAll('.dispo');
	for(i=0; i<tabdispo.length; i++){
		tabdispo[i].setAttribute('class', 'baton dispo')
	}
}
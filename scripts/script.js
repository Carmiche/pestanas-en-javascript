var pro = {
	tituloPestanas: document.getElementById('pestanas'),
	contenidoPestanas: document.getElementById('contenidoPestanas'),
	pContenido: document.querySelector(".pestana-contenido-p"),
	pestanas: [ 
		{
			titulo: `HTML`,
			contenido: `contenido aqui 1`,
			mostrar: false
		},
		{
			titulo: `CSS`,
			contenido: `contenido aqui 2`,
			mostrar: false
		},
		{
			titulo: `JavaScript`,
			contenido: `contenido aqui 3`,
			mostrar: false
		},
	],
}
var met = {
	inicio: function (){
		let div, h3, p;
		for(let i = 0; i < pro.pestanas.length; i++){
			div = document.createElement("div")
			div.textContent = pro.pestanas[i].titulo
			div.className = false
			pro.tituloPestanas.appendChild(div)
		}
			pro.tituloPestanas.addEventListener("click", function (evento){
			evento = evento.target				
		for (let i = 0; i < pro.pestanas.length; i++) {
				if (evento.innerHTML == pro.pestanas[i].titulo) {	
					pro.pContenido.innerHTML = pro.pestanas[i].contenido
				};
				pro.tituloPestanas.childNodes[i].className = false
		}
				evento.className = true
				met.accion()
			})
	},
	accion: function (){

	}
}
met.inicio();
//Perfectamente funcional pero mejorable; cambia el contenido del p cada vez que se da un click
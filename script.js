window.addEventListener('load',start())

function start(){
  document.getElementById('menu-inicio').addEventListener('click',seleccionar)
  document.getElementById('menu-sobremi').addEventListener('click',seleccionar)
  document.getElementById('menu-skills').addEventListener('click',seleccionar)
  document.getElementById('menu-curriculum').addEventListener('click',seleccionar)
  document.getElementById('menu-proyectos').addEventListener('click',seleccionar)
  document.getElementById('nav-responsive').addEventListener('click',mostrarOcultarMenu)

}

let menuVisible=false

function seleccionar(){
 // oculta el menu al seleccionar una opción
 document.getElementById('nav').classList=""
 menuVisible=false
}


function mostrarOcultarMenu() {
  if(menuVisible){
    document.getElementById('nav').classList=''
    menuVisible=false
  }else{
    document.getElementById('nav').classList='responsive'
    menuVisible=true
  }
}



window.addEventListener('load',start())

function start(){
  document.getElementById('menu-inicio').addEventListener('click',seleccionar)
  document.getElementById('menu-sobremi').addEventListener('click',seleccionar)
  document.getElementById('menu-skills').addEventListener('click',seleccionar)
  document.getElementById('menu-curriculum').addEventListener('click',seleccionar)
  document.getElementById('menu-proyectos').addEventListener('click',seleccionar)
  document.getElementById('nav-responsive').addEventListener('click',mostrarOcultarMenu)
  // cuando scrolling aplicamos el efecto
  window.addEventListener('scroll', efectoHabilidades)
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

// aplica las animaciones a las skills
// detectamos scrolling para aplicar la animacion
function efectoHabilidades(){
  
  const arrHabilidades = ['javascript', 'htmlcss', 'php', 'react', 'java', 'node', 
                          'comunicacion', 'trabajoEquipo', 'creatividad', 'dedicacion', 'projectManagement' ]
  const skills = document.getElementById('skills')
  
  // calculamos en donde se encuentra la seccion skills
  const distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top

  const habilidades = document.getElementsByClassName('progreso')

  if(distanciaSkills >= 300 && distanciaSkills <= 1400){

    for (let i = 0; i < habilidades.length; i++) {
      const habilidad = habilidades[i];
      habilidad.classList.add(arrHabilidades[i])
    }
    
  }else{
    for (let i = 0; i < habilidades.length; i++) {
      const habilidad = habilidades[i];
      habilidad.classList.remove(arrHabilidades[i])
    }
  }
}



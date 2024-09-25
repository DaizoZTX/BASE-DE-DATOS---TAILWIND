const botonMenu = document.querySelector("#botonMenu");
const MenuPant = document.querySelector("#MenuPant");
const botonGestor = document.querySelector("#botonGestor")
//Evento para ocultar/mostrar el meu movil
botonMenu.addEventListener('click', ()=>{
    MenuPant.classList.toggle('hidden');
})
//Evento para reproducir un sonido en el click
botonGestor.addEventListener('click', () => {
    let audio = document.createElement("audio")
    audio.setAttribute("src", "./sounds/audio2.mp3")
    audio.play()
    Swal.fire("PostgreSQL, SQLServer, MySQL, ORACLE DataBase, SQLite, MongoDB, Cassandra, Redis");
})
//Scroll
function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}
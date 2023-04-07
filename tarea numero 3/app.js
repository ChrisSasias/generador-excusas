// Using javascript, create a function that generates and returns a random excuse with the following structure:
let quien  = ["Mi perro ","Mi abuela ","El Gato ","Mi pajaro "];
let que = [ "rompio","ensucio","se comio","robó","mancho", "orino"]
let cuando = [ "antes de la clase ", "justo a tiempo ", "cuando terminé", "durante mi almuerzo", "mientras estaba rezándo"];

function Generadorexcusas(quien, que, cuando){
   
        numQuien  = Math.floor(Math.random()*quien.length);
        numQue = Math.floor(Math.random()*que.length);
        numCuando = Math.floor(Math.random()*cuando.length);
        return quien[numQuien]+ ""+que[numQue]+ " la tarea "+""+cuando[numCuando];

}
function onLoad () {
    var excusa = document.getElementById('excusa');
    excusa.innerHTML = Generadorexcusas(quien, que, cuando);
    }
window.onload = onLoad;


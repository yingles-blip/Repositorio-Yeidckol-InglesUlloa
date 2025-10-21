//DESAFÍO DE LAS CAJAS//
//1 - Cuando haga click en el btn de titulo de cajas, debe cambiar el título//

document.getElementById("btn-cajas-titulo").addEventListener("click",()=>
{
  const titulocaja =
        document.getElementById("titulo-cajas");
  titulocaja.textContent ="Yeidckol Ulloa"
} );

//2. Cambiar el colo de las cajas//

document.getElementById("btn-cajas").addEventListener("click",()=>     
{
  const cajas =
      document.getElementsByClassName("caja");
  for (let i = 0; i < cajas.length; i++)
    {
      cajas[i].style.backgroundColor = "#A1C2FF";
    }
});

//3.Cambiar el color de la primera caja//

document.getElementById("btn-primera").addEventListener("click",()=>
{
  const primera =
      document.querySelector(".caja");
  primera.style.backgroundColor = "#C3D4F7";
 });

//4. Cambiar el color y la forma al borde de las cajas//

document.getElementById("btn-borde").addEventListener("click",()=>
{
  const bordecaja =
  
  document.querySelectorAll(".caja");
  bordecaja.forEach(caja=>
    {      
     caja.style.border = "4px dotted #053A9E"; 
 
   });                                 
 });                                 
      
// Referencias a los elementos//

const imageUrlInput = document.getElementById('imageUrlInput');
const addImageBtn = document.getElementById('addImageBtn');
const galleryContainer = document.getElementById('galleryContainer');

// Evento al hacer clic en el botón//

addImageBtn.addEventListener('click', () => {
  const imageUrl = imageUrlInput.value.trim();
  
  if (imageUrl) {
    
    // Crear un nuevo contenedor para la imagen//
    
    const col = document.createElement('div');
    col.classList.add('col'); 
    
    // Para usar la rejilla de Bootstrap//
    
    // Crear la imagen//
    
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('img-fluid', 'rounded', 'shadow-sm'); 
    img.alt = 'Imagen añadida';

    // Agregar la imagen dentro del contenedor//
    
    col.appendChild(img);

    // Añadir el contenedor a la galería//
    
    galleryContainer.appendChild(col);

    // Limpiar input//
    
    imageUrlInput.value = '';
  } else {
    alert('Por favor ingresa una URL válida.');
  }
});
/*
  DOM - Document Object Model

  Document Object Model es el arbol de nodos de un documento HTML.
  Entonces DOM seria la estructura del documento HTML representada por un arbol de nodos.

  Lo importante de esta sección es que el navegador nos permite interactuar con el DOM.
  Podemos manipular el documento HTML con JavaScript, es decir, modificar el DOM, accediendo
  a los nodos por medio de distintas maneras.
  Esto nos permite modificar el DOM de forma dinámica, asi que podemos acceder, modificar y
  manipular el DOM de forma dinámica.
*/

/*
  se accede mediante un selector css, ejemplo '.mi-clase', '#mi-id', 'h1', 'p', etc.
  se especifica la clase o el id de la etiqueta, con el signo, sino no funciona.
  esto es tanto para querySelector como para querySelectorAll.
*/

// const title = document.querySelector('.title')
// console.log(title.textContent)

// /*
//   se accede mediante el id de la etiqueta, no se debe colocar el signo para acceder.
// */

// const subtitle = document.getElementById('subtitle')
// console.log(subtitle.textContent)

// const textSection2 = document.getElementById('text-section-2')

//  si utizamos querySelectorAll obtenemos una nodeList o una lista de nodos. Podemos iterar sobre ella.
//  es importante saber que el nodeList no es un array, pero podemos transformarlo.
//  si bien parece un array no permite utizar metodos javascript como push, pop, filter o map.
//

// const listItems = document.querySelectorAll('.list-item')
// console.log(listItems)

// /*
//   para transformar un nodeList en un array usamos el metodo Array.from o spread operator.
//   otra cuestion a tener en cuenta es que document no es la unica manera de acceder a un elemento,
//   sino que podemos acceder tambien desde otro elemento.
// */
// const listItemsArray = Array.from(listItems)
// console.log(listItemsArray)

//   Ejercicio: Selecciona el primer párrafo(<p>) en el documento y cambia su texto a "Texto modificado".
//   Ejemplo de resultado esperado: El primer párrafo del documento debe mostrar "Texto modificado".
const firstP = document.querySelector('.p')
firstP.textContent = 'texto modificado'

//   Ejercicio: Selecciona todos los elementos de lista(<li>) y cambia su color de texto a rojo.
//   Ejemplo de resultado esperado: Todos los elementos de lista deben aparecer con el texto en color rojo.
const listItems = document.querySelectorAll('li')

listItems.forEach((item) => {
  item.style.color = 'red'
})

//   Ejercicio: Selecciona un elemento con el ID header y cambia su texto a "Encabezado modificado".
//   Ejemplo de resultado esperado: El elemento con el ID header debe mostrar "Encabezado modificado".
const header = document.getElementById('header')
// header.textContent = 'Encabezado modificado';

//   Ejercicio: Selecciona una imagen(<img>) y obtén su atributo src. Luego, cambia su atributo src a "new-image.jpg".
//   Ejemplo de resultado esperado: El atributo src de la imagen debe ser cambiado a "new-image.jpg".
const image = document.querySelector('img')
const src = image.getAttribute('src')
image.setAttribute('src', 'new-image.jpg')

//   Ejercicio:
//   Selecciona un elemento con la clase box y agrégale la clase highlight.
//   Luego, quítale la clase highlight.
//   Finalmente, verifica si tiene la clase box.

//   Ejemplo de resultado esperado:
//   El elemento debe tener la clase highlight agregada.
//   La clase highlight debe ser removida del elemento.
//   Debe retornar true si el elemento tiene la clase box.
const box = document.querySelector('.box')
box.classList.add('highlight')
box.classList.remove('highlight')
if (box.classList.contains('box')) {
  console.log(true)
}

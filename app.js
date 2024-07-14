/*
  DOM - Document Object Model

  Document Object Model es el arbol de nodos de un documento HTML. Entonces DOM seria la estructura del documento HTML representada por un arbol de nodos.

  Lo importante de esta sección es que el navegador nos permite interactuar con el DOM.
  Podemos manipular el documento HTML con JavaScript, es decir, modificar el DOM, accediendo a los nodos por medio de distintas maneras.
  Esto nos permite modificar el DOM de forma dinámica, asi que podemos acceder, modificar y manipular el DOM de forma dinámica.
*/

/*
  se accede mediante un selector css, ejemplo '.mi-clase', '#mi-id', 'h1', 'p', etc.
  se especifica la clase o el id de la etiqueta, con el signo, sino no funciona. 
  esto es tanto para querySelector como para querySelectorAll.
*/
const title = document.querySelector('.title')
console.log(title.textContent)

/*
  se accede mediante el id de la etiqueta, no se debe colocar el signo para acceder.
*/
const subtitle = document.getElementById('subtitle')
console.log(subtitle.textContent)

const textSection2 = document.getElementById('text-section-2')

/* si utizamos querySelectorAll obtenemos una nodeList o una lista de nodos. Podemos iterar sobre ella.
   es importante saber que el nodeList no es un array, pero podemos transformarlo.
   si bien parece un array no permite utizar metodos javascript como push, pop, filter o map.
*/

const listItems = document.querySelectorAll('.list-item')

console.log(listItems)

/*
  para transformar un nodeList en un array usamos el metodo Array.from o spread operator.
  otra cuestion a tener en cuenta es que document no es la unica manera de acceder a un elemento, 
  sino que podemos acceder tambien desde otro elemento.
*/
const listItemsArray = Array.from(listItems)
console.log(listItemsArray)

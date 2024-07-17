### Guía sobre Eventos en JavaScript

#### ¿Qué son los eventos?

Los eventos son acciones o sucesos que ocurren en el navegador, los cuales pueden ser generados por el usuario (como hacer clic en un botón, mover el ratón, escribir en un campo de texto, etc.) o por la propia aplicación (como la carga de una página, la finalización de una animación, etc.).

#### ¿Para qué se utilizan?

Se utilizan para ejecutar código JavaScript en respuesta a estas acciones. Por ejemplo, puedes querer mostrar un mensaje cuando se hace clic en un botón, validar un formulario cuando se envía, o cambiar el contenido de una página cuando el usuario selecciona una opción en un menú desplegable.

#### Sintaxis de los Eventos

La sintaxis básica para manejar eventos en JavaScript es:

```javascript
element.addEventListener('event', function);
```

- `element`: El elemento del DOM al que se le asigna el evento.
- `event`: El tipo de evento que se quiere escuchar (por ejemplo, `click`, `change`, `submit`, etc.).
- `function`: La función que se ejecutará cuando ocurra el evento.

#### Ejemplo Básico con el Evento `click`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Evento Click</title>
  </head>
  <body>
    <button id="myButton">Haz clic aquí</button>

    <script>
      document
        .getElementById('myButton')
        .addEventListener('click', function () {
          alert('Botón clicado!')
        })
    </script>
  </body>
</html>
```

#### Ejemplo con el Evento `change` y `submit` para un Formulario

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Eventos en Formularios</title>
  </head>
  <body>
    <form id="myForm">
      <input
        type="text"
        id="myInput"
        name="username"
        placeholder="Nombre de usuario"
      />
      <button type="submit">Enviar</button>
    </form>

    <script>
      document
        .getElementById('myInput')
        .addEventListener('change', function (event) {
          console.log('Valor cambiado a: ' + event.target.value)
        })

      document
        .getElementById('myForm')
        .addEventListener('submit', function (event) {
          event.preventDefault() // Prevenir el comportamiento por defecto de recargar la página
          console.log(
            'Formulario enviado con el nombre de usuario: ' +
              event.target.username.value
          )
        })
    </script>
  </body>
</html>
```

### El Objeto `event`

Cuando se desencadena un evento, se crea un objeto `event` que contiene información sobre el evento que ocurrió. Algunas propiedades y métodos comunes del objeto `event` son:

- `event.type`: El tipo de evento que ocurrió (por ejemplo, `click`, `submit`).
- `event.target`: El elemento que disparó el evento.
- `event.preventDefault()`: Método que cancela el evento si es cancelable, previniendo el comportamiento por defecto del evento.
- `event.stopPropagation()`: Método que detiene la propagación del evento a otros elementos.

### Propagación de un Evento

La propagación de eventos en JavaScript sigue un modelo de burbujeo, donde el evento primero se ejecuta en el elemento que lo desencadenó y luego sube por la jerarquía del DOM hacia los elementos padres. También existe el modelo de captura, donde el evento se captura desde el elemento más externo hacia el más interno.

#### Ejemplo de Propagación de un Evento

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Propagación de Eventos</title>
  </head>
  <body>
    <div id="parent" style="padding: 20px; background-color: lightblue;">
      Parent
      <div id="child" style="padding: 20px; background-color: lightcoral;">
        Child
      </div>
    </div>

    <script>
      document
        .getElementById('parent')
        .addEventListener('click', function (event) {
          alert('Padre clicado!')
        })

      document
        .getElementById('child')
        .addEventListener('click', function (event) {
          alert('Hijo clicado!')
          event.stopPropagation() // Detener la propagación del evento
        })
    </script>
  </body>
</html>
```

En este ejemplo, si haces clic en el elemento hijo (`child`), el `alert` del hijo se mostrará y la propagación del evento se detendrá, por lo que el `alert` del padre no se ejecutará.

### Beneficios de la Propagación de Eventos

Utilizar la propagación de eventos puede ayudar a reducir la cantidad de manejadores de eventos en una página. En lugar de asignar un manejador de eventos a cada elemento hijo, puedes asignar un manejador al elemento padre y dejar que el evento se propague, gestionando la lógica en una única función. Esto facilita el trabajo del navegador al reducir la cantidad de eventos que debe manejar y mejora el rendimiento de la página.

Por ejemplo, en lugar de añadir un evento `click` a cada botón dentro de una lista, puedes añadir un solo evento `click` al contenedor de la lista y determinar cuál botón se clicó usando `event.target`.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Delegación de Eventos</title>
  </head>
  <body>
    <div id="buttonContainer">
      <button>Botón 1</button>
      <button>Botón 2</button>
      <button>Botón 3</button>
    </div>

    <script>
      document
        .getElementById('buttonContainer')
        .addEventListener('click', function (event) {
          if (event.target.tagName === 'BUTTON') {
            alert('Clicado: ' + event.target.textContent)
          }
        })
    </script>
  </body>
</html>
```

En este ejemplo, el contenedor `buttonContainer` gestiona todos los clics en los botones hijos, lo que simplifica el código y mejora el rendimiento.

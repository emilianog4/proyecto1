**`getAttribute` y `setAttribute`**

**¿Qué son?**
`getAttribute` y `setAttribute` son métodos en JavaScript que se utilizan para obtener y establecer atributos en los elementos del DOM (Document Object Model).

**¿De dónde provienen?**
Estos métodos forman parte de la API del DOM, que es una interfaz de programación para los documentos HTML y XML. La API del DOM permite acceder y manipular la estructura del documento desde el código JavaScript.

**¿Para qué los usamos?**

- `getAttribute`: Este método se usa para obtener el valor de un atributo específico de un elemento.
- `setAttribute`: Este método se usa para establecer el valor de un atributo específico de un elemento.

**Ejemplos no técnicos:**

- Imagina que un botón tiene una etiqueta que dice "enviar". Usar `getAttribute` es como leer esa etiqueta para saber qué dice. Usar `setAttribute` es como cambiar la etiqueta para que diga "enviando".

**Sintaxis general:**

- `getAttribute`: Elemento con un atributo `src`, obtienes su valor.
- `setAttribute`: Elemento con un atributo `src`, cambias su valor a otro.

**`classList`**

**¿Qué es?**
`classList` es una propiedad que devuelve una colección activa de las clases CSS de un elemento. Permite manipular fácilmente las clases del elemento sin tener que gestionar directamente el atributo `class`.

**¿De dónde proviene?**
`classList` es una propiedad de los elementos del DOM que proporciona una API para trabajar con las clases del elemento.

**¿Para qué lo usamos?**
Usamos `classList` para:

- Agregar nuevas clases a un elemento.
- Eliminar clases de un elemento.
- Alternar clases en un elemento.
- Verificar si un elemento tiene una clase específica.

**Ejemplos no técnicos:**

- Imagina que tienes una tarjeta con varias etiquetas (clases) como "importante", "pendiente", y "urgente". Con `classList`, puedes agregar una nueva etiqueta "completado", quitar la etiqueta "pendiente" o verificar si la tarjeta tiene la etiqueta "urgente".

**Sintaxis general:**

- Agregar una clase: Elemento, agregas una etiqueta "activo".
- Eliminar una clase: Elemento, quitas una etiqueta "inactivo".
- Alternar una clase: Elemento, alternas una etiqueta "seleccionado".
- Verificar una clase: Elemento, verificas si tiene la etiqueta "importante".

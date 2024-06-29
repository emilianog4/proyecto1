# Practicas de desarrollo.

## Pasos para subir cambios a GitHub

1. Tener un usuario con las credenciales de name y email.

En el buscador de windows tipear cmd y verificarlo

```bash
git config --global user.name
git config --global user.email
```

en caso de no tenerlas hay que agregarlas

```bash
git config --global user.name "tu-usuario-github"
git config --global user.email "tu-email-github"
```

2. Ir a github new repository, agregar el nombre del nuevo repo, dejarlo público o privado, dependiendo la situación.

3. Agregar los comandos en nuestro local en VS Code.

```bash
git add . // o el nombre de los archivos que desees subir
git commit -m "descripción de los cambios propuestos"
git remote add origin "url-del-repo"
git branch -m "nombre-de-tu-rama" // pasarla de master a main
git push origin main
```

4. En el caso que existiera el repositorio y desearamos subir cambios, primero hay que clonar el repositorio.

- Buscar la url del repositorio y en el lugar de nuestro local que lo fueramos a alojar tirar por consola:

```bash
git clone url-del-repo
cd nombre-de-la-carpeta-del-repo
code . // Esto sirve para entrar a VS Code
npm install // Solo en el caso de que hubiera dependencias a instalar en el proyecto, de lo contrario no es necesario.
```

# Comandos adicionales útiles

- Para crear una nueva rama:

```bash
git checkout -b nombre-de-la-rama
```

- Para cambiar a una rama existente:

```bash
git checkout nombre-de-la-rama
```

- Para obtener los últimos cambios del repositorio remoto:

```bash
git pull origin nombre-de-la-rama // dependera el caso, por lo general se traen los ultimos cambios en remotos de staging al staging local, para partir actualizados.
```

Es importante tener en cuenta hacia donde queremos pasar los cambios, ya que por lo general tenemos un ambiente de staging (ensayo o pruebas) y un ambiente de producción.

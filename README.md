# IMDB
<p>El objetivo de este proyecto final es crear una BBDD de películas y guardar todo ello en un
fichero en formato .json.</p>

<ol>
  <li>Convertir a un string el objeto Imdb.<br>- PISTA: JSON.stringify()</li>
  <li>Guardar dicho objeto en un fichero JSON con el nombre “imdbBBDD.json”.<br>- PISTA: fs.writeFileSync(file, data[, options])</li>
  <li>Leer el fichero “imdbBBDD.json” y almacenarlo en una instancia de la clase Imdb<br>- PISTA: fs.readFileSync(path[, options])<br>- PISTA: JSON.parse()</li>
  <li>Crear un nuevo fichero finaltest.ts que solicite por pantalla cada uno de las propiedades de la clase Profesional e inserte un nuevo profesional a una película del fichero “imdbBBDD.json”<br>- PISTA: Buscar readLineSync</li>
</ol>

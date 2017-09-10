Informe
=========
* **Carátula**
* **Indice / Páginado**
* **Requerimientos**
* **Protipos**
* **Historias**
* **Modelo de base de datos**
* Estructura de Firebase
* **Librerias/Frameworks**
* **APIs**
* Mapa de Sitio
* Ontologías a usar para cada página
* Ejemplos de json-ld o rdfa
* Resultados / Indexación.

Trabajo para Laboratorio
============
* **Vuejs / Express**
* **Diseño de interfaces**


## Librerias / Servicios

### Wikidata:
```
https://query.wikidata.org/sparql?format=json&query=select distinct ?type where {
?thing a ?type
}
limit 20

```
### Youtube API:
Habilitar api
```
https://console.cloud.google.com

```
Usar el api:
```
https://www.googleapis.com/youtube/v3/search?part=id&q=trailer spiderman 3&type=video&key=AIzaSyAHyQ-GlNMGVxECRjRyInBDNJS-pf7biVQ
```

### Search API

```
https://www.googleapis.com/customsearch/v1?key=AIzaSyAHyQ-GlNMGVxECRjRyInBDNJS-pf7biVQ&cx=006657962570273736883:koufbjsjmxq&q=harry potter 3 poster&searchType=image&fileType=jpg&imgSize=xlarge&alt=json
```

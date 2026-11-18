# Sitio Dirección de Educación Digital UTN.BA — versión portada dinámica 2027

Archivos listos para publicar en GitHub Pages. Descomprimí y subí el **contenido** de esta carpeta a la raíz del repositorio `ead2027/direccion-educacion-digital`.

## Cambios
- Logo EAD incorporado al encabezado de todas las páginas (`assets/logo-ead.png`).
- Portada renovada con movimiento suave y apariencia distinta de GITE.
- Carrusel de tres destacados con ilustraciones originales SVG en `assets/area-*.svg`, reproducción automática cada 6,5 segundos, controles, indicadores, teclado y pausa. Respeta la preferencia de movimiento reducido del sistema.
- Las tres áreas funcionales y el acceso a GITE se conservan.

## Cómo publicar novedades en el carrusel
Editá el archivo **`novedades.js`**: cada bloque tiene `categoria`, `titulo`, `descripcion`, `imagen`, `enlace`, `boton` y `tema`. Podés agregar, quitar o sustituir bloques. Para imágenes nuevas, subilas a `assets/` y escribí la ruta en `imagen` (por ejemplo: `assets/jornada-ia-2027.jpg`). El carrusel se adapta automáticamente a la cantidad de novedades.

## Configuración
En `config.js` podés cambiar `giteUrl` por la URL de GitHub Pages del grupo y `contactEmail` por el correo institucional. No hace falta cambiar otras páginas.

## Nota institucional
La denominación y las áreas se presentan como estructura **propuesta para 2027**, sujeta a aprobación institucional. La Coordinación del Plan de Formación Docente no aparece en este sitio.

# Dirección de Educación Digital, Investigación y Vinculación Tecnológica — UTN.BA

Sitio web estático de presentación institucional, preparado para **GitHub Pages**.

## Estado institucional

La denominación «Dirección de Educación Digital, Investigación y Vinculación Tecnológica» corresponde al cambio previsto para 2027, según la información suministrada para este proyecto. El sitio indica «Horizonte 2027» y **no afirma que la nueva denominación ya esté formalizada**. Antes de publicarlo como portal oficial, revisar la aprobación del nombre y validar los contenidos con la autoridad institucional.

## Archivos

- `index.html`: portada y presentación de la Dirección.
- `servicios.html`: áreas y líneas de trabajo.
- `proyectos.html`: agenda de proyectos y desarrollos.
- `investigacion.html`: investigación y acceso a GITE.
- `contacto.html`: canales institucionales.
- `styles.css`: todos los estilos visuales y ajustes de responsive.
- `config.js`: URL del sitio GITE y dirección de correo.
- `script.js`: navegación móvil y vínculos configurables.
- `assets/logo-gite.png`: logo de GITE utilizado únicamente en sus tarjetas.

## Enlazar el sitio nuevo de GITE

En `config.js`, reemplazar esta URL:

```js
  giteUrl: "https://frba.utn.edu.ar/ead/investigacion/",
```

por la URL que GitHub Pages asigne al sitio independiente de GITE, por ejemplo `https://usuario.github.io/gite/` (el ejemplo **no es una URL real verificada**). Esto actualizará todos los enlaces de GITE del nuevo sitio sin editar el HTML.

La URL precargada apunta a la página institucional actualmente existente de GITE en UTN.BA.

## Publicar en GitHub Pages

1. Crear un repositorio nuevo, separado del repositorio de GITE.
2. Subir **el contenido de esta carpeta**, con `index.html` en la raíz.
3. En `Settings > Pages`, seleccionar la rama de publicación (`main`) y `/ (root)`.
4. Comprobar los enlaces; luego configurar la URL del GITE nuevo.

## Notas de contenido

- No hay indicadores cuantitativos ni proyectos cerrados inventados. La sección Proyectos describe ámbitos de desarrollo e iniciativas de trabajo.
- La marca del encabezado es tipográfica («UTN.BA»), no pretende reemplazar la identidad visual oficial de la Universidad.
- Se usa Google Fonts; hay alternativas locales en CSS si no carga.
- Se han incluido estados de enfoque accesibles, navegación móvil y soporte para usuarios que prefieren reducir el movimiento.

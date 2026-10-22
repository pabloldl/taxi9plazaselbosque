# TAXI 9 PLAZAS EL BOSQUE

Web estática independiente. HTML5, CSS3 y JavaScript vanilla, sin dependencias ni compilación. Abrir `index.html` con Live Server de VS Code. No se han realizado despliegues ni añadido configuraciones de alojamiento.

## Datos y contenido

Nombre: TAXI 9 PLAZAS EL BOSQUE. Teléfono: 615 548 570. Todos los enlaces de llamada utilizan `tel:+34615548570`; la copia utiliza `615548570`. Referencia: El Bosque, Cádiz. Nueve plazas según el nombre comercial. No se atribuyen servicios, horarios, precios, dirección, equipaje, disponibilidad o características técnicas no confirmadas. El enlace de Maps busca el municipio, sin señalar una parada.

El concepto ROUTE 09 es una identidad gráfica propuesta, no el número de una línea o ruta comercial. El dibujo de recorrido es abstracto y no constituye un mapa real. Las fotografías son ilustrativas, ajenas al negocio, y están identificadas en la página.

## Fotografía y licencias

Fotografías descargadas el 22 de octubre de 2026. La [licencia Pexels](https://www.pexels.com/license/) permite su uso en webs y modificación; no implica respaldo del fotógrafo ni de las marcas fotografiadas.

| Archivo | Autor y fuente | Uso |
| --- | --- | --- |
| `img/vehiculo-ilustrativo.webp` | DΛVΞ GΛRCIΛ · [White Passenger Van in Suburban Setting](https://www.pexels.com/photo/white-passenger-van-in-suburban-setting-35831389/) | Franja de portada. No es el taxi real. |
| `img/carretera-ilustrativa.webp` | Phumlani Nangu · [A Grayscale of a White Van on the Road](https://www.pexels.com/photo/a-grayscale-of-a-white-van-on-the-road-7410735/) | Movilidad. No identifica El Bosque ni una ruta ofrecida. |

Se conservan JPG de origen redimensionados por Pexels. Las versiones WebP se han codificado localmente con calidad 0,84 y son las utilizadas en HTML. Tamaños aproximados: 181 y 148 KiB. Recortes de presentación mediante `object-fit`.

Fuentes locales Barlow Regular y Barlow Condensed SemiBold, de Jeremy Tribby, obtenidas del [repositorio Google Fonts](https://github.com/google/fonts/tree/main/ofl/barlow) y su [familia condensada](https://github.com/google/fonts/tree/main/ofl/barlowcondensed). SIL Open Font License 1.1 incluida en `css/OFL.txt`. No se ha creado una fuente nueva; se ha diseñado un sistema tipográfico propio con estas fuentes libres.

## Diseño y originalidad

Se inspeccionaron los HTML y CSS de los 15 proyectos existentes, incluidos los tres alojados en subcarpetas. Se compararon arquitectura, menús, fuentes, encabezados, fotografía, botones, transiciones y footer. No se reutilizan componentes ni archivos de otros proyectos en la web.

- Frente al índice documental del abogado y al fotolibro de Isaac Phoenix: barra compacta con marca, localidad y teléfono; sin menú de capítulos.
- Frente a Informática: sin módulos de interfaz, ventanas ni navegación inferior.
- Frente a las composiciones de hostelería, casas, miel, panadería y otros oficios: cartel amarillo, escudo 09 y fotografía en banda sin textos comerciales superpuestos; sin galería, catálogo ni lista de servicios.
- Barlow y Barlow Condensed no aparecen entre las familias encontradas en las demás webs. Botones con terminación direccional y flecha desplazable; footer como señal terminal con retorno cuadrado.
- Recorrido con progresión vertical al desplazarse; titulares con entrada lateral breve. Sin carruseles, parallax ni animaciones continuas. En móvil se apilan y recomponen cartel, capacidad y contacto.

La diferenciación se refiere a las decisiones de composición y al sistema visual. Elementos funcionales comunes como enlaces telefónicos, foco y HTML semántico se conservan por accesibilidad.

## Accesibilidad y funcionamiento

Enlace para saltar al contenido, foco visible, controles nativos, textos alternativos, estados de copia anunciados con `role=status`, botones cómodos y reducción de movimiento. Contenido visible sin JavaScript. El portapapeles usa Clipboard API con alternativa de selección manual cuando se deniega el acceso. La línea de progreso es decorativa.

SEO: título, descripción, Open Graph y JSON-LD TaxiService con nombre, teléfono y municipio. No se inventa dominio canónico. La imagen Open Graph tiene ruta relativa porque no se ha proporcionado una URL pública; algunos rastreadores requieren convertirla en absoluta cuando exista un dominio real.

## Verificación local

Pruebas en Chrome sin interfaz a 375, 768, 1440 y 1920 px. Capturas completas y resultados en `.qa/`. Se comprobaron imágenes, fuentes locales, anclas, enlaces telefónicos, ausencia de desbordamiento horizontal, errores JavaScript, copia con respuesta de éxito, alternativa con portapapeles denegado y `prefers-reduced-motion`. La lectura de retorno del portapapeles no fue autorizada por el navegador; no se ha verificado por lectura su contenido. Revisión visual de las capturas propias de móvil y escritorio.

Para repetir las pruebas en este equipo: `node .qa/verify.cjs` desde esta carpeta. Utiliza Chrome instalado en su ruta estándar de Windows, servidor efímero en 8779 y CDP en 9349; cierra ambos al acabar. No requiere instalar paquetes. `node --check js/script.js` comprueba la sintaxis.

Solo se ha creado la carpeta de este proyecto; las otras webs se han consultado en lectura.

# 🌐 Proyecto Web - 

Este es un sitio web corporativo e informativo desarrollado con tecnologías web estándar (HTML5, CSS3, SCSS y JavaScript). El propósito del proyecto es presentar contenido estructurado y accesible sobre telecomunicaciones, banca, tecnología, infraestructura, cooperativismo, eventos y otros temas de interés para distribuidores y aliados estratégicos.

---

## 📁 Estructura del Proyecto
├── css/ # Estilos compilados
├── fonts/ # Fuentes personalizadas utilizadas en el sitio
├── images/ # Imágenes y recursos gráficos
├── js/ # Scripts JS para interacción y funcionalidades
├── scss/ # Archivos fuente SCSS (estilos modulares)
├── .gitignore # Archivos a ignorar por Git
├── *.html # Archivos HTML estáticos por secciones o temas
├── process.php # Lógica de backend para formularios de contacto

## 🧩 Principales Secciones HTML

El sitio contiene diversas secciones temáticas, cada una desarrollada como una página estática:

| Página HTML | Descripción |
|-------------|-------------|
| `index.html` | Página de inicio |
| `nosotros.html` | Información sobre la organización |
| `contact.html` | Formulario de contacto |
| `empleos.html` | Oportunidades laborales |
| `eventos.html` | Eventos importantes y próximos |
| `distribuidores.html` | Información para distribuidores |
| `servicios-telecomunicaciones-infraestructura.html` | Servicios tecnológicos ofrecidos |
| `afiliados.html` | Información para afiliados |
| `financiacion.html` | Planes de financiamiento |
| `marketing.html` | Estrategias de marketing |
| `sucursales.html` | Ubicación de sucursales |
| `faq.html` | Preguntas frecuentes |
| `404-error.html` | Página de error personalizada |
| `process.php` | Backend simple para el formulario de contacto |

También hay artículos especializados con temas como:
- Transformación digital en RD
- Avances en telecomunicaciones
- Cooperativismo y desarrollo
- Energía y banca digital
- Educación y software

---

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica de las páginas
- **SCSS**: Preprocesador CSS para estilos más organizados y reutilizables
- **CSS3**: Estilos generales
- **JavaScript**: Interacciones y funciones básicas (validaciones, sliders, etc.)
- **PHP (process.php)**: Procesamiento de formularios
- **Fuentes personalizadas y diseño adaptable**

---

## ⚙️ Cómo ejecutar el proyecto localmente

1. Clona este repositorio:

   ```bash
   git clone https://github.com/GregCuevas/Silkglobal-Dom
   cd Silkglobal-Dom

   Abre el archivo index.html directamente con tu navegador o monta un servidor local:

bash

# Con extensión Live Server (Visual Studio Code)
# O utilizando un servidor como http-server:
npm install -g http-server
http-server .

✅ Requisitos
Navegador moderno (Chrome, Firefox, Edge, Safari)

Editor de código (VS Code recomendado)

Para modificar estilos SCSS, se necesita Node.js y Sass:

bash


npm install -g sass
sass scss/styles.scss css/styles.css

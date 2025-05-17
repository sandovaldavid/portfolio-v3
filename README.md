# 🧑‍💻 Portafolio Personal v3 — DevSandoval

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/sandovaldavid/portfolio-v3)
[![Astro](https://img.shields.io/badge/Astro-4.0-FF5D01.svg?logo=astro)](https://astro.build)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Netlify Status](https://img.shields.io/badge/netlify-deployed-success)](https://devsandoval.me)

> 🚀 **v1.0.0** | Última actualización: Mayo 2025

Bienvenido a mi portafolio de desarrollo web, un sitio moderno, accesible y optimizado para SEO que muestra mis habilidades, proyectos, tecnologías dominadas y presencia en línea. Este sitio fue creado con **Astro 4**, **Tailwind CSS** y otras herramientas modernas para ofrecer una experiencia profesional, multilenguaje y rápida.

---

## ✨ Características

| Estado | Característica | Descripción |
|:------:|:---------------|:------------|
| 🏗️ | 🚀 **Framework** | Desarrollado con Astro + Tailwind CSS 4 |
| 🏗️ | 🌙 **Tema** | Soporte para modo claro y oscuro |
| 🏗️ | 🌐 **Idiomas** | Multilenguaje (Español / Inglés) usando `i18n` |
| 🏗️ | 📁 **Proyectos** | Organizados por categoría: destacados, en desarrollo y todos |
| 🏗️ | 🧠 **Detalles** | Página por proyecto con descripción, imágenes, video, demo y stats de GitHub |
| 🏗️ | ⚡ **Performance** | Optimizada (100% Lighthouse) |
| 🏗️ | 🧩 **Animación** | Logo SVG con animación de dibujado |
| 🏗️ | 🔒 **Estándares** | Buenas prácticas de accesibilidad y SEO (con `astro-seo` y `astro-sitemap`) |
| 🏗️ | 📱 **Responsive** | 100% responsive y mobile-first |

> 📌 Leyenda: ✅ Completado | 🏗️ En desarrollo | 📝 Planificado

---

## 🧱 Tecnologías utilizadas

| Categoría | Tecnologías |
|:---------:|:------------|
| 🛠️ **Core** | [![Astro](https://img.shields.io/badge/Astro_4-000000?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build) [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com) |
| 📄 **Contenido** | [![MDX](https://img.shields.io/badge/MDX-1B1F24?style=for-the-badge&logo=mdx&logoColor=white)](https://mdxjs.com) |
| 🌐 **Internacionalización** | `i18n` para traducción con archivos `.json` |
| 🔍 **SEO** | `astro-seo` para etiquetas meta y `astro-sitemap` para generación de sitemap.xml |
| 📊 **Integración** | GitHub API para estadísticas en proyectos |

---

## 📁 Estructura del proyecto

```bash
📁 /my-portfolio
├── 📁 public/                    # Archivos públicos (favicon, imágenes, OG, etc.)
│   ├── images/                   # Imágenes globales y optimizadas
│   └── social/                   # Imágenes para meta tags (og:image)
│
├── 📁 src/
│   ├── 📁 components/            # Componentes reutilizables
│   │   ├── layout/
│   │   ├── ui/
│   │   ├── sections/
│   │   └── common/
│   │
│   ├── 📁 content/               # Contenido modularizado
│   │   ├── projects/
│   │   │   ├── proyecto1.mdx
│   │   │   └── ...
│   │   └── testimonials/         # Opcional, si manejas Social Proof
│
│   ├── 📁 layouts/              # Layouts generales (BaseLayout, ProjectLayout, etc.)
│
│   ├── 📁 locales/              # Archivos de traducción i18n
│   │   ├── es.json
│   │   └── en.json
│
│   ├── 📁 pages/                # Rutas del sitio
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   ├── [slug].astro         # Detalles de cada proyecto (dinámico)
│   │   └── contact.astro
│
│   ├── 📁 styles/               # Estilos globales y utilidades Tailwind
│   │   └── tailwind.css
│
│   ├── 📁 utils/                # Funciones de utilidad (formatos, helpers)
│   ├── 📁 config/               # Configuración central (colores, idiomas, meta)
│   └── 📁 services/             # Llamadas externas (GitHub, EmailJS, etc.)
│
├── astro.config.mjs            # Configuración Astro
├── tailwind.config.js          # Configuración Tailwind
├── tsconfig.json               # Configuración TypeScript (opcional)
├── package.json                # Dependencias
└── README.md                   # Documentación del proyecto

```

---

## 🧠 Instalación y uso

```bash
# 1. Clona el repositorio
git clone https://github.com/sandovaldavid/portfolio-v3.git
cd portfolio-v3

# 2. Instala dependencias
pnpm install

# 3. Corre el servidor de desarrollo
pnpm run dev
```

### 📋 Comandos disponibles

| Comando | Descripción |
|:--------|:------------|
| `pnpm run dev` | 🚀 Inicia el servidor de desarrollo en `localhost:3000` |
| `pnpm run build` | 📦 Construye el sitio para producción en `./dist/` |
| `pnpm run preview` | 👀 Vista previa de la build de producción localmente |
| `pnpm run check` | 🔍 Verifica la sintaxis TypeScript y Astro |

---

## 📸 Imágenes y Meta Tags

| Tipo | Descripción | Especificaciones |
|:-----|:------------|:-----------------|
| 🖼️ **Meta Tags** | Ubicadas en `public/og-images/` | PNG/JPG, 1200x630px |
| 🏁 **Bienvenida** | Imagen para la página principal | Optimizada para OG |
| 🧰 **Proyectos** | Thumbnails para proyectos | Formatos consistentes |
| 📞 **Contacto** | Imagen para la sección de contacto | Branding coherente |
| ⭐ **Social Proof** | Imágenes para testimonios | Formato profesional |

> 💡 **Tip**: Se optimizaron todas las imágenes con la herramienta [Squoosh](https://squoosh.app/) para mejorar el rendimiento.

---

## 📬 Contacto

| Red | Perfil |
|:----|:-------|
| 🌐 **Web** | [![Portfolio](https://img.shields.io/badge/Portfolio-devsandoval.me-blue?style=flat&logo=safari&logoColor=white)](https://devsandoval.me) |
| 💼 **LinkedIn** | [![LinkedIn](https://img.shields.io/badge/LinkedIn-@devsandoval-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/devsandoval) |
| 💻 **GitHub** | [![GitHub](https://img.shields.io/badge/GitHub-@sandovaldavid-181717?style=flat&logo=github)](https://github.com/sandovaldavid) |
| 📧 **Email** | [![Email](https://img.shields.io/badge/Email-contact@devsandoval.me-D14836?style=flat&logo=gmail&logoColor=white)](mailto:contact@devsandoval.me) |

---

## 🪪 Licencia

Este proyecto está bajo la licencia `MIT`. Puedes usarlo como inspiración para crear tu propio portafolio, pero no copies el contenido textual ni mis proyectos personales.

---
<div align="center">

  *✨ Desarrollado por [David Sandoval](https://devsandoval.me/) © 2025*

</div>

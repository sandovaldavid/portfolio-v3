# 🧑‍💻 Portafolio Personal v3 — DevSandoval

Bienvenido a mi portafolio de desarrollo web, un sitio moderno, accesible y optimizado para SEO que muestra mis habilidades, proyectos, tecnologías dominadas y presencia en línea. Este sitio fue creado con **Astro 4**, **Tailwind CSS** y otras herramientas modernas para ofrecer una experiencia profesional, multilenguaje y rápida.

---

## ✨ Características

- [ ] 🚀 Desarrollado con Astro + Tailwind CSS 4.
- [ ] 🌙 Soporte para modo claro y oscuro.
- [ ] 🌐 Multilenguaje (Español / Inglés) usando `i18n`.
- [ ] 📁 Proyectos organizados por categoría: destacados, en desarrollo y todos.
- [ ] 🧠 Página de detalle por proyecto con descripción, imágenes, video, demo y stats de GitHub.
- [ ] ⚡ Performance optimizada (100% Lighthouse).
- [ ] 🧩 Animación inicial con logo SVG dibujándose.
- [ ] 🔒 Buenas prácticas de accesibilidad y SEO (con `astro-seo` y `astro-sitemap`).
- [ ] 📱 100% responsive y mobile-first.

---

## 🧱 Tecnologías utilizadas

- [Astro 4](https://astro.build)
- [Tailwind CSS 4](https://tailwindcss.com)
- [MDX](https://mdxjs.com) para contenido dinámico.
- `i18n` para traducción con archivos `.json`.
- `astro-seo` para etiquetas meta automatizadas.
- `astro-sitemap` para generación de sitemap.xml.
- GitHub API (opcional) para estadísticas en proyectos.

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

---

## 📸 Imágenes y Meta Tags

- Las imágenes para `meta tags` están ubicadas en `public/og-images/`.
- Formato sugerido: `PNG` o `JPG`, tamaño recomendado: **1200x630 px**.
- Incluye imágenes para:

  - 🏁 Bienvenida
  - 🧰 Proyectos
  - 📞 Contacto
  - ⭐ Social Proof

---

## 📬 Contacto

- 🌐 Portafolio: [devsandoval.me](https://devsandoval.me)
- 💼 LinkedIn: [@devsandoval](https://linkedin.com/in/devsandoval)
- 💻 GitHub: [@sandovaldavid](https://github.com/sandovaldavid)
- 📧 Email: [contact@devsandoval.me](mailto:contact@devsandoval.me)

---

## 🪪 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo como inspiración para crear tu propio portafolio, pero no copies el contenido textual ni mis proyectos personales.

---

<div align="center">
  <p>
    <small>Desarrollado por <a href="https://devsandoval.me/">David Sandoval</a></small>
  </p>
</div>

# Portafolio Personal - Nohel Segovia | Fullstack & ML Developer

Este es el repositorio de mi portafolio personal, una aplicación web moderna construida con Next.js, TypeScript y Tailwind CSS. El sitio está diseñado para mostrar mis habilidades, proyectos y experiencia como Desarrollador Fullstack con una especialización en Machine Learning y HealthTech.

---

## ✨ Características Principales

*   **Diseño Moderno y Responsivo:** Construido con Tailwind CSS y Shadcn/UI para una interfaz limpia y profesional que se adapta a cualquier dispositivo.
*   **Secciones Interactivas:** Navegación fluida y animaciones elegantes utilizando Framer Motion para una experiencia de usuario dinámica.
*   **Showcase de Proyectos:** Una vista detallada de mis trabajos, presentada en modales que incluyen descripción, stack tecnológico y métricas clave.
*   **Funcionalidad de IA:** Integración de un flujo con **Genkit** para ofrecer sugerencias de código impulsadas por IA dentro de un modal de proyecto.
*   **Visualización de Datos:** Gráficos personalizados creados con Recharts para mostrar métricas de proyectos y uso de tecnologías.
*   **Modo Claro/Oscuro:** Un interruptor de tema que permite a los usuarios elegir su preferencia visual, con persistencia entre visitas.
*   **Formulario de Contacto Funcional:** Integrado con EmailJS para recibir mensajes y consultas directamente en mi correo.
*   **Mapa Dinámico:** Muestra mi ubicación utilizando la API de mapas estáticos de Geoapify.

---

## 🚀 Stack Tecnológico

*   **Framework:** [Next.js](https://nextjs.org/) (con App Router)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes UI:** [Shadcn/UI](https://ui.shadcn.com/)
*   **Funcionalidad IA:** [Genkit](https://firebase.google.com/docs/genkit)
*   **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
*   **Gráficos:** [Recharts](https://recharts.org/)
*   **Manejo de Formularios:** [React Hook Form](https://react-hook-form.com/) y [Zod](https://zod.dev/)
*   **Envío de Emails:** [EmailJS](https://www.emailjs.com/)

---

## ⚙️ Cómo Empezar

Sigue estos pasos para levantar el proyecto en tu entorno de desarrollo local.

### 1. Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 20.x o superior recomendada).

### 2. Instalación

Clona el repositorio e instala las dependencias del proyecto:

```bash
git clone https://github.com/ITZ-NANO21-MC/Nohel-Segovia-Portafolio.git
cd Nohel-Segovia-Portafolio

npm install
```

### 3. Configurar Variables de Entorno

El proyecto necesita algunas variables de entorno para los servicios de terceros. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes claves:

```env
# Clave de API para el mapa en la sección de contacto
NEXT_PUBLIC_GEOAPIFY_API_KEY=TU_API_KEY_DE_GEOAPIFY

# Claves para el servicio de envío de email del formulario de contacto
NEXT_PUBLIC_EMAILJS_SERVICE_ID=TU_SERVICE_ID_DE_EMAILJS
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=TU_TEMPLATE_ID_DE_EMAILJS
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=TU_PUBLIC_KEY_DE_EMAILJS
```
-   **Geoapify:** Obtén una clave de API gratuita en [Geoapify.com](https://www.geoapify.com/).
-   **EmailJS:** Regístrate en [EmailJS](https://www.emailjs.com/) para obtener tu Service ID, Template ID y Public Key.

### 4. Ejecutar el Servidor de Desarrollo

Una vez instaladas las dependencias y configuradas las variables de entorno, puedes iniciar el servidor:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) (o el puerto que se indique) en tu navegador para ver la aplicación.

---

## 📜 Scripts Disponibles

*   `npm run dev`: Inicia el servidor de desarrollo de Next.js.
*   `npm run build`: Compila la aplicación para un entorno de producción.
*   `npm run start`: Inicia un servidor de producción de Next.js (requiere `build` previo).
*   `npm run lint`: Ejecuta el linter (ESLint) para revisar la calidad del código.

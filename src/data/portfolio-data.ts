import type { Project, SkillCategory, TimelineEvent, BlogArticle, StatCard } from '@/types';
import { BrainCircuit, Code, FlaskConical, GitBranch, Github, Linkedin, Monitor, Zap, Database, Cloud, Container } from 'lucide-react';
import React from 'react';
import { SiTensorflow, SiScikitlearn, SiPandas, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiVercel, SiMysql, SiMongodb, SiHtml5, SiCss3, SiBootstrap, SiPython, SiGooglegemini, SiNumpy, SiJavascript, SiTypescript } from 'react-icons/si';
import {FaCode, FaHighlighter} from 'react-icons/fa'

export const navItems = [
  { title: 'Sobre Mí', href: '#about' },
  { title: 'Habilidades', href: '#skills' },
  { title: 'Proyectos', href: '#projects' },
  { title: 'Métricas', href: '#metrics' },
  { title: 'Contacto', href: '#contact' },
];

export const heroStats: StatCard[] = [
  { value: '99%', label: 'Precisión en diagnóstico médico', icon: BrainCircuit },
  { value: '70%', label: 'Reducción tiempo diagnóstico', icon: Zap },
  { value: '20%', label: 'Aumento productividad', icon: Code },
  { value: '60%', label: 'Disminución costos operativos', icon: BrainCircuit },
];

export const projects: Project[] = [
  {
    id: 'tb-detector-ai',
    title: 'TB-Detector-AI',
    description: 'Sistema de IA para el diagnóstico de tuberculosis a partir de imágenes de rayos X de tórax.',
    problem: 'El diagnóstico manual de la tuberculosis es lento, costoso y propenso a errores humanos, especialmente en áreas con recursos limitados.',
    solution: 'Desarrollamos un modelo de Deep Learning (CNN) que analiza radiografías de tórax y detecta signos de tuberculosis con alta precisión, proporcionando un diagnóstico preliminar en segundos.',
    status: 'Production Ready',
    stack: [
      { name: 'TensorFlow', icon: React.createElement(SiTensorflow) },
      { name: 'Flask', icon: React.createElement(FlaskConical) },
      { name: 'MySQL', icon: React.createElement(SiMysql) },
      { name: 'Html', icon: React.createElement(SiHtml5) },
      { name: 'CSS', icon: React.createElement(SiCss3)},
      {name: 'JavaScript', icon: React.createElement(SiJavascript)},
      {name: 'Bootstrap', icon: React.createElement(SiBootstrap)},
      { name: 'Docker', icon: React.createElement(Container) },
    ],
    metrics: [
      { label: 'Precisión del Modelo', value: '99.2%' },
      { label: 'Tiempo de Inferencia', value: '< 2s' },
      { label: 'Disponibilidad', value: '99.9%' },
    ],
    demoUrl: '#',
    codeUrl: '#',
    image: { id: 'tb-detector-ai' },
  },
  {
    id: 'nano-editor-v3.2',
    title: 'NanoEditor v3.2',
    description: 'Editor de código minimalista con sugerencias de código impulsadas por IA.',
    problem: 'Los editores de código modernos pueden ser pesados y complejos. Los desarrolladores necesitan una herramienta ligera que acelere la codificación con asistencia inteligente.',
    solution: 'Creamos un editor de código de escritorio, que contiene una interfaz limpia y funciones esenciales, integrado con un modelo de lenguaje (Gemini) que proporciona sugerencias de código contextuales y autocompletado.',
    status: 'In Development',
    stack: [
      { name: 'Python', icon: React.createElement(SiPython)},
      { name: 'Pygments', icon: React.createElement(FaHighlighter) },
      { name: 'Customtkinter', icon: React.createElement(Monitor) },
      { name: 'Jedi', icon: React.createElement(FaCode) },
      { name: 'Google Gen AI SDK', icon: React.createElement(SiGooglegemini ) },
    ],
    metrics: [
      { label: 'Latencia de Sugerencia', value: '~300ms' },
      { label: 'Reducción de Código', value: '30%' },
      { label: 'Satisfacción Usuario', value: '95%' },
    ],
    demoUrl: '#',
    codeUrl: '#',
    image: { id: 'nano-editor' },
  },
  {
    id: 'techfix-solutions',
    title: 'TechFix Solutions - Landing Page',
    description: 'Landing page moderna y profesional para una empresa de reparación de tecnología.',
    problem: 'La empresa necesitaba una presencia en línea profesional y rápida para mostrar sus servicios, generar confianza y captar nuevos clientes de manera efectiva.',
    solution: 'Se construyó una landing page con Next.js, totalmente responsiva y optimizada para el rendimiento. Presenta los servicios de forma clara, incluye testimonios de clientes y un formulario de contacto funcional para solicitar cotizaciones.',
    status: 'Production Ready',
    stack: [
      { name: 'Next.js', icon: React.createElement(SiNextdotjs) },
      { name: 'TypeScript', icon: React.createElement(SiTypescript) },
      { name: 'Tailwind CSS', icon: React.createElement(SiTailwindcss) },
      { name: 'Shadcn/UI', icon: React.createElement(Monitor) },
      { name: 'React Hook Form', icon: React.createElement(FaCode) },
    ],
    metrics: [
      { label: 'Tiempo de Carga (LCP)', value: '< 1.2s' },
      { label: 'Aumento de Leads', value: '+25%' },
      { label: 'Compatibilidad', value: '99.5%' },
    ],
    demoUrl: '#',
    codeUrl: 'https://github.com/ITZ-NANO21-MC/TechFix-Web',
    image: { id: 'techfix-solutions' },
  },
  {
    id: 'whatsapp-chatbot',
    title: 'Chatbot de WhatsApp con ML',
    description: 'Chatbot inteligente para atención al cliente automatizada en WhatsApp.',
    problem: 'Las empresas reciben un alto volumen de consultas repetitivas que saturan a los equipos de soporte, resultando en tiempos de respuesta lentos y altos costos operativos.',
    solution: 'Un chatbot que utiliza NLP (Procesamiento de Lenguaje Natural) para entender y responder preguntas frecuentes, escalar conversaciones complejas a agentes humanos y realizar tareas como seguimiento de pedidos.',
    status: 'Production Ready',
    stack: [
      { name: 'Python', icon: React.createElement(SiPython) },
      { name: 'Scikit-learn', icon: React.createElement(SiScikitlearn) },
      { name: 'Numpy', icon: React.createElement(SiNumpy) },
      { name: 'Git', icon: React.createElement(GitBranch) },
    ],
    metrics: [
      { label: 'Tasa de Automatización', value: '85%' },
      { label: 'Tiempo de Respuesta', value: 'Instantáneo' },
      { label: 'Reducción de Costos', value: '50%' },
    ],
    demoUrl: '#',
    codeUrl: '#',
    image: { id: 'whatsapp-chatbot' },
  },
  {
    id: 'movie-finder',
    title: 'MovieFinder',
    description: 'Aplicación web para buscar y descubrir películas utilizando una API externa.',
    problem: 'Los usuarios a menudo tienen dificultades para encontrar información centralizada sobre películas, como calificaciones, sinopsis y trailers.',
    solution: 'Una interfaz de usuario simple y rápida que consume la API de The Movie Database (TMDb) para permitir a los usuarios buscar películas, ver detalles y descubrir títulos populares o recomendados.',
    status: 'Archived',
    stack: [
      { name: 'Html', icon: React.createElement(SiHtml5) },
      { name: 'CSS', icon: React.createElement(SiCss3) },
      { name: 'JavaScript', icon: React.createElement(SiJavascript) },
      { name: 'REST API', icon: React.createElement(Code) },
      { name: 'GitHub Pages', icon: React.createElement(Github) },
    ],
    metrics: [
      { label: 'Tiempo de Carga', value: '< 1.5s' },
      { label: 'Llamadas a API / día', value: '10k+' },
      { label: 'Tasa de Rebote', value: '25%' },
    ],
    demoUrl: '#',
    codeUrl: '#',
    image: { id: 'movie-finder' },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Machine Learning',
    skills: [
      { name: 'TensorFlow', level: 'Intermedio', progress: 55, icon: React.createElement(SiTensorflow) },
      { name: 'Scikit-learn', level: 'Intermedio', progress: 65, icon: React.createElement(SiScikitlearn) },
      { name: 'Pandas', level: 'Avanzado', progress: 90, icon: React.createElement(SiPandas) },
      { name: 'NLP', level: 'Básico', progress: 30, icon: React.createElement(BrainCircuit) },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python (Flask)', level: 'Avanzado', progress: 95, icon: React.createElement(FlaskConical) },
      { name: 'Node.js', level: 'Básico', progress: 35, icon: React.createElement(SiNodedotjs) },
      { name: 'MySQL', level: 'Intermedio', progress: 60, icon: React.createElement(SiMysql) },
      { name: 'MongoDB', level: 'Básico', progress: 35, icon: React.createElement(SiMongodb) },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 'Intermedio', progress: 50, icon: React.createElement(SiReact) },
      { name: 'Next.js', level: 'Básico', progress: 30, icon: React.createElement(SiNextdotjs) },
      { name: 'TypeScript', level: 'Básico', progress: 35, icon: React.createElement(Code) },
      { name: 'Tailwind CSS', level: 'Básico', progress: 20, icon: React.createElement(SiTailwindcss) },
    ],
  },
  {
    title: 'DevOps & Herramientas',
    skills: [
      { name: 'Docker', level: 'Avanzado', progress: 80, icon: React.createElement(Container) },
      { name: 'Git & GitHub', level: 'Avanzado', progress: 95, icon: React.createElement(GitBranch) },
      { name: 'Vercel', level: 'Básico', progress: 25, icon: React.createElement(SiVercel) },
      { name: 'Cloud', level: 'Básico', progress: 20, icon: React.createElement(Cloud) },
    ],
  },
];

export const timeline: TimelineEvent[] = [
  {
    date: '2024 - Presente',
    title: 'Ingeniería de Sistemas',
    institution: 'Universidad Nacional Abierta',
    description: 'Cursando estudios superiores para formalizar y expandir conocimientos en ciencias de la computación y desarrollo de software a gran escala.',
  },
  {
    date: '2023',
    title: 'Certificación en Machine Learning',
    institution: 'FreeCodeCamp',
    description: 'Programa intensivo cubriendo desde los fundamentos de ML hasta redes neuronales con Python, TensorFlow y Pandas.',
  },
  {
    date: '2022',
    title: 'Certificación en Análisis de Datos',
    institution: 'FreeCodeCamp',
    description: 'Formación completa en la recolección, limpieza, análisis y visualización de datos utilizando Python y librerías como NumPy y Matplotlib.',
  },
];

export const blogArticles: BlogArticle[] = [
  {
    id: 'ml-precision',
    title: 'Cómo implementé un modelo de IA con 99% de precisión',
    description: 'Un deep dive técnico sobre la arquitectura, el preprocesamiento de datos y el ajuste de hiperparámetros del proyecto TB-Detector-AI.',
    imageUrlId: 'blog-ml-precision',
    link: '#',
  },
  {
    id: 'python-arch',
    title: 'Arquitectura modular en proyectos Python con Flask',
    description: 'Explorando patrones como Blueprints y la inyección de dependencias para crear aplicaciones Flask escalables y mantenibles.',
    imageUrlId: 'blog-python-arch',
    link: '#',
  },
  {
    id: 'flask-docker',
    title: 'Deploy de aplicaciones Flask con Docker y Nginx',
    description: 'Una guía paso a paso para contenedorizar una aplicación Flask y desplegarla en producción de forma eficiente y segura.',
    imageUrlId: 'blog-flask-docker',
    link: '#',
  },
];

export const socialLinks = {
  whatsapp: "https://wa.me/+584246684134", 
  github: "https://github.com/ITZ-NANO21-MC", 
  linkedin: "https://linkedin.com/in/nohel-gonzalez-96aa02339", 
};

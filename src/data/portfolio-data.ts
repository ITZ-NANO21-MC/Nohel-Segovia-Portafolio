import type { Project, SkillCategory, TimelineEvent, BlogArticle, StatCard } from '@/types';
import { BrainCircuit, Code, FlaskConical, GitBranch, Github, Linkedin, Monitor, Zap, Database, Cloud, Container } from 'lucide-react';
import React from 'react';
import { SiTensorflow, SiScikitlearn, SiPandas, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiVercel, SiPostgresql, SiMongodb } from 'react-icons/si';

export const navItems = [
  { title: 'Sobre Mí', href: '#about' },
  { title: 'Habilidades', href: '#skills' },
  { title: 'Proyectos', href: '#projects' },
  { title: 'Métricas', href: '#metrics' },
  { title: 'Blog', href: '#blog' },
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
      { name: 'React', icon: React.createElement(SiReact) },
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
    solution: 'Creamos un editor de código basado en web con una interfaz limpia y funciones esenciales, integrado con un modelo de lenguaje (LLM) que proporciona sugerencias de código contextuales y autocompletado avanzado.',
    status: 'In Development',
    stack: [
      { name: 'Next.js', icon: React.createElement(SiNextdotjs) },
      { name: 'Genkit AI', icon: React.createElement(BrainCircuit) },
      { name: 'TypeScript', icon: React.createElement(Code) },
      { name: 'Vercel', icon: React.createElement(SiVercel) },
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
    id: 'whatsapp-chatbot',
    title: 'Chatbot de WhatsApp con ML',
    description: 'Chatbot inteligente para atención al cliente automatizada en WhatsApp.',
    problem: 'Las empresas reciben un alto volumen de consultas repetitivas que saturan a los equipos de soporte, resultando en tiempos de respuesta lentos y altos costos operativos.',
    solution: 'Un chatbot que utiliza NLP (Procesamiento de Lenguaje Natural) para entender y responder preguntas frecuentes, escalar conversaciones complejas a agentes humanos y realizar tareas como seguimiento de pedidos.',
    status: 'Production Ready',
    stack: [
      { name: 'Node.js', icon: React.createElement(SiNodedotjs) },
      { name: 'Dialogflow', icon: React.createElement(BrainCircuit) },
      { name: 'MongoDB', icon: React.createElement(SiMongodb) },
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
      { name: 'React', icon: React.createElement(SiReact) },
      { name: 'Tailwind CSS', icon: React.createElement(SiTailwindcss) },
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
      { name: 'TensorFlow', level: 'Avanzado', progress: 90, icon: React.createElement(SiTensorflow) },
      { name: 'Scikit-learn', level: 'Avanzado', progress: 95, icon: React.createElement(SiScikitlearn) },
      { name: 'Pandas', level: 'Avanzado', progress: 90, icon: React.createElement(SiPandas) },
      { name: 'NLP', level: 'Intermedio', progress: 75, icon: React.createElement(BrainCircuit) },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python (Flask)', level: 'Avanzado', progress: 95, icon: React.createElement(FlaskConical) },
      { name: 'Node.js', level: 'Intermedio', progress: 80, icon: React.createElement(SiNodedotjs) },
      { name: 'PostgreSQL', level: 'Intermedio', progress: 70, icon: React.createElement(SiPostgresql) },
      { name: 'MongoDB', level: 'Intermedio', progress: 75, icon: React.createElement(SiMongodb) },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 'Avanzado', progress: 90, icon: React.createElement(SiReact) },
      { name: 'Next.js', level: 'Avanzado', progress: 85, icon: React.createElement(SiNextdotjs) },
      { name: 'TypeScript', level: 'Avanzado', progress: 90, icon: React.createElement(Code) },
      { name: 'Tailwind CSS', level: 'Avanzado', progress: 95, icon: React.createElement(SiTailwindcss) },
    ],
  },
  {
    title: 'DevOps & Herramientas',
    skills: [
      { name: 'Docker', level: 'Intermedio', progress: 80, icon: React.createElement(Container) },
      { name: 'Git & GitHub', level: 'Avanzado', progress: 95, icon: React.createElement(GitBranch) },
      { name: 'Vercel', level: 'Avanzado', progress: 90, icon: React.createElement(SiVercel) },
      { name: 'Cloud', level: 'Básico', progress: 60, icon: React.createElement(Cloud) },
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
  whatsapp: "https://wa.me/1234567890", // Replace with actual number
  github: "https://github.com/nohel-segovia", // Replace with actual profile
  linkedin: "https://linkedin.com/in/nohel-segovia", // Replace with actual profile
};

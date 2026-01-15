"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { timeline } from "@/data/portfolio-data";
import { BookOpen, Briefcase, GraduationCap, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  const workPhilosophy = [
    { title: "Impacto Real", description: "Enfocado en crear soluciones que resuelvan problemas tangibles y generen valor." },
    { title: "Calidad y Escalabilidad", description: "Código limpio, bien documentado y diseñado para crecer." },
    { title: "Aprendizaje Continuo", description: "Siempre explorando nuevas tecnologías y mejorando mis habilidades." },
    { title: "Colaboración Abierta", description: "Creo en el poder del trabajo en equipo para lograr resultados extraordinarios." },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-center mb-4">Sobre Mí</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Apasionado por la tecnología y el impacto que puede generar en el mundo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                {profileImage && (
                  <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    width={400}
                    height={400}
                    className="rounded-lg w-full object-cover aspect-square shadow-lg"
                    data-ai-hint={profileImage.imageHint}
                  />
                )}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold">Nohel Segovia</h3>
                  <p className="text-primary">Fullstack & ML Developer</p>
                </div>
                <div className="mt-4 text-sm text-muted-foreground space-y-3">
                  <p>
                    Desarrollador autodidacta con una profunda pasión por resolver problemas complejos a través del código. Mi viaje comenzó con la curiosidad por cómo funcionan las cosas y rápidamente se convirtió en una carrera enfocada en construir aplicaciones web robustas y sistemas de inteligencia artificial eficientes.
                  </p>
                  <p>
                    Me especializo en el ecosistema de Python y JavaScript, con un fuerte enfoque en HealthTech, donde busco aplicar mis habilidades para mejorar la precisión diagnóstica y optimizar procesos clínicos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8">Educación y Certificaciones</h3>
              <div className="relative border-l-2 border-primary/20 pl-6 space-y-10">
                {timeline.map((event, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute -left-[34px] top-1.5 h-4 w-4 rounded-full bg-primary" />
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                    <h4 className="text-lg font-semibold mt-1">{event.title}</h4>
                    <p className="text-primary font-medium">{event.institution}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h3 className="text-2xl font-bold mb-8">Filosofía de Trabajo</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                    {workPhilosophy.map((item, index) => (
                        <Card key={index} className="bg-card">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-lg">
                                    <Zap className="h-5 w-5 text-accent"/>
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

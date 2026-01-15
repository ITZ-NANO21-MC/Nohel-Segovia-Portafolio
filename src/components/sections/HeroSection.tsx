"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { heroStats } from '@/data/portfolio-data';
import Link from 'next/link';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background">
      <div className="absolute inset-0 bg-grid-slate-100/[0.05] dark:bg-grid-slate-900/[0.05] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="mb-4 text-accent-foreground bg-accent/20 border-accent/30">
              Desarrollador Fullstack | Especialista en Machine Learning & HealthTech
            </Badge>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl mb-6"
          >
            Construyo soluciones de IA que <br className="hidden md:block" />
            <span className="text-primary">diagnostican</span>, <span className="text-accent">optimizan</span> e <span className="text-primary">impactan</span> vidas
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto mb-10">
            Transformo ideas complejas en aplicaciones inteligentes y eficientes, resolviendo problemas reales en salud, productividad y negocios.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Button size="lg" asChild>
              <Link href="#projects">
                Ver Proyectos <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Contactar</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {heroStats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card/50 backdrop-blur-sm h-full">
                <CardContent className="p-6 flex flex-col items-start justify-center text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="h-7 w-7 text-primary" />
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

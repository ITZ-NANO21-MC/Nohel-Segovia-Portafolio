"use client";

import { Progress } from "@/components/ui/progress";
import { skillCategories } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-center mb-4">Habilidades Técnicas</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Un conjunto de herramientas moderno para construir aplicaciones de alto rendimiento, desde el frontend hasta el backend y el despliegue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-6">
                    {category.skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-primary text-2xl">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <Badge 
                            variant={
                              skill.level === 'Avanzado' ? 'default' : 
                              skill.level === 'Intermedio' ? 'secondary' : 'outline'
                            }
                            className={
                              skill.level === 'Avanzado' ? 'bg-primary/80' : 
                              skill.level === 'Intermedio' ? 'bg-accent/80 text-accent-foreground' : ''
                            }
                          >
                            {skill.level}
                          </Badge>
                        </div>
                        <Progress value={skill.progress} indicatorClassName={
                          skill.progress > 85 ? 'bg-primary' : skill.progress > 70 ? 'bg-accent' : 'bg-muted-foreground'
                        }/>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

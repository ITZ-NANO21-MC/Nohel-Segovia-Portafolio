"use client"

import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Scatter, ScatterChart, ZAxis, Tooltip as RechartsTooltip, Legend } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { motion } from "framer-motion"

const projectPerformanceData = [
  { project: "TB-Detector", "Complejidad": 8, "Impacto": 9.5, fill: "hsl(var(--primary))" },
  { project: "NanoEditor", "Complejidad": 7, "Impacto": 8, fill: "hsl(var(--accent))" },
  { project: "Chatbot", "Complejidad": 6, "Impacto": 7.5, fill: "hsl(var(--secondary-foreground))" },
  { project: "MovieFinder", "Complejidad": 3, "Impacto": 5, fill: "hsl(var(--muted-foreground))" },
]

const stackUsageData = [
  { name: "React", "Proyectos": 3, fill: "var(--color-react)" },
  { name: "Python", "Proyectos": 2, fill: "var(--color-python)" },
  { name: "Next.js", "Proyectos": 1, fill: "var(--color-nextjs)" },
  { name: "Node.js", "Proyectos": 1, fill: "var(--color-nodejs)" },
  { name: "Docker", "Proyectos": 2, fill: "var(--color-docker)" },
  { name: "TypeScript", "Proyectos": 2, fill: "var(--color-ts)" },
]

const chartConfigBar = {
  Proyectos: {
    label: "Proyectos",
  },
  react: { label: "React", color: "hsl(var(--chart-1))" },
  python: { label: "Python/Flask", color: "hsl(var(--chart-2))" },
  nextjs: { label: "Next.js", color: "hsl(var(--chart-3))" },
  nodejs: { label: "Node.js", color: "hsl(var(--chart-4))" },
  docker: { label: "Docker", color: "hsl(var(--chart-5))" },
  ts: { label: "TypeScript", color: "hsl(var(--chart-1))" },
}

const chartConfigScatter = {
  Impacto: {
    label: "Impacto",
  },
  Complejidad: {
    label: "Complejidad",
  },
}

export default function MetricsSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <section id="metrics" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-center mb-4">Dashboard de Métricas</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Análisis visual del rendimiento, impacto y tecnologías utilizadas en mis proyectos.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Complejidad vs. Impacto de Proyectos</CardTitle>
                <CardDescription>Evaluación del esfuerzo relativo frente al valor generado por cada proyecto.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfigScatter} className="h-[300px] w-full">
                  {isClient && (
                  <ScatterChart
                    margin={{
                      top: 20,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="Complejidad" name="Complejidad" unit="" />
                    <YAxis type="number" dataKey="Impacto" name="Impacto" unit="" />
                    <ZAxis type="string" dataKey="project" name="Proyecto" />
                    <RechartsTooltip cursor={{ strokeDasharray: '3 3' }} content={<ChartTooltipContent />} />
                    <Legend />
                    <Scatter name="Proyectos" data={projectPerformanceData} />
                  </ScatterChart>
                  )}
                </ChartContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Stack Tecnológico Más Usado</CardTitle>
                <CardDescription>Frecuencia de uso de tecnologías clave en los proyectos destacados.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfigBar} className="h-[300px] w-full">
                  {isClient && (
                  <BarChart data={stackUsageData} accessibilityLayer>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="name"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                    />
                    <YAxis />
                    <RechartsTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                    <Bar dataKey="Proyectos" radius={4} />
                  </BarChart>
                  )}
                </ChartContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

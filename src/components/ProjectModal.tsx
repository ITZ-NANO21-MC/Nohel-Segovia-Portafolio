"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, ExternalLink, Github, Zap } from 'lucide-react';
import type { Project } from '@/types';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CodeSuggestion } from './features/CodeSuggestion';

type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [showCodeSuggestion, setShowCodeSuggestion] = useState(false);
  
  if (!project) return null;

  const projectImage = PlaceHolderImages.find(p => p.id === project.image.id);

  const handleClose = () => {
    onClose();
    // Delay hiding the code suggestion UI to prevent abrupt transition
    setTimeout(() => {
        setShowCodeSuggestion(false);
    }, 300);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {projectImage && (
            <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                    src={projectImage.imageUrl}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                    data-ai-hint={projectImage.imageHint}
                />
            </div>
        )}
        <DialogHeader className="p-6">
          <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-6 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div>
                    <h3 className="font-bold text-lg mb-2">Problema</h3>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2">Solución</h3>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                </div>
                {project.id === 'nano-editor-v3.2' && (
                  <div>
                    <h3 className="font-bold text-lg mb-2">Característica de IA</h3>
                    <p className="text-sm text-muted-foreground mb-4">Prueba las sugerencias de código impulsadas por IA. Describe una tarea y obtén una solución generada por IA.</p>
                  </div>
                )}
            </div>
            <div className="space-y-6">
                <div>
                    <h3 className="font-bold text-lg mb-4">Stack Tecnológico</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                            <Badge key={tech.name} variant="secondary" className="flex items-center gap-2 py-1 px-3">
                                <span className="text-foreground text-lg">{tech.icon}</span>
                                {tech.name}
                            </Badge>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Métricas Clave</h3>
                    <div className="space-y-3">
                        {project.metrics.map(metric => (
                            <div key={metric.label} className="flex justify-between items-center text-sm">
                                <p className="text-muted-foreground flex items-center gap-2"><Zap className="h-4 w-4 text-accent" /> {metric.label}</p>
                                <p className="font-bold">{metric.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-4 pt-4">
                    {project.demoUrl && <Button asChild className="w-full"><a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Ver Demo <ExternalLink className="ml-2 h-4 w-4"/></a></Button>}
                    {project.codeUrl && <Button asChild variant="outline" className="w-full"><a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Ver Código <Github className="ml-2 h-4 w-4"/></a></Button>}
                </div>
            </div>
        </div>
        <CodeSuggestion isOpen={showCodeSuggestion} onClose={() => setShowCodeSuggestion(false)} />
      </DialogContent>
    </Dialog>
  );
}

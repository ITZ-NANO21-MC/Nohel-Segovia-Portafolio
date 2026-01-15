import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type ProjectCardProps = {
  project: Project;
  onSelectProject: (project: Project) => void;
};

export function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
  const projectImage = PlaceHolderImages.find(p => p.id === project.image.id);

  const getStatusBadgeVariant = (status: Project['status']) => {
    switch (status) {
      case 'Production Ready':
        return 'default';
      case 'In Development':
        return 'secondary';
      case 'Archived':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {projectImage && (
        <div className="aspect-video overflow-hidden">
          <Image
            src={projectImage.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
            data-ai-hint={projectImage.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
            <CardTitle>{project.title}</CardTitle>
            <Badge variant={getStatusBadgeVariant(project.status)} className={project.status === 'Production Ready' ? 'bg-accent text-accent-foreground' : ''}>{project.status}</Badge>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech, index) => (
            <Badge key={index} variant="outline" className="flex items-center gap-1">
              <span className="text-muted-foreground text-sm">{tech.icon}</span>
              {tech.name}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onSelectProject(project)} className="w-full">
          Ver Detalles <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

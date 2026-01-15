"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getCodeSuggestion, type GetCodeSuggestionOutput } from '@/ai/flows/ai-powered-code-suggestions';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const formSchema = z.object({
  userTask: z.string().min(10, "Por favor, describe la tarea con más detalle."),
});

type FormValues = z.infer<typeof formSchema>;

type CodeSuggestionProps = {
  isOpen: boolean;
  onClose: () => void;
};

const initialCode = `// Modelo de IA para diagnóstico
model = Sequential([
  DenseNet121(weights='imagenet'),
  GlobalAveragePooling2D(),
  Dense(256, activation='relu'),
  Dropout(0.5),
  Dense(1, activation='sigmoid')
])

print("Precisión: 99.2%")
print("Especificidad: 100%")`;

export function CodeSuggestion({ isOpen, onClose }: CodeSuggestionProps) {
  const [suggestion, setSuggestion] = useState<GetCodeSuggestionOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userTask: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setSuggestion(null);
    try {
      const result = await getCodeSuggestion({
        currentCode: initialCode,
        userTask: data.userTask,
      });
      setSuggestion(result);
    } catch (error) {
      console.error('Error getting code suggestion:', error);
      toast({
        variant: 'destructive',
        title: 'Error de IA',
        description: 'No se pudo generar la sugerencia. Por favor, inténtalo de nuevo.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Sugerencia de Código con IA</DialogTitle>
          <DialogDescription>
            Describe la tarea que quieres realizar con el código actual y la IA generará una sugerencia.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 max-h-[60vh] overflow-y-auto pr-2">
          <div>
            <h3 className="font-semibold mb-2">Código Actual</h3>
            <Card className="bg-muted">
                <CardContent className="p-4">
                    <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-mono">
                        <code>{initialCode}</code>
                    </pre>
                </CardContent>
            </Card>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold mb-2">Tu Tarea</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col flex-grow">
                <FormField
                  control={form.control}
                  name="userTask"
                  render={({ field }) => (
                    <FormItem className="flex-grow flex flex-col">
                      <FormControl>
                        <Textarea
                          placeholder="Ej: 'Refactorizar este código para que use una función en lugar de código secuencial.'"
                          className="resize-none flex-grow"
                          {...field}
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Generar Sugerencia
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {suggestion && (
          <div className="space-y-4 mt-4 max-h-[50vh] overflow-y-auto pr-2">
            <div>
              <h3 className="font-semibold mb-2">Código Sugerido</h3>
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-4">
                  <pre className="text-sm whitespace-pre-wrap font-mono">
                    <code>{suggestion.suggestedCode}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Explicación</h3>
              <p className="text-sm text-muted-foreground">{suggestion.explanation}</p>
            </div>
          </div>
        )}
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }),
  queryType: z.string().nonempty({ message: 'Por favor, selecciona un tipo de consulta.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const mapImage = PlaceHolderImages.find(p => p.id === 'map-location');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      queryType: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSending(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.send(serviceId, templateId, data, publicKey);
      
      toast({
        title: '¡Formulario Enviado!',
        description: 'Gracias por tu mensaje. Me pondré en contacto contigo pronto.',
      });
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        variant: 'destructive',
        title: 'Error al enviar',
        description: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-center mb-4">Contacto</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            ¿Tienes una idea, una oportunidad de trabajo o simplemente quieres saludar? No dudes en escribirme.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} disabled={isSending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Electrónico</FormLabel>
                          <FormControl>
                            <Input placeholder="tu@correo.com" {...field} disabled={isSending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="queryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Consulta</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSending}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona una opción" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="job">Oportunidad Laboral</SelectItem>
                              <SelectItem value="project">Propuesta de Proyecto</SelectItem>
                              <SelectItem value="collaboration">Colaboración</SelectItem>
                              <SelectItem value="other">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Cuéntame sobre tu idea..." {...field} disabled={isSending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isSending}>
                      {isSending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {isSending ? 'Enviando...' : 'Enviar Mensaje'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
                <h3 className="text-xl font-bold">Información de Contacto</h3>
                <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>nohelsegovia21@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>+58 424 668 4134</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>Falcón, Venezuela</span>
                    </div>
                </div>
            </div>
            
            <div className="space-y-4">
                <h3 className="text-xl font-bold">Ubicación</h3>
                <div className="aspect-video w-full overflow-hidden rounded-lg border">
                  {mapImage ? (
                    <Image 
                      src={mapImage.imageUrl} 
                      alt="Mapa de ubicación"
                      width={800}
                      height={400}
                      className="w-full h-full object-cover"
                      data-ai-hint={mapImage.imageHint}
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                        <p className="text-muted-foreground">Cargando mapa...</p>
                    </div>
                  )}
                  {/*
                    Para un mapa interactivo, reemplaza la imagen con un componente de mapa.
                    Ejemplo con @vis.gl/react-google-maps:
                    
                    <APIProvider apiKey={"YOUR_GOOGLE_MAPS_API_KEY"}>
                        <Map
                            defaultCenter={{ lat: 11.404, lng: -69.673 }}
                            defaultZoom={10}
                            mapId={"YOUR_MAP_ID"}
                         >
                             <Marker position={{ lat: 11.404, lng: -69.673 }} />
                         </Map>
                    </APIProvider>
                  */}
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
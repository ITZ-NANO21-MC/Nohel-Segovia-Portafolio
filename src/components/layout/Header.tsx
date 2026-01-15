"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { navItems } from '@/data/portfolio-data';
import { BrainCircuit, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <BrainCircuit className="h-7 w-7 text-primary" />
            <span className="hidden sm:inline">Nohel Segovia</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button key={item.title} variant="ghost" asChild>
                <Link href={item.href}>{item.title}</Link>
              </Button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild>
              <a href="/Nohel-Segovia-CV.pdf" download>Descargar CV</a>
            </Button>
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute top-20 left-0 w-full bg-background border-b"
          >
            <nav className="flex flex-col items-center p-4 gap-4">
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  variant="ghost"
                  className="w-full"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              ))}
              <Button asChild className="w-full">
                <a href="/Nohel-Segovia-CV.pdf" download>Descargar CV</a>
              </Button>
              <ThemeToggle />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

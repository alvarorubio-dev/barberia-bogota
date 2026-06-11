<<<<<<< HEAD
import { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useScrollTo } from '../hooks/useScrollTo';

const NAV_ITEMS = [
  { href: 'precio', label: 'Precio' },
  { href: 'como-funciona', label: 'Cómo Funciona' },
  { href: 'portafolio', label: 'Ejemplos' },
  { href: 'faq', label: 'Preguntas' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavRef = useFocusTrap(isOpen);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      closeMenu();
      scrollTo(targetId);
    },
    [closeMenu, scrollTo]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    },
    [isOpen, closeMenu]
  );

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/5 py-3'
          : 'bg-slate-950/60 backdrop-blur-md py-4'
      }`}
      onKeyDown={handleKeyDown}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center focus-ring rounded-lg" aria-label="PaginaWebEconomica.org - Ir al inicio">
            <Globe className="h-7 w-7 text-emerald-400 mr-2" aria-hidden="true" />
            <span className="font-bold text-lg text-white tracking-tight">
              PaginaWeb<span className="text-emerald-400">Economica</span>
              <span className="text-slate-400 text-sm font-normal">.org</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-slate-300 hover:text-emerald-400 font-medium transition-colors text-sm focus-ring rounded-md px-1 py-0.5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://checkout.wompi.co/l/EOVrLb"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-emerald-500/90 backdrop-blur-sm border border-emerald-400/20 text-white text-sm font-semibold rounded-lg hover:bg-emerald-500 transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 focus-ring"
            >
              Reserva con $150.000
            </a>
          </nav>

          <div className="md:hidden">
            <button
              ref={menuButtonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-emerald-400 focus-ring rounded-md p-1"
              aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <nav
            id="mobile-nav"
            ref={mobileNavRef as React.RefObject<HTMLElement>}
            className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-white/5 relative z-50"
            aria-label="Navegación móvil"
            role="navigation"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-white/5 rounded-md focus-ring"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://checkout.wompi.co/l/EOVrLb"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 my-2 px-5 py-2.5 bg-emerald-500/90 backdrop-blur-sm border border-emerald-400/20 text-white text-center font-semibold rounded-lg hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-500/20 focus-ring"
                onClick={closeMenu}
              >
                Reserva con $150.000
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
=======
import { useState, useEffect } from "react";
import { Scissors, Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <Scissors className="w-8 h-8 text-amber-500" />
            <span
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Premium Barber
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-amber-500 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-300 hover:text-amber-500 transition-colors"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-300 hover:text-amber-500 transition-colors"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-300 hover:text-amber-500 transition-colors"
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-gray-300 hover:text-amber-500 transition-colors"
            >
              Ubicación
            </button>
            <Button
              size="sm"
              onClick={() =>
                window.open("https://wa.me/573197076707", "_blank")
              }
            >
              Reservar Cita
            </Button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-amber-500 transition-colors text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-300 hover:text-amber-500 transition-colors text-left"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-gray-300 hover:text-amber-500 transition-colors text-left"
              >
                Equipo
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-300 hover:text-amber-500 transition-colors text-left"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-gray-300 hover:text-amber-500 transition-colors text-left"
              >
                Ubicación
              </button>
              <Button
                size="sm"
                onClick={() =>
                  window.open("https://wa.me/573185550123", "_blank")
                }
              >
                Reservar Cita
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
>>>>>>> c565bc3ded9c582e21bb48939a0a09a94108c66e

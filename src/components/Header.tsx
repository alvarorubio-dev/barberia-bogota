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

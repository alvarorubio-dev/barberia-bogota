<<<<<<< HEAD
import { Mail, Phone, MessageCircle, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black text-white py-16 border-t border-emerald-500/20" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <Globe className="h-7 w-7 text-emerald-400 mr-2" aria-hidden="true" />
              <span className="font-bold text-xl tracking-tight">
                Pagina Web<span className="text-emerald-400"> Economica</span><span className="text-slate-400 text-base font-normal">.org</span>
              </span>
            </div>
            <p className="text-slate-300 text-base italic mb-2">
              "Páginas web que traen clientes, no solo diseño"
            </p>
          </div>

          <nav aria-label="Información de contacto" className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10">
            <a
              href="tel:+573054115138"
              className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors group focus-ring rounded-lg"
              aria-label="Llamar al +57 305 411 5138"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-emerald-500/10 backdrop-blur-sm rounded-lg mr-3 group-hover:bg-emerald-500/20 transition-colors border border-emerald-500/20" aria-hidden="true">
                <Phone className="h-5 w-5" />
              </div>
              +57 305 411 5138
            </a>
            <a
              href="mailto:info@paginawebeconomica.org"
              className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors group focus-ring rounded-lg"
              aria-label="Enviar correo a info@paginawebeconomica.org"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-emerald-500/10 backdrop-blur-sm rounded-lg mr-3 group-hover:bg-emerald-500/20 transition-colors border border-emerald-500/20" aria-hidden="true">
                <Mail className="h-5 w-5" />
              </div>
              info@paginawebeconomica.org
            </a>
          </nav>

          <div className="flex justify-center mb-10">
            <a
              href="https://wa.me/573054115138?text=Hola,%20estoy%20interesado%20en%20una%20página%20web,%20quisiera%20más%20información."
              className="inline-flex items-center px-8 py-4 bg-emerald-500/90 backdrop-blur-sm border border-emerald-400/30 text-white rounded-xl font-semibold hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transform hover:scale-105 focus-ring"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp - abre en nueva ventana"
            >
              <MessageCircle className="h-5 w-5 mr-2" aria-hidden="true" />
              Contactar por WhatsApp
            </a>
          </div>

          <div className="border-t border-white/10 pt-8 text-center space-y-3">
            <p className="text-emerald-400 font-semibold text-sm">
              Garantía de libertad: Eres dueño de tu dominio y archivos desde el primer día.
            </p>
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} Pagina Web Economica.org - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Premium Barber
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              La mejor experiencia de barbería en Bogotá. Estilo, calidad y tradición en cada corte.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Servicios</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-amber-500 transition-colors">Galería</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-amber-500 transition-colors">Equipo</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-amber-500 transition-colors">Testimonios</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Premium Barber Bogotá. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
>>>>>>> c565bc3ded9c582e21bb48939a0a09a94108c66e

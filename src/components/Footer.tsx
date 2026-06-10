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

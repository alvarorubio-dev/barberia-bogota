<<<<<<< HEAD
import {
  MessageCircle,
  Shield,
  Clock,
  CheckCircle2,
  Phone,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bTAtOHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
              Diseño de Páginas Web Económicas y Profesionales en Colombia
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-white">Optimizadas para Google.</strong>{" "}
            Atrae clientes locales y deja de perder ventas frente a tu
            competencia.
          </p>

          <div className="mb-8">
            <div className="inline-block bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-2 border-emerald-500/40 rounded-2xl px-8 py-6 backdrop-blur-sm">
              <div className="text-slate-400 text-sm font-semibold mb-1 tracking-wider uppercase">
                Precio claro
              </div>
              <div className="text-5xl md:text-6xl font-black text-white mb-1">
                $300.000
              </div>
              <div className="text-emerald-400 text-lg font-semibold">COP</div>
            </div>
          </div>

          <div className="mb-6">
            <a
              href="tel:+573054115138"
              className="inline-flex items-center gap-2 text-emerald-400 text-xl md:text-2xl font-bold hover:text-emerald-300 transition-colors focus-ring rounded-lg px-2 py-1"
              aria-label="Llamar al +57 305 411 5138"
            >
              <Phone className="h-6 w-6" aria-hidden="true" />
              +57 305 411 5138
            </a>
          </div>

          <div className="mb-10 text-slate-400 text-base space-y-1">
            <p className="font-medium">
              Sin cotizaciones. Sin sorpresas. Sin mensualidades obligatorias.
            </p>
            <p>
              Paga <strong className="text-white">$150.000 para empezar</strong>{" "}
              y $150.000 al entregar.
            </p>
            <p className="text-white font-bold mt-2">
              Pago único. No es un alquiler: la web es 100% de tu propiedad.
            </p>
            <p className="text-emerald-400/80 font-semibold mt-2">
              Con solo 2 o 3 clientes nuevos que te lleguen por Google, la
              página se paga sola.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://wa.me/573054115138?text=Hola,%20estoy%20interesado%20en%20una%20página%20web,%20quisiera%20más%20información."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-lg md:text-xl font-bold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 focus-ring"
              aria-label="Hablar con un asesor por WhatsApp - abre en nueva ventana"
            >
              <MessageCircle className="mr-2 h-6 w-6" aria-hidden="true" />
              Hablar con un asesor
            </a>
            <a
              href="https://checkout.wompi.co/l/EOVrLb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-900/60 backdrop-blur-lg border-2 border-emerald-500/30 text-white text-lg md:text-xl font-bold rounded-xl hover:bg-slate-900/80 hover:border-emerald-500/60 transform hover:scale-105 transition-all duration-300 focus-ring"
              aria-label="Reservar página web con pago de $150.000 COP - abre en nueva ventana"
            >
              Reservar con $150.000 COP
            </a>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-300 text-sm"
            role="list"
            aria-label="Garantías del servicio"
          >
            <div className="flex items-center gap-2" role="listitem">
              <div className="bg-emerald-500/20 rounded-full p-1.5">
                <Shield
                  className="h-4 w-4 text-emerald-400"
                  aria-hidden="true"
                />
              </div>
              <span className="font-medium">Pago seguro Wompi</span>
            </div>
            <span
              className="hidden sm:inline text-slate-600"
              aria-hidden="true"
            >
              &bull;
            </span>
            <div className="flex items-center gap-2" role="listitem">
              <div className="bg-emerald-500/20 rounded-full p-1.5">
                <Clock
                  className="h-4 w-4 text-emerald-400"
                  aria-hidden="true"
                />
              </div>
              <span className="font-medium">Entrega en 5-7 días</span>
            </div>
            <span
              className="hidden sm:inline text-slate-600"
              aria-hidden="true"
            >
              &bull;
            </span>
            <div className="flex items-center gap-2" role="listitem">
              <div className="bg-emerald-500/20 rounded-full p-1.5">
                <CheckCircle2
                  className="h-4 w-4 text-emerald-400"
                  aria-hidden="true"
                />
              </div>
              <span className="font-medium">Para negocios en Colombia</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-slate-400 text-sm font-medium italic">
              Nota: Solo trabajamos con 5 páginas web al mes para asegurar
              atención personalizada. Separa tu lugar hoy.
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
=======
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            La Mejor Experiencia de
            <span className="block text-amber-400 mt-2">
              Barbería en Bogotá
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Cortes clásicos y modernos, afeitado profesional y cuidado premium
          para el hombre moderno en el corazón de Chapinero
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/573197076707", "_blank")}
          >
            Reservar Cita Ahora
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToServices}>
            Ver Servicios
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToServices}
        >
          <ChevronDown className="w-8 h-8 text-amber-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
>>>>>>> c565bc3ded9c582e21bb48939a0a09a94108c66e

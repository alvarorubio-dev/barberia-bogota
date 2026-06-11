import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Visítanos
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            En el corazón de Chapinero, Bogotá
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Dirección
                </h3>
                <p className="text-gray-400">Carrera 13 #85-24</p>
                <p className="text-gray-400">Chapinero, Bogotá</p>
                <p className="text-gray-400">Colombia</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Horarios
                </h3>
                <p className="text-gray-400">
                  Lunes - Viernes: 9:00 AM - 8:00 PM
                </p>
                <p className="text-gray-400">Sábado: 10:00 AM - 6:00 PM</p>
                <p className="text-gray-400">Domingo: Cerrado</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Teléfono
                </h3>
                <a
                  href="tel:+573185550123"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  +57 319 707 6707
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a
                  href="mailto:info@barberbogota.com"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  info@barberbogota.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-xl overflow-hidden shadow-xl h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.665339826516!2d-74.06156668523655!3d4.668244843127559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aef9c9a3e5b%3A0x5a7a5e8e8e8e8e8e!2sCarrera%2013%20%2385-24%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de Barbería Premium en Chapinero, Bogotá"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

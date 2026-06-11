import { motion } from "framer-motion";
import { Scissors, Sparkles, Shirt } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte Clásico",
    description:
      "Corte tradicional con tijera y navaja, adaptado a tu estilo personal",
    price: "$35.000",
    duration: "45 min",
    image:
      "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Sparkles,
    title: "Barba & Afeitado",
    description: "Arreglo de barba profesional y afeitado con toalla caliente",
    price: "$28.000",
    duration: "30 min",
    image:
      "https://images.pexels.com/photos/897270/pexels-photo-897270.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Shirt,
    title: "Combo Premium",
    description: "Corte + barba + tratamiento facial con productos premium",
    price: "$55.000",
    duration: "75 min",
    image:
      "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900">
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
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experiencias premium diseñadas para el caballero moderno
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-amber-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`Servicio de barbería en Bogotá - ${service.title}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
              </div>

              <div className="p-6">
                <service.icon className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex items-center justify-between border-t border-slate-700 pt-4">
                  <span className="text-2xl font-bold text-amber-500">
                    {service.price}
                  </span>
                  <span className="text-gray-500">{service.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            ¿Necesitas un servicio personalizado?
          </p>
          <button
            onClick={() => window.open("https://wa.me/573197076707", "_blank")}
            className="text-amber-500 hover:text-amber-400 font-semibold underline"
          >
            Contáctanos por WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
}

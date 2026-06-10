import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Juan Antonio Florez',
    role: 'Cliente Regular',
    comment: 'La mejor barbería de Bogotá sin duda. Carlos es un artista con las tijeras. Siempre salgo luciendo increíble.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Miguel Angel Urrego',
    role: 'Empresario',
    comment: 'Profesionalismo y calidad en cada visita. El ambiente es relajado y el servicio excepcional. Totalmente recomendado.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Martin Alejandro Gómez',
    role: 'Influencer',
    comment: 'Encontré mi barbería de confianza en Chapinero. El combo premium vale cada peso. Servicio de primera clase.',
    rating: 5,
    image: 'https://images.pexels.com/photos/22952462/pexels-photo-22952462.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-950">
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
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-xl shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.comment}"</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={`Cliente satisfecho ${testimonial.name} de barbería en Bogotá`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const team = [
  {
    name: 'Jairo Javier Méndez',
    role: 'Master Barber',
    specialty: 'Especialista en cortes clásicos y fade',
    image: 'https://images.pexels.com/photos/7697392/pexels-photo-7697392.jpeg?auto=compress&cs=tinysrgb&w=400',
    instagram: '@carlosmendez'
  },
  {
    name: 'Santiago Miguel Rojas',
    role: 'Barbero Senior',
    specialty: 'Experto en diseño de barba y afeitado',
    image: 'https://images.pexels.com/photos/32872924/pexels-photo-32872924.jpeg?auto=compress&cs=tinysrgb&w=400',
    instagram: '@santiagorojas'
  },
  {
    name: 'Matias Anselmo López',
    role: 'Estilista',
    specialty: 'Tendencias modernas y coloración',
    image: 'https://i.pinimg.com/736x/61/84/f8/6184f814c0e45527e449f9a5ba8ad6d4.jpg?auto=compress&cs=tinysrgb&w=400',
    instagram: '@andreslopez'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-slate-900">
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
            Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Profesionales apasionados por su arte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden ring-4 ring-amber-500/20 group-hover:ring-amber-500 transition-all duration-300">
                <img
                  src={member.image}
                  alt={`Barbero profesional ${member.name} en Bogotá`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-amber-500 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-400 mb-4">{member.specialty}</p>
              <a
                href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-500 hover:text-amber-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>{member.instagram}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

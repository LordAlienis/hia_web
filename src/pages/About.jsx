import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="p-6 bg-white min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Sobre Nosotros</h2>
      <p className="text-gray-700 mb-4">
        El Hospital Isidro Ayora de Loja es una institución de tercer nivel que ha brindado servicios médicos integrales durante décadas.
      </p>
      <h3 className="text-xl font-semibold text-gray-800">Misión</h3>
      <p className="text-gray-700 mb-4">
        Brindar servicios de salud con calidad, eficiencia y calidez humana, priorizando el bienestar del paciente.
      </p>
      <h3 className="text-xl font-semibold text-gray-800">Visión</h3>
      <p className="text-gray-700">
        Ser el hospital público referente en medicina especializada en el sur del país.
      </p>
    </motion.div>
  );
}

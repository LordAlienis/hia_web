import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-blue-700 mb-2">Sobre Nosotros</h2>
      <p className="text-gray-700">
        Somos una institución comprometida con la salud integral de la ciudadanía lojana y del sur del país.
      </p>
    </motion.div>
  );
}
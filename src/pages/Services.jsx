import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-blue-700 mb-2">Servicios Médicos</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Medicina general</li>
        <li>Emergencias 24/7</li>
        <li>Pediatría</li>
        <li>Ginecología</li>
        <li>Laboratorio clínico</li>
      </ul>
    </motion.div>
  );
}
import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.div
      className="p-6 bg-gray-50 min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Nuestros Servicios</h2>
      <ul className="space-y-4 text-gray-700 text-lg">
        <li>🩺 Medicina General</li>
        <li>🧑‍⚕️ Especialidades médicas (Pediatría, Ginecología, Medicina Interna)</li>
        <li>🚑 Emergencias 24/7</li>
        <li>🔬 Laboratorio Clínico</li>
        <li>🧪 Imagenología (Rayos X, Ecografías, Tomografías)</li>
        <li>💉 Vacunación y programas preventivos</li>
      </ul>
    </motion.div>
  );
}

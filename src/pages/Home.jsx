import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-blue-700 mb-4">Bienvenidos</h2>
      <p className="text-gray-700">
        El Hospital Isidro Ayora de Loja brinda atención médica especializada con calidad y calidez.
      </p>
    </motion.div>
  );
}
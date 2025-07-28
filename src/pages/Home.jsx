import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="p-6 bg-gray-50 min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Hospital Isidro Ayora de Loja
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-2xl">
        Brindamos atención médica especializada con calidez humana. Somos un referente en salud en la Región Sur del Ecuador.
      </p>
      <img
        src="https://via.placeholder.com/900x400?text=Hospital+Isidro+Ayora"
        alt="Hospital fachada"
        className="rounded-xl shadow-lg"
      />
    </motion.div>
  );
}

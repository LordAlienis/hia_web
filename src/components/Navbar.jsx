import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">Hospital Isidro Ayora</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-blue-600">Inicio</Link>
        <Link to="/about" className="text-gray-600 hover:text-blue-600">Nosotros</Link>
        <Link to="/services" className="text-gray-600 hover:text-blue-600">Servicios</Link>
      </div>
    </nav>
  );
}
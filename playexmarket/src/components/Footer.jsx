import React from 'react';
import { Instagram, Phone, Mail, ArrowRight, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sección Newsletter Integrada */}
        <div className="mb-16 pb-12 border-b border-neutral-800 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-2">Únete al club Playex</h3>
            <p className="text-neutral-400">
              Recibe ofertas exclusivas, lanzamientos de sneakers limitados y descuentos en tu primera compra.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="w-full md:w-64 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-white text-sm transition-colors"
            />
            <button className="bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap">
              Suscribirme
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Marca y Descripción (4 columnas) */}
          <div className="col-span-1 md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-white rounded-full overflow-hidden p-0.5">
                 <img src="/gor.jpg" alt="Logo" className="h-full w-full object-cover rounded-full" />
              </div>
              <span className="text-xl font-bold tracking-tight">PLAYEX MARKET</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xs">
              Elevando tu estilo con la mejor selección de gorras, sneakers exclusivos y perfumería de alta gama. Calidad garantizada en cada envío.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces (2 columnas) */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold mb-6">Tienda</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><a href="/catalogo" className="hover:text-white transition-colors flex items-center gap-2 group">Gorras <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"/></a></li>
              <li><a href="/tenis" className="hover:text-white transition-colors flex items-center gap-2 group">Tenis <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"/></a></li>
              <li><a href="/perfumes" className="hover:text-white transition-colors flex items-center gap-2 group">Perfumes <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"/></a></li>
            </ul>
          </div>

          {/* Soporte (2 columnas) */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold mb-6">Soporte</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li><a href="/faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              {/* <li><a href="/envios" className="hover:text-white transition-colors">Envíos y Devoluciones</a></li> */}
              <li><a href="/guia" className="hover:text-white transition-colors">Guía de Tallas</a></li>
            </ul>
          </div>

          {/* Contacto (4 columnas) */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-neutral-500" />
                <span>Tampico, Tamaulipas, México</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-neutral-500" />
                <a href="tel:+528333378727" className="hover:text-white transition-colors">+52 833 337 8727</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-neutral-500" />
                <a href="tel:+528333378727" className="hover:text-white transition-colors">+52 833 437 4245</a>
              </li>
              {/* <li className="flex items-center gap-3">
                <Mail size={18} className="text-neutral-500" />
                <a href="mailto:hola@playexmarket.com" className="hover:text-white transition-colors">hola@playexmarket.com</a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Copyright & Methods */}
        <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs">
            © {new Date().getFullYear()} PlayexMarket. Todos los derechos reservados.
          </p>
          {/* <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="h-6 w-10 bg-white rounded"></div>
            <div className="h-6 w-10 bg-white rounded"></div>
            <div className="h-6 w-10 bg-white rounded"></div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
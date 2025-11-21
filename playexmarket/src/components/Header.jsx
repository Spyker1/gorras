import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(2); // Ejemplo visual

  // Detectar scroll para cambiar la apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Gorras', href: '/catalogo' },
    { name: 'Tenis', href: '/tenis' },
    { name: 'Perfumes', href: '/perfumes' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${
        isScrolled || isMenuOpen 
          ? 'bg-white/95 backdrop-blur-md border-gray-200 shadow-sm' 
          : 'bg-white border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Menu Mobile Trigger */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-gray-900 p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <a href="/" className="flex items-center group">
              {/* Contenedor para forzar que el logo se vea bien aunque tenga fondo */}
              <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200 group-hover:border-black transition-colors">
                <img 
                  src="/gor.jpg" 
                  alt="PXM" 
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="ml-3 text-xl font-black tracking-tighter uppercase hidden sm:block">
                Playex<span className="text-gray-500">Market</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-black font-bold text-xs uppercase tracking-widest transition-colors duration-200 py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="text-gray-600 hover:text-black transition-transform hover:scale-110">
              <Search size={20} />
            </button>
            
            <button className="hidden sm:block text-gray-600 hover:text-black transition-transform hover:scale-110">
              <User size={20} />
            </button>

            <button className="relative text-gray-600 hover:text-black transition-transform hover:scale-110 group">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center ring-2 ring-white group-hover:bg-red-600 transition-colors">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col py-4 space-y-1 bg-gray-50 rounded-lg mb-4 px-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-gray-800 font-semibold text-sm hover:bg-gray-200 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-gray-200 my-2 pt-2 px-4 flex gap-4">
               <span className="text-sm font-medium text-gray-500">Mi cuenta</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
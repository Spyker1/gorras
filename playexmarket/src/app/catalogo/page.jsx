"use client"
import React, { useState, useEffect, useMemo } from 'react';
import { LayoutGrid, Grid2X2, SlidersHorizontal, X, Check, ChevronDown, Search } from 'lucide-react';
import { Header } from '@/components/Header'; // Ajusta la ruta si es necesario
import { Footer } from '@/components/Footer'; // Ajusta la ruta si es necesario

// --- BASE DE DATOS SIMULADA ---
const PRODUCTS_DATA = [
  { id: 1, name: 'T Star Black', price: 1700, image: '/1.webp', brand: '31 HATS', category: 'Gorras', tag: 'HOT', sizes: ['7', '7 1/8'] },
  { id: 2, name: 'Crystal White', price: 1700, image: '/2.webp', brand: '31 HATS', category: 'Gorras', tag: 'NEW', sizes: ['7 1/8', '7 3/8'] },
  { id: 3, name: 'Jungle Camo', price: 1750, image: '/3.webp', brand: '31 HATS', category: 'Gorras', tag: '', sizes: ['Uni'] },
  { id: 4, name: 'Travis Dunk Low', price: 12500, image: '/gor.jpg', brand: 'NIKE', category: 'Tenis', tag: 'LIMITED', sizes: ['27', '28'] }, // Usando gor.jpg como placeholder
  { id: 5, name: 'Jewerly Gold', price: 1750, image: '/5.webp', brand: '31 HATS', category: 'Gorras', tag: '', sizes: ['Snap'] },
  { id: 6, name: 'Santal 33', price: 4500, image: '/gor.jpg', brand: 'LE LABO', category: 'Perfumes', tag: 'SALE', sizes: ['100ml'] },
  { id: 7, name: 'Crystal Black', price: 1700, image: '/7.jpg', brand: '31 HATS', category: 'Gorras', tag: '', sizes: ['7 3/8'] },
  { id: 8, name: 'Yeezy Slide', price: 3200, image: '/gor.jpg', brand: 'ADIDAS', category: 'Tenis', tag: 'RESTOCK', sizes: ['26', '27', '28'] },
  { id: 9, name: 'Forever Red', price: 1750, image: '/8.webp', brand: '31 HATS', category: 'Gorras', tag: '', sizes: ['Snap'] },
];

// --- COMPONENTE DE FILTROS REUTILIZABLE ---
const FilterSection = ({ title, children, isOpenDefault = true }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  return (
    <div className="border-b border-gray-100 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center w-full mb-4 group"
      >
        <span className="font-bold text-sm uppercase tracking-wider">{title}</span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>
      <div className={`space-y-3 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );
};

export default function CatalogoPage() {
  // --- ESTADOS ---
  const [loaded, setLoaded] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [gridCols, setGridCols] = useState(4);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // --- ESTADOS DE FILTRO ---
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortOrder, setSortOrder] = useState('relevance'); // relevance, price-asc, price-desc
  const [searchQuery, setSearchQuery] = useState('');

  // --- EFECTOS INICIALES ---
  useEffect(() => {
    setLoaded(true);
    const handleResize = () => {
      if (window.innerWidth < 768) setGridCols(1); // Móvil
      else if (window.innerWidth < 1024) setGridCols(2); // Tablet
      else setGridCols(4); // Desktop
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- LÓGICA DE FILTRADO ---
  const brands = ['31 HATS', 'NIKE', 'ADIDAS', 'LE LABO'];
  const categories = ['Todas', 'Gorras', 'Tenis', 'Perfumes'];

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS_DATA;

    // 1. Filtro por Categoría
    if (selectedCategory !== 'Todas') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // 2. Filtro por Marca
    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }

    // 3. Filtro por Búsqueda
    if (searchQuery) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // 4. Ordenamiento
    if (sortOrder === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, selectedBrands, sortOrder, searchQuery]);

  // Manejadores de eventos
  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('Todas');
    setSelectedBrands([]);
    setSortOrder('relevance');
    setSearchQuery('');
  };

  // --- CONTENIDO DEL PANEL DE FILTROS ---
  const FiltersContent = () => (
    <div className="flex flex-col h-full">
      {/* Search Bar */}
      <div className="relative mb-6">
        <input 
          type="text" 
          placeholder="Buscar..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-100 border-none text-sm p-3 pl-10 rounded-lg focus:ring-1 focus:ring-black outline-none"
        />
        <Search className="absolute left-3 top-3 text-gray-400" size={16} />
      </div>

      {/* Categorías */}
      <FilterSection title="Categoría">
        {categories.map(cat => (
          <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
            <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedCategory === cat ? 'border-black bg-black' : 'border-gray-300 group-hover:border-black'}`}>
              {selectedCategory === cat && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
            </div>
            <span className={`text-sm ${selectedCategory === cat ? 'font-bold text-black' : 'text-gray-600'}`}>
              <input type="radio" name="category" className="hidden" checked={selectedCategory === cat} onChange={() => setSelectedCategory(cat)} />
              {cat}
            </span>
          </label>
        ))}
      </FilterSection>

      {/* Marcas */}
      <FilterSection title="Marcas">
        {brands.map(brand => (
          <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
             <div className={`w-4 h-4 border flex items-center justify-center transition-all rounded-sm ${selectedBrands.includes(brand) ? 'bg-black border-black' : 'border-gray-300 group-hover:border-gray-500'}`}>
               {selectedBrands.includes(brand) && <Check size={12} className="text-white" />}
             </div>
             <input type="checkbox" className="hidden" checked={selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)} />
             <span className={`text-sm ${selectedBrands.includes(brand) ? 'font-bold text-black' : 'text-gray-600'}`}>{brand}</span>
          </label>
        ))}
      </FilterSection>

      {/* Ordenar */}
      <FilterSection title="Ordenar por">
        <div className="flex flex-col gap-2">
          {[
            { label: 'Relevancia', value: 'relevance' },
            { label: 'Precio: Menor a Mayor', value: 'price-asc' },
            { label: 'Precio: Mayor a Menor', value: 'price-desc' }
          ].map(option => (
            <button 
              key={option.value} 
              onClick={() => setSortOrder(option.value)}
              className={`text-left text-sm py-1 transition-colors ${sortOrder === option.value ? 'text-black font-bold' : 'text-gray-500 hover:text-black'}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </FilterSection>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-black selection:bg-black selection:text-white">
      <Header />
      
      <div className="h-20"></div> {/* Spacer for fixed header */}

      {/* HERO SECTION */}
      <div className="relative h-[40vh] w-full bg-neutral-950 overflow-hidden flex items-center justify-center">
        <div 
          className={`absolute inset-0 opacity-60 bg-cover bg-center grayscale transition-transform duration-[20s] ease-linear ${loaded ? 'scale-110' : 'scale-100'}`}
          style={{ backgroundImage: "url('/2.webp')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30"></div>
        
        <div className="relative z-10 text-center p-4">
          <p className={`text-white font-mono text-xs tracking-[0.4em] uppercase mb-4 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Colección 2025
          </p>
          <h1 className={`text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mix-blend-difference transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            Catálogo
          </h1>
        </div>
      </div>

      {/* TOOLBAR SUPERIOR */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-500">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Botón Filtros (Móvil) & Contador */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white px-4 py-2 rounded-full border border-gray-200 transition-all"
            >
              <SlidersHorizontal size={14} /> Filtros
            </button>
            <span className="text-xs text-gray-500 font-medium tracking-wide">
              {filteredProducts.length} PRODUCTOS
            </span>
            {/* Chips de filtros activos */}
            {(selectedCategory !== 'Todas' || selectedBrands.length > 0) && (
              <button onClick={clearFilters} className="hidden sm:flex items-center gap-1 text-[10px] uppercase font-bold text-red-500 hover:underline">
                <X size={10} /> Limpiar
              </button>
            )}
          </div>

          {/* Layout Switcher */}
          <div className="flex items-center gap-2">
            <button onClick={() => setGridCols(2)} className={`p-2 rounded hover:bg-gray-100 ${gridCols === 2 ? 'text-black' : 'text-gray-400'}`}>
              <Grid2X2 size={20} />
            </button>
            <button onClick={() => setGridCols(4)} className={`hidden md:block p-2 rounded hover:bg-gray-100 ${gridCols === 4 ? 'text-black' : 'text-gray-400'}`}>
              <LayoutGrid size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto w-full p-4 lg:p-8 flex gap-12">
        
        {/* SIDEBAR (DESKTOP ONLY) */}
        <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-40 h-[calc(100vh-10rem)] overflow-y-auto pr-4 custom-scrollbar">
           <FiltersContent />
        </aside>

        {/* GRID DE PRODUCTOS */}
        <main className="flex-1">
          {filteredProducts.length > 0 ? (
            <div 
              className="grid gap-y-12 gap-x-4 sm:gap-x-6 transition-all duration-500"
              style={{ gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))` }}
            >
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className={`group relative opacity-0 animate-fill-mode-forwards ${loaded ? 'animate-fade-up' : ''}`}
                  style={{ animationDelay: `${index * 50}ms` }} // Cascada rápida
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Contenedor Imagen */}
                  <div className="relative aspect-[4/5] w-full bg-gray-100 overflow-hidden mb-4 shadow-sm transition-all duration-500 group-hover:shadow-xl">
                    
                    {product.tag && (
                      <div className="absolute top-3 left-3 z-20">
                        <span className={`text-[10px] font-bold px-2 py-1 uppercase tracking-widest ${
                          product.tag === 'SALE' ? 'bg-red-600 text-white' : 'bg-white text-black'
                        }`}>
                          {product.tag}
                        </span>
                      </div>
                    )}

                    <img 
                      src={product.image} 
                      alt={product.name}
                      className={`w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                        hoveredProduct === product.id ? 'scale-110 opacity-90' : 'scale-100'
                      }`}
                    />

                    {/* Overlay Tallas (Hover) */}
                    <div className={`absolute inset-0 bg-black/10 flex items-end justify-center p-4 transition-opacity duration-300 ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className={`w-full bg-white p-3 shadow-lg transform transition-all duration-300 ${
                        hoveredProduct === product.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
                        <p className="text-[10px] text-gray-400 font-bold uppercase text-center mb-2">Seleccionar Talla</p>
                        <div className="flex flex-wrap justify-center gap-1">
                          {product.sizes.map(size => (
                            <button key={size} className="min-w-[30px] h-8 px-1 text-xs border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-colors font-medium">
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Producto */}
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{product.brand}</p>
                      <p className="text-sm font-bold text-black">${product.price.toLocaleString()}</p>
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 uppercase leading-snug group-hover:underline underline-offset-4 decoration-1">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // ESTADO SIN RESULTADOS
            <div className="flex flex-col items-center justify-center py-32 text-center animate-fade-up">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">No se encontraron productos</h3>
              <p className="text-gray-500 mb-6">Intenta ajustar los filtros o tu búsqueda.</p>
              <button 
                onClick={clearFilters}
                className="text-sm font-bold underline hover:text-gray-500 transition-colors"
              >
                Limpiar todos los filtros
              </button>
            </div>
          )}
        </main>
      </div>

      {/* DRAWER FILTROS (MÓVIL) */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${isMobileFilterOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${isMobileFilterOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileFilterOpen(false)}
        ></div>
        
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-md bg-white shadow-2xl transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${isMobileFilterOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-white">
              <h2 className="text-lg font-black uppercase tracking-tight">Filtrar & Ordenar</h2>
              <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto">
              <FiltersContent />
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <button 
                className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-neutral-800 transition-transform active:scale-[0.98]"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                Ver {filteredProducts.length} Resultados
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* ESTILOS CSS INYECTADOS */}
      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fill-mode-forwards {
          animation-fill-mode: forwards;
        }
        /* Scrollbar personalizada para el sidebar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #e5e5e5;
          border-radius: 20px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: #a3a3a3;
        }
      `}</style>
    </div>
  );
}
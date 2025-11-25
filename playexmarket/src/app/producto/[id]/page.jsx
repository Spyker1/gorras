"use client"
import React, { useState } from 'react';
import { Heart, ChevronDown } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const productData = {
  id: 1,
  brand: 'Nike Tech',
  subtitle: 'Chamarra Windrunner para hombre',
  price: 2899,
  tag: 'Materiales sustentables',
  description: 'El icónico estilo Nike Windrunner recibe una inyección de comodidad premium con nuestro tejido Fleece que es suave en ambos lados. Se combina con un ajuste relajado y detalles técnicos.',
  images: [
    '/1.webp', 
    '/2.webp', 
    '/3.webp', 
    '/4.webp', 
    '/1.webp',
    '/2.webp',
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
};

export default function ProductDetailNikeV2() {
  const [selectedSize, setSelectedSize] = useState('');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const index = Math.round(scrollPosition / width);
    setActiveImageIndex(index);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-[#111]">
      <Header />
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 pt-24 lg:pt-32 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-10 relative">
          <div className="lg:col-span-7 mb-8 lg:mb-0">
            <div className="hidden lg:grid lg:grid-cols-2 gap-3">
              {productData.images.map((img, idx) => (
                <div 
                  key={idx}
                  className="bg-[#F6F6F6] rounded-md overflow-hidden aspect-[0.9] relative cursor-pointer hover:opacity-[0.98] transition-opacity"
                >
                  <img 
                    src={img} 
                    alt={`Vista ${idx + 1}`} 
                    className="w-full h-full object-cover object-center"
                  />
                  {idx === 0 && (
                    <span className="absolute top-3 left-3 bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded text-black shadow-sm">
                      Destacado
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Móvil: Carrusel más compacto */}
            <div 
              onScroll={handleScroll}
              className="lg:hidden -mx-4 overflow-x-auto flex snap-x snap-mandatory scrollbar-hide pb-4"
            >
              {productData.images.map((img, idx) => (
                <div key={idx} className="snap-center min-w-full px-0">
                  <div className="bg-[#F6F6F6] overflow-hidden aspect-square relative">
                    <img 
                      src={img} 
                      alt={`Vista ${idx + 1}`}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Puntos indicadores móvil */}
            <div className="lg:hidden flex justify-center gap-2 mb-4">
              {productData.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeImageIndex ? 'w-2 bg-black' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative pl-0 lg:pl-4">
            <div className="sticky top-32">
              
              <div className="mb-6">
                <h1 className="text-2xl font-medium tracking-tight mb-1 text-[#111]">
                  {productData.brand}
                </h1>
                <p className="text-base text-gray-500 mb-3">
                  {productData.subtitle}
                </p>
                <div className="text-xl font-medium mb-4">
                  ${productData.price.toLocaleString()}
                </div>
                 <p className="text-[#FA5400] font-medium text-sm">
                    {productData.tag}
                  </p>
              </div>

              {/* Colores */}
              <div className="mb-6">
                 <div className="flex gap-2 mb-5">
                    <div className="w-14 h-14 rounded-md border border-black overflow-hidden cursor-pointer hover:opacity-80">
                        <img src="/1.webp" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-14 h-14 rounded-md border border-transparent hover:border-gray-300 overflow-hidden cursor-pointer bg-gray-100">
                        <img src="/2.webp" className="w-full h-full object-cover opacity-80 hover:opacity-100"/>
                    </div>
                 </div>

                {/* Tallas */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-[#111]">Selecciona tu talla</span>
                  <button className="text-gray-500 text-sm hover:text-black hover:underline">Guía de tallas</button>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {productData.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        py-2.5 rounded-md text-sm font-medium border transition-all
                        ${selectedSize === size 
                          ? 'border-black text-black ring-1 ring-black' 
                          : 'border-gray-200 text-gray-700 hover:border-gray-400'
                        }
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Botones */}
              <div className="space-y-3 mb-8">
                <button 
                  className="w-full bg-[#111] text-white rounded-full py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.99]"
                >
                  Agregar a la bolsa
                </button>
                
                <button 
                  className="w-full border border-gray-300 rounded-full py-4 font-medium hover:border-black transition-colors flex items-center justify-center gap-2 group"
                >
                  Favoritos <Heart size={18} className="group-hover:fill-black"/>
                </button>
              </div>

              {/* Descripción */}
              <div className="mb-6 text-sm text-gray-700 leading-relaxed">
                 <p>{productData.description}</p>
                 <button className="mt-4 underline underline-offset-4 decoration-1 font-medium hover:text-gray-500">
                    Ver más detalles
                 </button>
              </div>

              {/* Acordeones Simples */}
              <div className="border-t border-gray-200">
                <button className="w-full flex justify-between items-center py-4 text-sm font-medium hover:text-gray-600">
                  <span>Envíos</span>
                  <ChevronDown size={16}/>
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>
      
      <Footer />
      
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
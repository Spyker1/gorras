"use client"
import React, { useState } from 'react';
import { Heart, Star, ChevronDown, ChevronRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const productData = {
  id: 1,
  brand: 'Nike Tech', // Título grande
  subtitle: 'Chamarra Windrunner para hombre', // Subtítulo gris
  price: 2899,
  tag: 'Materiales sustentables', // Texto naranja
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
  const [mainImage, setMainImage] = useState(productData.images[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="bg-white min-h-screen font-sans text-[#111]">
      <Header />

      {/* Contenedor Principal - Margen superior para no chocar con el header */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          
          {/* ==========================================
              SECCIÓN IZQUIERDA: GALERÍA (COLUMNAS 1-8)
             ========================================== */}
          <div className="lg:col-span-7 xl:col-span-8 flex gap-4 mb-10 lg:mb-0 h-fit sticky top-24">
            
            {/* 1. Tira de Miniaturas (Izquierda) */}
            <div className="hidden lg:flex flex-col gap-3 w-16 flex-shrink-0">
              {productData.images.map((img, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => {
                    setMainImage(img);
                    setActiveImageIndex(idx);
                  }}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                    activeImageIndex === idx ? 'opacity-100 ring-1 ring-gray-400' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Fondo gris suave detras de la miniatura igual que Nike */}
                  <div className="bg-[#F5F5F5] w-full h-full">
                    <img 
                      src={img} 
                      alt={`Thumbnail ${idx}`} 
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* 2. Imagen Principal (Centro) */}
            <div className="flex-1 relative group">
               {/* Fondo gris suave redondeado */}
              <div className="bg-[#F5F5F5] rounded-xl overflow-hidden aspect-[4/5] w-full relative">
                 {/* Etiqueta flotante si existe */}
                <span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold rounded-full z-10 shadow-sm">
                    Altamente valorado
                </span>
                <img 
                  src={mainImage} 
                  alt="Vista Principal" 
                  className="w-full h-full object-cover object-center mix-blend-multiply transition-transform duration-500"
                />
              </div>
              
              {/* Flechas de navegación móvil (opcional si quieres carrusel en desktop también) */}
              <div className="lg:hidden absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                 {/* Aquí irían flechas si fuera móvil */}
              </div>
            </div>
          </div>

          {/* Versión Móvil (Carrusel horizontal) - Se oculta en desktop */}
          <div className="lg:hidden mb-6 -mx-4 overflow-x-auto flex snap-x scrollbar-hide gap-2 px-4">
             {productData.images.map((img, idx) => (
               <div key={idx} className="snap-center min-w-[85vw] bg-[#F5F5F5] rounded-xl overflow-hidden aspect-[4/5]">
                 <img src={img} className="w-full h-full object-cover mix-blend-multiply" />
               </div>
             ))}
          </div>


          {/* ==========================================
              SECCIÓN DERECHA: INFO (COLUMNAS 9-12)
             ========================================== */}
          <div className="lg:col-span-5 xl:col-span-4 relative">
            <div className="sticky top-24 pr-2">
              
              {/* Etiquetas y Títulos */}
              <div className="mb-6">
                <p className="text-[#d43f0f] font-medium text-sm mb-2">
                  {productData.tag}
                </p>
                <h1 className="text-3xl font-medium tracking-tight mb-1 leading-tight">
                  {productData.brand}
                </h1>
                <p className="text-base text-gray-500 mb-4 font-normal">
                  {productData.subtitle}
                </p>
                <div className="text-lg font-medium">
                  ${productData.price.toLocaleString()}
                </div>
              </div>

              {/* Selector de Variantes (Pequeñas imagenes) */}
              <div className="mb-8">
                 {/* Aquí irían las fotos de otros colores si tuvieras */}
                 <div className="flex gap-2 mb-6">
                    <div className="w-16 h-16 rounded-md border border-black overflow-hidden cursor-pointer bg-[#F5F5F5]">
                        <img src="/1.webp" className="w-full h-full object-cover mix-blend-multiply"/>
                    </div>
                    <div className="w-16 h-16 rounded-md border-transparent hover:border-gray-300 border overflow-hidden cursor-pointer bg-[#F5F5F5]">
                        <img src="/2.webp" className="w-full h-full object-cover mix-blend-multiply opacity-70 hover:opacity-100"/>
                    </div>
                 </div>

                {/* Tallas */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-base font-medium">Selecciona tu talla</span>
                  <button className="text-gray-500 text-sm hover:text-black">Guía de tallas</button>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {productData.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 rounded-md text-sm font-medium border transition-all duration-100 ${
                        selectedSize === size 
                          ? 'border-black text-black ring-1 ring-black' 
                          : 'border-gray-200 text-gray-900 hover:border-gray-800'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Botones de Acción (Pill Shape Perfecto) */}
              <div className="space-y-3 mb-10">
                <button 
                  className="w-full bg-black text-white rounded-full py-4 font-medium hover:bg-neutral-800 transition-transform active:scale-[0.98] text-base"
                >
                  Agregar a la bolsa de compra
                </button>
                
                <button 
                  className="w-full border border-gray-300 rounded-full py-4 font-medium hover:border-black transition-colors flex items-center justify-center gap-2 text-base group"
                >
                  Favoritos <Heart size={18} className="group-hover:fill-black transition-colors"/>
                </button>
              </div>

              {/* Descripción */}
              <div className="mb-8">
                 <p className="text-base leading-relaxed text-gray-700 font-normal">
                   {productData.description}
                 </p>
                 <ul className="mt-6 space-y-2 list-disc pl-5 text-base text-gray-700">
                    <li>Color que se muestra: Obsidiana/Negro</li>
                    <li>Estilo: IF1325-437</li>
                 </ul>
                 <button className="mt-4 text-base font-medium underline underline-offset-4 decoration-1 hover:text-gray-600">
                    Ver datos del producto
                 </button>
              </div>

              {/* Acordeones (Lineas separadoras) */}
              <div className="border-t border-gray-200">
                <button className="w-full flex justify-between items-center py-5 group">
                  <span className="text-lg font-medium">Talla y ajuste</span>
                  <ChevronDown size={20} className="text-gray-500"/>
                </button>
              </div>
              
              <div className="border-t border-gray-200">
                <button className="w-full flex justify-between items-center py-5 group">
                  <span className="text-lg font-medium">Envíos</span>
                  <ChevronDown size={20} className="text-gray-500"/>
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </div>
  );
}
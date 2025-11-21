"use client"
import React from 'react';
import { ArrowRight, Sparkles, Star, Zap, Truck, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FadeIn } from '@/components/FadeIn'; // Asegúrate de importar el componente

export default function HomePage() {
  const featuredProducts = [
    { id: 1, name: 'T Star Black', price: 1700, image: '/1.webp', brand: '31 HATS', tag: 'BESTSELLER' },
    { id: 2, name: 'Crystal White', price: 1700, image: '/2.webp', brand: '31 HATS', tag: 'NUEVO' },
    { id: 3, name: 'Jungle Camo', price: 1750, image: '/3.webp', brand: '31 HATS', tag: '' },
    { id: 4, name: 'VZ The World', price: 1700, image: '/4.webp', brand: '31 HATS', tag: 'LIMITADO' }
  ];

  const categories = [
    {
      name: 'GORRAS',
      subtitle: 'Headwear Premium',
      image: '/1.webp',
      href: '/catalogo',
      colSpan: 'md:col-span-2'
    },
    {
      name: 'SNEAKERS',
      subtitle: 'Limited Edition',
      image: '/gor.jpg',
      href: '/tenis',
      colSpan: 'md:col-span-1'
    },
    {
      name: 'FRAGANCIAS',
      subtitle: 'Esencia Pura',
      image: '/gor.jpg',
      href: '/perfumes',
      colSpan: 'md:col-span-3'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-black selection:text-white">
      <Header />
      
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="relative h-[90vh] w-full overflow-hidden bg-black">
          <div 
            className="absolute inset-0 opacity-60 bg-cover bg-center"
            style={{ backgroundImage: `url('/2.webp')` }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>

          <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <FadeIn direction="down" delay={100}>
              <div className="mb-6">
                <span className="bg-white text-black px-4 py-1 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
                  <Zap size={14} fill="currentColor" /> Nueva Temporada 2025
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <h1 className="text-5xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-6">
                STREET<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">LEGACY</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={500}>
              <p className="text-gray-300 text-base md:text-xl max-w-xl font-medium mb-8 leading-relaxed">
                Redefiniendo el lujo urbano. Encuentra las marcas más exclusivas de gorras, sneakers y perfumería.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/catalogo"
                  className="bg-white text-black px-10 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  Ver Colección <ArrowRight size={18} />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* MARQUEE INFINITO */}
        <div className="bg-neutral-900 text-white py-3 overflow-hidden whitespace-nowrap border-y border-neutral-800">
          <div className="inline-flex animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-4">
                <Sparkles size={14} /> Envíos Gratis a todo México +$2,500 
                <span className="text-gray-600">|</span> 
                Authenticity Guaranteed
              </span>
            ))}
          </div>
        </div>

        {/* CATEGORÍAS */}
        <section className="py-16 md:py-20 px-4 max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex justify-between items-end mb-8 md:mb-12">
              <h2 className="text-4xl font-black uppercase tracking-tight text-black">Categorías</h2>
              <a href="/catalogo" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wide border-b border-black pb-1 hover:opacity-60 transition-opacity text-black">
                Explorar Todo
              </a>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 150} className={`${cat.colSpan} h-80 md:h-auto w-full`}>
                <a 
                  href={cat.href}
                  className="group relative block h-full w-full overflow-hidden bg-gray-100"
                >
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
                    <p className="text-gray-200 text-xs font-bold uppercase tracking-widest mb-1 md:mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      {cat.subtitle}
                    </p>
                    <div className="flex justify-between items-end">
                      <h3 className="text-white text-3xl md:text-4xl font-black uppercase italic tracking-tighter">
                        {cat.name}
                      </h3>
                      <div className="bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 hidden md:block">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* PRODUCTOS DESTACADOS (Actualizado con enlaces) */}
        <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 text-gray-900">Trending Now</h2>
                <p className="text-gray-600">Las piezas más codiciadas de la semana. No te quedes sin la tuya.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              {featuredProducts.map((product, idx) => (
                <FadeIn key={product.id} delay={idx * 100}>
                  {/* AQUÍ ESTÁ EL CAMBIO: Usamos <a> apuntando a /producto/ID */}
                  <a 
                    href={`/producto/${product.id}`} 
                    className="group cursor-pointer block"
                  >
                    <div className="relative aspect-[4/5] bg-white overflow-hidden mb-4 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                      {product.tag && (
                        <div className="absolute top-3 left-3 z-20 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                          {product.tag}
                        </div>
                      )}
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Botón visual */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        <span className="block w-full bg-white text-black text-center font-bold text-sm py-3 uppercase tracking-wide border border-gray-100 shadow-lg hover:bg-black hover:text-white transition-colors">
                          Añadir al Carrito
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{product.brand}</p>
                      <h3 className="text-gray-900 font-bold text-base uppercase leading-tight mb-1 group-hover:underline decoration-1 underline-offset-4">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-black font-semibold">${product.price.toLocaleString()} MXN</span>
                      </div>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FadeIn delay={0} className="flex flex-col items-center">
              <div className="h-12 w-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-black">
                <Star size={24} />
              </div>
              <h4 className="font-bold uppercase tracking-wide mb-2 text-black">Calidad Premium</h4>
              <p className="text-sm text-gray-500 max-w-xs">Solo trabajamos con marcas originales y materiales de primera.</p>
            </FadeIn>
            <FadeIn delay={200} className="flex flex-col items-center">
              <div className="h-12 w-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-black">
                <Truck size={24} />
              </div>
              <h4 className="font-bold uppercase tracking-wide mb-2 text-black">Envío Express</h4>
              <p className="text-sm text-gray-500 max-w-xs">Recibe tu pedido de 2 a 5 días hábiles en cualquier parte de México.</p>
            </FadeIn>
            <FadeIn delay={400} className="flex flex-col items-center">
              <div className="h-12 w-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-black">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-bold uppercase tracking-wide mb-2 text-black">Compra Segura</h4>
              <p className="text-sm text-gray-500 max-w-xs">Tus datos están protegidos. Garantía de satisfacción en cada compra.</p>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
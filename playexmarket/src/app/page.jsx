"use client"
import React from 'react';
import Link from 'next/link'; // <--- IMPORTANTE: Importamos Link
import { ArrowRight, Sparkles, Star, Zap, Truck, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FadeIn } from '@/components/FadeIn'; 

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
        <section className="relative h-[95vh] w-full overflow-hidden bg-black">
          {/* Imagen de Fondo con Animación */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
             <div 
               className="w-full h-full bg-cover bg-center animate-subtle-zoom"
               style={{ backgroundImage: `url('/j.png')` }} 
             ></div>
          </div>
          
          {/* Capas de Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40"></div>

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-10">
            <FadeIn direction="down" delay={100}>
              <div className="mb-8">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] rounded-full inline-flex items-center gap-2 hover:bg-white hover:text-black transition-colors duration-300">
                  <Zap size={14} fill="currentColor" /> Nueva Temporada 2025
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-6 drop-shadow-2xl">
                STREET<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">LEGACY</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={500}>
              <p className="text-gray-200 text-base md:text-xl max-w-2xl mx-auto font-medium mb-10 leading-relaxed drop-shadow-md">
                Redefiniendo el lujo urbano. Encuentra las marcas más exclusivas de gorras, sneakers y perfumería.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Usamos Link en lugar de <a> */}
                <Link 
                  href="/catalogo"
                  className="bg-white text-black px-12 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  Ver Colección <ArrowRight size={18} />
                </Link>
                <Link 
                  href="/tenis"
                  className="bg-transparent border border-white text-white px-12 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center"
                >
                  Sneakers
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* MARQUEE INFINITO */}
        <div className="bg-black text-white py-4 overflow-hidden whitespace-nowrap border-b border-neutral-800 z-20 relative">
          <div className="inline-flex animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-10 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-4 opacity-80">
                <Sparkles size={14} className="text-yellow-500" /> Envíos Gratis a todo México +$2,500 
                <span className="text-neutral-600">|</span> 
                Authenticity Guaranteed
              </span>
            ))}
          </div>
        </div>

        {/* CATEGORÍAS */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black">Categorías</h2>
              <Link href="/catalogo" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wide border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all text-black">
                Explorar Todo
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[650px]">
            {categories.map((cat, idx) => (
              <FadeIn key={idx} delay={idx * 150} className={`${cat.colSpan} h-96 md:h-auto w-full`}>
                <Link 
                  href={cat.href}
                  className="group relative block h-full w-full overflow-hidden bg-gray-100 rounded-sm"
                >
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                    <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                      {cat.subtitle}
                    </p>
                    <div className="flex justify-between items-end">
                      <h3 className="text-white text-4xl font-black uppercase italic tracking-tighter group-hover:text-stroke transition-all">
                        {cat.name}
                      </h3>
                      <div className="bg-white text-black h-10 w-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* PRODUCTOS DESTACADOS - AQUÍ ESTABA EL PROBLEMA */}
        <section className="py-20 bg-neutral-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-black">Trending Now</h2>
                <p className="text-gray-500 font-medium">Las piezas más codiciadas de la semana. No te quedes sin la tuya.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {featuredProducts.map((product, idx) => (
                <FadeIn key={product.id} delay={idx * 100}>
                  {/* Usamos LINK para navegación correcta en Next.js */}
                  <Link 
                    href={`/producto/${product.id}`} 
                    className="group cursor-pointer block"
                  >
                    <div className="relative aspect-[4/5] bg-white overflow-hidden mb-5 shadow-sm group-hover:shadow-2xl transition-all duration-500 rounded-sm">
                      {product.tag && (
                        <div className="absolute top-0 left-0 z-20 bg-black text-white text-[10px] font-bold px-3 py-2 uppercase tracking-widest">
                          {product.tag}
                        </div>
                      )}
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                        <button className="w-full bg-white text-black font-bold text-xs py-4 uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                          Ver Detalles
                        </button>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-400 text-[10px] font-extrabold uppercase tracking-[0.2em] mb-2">{product.brand}</p>
                      <h3 className="text-black font-black text-lg uppercase leading-none mb-2 group-hover:text-gray-600 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-black font-bold text-sm bg-gray-100 px-3 py-1 rounded-sm">${product.price.toLocaleString()} MXN</span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <FadeIn delay={0} className="flex flex-col items-center group">
              <div className="h-16 w-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6 text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <Star size={28} />
              </div>
              <h4 className="font-black uppercase tracking-wider mb-3 text-lg text-black">Calidad Premium</h4>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">Solo trabajamos con marcas originales y materiales de primera.</p>
            </FadeIn>
            <FadeIn delay={200} className="flex flex-col items-center group">
              <div className="h-16 w-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6 text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <Truck size={28} />
              </div>
              <h4 className="font-black uppercase tracking-wider mb-3 text-lg text-black">Envío Express</h4>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">Recibe tu pedido de 2 a 5 días hábiles en cualquier parte de México.</p>
            </FadeIn>
            <FadeIn delay={400} className="flex flex-col items-center group">
              <div className="h-16 w-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6 text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <ShieldCheck size={28} />
              </div>
              <h4 className="font-black uppercase tracking-wider mb-3 text-lg text-black">Compra Segura</h4>
              <p className="text-sm text-gray-500 max-w-xs leading-relaxed">Tus datos están protegidos. Garantía de satisfacción en cada compra.</p>
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
          animation: marquee 30s linear infinite;
        }
        
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite alternate ease-in-out;
        }

        .text-stroke {
          -webkit-text-stroke: 1px white;
          color: transparent;
        }
      `}</style>
    </div>
  );
}
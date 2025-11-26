"use client"
import React, { useState } from 'react';
import { ArrowRight, Lock, Mail, Eye, EyeOff, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('error');

  const showNotification = (message, type = 'error') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSubmit = () => {
    setIsLoading(true);

    // Simular delay de autenticación
    setTimeout(() => {
      if (email === 'yowy@gmail.com' && password === '131416') {
        showNotification('¡Bienvenido! Redirigiendo...', 'success');
        setTimeout(() => {
          window.location.href = '/admin';
        }, 1000);
      } else {
        showNotification('Credenciales incorrectas. Intenta nuevamente.');
        setIsLoading(false);
      }
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white font-sans">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 animate-slide-in">
          <div className={`${
            toastType === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 min-w-[300px]`}>
            <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
            <p className="font-bold text-sm">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('/gor.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/50 to-transparent"></div>
        
        <div className="relative z-10 flex flex-col justify-center items-start px-16 text-white">
          <div className="mb-8">
            <ShieldCheck size={48} className="mb-6" />
          </div>
          <h1 className="text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
            Playex<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Market</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-md leading-relaxed font-medium">
            Panel de administración. Gestiona tu inventario, pedidos y clientes desde un solo lugar.
          </p>
          
          <div className="mt-12 flex gap-4">
            <div className="h-1 w-12 bg-white"></div>
            <div className="h-1 w-6 bg-white/50"></div>
            <div className="h-1 w-3 bg-white/25"></div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-16">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-12 text-center">
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">
              PlayexMarekt
            </h1>
            <p className="text-gray-500 text-sm">Panel de Administración</p>
          </div>

          {/* Form Header */}
          <div className="mb-10">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">
              Iniciar Sesión
            </h2>
            <p className="text-gray-500 font-medium">
              Accede al panel de control
            </p>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-3 text-gray-700">
                Correo Electrónico
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="yowy@gmail.com"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 focus:border-black outline-none transition-colors text-base font-medium bg-white text-black placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider mb-3 text-gray-700">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 focus:border-black outline-none transition-colors text-base font-medium bg-white text-black placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Demo Credentials */}
            <div className="bg-gray-50 border-2 border-gray-200 p-4 rounded-sm">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Credenciales de Prueba:
              </p>
              <p className="text-sm font-mono text-gray-700">
                📧 yowy@gmail.com<br />
                🔑 131416
              </p>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-black text-white py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              {isLoading ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Iniciando...
                </>
              ) : (
                <>
                  Acceder al Panel
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>

          {/* Footer Links */}
          <div className="mt-8 text-center">
            <a 
              href="/"
              className="text-sm text-gray-500 hover:text-black transition-colors font-medium inline-flex items-center gap-1"
            >
              ← Volver a la tienda
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
"use client"
import React, { useState } from 'react';
import { 
  Package, ShoppingCart, Users, TrendingUp, Plus, Search, 
  Bell, Settings, LogOut, Menu, X, DollarSign, Eye, Edit, Trash2,
  Filter, Download, ChevronDown, MoreVertical
} from 'lucide-react';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');

  // Datos de ejemplo
  const stats = [
    { label: 'Ventas del Mes', value: '$47,890', change: '+12.5%', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Pedidos Totales', value: '234', change: '+8.2%', icon: ShoppingCart, color: 'bg-blue-500' },
    { label: 'Productos', value: '156', change: '+5', icon: Package, color: 'bg-purple-500' },
    { label: 'Clientes', value: '1,429', change: '+23', icon: Users, color: 'bg-orange-500' }
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'Juan Pérez', product: 'T Star Black', amount: '$1,700', status: 'Completado', date: '26 Nov 2024' },
    { id: '#ORD-002', customer: 'María García', product: 'Crystal White', amount: '$1,700', status: 'Procesando', date: '26 Nov 2024' },
    { id: '#ORD-003', customer: 'Carlos Ruiz', product: 'Jungle Camo', amount: '$1,750', status: 'Pendiente', date: '25 Nov 2024' },
    { id: '#ORD-004', customer: 'Ana López', product: 'VZ The World', amount: '$1,700', status: 'Completado', date: '25 Nov 2024' },
    { id: '#ORD-005', customer: 'Roberto Díaz', product: 'T Star Black', amount: '$1,700', status: 'Enviado', date: '24 Nov 2024' }
  ];

  const products = [
    { id: 1, name: 'T Star Black', category: 'Gorras', stock: 45, price: '$1,700', image: '/1.webp', status: 'Activo' },
    { id: 2, name: 'Crystal White', category: 'Gorras', stock: 32, price: '$1,700', image: '/2.webp', status: 'Activo' },
    { id: 3, name: 'Jungle Camo', category: 'Gorras', stock: 18, price: '$1,750', image: '/3.webp', status: 'Activo' },
    { id: 4, name: 'VZ The World', category: 'Gorras', stock: 8, price: '$1,700', image: '/4.webp', status: 'Bajo Stock' }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'productos', label: 'Productos', icon: Package },
    { id: 'pedidos', label: 'Pedidos', icon: ShoppingCart },
    { id: 'clientes', label: 'Clientes', icon: Users }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Completado': 'bg-green-100 text-green-800',
      'Procesando': 'bg-blue-100 text-blue-800',
      'Pendiente': 'bg-yellow-100 text-yellow-800',
      'Enviado': 'bg-purple-100 text-purple-800',
      'Activo': 'bg-green-100 text-green-800',
      'Bajo Stock': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-black text-white transition-all duration-300 flex flex-col fixed h-full z-50`}>
        {/* Logo */}
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          {sidebarOpen && (
            <h1 className="text-xl font-black uppercase tracking-tighter text-white">
              Playex<br />Market
            </h1>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:bg-gray-800 p-2 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeSection === item.id 
                    ? 'bg-white text-black font-bold' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800' /* CORREGIDO: gray-300 es más brillante en fondo negro */
                }`}
              >
                <Icon size={20} />
                {sidebarOpen && <span className="text-sm uppercase tracking-wider">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
          >
            <LogOut size={20} />
            {sidebarOpen && <span className="text-sm uppercase tracking-wider">Salir</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} /> {/* CORREGIDO: Icono más oscuro */}
                <input
                  type="text"
                  placeholder="Buscar productos, pedidos, clientes..."
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-black outline-none transition-colors text-sm text-gray-800 placeholder-gray-500"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700">
                <Bell size={20} />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700">
                <Settings size={20} />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">Admin</p>
                  <p className="text-xs text-gray-600">yowy@gmail.com</p> {/* CORREGIDO: Texto más oscuro */}
                </div>
                <div className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  A
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        {activeSection === 'dashboard' && (
          <main className="p-8">
            {/* Page Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-2 text-black">Dashboard</h2>
              <p className="text-gray-600 font-medium">Bienvenido de vuelta, aquí está el resumen de tu tienda</p> {/* CORREGIDO */}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`${stat.color} p-3 rounded-lg text-white`}>
                        <Icon size={24} />
                      </div>
                      <span className="text-green-700 text-sm font-bold">{stat.change}</span> {/* CORREGIDO */}
                    </div>
                    <p className="text-gray-600 text-xs uppercase tracking-wider mb-1 font-bold">{stat.label}</p> {/* CORREGIDO */}
                    <p className="text-3xl font-black text-gray-900">{stat.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg border border-gray-200 mb-8">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-xl font-black uppercase text-gray-900">Pedidos Recientes</h3>
                <button className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-black flex items-center gap-2">
                  Ver Todos <ChevronDown size={16} />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-800">ID Pedido</th> {/* CORREGIDO: Header más oscuro */}
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-800">Cliente</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-800">Producto</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-800">Monto</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-800">Estado</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-800">Fecha</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-800">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">{order.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-700 font-medium">{order.customer}</td> {/* CORREGIDO */}
                        <td className="px-6 py-4 text-sm text-gray-700">{order.product}</td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">{order.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 font-medium">{order.date}</td> {/* CORREGIDO */}
                        <td className="px-6 py-4">
                          <button className="text-gray-500 hover:text-black transition-colors">
                            <MoreVertical size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        )}

        {/* Productos Section */}
        {activeSection === 'productos' && (
          <main className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tight mb-2 text-black">Productos</h2>
                <p className="text-gray-600 font-medium">Gestiona tu inventario y catálogo</p>
              </div>
              <button className="bg-black text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-gray-800 transition-all flex items-center gap-2">
                <Plus size={20} /> Nuevo Producto
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors text-gray-800">
                    <Filter size={16} /> Filtros
                  </button>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors text-gray-800">
                    <Download size={16} /> Exportar
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                {products.map((product) => (
                  <div key={product.id} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <div className="aspect-square bg-gray-100 overflow-hidden relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(product.status)}`}>
                          {product.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-gray-600 mb-1 font-bold">{product.category}</p> {/* CORREGIDO */}
                      <h4 className="font-black text-lg mb-2 text-gray-900">{product.name}</h4>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-black text-gray-900">{product.price}</span>
                        <span className="text-sm text-gray-600 font-medium">Stock: {product.stock}</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-gray-100 hover:bg-gray-200 py-2 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-1 text-gray-800">
                          <Edit size={14} /> Editar
                        </button>
                        <button className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}

        {/* Pedidos Section */}
        {activeSection === 'pedidos' && (
          <main className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-2 text-black">Pedidos</h2>
              <p className="text-gray-600 font-medium">Administra todos los pedidos de tu tienda</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-bold">
                    Todos
                  </button>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-bold transition-colors text-gray-700">
                    Pendientes
                  </button>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-bold transition-colors text-gray-700">
                    Completados
                  </button>
                </div>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors text-gray-700">
                  <Download size={16} /> Exportar
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-800">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-800">Cliente</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-800">Producto</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-800">Monto</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-800">Estado</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-800">Fecha</th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-800">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">{order.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{order.customer}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{order.product}</td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">{order.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-black">
                              <Eye size={16} />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-black">
                              <Edit size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        )}

        {/* Clientes Section */}
        {activeSection === 'clientes' && (
          <main className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tight mb-2 text-black">Clientes</h2>
                <p className="text-gray-600 font-medium">Base de datos de clientes</p>
              </div>
              <button className="bg-black text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-gray-800 transition-all flex items-center gap-2">
                <Plus size={20} /> Nuevo Cliente
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <Users size={48} className="mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-black mb-2 text-gray-900">Próximamente</h3>
              <p className="text-gray-600">La gestión de clientes estará disponible pronto</p>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
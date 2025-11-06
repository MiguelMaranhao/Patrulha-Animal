import React, { useEffect } from 'react'

function ProductItem({ product }) {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
      <img src={product.imgSrc} alt={product.name} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1">R$ {product.price.toFixed(2)}</p>
        <button className="w-full mt-4 bg-cyan-500 text-white p-2 rounded-lg text-sm font-semibold hover:bg-cyan-600 transition">Comprar</button>
      </div>
    </div>
  )
}

export default function MercadoContent() {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [])

  const products = [
    { name: 'Coleira', price: 49.90, imgSrc: 'https://placehold.co/300x300/a7f3d0/047857?text=Coleira' },
    { name: 'Brinquedo Bola', price: 29.90, imgSrc: 'https://placehold.co/300x300/bae6fd/0369a1?text=Brinquedo' },
    { name: 'Depósito de Ração', price: 129.90, imgSrc: 'https://placehold.co/300x300/fde68a/b45309?text=Ração' },
    { name: 'Caminha', price: 199.90, imgSrc: 'https://placehold.co/300x300/fbcfe8/9d174d?text=Caminha' }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Mercado</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map(p => <ProductItem key={p.name} product={p} />)}
      </div>
    </div>
  )
}

import axios from 'axios';
import { ShoppingCart, Eye, Heart } from 'lucide-react';

function ProductCard({product}) {

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all hover:shadow-xl">
      
      {/* 1. IMAGE WITH HOVER EFFECT */}
      <div className="relative h-72 w-full overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* 2. CATEGORY BADGE */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600 shadow-sm">
          {product.category}
        </span>

        {/* 3. QUICK ACTION OVERLAY (Visible on Hover) */}
        {/* <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
           <button className="rounded-full bg-white p-3 text-gray-800 shadow-lg hover:text-indigo-600"><Heart size={20}/></button>
           <button className="rounded-full bg-white p-3 text-gray-800 shadow-lg hover:text-indigo-600"><Eye size={20}/></button>
        </div> */}
      </div>

      {/* 4. PRODUCT DETAILS */}
      <div className="p-5">
        <h3 className="mb-1 line-clamp-1 text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="mb-4 line-clamp-2 h-10 text-sm text-gray-500">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-black text-indigo-600">₹{product.price}</span>
          
          {/* 5. ADD TO CART BUTTON */}
          <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 active:scale-95">
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
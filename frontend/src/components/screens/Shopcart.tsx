import { Trash2 } from 'lucide-react'
import { Select, MenuItem, Typography, Button } from '@mui/material'
import { Link } from "react-router-dom"
import { useAppSelector } from "../../hooks/redux"
import ProductSummary from "../ui/cart/ProductSummary"
import "./Shopcart.module.css"

const Shopcart = () => {
  const { cart } = useAppSelector((state) => state.cart)

// Producto ficticio solo para desarrollo
const fakeCart = cart.length === 0 ? [{
  id: 'fake1',
  name: 'Zapatilla Adidas Test',
  brand: 'Adidas',
  price: 18999,
  image: 'https://via.placeholder.com/80',
  colorImg: [{ colorImg: 'https://via.placeholder.com/32' }],
}] : cart;


  return (
    <div className="shopcart-container">
      {cart.length === 0 ? (
        <div className="text-center w-full">
          <Typography variant="h5" gutterBottom>El carrito está vacío</Typography>
          <Typography variant="body2">
            Una vez que agregues un producto a tu carrito aparecerá acá. ¿Listo para empezar?
          </Typography>
          <Button variant="contained" component={Link} to="/Products" className="mt-4">
            Empezar
          </Button>
        </div>
      ) : (
        <>
          {/* Productos */}
          <div className="cart-products">
            <h2 className="cart-title">TU CARRITO</h2>
            {fakeCart.map((product) => (
              <div key={product.id} className="cart-item">
                {/* Info producto */}
                <div className="cart-item-details">
                  <img src={product.image} alt={product.name} />
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>{product.brand}</p>
                  </div>
                </div>

                {/* Colores */}
                <div className="color-options">
                  {product.colorImg.map((color, idx) => (
                    <img key={idx} src={color.colorImg} alt="color" />
                  ))}
                </div>

                {/* Cantidad */}
                <Select defaultValue={3} size="small">
                  {[1, 2, 3, 4, 5].map((qty) => (
                    <MenuItem key={qty} value={qty}>{qty}</MenuItem>
                  ))}
                </Select>

                {/* Precio */}
                <p className="cart-price">
                  ${product.price.toLocaleString('es-AR')}
                </p>

                {/* Eliminar */}
                <button className="cart-remove-btn">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Resumen */}
          <aside className="cart-summary">
            <ProductSummary />
            <button className="checkout-button">IR A PAGAR</button>
          </aside>
        </>
      )}
    </div>
  )
}

export default Shopcart

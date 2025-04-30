import { Link } from "react-router-dom"
import { useAppSelector } from "../../hooks/redux"
import ProductSummary from "../ui/cart/ProductSummary"

const Shopcart = () => {

  const {cart} = useAppSelector((state) => state.cart) 

  return (
    <>
      <div>
        {cart.length === 0 
          ? 
            <div>
              {/* Carrito vacio */}
              <div>
                <h2>El carrito esta vacio</h2>
                <p>Una vez que agregues un producto a tu carrito aparecera aca. Listo para empezar?</p>
                <button><Link to={'/products'}>Empezar</Link></button>
              </div>
              {/* Fin Carrito vacio */}
            </div>
          :
            <div>
              {/* Main Carrito con productos */}
              <div>
                <h2>Tu carrito</h2>
                {cart.map((product) => {
                  return (
                    <div key={product.id}>
                      <div>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.brand}</p>
                      </div>
                      <div>
                        <select name="color" id="color">
                          {product.colorImg.map((color) => {
                            const {colorImg} = color
                            return (
                              <option value={colorImg}><img src={colorImg} alt={colorImg} /></option>
                            )
                          })}
                        </select>
                      </div>
                      <div>
                        {/* Logica para la cantidad de productos dependiendo del stock */}
                      </div>
                      <div>
                        <p>${product.price}</p>
                      </div>
                      <div>
                        <button>X</button>
                      </div>
                    </div>
                  )
                })}
              </div> 
              {/* Fin Main Carrito con productos */}

              {/* Aside Carrito */}
              <div>
                  <ProductSummary />
              </div>
              {/* Fin Aside Carrito */}  
            </div>
        }
      </div>
    </>
  )
}

export default Shopcart

import OrderSummary from "./OrderSummary"
import PaymentSection from "./PaymentSection"
import useCartData from "../../hooks/useCartData"

const CheckoutPage = () => {
 
  const {cartitems, setCartItems, cartTotal, setCartTotal, loading, tax} = useCartData()


  return (
    <div className="container" style={{ margin: '100px' }}>
        <div className="row">
            <OrderSummary cartitems={cartitems} cartTotal={cartTotal} tax={tax} />
            <PaymentSection />
        </div>
    </div>
  )
}

export default CheckoutPage
import React from 'react'
import arr from '../../Assets/CartImg/arrow.png'
import car from '../../Assets/CartImg/cart.png'
import './Cart.css'
import Items from './Items'

const Cart = () => {
  return (
    <>
        <header>
            <div className='continue-shopping'>
            <img src={arr} alt="arrow" className='arrow-icon' />
            <h3>Continue Shopping</h3>
            </div>

            <div className='cart-icon'>
            <img src={car} alt="cart" />
            <p>3</p>

            </div>
        </header>

        <section className='main-cart-section'>
        <h1>shopping cart</h1>
        <p className='total-items'>you have <span className='total-items-count'>3</span> items in shopping cart</p>

        <div className='cart-items'>

        <div className='cart-items-container'>


         
         <Items />
        

        </div>

        </div>

        <div className='card-total'>
         <h3>Cart Total : <span> 24000rs </span></h3>
         <button>CheckOut</button>
        </div>
        </section>
    </>
  )
}

export default Cart
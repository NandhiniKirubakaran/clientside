import React from 'react'

export default function index({ data = [], i=0, dispatcher = () => {}, addProduct = (data) => {} }) {
  return (
        <div key={i} className="product-card">
            <img width={'100%'} height="100px" src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/n4jmdjf6n3l6mr69plx2'} />
                <div className='product-card-content'>
                <h3 className="title">{data.name}</h3>
                <p className='price'>{data.price}</p>
                <button className='add-to-cart-cta' onClick={() => addProduct({
                                    productId: data.id,
                                    quantity: 1,
                })}>Add to cart</button>
            </div>
        </div>
  )
}

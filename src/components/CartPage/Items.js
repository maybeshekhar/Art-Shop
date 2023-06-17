import React from 'react'

const Items = () => {
  return (
    <>
        <div className='items-info'>
           <div className='product-img'>
           <img src="https://d2wmjgcwxowcvo.cloudfront.net/download-2022.1.23_19.7.26-dirums-(dirums.com)/media/blob1683631510016.undefined" alt="pic" />
           </div>
           
           
           <div className='title'>
             <h2>samsoong</h2>
             <p>hello testing</p>
           </div>

           <div className='add-minus-quantity'>
                <i class='fas fa-minus minus'></i>
                <input type="text" placeholder='2' />
                <i class='fas fa-plus add'></i>
           </div>

           <div className='price'>
           <h3>2300rs</h3>
           </div>

           <div className='remove-item'>
                <i class='fas fa-trash-alt remove'></i>
           </div>


         </div>

         <hr />
    </>
  )
}

export default Items
import React from 'react'

function ServicesItems({name,brief,Bg}) {
  return (
    <div className="service-rw">
            <h4 className='service-name'>
                {name}
            </h4>
            <p className="service-brief">
                {brief}
            </p>
            <div className="service-img">
                <img src={Bg} alt="bg-img" />
            </div>
        </div>
  )
}

export default ServicesItems

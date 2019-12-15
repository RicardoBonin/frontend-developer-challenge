import React, { useState } from 'react'
import { products, nextPage } from '../endpoint'

const Produts = () => {  
  const [prod, setProd] = useState('false')

  return (
    <div className='container'>
      <h1>Sua seleção especial</h1>
      <div  className='produtos'>
        {
          Object
            .keys(products)
            .map(produto => {
              console.log(prod)
            return(
              <div key={produto} className='produto'>
                <div>
                  <img src={products[produto].image} />
                </div>
                <div>
                  <p>{products[produto].name}</p>
                  <p>{products[produto].description}</p>
                  <p>De:{products[produto].oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                  <p>Por:{products[produto].price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                  <p>ou {products[produto].installments.count} de {products[produto].installments.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
                <button className='btn-cmp'>Comprar</button>
              </div>
            )
          })
        }
        {!prod &&
          Object
            .keys(nextPage)
            .map(pro => {
              console.log(pro)
            return(
              <div key={pro} className='produto'>
                <div>
                  <img src={nextPage[pro].image} />
                </div>
                <div>
                  <p>{nextPage[pro].name}</p>
                  <p>{nextPage[pro].description}</p>
                  <p>De:{nextPage[pro].oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                  <p>Por:{nextPage[pro].price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                  <p>ou {nextPage[pro].installments.count} de {nextPage[pro].installments.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
                <button className='btn-cmp'>Comprar</button>
              </div>
              )
          })
        }
      </div>
      {
        prod &&
        <button className='btn-prod' onClick={() => setProd(!prod)}>Ainda mais produtos aqui!</button>
      }
      {
        !prod &&
        <button className='btn-prod' onClick={() => setProd(!prod)}>Fechar Produtos</button>
      }
    </div>
  )
}

export default Produts
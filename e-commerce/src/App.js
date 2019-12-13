import React, { useState } from 'react'
import './App.css'
import { products, nextPage } from './endpoint'

const Header = () => {
  return (
    <header>
        <p>Uma seleção de produtos</p>
        <h1>especial para você</h1>
        <p>Todos os produtos dessa lista foram selecionados a partir da sua navegação. Aproveite!</p>
        <button>Conheça a Linx</button>
        <button>Ajude o algoritimo</button>
        <button>Seus produtos</button>
        <button>Compartilhe</button>
      </header>
  )
}
const Footer = () => {
  return (
    <footer>
        <p>Testando suas habilidades em HTML, CSS e JS.</p>
        <p>Linx Impulse</p>
        <p>2019</p>
      </footer>
  )
}
const Produtos = () => {  
  const [prod, setProd] = useState('true')

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
                  <p>De:{products[produto].oldPrice}</p>
                  <p>Por:{products[produto].price}</p>
                  <p>ou {products[produto].installments.count} de R${products[produto].installments.value}</p>
                </div>
                <button className='btn-cmp'>Comprar</button>
              </div>
            )
          })
        }
        {prod &&
          Object
            .keys(nextPage)
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
                  <p>De:{products[produto].oldPrice}</p>
                  <p>Por:{products[produto].price}</p>
                  <p>ou {products[produto].installments.count} de R${products[produto].installments.value}</p>
                </div>
                <button className='btn-cmp'>Comprar</button>
              </div>
              )
          })
        }
      </div>
      <button onClick={() => setProd(!prod)}>Ainda mais produtos aqui!</button>
    </div>
  )
}
const Compartilhamento = () => {
  return(
    <div className='container'>
      <h1>Compartilhe a novidade</h1>
      <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
      <form>
        <label>Nome do Seu amigo:</label>
        <input type='text' />
        <label>E-mail:</label>
        <input type='email' />
        <button>Enviar agora</button>
      </form>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Produtos />
      <Compartilhamento />
      <Footer />
    </div>
  );
}

export default App

import React from 'react'
import './App.css'
import {products} from './endpoint'

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
  
  return (
    <div className='container'>
      <h1>Sua seleção especial</h1>
      {
        Object
          .keys(products)
          .map(produto => {
            console.log(produto)
          return(
            <table>
              <tbody>
                <tr key={produto}>
                  <td>
                    {products[produto].image}
                    {products[produto].name}
                    img01
                    Nome
                    descrição
                    de:
                    Por:
                    ou x
                    <button>Comprar</button>
                  </td>
                  <td>img02</td>
                  <td>img03</td>
                  <td>img04</td>
                </tr>
                <tr> 
                  <td>img05</td>
                  <td>img06</td>
                  <td>img07</td>
                  <td>img08</td>
                </tr>
              </tbody>
            </table>
          )
        })
      }
      <button>Ainda mais produtos aqui!</button>
    </div>
  )
}
const Compartilhamento = () => {
  return(
    <div>
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
    <div className='container'>
      <Header />
      <Produtos />
      <Compartilhamento />
      <Footer />
    </div>
  );
}

export default App

import React from 'react'

const Header = () => {
  return (
    <header>
        <h2>uma seleção de produtos</h2>
        <h1>especial para você</h1>
        <h4>Todos os produtos dessa lista foram selecionados a partir da sua navegação. Aproveite!</h4>
        <button className='btn-header'>Conheça a Linx</button>
        <button className='btn-header'>Ajude o algoritimo</button>
        <button className='btn-header'>Seus produtos</button>
        <button className='btn-header'>Compartilhe</button>
      </header>
  )
}
export default Header
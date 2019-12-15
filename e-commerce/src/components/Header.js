import React from 'react'

const Header = () => {
  return (
    <header>
        <p className='p-h-1'>uma seleção de produtos</p>
        <p className='p-h-2'>especial para você</p>
        <p className='p-style'>Todos os produtos dessa lista foram selecionados a partir da sua navegação. Aproveite!</p>
        <button className='btn-header'>Conheça a Linx</button>
        <button className='btn-header'>Ajude o algoritimo</button>
        <button className='btn-header'>Seus produtos</button>
        <button className='btn-header'>Compartilhe</button>
      </header>
  )
}
export default Header
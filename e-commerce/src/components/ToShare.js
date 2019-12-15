import React, { useState} from 'react'

const ToShare = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [valida, setValidate] = useState(false)

  const onblurName = evt => {
    setName(evt.target.value)
  }
  
  const onBlurEmail = evt => {
    setEmail(evt.target.value)
    
  }

  const validate = evt => {
    evt.preventDefault()
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(email)){
      setError(false)
    } else{
      setError(true)
    }
    if (name.length === 0) {
      setName('error')
    }
    if(name.length > 0 && error !== false ) {
      setValidate(true)
    }
  }
  
  return(
    <div className='share'>
      <h4 className='h4-products'>Compartilhe a novidade</h4>
      <p className='p-style-p'>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
      <form>
        <div className='principal'>
          <div className="n01">
            <label htmlFor='Lname'>Nome:</label>
            <input type='text' id='Lname' onBlur={onblurName} />
          </div>
          <div className='n02'>
            <label htmlFor='email'>E-mail: </label>
            <input type='email' id='email' onBlur={onBlurEmail} />
          </div>
        </div>
        {
          error &&
          <div className='error'>
            <span>[ERRO!] E-mail invalido!</span>
          </div>
        }
        {
          name === 'error' &&
          <div className='error'>
            <span>[ERRO!] Campo nome vazio!</span>
          </div>
        }
        {
          valida &&
          <div className='error' style={{color: 'green'}}>
            <span>Novidade compartilhada com sucesso!</span>
          </div>
        }
        <button className='btn-share' onClick={validate}>Enviar agora!</button>
      </form>
        </div>
  )
}

export default ToShare
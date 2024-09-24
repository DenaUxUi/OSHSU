import React from 'react'
import Tests from "../../assets/Alltests.svg"
import Questions from "../../assets/Question.svg"
import Results from "../../assets/Results.svg"
import "./Header.scss"

function Header(){
  return (
    <section>
      <div className='Header'>
        <div className='Header__block'>
            <img src={Tests} alt="" />
            <p>Все тесты</p>
        </div>
        <div className='Header__block'>
            <img src={Questions} alt="" />
            <p>Вопросы</p>
        </div>
        <div className='Header__block'>
            <img src={Results} alt="" />
            <p>Результаты</p>
        </div>
        
      </div>
    </section>
  )
}

export default Header

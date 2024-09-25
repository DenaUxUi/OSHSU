import React from 'react'
import "./InfoHead.scss"
import Clock from "../../assets/clock-three-1.svg"
import "../../assets/Fonts/Fonts.scss"


function InfoHead() {
    return (
        <section>
            <div className='InfoHead'>
                <div className="InfoHead__Info"></div>
                <div className="InfoHead__Info__block">
                    <img src={Clock} alt="" />
                    <p className='Roboto-block'>5/20 вопросов по экономике</p>
                </div>
            </div>
            <div className="InfoHead__additional">
                <h1 className='Roboto'>Экзаменационный тест по экономике</h1>
            </div>
        </section>
    )
}

export default InfoHead

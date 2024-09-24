import React from 'react'
import logo from "../../assets/OSHSU.svg"
import usericon from "../../assets/User.svg"
import "./Topline.scss"

function Topline() {
    return (
        <section>
            <div className='Topline'>
                <img src={logo} alt="" />
                <div className='Topline-circle'>
                    <img src={usericon} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Topline

import React from 'react'
import "./TeacherData.scss"
import "../../assets/Fonts/Fonts.scss"

function TeacherData() {
    return (
        <section>
            <div className='Teacher'>
                <h1 className='Roboto-title'>Персональные данные</h1>
                <div className='Teacher__Data'>
                    <div className='Teacher__Data__Details'>
                        <p className='Roboto-data'>Имя</p>
                        <p className='Roboto-data-desc'>Не указано</p>
                    </div>
                    <div className='Teacher__Data__Details'>
                        <p className='Roboto-data'>Фамилия</p>
                        <p className='Roboto-data-desc'>Не указано</p>
                    </div>
                    <div className='Teacher__Data__Details'>
                        <p className='Roboto-data'>Отчество</p>
                        <p className='Roboto-data-desc'>Не указано</p>
                    </div>
                    <div className='Teacher__Data__Details'>
                        <p className='Roboto-data'>Курсы</p>
                        <p className='Roboto-data-desc'>Не указано</p>
                    </div>
                    <div className='Teacher__Data__Details'>
                        <p className='Roboto-data'>Электронная почта</p>
                        <p className='Roboto-data-desc'>Не указано</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeacherData

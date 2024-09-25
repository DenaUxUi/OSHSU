import React from 'react'
import Topline from '../../Components/Topline/Topline'
import Header from '../../Components/Header/Header'
import TeacherData from '../../Components/TeacherData/TeacherData'
import InfoHead from '../../Components/InfoHead/InfoHead'

function HomePage() {
  return (
    <div>
      <InfoHead />
      <Topline />
      <Header />
      <TeacherData />
    </div>
  )
}

export default HomePage

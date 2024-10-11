import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Mybody from './Mybody';
import Footer from './Footer'

const MainPage = () => {
  return (
      <React.Fragment>
    <section>
        <div className='layout'>
            <div className='Header text'>
                <Header/>
            </div>
            <div className='Sidebar text'>
                <Sidebar/>
            </div>
            <div className='Mybody text'>
                <Mybody/>
            </div>
            <div className='Footer text'>
                <Footer/>
            </div>
        </div>
    </section>
</React.Fragment>
  )
}

export default MainPage;
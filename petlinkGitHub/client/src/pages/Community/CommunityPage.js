import React from 'react'
import './CommunityPage.css'
import NavBar2 from '../../component/navbar/LoginUserNavBar'
function CommunityPage() {
  return (
    <>
    <NavBar2/>
    <div className='Communityheading'>
      

      <p className='CommunityWelcome'>Welcome To Community</p>
        <div className="CommunityLostmain">
        <div className="CommunityLostright-grp">
          <form>
          <div className='CommunityBorder'></div>
            <div className="CommunityLostright-grp-child" />
            <div className='CommunityInput'>
              <input className='CommunitytextInput' name='inputs'/>
              <button className='CommunitybuttonSend'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    </>

  )
}

export default CommunityPage
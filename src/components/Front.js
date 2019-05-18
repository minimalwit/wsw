import React, { Component } from 'react'
import icon from '../img/clock.svg'
import profilePicture from '../img/ryu.jpg'
import './Front.css'

class front extends Component {
  
  state = {
    name:'SAMUEL ANDERSON',
    job: 'THE EXPERIENCED UI/UX DESIGNER',
    pName: 'Samuel F. Anderson',
    pBirth: '03/01/1980',
    pAddress: ' 123 New york, Drench, USA',
    pPhone: '075-515-5189',
    pEmail: 'sanderson@gmail.com',
    cc1Head: 'wowwwww',
    cc1Content: 'blablablablabalbalbalbsfdgsfdgsdfgsalablabalabsfdgsfglablalabla',
    cc2Head: 'wowwwww2222',
    cc2Content: 'blablablablabalbalbalbasdfgsfgsdfgslablabalablablalabla',
    cc3Head: 'wowwwww3333',
    cc3Content: 'blablablablabalbalfdgsdfgsdfgsfdgsdfgsdfbalbalablabalablablalabla',
  }



  render() {



    return (
      <div className='container-column font'>
        <div className='grid-container'>
        <div class='item-pic profile'>
              <img alt="profile" src={profilePicture}/>
            </div>
            <div class='item-top-a center-col'>
              <div className='name font pad-left'>
                {this.state.name}
              </div>
            </div>
            <div class='item-top-b center-col center-row'>
              <img alt="icon1" src={icon}/>
            </div>
            <div class='item-mid-a'>
              <div className='job font pad-left'>
                {this.state.job}
              </div>
            </div>
            <div class='item-mid-b center-col center-row'>
              <img alt="icon1" src={icon}/>
            </div>
            <div class='item-low-a center-col center-row'><img alt="icon1" src={icon}/>HOME</div>
            <div class='item-low-b center-col center-row'><img alt="icon1" src={icon}/>RESUME</div>
            <div class='item-low-c center-col center-row'><img alt="icon1" src={icon}/>PORTFOLIO</div>
            <div class='item-low-d center-col center-row'><img alt="icon1" src={icon}/>CONTACT</div>
            <div class='item-low-e center-col center-row'><img alt="icon1" src={icon}/>FEEDBACK</div>
            <div class='item-low-f center-col center-row'><img alt="icon1" src={icon}/>BLOG</div>


            <div class='content-left grid-content'>
              <div className="ct-a bold"> GRADIUS RESUME HTML TEMPLATE</div>
              <div className="ct-b red">PERFECT FOR CV / RESUME OR PORTFOLIO WEBSITE</div>
              <div className="ct-c">
                <div className='sc-a grid-childcontent'>
                  <div className='cc-a'><img alt="icon2" src={icon} /></div>
                  <div className='cc-b bold'>{this.state.cc1Head}</div>
                  <div className='cc-c break-word'>{this.state.cc1Content}</div>
                </div>
              </div>
              <div className="ct-d">
                <div className='grid-childcontent'>
                  <div className='cc-a'><img alt="icon2" src={icon} /></div>
                  <div className='cc-b bold'>{this.state.cc2Head}</div>
                  <div className='cc-c break-word'>{this.state.cc2Content}</div>
                </div>
              </div>
              <div className="ct-e"><div className='grid-childcontent'>
                  <div className='cc-a'><img alt="icon2" src={icon} /></div>
                  <div className='cc-b bold'>{this.state.cc3Head}</div>
                  <div className='cc-c break-word'>{this.state.cc3Content}</div>
                </div></div>
            </div>

            <div class='content-right grid-personal'>
              <div className="pf-a bold"> PERSONAL INFO</div>
              <div className="pf-b">
                <table className='table font' >
                  <tr><td><b>Name     </b></td>     <td>{this.state.pName}</td></tr>
                  <tr><td><b>Birthday </b></td>     <td>{this.state.pBirth}</td></tr>
                  <tr><td><b>Address  </b></td>     <td>{this.state.pAddress}</td></tr>
                  <tr><td><b>Phone    </b></td>     <td>{this.state.pPhone}</td></tr>
                  <tr><td><b>Email    </b></td>     <td>{this.state.pEmail}</td></tr>
                </table>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default front

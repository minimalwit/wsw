import React, { Component } from 'react'
import { connect } from 'react-redux'

import request from '../utils/request'
// import store from '../store';


class back extends Component {

  state = {
    Makes: [],
    // Country:[]
    cal:[]
  }


  componentDidUpdate(prevProps, prevState) {
    if(prevProps.state !== this.state) {
      console.log(this.state)
      this.handleCalculate()
      
    }
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = async () => {
    const res = await request.get('/?callback=?&cmd=getMakes')
    // let cleanRes = res.data.replace('?({"Makes":','').replace('});','')
    let cleanRes = res.data.replace('?(','').replace(');','')
    // console.log(cleanRes)
    let obj = JSON.parse(cleanRes);
    // console.log(obj)
    const data = obj.Makes.map((item) => {
      // console.log(item)
      // let image = 'https://via.placeholder.com/300x400.png';
      // if (item.relationships.main_image) {
      //   const fileId = item.relationships.main_image.data.id
      //   const file = res.data.included.main_images.find(function(el) {
      //     return fileId === el.id;
      //   });
      //   image = file.link.href
      // }
      return {
        id : item.make_id,
        brand: item.make_display,
        common: item.make_is_common,
        country: item.make_country,
      }
    })
    this.setState({
      Makes: data,
    })
  }

  // แต่ละประเทศผลิตรถกี่ยี่ห้อ
  // แต่ละประเทศมีรถยี่ห้ออะไรบ้าง
  // USA ผลิตรถกี่ยี่ห้อ ยี่ห้ออะไรบ้าง
  // รถยุโรป มีกี่ยี่ห้อ ยี่ห้ออะไรบ้าง
  handleCalculate = () => {

    let cal = {
      countryBrand : [
        // {
        //   country:[],
        //   brand: [],
        // }
      ],
      country: []

    }
    const eucountry =
    ["Andorra", "Albania", "Austria", "Åland Islands", "Bosnia and Herzegovina", "Belgium", "Bulgaria", "Belarus", "Switzerland", "Cyprus", "Czech Republic", "Germany", "Denmark", "Estonia", "Spain", "Finland", "Faroe Islands", "France", "United Kingdon", "Guernsey", "Greece", "Croatia", "Hungary", "Ireland", "Isle of Man", "Iceland", "Italy", "Jersey", "Liechtenstein", "Lithuania", "Luxembourg", "Latvia", "Monaco", "Moldova, Republic of", "Macedonia, The Former Yugoslav Republic of", "Malta", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Russian Federation", "Sweden", "Slovenia", "Svalbard and Jan Mayen", "Slovakia", "San Marino", "Ukraine", "Holy See"]  
    
    // let country = []
    this.state.Makes.map(item => {
      if ( !cal.country.includes(item.country ))  {
        cal.country.push(item.country)
        let obj ={      }
        obj.country = item.country
        obj.brand = [] 
        obj.brand.push(item.brand)
        cal.countryBrand.push(obj)
      } else {
        let target = cal.countryBrand.find(o => o.country === item.country)
        if (target && !target.brand.includes(item.brand)){
          target.brand.push(item.brand)
        }
      }
      return ({
        country: item.country
      }
      )
    })
    console.log(cal)
    console.log('answer1')
    cal.countryBrand.map(item => {
      console.log(`'Country :' ${item.country}  Brand  ${item.brand}  `)
      return ('')
    })
    console.log('answer2')
    cal.countryBrand.map(item => {
      console.log(`'Country :' ${item.country}  Total Brand  ${item.brand.length}  `)
      return ('')
    })
    console.log('answer3')
    let Show3 = cal.countryBrand.find (item => item.country === 'USA')
    console.log (`Country : ${Show3.country} Total Brand ${Show3.brand.length} Brand ${Show3.brand}` )
    
    console.log('answer4')
    console.log(`All EU country${eucountry.length}`)
    let brand=[]
    cal.countryBrand.map(item => {
      if (!eucountry.includes(item.country)) {
        if(!brand.includes(item.brand)){
            brand.push(item.brand)
        }
      } 
      return ('')
    })
    console.log (`Eu Country will have Brand ${brand}` )
    // console.log(checkCountry)
    // this.setState(({cal}) => {
    //   return {
    //     ...this.state,
    //   cal : cal
    //   }
    // })
  }

  // { (this.cal !== undefined )? 
  //   this.state.cal.countryBrand.map((item) => 
  //   <div>{`'Country :' ${item.country}  Brand  ${item.brand} `}</div>
  // ) : ''
  // }

  render() {
    return (
      <div>
        <h2> For the Answer see console.log </h2>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  // const getTotal = store.select.cars.getTotal
  return {
    ...state,
    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {  
    getItems : dispatch.cars.getCartItems
  }
}


export default connect(mapStateToProps,mapDispatchToProps) (back)
import request from '../../utils/request'

export const cars = {
  state: {
    Makes: [
      // {
      //   productId: 1,
      //   amount: 2
      // }
    ],

  },
  reducers: {
    // handle state changes with pure functions
    setCarsItems (state,payload){
      return{
        ...state,
        Makes: {...payload}
        }
    },

    // getCartItems (state,payload){
    //   return{
    //     ...state,
    //     ...payload
    //     }
    // },

    // setTotalPrice(state,payload){
    //   return {
    //     ...state,
    //     totalPrice: payload
    //   }
    // },

  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    // async incrementAsync(payload, rootState) {
    //   await new Promise(resolve => setTimeout(resolve, 1000))
    //   dispatch.count.increment(payload)
    // }

    // https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes
    // แล้วเขียน code เพื่อแสดงคำตอบจากข้อมูลที่ได้มาจาก API ข้างต้น
    // แต่ละประเทศผลิตรถกี่ยี่ห้อ
    // แต่ละประเทศมีรถยี่ห้ออะไรบ้าง
    // USA ผลิตรถกี่ยี่ห้อ ยี่ห้ออะไรบ้าง
    // รถยุโรป มีกี่ยี่ห้อ ยี่ห้ออะไรบ้าง

    // async getCartItems(payload,rootState) {
    async getCartItems() {
      // const res = await request.get('/?callback=?&cmd=getMakes',{
      //   Makes : payload
      // })
      const res = await request.get('/?callback=?&cmd=getMakes')
      console.log(res)
    //   const cleanData = res.data.data.map((item) => {
    //     return {
    //       id: item.id,
    //       productId: item.product_id,
    //       amount: item.quantity,
    //       name: item.name,
    //       image: 'https://via.placeholder.com/300x400.png',
    //       price: item.meta.display_price.with_tax.value.formatted,
    //       pricePerUnit: item.meta.display_price.with_tax.unit.amount,
    //       description: item.description,
    //     }
    //   })
    //   console.log(cleanData)
    //   // dispatch.cart.setTotalPrice(this.select.total)
      dispatch.cars.setCarsItems(res)
    },

  }),
  selectors: {
    getTotal() {
      return (rootState, props) => 
        // sum array / object in javascript
        rootState.reduce((a, b) => a + (b.pricePerUnit * b.amount),0)
    },
  }
}
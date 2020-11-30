export default {
  getInvestments (context) {
    context.commit('setInvestments', {
      investmentData: [
        {
          id: 1,
          name: 'Item-1',
          price: '10.00'
        },
        {
          id: 2,
          name: 'Item-2',
          price: '20.00'
        },
        {
          id: 3,
          name: 'Item-3',
          price: '30.00'
        },
        {
          id: 1,
          name: 'Item-4',
          price: '40.00'
        }
      ]
    })
  }
}

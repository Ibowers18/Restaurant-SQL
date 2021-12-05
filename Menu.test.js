const { Model } = require('sequelize/dist')
const {sequelize} = require('./db')
const {Customer} = require('./Customer')
const {Menu} = require('./Menu')
describe('Customer Database', () => {

    beforeAll(async() => {
        await sequelize.sync({force:true})
    
    const arrayOfMenulist=[
        {entree_id: 20, entree_name: 'Steak',price : 19.99},
        {entree_id:  25,entree_name: 'Chicken',price: 12.99},
        {entree_id: 11, entree_name: 'Salad',price: 9.99}
    ]

       await Menu.bulkCreate(arrayOfMenulist)
     
    const arrayOfCustomer=[
        {Cus_id: 101, Payment_id: 4545, Food_id: 98},
        {Cus_id: 125, Payment_id: 7654, Food_id: 99},
        {Cus_id: 111, Payment_di: 6543, Food_id: 97}
    ]
        await Customer.bulkCreate(arrayOfCustomer)

    })
    test('Menu has items', async() => {
      
        // await Musician.create({name: 'Prince', instrument: 'guitar'})
        // const musicians = await Musician.findAll();
        //read test instance from db
        const testMenu = await Menu.findOne({
            where: {
              entree_name: 'Steak'
            }
          });
        expect(testMenu.entree_name).toBe('Steak')
    })

    test('Customer Table', async() => {
       // await Customer.bulkCreate(arrayOfCustomer)
        // await Musician.create({name: 'Prince', instrument: 'guitar'})
        // const musicians = await Musician.findAll();
        //read test instance from db
        const testCustomer = await Customer.findOne({
            where: {
              Cus_id: 101
            }
          });
        expect(testCustomer.Cus_id).toBe(101)
    })

})


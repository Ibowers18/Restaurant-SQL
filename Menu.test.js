const { Model } = require('sequelize/dist')
const {sequelize} = require('./db')
const {Customer} = require('./Customer')
const {Menu} = require('./Menu')
const {Dish} = require('./Dish')
const {Chef} = require('./Chef')
describe('Customer Database', () => {

    beforeAll(async() => {
        await sequelize.sync({force:true})
    
    const arrayOfMenulist=[
        {entree_id: 20, entree_name: 'Bar-B-Que',price: 15.99},
        {entree_id: 25, entree_name: 'Jerk Chicken',price: 12.99},
        {entree_id: 11, entree_name: 'Greek Salad',price: 9.99}
    ]

       await Menu.bulkCreate(arrayOfMenulist)
     
    const arrayOfCustomer=[
        {Cus_id: 101, Payment_id: 4545, Food_id: 98},
        {Cus_id: 125, Payment_id: 7654, Food_id: 99},
        {Cus_id: 111, Payment_id: 6543, Food_id: 97}
    ]
        await Customer.bulkCreate(arrayOfCustomer)

    const arrayOfDish=[
       {Cus_id:101, Order_id: 1001, Quantity: 1, Order_date: 2021-12-1},
       {Cus_id:125, Order_id: 1002, Quantity: 2, Order_date: 2021-12-2},
       {Cus_id:111, Order_id: 1003, Quantity: 3, Order_date: 2021-12-3}
    ]
        await Dish.bulkCreate(arrayOfDish)

    const arrayOfChef=[
        {Chef_id: 1201, Chef_name: 'Saeed', Salary: 65000, Entree_id: 20, Order_id: 1001},
        {Chef_id: 1202, Chef_name: 'Kasem', Salary: 65000, Entree_id: 25, Order_id: 1002},
        {Chef_id: 1203, Chef_name: 'Illan', Salary: 65000, Entree_id: 11, Order_id: 1003}
    ]
        await Chef.bulkCreate(arrayOfChef)    

    })
    test('Menu has items', async() => {
        // await Menu.bulkCreate(arrayOfMenu)
        // await Menu.create({entree_id:, entree_name:, price:})
        // const Menu = await Menu.findOne();
        //read test instance from db
        const testMenu = await Menu.findOne({
            where: {
              entree_name: 'Bar-B-Que'
            }
          });
        expect(testMenu.entree_name).toBe('Bar-B-Que')
    })

    test('Customer Table', async() => {
       // await Customer.bulkCreate(arrayOfCustomer)
        // await Customer.create({Cus_id:, Payment:, Food_id:})
        // const Customer = await Customer.findOne();
        //read test instance from db
        const testCustomer = await Customer.findOne({
            where: {
              Cus_id: 101
            }
          });
        expect(testCustomer.Cus_id).toBe(101)
    })


    test('Dish has Items', async() => {
        // await Dish.bulkCreate(arrayOfDish)
         // await Dish.create({Order_id:, Quantity:, Order_date:, Cus_id:})
         // constDish = await Dish.findOne();
         //read test instance from db
         const testDish = await Dish.findOne({
             where: {
              Order_id: 1001
             }
           });
         expect(testDish.Order_id).toBe(1001)
     })

     test('Chef has items', async() => {
        // await Chef.bulkCreate(arrayOfChef)
         // await Chef.create({Chef_id:, Chef_name:, Salary:, Entree_id:, Order_id:})
         // const Chef = await Chef.findOne();
         //read test instance from db
         const testChef = await Chef.findOne({
             where: {
              Chef_id: 1201
             }
           });
         expect(testChef.Chef_id).toBe(1201)
     })

})

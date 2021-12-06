//const {sequelize} = require('./db')
//const {Customer} = require('./index')
//import the associated models from index.js
const {Customer, Dish, sequelize} = require('./index')

//test musician database CRUD
describe('Customer Database', () => {

    beforeAll(async() => {
        //reset database
        await sequelize.sync({force:true})
        //create array of Dishs
        const arrayOfDish = [
            {Cus_id:101, Order_id: 1001, Quantity: 1, Order_date: 2021-12-1},
            {Cus_id:125, Order_id: 1002, Quantity: 2, Order_date: 2021-12-2},
            {Cus_id:111, Order_id: 1003, Quantity: 3, Order_date: 2021-12-3}
        ]
        //create array of Customers
        const arrayOfCustomer = [
            {Cus_id: 101, Payment_id: 4545, Food_id: 98},
            {Cus_id: 125, Payment_id: 7654, Food_id: 99},
            {Cus_id: 111, Payment_id: 6543, Food_id: 97}
        ]

        //add array to database
        //add arrays to database
        await Dish.bulkCreate(arrayOfDish)
        await Customer.bulkCreate(arrayOfCustomer)
    })

    //describe('Customer Database', () => {
    })

    test('Customer Table', async() => {
        //read test instance from db
        //read test Customer instance from db
        const testCustomer = await Customer.findOne({where: {Cus_id: 101}});
        expect(testCustomer.Cus_id).toBe(101)
    })

   // }) 
    test('Dish has items', async() => {
        //read test Dish instance from db
        const testDish = await Dish.findOne({where: {Order_id: 1001}});
        expect(testDish.Order_id).toBe(1001)
    })

    test('Dish can have many Customers', async()=> {
        //read test Dish instance from db
        const testDish = await Dish.findOne({where: {Order_id: 1001}});
        //create 2 test instances of Customer
        const testCustomer1 = await Customer.findOne({where: {Cus_id: 101}})
        const testCustomer2 = await Customer.findOne({where: {Cus_id: 125}})
        //add testCustomer to test Dish
        //magic sequelize add method
        await testDish.addCustomer(testCustomer1)
        await testDish.addCustomer(testCustomer2)
        //retrieve list of customers purchasing this dish
        
        const CustomerList = await testDish.getCustomer() 
        //assert that the list of customers is length 2
        expect(CustomerList.length).toBe(2)
        //assert that the 0th index of the array customerList is an instance of the model Customer
        expect(CustomerList[0] instanceof Customer).toBeTruthy()
        expect(CustomerList[0].Cus_id).toMatch(101)
    })
})
    




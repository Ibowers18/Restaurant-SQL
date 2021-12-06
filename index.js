//models go here

const {sequelize, DataTypes, Model} = require('./db')

//create model for musicians in our database
class Customer extends Model {
    //add query methods here
}

//create attributes for model using init method
Customer.init({
    
    Cus_id: DataTypes.INTEGER,
    Payment_id: DataTypes.INTEGER,
    Food_id: DataTypes.INTEGER
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})

module.exports = {Customer} 

//import models
//const {Customer} = require('./Customer')
const {Dish} = require('./Dish')

//associate models
//adds foreign key to Dish table connecting a Dish instance to a specific Customer
Customer.belongsTo(Dish)
//gives us sequelize methods for a one to many relationship
Dish.hasMany(Customer)

//export models with added associations
module.exports = {Customer, Dish, sequelize} 

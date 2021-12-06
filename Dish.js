//models go here
//const { DataTypes } = require('sequelize/dist')
const {sequelize, DataTypes, Model} = require('./db')
//create model for Dish items in our database
class Dish extends Model {
//add query methods here
}
//create attributes for model using init method
Dish.init({
    
    Order_id: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER,
    Order_date: DataTypes.DATE,
    Cus_id: DataTypes.INTEGER

}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {Dish}
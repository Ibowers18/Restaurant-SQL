//models go here
//const { DataTypes } = require('sequelize/dist')
const {sequelize, DataTypes, Model} = require('./db')
//create model for Chef items in our database
class Chef extends Model {
//add query methods here
}
//create attributes for model using init method
Chef.init({
    
    Chef_id: DataTypes.INTEGER,
    Chef_name: DataTypes.STRING,
    Salary: DataTypes.FLOAT,
    Entree_id: DataTypes.INTEGER,
    Order_id: DataTypes.INTEGER

}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {Chef}
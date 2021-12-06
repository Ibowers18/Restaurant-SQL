//models go here
const {sequelize, DataTypes, Model} = require('./db')
//create model for menu items in our database
class Menu extends Model {
//add query methods here
}
//create attributes for model using init method
Menu.init({
    
    entree_id: DataTypes.INTEGER,
    entree_name: DataTypes.STRING,
    price: DataTypes.FLOAT
}, {
    sequelize, //specifies what database our model is stored in
    timestamps: false
})
module.exports = {Menu}
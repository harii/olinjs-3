var mongoose = require('mongoose');

/*
connect
just says that we're going to be storing all our data
in the "burgers" database, which mongoose creates automatically 
if it doesn't already exist. If you don't include the connect 
command then mongoose will just connect to the admin database 
by default, and store all your stuff there. However, to avoid
weird data contamination issues, you should always use this 
connect command, and have a separate DB for each app.
*/

mongoose.connect('mongodb://localhost/burgers');


/* Schema time!
*/

var ingredSchema = mongoose.Schema({
    name: String,
    price: Number
});

var orderSchema = mongoose.Schema({
    name: String,
    ingreds: Array
});

var Ingredient = mongoose.model('Ingredient', ingredSchema);
var Order = mongoose.model('Order', orderSchema);

exports.Ingredient = Ingredient;
exports.Order = Order;



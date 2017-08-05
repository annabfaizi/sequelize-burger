module.exports = function(sequelize, DataTypes){

	var burger = sequelize.define("burger", {
		burger_name: {
			type: DataTypes.STRING,
			allownull: false,
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			allownull: false,
			defaultValue: false
		}
	});
	return burger;
}
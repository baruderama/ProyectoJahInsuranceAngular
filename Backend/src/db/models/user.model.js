const {Model, DataTypes} =require('sequelize');

const USER_TABLE='users';

class User extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: true
        }
    }

}

const UserSchema ={
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name'

    },
    address:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'address'

    },
    phone:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'phone'

    },
    email:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'email'

    },
    image:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'image'

    },
    age:{
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'age'

    },
    country:{
        allowNull: true,
        type: DataTypes.STRING,
        field: 'country'

    },
    password:{
        allowNull: false,
        type: DataTypes.STRING,
        field: 'password'

    }
}

module.exports ={User,UserSchema};

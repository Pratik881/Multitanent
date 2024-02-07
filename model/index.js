const dbConfig=require('../config/dbConfig')
const {Sequelize,DataTypes}=require('sequelize')
const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorsAliases:false,
    port:3306,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
})
sequelize.authenticate().then(()=>{
    console.log('connected')
}).catch((err)=>[
    console.log(err.message)
])
const db={
    Sequelize,sequelize
}
db.users=require('../model/userModel')(sequelize,DataTypes)
db.sequelize.sync({force:false}).then(()=>{
    console.log('re-sync done')
})
module.exports=db
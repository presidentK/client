const sqlite3=require('sqlite3');
const db=new sqlite3.Database('test.db');
db.run("insert into car_user(name,age) values('张',11)",err=>{
    if(err){
        console.log('server error')
    }else{
        console.log('ok')
    }
});
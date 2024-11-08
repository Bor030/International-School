

const db = require('../database/config');
const index = (req,res) => {

    
        res.render('index', {title: 'Home'});
      
}

const login = async (req,res) => {
    const {email, password} = req.body;
    const [user]= await db.query('SELECT * FROM admins WHERE email = ? AND password = ?', [email, password]);
    
 try {
    if (user.length > 0) {

        req.session.user = user[0];
        
        res.redirect('/students')    
    
    }else{
        res.send('Wrong email or password');
         
         
    } 
 }   
 catch (error) {

    res.send(error);
}


}
const logout = (req,res) => {
    req.session.destroy();
    
    res.redirect('/')
}


module.exports = {
    index, login, logout,
}








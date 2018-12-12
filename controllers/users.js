function createUser(req, res){
    res.status(201).send('User created');
}

module.exports.createUser = createUser;
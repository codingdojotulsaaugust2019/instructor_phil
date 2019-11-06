const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    index: (req, res) => {
        User.find()
        .then(allUsers => {
            console.log('*'.repeat(30), 'All Users', '*'.repeat(30));
            console.log(allUsers);
            console.log('*'.repeat(30), 'All Users', '*'.repeat(30));
            res.json({ users: allUsers });
        })
        .catch(err => {
            console.log('*'.repeat(30), 'Errors', '*'.repeat(30));
            console.log(err);
            console.log('*'.repeat(30), 'Errors', '*'.repeat(30));
            res.json({ errors: err });
        })
    },
    create: (req, res) => {
        const { name } = req.params;
        // or
        // const name = req.params.name;
        console.log('*'.repeat(30), 'Name from url', '*'.repeat(30));
        console.log(name);
        console.log(typeof(name));
        console.log('*'.repeat(30), 'Name from url', '*'.repeat(30));
        
        User.create({ name: name })
        // or
        // const user = new User();
        // user.name = name;

        // successful promise
        .then(addedUser => console.log(addedUser))
        // unsuccessful promise
        .catch(err => console.log(err))
        // last promise call, regardless of success/failure
        .finally(() => res.redirect('/'))
    },
    show: (req, res) => {
        const { name } = req.params;
        User.findOne({ name: name })
        .then( oneUser => res.json(oneUser))
        .catch( err => res.json({ err:err }))
    },
    remove: (req, res) => {
        const { name } = req.params;
        User.deleteOne({name: name})
        .then( result => console.log(result) )
        .catch( err => console.log(err))
        .finally(() => res.redirect('/'))
    }
}

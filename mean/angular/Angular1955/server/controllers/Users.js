const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    index: (req, res) => {
        User.find()
        .then(allUsers => {
            console.log('*'.repeat(30), 'All Users', '*'.repeat(30));
            console.log(allUsers);
            console.log('*'.repeat(30), 'All Users', '*'.repeat(30));
            res.json({ status: true, users: allUsers });
        })
        .catch(err => {
            console.log('*'.repeat(30), 'Errors', '*'.repeat(30));
            console.log(err);
            console.log('*'.repeat(30), 'Errors', '*'.repeat(30));
            res.json({ status: false, errors: err });
        })
    },
    addUser: (req, res) => {
        console.log(req.body);
        User.create(req.body)
        // successful promise
        .then(addedUser => res.json({ status: true, user: addedUser }))
        // unsuccessful promise
        .catch(err => {
            const errorsArray = [];
            for(let e in err.errors) {
                errorsArray.push(err.errors[e].message);
            }
            res.json({ status: false, errors: errorsArray });
        })
    },
    showOne: (req, res) => {
        const { userId } = req.params;
        User.findOne({_id: userId})
        .then(oneUser => res.json({status: true, user: oneUser}))
        .catch(err => res.json({status: false, error: err}))
    },
    update: (req, res) => {
        const { userId } = req.params;
        User.findByIdAndUpdate(userId, req.body, {runValidators: true})
        .then(result => res.json({ status: true }))
        .catch(err => {
            const errorsArray = [];
            for(let e in err.errors) {
                errorsArray.push(err.errors[e].message);
            }
            res.json({ status: false, errors: errorsArray });
        })
    },
    delete: (req, res) => {
        const { userId } = req.params;
        User.findByIdAndDelete(userId)
        .then(result => res.json({ status: true }))
        .catch(result => res.json({ status: false }))
    },
    // -------------------- the below methods are from the original 1955 assignment --------------------
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
    },
}

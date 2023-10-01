const Post = require('../models/post');

module.exports.home = function(req, res){
    //Get the posts from the DB
    Post.find({})
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    }).then((posts)=>{
        return res.render('home', {
            title: "Home",
            posts: posts
        });
    }).catch((err)=>{
        console.log(err, " Error in fetching the posts");
    });

    
}
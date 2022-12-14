const Post = require("../models/post")

exports.getPosts = (req, res) => {
    res.json({
        post: "First Post",
    })
}

exports.createPost = (req, res) => {
    const post = new Post(req.body)
    // console.log(req.body)
    post.save((err, result) => {
        if (err) {
            return res.status(400).json({ error: err })
        }
        res.status(200).json({
            post: result,
        })
    })
}

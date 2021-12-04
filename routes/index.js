const PostController = require('./../controllers/post.controller')

module.exports = (app) => {
    app.get('/', (req, res) => {
        try {
            return res.status(200).send({
                message: `Welcome to Social Post API`,
                statusCode: 200,
                status: true
            })
        } catch (error) {
            return res.status(500).send({
                message: `Internal Server Error!`,
                statusCode: 500,
                status: false,
                error
            })
        }

    })


    // Create a Blog 
    app.post('/blog', PostController.createPost)

     // find all blogs 
     app.post('/blog/list', PostController.findAllPost)

     // find post by Id
     app.get('/blogById/:id', PostController.findPostById)
}
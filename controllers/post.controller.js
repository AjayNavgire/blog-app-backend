const PostService = require('./../services/post.service')

module.exports = {
    createPost: async (req, res) => {
        try {
            const postData = req.body
            if (!postData.title) {
                return res.status(400).send({
                    message: `title required!`,
                    statusCode: 400,
                    status: false
                })
            } else if (!postData.description) {
                return res.status(400).send({
                    message: `description required!`,
                    statusCode: 400,
                    status: false
                })
            }
            const data = await PostService.insertPost(postData)
            return res.status(200).send({
                message: `Post created successfully`,
                statusCode: 200,
                status: true,
                data: data
            })

        } catch (error) {
            return res.status(500).send({
                message: `Internal Server Error!`,
                statusCode: 500,
                status: false,
                error
            })
        }
    },

    findAllPost: async (req, res) => {
        try {
            const searchData = req.body
            const data = await PostService.findAllPost(searchData)
            return res.status(200).send({
                message: `Post list get successfully`,
                statusCode: 200,
                status: true,
                data: data
            })

        } catch (error) {
            return res.status(500).send({
                message: `Internal Server Error!`,
                statusCode: 500,
                status: false,
                error
            })
        }
    },

    findPostById: async (req, res) => {
        try {
            const _id = req.params.id
            const data = await PostService.findPostById(_id)
            return res.status(200).send({
                message: `Post list get successfully`,
                statusCode: 200,
                status: true,
                data: data
            })

        } catch (error) {
            return res.status(500).send({
                message: `Internal Server Error!`,
                statusCode: 500,
                status: false,
                error
            })
        }
    }
}
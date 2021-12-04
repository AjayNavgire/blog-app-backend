const PostModel = require('./../models/post.model')

exports.insertPost = async (postData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const post = new PostModel({
                title: postData.title,
                description: postData.description
            })
            const result = await post.save()
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

exports.findAllPost = async (searchData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { limit, pageCount } = searchData
            const result = await PostModel.find().skip((pageCount-1 )* limit ).limit(limit)
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}

exports.findPostById = async (_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await PostModel.findById({_id})
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })
}
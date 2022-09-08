
const getPosts= (req,res)=>{
    res.status(200).send(`Get all Post filtered by "${req.query.title}"`)
};
const getPost= (req,res)=>{
    res.status(200).send(`post with Id ${req.params.postId} has been retrieved successfully`)


};
const createPost= (req,res)=>{
    res.status(200).send(" post created")

};
const updatePost= (req,res)=>{
    res.status(200).send(`post with Id ${req.params.postId}has been updated successfully`)

}
const deletePost= (req,res)=>{
    res.status(200).send(`post with Id ${req.params.postId}has been deleted successfully`)

};

module.exports={
getPost,
getPosts,
createPost,
updatePost,
deletePost
}
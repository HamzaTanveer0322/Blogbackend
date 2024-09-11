const { Router } = require('express');
const {login,signup,blogget,upload,uploads,viewblog,deleteblog,userblog,addcomment,viewcomment}=require('../controllers/userauth');
const userauthorized = require('../middleware');
const route=Router()
route.post('/login',login)
route.post('/signup',signup)
route.post('/upload',userauthorized, upload.single('blogimg'),uploads)
route.get('/blog',userauthorized,blogget);
route.get('/viewblog/:_id',userauthorized,viewblog);
route.get('/viewcomment/:_id',userauthorized,viewcomment);
route.delete('/deleteblog',deleteblog);
route.get('/userblog/:userid',userauthorized,userblog);
route.post('/blogcommit',userauthorized,addcomment);
module.exports = route
var moongoose = require('mongoose');
var Schema = moongoose.Schema;

var postSchema= new Schema({
    titulo:String,
    imagem:String,
    categoria:String,
    conteudo:String,
    slug:String,
    autor:String,
    views:Number,
},{collection:'posts'})

var Posts = moongoose.model("Posts",postSchema);

module.exports = Posts;
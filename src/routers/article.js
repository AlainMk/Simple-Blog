const express = require('express')
const Article = require('../models/article')

const router = new express.Router()

router.post('/article/post', async (req, res) => {

    const article = new Article(req.body)
    try {
        await article.save()
        res.status(201).send({
            state: true,
            message: "L'article a été créé avec succès!",
            data: article
        })
    } catch (e) {
        res.status(400).send({
            state: false,
            message: "Erreur lors de la création de l'article"
        })
    }
  
})

router.get('/article/getAll', async (req, res) => {
    try {
        const articles = await Article.find({})
        res.send({
            state: true,
            message: "Les articles sont là!",
            data: articles
        })
    } catch (e) {
        res.status(400).send({
            state: false,
            message: "Erreur lors de la récuperation des articles "
        })
    }
})

router.get('/article/:id/get', async (req, res) => {
    const _id = req.params.id
    try {
        const article = await Article.findById({_id})
        if(!article) {
            res.status(404).send({
                state: false,
                message: "Article non trouvé!"
            })
        }
        res.send({
            state: true,
            message: "L'article a été récuperé!",
            data: article
        })
    } catch (e) {
        res.status(400).send({
            state: false,
            message: "Erreur lors de la récuperation des articles "
        })
    }
})

module.exports = router
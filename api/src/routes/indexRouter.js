const { Router } = require('express')

const router = Router()

router.get('/', (req, res)=>{
    res.json('conectado')
})


module.exports = router
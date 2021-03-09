const router = require('express').Router();


router.post('/suma', (req, res) => {
    let nums = req.body.nums;
    let resultado=0;
    for(num of nums){
        resultado+=num;
    }
    res.json({resultado})
})

router.post('/resta', (req, res) => {
    // numero al que restar
    let numToSub = req.body.numToSub
    // numeros que resta
    let nums = req.body.nums;
    // la resta comienza siendo el numero al que resta cuando no se ha restado nada
    let resultado=numToSub
    // para cada numero de nums , restarlo
    for(num of nums){
        resultado-=num;
    }
    res.json({resultado})
})

router.post('/multiplica', (req, res) => {
    nums = req.body.nums;
    let resultado=1;
    for(num of nums){
        resultado*=num;
    }
    res.json({resultado})
})

router.post('/divide', (req, res) => {
    // numero al que restar
    let numToDiv = req.body.numToDiv
    // numeros que resta
    let nums = req.body.nums;
    // la resta comienza siendo el numero al que resta cuando no se ha restado nada
    let resultado=numToDiv
    // para cada numero de nums , restarlo
    for(num of nums){
        resultado/=num
    }
    res.json({resultado})
})


router.post("/free",(req, res) => {
    res.json({"error":"no implementado"})
});
module.exports = router;
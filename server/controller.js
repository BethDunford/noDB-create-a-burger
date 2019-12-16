let burgers = [];
let gourmet = [];
let id = 1;
let home = [];

function addBurger (req,res){
    let burger = {
        id,
        title: req.body.title,
        ingredient1: req.body.ingredient1,
        ingredient2: req.body.ingredient2,
        ingredient3: req.body.ingredient3,
        ingredient4: req.body.ingredient4
    };
    burgers.push(burger);
    id++;
    res.status(200).json(burgers);
}

function getBurgers (req,res){
    res.status(200).json(burgers);
}

function editBurger (req,res) {    
    const {id} = req.params
    const {title} = req.body;
    const {ingredient1} = req.body;
    const {ingredient2} = req.body;
    const {ingredient3} = req.body;
    const {ingredient4} = req.body;
    const index = burgers.findIndex (element => element.id == id);
    burgers[index].title = title;
    burgers[index].ingredient1 = ingredient1;
    burgers[index].ingredient2 = ingredient2;
    burgers[index].ingredient3 = ingredient3;
    burgers[index].ingredient4 = ingredient4;
    res.status(200).json(burgers);
}

function deleteBurger(req, res) {
    const {id} = req.params;
    for(let i=0; i< burgers.length; i++){
        if(burgers[i].id == id) {
            burgers.splice(i, 1)
        }
    }
    // console.log(burgers)
    res.status(200).json(burgers);
}

function gourmetBurger(req,res) {
    gourmet.push(req.body)
    res.status(200).json(gourmet);
}

function getGourmetBurgers (req,res){
    res.status(200).json(gourmet);
}

function getHome (req, res){
    res.status(200).json(home);
}

function deleteGourmetBurger(req, res) {
    const {id} = req.params;
    for(let i=0; i< gourmet.length; i++){
        if(gourmet[i].id == id) {
            gourmet.splice(i, 1)
        }
    }
    // console.log(burgers)
    res.status(200).json(gourmet);
}

module.exports = {
    addBurger,
    getBurgers,
    editBurger,
    deleteBurger,
    gourmetBurger,
    getGourmetBurgers,
    getHome,
    deleteGourmetBurger
};
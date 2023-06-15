const PersonService = require('../services/users.service');
const service = new PersonService();


const create = async (req,res) =>{
    try{
        //http://localhost:9000/img/image_1686827968550.jpg
        // const image=req.file;
        // let string1= new String("http://localhost:9000/img/");
        // let string2= new String(image.filename);
        // req.body.image=string1.concat(string2.toString());
        // req.body.image=image.path;
        
        
        
        const response = await service.create(req.body);
        
        
        res.json({success: true,data:response});

    }catch(error){
        
        res.status(500).send({succes:false,message: error.message});

    }
}

const get = async (req,res) =>{
    try{
        const response = await service.find();
        //const imagePath=response.at(25).image;
        


        res.json(response);

    }catch(error){
        res.status(500).send({succes:false,message: error.message});

    }
}

const getById = async (req,res) =>{
    try{
        const {id} = req.params;
        const  response = await service.findOne(id);
        res.json(response);

    }catch(error){
        res.status(500).send({succes:false,message: error.message});

    }
}

const update = async (req,res) =>{
    try{
        const {id} = req.params;
        const body = req.body;
        const  response = await service.update(id,body);
        res.json(response);

    }catch(error){
        res.status(500).send({succes:false,message: error.message});

    }
}

const _delete = async (req,res) =>{
    try{
        const {id} = req.params;
        const  response = await service.delete(id);
        res.json(response);

    }catch(error){
        res.status(500).send({succes:false,message: error.message});

    }
}

module.exports={
    create,get,getById,update,_delete
};
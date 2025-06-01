import Todo from "../models/todoModel";


export const getTodos= async (req,res)=>{
    try{
        const todos = await Todo.find();
        res.json(todos);
    }catch(err){
        res.status(500).json({messgae: err.messgae});
    }
};

export const createTodo=async (req,res)=>{
    try{
        const {text}=req.body;
        if(!text) return res.status(400).json({message:"Text is required"});

        const todo=new Todo({text});
        const savedTodo=await todo.save();

        res.status(201).json(savedTodo);

    }catch(err){
        res.status(500).json({message:err.message});
    }
};

export const deleteTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const deleted=await Todo.findByIdAndDelete(id);

        if(!deleted) return res.status(404).json({message:"Todo Not Found"});

        res.json({message:"Todo Deleted"});    


    }catch(error){
        res.status(500).json({message:err.message})
    }
};


export const updateTodo=async(req,res)=>{

    try{

        const {id}=req.params;
        const {text,completed}=req.body;
        
        const todo=await Todo.findById(id);
        if(!todo) return res.status(404).json({message:"Todo Not Found"})
            
            
            if(text!==undefined) todo.text=text;
            if(completed!== undefined) todo.completed=completed;
            
            const updatedTodo=await todo.save();
            
            res.json(updatedTodo);
        }catch (err){
            res.status(500).json({message:err.message});
        }
};
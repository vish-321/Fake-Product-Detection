const express =  require ("express") ;
const app = express () ;
const cors = require("cors");
const pool = require ("./db");
const { response } = require("express");

//middleware
app.use(cors());
app.use(express.json());


try {
    app.listen (5000 , ()=> {
        console.log("Server has started on port 5000"); 
    }) ;
} catch (error) {
    console.error(err.message);
}




//ROUTES


// create a scan

app.post("/brandedshoes/:product_id" , async(req,res)=>{
    try {
        const {product_id}= req.params;
        const {Name} = req.body ;
        let scan_time =new Date();
        const {Location} = req.body ;
       
        const newentry = await  pool.query(
            "INSERT INTO scans (User_Name ,Scan_time , Location ,Product_id  ) VALUES ($1,$2,$3,$4) RETURNING *",[Name,scan_time,Location,product_id]
        );
        res.json(newentry.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get all scans 
app.get("/brandedshoes/:product_id" ,async(req,res)=>{
    try {
       
        const {product_id} =  req.params ;
        const list = await pool.query("SELECT * FROM scans NATURAL JOIN product WHERE Product_id =$1",[product_id]);
        res.json(list.rows);
        
    } catch (err) {
        console.error(err.message);
    }
    
});

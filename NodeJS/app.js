var express=require("express");
var app=express();
var mysql=require("mysql");


app.listen(2003,()=>{
    console.log("Server started");
})

var dbconfig={
    host:"localhost",
    user:"root",
    password:"yatish@2002",
    database:"retail",
    insecureAuth : true
}


var dbctrl=mysql.createConnection(dbconfig);
dbctrl.connect(function(err){
    if(err)
    console.log(err);
    else
    console.log("connection_established");
})



app.use(express.static("public"));



app.get("/",function(req,resp){
    console.log(process.cwd() + "/public/HTML/index.html");
    resp.sendFile(process.cwd() + "/public/HTML/index.html");
})



app.get("/login",function(req,resp)
{
    resp.sendFile(process.cwd() + "/public/HTML/login.html");
})


app.get("/cart",function(req,resp)
{
    resp.sendFile(process.cwd() + "/public/HTML/cart.html");
})

app.get("/fashion",function(req,resp){
    resp.sendFile(process.cwd()  + "/public/HTML/fashion.html")
})

app.get("/electronic",function(req,resp){
    resp.sendFile(process.cwd()  + "/public/HTML/electronics.html")
})


app.use(express.urlencoded('extended:false'));



app.post("/profile-save",function(req,resp){

    var dataAry=[req.body.txt_ID , req.body.txt_First_Name,req.body.txt_Last_name, req.body.txt_Add,
    req.body.txt_city,req.body.txt_age,req.body.txt_email,req.body.txt_mobile,
    req.body.txt_cart,req.body.txt_Pincode ];

    console.log(req.body);

    dbctrl.query("insert into customer values(?,?,?,?,?,?,?,?,?,?)",dataAry,function(err){
        if(err)
        console.log(err);
        else{
        console.log("Record Saved successfully");
            resp.send("Record Saved successfully");
    }
    })

})



app.post("/profile-update",function(req,resp){

    var dataAry=[req.body.txt_ID , req.body.txt_First_Name,req.body.txt_Last_name, req.body.txt_Add,
    req.body.txt_city,req.body.txt_age,req.body.txt_email,req.body.txt_mobile,
    req.body.txt_cart,req.body.txt_Pincode ];

    console.log(req.body);

    dbctrl.query("update customer set customer_ID=? , first_name=?, last_name=? , address=?, city=?,age=?,email=?,mobile=?,cart_ID=?,pincode=?",dataAry,function(err){
        if(err)
        console.log(err);
        else{
            resp.send("Record updated successfully");
    }
    })
})


app.post("/profile-delete",function(req,resp){

    var ID=req.body.txt_ID

    console.log(req.body);

    dbctrl.query("delete from customer where customer_ID=? ",[ID],function(err,result){
        if(err)
        console.log(err);
        else if(result.affectedRows==0){
            resp.send("Invalid ID");
        }

        else
        {
            resp.send("RECORD DELETED SUCCESFULLY ")
        }
    })
})

app.post("/profile-max",function(req,resp){

    console.log("lkjbsalk");

    dbctrl.query("select MAX(Cart_Cost) as max_cost from Cart",function(err,result){
        if(err)
        console.log(err);

        else
       resp.send(result);
    });

})


app.post("/profile-sum",function(req,resp){

    console.log("lkjbsalk");

    dbctrl.query("select SUM(Cart_Cost) as SUM from Cart",function(err,result){
        if(err)
        console.log(err);

        else
        resp.send(result);
    });

})


app.post("/profile-avg",function(req,resp){

    console.log("lkjbsalk");

    dbctrl.query("select AVG(Cart_Cost) as AVG from Cart",function(err,result){
        if(err)
        console.log(err);

        else
        resp.send(result);
    });

})



app.post("/profile-freq",function(req,resp){

    console.log("lkjbsalk");

    dbctrl.query("SELECT P.Product_Name AS 'Product Name', COUNT(*) AS 'Frequency' FROM Wishlist W, Product P WHERE W.Item_ID = P.Product_ID GROUP BY W.Item_ID ORDER BY COUNT(W.Item_ID) DESC LIMIT 1",function(err,result){
        if(err)
        console.log(err);
        else
        resp.send(result);
    });

})





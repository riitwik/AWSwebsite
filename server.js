var exp= require('express');
var app = exp();
var bp=require('body-parser');
app.use(bp.urlencoded({extended: false }))



app.get('/getform',function(req,res){
	
	res.sendFile(__dirname+"/LoginFormPOST_078.html");
});

app.post('/getDataTable',function(req,res){
    
    var name = req.body.name;
    var bdate= req.body.bdate;
    var email=req.body.email;
    var qualif= req.body.qualif;

    res.writeHead(200,{'type':'text/html'})
    res.write("<table border=1>")
  
    res.write("<tr>");
            res.write("<th> Name </th>");
            res.write("<th> Email </th>");
            res.write("<th> Bdate </th>");
            res.write("<th> Qualification </th>");
    res.write("</tr>");
  
    res.write("<tr>");
                res.write("<td>"+ name +" </td>");
                res.write("<td>"+ email +" </td>");
                res.write("<td>"+ bdate +" </td>");
                res.write("<td>"+ qualif +" </td>");
    res.write("</tr>");
    res.write("</table>");
    // res.write("");
    // res.write("");

    res.end();
});

app.listen(9000,function(){
	console.log("Server Started at 9000");
	});
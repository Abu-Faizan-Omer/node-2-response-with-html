const http=require("http")
const myserver=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    
    let url=req.url

    if(url==="/home")
    {
        res.write("<html>")
        res.write("<head><title>home</title></head>")
        res.write("<body><h1>Welcome home</h1></body>")
        res.write("</html>")
        return res.end()
    }
    else if(url==="/about")
    {
        res.write("<html>")
        res.write("<head><title>about</title></head>")
        res.write("<body><h1> Welcome to About Us page</h1></body>")
        res.write("</html>")
        return res.end()
    }
    else if(url==="/node")
    {
        res.write("<html>")
        res.write("<head><title>about</title></head>")
        res.write("<body><h1> Welcome to my Node Js project</h1></body>")
        res.write("</html>")
        return res.end()
    }
    res.write("<html>")
    res.write("<head><title>My first node server withy res</title></head>")
    res.write("<body><h1>Welcome to my first Node Js project</h1></body>")
    res.write("</html>")
    res.end()
})
myserver.listen(1000)
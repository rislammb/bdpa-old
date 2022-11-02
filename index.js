const http = require("http");

const port = process.env.PORT || 5000;
http.createServer((req, res) => {
res.writeHead(200);
res.end(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Web site for Bangladesh Diploma Pharmacist Association"
    />
    <title>BDPA | Old website</title>
    <style>
      div {
        text-align: center; 
        font-size: 20px;
        padding: 40px 16px; 
      }
      div h3 {
        text-align: center;
        mergin-bottom: 16px; 
      }
      div a {
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div>
      <h3>Go to new website</h3>
      <a href="https://bdpa.netlify.app">click</a>
    </div>
  </body>
</html>`)
}).listen(port);

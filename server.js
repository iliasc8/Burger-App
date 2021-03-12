const express = require('express');
const exphbs = require('express-handlebars');
const routes = require("./controllers/burgers_controller")

const PORT = process.env.PORT || 3000
const app = express()
// ===== SERVE STATIC CONTENT FOR THE APP FROM THE PUBLIC DIRECTORY IN THE APPLICATION DIRECTORY =====
app.use(express.static("public"))

// ===== PARSE REQUEST BODY AS JSON =====
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// for HANDLEBARS paths
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(express.static(__dirname));
app.set('view engine', 'handlebars');

app.use(routes)

app.listen(PORT, function(){
  console.log("running")
})

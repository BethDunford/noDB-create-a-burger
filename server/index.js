const express = require ("express");
const app = express ();

//Controller Functions
const {addBurger, getBurgers, editBurger, deleteBurger, gourmetBurger, getGourmetBurgers, getHome, deleteGourmetBurger} = require("./controller");

app.use(express.json());

app.post("/api/burgers", addBurger);
app.get("/api/burgers", getBurgers);
app.put("/api/burgers/:id", editBurger);
app.delete("/api/burgers/:id", deleteBurger);
app.post("/api/gourmet/", gourmetBurger);
app.get("/api/gourmet", getGourmetBurgers);
app.get("/api/home", getHome);
app.delete("api/gourmet/:id", deleteGourmetBurger);



app.listen(9111, () => console.log('Listening on port 9111'));
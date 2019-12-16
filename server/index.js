const express = require ("express");
const app = express ();

//Controller Functions
const {addBurger, getBurgers, editBurger, deleteBurger, gourmetBurger, getGourmetBurgers, getHome, deleteGourmetBurger} = require("./controller");

app.use(express.json());

app.post("/api/getyourburgers", addBurger);
app.get("/api/getyourburgers", getBurgers);
app.put("/api/getyourburgers/:id", editBurger);
app.delete("/api/getyourburgers/:id", deleteBurger);
app.post("/api/getgourmet/", gourmetBurger);
app.get("/api/getgourmet", getGourmetBurgers);
app.get("/api/home", getHome);
app.delete("api/getgourmet/:id", deleteGourmetBurger);



app.listen(9111, () => console.log('Listening on port 9111'));
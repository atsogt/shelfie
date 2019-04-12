require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const {
  getProduct,
  postProduct,
  updateProduct,
  removeProduct
} = require("./controller");

const port = 3001;
const { CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING) //massive connection
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));
app.use(express.json()); //express json

//end points
app.get("/api/shelfieproduct", getProduct);
app.post("/api/shelfieproduct", postProduct);
app.put("/api/shelfieproduct", updateProduct);
app.delete("/api/shelfieproduct", removeProduct);

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});

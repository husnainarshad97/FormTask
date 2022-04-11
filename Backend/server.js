const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config("./.env");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // Define Routes
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/users', require('./routes/api/users'));

connectDB();
app.use("/", require("./routes/user"));
app.use("/form", require("./routes/form"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

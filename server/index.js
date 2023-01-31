import express from "express";
import dotenv from "dotenv";
dotenv.config();
import databaseConnection from "./DB/db.js";
import cors from "cors";
const app = express();
app.use(cors());
databaseConnection();
import Data from "./DB/dataSchema.js";
import bodyParser from "body-parser";

const PORT = process.env.PORT;
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/data", async (req, res) => {
  const data = await Data.find();
  res.json({ message: "success", data });
});

app.post("/data/filter", async (req, res) => {
  const { end_year, topic, sector, region, pestle, source, country } = req.body;
  const filter = {};
  country === "Country" ? {} : (filter["country"] = country);
  source === "Source" ? {} : (filter["source"] = source);
  pestle === "Pestle" ? {} : (filter["pestle"] = pestle);
  region === "Region" ? {} : (filter["region"] = region);
  sector === "Sector" ? {} : (filter["sector"] = sector);
  topic === "Topic" ? {} : (filter["topic"] = topic);
  end_year === "EndYear" ? {} : (filter["end_year"] = end_year);
  const data = await Data.find({
    ...filter
  });
  res.json({ message: "success", data });
});

app.post("/data/filteryear/end_year/:end_year", async (req, res) => {
  const { end_year } = req.params;
  const filter = end_year === "EndYear" ? {} : {end_year: end_year};
  const data = await Data.find({
    ...filter
  });
  res.json({ message: "success", data });
});

//API TO SAVE DATA TO DATABASE
// app.get("/save/data", async (req, res) => {
//     const savedData = await Data.insertMany(data);
//     res.json(savedData);
// })

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));

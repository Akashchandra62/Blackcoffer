import mongoose from "mongoose";

const data = new mongoose.Schema({
    "end_year": String,
    "intensity": Number,
    "sector": String,
    "topic": String,
    "insight": String,
    "url": String,
    "region": String,
    "start_year": String,
    "impact": String,
    "added": String,
    "published": String,
    "country": String,
    "relevance": Number,
    "pestle":String,
    "source": String,
    "title": String,
    "likelihood": Number
})

const Data = mongoose.model("Data", data);

export default Data;
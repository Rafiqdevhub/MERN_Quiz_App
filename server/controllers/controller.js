const Questions = require("../models/questionsModel.js");
const Results = require("../models/resultModel.js");
const { questions, answers } = require("../data/data.js");

const getQuestions = async (req, res) => {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
};

const insertQuestions = async (req, res) => {
  try {
    const data = await Questions.insertMany({ questions, answers });
    res.json({ msg: "Data Saved Successfully...!", data });
  } catch (error) {
    res.json({ error });
  }
};

const dropQuestions = async (req, res) => {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
};

const getResult = async (req, res) => {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
};

const storeResult = async (req, res) => {
  try {
    const { username, result, attempts, points, achived } = req.body;

    if (!username || !result) {
      throw new Error("Data Not Provided...!");
    }

    // Use async/await instead of callback
    await Results.create({ username, result, attempts, points, achived });

    res.json({ msg: "Result Saved Successfully...!" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const dropResult = async (req, res) => {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
};

module.exports = {
  getQuestions,
  insertQuestions,
  dropQuestions,
  getResult,
  storeResult,
  dropResult,
};

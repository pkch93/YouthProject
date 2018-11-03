const mongoose = require("mongoose");
const fs = require("fs");

const {PolicySchema, Policy} = require("models/data/policy");
const {EventsSchema, Events} = require("models/data/event");
const {InternSchema, Intern} = require("models/data/intern");
const {GovernSchema, Govern} = require("models/data/govern");

const policyURL = "policyData/policy.json";
const eventURL = "policyData/empEvent.json";
const governURL = "policyData/govern.json";
const internURL = "policyData/intern.json";

exports.initGetPolicy = async () => {
  const policies = getPolicies();
  await Policy.insertMany(policies);

  const events = getEvents();
  await Events.insertMany(events);

  const interns = getInterns();
  await Intern.insertMany(interns);

  const governs = getGoverns();
  await Govern.insertMany(governs);
};

const getPolicies = () => {
  const json = fs.readFileSync(policyURL).toString();
  const jsonObj = JSON.parse(json);
  return jsonObj.jynEmpSptList;
};

const getEvents = () => {
  const json = fs.readFileSync(eventURL).toString();
  const jsonObj = JSON.parse(json);
  return jsonObj.empEvent;
};

const getInterns = () => {
  const json = fs.readFileSync(internURL).toString();
  const jsonObj = JSON.parse(json);
  return jsonObj.internWantedList;
};

const getGoverns = () => {
  const json = fs.readFileSync(governURL).toString();
  const jsonObj = JSON.parse(json);
  return jsonObj.ilmoaJob;
};

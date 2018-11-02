const mongoose = require("mongoose");
const fs = require("fs");

const PolicySchema = require("models/data/policy");
const Policy = mongoose.model("Policy", PolicySchema);
const EventsSchema = require("models/data/event");
const Events = mongoose.model("Events", EventsSchema);
const InternSchema = require("models/data/intern");
const Intern = mongoose.model("Intern", InternSchema);
const GovernSchema = require("models/data/govern");
const Govern = mongoose.model("Govern", GovernSchema);


const policyURL = 'policyData/policy.json';
const eventURL = 'policyData/empEvent.json';
const governURL = 'policyData/govern.json';
const internURL = 'policyData/intern.json';

exports.initGetPolicy = () => {
    const policies = getPolicies();
    Policy.insertMany(policies);
    
    const events = getEvents();
    Events.insertMany(events);

    const interns = getInterns();
    Intern.insertMany(interns);
    
    const governs = getGoverns();
    Govern.insertMany(governs);
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

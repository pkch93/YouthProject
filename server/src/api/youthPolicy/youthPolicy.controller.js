const mongoose = require("mongoose");
const decycle = require("json-decycle").decycle;

const PolicySchema = require("models/data/policy");
const Policy = mongoose.model("Policy", PolicySchema);
const EventsSchema = require("models/data/event");
const Events = mongoose.model("Events", EventsSchema);
const InternSchema = require("models/data/intern");
const Intern = mongoose.model("Intern", InternSchema);
const GovernSchema = require("models/data/govern");
const Govern = mongoose.model("Govern", GovernSchema);

exports.getPolicies = async ctx => {
    const {category} = ctx.params;
    if(category === "policy"){
        const policies = JSON.stringify(Policy.find(), decycle());
        ctx.body = policies;
    } else if (category === "event") {
        const events = JSON.stringify(Events.find(), decycle());
        ctx.body = events;
    } else if (category === "govern"){
        const governs = JSON.stringify(Govern.find(), decycle());
        ctx.body = governs;
    } else if (category === "intern"){
        const interns = JSON.stringify(Intern.find(), decycle());
        ctx.body = interns;
    } else {
        const policies = JSON.stringify(Policy.find(), decycle());
        const events = JSON.stringify(Events.find(), decycle());
        const interns = JSON.stringify(Intern.find(), decycle());
        const governs = JSON.stringify(Govern.find(), decycle());
        ctx.body = {policies, events, interns, governs};
    }
};
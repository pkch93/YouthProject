const mongoose = require("mongoose");
const PolicySchema = require("models/data/policy");
const Policy = mongoose.model("Policy", PolicySchema);
const EventsSchema = require("models/data/event");
const Events = mongoose.model("Events", EventsSchema);
const InternSchema = require("models/data/intern");
const Intern = mongoose.model("Intern", InternSchema);
const GovernSchema = require("models/data/govern");
const Govern = mongoose.model("Govern", GovernSchema);

exports.getPolicies = async ctx => {
    const {category} = ctx.request.body;
    if(category === "policy"){
        const policies = Policy.find();
        ctx.body = policies;
    } else if (category === "event") {
        const events = Events.find();
        ctx.body = events;
    } else if (category === "govern"){
        const governs = Govern.find();
        ctx.body = governs;
    } else if (category === "intern"){
        const interns = Intern.find();
        ctx.body = interns;
    } else {
        const policies = Policy.find();
        const events = Events.find();
        const interns = Intern.find();
        const governs = Govern.find();
        ctx.body = {policies, events, interns, governs};
    }
};
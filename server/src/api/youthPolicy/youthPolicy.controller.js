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
    const {category} = ctx.params;
    if(category === "policy"){
        const polices = await Policy.find({});
        ctx.body = polices;
    } else if (category === "event") {
        const events = await Events.find();
        ctx.body = events;
    } else if (category === "govern") {
        const governs = await Govern.find();
        ctx.body = governs;
    } else if (category === "intern"){
        const interns = await Intern.find();
        ctx.body = interns;
    } else {
        const policies = await Policy.find();
        const events = await Events.find();
        const interns = await Intern.find();
        const governs = await Govern.find();
        ctx.body = {policies, events, interns, governs};
    }
};
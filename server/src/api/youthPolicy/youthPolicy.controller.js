const Policy = require("models/data/policy");
const Events = require("models/data/event");
const Intern = require("models/data/intern");
const Govern = require("models/data/govern");

exports.getPolicies = async ctx => {
    const policies, events, interns, governs;
    const {category} = ctx.request.body;
    if(category === "policy"){
        policies = Policy.find();
        ctx.body = policies;
    } else if (category === "event") {
        events = Events.find();
        ctx.body = events;
    } else if (category === "govern"){
        governs = Govern.find();
        ctx.body = governs;
    } else if (category === "intern"){
        interns = Intern.find();
        ctx.body = interns;
    } else {
        policies = Policy.find();
        events = Events.find();
        interns = Intern.find();
        governs = Govern.find();
        ctx.body = {policies, events, interns, governs};
    }
};
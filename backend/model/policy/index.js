const mongoose = require('mongoose');

const { Schema } = mongoose;

const EventSchema = new Schema({
    areaCd: String,
    area: String,
    eventNo: String,
    eventNm: String,
    eventTerm: String,
    startDt: String
}); // 채용행사 API, 1

const GovernJobSchema = new Schema({
    rn: String,
    rcritPblancId: String,
    bsnsNm: String,
    instTyCodeNm: String,
    manageInsttNm: String,
    executeInsttNm: String,
    rcritPblancNm: String,
    wageSeCodeNm: String,
    wageAmount: String,
    workAreaCodeNm: String,
    registDt: String,
    rcritBeginDe: String,
    rcritEndDe: String
}); // 정부지원일자리 API, 2

const YouthInternSchema = new Schema({
    wantedAuthNo: String,
    companyNm: String,
    collectJobsNm: String,
    regionNm: String,
    minEdubg: String,
    maxEdubg: String,
    collectPsncnt: String,
    selPsncnt: String,
    applyDt: String,
    detailUrl: String
}); // 청년인턴 API, 3

const YouthPolicySchema = new Schema({
    busiId: String,
    busiNm: String,
    dtlBusiNm: String,
    busiSum: String,
    chargerOrgNm: String,
    onlineApplPossYn: String,
    applUrl: String,
    detalUrl: String,
    ageEtcCont: String,
    edubgEtcCont: String,
    empEtcCont: String,
    relInfoUrl: String,
    chargerClcd: String
}); // 청년정책 API, 4

const PolicySchema = new Schema({
    category: {
        type: Number,
        required: true
    },
    details: [EventSchema|GovernJobSchema|
        YouthInternSchema|YouthPolicySchema]
});

module.exports = mongoose.model('policy', PolicySchema);
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost/',
    withCredentials: true,
})

export const assessmentAPI = {
    getTreeData(assessment_id) {
        return instance.get(`/custom/assessment_aup/build/getTreeData.html?assessment_id=`+assessment_id);
        //return instance.get(`%PUBLIC_URL%/getPas.html`);
    },
    getPaData(pa_id) {
        return instance.get(`/custom/assessment_aup/build/getPaData.html?pa_id=`+pa_id);
    },
    //sendAnswer(answer) {
        //console.log(answer);
        //return instance.post(`assessment_appraise_data.xml?format=json&assessment_appraise_id=7249262218166845460`,{status: answer});
        //return instance.put(`profile/status/`,{status: answer});
    //    return instance.post(`/custom/suekassessment/build/postPa.html`,{ data: answer });
    //}
};
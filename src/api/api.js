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
    sendCompetence(message) {
        return instance.post(`/custom/assessment_aup/build/postPaData.html`,{ data: message });
    }
};
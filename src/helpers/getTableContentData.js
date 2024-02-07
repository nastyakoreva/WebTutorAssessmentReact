export const getCompetenceAppraisal=(plan, plan_pas,competence_scales,indicator_scales,question_scales)=>{
    debugger
    let selfPlan_pas = plan_pas.filter(pa=>pa.status === 'self')
    let bossPlan_pas = plan_pas.filter(pa=>pa.status === 'experts' && pa.expert_person_id === plan.boss_id)

    let selfCompetence_appraisalArray = selfPlan_pas.filter(el=>el.assessment_appraise_type === 'competence_appraisal')
    let selfResult = [];

    
   selfCompetence_appraisalArray.forEach(item =>{
    selfResult = [...selfResult, ...item.competences.competence]
   })
        
        // if(item.indicators.indicator.length>0){
        //     debugger
        //     let criterion= indicator_scales.find(i=>i.id === item.indicators.indicator[0].indicator_id)
        //     return {
        //         "criterion":criterion?criterion.competence_name:"item.competence_id",
        //         "score":item.mark_value,
        //         "comment":item.comment,
        //         "bossScore":null,
        //         "bossComment":null}
        // }
        // let criterion= competence_scales.find(c=>c.id === item.competence_id)
        // return {
        //     "criterion":criterion?criterion.name:"item.competence_id",
        //     "score":item.mark_value,
        //     "comment":item.comment,
        //     "bossScore":null,
        //     "bossComment":null}
     
}

    
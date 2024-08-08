import hundredRunMascView from '../view/hundredRunMascView.js'
import hundredRunMascService from '../service/hundredRunMascService.js'

export async function init(){
    const athletes = await hundredRunMascService.getAthletes();
    
    hundredRunMascView.render(athletes);

}
import hundredRunFemView from '../view/hundredRunFemView.js'
import hundredRunFemService from '../service/hundredRunFemService.js'

export async function init(){
    const athletes = await hundredRunFemService.getAthletes();
    
    hundredRunFemView.render(athletes);

}
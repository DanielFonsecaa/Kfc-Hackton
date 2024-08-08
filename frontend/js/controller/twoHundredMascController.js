import twoHundredRunMascView from '../view/twoHundredRunMascView.js'
import twoHundredRunMascService from '../service/twoHundredRunMascService.js'

export async function init(){
    const athletes = await twoHundredRunMascService.getAthletes();
    
    twoHundredRunMascView.render(athletes);

}
import twoHundredRunFemView from '../view/twoHundredRunFemView.js'
import twoHundredRunFemService from '../service/twoHundredRunFemService.js'

export async function init(){
    const athletes = await twoHundredRunFemService.getAthletes();
    
    twoHundredRunFemView.render(athletes);

}
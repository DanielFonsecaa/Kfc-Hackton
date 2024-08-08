import twoHundredSwimFemView from '../view/twoHundredSwimFemView.js'
import twoHundredSwimFemService from '../service/twoHundredSwimFemService.js'

export async function init(){
    const athletes = await twoHundredSwimFemService.getAthletes();
    
    twoHundredSwimFemView.render(athletes);

}
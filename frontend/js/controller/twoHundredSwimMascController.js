import twoHundredSwimMascView from '../view/twoHundredSwimMascView.js'
import twoHundredSwimMascService from '../service/twoHundredswimMascService.js'

export async function init(){
    const athletes = await twoHundredSwimMascService.getAthletes();
    
    twoHundredSwimMascView.render(athletes);

}
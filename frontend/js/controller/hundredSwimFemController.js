import hundredSwimFemView from '../view/hundredSwimFemView.js'
import hundredSwimFemService from '../service/hundredSwimFemService.js'

export async function init(){
    const athletes = await hundredSwimFemService.getAthletes();
    
    hundredSwimFemView.render(athletes);

}
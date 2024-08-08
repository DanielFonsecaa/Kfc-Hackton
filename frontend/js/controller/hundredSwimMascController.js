import hundredSwimMascView from '../view/hundredSwimMascView.js'
import hundredSwimMascService from '../service/hundredSwimMascService.js'

export async function init(){
    const athletes = await hundredSwimMascService.getAthletes();
    
    hundredSwimMascView.render(athletes);

}
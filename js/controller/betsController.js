import betsService from '../service/betsService.js';
import betsView from '../view/betsView.js';

export async function init() {
    const bets = await betsService.getSports();
    betsView.render(bets);
}

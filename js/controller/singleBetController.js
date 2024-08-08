import betsService from '../service/betsService.js';
import betsView from '../view/singleBetView.js';
import { singleId } from '../view/betsView.js';

export async function init() {
    const bet = await betsService.getSport(singleId -1);
    betsView.render(bet);
}

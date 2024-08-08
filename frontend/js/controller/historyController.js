import historyService from '../service/historyService.js';
import historyView from '../view/historyView.js';

export async function init() {
    const history = await historyService.getHistory();
    historyView.render(history);
}

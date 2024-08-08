import historyService from '../service/historyService';
import historyView from '../view/historyView';

export async function init() {
    const history = await historyService.getHistory();
    historyView.render(history);
}

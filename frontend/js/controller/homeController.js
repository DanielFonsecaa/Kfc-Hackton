import homeView from '../view/homeView.js';
//import something 

export async function init() {
    try {
      homeView.render();
    } catch (error) {
      console.error('Error fetching character:', error);
    }
  }
import {submitTask, loadTasks} from './todo-items.js'
import {makeNavbar} from './header.js'
import {makePile, makeTodayPile, makeTitle, makeToday} from './todo-pile.js'
import {makeSidebar, grid} from './sidebar.js'
import toggleModal from './modal.js'

makeNavbar();
makeTitle();
makeToday();
makePile();
makeTodayPile();
makeSidebar();
toggleModal();
loadTasks();
submitTask();


//(function goInbox () {
//    document.getElementById('project0').addEventListener('click', () => {
//        if (grid
//            .contains(document.getElementById('today'))) {
//                grid
//                .removeChild(document.getElementById('today'));
//                makeTitle();
//            };
//        });
//})();
//
//(function goToday () {
//    document.getElementById('project1').addEventListener('click', () => {
//        if (grid.contains(document.getElementById('title'))) {
//                grid.removeChild(document.getElementById('title'));
//                makeToday();
//            };
//    });
//})();


(function goInbox () {
    document.getElementById('project0').addEventListener('click', () => {
        if (title.style.display = 'none') {
            today.style.display = 'none';
            title.style.display = 'block';
        };
    });
})();

(function goToday () {
    document.getElementById('project1').addEventListener('click', () => {
        if (today.style.display = 'none') {
            title.style.display = 'none';
            today.style.display = 'block';
        };
    });
})();
import {submitTask, loadTasks} from './todo-items.js'
import {makeNavbar} from './header.js'
import {makeSidebar, grid, showAllProjects, makeProjectList, addProject} from './sidebar.js'
import toggleModal from './modal.js'
import { makeList } from './make-items.js'

makeNavbar();
makeList({id: 'inbox', text: 'Inbox'});
document.getElementById('inbox').style.display = 'block';
makeList({id: 'today', text: 'Today'});
makeSidebar();
showAllProjects();
makeProjectList();
addProject();
toggleModal();
loadTasks();
submitTask();

(function goInbox () {
    document.getElementById('project0').addEventListener('click', () => {
        if (document.getElementById('inbox').style.display = 'none') {
            document.getElementById('today').style.display = 'none';
            document.getElementById('inbox').style.display = 'block';
        };
    });
})();

(function goToday () {
    document.getElementById('project1').addEventListener('click', () => {
        if (document.getElementById('today').style.display = 'none') {
            document.getElementById('inbox').style.display = 'none';
            document.getElementById('today').style.display = 'block';
        };
    });
})();

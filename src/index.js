import {loadTasks, showTodo} from './todo-items.js'
import {makeNavbar} from './header.js'
import {makeSidebar, showAllProjects, makeProjectList, addProject} from './sidebar.js'
import {toggleModal} from './modal.js'
import { makeList } from './make-items.js'

makeNavbar();
makeList({id: 'inbox', text: 'Inbox'});
document.getElementById('inbox').style.display = 'block';
document.getElementById('inboxList').style.display = 'block';
makeList({id: 'today', text: 'Today'});
makeSidebar();
showAllProjects();
makeProjectList();
addProject();
toggleModal();

(function submitTodo () {
    let plusButton = document.querySelectorAll('.fa-plus')
        plusButton.forEach(element => {
        element.addEventListener('click', loadTasks, {once: true});
        element.addEventListener('click', showTodo, {once: true});
        });
})();

(function goInbox () {
    document.getElementById('project0').addEventListener('click', () => {
        if (document.getElementById('inbox').style.display = 'none') {
            document.getElementById('today').style.display = 'none';
            document.getElementById('inbox').style.display = 'block';

            let allCustom = document.querySelectorAll(`h2[id^="customProject"]`)
            allCustom.forEach(element => {
                element.style.display = 'none';
            });

            let allCustomLists = document.querySelectorAll(`ul[class^="list"]`)
            allCustomLists.forEach(element => {
                element.style.display = 'none';
            });

            document.getElementById('inboxList').style.display = 'block';
        };
    });
})();

(function goToday () {
    document.getElementById('project1').addEventListener('click', () => {
        if (document.getElementById('today').style.display = 'none') {
            document.getElementById('inbox').style.display = 'none';
            document.getElementById('today').style.display = 'block';

            let allCustom = document.querySelectorAll(`h2[id^="customProject"]`)
            allCustom.forEach(element => {
                element.style.display = 'none';
            });

            let allCustomLists = document.querySelectorAll(`ul[class^="list"]`)
            allCustomLists.forEach(element => {
                element.style.display = 'none';
            });

            document.getElementById('todayList').style.display = 'block';
        };
    });
})();



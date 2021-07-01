import {submitTask, loadTasks} from './todo-items.js'
import {makeNavbar} from './header.js'
import {makePile, makeTitle} from './todo-pile.js'
import {makeSidebar} from './sidebar.js'
import toggleModal from './modal.js'

makeNavbar();
makeTitle();
makePile();
makeSidebar();
toggleModal();
loadTasks();
submitTask();

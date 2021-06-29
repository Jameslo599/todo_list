import { formatDistance, subDays } from 'date-fns'
import {submitTask, loadTasks} from './todo-items.js'
import {makeNavbar} from './header.js'
import {makePile, makeTitle} from './todo-pile.js'
import {makeSidebar} from './sidebar.js'
import {addTask, toggleModal} from './modal.js'

makeNavbar();
makeTitle();
makePile();
makeSidebar();
toggleModal();
addTask();
loadTasks();
submitTask();

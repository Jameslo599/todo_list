import { showTodo } from "./todo-items";
import { makeNavbar } from "./header";
import {
  makeSidebar,
  showAllProjects,
  makeProjectList,
  addProject,
} from "./sidebar";
import { makeModal } from "./modal";


(function createSidebar() {
  makeNavbar();
  makeSidebar();
  makeProjectList();
  showAllProjects();
  addProject();
  makeModal();
  showTodo();
})();

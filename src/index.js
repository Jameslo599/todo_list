import { showTodo, showSavedTodo } from "./todo-items";
import { makeNavbar } from "./header";
import {
  makeSidebar,
  showAllProjects,
  makeProjectList,
  addProject,
  showSavedProjects,
} from "./sidebar";
import { makeModal } from "./modal";

(function createSidebar() {
  makeNavbar();
  makeSidebar();
  makeProjectList();
  showAllProjects();
  addProject();
  makeModal();
  showSavedProjects();
  showSavedTodo();
  showTodo();
})();

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
import makeCopyright from "./copyrightbar";

// Generates complete application!
(function createSidebar() {
  makeNavbar();
  makeSidebar();
  makeProjectList();
  showAllProjects();
  makeCopyright();
  addProject();
  makeModal();
  showSavedProjects();
  showSavedTodo();
  showTodo();
})();

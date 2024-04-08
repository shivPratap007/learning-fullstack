import { atom } from "recoil";
import { selector } from "recoil";

export const todos = atom({
  key: "todos",
  default: [
    { title: "work" },
    { title: "running" },
    { title: "eat" },
    { title: "sleep" },
  ],
});

export const searchTodo = atom({
  key: "searchTodo",
  default: "",
});



export const filterTodo = selector({
  key: "filterTodo",
  get: ({ get }) => {
    const todoList = get(todos);
    const searchValue = get(searchTodo);
    if (!searchValue) {
      return todoList;
    } else {
      return todoList.filter((todo) =>
        todo.title.toLowerCase().includes(searchValue)
      );
    }
  },
});





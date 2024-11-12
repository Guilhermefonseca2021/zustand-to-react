import { create } from 'zustand';

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

type TodoState = {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
};

const useTodoStore = create<TodoState>((set) => ({
    todos: [],
    addTodo: (text: string) =>
        set((state) => ({
            todos: [
                ...state.todos,
                { id: Date.now(), text, completed: false }, 
            ],
        })),
    removeTodo: (id: number) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
    toggleTodo: (id: number) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        })),
}));

export default useTodoStore;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteTodo, fetchTodo, saveTodo, update } from "./todoService";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        allTodos: [],
        isLoding: false,
        isSuccess: false,
        isError: false,
        edit: {
            todo: {},
            isEdit: false
        }
    },
    reducers: {

        remove: (state, action) => {
            return {
                ...state,
                allTodos: state.allTodos.filter(item => item._id !== action.payload)
            }

        },


        edit: (state, action) => {
            return {
                ...state,
                edit: { todo: action.payload, isEdit: true }
            }
        }


    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodo.pending, (state, action) => {
                state.isLoding = true;
                state.isSuccess = false;
                state.isError = false;
            }).addCase(getTodo.fulfilled, (state, action) => {
                state.isLoding = false;
                state.isSuccess = true;
                state.isError = false;
                state.allTodos = action.payload;
            }).addCase(getTodo.rejected, (state, action) => {
                state.isLoding = false;
                state.isSuccess = false;
                state.isError = true;
            }).addCase(removeTodo.pending, (state, action) => {
                state.isLoding = true;
                state.isSuccess = false;
                state.isError = false;
            }).addCase(removeTodo.fulfilled, (state, action) => {
                state.isLoding = false;
                state.isSuccess = true;
                state.isError = false;
            }).addCase(removeTodo.rejected, (state, action) => {
                state.isLoding = false;
                state.isSuccess = false;
                state.isError = true;
            }).addCase(addTodo.pending, (state, action) => {
                state.isLoding = true;
                state.isSuccess = false;
                state.isError = false;
            }).addCase(addTodo.fulfilled, (state, action) => {
                state.isLoding = false;
                state.isSuccess = true;
                state.isError = false;
                state.allTodos = [action.payload, ...state.allTodos];
            }).addCase(addTodo.rejected, (state, action) => {
                state.isLoding = false;
                state.isSuccess = false;
                state.isError = true;
            }).addCase(updateTodo.pending, (state, action) => {
                state.isLoding = true;
                state.isSuccess = false;
                state.isError = false;
            }).addCase(updateTodo.fulfilled, (state, action) => {
                state.isLoding = false;
                state.isSuccess = true;
                state.isError = false;
                state.allTodos = state.allTodos.map((item) => 
                item.id === action.payload.id ? action.payload : item
                );
                state.edit={todo: {}, isEdit : false}
            }).addCase(updateTodo.rejected, (state, action) => {
                state.isLoding = false;
                state.isSuccess = false;
                state.isError = true;
            })
    }
})

export const { allTodos, remove, edit } = todoSlice.actions;
export default todoSlice.reducer;



export const getTodo = createAsyncThunk("FETCH/TODO", async () => {
    try {
        return await fetchTodo();
    } catch (error) {
        console.log(error)
    }
})


export const removeTodo = createAsyncThunk("DELETE/TODO", async (id) => {
    try {
        return await deleteTodo(id);
    } catch (error) {
        console.log(error)
    }
})


export const addTodo = createAsyncThunk("ADD/TODO", async (formData) => {
    try {
        return await saveTodo(formData);
    } catch (error) {
        console.log(error)
    }
})


export const updateTodo = createAsyncThunk("UPDATE/TODO", async (formData) => {
    try {
        return await update(formData);
    } catch (error) {
        console.log(error)
    }
})

import { query, mutation } from './_generated/server';
import { ConvexError, v } from "convex/values"




export const getTodos = query({

    handler: async (ctx) => {
        const todos = await ctx.db.query("todos").order("desc").collect()
        return todos
    }
})

export const addTodo = mutation({
    args: { text: v.string() },
    handler: async (ctx, args) => {
        const todoId = await ctx.db.insert("todos", {
            text: args.text,
            isCompleted: false,
        })
        return todoId
    }
})


export const togleTodo = mutation({
    args: { id: v.id("todos") },
    handler: async (ctx, args) => {
        const todo = await ctx.db.get(args.id)
        if (!todo) throw new ConvexError("Todo npt found")

        await ctx.db.patch(args.id, {
            isCompleted: !todo.isCompleted
        })

    }
})
export const deletTodo = mutation({
    args: { id: v.id("todos") },
    handler: async (ctx, args) => {

        await ctx.db.delete(args.id)
    }

})
export const updateTodo = mutation({
    args: {
        id: v.id("todos"),
        text: v.string()
    },
    handler: async (ctx, args) => {

        await ctx.db.patch(args.id, {
            text: args.text,
        })
    }

})
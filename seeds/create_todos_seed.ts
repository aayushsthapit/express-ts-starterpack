import * as Knex from "knex";

/**
 * Create the seed for table "todos".
 *
 * @param {Knex} knex
 */
export async function seed(knex: Knex): Promise<void> {
    // Truncates all existing records of todos.
    await knex.raw(`TRUNCATE TABLE todos RESTART IDENTITY;`)

    // Inserts seed entries
    await knex("todos").insert([
        { title: "Do laundry", status: "PENDING" },
        { title: "Do Something else", status: "PENDING" }
    ]);
};

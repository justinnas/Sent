import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	await knex('posts').del();
	await knex('users').del();
}

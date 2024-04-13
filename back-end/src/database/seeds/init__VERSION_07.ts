import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	await knex('saves').insert([
		{ user_id: '2b2ac63c-e93f-11ee-9af8-0242ac120002', post_id: 1 },
		{ user_id: '2b2ac63c-e93f-11ee-9af8-0242ac120002', post_id: 2 },
		{ user_id: '2b2ac63c-e93f-11ee-9af8-0242ac120002', post_id: 3 },
		{ user_id: '2b2ac63c-e93f-11ee-9af8-0242ac120002', post_id: 6 },
		{ user_id: '2b2ac63c-e93f-11ee-9af8-0242ac120002', post_id: 7 },
		{ user_id: '2b2ad3ed-e93f-11ee-9af8-0242ac120002', post_id: 4 },
		{ user_id: '2b2ad3ed-e93f-11ee-9af8-0242ac120002', post_id: 5 },
		{ user_id: '2b2ad3ed-e93f-11ee-9af8-0242ac120002', post_id: 6 },
		{ user_id: '2b2ad3ed-e93f-11ee-9af8-0242ac120002', post_id: 2 },
		{ user_id: '2b2ad3ed-e93f-11ee-9af8-0242ac120002', post_id: 3 },
		{ user_id: '2b2ad3ed-e93f-11ee-9af8-0242ac120002', post_id: 7 },
		{ user_id: '3sd3c63c-e93f-11ee-9af8-0242ac120002', post_id: 8 },
		{ user_id: '3sd3c63c-e93f-11ee-9af8-0242ac120002', post_id: 7 },
		{ user_id: '3sd3c63c-e93f-11ee-9af8-0242ac120002', post_id: 9 },
		{ user_id: '3sd3c63c-e93f-11ee-9af8-0242ac120002', post_id: 4 },
		{ user_id: '3sd3c63c-e93f-11ee-9af8-0242ac120002', post_id: 3 },
		{ user_id: 'l99fd3ed-e93f-11ee-9af8-0242ac120002', post_id: 10 },
		{ user_id: 'l99fd3ed-e93f-11ee-9af8-0242ac120002', post_id: 2 },
		{ user_id: 'l99fd3ed-e93f-11ee-9af8-0242ac120002', post_id: 3 },
		{ user_id: 'l99fd3ed-e93f-11ee-9af8-0242ac120002', post_id: 5 },
	]);
}

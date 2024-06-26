import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	await knex('saves').insert([
		{ user_id: '2b2ac63c-e93f-11ee-9af8-0242ac120002', post_id: 1 },
		{ user_id: '2b2ad3ed-e93f-11ee-9af8-0242ac120002', post_id: 1 },
		{ user_id: '3sd3c63c-e93f-11ee-9af8-0242ac120002', post_id: 1 },
		{ user_id: '404fd3m6-e93f-11ee-9af8-0242ac120002', post_id: 1 },
		{ user_id: '4k0073m6-e93f-11ee-9af8-0242ac120002', post_id: 1 },
		{ user_id: '4k06d3m6-e93f-11ee-9af8-0242ac120002', post_id: 1 },
		{ user_id: '4k0f08m6-e93f-11ee-9af8-0242ac120002', post_id: 1 },
		{ user_id: '4k0f09m6-e93f-11ee-9af8-0242ac120002', post_id: 1 },
		{ user_id: '4k0f10m6-e93f-11ee-9af8-0242ac120002', post_id: 1 },
		{ user_id: '4k0fd056-e93f-11ee-9af8-0242ac120002', post_id: 1 },
		{ user_id: '4k0fd3m6-e93f-11ee-9af8-0242ac120002', post_id: 1 },
		{ user_id: '4k0ffgr2-e93f-11ee-9af8-0242ac120002', post_id: 1 },
		{ user_id: 'l99fd3ed-e93f-11ee-9af8-0242ac120002', post_id: 1 },
		{ user_id: '3sd3c63c-e93f-11ee-9af8-0242ac120002', post_id: 2 },
		{ user_id: 'l99fd3ed-e93f-11ee-9af8-0242ac120002', post_id: 2 },
		{ user_id: '3sd3c63c-e93f-11ee-9af8-0242ac120002', post_id: 3 },
		{ user_id: '3sd3c63c-e93f-11ee-9af8-0242ac120002', post_id: 4 },
		{ user_id: 'l99fd3ed-e93f-11ee-9af8-0242ac120002', post_id: 5 },
		{ user_id: 'l99fd3ed-e93f-11ee-9af8-0242ac120002', post_id: 6 },
		{ user_id: 'l99fd3ed-e93f-11ee-9af8-0242ac120002', post_id: 7 },
		{ user_id: '2b2ac63c-e93f-11ee-9af8-0242ac120002', post_id: 11 },
		{ user_id: '2b2ad3ed-e93f-11ee-9af8-0242ac120002', post_id: 11 },
		{ user_id: '3sd3c63c-e93f-11ee-9af8-0242ac120002', post_id: 11 },
		{ user_id: '404fd3m6-e93f-11ee-9af8-0242ac120002', post_id: 11 },
		{ user_id: '4k0073m6-e93f-11ee-9af8-0242ac120002', post_id: 11 },
		{ user_id: '4k06d3m6-e93f-11ee-9af8-0242ac120002', post_id: 11 },
		{ user_id: '4k0f08m6-e93f-11ee-9af8-0242ac120002', post_id: 11 },
		{ user_id: '4k0f09m6-e93f-11ee-9af8-0242ac120002', post_id: 11 },
		{ user_id: '4k0f10m6-e93f-11ee-9af8-0242ac120002', post_id: 11 },
		{ user_id: '4k0fd056-e93f-11ee-9af8-0242ac120002', post_id: 11 },
		{ user_id: '4k0fd3m6-e93f-11ee-9af8-0242ac120002', post_id: 11 },
		{ user_id: '4k0ffgr2-e93f-11ee-9af8-0242ac120002', post_id: 11 },
		{ user_id: 'l99fd3ed-e93f-11ee-9af8-0242ac120002', post_id: 11 },
		{ user_id: '2b2ac63c-e93f-11ee-9af8-0242ac120002', post_id: 9 },
		{ user_id: '2b2ad3ed-e93f-11ee-9af8-0242ac120002', post_id: 9 },
		{ user_id: '3sd3c63c-e93f-11ee-9af8-0242ac120002', post_id: 9 },
		{ user_id: '404fd3m6-e93f-11ee-9af8-0242ac120002', post_id: 9 },
		{ user_id: '4k0073m6-e93f-11ee-9af8-0242ac120002', post_id: 9 },
		{ user_id: '4k06d3m6-e93f-11ee-9af8-0242ac120002', post_id: 9 },
		{ user_id: '4k0f08m6-e93f-11ee-9af8-0242ac120002', post_id: 9 },
		{ user_id: '4k0f09m6-e93f-11ee-9af8-0242ac120002', post_id: 8 },
		{ user_id: '4k0f10m6-e93f-11ee-9af8-0242ac120002', post_id: 8 },
		{ user_id: '4k0fd056-e93f-11ee-9af8-0242ac120002', post_id: 8 },
		{ user_id: '4k0fd3m6-e93f-11ee-9af8-0242ac120002', post_id: 8 },
		{ user_id: '4k0ffgr2-e93f-11ee-9af8-0242ac120002', post_id: 8 },
		{ user_id: 'l99fd3ed-e93f-11ee-9af8-0242ac120002', post_id: 8 },
	]);
}

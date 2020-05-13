begin;

-- UNCOMMENT THESE LINES TO RESET THIS DB
-- **************************************

set schema 'youcoach';
drop table if exists secured_users, users cascade;
drop schema youcoach;

-- END UNCOMMENT
-- ***************************************

create schema if not exists youcoach;

set schema 'youcoach';

create table if not exists secured_users(
	su_id uuid primary key DEFAULT uuid_generate_v4 (),
	username varchar(50),
	password varchar,
	coach boolean
);

create table if not exists users(
	u_id uuid primary key,
	firstname varchar(50),
	lastname varchar(50),
	email varchar(50),
	secured_id bigint,
	foreign key (secured_id) references secured_users(su_id)
);

--- insert some secured users for login
insert into secured_users values (1,'student','$2y$12$ZSWZWelm2qwDkpclH4/FR.EgTg4H297cvNFI0Li61//H4c7nT6Vva',0);
insert into secured_users values (2,'coach','$2y$12$LGjbl1dKNu2vLz5ZwrLOkO5nOg2VzXmvp0asq89isoZ6CChDuqXG6',2);

---rollback;

commit;

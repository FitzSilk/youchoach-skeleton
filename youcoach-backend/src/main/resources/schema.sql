begin;

create schema if not exists youcoach;

set schema 'youcoach';

create table if not exists secured_users(
	id bigint primary key,
	username varchar(50),
	password varchar,
	coach boolean
);

create table if not exists users(
	id uuid primary key,
	firstname varchar(50),
	lastName varchar(50),
	email varchar(50),
	secured_id bigint,
	foreign key (secured_id) references secured_users(id)
);

---rollback;
commit;

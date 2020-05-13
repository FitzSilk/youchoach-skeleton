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
                                            role varchar(15)
);

create table if not exists users(
                                    u_id uuid primary key,
                                    firstname varchar(50),
                                    lastname varchar(50),
                                    email varchar(50),
                                    secured_id uuid,
                                    foreign key (secured_id) references secured_users(su_id)
);

create table if not exists profiles(
p_id uuid primary key,
user_id uuid,
photo varchar,
foreign key (user_id) references users(u_id)
);
--- insert some secured users for login
insert into secured_users values ('411fd4fc-c770-4cab-821b-85d2cb2c048e','student','$2y$12$ZSWZWelm2qwDkpclH4/FR.EgTg4H297cvNFI0Li61//H4c7nT6Vva','coachee');
insert into secured_users values ('1045ae57-57f9-41f0-b1c9-c4018200f456','coach','$2y$12$LGjbl1dKNu2vLz5ZwrLOkO5nOg2VzXmvp0asq89isoZ6CChDuqXG6','coach');

--- new requirements on 13/05
insert into secured_users (username, password, role) values ('coachee1@school.org','YouC0ach', 'coachee');
insert into secured_users (username, password, role) values ('coachee2@school.org','YouC0ach', 'coachee');
insert into secured_users (username, password, role) values ('coach1@school.org','YouC0ach', 'coach');
insert into secured_users (username, password, role) values ('coach2@school.org','YouC0ach', 'coach');
insert into secured_users (username, password, role) values ('admin1@school.org','YouC0ach', 'admin');
insert into secured_users (username, password, role) values ('admin2@school.org','YouC0ach', 'admin');

--rollback;

commit;

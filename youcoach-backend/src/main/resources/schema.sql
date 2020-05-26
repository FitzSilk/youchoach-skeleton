begin;

-- UNCOMMENT THESE LINES TO RESET THIS DB
-- **************************************

-- set schema 'youcoach';
-- drop table if exists secured_users, users, coaches, sessions cascade;
-- drop schema youcoach;

-- END UNCOMMENT
-- ***************************************

create schema if not exists youcoach;

set schema 'youcoach';

create table if not exists secured_users
(
    su_id    uuid primary key DEFAULT uuid_generate_v4(),
    username varchar(50),
    password varchar,
    role     varchar(15)
);

create table if not exists users
(
    u_id       uuid primary key,
    firstname  varchar(50),
    lastname   varchar(50),
    email      varchar(50),
    secured_id uuid,
    photo      varchar,
    coach_id    uuid,
    foreign key (secured_id) references secured_users (su_id)
);

CREATE TABLE if not exists coaches
(
    c_id uuid primary key ,
    informations varchar,
    availability varchar,
    first_topic varchar (50) DEFAULT NULL,
    first_topic_classes varchar (20) DEFAULT NULL,
    second_topic varchar (50) DEFAULT NULL,
    second_topic_classes varchar (20) DEFAULT NULL
);

CREATE TABLE if not exists sessions
(
    session_id uuid NOT NULL primary key,
    subject varchar NOT NULL,
    date timestamp NOT NULL,
    remarks varchar,
    location varchar NOT NULL,
    coachee_id uuid NOT NULL,
    coach_id uuid NOT NULL,
    FOREIGN KEY (coach_id)
        REFERENCES users (u_id),
    FOREIGN KEY (coachee_id)
        REFERENCES users (u_id)
);

--- insert some secured users for login
insert into secured_users
values ('411fd4fc-c770-4cab-821b-85d2cb2c048e', 'student',
        '$2y$12$ZSWZWelm2qwDkpclH4/FR.EgTg4H297cvNFI0Li61//H4c7nT6Vva', 'COACHEE');
insert into secured_users
values ('1045ae57-57f9-41f0-b1c9-c4018200f456', 'coach', '$2y$12$LGjbl1dKNu2vLz5ZwrLOkO5nOg2VzXmvp0asq89isoZ6CChDuqXG6',
        'COACH');
--- new requirements on 13/05 - some default secured users used by the client for live testing - DO NOT REMOVE
insert into secured_users        -- password : YouC0ach
values ('09a30794-747e-4fb3-ba14-e8be3b40b122','coachee1@school.org', '$2a$10$zM3YP185kIzV/jOMUNFy8ec5q2/Q42Rp1wCvoo.GIY1oG.gD.rldG', 'COACHEE');
insert into secured_users
values ('616c769f-c4e5-4134-a650-537902ff068a','coachee2@school.org', '$2a$10$zM3YP185kIzV/jOMUNFy8ec5q2/Q42Rp1wCvoo.GIY1oG.gD.rldG', 'COACHEE');
insert into secured_users
values ('db5bca96-6fe0-4ce9-aa41-0134d0abee1f','coach1@school.org', '$2a$10$zM3YP185kIzV/jOMUNFy8ec5q2/Q42Rp1wCvoo.GIY1oG.gD.rldG', 'COACH');
insert into secured_users
values ('cf5e9d2c-365f-49b8-9a40-1f53ec233191','coach2@school.org', '$2a$10$zM3YP185kIzV/jOMUNFy8ec5q2/Q42Rp1wCvoo.GIY1oG.gD.rldG', 'COACH');
insert into secured_users
values ('6ae9d131-0d8f-46f6-9c51-f55f76662937','admin1@school.org', '$2a$10$zM3YP185kIzV/jOMUNFy8ec5q2/Q42Rp1wCvoo.GIY1oG.gD.rldG', 'ADMIN');
insert into secured_users
values ('c4dd2426-eafd-4d60-9827-265f627759cf', 'admin2@school.org', '$2a$10$zM3YP185kIzV/jOMUNFy8ec5q2/Q42Rp1wCvoo.GIY1oG.gD.rldG', 'ADMIN');

-- insert equivalent users
insert into users
values('88410633-4d1a-4fd8-a472-ea48606e3e7b', 'Diana','Prince','coachee1@school.org','09a30794-747e-4fb3-ba14-e8be3b40b122','assets/img/dummy/profile-picture.jpg',null);
insert into users
values('88410633-a472-4d1a-4fd8-ea48606e3e7b', 'Peter','Parker','coachee2@school.org','616c769f-c4e5-4134-a650-537902ff068a','assets/img/dummy/profile-picture-coach.jpg',null);
insert into users
values('88410633-a472-4d1a-4fd4-ea48606e3e7b', 'Bruce','Wayne','coach1@school.org','db5bca96-6fe0-4ce9-aa41-0134d0abee1f','assets/img/dummy/profile-picture-coach.jpg','88410633-a472-4d1a-4fd4-ea48606e3e7b');
insert into users
values('88410633-a172-4d1a-4fd4-ea48606e3e7b', 'Kathy','Kane','coach2@school.org','cf5e9d2c-365f-49b8-9a40-1f53ec233191','assets/img/dummy/profile-picture.jpg','88410633-a472-4d1a-4fd4-ea48606e3e7c');
insert into users
values('88410633-a172-4d1a-4fd4-ed48606e3e7b', 'Lois','Lane','admin1@school.org','6ae9d131-0d8f-46f6-9c51-f55f76662937','assets/img/dummy/profile-picture.jpg',null);
insert into users
values('88410633-a172-4d1a-4fd4-ed48676e3e7b', 'Clark','Kent','admin2@school.org','c4dd2426-eafd-4d60-9827-265f627759cf','assets/img/dummy/profile-picture-coach.jpg',null);

-- insert dummy coach informations
insert into coaches
values('88410633-a472-4d1a-4fd4-ea48606e3e7b', 'Billionaire industrialist and notorious playboy. One of the founders of the justice league.',
       'Only during dark hours, use the agreed sign for Batman to call me. Oops, I revealed my identity !', 'Mathematics', '1,3,5', 'Economic science', '5,6');
insert into coaches
values('88410633-a172-4d1a-4fd4-ea48606e3e7b', 'Former circus performer, I now fight against crime.',
       'Available at any time, justice does not wait.', 'Chemistry', '4,5', 'Physics', '5,6,7');


--rollback;

commit;

set client_min_messages to warning;

drop schema "public" cascade;

create schema "public";

create table "users" (
  "id"  serial,
);

create table "projects" (
  "id"  serial,
  "owner"  int not null,
  "title"  text not null,
);

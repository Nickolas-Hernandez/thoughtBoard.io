set client_min_messages to warning;

drop schema "public" cascade;

create schema "public";

create table "users" (
  "id" serial,
  "uuid" text not null,
  primary key ("id")
);

create table "projects" (
  "id" serial,
  "owner" integer not null,
  "title" text not null,
  primary key ("id")
);

create table "notes" (
  "id" serial,
  "project" integer not null,
  "title" text not null,
  "data" text not null,
  "createdAt" timestamptz(6) not null default now(),
  "lastEdittedAt" text not null,
  primary key ("id")
);

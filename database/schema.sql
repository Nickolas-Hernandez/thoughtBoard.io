set client_min_messages to warning;

drop schema "public" cascade;

create schema "public";

create table "users" (
  "id" serial,
  "email" varchar(255) UNIQUE NOT NULL,
  "password" varchar(255) NOT NULL,
  "uuid" UUID UNIQUE NOT NULL,
  primary key ("id")
);

create table "projects" (
  "id" serial,
  "owner" integer not null,
  "title" text not null,
  "nextNoteId" integer not null,
  primary key ("id")
);

create table "notes" (
  "noteId" serial,
  "order" integer not null,
  "project" integer not null,
  "title" text not null,
  "data" text not null,
  "createdAt" text not null,
  "lastEdited" text not null,
  primary key ("noteId")
);

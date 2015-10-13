# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## snippets
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed

------------------------------------------------

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
snippet_id  | integer   | not null, foreign key (references snippets), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name?       | string    | not null
snippet_id  | integer   | not null, foreign key (references snippets), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

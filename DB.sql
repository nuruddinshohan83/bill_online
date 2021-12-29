create table profiles (
  id uuid references auth.users not null,
  userName text unique,
  companyName text,
  address text,
  phoneNum text,
  joinedAt timestamp with time zone default timezone('utc'::text, now()) not null,

  primary key (id),
  unique(username)
);
create table clients (
  pid uuid  not null,
  id uuid 
  userName text unique,
  companyName text,
  address text,
  phoneNum text,
  joinedAt timestamp with time zone default timezone('utc'::text, now()) not null,

  primary key (id),
 
);

create table products (
  id uuid not null, 
  pid uuid  not null,
  cid uuid not null,
  pname text,
  price int,
  joinedAt timestamp with time zone default timezone('utc'::text, now()) not null,

  primary key (id),
);

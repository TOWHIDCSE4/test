create database node_mysql_ts;
show databases

use node_mysql_ts

drop table if exists stores;
create table if not exists stores
(
id int(11) not null auto_increment primary key,
title varchar(200) not null,
description text not null,
image_url text,
create_at datetime not null --2020-12-23 00:00:00
);
describe stores
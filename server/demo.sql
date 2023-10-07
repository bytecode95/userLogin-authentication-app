create table userSignUp(
    user_id int not null auto_increment primary key,
    username varchar(40) not null,
    email varchar(60) not null,
    password varchar(100) not null
);
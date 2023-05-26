CREATE TABLE if not exists User (
    id varchar(36) PRIMARY KEY,
    name varchar(36),
    username varchar(36)
);

CREATE TABLE if not exists Quiz (
    id varchar(36) PRIMARY KEY,
    question varchar(36),
    answer varchar(36),
    userId varchar(36),
    FOREIGN KEY (userId) REFERENCES User(id)
);

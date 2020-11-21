# Sequelize
ORM 이용하기 - MySQL 편

<br>

~~~
express learn-sequelize --view=pug

cd lern-sequelize

npm i

npm i sequelize mysql2

npm i -g sequelize-cli

sequelize init
~~~
에러 발생시 sudo


## Table
|user|model|
|---|---|
|name|string|
|age|integer|
|married|boolean|
|comment|text|
|create_at|date|

<br>

|comment|model|
|---|---|
|comment|string|
|create_at|date|

## 기능
회원 : 등록/조회  
댓글 : 등록/조회/수정/삭제

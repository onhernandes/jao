# jao.js

Just another relational database mapper for JavaScript

This was supposed to be Just Another Object Relational Mapping but I won't do OOP here.

This IS NOT for production, it's just for practicing my studies over ORMs, ODMs, design patterns for database and etc.

## Some notes, ideas and features

- JAO uses knex for dealing with MySQL, so it should accept an knex instance on its setup and expose the running instance
- This is literally a relational database mapping, the main entities should be the JAO lib itself (for handling connections, options and even representing the whole database) and the table mappings - not models, schemas, etc
- Table mappings should accept method overried - I think it helps avoiding creating SQL queries directly, even though some cases are very specific
- Defining columns in table mappings should not be obrigatory, it should be able to work with existing databases without having to explicitly define mappings, just like SQLAlchemy allows you to
- Table mappings has functions (not methods) that returns a row representation in pure JS objects, not an instance of something else - thus we don't ever define a model
- JAO should be able to check database/tables existence
- Validations (accepting functions, and customization for built-in validations like choosing the Error instance or just the Error message)

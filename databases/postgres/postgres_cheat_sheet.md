

## SCHEMA (s)

- list all tables in all schemas

		=> \dt *.*

- list tables in a particular schema 

		=> \dt public.*


- alternatively

		$psql mydatabase
		mydatabase=# SET search_path TO public, home;   #schema examples
		SET
		mydatabase=# \dt
		              List of relations
		 Schema |      Name       | Type  |  Owner
		--------+-----------------+-------+----------
		 public | counties        | table | postgres
		 public | spatial_ref_sys | table | postgres
		 public | states          | table | postgres
		 public | sa_cities       | table | postgres
		 pro    | pro_123421      | table | postgres 


<br/><br/><br/>

## USERS

- create new database user and password

		CREATE USER EXAMPLE_USER WITH ENCRYPTED PASSWORD 'Sup3rS3cret';

- Create a database with user as an owner

		create database EXAMPLE_DB owner = "EXAMPLE_USER";

- Grant all privileges to a database to a user

		GRANT ALL PRIVILEGES ON DATABASE EXAMPLE_DB TO EXAMPLE_USER;

- shift connection to the database to a specific user

		\c EXAMPLE_DB EXAMPLE_USER

- s
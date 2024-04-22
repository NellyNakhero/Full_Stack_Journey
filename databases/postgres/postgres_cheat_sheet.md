

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

ALTER TABLE Program
ADD host_name VARCHAR(20);

ALTER TABLE Program
DROP COLUMN host_id;
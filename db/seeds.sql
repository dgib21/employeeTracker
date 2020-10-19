USE employees;
INSERT INTO
  department (department_name)
VALUES
  ('Engineering'),
  ('Finance'),
  ('Sales'),
  ('Legal');


INSERT INTO
  role (title, salary, department_id)
VALUES
  ('Software Engineer', 50000, 1),
  ('Lead Engineer', 40000, 1),
  ('Accountant', 30000, 2),
  ('Finance Director', 20000, 2),
  ('Salesman', 10000, 3),
  ('Sales Lead', 5000, 3),
  ('Lawyer', 2000, 4),
  ('Legal Team Lead', 75000, 4);


INSERT INTO
  employee (first_name, last_name, role_id)
VALUES
  ('Cody', 'TheCoder', 1),
  ('Tommy', 'TheTech', 2),
  ('Money', 'May', 3),
  ('Dollars', 'Dawn', 4),
  ('Lead', 'Gen', 5),
  ('Close', 'Chan', 6),
  ('Court', 'Chris', 7),
  ('Judge', 'Jeff', 8);
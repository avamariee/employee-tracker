INSERT INTO department (department_name)
VALUES
('Sales'), 
('Engineering'), 
('Finance'), 
('Legal'), 
('Management');

INSERT INTO roles (title, salary, department_id)
VALUES
('Salesperson', 500, 1), 
('Sales Lead', 1000, 1), 
('Lead Engineer', 2000, 2), 
('Software Engineer', 1500, 2), 
('Accountant', 1200, 3),
('Legal Team Lead', 1500, 4),
('Lawyer', 2200, 4); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jack', 'Frost', 4, 2),
('Commander', 'Shepard', 7, 2),
('Jane', 'Doe', 3, 3),
('Oliver', 'Tree', 5, 2),
('Matthew', 'Bellamy', 6, 2),
('Hussein', 'Farran', 4, 3),
('Ash', 'Ketchum', 1, 2),
('Deckard', 'Cain', 2, 3),
('Guy', 'Fieri', 1, 3);

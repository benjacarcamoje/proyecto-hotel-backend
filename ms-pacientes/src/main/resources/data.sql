INSERT INTO paciente (id, rut, nombre, apellido, historial_clinico) VALUES
  (1, '12345678-9', 'Juan', 'Perez', 'Paciente hipertenso en control regular'),
  (2, '98765432-1', 'Maria', 'Gonzalez', 'Antecedente de alergia a penicilina'),
  (3, '11222333-4', 'Camila', 'Rojas', 'Control preventivo sin hallazgos relevantes');

ALTER TABLE paciente ALTER COLUMN id RESTART WITH 4;

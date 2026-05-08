INSERT INTO citas (id, paciente_id, fecha, hora, especialidad, tipo_cita, prioridad) VALUES
  (1, 1, '2026-05-10', '10:00', 'Cardiologia', 'CONTROL', 3),
  (2, 1, '2026-05-12', '08:30', 'Medicina Interna', 'URGENCIA', 1),
  (3, 2, '2026-05-15', '11:15', 'Pediatria', 'CONTROL', 3),
  (4, 3, '2026-05-18', '09:45', 'Traumatologia', 'CIRUGIA', 2);

ALTER TABLE citas ALTER COLUMN id RESTART WITH 5;

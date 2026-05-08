package com.rednorte.servicio_pacientes.service;

import com.rednorte.servicio_pacientes.model.Paciente;
import java.util.List;
import java.util.Optional;

public interface PacienteService {
    List<Paciente> obtenerTodos();
    Optional<Paciente> obtenerPorId(Long id);
    Paciente obtenerPorRut(String rut);
    Paciente guardar(Paciente paciente);
    void eliminar(Long id);
}
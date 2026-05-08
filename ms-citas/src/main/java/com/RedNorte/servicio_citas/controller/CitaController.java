package com.RedNorte.servicio_citas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.RedNorte.servicio_citas.factory.CitaFactory;
import com.RedNorte.servicio_citas.model.Cita;
import com.RedNorte.servicio_citas.repository.CitaRepository;

@RestController
@RequestMapping("/api/citas")
public class CitaController {

    @Autowired
    private CitaRepository repository;

    @Autowired
    private CitaFactory citaFactory;

    @GetMapping
    public List<Cita> listar() {
        return repository.findAll();
    }

    @GetMapping("/paciente/{pacienteId}")
    public List<Cita> listarPorPaciente(@PathVariable Long pacienteId) {
        return repository.findByPacienteId(pacienteId);
    }

    @PostMapping("/{tipo}")
    public Cita agendar(@PathVariable String tipo, @RequestBody Cita datosCita) {
        // Implementación del Factory Method
        Cita nuevaCita = citaFactory.crearCita(
            tipo, 
            datosCita.getPacienteId(), 
            datosCita.getEspecialidad(), 
            datosCita.getFecha(),
            datosCita.getHora()
        );
        return repository.save(nuevaCita);
    }
}

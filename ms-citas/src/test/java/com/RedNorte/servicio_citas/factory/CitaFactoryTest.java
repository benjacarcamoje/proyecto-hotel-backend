package com.RedNorte.servicio_citas.factory;

import com.RedNorte.servicio_citas.model.Cita;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

class CitaFactoryTest {

    private final CitaFactory citaFactory = new CitaFactory();

    @Test
    @DisplayName("Debe asignar Prioridad 1 cuando el tipo es URGENCIA")
    void debeCrearCitaUrgenciaConPrioridadUno() {
        String tipo = "URGENCIA";
        Long pacienteId = 1L;
        String especialidad = "Cardiologia";
        String fecha = "2024-12-01";
        String hora = "10:30";

        Cita resultado = citaFactory.crearCita(tipo, pacienteId, especialidad, fecha, hora);

        assertThat(resultado.getTipoCita()).isEqualTo("URGENCIA");
        assertThat(resultado.getPrioridad()).isEqualTo(1);
        assertThat(resultado.getHora()).isEqualTo("10:30");
    }

    @Test
    @DisplayName("Debe asignar Prioridad 3 para tipos de cita por defecto")
    void debeCrearCitaControlConPrioridadTres() {
        Cita resultado = citaFactory.crearCita("CONTROL", 2L, "Pediatria", "2024-12-05", "09:00");

        assertThat(resultado.getPrioridad()).isEqualTo(3);
    }
}

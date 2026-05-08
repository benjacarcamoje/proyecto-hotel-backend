package com.RedNorte.servicio_citas.factory;

import org.springframework.stereotype.Component;

import com.RedNorte.servicio_citas.model.Cita;

@Component
public class CitaFactory {

    public Cita crearCita(String tipo, Long pacienteId, String especialidad, String fecha, String hora) {
        int prioridad;

        // Logica de prioridad segun el tipo de cita.
        switch (tipo.toUpperCase()) {
            case "URGENCIA":
                prioridad = 1;
                break;
            case "CIRUGIA":
                prioridad = 2;
                break;
            default:
                prioridad = 3;
                break;
        }

        return Cita.builder()
                .pacienteId(pacienteId)
                .especialidad(especialidad)
                .fecha(fecha)
                .hora(hora)
                .tipoCita(tipo.toUpperCase())
                .prioridad(prioridad)
                .build();
    }
}

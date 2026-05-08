function PatientDetail({ patient, citas }) {
  if (!patient) {
    return (
      <div className="empty-state detail-empty">
        <strong>Selecciona un paciente</strong>
        <span>Veras su ficha clinica, RUT, historial y citas asociadas.</span>
      </div>
    );
  }

  return (
    <div className="patient-detail">
      <div className="patient-card">
        <div className="patient-card-header">
          <span className="avatar large">{patient.nombre?.charAt(0)}{patient.apellido?.charAt(0)}</span>
          <div>
            <h3>{patient.nombre} {patient.apellido}</h3>
            <p>{patient.rut}</p>
          </div>
        </div>

        <div className="clinical-note">
          <span>Historial clinico</span>
          <p>{patient.historialClinico || 'No disponible'}</p>
        </div>
      </div>

      <div className="appointments" id="citas">
        <div className="appointments-header">
          <h4>Citas asignadas</h4>
          <span>{citas.length} registros</span>
        </div>

        {citas.length ? (
          <div className="appointment-list">
            {citas.map((cita) => (
              <article className="appointment-card" key={cita.id}>
                <div>
                  <strong>{cita.fecha}</strong>
                  <span>{cita.hora || 'Hora por confirmar'}</span>
                </div>
                <p>Paciente ID #{cita.pacienteId}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state compact">
            <strong>Sin citas registradas</strong>
            <span>Este paciente aun no tiene agenda asociada.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientDetail;

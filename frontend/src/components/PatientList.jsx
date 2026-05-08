function PatientList({ patients, onSelect, selectedId }) {
  if (!patients.length) {
    return (
      <div className="empty-state">
        <strong>No hay pacientes disponibles</strong>
        <span>Agrega un paciente o ajusta la busqueda.</span>
      </div>
    );
  }

  return (
    <div className="patient-table" role="table" aria-label="Lista de pacientes">
      <div className="patient-table-head" role="row">
        <span>Paciente</span>
        <span>RUT</span>
        <span>Estado</span>
      </div>

      {patients.map((patient) => (
        <button
          key={patient.id}
          className={patient.id === selectedId ? 'patient-row selected' : 'patient-row'}
          onClick={() => onSelect(patient.id)}
          type="button"
          role="row"
        >
          <span className="patient-name">
            <span className="avatar">{patient.nombre?.charAt(0)}{patient.apellido?.charAt(0)}</span>
            <span>
              <strong>{patient.nombre} {patient.apellido}</strong>
              <small>ID clinico #{patient.id}</small>
            </span>
          </span>
          <span>{patient.rut}</span>
          <span className="status-badge">Activo</span>
        </button>
      ))}
    </div>
  );
}

export default PatientList;

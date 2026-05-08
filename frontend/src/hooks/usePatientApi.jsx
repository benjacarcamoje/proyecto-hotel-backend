const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8085/bff';

export async function fetchPatients() {
  const response = await fetch(`${API_BASE}/pacientes`);
  if (!response.ok) {
    throw new Error('Error al obtener pacientes');
  }
  return response.json();
}

export async function fetchPatientWithCitas(patientId) {
  const response = await fetch(`${API_BASE}/paciente-citas/${patientId}`);
  if (!response.ok) {
    throw new Error('Error al obtener datos del paciente');
  }
  return response.json();
}

export async function createPatient(patient) {
  const response = await fetch(`${API_BASE}/pacientes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(patient)
  });

  if (!response.ok) {
    throw new Error('Error al crear paciente');
  }

  return response.json();
}

import { useEffect, useMemo, useState } from 'react';
import { createPatient, fetchPatients, fetchPatientWithCitas } from './hooks/usePatientApi';
import PatientList from './components/PatientList';
import PatientDetail from './components/PatientDetail';
import PatientForm from './components/PatientForm';

function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const loadPatients = async () => {
    setLoading(true);
    try {
      const data = await fetchPatients();
      setPatients(data || []);
      setError('');
    } catch (e) {
      setError('No se pudo cargar la lista de pacientes.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPatients();
  }, []);

  const filteredPatients = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      return patients;
    }

    return patients.filter((patient) => {
      const fullName = `${patient.nombre} ${patient.apellido}`.toLowerCase();
      return fullName.includes(term) || patient.rut?.toLowerCase().includes(term);
    });
  }, [patients, searchTerm]);

  const handleSelectPatient = async (patientId) => {
    setLoading(true);
    setSelectedPatient(null);
    setCitas([]);
    try {
      const data = await fetchPatientWithCitas(patientId);
      setSelectedPatient(data.paciente);
      setCitas(data.citas || []);
      setError('');
    } catch (e) {
      setError('No se pudieron cargar los detalles del paciente.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePatient = async (patient) => {
    setSaving(true);
    setSuccess('');
    try {
      const createdPatient = await createPatient(patient);
      await loadPatients();
      await handleSelectPatient(createdPatient.id);
      setSuccess('Paciente agregado correctamente.');
      setError('');
    } catch (e) {
      setError('No se pudo agregar el paciente.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">RN</div>
          <div>
            <strong>RedNorte</strong>
            <span>Gestion Clinica</span>
          </div>
        </div>

        <nav className="nav-menu" aria-label="Navegacion principal">
          <a className="nav-item active" href="#pacientes">Pacientes</a>
          <a className="nav-item" href="#citas">Citas</a>
          <a className="nav-item" href="#reportes">Reportes</a>
          <a className="nav-item" href="#configuracion">Configuracion</a>
        </nav>

        <div className="sidebar-status">
          <span className="status-dot"></span>
          Servicios conectados
        </div>
      </aside>

      <div className="workspace">
        <header className="topbar">
          <div>
            <span className="eyebrow">Panel operativo</span>
            <h1>RedNorte Gestion Hospitalaria</h1>
            <p>Registro de pacientes, historial clinico y citas desde el BFF.</p>
          </div>

          <div className="topbar-actions">
            <input
              className="search-input"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Buscar por nombre o RUT"
              type="search"
            />
          </div>
        </header>

        <section className="metrics-grid" aria-label="Resumen operacional">
          <article className="metric-card">
            <span>Pacientes activos</span>
            <strong>{patients.length}</strong>
          </article>
          <article className="metric-card">
            <span>Citas del paciente</span>
            <strong>{citas.length}</strong>
          </article>
          <article className="metric-card">
            <span>Estado BFF</span>
            <strong>Online</strong>
          </article>
        </section>

        {(error || success) && (
          <div className={error ? 'notice error' : 'notice success'}>
            {error || success}
          </div>
        )}

        <main className="dashboard-grid">
          <section className="panel patient-panel" id="pacientes">
            <div className="panel-header">
              <div>
                <span className="eyebrow">Registro</span>
                <h2>Pacientes</h2>
              </div>
              {loading && <span className="loading-pill">Actualizando</span>}
            </div>

            <PatientList
              patients={filteredPatients}
              onSelect={handleSelectPatient}
              selectedId={selectedPatient?.id}
            />
          </section>

          <section className="panel detail-panel">
            <div className="panel-header">
              <div>
                <span className="eyebrow">Ficha rapida</span>
                <h2>Detalle clinico</h2>
              </div>
            </div>
            <PatientDetail patient={selectedPatient} citas={citas} />
          </section>

          <section className="panel form-panel">
            <div className="panel-header">
              <div>
                <span className="eyebrow">Nuevo ingreso</span>
                <h2>Agregar paciente</h2>
              </div>
            </div>
            <PatientForm onSubmit={handleCreatePatient} saving={saving} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

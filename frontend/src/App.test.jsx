import { render, screen, waitFor } from '@testing-library/react';
import { beforeEach, expect, test, vi } from 'vitest';
import App from './App';

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([])
    })
  );
});

test('muestra el titulo de RedNorte en la interfaz', async () => {
  render(<App />);
  await waitFor(() => expect(screen.getByText(/RedNorte Gestion Hospitalaria/i)).toBeTruthy());
});

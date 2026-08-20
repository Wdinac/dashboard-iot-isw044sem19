import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import PainelClima from './PainelClima';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('PainelClima', () => {
  it('exibe a temperatura recebida pela API', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              current: {
                temperature_2m: 25,
                relative_humidity_2m: 60,
                wind_speed_10m: 10,
              },
            }),
        })
      )
    );

    render(<PainelClima />);

    expect(await screen.findByText(/25/)).toBeInTheDocument();
  });
});

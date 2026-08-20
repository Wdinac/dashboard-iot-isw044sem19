import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import SensorCard from './SensorCard';

test('mostra o nome do sensor', () => {
  render(<SensorCard nome="Temperatura" valor={25} unidade="°C" />);
  expect(screen.getByText('Temperatura')).toBeInTheDocument();
});

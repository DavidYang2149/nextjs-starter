/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';

import Home from 'src/pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Home />);

    expect(container).toHaveTextContent(/welcome to next\.js!/i);
  });
});

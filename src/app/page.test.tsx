import { describe, describe as context, it, expect } from 'vitest'
import { render } from '@testing-library/react';

import Home from './page';

describe('메인화면', () => {
  context('메인 화면으로 접속하면', () => {
    it('타이틀을 확인합니다', () => {
      const { container } = render(<Home />);

      expect(container.textContent).toContain('Explore starter templates for Next.js.');
    });
  });
});

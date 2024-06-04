import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react';

import Health from './page';

describe('헬스체크 페이지', () => {
  // context('메인 화면으로 접속하면', () => {
    it('타이틀을 확인합니다', () => {
      const { container } = render(<Health />);

      expect(container.textContent).toContain('This is the health page. It is a placeholder for the health page.');
    });
  // });
});

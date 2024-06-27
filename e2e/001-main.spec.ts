import { test, expect } from '@playwright/test';
import { describe, context, it } from 'playwright-dci-pattern';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

describe('Main 페이지에서', () => {
  context('처음 접속하면', () => {
    it('메인 이미지가 보입니다', async ({ page }) => {
      await expect(page.getByRole('img', { name: 'Next.js Logo' })).toBeVisible();
    });
  });
});

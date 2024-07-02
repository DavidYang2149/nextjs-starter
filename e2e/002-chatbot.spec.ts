import { test, expect } from '@playwright/test';
import { describe, context, it } from 'playwright-dci-pattern';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/chatbot');
});

describe('챗봇 페이지에서', () => {
  context('처음 접속하면', () => {
    it('챗봇 화면이 보입니다', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Chatbot' })).toBeVisible();
    });
  });

  context('메시지를 입력하고 전송 버튼을 누르면', () => {
    it('사용자 입력 메시지와 챗봇 응답 메시지가 보입니다', async ({ page }) => {
      await page.getByPlaceholder('Type your message...').click();
      await page.getByPlaceholder('Type your message...').fill('Hello, ChatGPT!');
      await page.getByRole('button', { name: 'Send' }).click();

      await expect(page.getByText('Hello, ChatGPT!', { exact: true })).toBeVisible();
      await expect(page.getByText('You said: Hello, ChatGPT!', { exact: true })).toBeVisible();

    });
  });
});

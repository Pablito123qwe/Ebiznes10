import { test, expect } from '@playwright/test';

test('renders and shows API status', async ({ page }) => {
  await page.goto('/'); // baseURL poda config
  await expect(page.getByRole('heading', { name: 'Frontend (Cloud Run)' })).toBeVisible();
  await expect(page.getByText('Status:', { exact: false })).toBeVisible();
});
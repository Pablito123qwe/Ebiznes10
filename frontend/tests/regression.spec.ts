import { test, expect } from '@playwright/test';

test('renders and shows API status', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Frontend (Cloud Run)' })).toBeVisible();
  // Wyświetlenie "OK" pojawia się gdy API zwróci dane:
  await expect(page.getByText('Status:', { exact: false })).toBeVisible();
});

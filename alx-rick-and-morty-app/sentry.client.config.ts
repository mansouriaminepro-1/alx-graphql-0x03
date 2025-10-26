// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: '',
  tracesSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
  integrations: [],
});

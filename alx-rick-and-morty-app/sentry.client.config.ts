// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://a659a80e573dd46171c4f1c6879cd87a@o4510256190455808.ingest.de.sentry.io/4510256878387280',
  tracesSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
  integrations: [],
});
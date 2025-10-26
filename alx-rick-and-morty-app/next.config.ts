// next.config.js
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep any existing config here (e.g., webpack, env, etc.)
  // If you have none, leave as an empty object
};

module.exports = withSentryConfig(
  nextConfig,
  {
    // Sentry plugin options
    silent: true, // Suppresses Sentry CLI output during builds
    org: 'amine-rg',
    project: 'alx-graphql-0x03',
  },
  {
    // Sentry webpack plugin options
    hideSourceMaps: true,
    widenClientFileUpload: true,
  }
);
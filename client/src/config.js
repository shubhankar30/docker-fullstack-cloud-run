export default {
  STAGE: process.env.REACT_APP_STAGE || 'development',
  // NOTE: First one in the list will be the system defalt.
  AVAILABLE_LANGUAGES: ['en'],
  DEFAULT_ERROR: 'Sorry something went wrong',
  GOOGLE_ANALYTICS: '',
  API: {
    development: '/api',
    staging: 'https://staging.api.v4.lesson-time.com',
    production: 'https://server-development-i22qlve3jq-de.a.run.app/',
  },
};
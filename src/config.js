export const isProduction = window && window.app_env === 'production';
export const backendUrl = 'https://api.ucurtmaprojesi.com';

const config = {
  endpoint: `${backendUrl}/graphql`,
};

export default config;

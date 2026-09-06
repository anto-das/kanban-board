interface IEnvVars {
  API_BASE_URL: string;
  AUTH_BASE_URL: string;
}

function getVariables(): IEnvVars {
  const variables = ["API_BASE_URL", "AUTH_BASE_URL"];
  variables.forEach((v) => {
    if (!process.env[v]) {
      throw new Error(`Missing environment variable: ${v}`);
    }
  });
  return {
    API_BASE_URL: process.env.API_BASE_URL as string,
    AUTH_BASE_URL: process.env.AUTH_BASE_URL as string,
  };
}
export const env = getVariables();

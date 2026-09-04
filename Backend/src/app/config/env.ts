interface IenvVars {
  NODE_ENV: string;
  PORT: string;
  DATABASE_URL: string;
  JWT_SECRET: string;
}

function getEnvVars(): IenvVars {
  const vars = ["NODE_ENV", "PORT", "DATABASE_URL", "JWT_SECRET"];
  vars.forEach((v) => {
    if (!process.env[v]) {
      throw new Error(`Missing environment variable: ${v}`);
    }
  });
  return {
    NODE_ENV: process.env.NODE_ENV as string,
    PORT: process.env.PORT as string,
    DATABASE_URL: process.env.DATABASE_URL as string,
    JWT_SECRET: process.env.JWT_SECRET as string,
  };
}
export const env: IenvVars = getEnvVars();

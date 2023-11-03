import 'dotenv/config';

interface Config {
  DB_NAME?: string;
  DB_PORT?: string;
  DB_USERNAME?: string;
  DB_PASSWORD?: string;
}

const config: Config = {
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
};

const getConfig = (name: keyof Config): string => {
  const value = config[name];
  if (value) {
    return value;
  }
  // eslint-disable-next-line no-console
  console.error(`ENV var ${name} is missing!`);
  return process.exit(1);
};

export default getConfig;

const { env } = process;

const BACKEND_URL: string | undefined =
  env.NEXT_APP_BACKEND_URL || env.__NEXT_PRIVATE_ORIGIN;

if (!BACKEND_URL) {
  throw new Error('"BACKEND_URL" mast be defined');
}

export { BACKEND_URL };

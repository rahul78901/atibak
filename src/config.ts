const ENV = import.meta.env;

const VITE_BACKEND_URL = ENV.VITE_APP_BACKEND_URL;

if (!VITE_BACKEND_URL) {
  throw new Error('backend url must be defined!');
}

if (!ENV.PROD) {
  console.log(import.meta.env);
}

const BACKEND_URL = `${VITE_BACKEND_URL}/api/v1/`;

const config = {
  BACKEND_URL,
};

export type ResponseType =
  | {
      success: true;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: any;
    }
  | {
      success: false;
      error?: Error;
      message: string;
    };

export default config;

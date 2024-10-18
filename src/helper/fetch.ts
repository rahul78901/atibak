import { BACKEND_URL } from "@/config/config";

const request = async (url: string) => {
  const newUrl = new URL(url, BACKEND_URL);
  const res = await fetch(newUrl, { cache: "no-store" });

  const data = (await res.json()).data;

  return data;
};

export { request };

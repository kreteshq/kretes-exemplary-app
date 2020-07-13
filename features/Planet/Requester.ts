
import { Planet } from "Planet";

export interface WebRPCError extends Error {
  code: string
  message: string
  status: number
}

const hostname = 'http://localhost:5544'

async function parse<T>(response: Response): Promise<T> {
  const text = await response.text();
  let data;

  try {
    data = JSON.parse(text)
  } catch (err) {
    throw { code: 'unknown', message: 'expecting JSON, got: ' + text, status: response.status } as WebRPCError
  }

  if (!response.ok) throw data

  return data
}

const prepareRequest = (body = {}, headers = {}) => {
  return {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
};

export const browse = async (): Promise<Planet> => {
  const url = hostname + '/rpc/Planet/browse';
  let response = await fetch(url, prepareRequest())
  return parse<Planet>(response);
}

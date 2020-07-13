import { request } from "kretes";

const { POSTRequest } = request;

import { BaseService, PingReturn } from "../Service";

export type Send = (input: RequestInfo, init?: RequestInit) => Promise<Response>

export class BaseRequester implements BaseService {
  private hostname: string;
  private send: Send
  private path = '/rpc/Base/'

  constructor(send: Send, hostname: string = 'http://localhost:5544') {
    this.hostname = hostname
    this.send = send
  }

  private url(name: string): string {
    return this.hostname + this.path + name
  }

  browse = async (): Promise<PingReturn> => {
    let response = await this.send(this.url('browse'), POSTRequest({}))
    try {
      const _data = await buildResponse(response);
      return _data;
    } catch (error) {
      console.log(error);
      return '';
    }
  }
}

export interface WebRPCError extends Error {
  code: string
  msg: string
  status: number
}

const buildResponse = async (response: Response): Promise<any> => {
  const text = await response.text();
  let data;

  try {
    data = JSON.parse(text)
  } catch (err) {
    throw { code: 'unknown', msg: `expecting JSON, got: ${text}`, status: response.status } as WebRPCError
  }

  if (!response.ok) throw data

  return data
}


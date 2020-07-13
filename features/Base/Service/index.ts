export type PingReturn = string;

export interface BaseService {
  browse(): Promise<PingReturn>
}

import { Context } from 'telegraf';
import { DbClient } from '../orm/client';

export interface VpnLocation {
  id: number;
  country: string;
  url_api: string;
  type_vpn: string;
  active: boolean;
  len_vpn: number;
  limit_npm: number;
}

export type UserStatus = 'guest' | 'testing' | 'uses_tariff' | 'block';

export interface ParamSessionData {
  id?: number
  userid?: number;
  is_bot?: boolean;
  first_name?: string;
  username?: string | undefined;
  language_code?: string | undefined;
  time_stop?: bigint;
  create_time?: bigint;
  test_period_is_over?: boolean;
  user_status?: UserStatus;
  outline_keys?: string;
}

export interface SessionData {
  id?: number
  userid: number;
  is_bot: boolean;
  first_name: string;
  username: string | undefined;
  language_code: string | undefined;
  time_stop: bigint;
  create_time: bigint;
  test_period_is_over: boolean;
  user_status: UserStatus;
  outline_keys?: string;
}

export interface IBotContext extends Context {
  client: DbClient;
}


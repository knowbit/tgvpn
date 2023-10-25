import { SessionData } from "../context/context.interface";

export type ResponseInitUser = {
  status: 'user_created' | 'user_exists';
  data: SessionData;
};

export type ResponseStartTesting = {
  status: 'ok' | 'is_over_testing' | 'not_found_user' | 'is_tariff' | 'is_testing';
  data: SessionData | null;
};

export type ResponseTestingCompleted = {
  status: 'ok' | 'not_found_user';
  data: SessionData | null;
};



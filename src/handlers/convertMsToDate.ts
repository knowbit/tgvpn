import { day, hour } from "../staticData/day-hour";

export interface IConvertData {
  hours: number;
  days: number;
};

export function converMsToDate(ms: bigint): IConvertData {
  const result = { hours: 0, days: 0 };
  let days = ms / day;

  if (days >= 1) {
    result.days = Math.round(Number(days));
    result.hours = Math.round(Number((ms % day) / hour));
  } else {
    result.hours = Math.round(Number(ms / hour));
  }

  return result;
}

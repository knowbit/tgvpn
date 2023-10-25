import { IConfigService } from "../config/config.interface";
import { ConfigService } from "../config/config.service";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

export type KeyOutlineApi = {
  id: string,
  name: string,
  password: string,
  port: number,
  method: string,
  dataLimit?: { bytes: number },
  accessUrl: string,
} | null;

type ErrOutlineApi =
  'Access key inexistent' |
  'Invalid data limit' |
  'The error is unknown' |
  null;

export type KeysOutlineApi = { accessKeys: KeyOutlineApi[] } | null;

export class OutlineApi {
  private p_keys = 'access-keys';
  url_api: string;

  constructor(url_api: string) {
    this.url_api = url_api;
  }

  async createKey(): Promise<{ data: KeyOutlineApi, err: ErrOutlineApi }> {
    try {
      const url = `${this.url_api}/${this.p_keys}`;
      const data: RequestInit = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
      };
      const res = await fetch(url, data);
      if (res.status === 201) {
        return { err: null, data: await res.json() };
      } else {
        return { err: 'The error is unknown', data: null };
      }
    } catch (err) {
      throw err;
    }
  }

  async getKeys(): Promise<{ err: ErrOutlineApi, data: KeysOutlineApi }> {
    try {
      const url = `${this.url_api}/${this.p_keys}`;
      const res = await fetch(url);
      if (res.status === 200) {
        return { err: null, data: await res.json() };
      } else {
        return { err: 'The error is unknown', data: null };
      }
    }
    catch (err) {
      throw err;
    }
  }

  async dellKey(id: string): Promise<{ err: ErrOutlineApi }> {
    try {
      const url = `${this.url_api}/${this.p_keys}/${id}`;
      const data: RequestInit = {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
      };
      const res = await fetch(url, data);
      if (res.status === 204) {
        return { err: null };
      } else if (res.status === 404) {
        return { err: 'Access key inexistent' };
      }
      return { err: 'The error is unknown' };
    }
    catch (err) {
      throw err;
    }
  }

  async renameKey(id: string, name: string): Promise<{ err: ErrOutlineApi }> {
    try {
      const url = `${this.url_api}/${this.p_keys}/${id}/name`;
      const data: RequestInit = {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name }),
      };
      const res = await fetch(url, data);
      if (res.status === 204) {
        return { err: null };
      } else if (res.status === 404) {
        return { err: 'Access key inexistent' };
      }
      return { err: 'The error is unknown' };
    } catch (err) {
      throw err;
    }
  }


  async setLimitKey(id: string, bytes: number): Promise<{ err: ErrOutlineApi }> {
    try {
      const url = `${this.url_api}/${this.p_keys}/${id}/data-limit`;
      const data: RequestInit = {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          limit: { bytes: bytes }
        }),
      };
      const res = await fetch(url, data);
      if (res.status === 204) {
        return { err: null };
      } else if (res.status === 400) {
        return { err: 'Invalid data limit' };
      } else if (res.status === 404) {
        return { err: 'Access key inexistent' };
      }
      return { err: 'The error is unknown' };
    } catch (err) {
      throw err;
    }
  }

  async dellLimitKey(id: string): Promise<{ err: ErrOutlineApi }> {
    try {
      const url = `${this.url_api}/${this.p_keys}/${id}/data-limit`;
      const data: RequestInit = {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
      };
      const res = await fetch(url, data);
      if (res.status === 204) {
        return { err: null };
      } else if (res.status === 404) {
        return { err: 'Access key inexistent' };
      }
      return { err: 'The error is unknown' };
    } catch (err) {
      throw err;
    }
  }
}
//
// async function logMovies() {
//   try {
//     const uotline = new OutlineApi(new ConfigService);
//     const res = await uotline.getKeys();
//     // const res = await uotline.createKey();
//     // const res = await uotline.getKeys();
//     // const res = await uotline.dellKey('32');
//     // const res = await uotline.renameKey('35', 'GGGG');
//     // const res = await uotline.setLimitKey('35', 0);
//     // const res = await uotline.dellLimitKey('35');
//     // console.log(res.accessKeys.at(-1)?.dataLimit)
//     //
//     console.log(res.data)
//     // console.log(res.data?.accessKeys[0])
//     console.log(res.err)
//   } catch (err) {
//     console.log(err)
//   }
// }
//
// // logMovies()

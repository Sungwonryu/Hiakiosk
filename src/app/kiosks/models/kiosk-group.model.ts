import { Kiosk } from './kiosk.model';

/**
 *  param {Number} id
 *  param {String} name
 *  param {Array} kioskList
 *  param {Object} data
 *
 *  id - unique integer ID for kioskGroup which starting from 1
 *  name - unique name for kioskGroup (e.g. 'nycferry', 'wework')
 *  data
 */
export class KioskGroup {
  public id: number;
  public name: string | null | undefined;
  public kioskList: Kiosk[];
  public data: any;

  constructor({ id, name, kioskList = [], data = {} }: {
    id: number,
    name?: string,
    kioskList?: Kiosk[]
    data?: any
  }) {

    this.set({ id, name, kioskList, data });
  }

  set({ id, name, kioskList, data }: {
    id?: number,
    name?: string,
    kioskList?: Kiosk[],
    data?: any
  }) {

    if (id != null) this.id = id;
    if (name != null) this.name = name;
    if (kioskList != null) this.kioskList = kioskList;
    if (data != null) this.data = data;
  }
}

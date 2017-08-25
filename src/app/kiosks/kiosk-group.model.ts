/**
 *  param {Number} id
 *  param {String} name
 *  param {Object} data
 *
 *  id - unique integer ID for kiosk group which starting from 1
 *  name - unique name for kiosk group (e.g. 'per11', 'nwill')
 *  data
 */
export class KioskGroup {
  public id: number;
  public name: string | null | undefined;
  public data: any;

  constructor({ id, name, data = {} }: {
    id: number,
    name?: string,
    data?: any
  }) {

    this.set({ id, name, data });
  }

  set({ id, name, data }: {
    id?: number,
    name?: string,
    data?: any
  }) {

    if (id != null) this.id = id;
    if (name != null) this.name = name;
    if (data != null) this.data = data;
  }
}

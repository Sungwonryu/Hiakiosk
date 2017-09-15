import { KioskConfig } from './kiosk-config.model';

/**
 *  param {Number} id
 *  param {String} name
 *  param {Object} kioskConfig
 *  param {Object} data
 *
 *
 *  id - unique integer ID for kiosk which starting from 1
 *  name - unique name for kiosk (e.g. 'per11', 'nwill')
 *  headerBar
 *  topBar
 *  bottomBar
 *  appBar
 *  data
 */
export class Kiosk {
  public id: number;
  public name?: string;
  public kioskConfig?: KioskConfig;
  public data?: any;

  constructor({ id, name, kioskConfig, data = {} }:
    {
      id: number,
      name?: string,
      kioskConfig?: KioskConfig,
      data?: any
    }) {

    this.set({ id, name, kioskConfig, data })
  }

  set({ id, name, kioskConfig, data }: {
    id?: number,
    name?: string,
    kioskConfig?: KioskConfig,
    data?: any
  }) {

    if (id != null) this.id = id;
    if (name != null) this.name = name;
    if (kioskConfig != null) this.kioskConfig = kioskConfig;
    if (data != null) this.data = data;
  }
}

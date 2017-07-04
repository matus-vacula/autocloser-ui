import {
  LOAD_ZONES,
  LOAD_ZONES_SUCCESS,
  LOAD_ZONES_ERROR,
} from './constants';

export function loadZones() {
  return {
    type: LOAD_ZONES,
  };
}

export function loadZonesSuccess(zones) {
  return {
    type: LOAD_ZONES_SUCCESS,
    zones,
  };
}

export function loadZonesError(error) {
  return {
    type: LOAD_ZONES_ERROR,
    error,
  };
}

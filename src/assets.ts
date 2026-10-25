import { defineAssets } from '@iwsdk/core';
import { instrument, probe } from './scene-assets/instruments.js';
import {
  bench,
  stool,
  shelving,
  equipmentRack,
  solderStation,
} from './scene-assets/furniture.js';
import { room, floor, obstacles } from './scene-assets/room.js';

export default defineAssets({
  room: room(),
  floor: floor(),
  walls: obstacles(),
  bench: bench(),
  secondary: bench(true),
  scope: instrument('scope'),
  generator: instrument('generator'),
  supply: instrument('supply'),
  meter: instrument('meter'),
  stool: stool(),
  shelving: shelving(),
  rack: equipmentRack(),
  solder: solderStation(),
  probe: probe(),
});

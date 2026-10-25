# ECE Lab — Immersive Electronics Studio

A low-poly, room-scale electronics teaching laboratory built with IWSDK 1.1.0-rc.2 and TypeScript. Inspired by the supplied lab concept art and the procedural environment approach of [Chinese Garden](https://github.com/felixtrz/chinese-garden).

## Explore

- Desktop: enter the lab, move with WASD/arrows, drag to look, or press F for pointer lock. Escape releases the mouse. Shift increases walking speed.
- Click a bench instrument to open its controls; E operates the nearby station you are facing.
- The map offers direct navigation to the workbench, component library, equipment rack, and soldering area.
- On a compatible headset, choose Enter VR. IWSDK supplies immersive controller locomotion and ray interaction. Trigger on instruments cycles their setting. The red probe supports near and distance grabbing and returns on release.
- Touch users receive movement buttons and drag-to-look.

## Instruments

The main bench places the oscilloscope, function generator, DC supply, and multimeter on the elevated shelf, leaving the lower desktop for a breadboard circuit. Frequency, waveform, time scale, voltage, output, and meter-mode controls update the primary displays. Other benches and racks contain static instrument copies. Soldering extraction has an in-world status indicator. Component selection presents a resistor's value and purpose.

This is an exploratory simulation prototype, not a numerical circuit solver. Readings are illustrative; freeform wire connection, breadboard editing, and actual soldering are not implemented.

## Development

Requires Node >=24, or an IWSDK-supported Node version.

```sh
npm install
npm run dev:iwsdk
npm run typecheck
npm run build
```

`dist/` is the static deployment. `dev` and `dev:iwsdk` use the official native development workflow. See GITHUB-PAGES.md to deploy with the included GitHub Actions workflow. The project manifest `iwsdk.config.json` is authoritative for features and scene selection. Geometry lives in `src/scene-assets/`, placements in `public/scenes/main.iwsdk.scene.json`, and interaction behavior in `src/lab-system.ts`.

## Verification status

TypeScript and production-build validation are run before delivery. Browser rendering could not be verified in the authoring environment: its cloud browser disables WebGL, and IWSDK's managed browser could not acquire runtime process identity inside the preview container. Physical headset, browser traversal, grab, and immersive-session tests remain unverified. Independent visual review was limited to source inspection; no 9/10 visual acceptance is claimed.

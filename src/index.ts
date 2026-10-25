import {World} from '@iwsdk/core';
import projectOptions from 'virtual:iwsdk-project';
import {LabSystem} from './lab-system.js';
import {setupUI} from './ui.js';
import './style.css';
World.create(document.getElementById('scene-container') as HTMLDivElement,projectOptions).then(w=>{w.registerSystem(LabSystem);const s=w.getSystem(LabSystem)!;setupUI(w,s);if(import.meta.env.DEV)(window as any).__lab={world:w,system:s};}).catch(e=>{console.error(e);const p=document.querySelector('#loading p');if(p)p.textContent='The lab could not start. Please reload in a browser with WebGL enabled.';});

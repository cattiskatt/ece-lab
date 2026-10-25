import { defineComponents, createComponent, Types } from '@iwsdk/core';
export const LabControl = createComponent('LabControl', { kind: {type:Types.String,default:''} });
export default defineComponents([LabControl]);

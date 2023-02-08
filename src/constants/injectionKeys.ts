import type { Toast } from '../constants/types';
import { InjectionKey } from 'vue';
export const toastKey: InjectionKey<Toast> = Symbol();

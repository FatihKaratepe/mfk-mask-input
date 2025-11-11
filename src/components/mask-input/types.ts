/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import type { InputProps } from 'antd';
import IMask from 'imask';

export type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (x: infer R) => any
  ? {
      [K in keyof R]: R[K];
    }
  : never;

type OnChangeParam = Parameters<Exclude<InputProps['onChange'], undefined>>[0];

export interface OnChangeEvent extends OnChangeParam {
  maskedValue: string;
  unmaskedValue: string;
}

type IMaskOptionsBase = UnionToIntersection<IMask.AnyMaskedOptions>;

export type InputMaskOptions = {
  [K in keyof IMaskOptionsBase]?: IMaskOptionsBase[K];
};

type MaskFieldType = string | RegExp | Function | Date | InputMaskOptions;

export interface IMaskOptions extends Omit<InputMaskOptions, 'mask'> {
  mask: MaskFieldType;
}

type MaskOptionsList = Array<IMaskOptions>;

export type MaskType = MaskFieldType | MaskOptionsList;

export interface MaskedInputProps extends Omit<InputProps, 'onChange' | 'value' | 'defaultValue'> {
  mask: MaskType;
  definitions?: InputMaskOptions['definitions'];
  value?: string;
  defaultValue?: string;
  maskOptions?: InputMaskOptions;
  onChange?: (event: OnChangeEvent) => any;
}

import type { InputProps } from 'antd';
import IMask from 'imask';

export type UnionToIntersection<T> = (T extends unknown ? (x: T) => unknown : never) extends (x: infer R) => unknown
  ? {
      [K in keyof R]: R[K];
    }
  : never;

type AntdOnChangeParam = Parameters<Exclude<InputProps['onChange'], undefined>>[0];
type InputOnChangeParam = Parameters<Exclude<React.InputHTMLAttributes<HTMLInputElement>['onChange'], undefined>>[0];

type OnChangeParam = AntdOnChangeParam | InputOnChangeParam;

export interface OnChangeEvent extends OnChangeParam {
  maskedValue: string;
  unmaskedValue: string;
}

type IMaskOptionsBase = UnionToIntersection<IMask.AnyMaskedOptions>;

export type InputMaskOptions = {
  [K in keyof IMaskOptionsBase]?: IMaskOptionsBase[K];
};

type MaskFieldType = string | RegExp | ((...args: never) => unknown) | Date | InputMaskOptions;

export interface IMaskOptions extends Omit<InputMaskOptions, 'mask'> {
  mask: MaskFieldType;
}

type MaskOptionsList = Array<IMaskOptions>;

export type MaskType = MaskFieldType | MaskOptionsList;

type GeneralInputProps = React.InputHTMLAttributes<HTMLInputElement> & InputProps;
export interface MaskedInputProps extends Omit<GeneralInputProps, 'onChange' | 'value' | 'defaultValue'> {
  mask: MaskType;
  definitions?: InputMaskOptions['definitions'];
  value?: string;
  defaultValue?: string;
  maskOptions?: InputMaskOptions;
  onChange?: (event: OnChangeEvent) => void;
}

import AntdInputMask from './AntdInputMask';
import InputMask from './InputMask';
import IMask from 'imask';

const MaskInput = InputMask as typeof InputMask & { Antd: typeof AntdInputMask };

MaskInput.Antd = AntdInputMask;

export { MaskInput, IMask };

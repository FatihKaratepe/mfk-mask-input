# mfk-mask-input

A lightweight and flexible vanilla React masked input component built with [IMask](https://imask.js.org/).

## 🚀 [**Live Demo →**](https://mfk-mask-input.vercel.app/)
## 🔗 [**AntD Input Variant**](https://www.npmjs.com/package/mfk-mask-input-antd)

## Features

- 🎭 **Flexible Masking** - Supports various mask patterns (phone, credit card, date, custom)
- 🪶 **Lightweight** - Vanilla React input, no UI framework dependencies
- 📝 **TypeScript Support** - Full TypeScript support with type definitions
- ⚡ **Minimal Dependencies** - Only React and IMask as peer dependencies
- 🔧 **Customizable** - Extensive IMask options support
- 🎯 **Developer Friendly** - Access both masked and unmasked values in onChange

## Installation

```bash
npm install mfk-mask-input
# or
yarn add mfk-mask-input
# or
pnpm add mfk-mask-input
# or
bun add mfk-mask-input
```

### Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "react": "^18.0.0 || ^19.0.0",
  "react-dom": "^18.0.0 || ^19.0.0",
  "imask": "^6.0.0 || ^7.0.0"
}
```

## Quick Start

```tsx
import { InputMask } from "mfk-mask-input";

function MyComponent() {
  return (
    <InputMask
      mask="(000) 000-0000"
      placeholder="Enter phone number"
      onChange={(e) => {
        console.log("Masked:", e.maskedValue); // "(555) 123-4567"
        console.log("Unmasked:", e.unmaskedValue); // "5551234567"
      }}
    />
  );
}
```

## Usage Examples

### Phone Number

```tsx
<InputMask mask="(000) 000-0000" placeholder="(555) 123-4567" />
```

### Credit Card

```tsx
<InputMask mask="0000 0000 0000 0000" placeholder="1234 5678 9012 3456" />
```

### Date

```tsx
<InputMask mask="00/00/0000" placeholder="DD/MM/YYYY" />
```

### Custom Patterns

```tsx
<InputMask
  mask="AAA-000"
  definitions={{
    A: /[A-Z]/,
    "0": /[0-9]/,
  }}
  placeholder="ABC-123"
/>
```

### Multiple Masks (Dynamic)

```tsx
<InputMask
  mask={[
    { mask: "(000) 000-0000" },
    { mask: "+0 (000) 000-0000" },
    { mask: "+00 (000) 000-0000" },
  ]}
  placeholder="Phone number"
/>
```

### Controlled Component

```tsx
import { useState } from "react";
import { InputMask } from "mfk-mask-input";

function ControlledExample() {
  const [value, setValue] = useState("");

  return (
    <InputMask
      mask="0000-0000-0000-0000"
      value={value}
      onChange={(e) => setValue(e.maskedValue)}
    />
  );
}
```

### With Advanced IMask Options

```tsx
<InputMask
  mask={Number}
  maskOptions={{
    scale: 2,
    thousandsSeparator: ",",
    radix: ".",
    mapToRadix: ["."],
    min: 0,
    max: 999999,
  }}
  placeholder="0.00"
/>
```

### With Custom Styling

```tsx
<InputMask
  mask="(000) 000-0000"
  className="my-input-class"
  style={{ padding: "8px", border: "1px solid #ccc" }}
/>
```

## API

### Props

All standard HTML input props are supported, plus the following:

| Prop           | Type                             | Required | Description                                                                                              |
| -------------- | -------------------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| `mask`         | `MaskType`                       | Yes      | Mask pattern or configuration. Can be a string, RegExp, Date, Number, function, or array of mask objects |
| `maskOptions`  | `InputMaskOptions`               | No       | Additional IMask configuration options                                                                   |
| `definitions`  | `object`                         | No       | Custom character definitions (e.g., `{ 'A': /[A-Z]/ }`)                                                  |
| `onChange`     | `(event: OnChangeEvent) => void` | No       | Change handler with extended event object                                                                |
| `value`        | `string`                         | No       | Controlled component value                                                                               |
| `defaultValue` | `string`                         | No       | Default value for uncontrolled usage                                                                     |

### Types

#### OnChangeEvent

The extended onChange event includes:

```tsx
interface OnChangeEvent {
  target: HTMLInputElement;
  maskedValue: string; // Formatted value with mask
  unmaskedValue: string; // Raw value without mask
  // ... standard event properties
}
```

#### MaskType

```tsx
type MaskType =
  | string
  | RegExp
  | typeof Number
  | typeof Date
  | ((value: string) => string)
  | Array<{ mask: string | RegExp /* other options */ }>;
```

## Advanced Usage

### Custom Definitions

Define custom placeholder characters:

```tsx
<InputMask
  mask="00/00/0000"
  definitions={{
    "0": /[0-9]/, // Digit
    A: /[A-Z]/, // Uppercase letter
    a: /[a-z]/, // Lowercase letter
    "*": /[A-Za-z0-9]/, // Alphanumeric
  }}
/>
```

### With Form Libraries

#### React Hook Form

```tsx
import { useForm, Controller } from "react-hook-form";
import { InputMask } from "mfk-mask-input";

function FormExample() {
  const { control } = useForm();

  return (
    <Controller
      name="phone"
      control={control}
      render={({ field }) => (
        <InputMask
          mask="(000) 000-0000"
          {...field}
          onChange={(e) => field.onChange(e.maskedValue)}
        />
      )}
    />
  );
}
```

#### Formik

```tsx
import { Formik, Field } from "formik";
import { InputMask } from "mfk-mask-input";

function FormikExample() {
  return (
    <Formik initialValues={{ phone: "" }}>
      {({ setFieldValue }) => (
        <Field name="phone">
          {({ field }) => (
            <InputMask
              mask="(000) 000-0000"
              value={field.value}
              onChange={(e) => setFieldValue("phone", e.maskedValue)}
            />
          )}
        </Field>
      )}
    </Formik>
  );
}
```

## IMask Documentation

For complete IMask options and patterns, see the [official IMask documentation](https://imask.js.org/guide.html).

## TypeScript

This package includes TypeScript definitions. Import types as needed:

```tsx
import type {
  MaskedInputProps,
  OnChangeEvent,
  InputMaskOptions,
} from "mfk-mask-input";
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

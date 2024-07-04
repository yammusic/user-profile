import type { InputProps } from '../../common/input'

export interface TextFieldProps extends Omit<InputProps, 'error'> {
  error?: string
  helperText?: string
}

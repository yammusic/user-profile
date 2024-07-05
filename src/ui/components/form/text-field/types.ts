import type { InputProps } from '../../common/input'

export interface TextFieldProps extends Omit<InputProps, 'error'> {
  dark?: boolean
  error?: string
  helperText?: string
}

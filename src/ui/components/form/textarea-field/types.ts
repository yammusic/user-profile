import type { TextareaProps } from '../../common/textarea'

export interface TextareaFieldProps extends Omit<TextareaProps, 'error'> {
  error?: string
  helperText?: string
}

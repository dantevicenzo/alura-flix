import TextField, { TextFieldProps } from '@mui/material/TextField'
import { forwardRef } from 'react'

const textFieldSx = {
  backgroundColor: 'var(--color-gray-darker)',
  borderRadius: '6px',
  '& label.Mui-focused': {
    color: 'var(--color-gray-medium)', // Manter a cor da label ao focar
  },
}

const inputPropsSx = {
  sx: {
    color: 'var(--color-white)', // Cor do texto digitado
  },
}

const inputLabelPropsSx = {
  sx: {
    color: 'var(--color-gray-medium)',
  },
}

export const InputText = forwardRef<HTMLInputElement, TextFieldProps>(
  function InputText({ ...props }, ref) {
    return (
      <TextField
        {...props}
        sx={textFieldSx}
        InputProps={inputPropsSx}
        InputLabelProps={inputLabelPropsSx}
        margin="normal"
        variant="filled"
        ref={ref}
      />
    )
  },
)

InputText.displayName = 'InputText'

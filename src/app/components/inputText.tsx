import TextField, { TextFieldProps } from '@mui/material/TextField'

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

export const InputText = ({ ...props }: TextFieldProps) => {
  return (
    <TextField
      {...props}
      sx={textFieldSx}
      InputProps={inputPropsSx}
      InputLabelProps={inputLabelPropsSx}
      margin="normal"
      variant="filled"
    />
  )
}

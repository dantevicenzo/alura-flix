import { MuiColorInput, MuiColorInputProps } from 'mui-color-input'

const inputColorSx = {
  backgroundColor: 'var(--color-gray-darker)',
  borderRadius: '6px',
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

export const InputColor = ({ ...props }: MuiColorInputProps) => {
  return (
    <MuiColorInput
      {...props}
      style={inputColorSx}
      InputLabelProps={inputLabelPropsSx}
      InputProps={inputPropsSx}
      fullWidth
      margin="normal"
    />
  )
}

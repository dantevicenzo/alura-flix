import { MuiColorInput, MuiColorInputProps } from 'mui-color-input'
import { forwardRef } from 'react'

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

export const InputColor = forwardRef<HTMLInputElement, MuiColorInputProps>(
  function InputColor({ ...props }, ref) {
    return (
      <MuiColorInput
        {...props}
        style={inputColorSx}
        InputLabelProps={inputLabelPropsSx}
        InputProps={inputPropsSx}
        fullWidth
        margin="normal"
        ref={ref}
      />
    )
  },
)

InputColor.displayName = 'InputColor'

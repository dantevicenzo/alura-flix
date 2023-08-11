import InputLabel from '@mui/material/InputLabel'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import FormControl, { FormControlProps } from '@mui/material/FormControl'
import Select, { SelectProps } from '@mui/material/Select'
import { FormHelperText } from '@mui/material'
import { forwardRef } from 'react'

const selectFieldSx = {
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

const inputLabelSx = {
  color: 'var(--color-gray-medium)',
}

interface IInputSelectProps extends SelectProps {
  formControlProps: FormControlProps
  menuItems: MenuItemProps[]
  helperText?: string
}

export const InputSelect = forwardRef<HTMLInputElement, IInputSelectProps>(
  function InputSelect(
    { id, label, labelId, formControlProps, menuItems, helperText, ...props },
    ref,
  ) {
    return (
      <FormControl
        variant="filled"
        sx={selectFieldSx}
        margin="normal"
        {...formControlProps}
      >
        <InputLabel id={labelId} sx={inputLabelSx}>
          {label}
        </InputLabel>
        <Select
          {...props}
          labelId={labelId}
          id={id}
          inputProps={inputPropsSx}
          ref={ref}
          defaultValue=""
        >
          {menuItems.map((menuItem) =>
            menuItem.value === '' ? (
              <MenuItem key="selectDefaultValue" value="">
                <em>Selecione...</em>
              </MenuItem>
            ) : (
              <MenuItem key={`${menuItem.value}`} {...menuItem} />
            ),
          )}
        </Select>
        {helperText && <FormHelperText error>{helperText}</FormHelperText>}
      </FormControl>
    )
  },
)

InputSelect.displayName = 'InputSelect'

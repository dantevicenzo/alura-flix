import InputLabel from '@mui/material/InputLabel'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import FormControl, { FormControlProps } from '@mui/material/FormControl'
import Select, { SelectProps } from '@mui/material/Select'

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
}

export const InputSelect = ({
  id,
  label,
  labelId,
  formControlProps,
  menuItems,
  ...props
}: IInputSelectProps) => {
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
      <Select labelId={labelId} id={id} inputProps={inputPropsSx} {...props}>
        {menuItems.map((menuItem) => (
          <MenuItem key={`${menuItem.value}`} {...menuItem} />
        ))}
      </Select>
    </FormControl>
  )
}

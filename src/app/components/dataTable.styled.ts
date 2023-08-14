import Table from '@mui/material/Table'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'

export const StyledTable = styled(Table)(() => ({
  borderCollapse: 'separate', // Evita que as bordas laterais fiquem tracejadas
  border: '3px solid var(--color-primary)',
  '@media (max-width: 960px)': {
    display: 'none',
  },
}))

export const StyledHeadTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'var(--color-black-dark)',
    color: 'var(--color-gray-light)',
    fontSize: 27,
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: 'var(--color-black-dark)',
    color: 'var(--color-gray-light)',
    fontSize: 18,
  },
  '&:not(:last-child)': {
    borderRight: '3px solid var(--color-primary)',
  },
  borderBottom: '3px solid var(--color-primary)',
}))

export const StyledBodyTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'var(--color-black-dark)',
    color: 'var(--color-gray-light)',
    fontSize: 35,
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: 'var(--color-black-dark)',
    color: 'var(--color-gray-light)',
    fontSize: 27,
  },
  '&:not(:last-child)': {
    borderRight: '3px solid var(--color-black-dark)',
  },
  svg: {
    cursor: 'pointer',
  },
}))

export const StyledHeadTableRow = styled(TableRow)(() => ({
  border: '3px solid var(--color-primary)',
}))

export const StyledBodyTableRow = styled(TableRow)(() => ({
  '&:not(:last-child) td, &:not(:last-child) th': {
    borderBottom: '3px solid var(--color-black-dark)', // Borda inferior preta entre as linhas
  },
  '&:last-child td, &:last-child th': {
    borderBottom: 0,
  },
}))

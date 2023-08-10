import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

function createData(
  nome: string,
  descricao: string,
  editar: string,
  remover: string,
) {
  return { nome, descricao, editar, remover }
}

const rows = [
  createData(
    'Back End',
    'Todos os vídeo que estou usando para estudar Back End',
    'Editar',
    'Remover',
  ),
  createData(
    'Mobile',
    'Conteúdo que venho estudando sobre React Native e Flutter',
    'Editar',
    'Remover',
  ),
  createData(
    'Infraestrutura',
    'Tudo que estou aprendendo sobre Docker e muito mais',
    'Editar',
    'Remover',
  ),
  createData(
    'Data Science',
    'Coisas de R e Python que venho aprendendo',
    'Editar',
    'Remover',
  ),
  createData(
    'Design & UX',
    'Ferramentas e técnicas que estudo sobre UX e Design',
    'Editar',
    'Remover',
  ),
  createData(
    'Marketing Digital',
    'A forma de vender a monetizar minhas ideias',
    'Editar',
    'Remover',
  ),
  createData(
    'Inovação & Gestão',
    'Como manter o time feliz e muito mais',
    'Editar',
    'Remover',
  ),
]

const StyledTable = styled(Table)(() => ({
  borderCollapse: 'separate', // Evita que as bordas laterais fiquem tracejadas
  border: '3px solid var(--color-primary)',
}))

const StyledHeadTableCell = styled(TableCell)(() => ({
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
    borderRight: '3px solid var(--color-primary)',
  },
  borderBottom: '3px solid var(--color-primary)',
}))

const StyledBodyTableCell = styled(TableCell)(() => ({
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
}))

const StyledHeadTableRow = styled(TableRow)(() => ({
  border: '3px solid var(--color-primary)',
}))

const StyledBodyTableRow = styled(TableRow)(() => ({
  '&:not(:last-child) td, &:not(:last-child) th': {
    borderBottom: '3px solid var(--color-black-dark)', // Borda inferior preta entre as linhas
  },
  '&:last-child td, &:last-child th': {
    borderBottom: 0,
  },
}))

export const DataTable = () => {
  return (
    <TableContainer component={Paper}>
      <StyledTable
        sx={{
          minWidth: 700,
        }}
      >
        <TableHead>
          <StyledHeadTableRow>
            <StyledHeadTableCell align="left">Nome</StyledHeadTableCell>
            <StyledHeadTableCell align="left">Descrição</StyledHeadTableCell>
            <StyledHeadTableCell align="center">Editar</StyledHeadTableCell>
            <StyledHeadTableCell align="center">Remover</StyledHeadTableCell>
          </StyledHeadTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledBodyTableRow key={row.nome}>
              <StyledBodyTableCell align="left" component="th" scope="row">
                {row.nome}
              </StyledBodyTableCell>
              <StyledBodyTableCell align="left">
                {row.descricao}
              </StyledBodyTableCell>
              <StyledBodyTableCell align="center">
                {row.editar}
              </StyledBodyTableCell>
              <StyledBodyTableCell align="center">
                {row.remover}
              </StyledBodyTableCell>
            </StyledBodyTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}

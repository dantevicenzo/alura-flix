'use client'

import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import Paper from '@mui/material/Paper'

import { useContext } from 'react'
import { VideosContext } from '../contexts/VideosContextProvider'
import Link from 'next/link'
import { PencilLine, Trash } from '@phosphor-icons/react'
import {
  StyledBodyTableCell,
  StyledBodyTableRow,
  StyledHeadTableCell,
  StyledHeadTableRow,
  StyledTable,
} from './dataTable.styled'

export const DataTable = () => {
  const { categoriesList, removeCategory } = useContext(VideosContext)

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
          {categoriesList.map((row) => (
            <StyledBodyTableRow key={row.name}>
              <StyledBodyTableCell align="left" component="th" scope="row">
                {row.name}
              </StyledBodyTableCell>
              <StyledBodyTableCell align="left">
                {row.description}
              </StyledBodyTableCell>
              <StyledBodyTableCell align="center">
                <Link href={`/editar-categoria/${row.id}`}>
                  <PencilLine size={24} weight="bold" />
                </Link>
              </StyledBodyTableCell>
              <StyledBodyTableCell align="center">
                <Trash
                  size={24}
                  weight="bold"
                  onClick={() => removeCategory(row)}
                />
              </StyledBodyTableCell>
            </StyledBodyTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}

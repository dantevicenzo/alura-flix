'use client'

import { useState } from 'react'
import { Button } from '../components/button'
import { InputColor } from '../components/inputColor'
import { InputText } from '../components/inputText'
import styles from './page.module.css'
import { DataTable } from '../components/dataTable'

const AdicionarCategoria = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')

  const handleColorChange = (newColor: string) => {
    setColor(newColor)
  }

  return (
    <main className={styles.main}>
      <h1>Nova categoria</h1>
      <InputText id="nome" label="Nome" fullWidth />
      <InputText
        id="descricao"
        label="Descrição"
        multiline
        minRows={4}
        fullWidth
      />
      <InputColor value={color} onChange={handleColorChange} />
      <InputText
        id="codigo-de-seguranca"
        label="Código de segurança"
        fullWidth
      />
      <div className={styles['button-container']}>
        <Button variantColor="blue" variantSize="sm">
          Salvar
        </Button>
        <Button variantColor="gray" variantSize="sm">
          Limpar
        </Button>
      </div>
      <DataTable />
    </main>
  )
}

export default AdicionarCategoria

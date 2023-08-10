import styles from './page.module.css'
import { InputText } from '../components/inputText'
import { InputSelect } from '../components/inputSelect'
import { Button } from '../components/button'
import Link from 'next/link'

const AdicionarVideo = () => {
  return (
    <main className={styles.main}>
      <h1>Novo vídeo</h1>
      <InputText id="titulo" label="Título" fullWidth />
      <InputText id="link-video" label="Link do vídeo" fullWidth />
      <InputText id="link-imagem" label="Link da imagem do vídeo" fullWidth />
      <InputSelect
        id="categoria"
        label="Escolha uma categoria"
        labelId="categoria-label"
        formControlProps={{ fullWidth: true }}
        menuItems={[
          { value: '', children: <em>Selecione...</em> },
          { value: 'Categoria 1', children: 'Categoria 1' },
          { value: 'Categoria 2', children: 'Categoria 2' },
          { value: 'Categoria 3', children: 'Categoria 3' },
        ]}
      />
      <InputText
        id="descricao"
        label="Descrição"
        multiline
        minRows={4}
        fullWidth
      />
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
        <Link href="/adicionar-categoria">
          <Button variantColor="blue" variantSize="md">
            Nova Categoria
          </Button>
        </Link>
      </div>
    </main>
  )
}

export default AdicionarVideo

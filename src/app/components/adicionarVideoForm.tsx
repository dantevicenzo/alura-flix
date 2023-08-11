'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { InputText } from './inputText'
import { InputSelect } from './inputSelect'
import { Button } from './button'
import Link from 'next/link'

import styles from './adicionarVideoFrom.module.css'

const CATEGORIAS = [
  '',
  'Back End',
  'Mobile',
  'Infraestrutura',
  'Data Science',
  'Design & UX',
  'Marketing Digital',
  'Inovação & Gestão',
] as const

const adicionarVideoFormValidationSchema = z.object({
  titulo: z.string().nonempty({
    message: 'O campo título é obrigatório.',
  }),
  linkDoVideo: z
    .string()
    .nonempty({
      message: 'O campo link do vídeo é obrigatório.',
    })
    .url({
      message: 'Insira um link válido.',
    }),
  linkDaImagem: z
    .string()
    .nonempty({
      message: 'O campo link da imagem é obrigatório.',
    })
    .url({
      message: 'Insira um link válido.',
    }),
  categoria: z
    .enum(CATEGORIAS, {
      required_error: 'O campo categoria é obrigatório.',
    })
    .refine((value) => value !== '', {
      message: 'O campo categoria é obrigatório.',
    }),
  descricao: z.string().nonempty({
    message: 'O campo descrição é obrigatório.',
  }),
  codigoDeSeguranca: z.string().nonempty({
    message: 'O campo código de segurança é obrigatório.',
  }),
})

type TAdicionarVideoFormData = z.infer<
  typeof adicionarVideoFormValidationSchema
>

export const AdicionarVideoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAdicionarVideoFormData>({
    defaultValues: {
      titulo: '',
      linkDoVideo: '',
      linkDaImagem: '',
      categoria: '',
      descricao: '',
      codigoDeSeguranca: '',
    },
    resolver: zodResolver(adicionarVideoFormValidationSchema),
    mode: 'onBlur',
  })

  function onSubmit(formData: TAdicionarVideoFormData) {
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>Novo vídeo</h1>
      <InputText
        {...register('titulo')}
        required
        id="titulo"
        label="Título"
        fullWidth
        error={!!errors.titulo}
        helperText={errors.titulo ? errors.titulo.message : undefined}
      />
      <InputText
        {...register('linkDoVideo')}
        required
        id="link-video"
        label="Link do vídeo"
        fullWidth
        error={!!errors.linkDoVideo}
        helperText={errors.linkDoVideo ? errors.linkDoVideo.message : undefined}
      />
      <InputText
        {...register('linkDaImagem')}
        required
        id="link-imagem"
        label="Link da imagem do vídeo"
        fullWidth
        error={!!errors.linkDaImagem}
        helperText={
          errors.linkDaImagem ? errors.linkDaImagem.message : undefined
        }
      />
      <InputSelect
        {...register('categoria')}
        required
        id="categoria"
        label="Escolha uma categoria"
        labelId="categoria-label"
        formControlProps={{ fullWidth: true }}
        menuItems={CATEGORIAS.map((categoria) => {
          return { value: categoria, children: categoria }
        })}
        error={!!errors.categoria}
        helperText={errors.categoria ? errors.categoria.message : undefined}
      />
      <InputText
        {...register('descricao')}
        required
        id="descricao"
        label="Descrição"
        multiline
        minRows={4}
        fullWidth
        error={!!errors.descricao}
        helperText={errors.descricao ? errors.descricao.message : undefined}
      />
      <InputText
        {...register('codigoDeSeguranca')}
        required
        id="codigo-de-seguranca"
        label="Código de segurança"
        fullWidth
        error={!!errors.codigoDeSeguranca}
        helperText={
          errors.codigoDeSeguranca
            ? errors.codigoDeSeguranca.message
            : undefined
        }
      />
      <div className={styles['button-container']}>
        <Button variantColor="blue" variantSize="sm" type="submit">
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
    </form>
  )
}
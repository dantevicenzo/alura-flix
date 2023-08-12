'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { InputText } from './inputText'
import { InputSelect } from './inputSelect'
import { Button } from './button'
import Link from 'next/link'

import styles from './adicionarVideoFrom.module.css'
import { useContext } from 'react'
import { VideosContext } from '../contexts/VideosContextProvider'
import { IVideo } from '../db'

interface IFormVideoProps {
  onSubmitAction: (video: IVideo) => void
}

export const FormVideo = ({ onSubmitAction }: IFormVideoProps) => {
  const { categoriesList } = useContext(VideosContext)

  const CATEGORIAS = [
    '',
    ...categoriesList.map((category) => category.name),
  ] as const

  const formVideoValidationSchema = z.object({
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

  type TFormVideoData = z.infer<typeof formVideoValidationSchema>

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormVideoData>({
    defaultValues: {
      titulo: '',
      linkDoVideo: '',
      linkDaImagem: '',
      categoria: '',
      descricao: '',
      codigoDeSeguranca: '',
    },
    resolver: zodResolver(formVideoValidationSchema),
    mode: 'onBlur',
  })

  function onSubmit(formData: TFormVideoData) {
    onSubmitAction({
      category: formData.categoria,
      description: formData.descricao,
      imageUrl: formData.linkDaImagem,
      title: formData.titulo,
      videoUrl: formData.linkDoVideo,
    })
    reset()
  }

  function handleResetForm() {
    reset()
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
        <Button variantColor="gray" variantSize="sm" onClick={handleResetForm}>
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

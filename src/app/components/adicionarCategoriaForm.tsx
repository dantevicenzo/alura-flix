'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { matchIsValidColor } from 'mui-color-input'
import { InputText } from './inputText'
import { InputColor } from './inputColor'
import { Button } from './button'

import styles from './adicionarCategoriaForm.module.css'
import { useContext } from 'react'
import { VideosContext } from '../contexts/VideosContextProvider'

const adicionarCategoriaFormValidationSchema = z.object({
  nome: z.string().nonempty({
    message: 'O campo nome é obrigatório.',
  }),
  descricao: z.string().nonempty({
    message: 'O campo descrição é obrigatório.',
  }),
  cor: z.string().nonempty({
    message: 'O campo cor é obrigatório.',
  }),
  codigoDeSeguranca: z.string().nonempty({
    message: 'O campo código de segurança é obrigatório.',
  }),
})

type TAdicionarCategoriaFormData = z.infer<
  typeof adicionarCategoriaFormValidationSchema
>

export const AdicionarCategoriaForm = () => {
  const { addCategory } = useContext(VideosContext)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAdicionarCategoriaFormData>({
    defaultValues: {
      nome: '',
      descricao: '',
      cor: 'rgb(255, 255, 255)',
      codigoDeSeguranca: '',
    },
    resolver: zodResolver(adicionarCategoriaFormValidationSchema),
    mode: 'onBlur',
  })

  function onSubmit(formData: TAdicionarCategoriaFormData) {
    addCategory({
      description: formData.descricao,
      name: formData.descricao,
      rgbColor: formData.cor,
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>Nova categoria</h1>
      <InputText
        {...register('nome')}
        required
        id="nome"
        label="Nome"
        fullWidth
        error={!!errors.nome}
        helperText={errors.nome ? errors.nome.message : undefined}
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
      <Controller
        name="cor"
        control={control}
        rules={{ validate: matchIsValidColor }}
        render={({ field }) => (
          <InputColor
            {...field}
            id="cor"
            format="rgb"
            error={!!errors.cor}
            helperText={errors.cor ? errors.cor.message : undefined}
          />
        )}
      />
      <InputText
        {...register('codigoDeSeguranca')}
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
      </div>
    </form>
  )
}

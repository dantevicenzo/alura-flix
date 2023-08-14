'use client'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { matchIsValidColor } from 'mui-color-input'
import { InputText } from './inputText'
import { InputColor } from './inputColor'
import { Button } from './button'
import { ICategory } from '../db'
import { v4 as uuidv4 } from 'uuid'

import styles from './formCategory.module.css'
import { useEffect } from 'react'

const formCategoryValidationSchema = z.object({
  nome: z.string().nonempty({
    message: 'O campo nome é obrigatório.',
  }),
  descricao: z.string().nonempty({
    message: 'O campo descrição é obrigatório.',
  }),
  cor: z.string().nonempty({
    message: 'O campo cor é obrigatório.',
  }),
})

type TFormCategoryData = z.infer<typeof formCategoryValidationSchema>

interface IFormCategoryProps {
  values?: ICategory
  onSubmitAction: (category: ICategory) => void
}

export const FormCategory = ({
  values,
  onSubmitAction,
}: IFormCategoryProps) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<TFormCategoryData>({
    defaultValues: {
      nome: '',
      descricao: '',
      cor: 'rgb(0,0,0)',
    },
    resolver: zodResolver(formCategoryValidationSchema),
    mode: 'onBlur',
  })

  useEffect(() => {
    if (values) {
      setValue('nome', values.name)
      setValue('descricao', values.description)
      setValue('cor', values.rgbColor)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function onSubmit(formData: TFormCategoryData) {
    onSubmitAction({
      id: values ? values.id : uuidv4(),
      description: formData.descricao,
      name: formData.nome,
      rgbColor: formData.cor,
      isBanner: values ? values.isBanner : false,
    })
    handleResetForm()
  }

  function handleResetForm() {
    reset()
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
      <div className={styles['button-container']}>
        <Button variantColor="blue" variantSize="sm" type="submit">
          Salvar
        </Button>
        <Button
          variantColor="gray"
          variantSize="sm"
          type="button"
          onClick={handleResetForm}
        >
          Limpar
        </Button>
      </div>
    </form>
  )
}

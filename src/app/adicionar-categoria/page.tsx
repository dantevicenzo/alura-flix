'use client'

import { Button } from '../components/button'
import { InputColor } from '../components/inputColor'
import { InputText } from '../components/inputText'
import styles from './page.module.css'
import { DataTable } from '../components/dataTable'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { matchIsValidColor } from 'mui-color-input'

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

const AdicionarCategoria = () => {
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
    console.log(formData)
  }

  return (
    <main className={styles.main}>
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
      <DataTable />
    </main>
  )
}

export default AdicionarCategoria

export interface ICategory {
  id: string
  name: string
  description: string
  rgbColor: string
  isBanner: boolean
}

export const categories: ICategory[] = [
  {
    id: 'dc88cd2b-fa43-41cb-974e-457edf653e93',
    name: 'Front End',
    description: 'Vídeos sobre o universo do desenvolvimento Front End',
    rgbColor: 'rgb(107, 209, 255)',
    isBanner: true,
  },
  {
    id: '92f36d4f-b9c9-4b8e-ba66-ad971ecdd5bc',
    name: 'Back End',
    description: 'Todos os vídeos que estou usando para estudar Back End',
    rgbColor: 'rgb(105, 149, 59)',
    isBanner: false,
  },
  {
    id: 'f4fac350-6957-4c30-a731-25c8a3310650',
    name: 'Mobile',
    description: 'Conteúdo que venho estudando sobre React Native e Flutter',
    rgbColor: 'rgb(255, 186, 5)',
    isBanner: false,
  },
  {
    id: '932ba850-cd7b-4324-9b85-4cdebd080acc',
    name: 'Infraestrutura',
    description: 'Tudo que estou aprendendo sobre Docker e muito mais',
    rgbColor: 'rgb(156, 211, 59)',
    isBanner: false,
  },
  {
    id: '98cab652-f052-47f1-8153-9adb3893849d',
    name: 'Data Science',
    description: 'Coisas de R e Python que venho aprendendo',
    rgbColor: 'rgb(156, 211, 59)',
    isBanner: false,
  },
  {
    id: 'c1e3f0f4-859c-4fea-8f49-fe6eb82b0844',
    name: 'Design & UX',
    description: 'Ferramentas e técnicas que estudo sobre UX e Design',
    rgbColor: 'rgb(220, 110, 190)',
    isBanner: false,
  },
  {
    id: '81752adb-6db4-4485-abbd-6588893aa8ea',
    name: 'Marketing Digital',
    description: 'A forma de vender a monetizar minhas ideias',
    rgbColor: 'rgb(107, 91, 226)',
    isBanner: false,
  },
  {
    id: '14153c2f-e73e-4302-85e2-a1f986a6d647',
    name: 'Inovação & Gestão',
    description: 'Como manter o time feliz e muito mais',
    rgbColor: 'rgb(255, 140, 42)',
    isBanner: false,
  },
]

export interface IVideo {
  title: string
  videoUrl: string
  imageUrl: string
  category: string
  description: string
}

export const videos: IVideo[] = [
  // Front End
  {
    title:
      'O que é TRANSFORMAÇÃO DIGITAL? com Paulo Silveira | #HipstersPontoTube',
    videoUrl: 'https://www.youtube.com/watch?v=Z-N5Fr9P-GU',
    imageUrl: 'https://img.youtube.com/vi/Z-N5Fr9P-GU/maxresdefault.jpg',
    category: 'Front End',
    description:
      'Entenda o que é Transformação Digital, quais os caminhos a se evitar e qual deve ser o seu objetivo para começar a fazer uma transformação digital na sua empresa.',
  },
  {
    title: 'O que é React JS? #HipstersPontoTube',
    videoUrl: 'https://www.youtube.com/watch?v=6IuQUgeDPg0',
    imageUrl: 'https://img.youtube.com/vi/6IuQUgeDPg0/maxresdefault.jpg',
    category: 'Front End',
    description:
      'Afinal, o que é React JS? Neste vídeo, Vanessa Tonini e Mario Souto explicam isto para você falando sobre como esta ferramenta surgiu, para que ela serve, quais são suas aplicações e relação com outras ferramentas e como começar a trabalhar com ele.',
  },
  {
    title: 'Como deixar o Layout Responsivo no seu site | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=kyFiT4ofMwk',
    imageUrl: 'https://img.youtube.com/vi/kyFiT4ofMwk/maxresdefault.jpg',
    category: 'Front End',
    description:
      'Aprenda responsividade na prática com este tutorial sobre como transformar seu site num layout responsivo através do uso de ferramentas de desenvolvedor do seu navegador, o visual studio code e códigos CSS: media screen, container, propriedades CSS e mais.',
  },
  {
    title: 'Ciclo de vida de componentes React.js | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=jK0uiQ1ZQQQ',
    imageUrl: 'https://img.youtube.com/vi/jK0uiQ1ZQQQ/maxresdefault.jpg',
    category: 'Front End',
    description:
      'Aprenda o que é o ciclo de vida de um componente React.js e como usar no desenvolvimento de projetos.',
  },
  {
    title: 'Hook useCallback x useMemo: performance no React | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=VVmGrEZoBvM',
    imageUrl: 'https://img.youtube.com/vi/VVmGrEZoBvM/maxresdefault.jpg',
    category: 'Front End',
    description:
      'Através dos hooks useCallback e useMemo, aprenda quando e como otimizar a performance do seu código React JS, através da melhoria na renderização do componente analisado.',
  },
  {
    title:
      'Functions (Funções) EXPRESSION vs DECLARATION no JavaScript | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=scAYB-1ODGk',
    imageUrl: 'https://img.youtube.com/vi/scAYB-1ODGk/maxresdefault.jpg',
    category: 'Front End',
    description:
      'Com o Javascript aprenda o que é Function Expression e Function Declaration, quais as suas diferenças no código (olhando para escopo e protótipos de funções) e a importância de conhecer o Hoisting com JS.',
  },
  {
    title: 'Primeiros passos Next.js | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=slmtdlWNwcE',
    imageUrl: 'https://img.youtube.com/vi/slmtdlWNwcE/maxresdefault.jpg',
    category: 'Front End',
    description:
      'A Vanessa Tonini, Instrutora daqui na Alura,  apresenta o framework NextJS, seu propósito e recursos. Além disso, vemos rapidamente como criar um projeto NextJS, subir no Github e publicar na Vercel. Curtiu? Então, vem com a gente! 😉',
  },
  // Data Science
  {
    title: 'Trabalhando com arquivos no Google Colab | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=ojgvdqexJ0Q',
    imageUrl: 'https://img.youtube.com/vi/ojgvdqexJ0Q/maxresdefault.jpg',
    category: 'Data Science',
    description:
      'Neste vídeo, o Pedro Henrique, Instrutor aqui na Alura, vai ensinar você a usar arquivos corretamente no Google Collab. Vem mergulhar com a gente?',
  },
  {
    title: 'Big Data com Apache Spark | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=3aSfKsBhU5E',
    imageUrl: 'https://img.youtube.com/vi/3aSfKsBhU5E/maxresdefault.jpg',
    category: 'Data Science',
    description:
      'O que é Apache Spark? Conheça essa tecnologia de Big Data a partir da evolução Hadoop vs. Spark e entenda como funciona sua lógica interna.',
  },
  {
    title: 'O que são Data Lakes? | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=GkhuRcHsVMk',
    imageUrl: 'https://img.youtube.com/vi/GkhuRcHsVMk/maxresdefault.jpg',
    category: 'Data Science',
    description:
      'O que são os Data Lake e qual sua relação com os Data Warehouse? Descubra as vantagens e desvantagens do uso de Data Lake, sua arquitetura e quais as principais ferramentas como Hadoop, Spark, Kafka, Tableau, Power BI ou Amazon.',
  },
  {
    title: 'Apache Spark: Datasets com Java | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=KADh1Rq725o',
    imageUrl: 'https://img.youtube.com/vi/KADh1Rq725o/maxresdefault.jpg',
    category: 'Data Science',
    description:
      'Aprenda Spark utilizando a linguagem de programação Java e o banco de dados MongoDB, além disso, entenda o que é Spark e Hadoop e quais as suas diferenças.',
  },
  // Mobile
  {
    title: 'ConstraintLayout no Android | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=p4fiAiiPi3E',
    imageUrl: 'https://img.youtube.com/vi/p4fiAiiPi3E/maxresdefault.jpg',
    category: 'Mobile',
    description:
      'Neste #AluraMais, aJeniffer Bittencourt, Instrutora na Escola Mobile da Alura, vai mostrar algumas formas implementar e otimizar a criação de layouts maiores e mais complexos utilizando o Constraint Layout.',
  },
  {
    title: 'Configurando o Compose em um projeto existente | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=atyPdd5XPcg',
    imageUrl: 'https://img.youtube.com/vi/atyPdd5XPcg/maxresdefault.jpg',
    category: 'Mobile',
    description:
      'Tutorial sobre como migrar uma tela com o Jetpack Compose, utilizando o Android Studio e a documentação do Google.',
  },
  {
    title: 'Atualizações do Logcat | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=ypvGqZGJBls',
    imageUrl: 'https://img.youtube.com/vi/ypvGqZGJBls/maxresdefault.jpg',
    category: 'Mobile',
    description:
      'Aprenda sobre o que mudou na janela de Logcat na nova versão do Android Studio, os menus, filtros básicos e avançados, comparativos de entre blocos de mensagem, visualização do status da aplicação e como favoritar suas funções de pesquisa preferidas para facilitar no desenvolvimento.',
  },
  {
    title: 'Como criar temas customizados no Flutter | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=sTnUwOVYZt0',
    imageUrl: 'https://img.youtube.com/vi/sTnUwOVYZt0/maxresdefault.jpg',
    category: 'Mobile',
    description:
      'Como utilizar Flutter Themes, customizar temas no seu aplicativo, usar cor primária e secundária, com o Dart.',
  },
  {
    title: 'Criando e visualizando logs no Android | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=412nsNqL8YE',
    imageUrl: 'https://img.youtube.com/vi/412nsNqL8YE/maxresdefault.jpg',
    category: 'Mobile',
    description:
      'Vem com a gente conhecer mais sobre uma ferramenta muito interessante do Android: o Log.',
  },
  {
    title:
      'Logs no Android: boas práticas para otimização e aplicação | #AluraMais',
    videoUrl: 'https://www.youtube.com/watch?v=viRW15_qUZw',
    imageUrl: 'https://img.youtube.com/vi/viRW15_qUZw/maxresdefault.jpg',
    category: 'Mobile',
    description:
      'Neste Alura+, vamos conhecer algumas dicas e boas práticas que podem ajudar você na utilização de logs e otimizar o seu dia a dia como dev de app.',
  },
]

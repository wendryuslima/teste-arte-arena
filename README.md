# Arte Arena

Sistema de gestão financeira pessoal desenvolvido para ajudar no controle de receitas, despesas e investimentos. A aplicação oferece um dashboard completo com visualizações gráficas e uma interface intuitiva para gerenciar transações financeiras.

## Configuração do Ambiente

### Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js versão 18 ou superior
- npm ou yarn como gerenciador de pacotes

### Instalação

1. Clone o repositório do projeto:

```bash
git clone https://github.com/wendryuslima/teste-arte-arena
```

2. Instale as dependências do projeto executando:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000)

A aplicação estará rodando e você poderá ver as mudanças em tempo real conforme edita os arquivos.

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma versão otimizada para produção
- `npm run start` - Inicia o servidor de produção após o build
- `npm run lint` - Executa o linter para verificar problemas no código
- `npm run format` - Formata o código usando Prettier
- `npm run format:check` - Verifica se o código está formatado corretamente

## Arquitetura e Organização do Projeto

### Estrutura de Pastas

O projeto segue uma organização clara que facilita a manutenção e o crescimento do código:

```
app/
├── _components/          Componentes reutilizáveis da aplicação
│   ├── forms/           Formulários específicos
│   └── ui/              Componentes de interface base (shadcn/ui)
├── _contexts/            Contextos React para gerenciamento de estado
├── _data/                Dados mockados para desenvolvimento
├── _hooks/               Hooks customizados do React
├── _lib/                 Utilitários e serviços
│   ├── constants/       Constantes da aplicação
│   ├── services/        Lógica de negócio e processamento de dados
│   ├── utils/           Funções auxiliares
│   └── validations/     Schemas de validação com Zod
├── _types/               Definições de tipos TypeScript
├── transactions/         Páginas e componentes relacionados a transações
│   └── _components/     Componentes específicos da página de transações
├── layout.tsx            Layout principal da aplicação
├── page.tsx              Página inicial (Dashboard)
└── globals.css           Estilos globais
```

A convenção de usar o prefixo underscore (\_) nas pastas indica que são módulos internos da aplicação, não rotas acessíveis diretamente pela URL.

### Arquitetura

A aplicação foi construída usando Next.js 14 com App Router, que oferece uma experiência moderna de desenvolvimento com suporte a Server Components e Client Components. Isso permite otimizar o desempenho separando o que precisa ser renderizado no servidor do que precisa de interatividade no cliente.

A escolha pelo App Router em vez do Pages Router tradicional traz benefícios como melhor organização de código, suporte nativo a layouts aninhados e uma estrutura de roteamento mais intuitiva baseada na estrutura de pastas.

TypeScript foi adotado em todo o projeto para garantir type safety, melhorar a experiência de desenvolvimento com autocompletar e reduzir erros em tempo de execução. A configuração do TypeScript está ajustada para modo estrito, garantindo máxima segurança de tipos.

### Gerenciamento de Estado

O gerenciamento de estado é feito através do React Context API, uma solução nativa do React que se adequa perfeitamente ao escopo desta aplicação. O contexto de transações centraliza todas as operações relacionadas aos dados financeiros.

A persistência dos dados é realizada através do localStorage do navegador, permitindo que as informações sejam mantidas mesmo após o fechamento da aplicação. Quando a aplicação é carregada, os dados são recuperados do localStorage e, se não houver dados salvos, são utilizados dados mockados para demonstração.

As operações disponíveis no contexto incluem adicionar novas transações, atualizar transações existentes e excluir transações. Todas essas operações atualizam automaticamente o localStorage, garantindo sincronização entre o estado da aplicação e o armazenamento local.

Para cálculos e transformações de dados, como os utilizados no dashboard, foram criados hooks customizados que utilizam useMemo para otimizar o desempenho, recalculando apenas quando os dados de entrada mudam.

### Bibliotecas e Frameworks

**Next.js 14** foi escolhido como framework principal por oferecer renderização do lado do servidor, otimizações automáticas de imagens e código, e uma excelente experiência de desenvolvimento. O suporte a Server Components reduz a quantidade de JavaScript enviada ao cliente, melhorando o desempenho.

**React 18** fornece a base para a construção da interface, com recursos como hooks, contextos e componentes funcionais que tornam o código mais limpo e fácil de manter.

**TypeScript** garante que o código seja mais seguro e previsível, com verificação de tipos em tempo de compilação que previne muitos erros comuns.

**Tailwind CSS** é utilizado para estilização, permitindo criar interfaces modernas e responsivas de forma rápida. A abordagem utility-first do Tailwind acelera o desenvolvimento e mantém os estilos consistentes.

**shadcn/ui** fornece uma biblioteca de componentes de interface construída sobre Radix UI e Tailwind CSS. Os componentes são copiados diretamente para o projeto, permitindo total customização. Radix UI garante acessibilidade e comportamento correto dos componentes, enquanto o shadcn/ui oferece estilos bonitos e modernos.

**TanStack Table** (anteriormente React Table) é usado para construir a tabela de transações com recursos avançados como ordenação, filtragem, paginação e busca. A biblioteca oferece flexibilidade total para customizar a aparência e comportamento da tabela.

**React Hook Form** gerencia os formulários da aplicação de forma eficiente, reduzindo re-renderizações desnecessárias e oferecendo validação integrada. A biblioteca é leve e performática, ideal para formulários complexos.

**Zod** é utilizado para validação de dados tanto no frontend quanto para definir os tipos TypeScript. A integração com React Hook Form através do @hookform/resolvers permite validação robusta e type-safe dos formulários.

**Recharts** fornece os gráficos do dashboard, incluindo gráficos de pizza e barras. A biblioteca é flexível e oferece boa performance para visualizações de dados.

**date-fns** é usado para manipulação de datas, oferecendo funções simples e eficientes para formatar, comparar e manipular datas sem a complexidade de outras bibliotecas.

**Sonner** fornece notificações toast elegantes e não intrusivas para feedback ao usuário sobre ações realizadas.

**next-themes** permite implementar suporte a temas claro e escuro de forma simples, respeitando as preferências do sistema operacional do usuário.

**Lucide React** fornece ícones modernos e consistentes utilizados em toda a interface.

A combinação dessas bibliotecas cria uma base sólida para uma aplicação moderna, performática e fácil de manter, seguindo as melhores práticas da comunidade React e Next.js.

## Funcionalidades

### Dashboard

O dashboard oferece uma visão completa da situação financeira do usuário:

- **Card de Saldo**: Exibe o saldo total calculado a partir de todas as transações (receitas - despesas - investimentos)
- **Cards de Resumo**: Mostram totais separados por tipo (Receita, Despesas e Investimentos)
- **Gráfico de Pizza**: Visualização da distribuição percentual dos tipos de transação
- **Gastos por Categoria**: Lista detalhada mostrando o total gasto em cada categoria com barras de progresso
- **Filtro por Mês**: Permite visualizar dados de um mês específico através de um seletor

### Página de Transações

A página de transações oferece uma interface completa para gerenciar todas as transações financeiras:

- **Tabela Interativa**: Lista todas as transações com informações detalhadas (nome, tipo, categoria, valor, data, método de pagamento)
- **Busca**: Campo de busca para filtrar transações por nome
- **Filtros**: Filtros por tipo de transação (Receita, Despesa, Investimento) e por categoria
- **Ordenação**: Possibilidade de ordenar as colunas clicando nos cabeçalhos da tabela
- **Paginação**: Sistema de paginação para navegar entre as transações (10 itens por página)
- **Ações**: Botões para editar e excluir transações diretamente da tabela
- **Adicionar Transação**: Botão para criar novas transações através de um formulário modal

### Gerenciamento de Transações

- **Criar**: Formulário completo para adicionar novas transações com validação
- **Editar**: Edição de transações existentes mantendo os dados originais
- **Excluir**: Exclusão com confirmação para evitar remoções acidentais
- **Validação**: Validação robusta de formulários usando Zod e React Hook Form

### Fonte de Dados

A aplicação utiliza dados mockados armazenados localmente no arquivo `app/_data/mock-data.ts`. Esses dados são carregados automaticamente quando não há dados salvos no localStorage. Os dados são persistidos no localStorage do navegador, permitindo que as alterações sejam mantidas entre sessões.

## Responsividade

A aplicação foi desenvolvida com foco em responsividade, garantindo uma experiência excelente em todos os dispositivos:

- **Mobile First**: Design pensado primeiro para dispositivos móveis, com adaptação progressiva para telas maiores
- **Breakpoints Tailwind**: Utilização dos breakpoints padrão do Tailwind CSS (sm, md, lg) para ajustar o layout
- **Navegação Adaptativa**: Menu de navegação que se adapta ao tamanho da tela (vertical em mobile, horizontal em desktop)
- **Tabela Responsiva**: Tabela de transações com scroll horizontal em telas menores e layout otimizado
- **Grids Adaptativos**: Cards e gráficos que se reorganizam automaticamente (coluna única em mobile, múltiplas colunas em desktop)
- **Formulários Responsivos**: Diálogos e formulários que se ajustam ao tamanho da tela
- **Tipografia Escalável**: Tamanhos de fonte que se adaptam ao dispositivo

### Exemplos de Responsividade

- Dashboard: Grid de 1 coluna em mobile, 3 colunas em desktop para os cards de resumo
- Gráficos: Layout empilhado em mobile, lado a lado em desktop
- Tabela: Scroll horizontal em telas pequenas, layout completo em telas maiores
- Navegação: Layout vertical centralizado em mobile, horizontal em desktop
- Toolbar de Filtros: Elementos empilhados em mobile, em linha em desktop

## Qualidade de Código

O projeto segue boas práticas de desenvolvimento:

- **TypeScript Strict Mode**: Configuração rigorosa de tipos para máxima segurança
- **ESLint**: Linter configurado para manter padrões de código
- **Prettier**: Formatador automático para consistência de estilo
- **Componentização**: Componentes reutilizáveis com responsabilidade única
- **Hooks Customizados**: Lógica reutilizável extraída em hooks personalizados
- **Validação de Dados**: Schemas Zod para validação type-safe
- **Acessibilidade**: Atributos ARIA e semântica HTML adequada
- **Performance**: Uso de useMemo e useCallback para otimizações

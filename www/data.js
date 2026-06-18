const DATA = {
  courses: [
    {
      id:'logica', name:'Lógica de Programação', icon:'🧠', color:'#7c3aed',
      desc:'Base para qualquer linguagem: variável, condição, repetição, função e resolução de problemas.',
      modules:[{title:'Fundamentos reais',level:'Básico',lessons:[
        {
          id:'log-001', title:'Como pensar como programador', level:'Básico', minutes:18,
          objective:'Aprender a transformar um problema confuso em passos que o computador consegue executar.',
          explain:[
            'Programar não começa digitando código. Começa entendendo entrada, processamento e saída. Entrada é o dado que você recebe. Processamento é a regra. Saída é o resultado final.',
            'O computador não entende intenção. Ele só executa instruções claras. Por isso, antes do código, você precisa escrever o algoritmo em passos pequenos.',
            'Quando um exercício parece difícil, não tente resolver tudo de uma vez. Separe em partes: o que eu tenho, o que preciso calcular, qual condição muda o resultado e como vou mostrar isso.'
          ],
          mental:'Pense como receita: ingredientes = dados, modo de preparo = lógica, prato final = saída.',
          steps:['Leia o problema e marque os dados importantes.','Escreva a saída esperada em uma frase.','Crie passos em português antes do código.','Só depois transforme cada passo em comando.'],
          code:'Problema: calcular média de duas notas\n\nentrada: nota1, nota2\nprocessamento: media = (nota1 + nota2) / 2\nsaída: mostrar media\n\nse media >= 7:\n  mostrar "aprovado"\nsenão:\n  mostrar "recuperação"',
          lines:[['entrada','Dados que o programa precisa receber.'],['processamento','Conta ou regra usada para chegar ao resultado.'],['se/senão','Decisão: muda o caminho do programa conforme uma condição.']],
          checkpoints:['Sei separar entrada, processamento e saída.','Consigo escrever algoritmo sem linguagem específica.','Consigo explicar a regra antes do código.'],
          mistakes:['Começar pelo código sem entender o problema.','Misturar várias regras na mesma linha.','Não testar casos simples.'],
          practice:'Crie o algoritmo de um sistema que recebe idade e mostra se a pessoa pode tirar CNH.',
          starter:'// Escreva aqui em português estruturado:\n// Entrada:\n// Processamento:\n// Saída:',
          validator:{must:['entrada','processamento','saída'], tip:'Use as palavras entrada, processamento e saída para organizar seu raciocínio.'},
          quiz:{q:'Qual é a ordem mais segura para resolver um exercício?',options:['Copiar um código parecido','Entrada, processamento e saída','Testar qualquer comando até funcionar'],answer:1,why:'Essa ordem força você a entender o problema antes de escrever código.'}
        },
        {
          id:'log-002', title:'Variáveis sem decorar', level:'Básico', minutes:20,
          objective:'Entender variável como uma caixa com nome, tipo de dado e valor.',
          explain:['Variável guarda um valor para ser usado depois. O nome precisa explicar o que ela representa.','Uma boa variável reduz confusão. idade, precoTotal e nomeUsuario são melhores que x, a e teste.','O valor pode mudar durante o programa. Por isso ela se chama variável.'],
          mental:'Variável é uma etiqueta em uma caixa: você usa o nome para acessar o conteúdo.',
          steps:['Escolha um nome claro.','Coloque um valor inicial.','Use esse valor em uma conta, texto ou condição.','Altere só quando fizer sentido.'],
          code:'let idade = 16;\nlet podeEntrar = idade >= 18;\n\nconsole.log(podeEntrar); // false',
          lines:[['let idade = 16','Cria uma variável chamada idade com valor 16.'],['idade >= 18','Compara se idade é maior ou igual a 18.'],['console.log','Mostra o resultado no console.']],
          checkpoints:['Sei criar nomes claros.','Sei diferenciar texto, número e booleano.','Sei usar variável dentro de condição.'],
          mistakes:['Nome genérico demais.','Guardar número como texto sem necessidade.','Criar variável que nunca é usada.'],
          practice:'Crie variáveis nome, idade e cidade. Depois monte uma frase usando as três.',
          starter:'let nome = "";\nlet idade = 0;\nlet cidade = "";\n\n// monte a frase aqui',
          validator:{must:['let','nome','idade','cidade'], tip:'Crie as três variáveis pedidas usando let.'},
          quiz:{q:'Para que serve uma variável?',options:['Guardar e reutilizar um valor','Deixar a tela colorida','Criar um arquivo APK'],answer:0,why:'Variáveis armazenam valores que o programa usa durante a execução.'}
        },
        {
          id:'log-003', title:'Condições: if, else e decisão', level:'Básico', minutes:22,
          objective:'Usar condições para fazer o programa escolher caminhos diferentes.',
          explain:['Condição é uma pergunta que só pode dar verdadeiro ou falso. Exemplo: idade >= 18.','if executa um bloco quando a pergunta é verdadeira. else executa quando é falsa.','O segredo é escrever a condição como frase: “se a média for maior ou igual a 7, aprova”.'],
          mental:'Condição é uma bifurcação: dependendo da resposta, o programa entra em um caminho.',
          steps:['Escreva a regra em português.','Transforme a regra em comparação.','Coloque o resultado verdadeiro no if.','Coloque alternativa no else.'],
          code:'let media = 6.5;\n\nif (media >= 7) {\n  console.log("Aprovado");\n} else {\n  console.log("Recuperação");\n}',
          lines:[['media >= 7','Pergunta lógica: a média é pelo menos 7?'],['if','Executa quando a pergunta é verdadeira.'],['else','Executa quando a pergunta é falsa.']],
          checkpoints:['Consigo criar comparação.','Sei quando usar else.','Consigo testar valores diferentes.'],
          mistakes:['Usar = no lugar de comparação.','Criar condição impossível.','Esquecer chaves em blocos maiores.'],
          practice:'Crie um programa que recebe saldo e preço. Se saldo for suficiente, mostre “compra aprovada”; senão, “saldo insuficiente”.',
          starter:'let saldo = 50;\nlet preco = 70;\n\nif () {\n  console.log("");\n} else {\n  console.log("");\n}',
          validator:{must:['if','else','saldo','preco','>='], tip:'Compare saldo com preço usando >=.'},
          quiz:{q:'O que o else faz?',options:['Repete código para sempre','Executa quando o if é falso','Cria variável'],answer:1,why:'else é o caminho alternativo quando a condição do if não passa.'}
        },
        {
          id:'log-004', title:'Loops: repetir sem copiar código', level:'Básico', minutes:24,
          objective:'Entender quando usar repetição e como evitar código duplicado.',
          explain:['Loop serve para executar a mesma lógica várias vezes. Em vez de copiar dez linhas iguais, você manda repetir.','Todo loop precisa de controle: início, condição de parada e mudança. Sem isso, ele pode virar loop infinito.','Use for quando sabe quantas vezes vai repetir. Use while quando depende de uma condição externa.'],
          mental:'Loop é uma esteira: cada volta processa um item até a condição mandar parar.',
          steps:['Defina quantas vezes ou até quando repetir.','Crie uma variável de controle.','Faça a condição de parada.','Atualize a variável a cada volta.'],
          code:'for (let i = 1; i <= 5; i++) {\n  console.log("Treino número " + i);\n}',
          lines:[['let i = 1','Começa o contador em 1.'],['i <= 5','Repete enquanto isso for verdadeiro.'],['i++','Aumenta 1 a cada volta.']],
          checkpoints:['Sei explicar início, condição e incremento.','Sei evitar repetição manual.','Sei identificar loop infinito.'],
          mistakes:['Esquecer i++.','Condição nunca ficar falsa.','Usar loop quando uma linha resolveria.'],
          practice:'Mostre os números de 1 a 10 usando for.',
          starter:'for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}',
          validator:{must:['for','let','i++','console.log'], tip:'Use for com contador e console.log.'},
          quiz:{q:'Qual parte evita que um for rode para sempre?',options:['A condição de parada e o incremento','O nome da variável','A cor do editor'],answer:0,why:'Sem mudança no contador ou condição falsa, o loop não termina.'}
        }
      ]}]
    },
    {
      id:'html', name:'HTML', icon:'🏗️', color:'#f97316', desc:'Estrutura de páginas, semântica, formulários e acessibilidade.',
      modules:[{title:'Páginas reais',level:'Básico',lessons:[
        {id:'html-001',title:'Estrutura de uma página HTML',level:'Básico',minutes:20,objective:'Montar uma página correta do zero e entender o papel de cada parte.',explain:['HTML é o esqueleto da página. Ele define quais elementos existem: títulos, textos, botões, imagens, menus e formulários.','A estrutura básica evita bugs de acentuação, zoom errado no celular e problemas de leitura pelo navegador.','Em apps mobile feitos com WebView/Capacitor, o meta viewport é obrigatório para a tela se adaptar ao celular.'],mental:'HTML é a planta da casa. CSS pinta e organiza. JavaScript dá comportamento.',steps:['Comece com <!doctype html>.','Defina html lang="pt-BR".','No head, coloque charset, viewport e título.','No body, coloque o conteúdo visível.'],code:'<!doctype html>\n<html lang="pt-BR">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Meu App</title>\n</head>\n<body>\n  <h1>Olá, mundo</h1>\n</body>\n</html>',lines:[['doctype','Informa que o documento usa HTML moderno.'],['charset','Evita erro em acentos.'],['viewport','Faz o layout respeitar a largura do celular.']],checkpoints:['Sei criar estrutura completa.','Sei por que viewport importa no celular.','Sei separar head e body.'],mistakes:['Esquecer meta viewport.','Colocar conteúdo visual dentro do head.','Usar vários h1 sem necessidade.'],practice:'Crie uma página com título, subtítulo e botão de começar.',starter:'<!doctype html>\n<html lang="pt-BR">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Estudo</title>\n</head>\n<body>\n\n</body>\n</html>',validator:{must:['<!doctype html>','meta name="viewport"','<body>','</html>'],tip:'Monte a estrutura completa.'},quiz:{q:'Qual tag ajuda o app ficar correto no celular?',options:['meta viewport','strong','br'],answer:0,why:'O viewport ajusta a largura da página para o dispositivo.'}},
        {id:'html-002',title:'Tags semânticas',level:'Básico',minutes:22,objective:'Usar tags com significado para organizar página e melhorar acessibilidade.',explain:['Semântica é usar a tag certa para o papel certo. header é topo, nav é navegação, main é conteúdo principal, section divide assuntos.','Isso ajuda leitores de tela, SEO e manutenção do código.','div não é proibida. Ela só não deve substituir tudo quando existe uma tag mais específica.'],mental:'Semântica é colocar placas nos cômodos da casa: cozinha, quarto, sala.',steps:['Identifique o topo.','Separe menu de navegação.','Coloque o conteúdo principal em main.','Divida partes em sections.'],code:'<header>\n  <h1>CodeStudy</h1>\n  <nav>\n    <a href="#cursos">Cursos</a>\n  </nav>\n</header>\n\n<main>\n  <section id="cursos">\n    <h2>Cursos disponíveis</h2>\n  </section>\n</main>',lines:[['header','Topo da página ou seção.'],['nav','Área de links de navegação.'],['main','Conteúdo principal da tela.']],checkpoints:['Sei quando usar main.','Sei diferença entre section e div.','Sei criar navegação básica.'],mistakes:['Usar div para tudo.','Colocar nav fora de contexto.','Não usar headings em ordem.'],practice:'Crie a estrutura semântica da tela inicial de um app de estudos.',starter:'<header>\n</header>\n<main>\n</main>',validator:{must:['<header>','<main>','<section','<h1'],tip:'Use header, main, section e título.'},quiz:{q:'Por que usar tags semânticas?',options:['Para dar significado e melhorar organização','Para deixar o texto vermelho','Para substituir CSS'],answer:0,why:'Tags semânticas descrevem a função de cada bloco.'}}
      ]}]
    },
    {
      id:'css', name:'CSS Mobile', icon:'🎨', color:'#06b6d4', desc:'Visual bonito, responsivo e com cara de app real.',
      modules:[{title:'Layout mobile',level:'Básico',lessons:[
        {id:'css-001',title:'Box model sem confusão',level:'Básico',minutes:22,objective:'Entender margin, padding, border e tamanho real dos elementos.',explain:['Todo elemento é uma caixa. Conteúdo fica no centro, padding é espaço interno, border é a borda, margin é espaço externo.','No celular, erro de box model causa botão apertado, tela estourando e scroll lateral.','Use box-sizing:border-box para o tamanho ficar mais previsível.'],mental:'Pense em uma caixa de entrega: produto, plástico bolha, papelão e espaço até outra caixa.',steps:['Ative box-sizing global.','Use padding para respirar por dentro.','Use margin para separar por fora.','Evite largura fixa grande no celular.'],code:'* { box-sizing: border-box; }\n.card {\n  padding: 16px;\n  border: 1px solid #ddd;\n  margin-bottom: 12px;\n  border-radius: 16px;\n}',lines:[['box-sizing','Inclui padding e border no tamanho final.'],['padding','Espaço interno.'],['margin-bottom','Espaço fora, abaixo do card.']],checkpoints:['Sei diferença entre margin e padding.','Sei evitar scroll lateral.','Sei usar border-radius para estilo de app.'],mistakes:['Usar width:100vw com padding e criar estouro.','Usar margin para alinhar tudo.','Botões pequenos demais para toque.'],practice:'Crie um card mobile com título, texto e botão confortável.',starter:'.card {\n  \n}\n.btn {\n  min-height: 44px;\n}',validator:{must:['padding','border-radius','min-height'],tip:'Use padding, border-radius e botão com pelo menos 44px.'},quiz:{q:'Padding é o quê?',options:['Espaço interno','Espaço externo','Código JavaScript'],answer:0,why:'Padding separa o conteúdo da borda por dentro.'}},
        {id:'css-002',title:'Flexbox para tela de celular',level:'Básico',minutes:25,objective:'Alinhar elementos sem gambiarra usando flex.',explain:['Flexbox organiza itens em linha ou coluna. É ótimo para cabeçalho, botões, cards e barras inferiores.','justify-content alinha no eixo principal. align-items alinha no eixo cruzado.','Em mobile, use gap em vez de ficar empurrando com margin aleatória.'],mental:'Flexbox é uma fila inteligente: você escolhe direção, espaçamento e alinhamento.',steps:['Defina display:flex.','Escolha direction se precisar.','Use gap para espaço.','Use justify/align para posicionar.'],code:'.topo {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}',lines:[['display:flex','Ativa layout flexível.'],['align-items:center','Centraliza verticalmente.'],['space-between','Joga um item para cada lado.']],checkpoints:['Sei centralizar com flex.','Sei usar gap.','Sei diferença entre eixo principal e cruzado.'],mistakes:['Usar position:absolute para tudo.','Confundir justify e align.','Não testar em tela pequena.'],practice:'Crie um cabeçalho com logo à esquerda e botão à direita.',starter:'.topo {\n  display: flex;\n}',validator:{must:['display: flex','justify-content','align-items'],tip:'Use flex com align-items e justify-content.'},quiz:{q:'Qual propriedade cria espaço entre itens flex?',options:['gap','font-size','href'],answer:0,why:'gap cria espaçamento entre filhos do flex/grid.'}}
      ]}]
    },
    {
      id:'js', name:'JavaScript', icon:'⚙️', color:'#facc15', desc:'Interação, DOM, eventos, funções e lógica usada em apps.',
      modules:[{title:'JS para apps',level:'Básico',lessons:[
        {id:'js-001',title:'Funções: organizar ações',level:'Básico',minutes:25,objective:'Criar funções para evitar repetição e deixar o código fácil de manter.',explain:['Função é um bloco de código com nome. Você chama quando precisa executar uma ação.','Parâmetros são dados que entram na função. return é o valor que sai.','Em app real, função ajuda a separar ações: salvar, renderizar, validar e calcular.'],mental:'Função é uma máquina: entra dado, ela trabalha, sai resultado.',steps:['Dê um nome claro.','Defina parâmetros.','Faça uma tarefa só.','Retorne resultado quando necessário.'],code:'function calcularMedia(nota1, nota2) {\n  return (nota1 + nota2) / 2;\n}\n\nlet media = calcularMedia(8, 6);\nconsole.log(media);',lines:[['function','Cria a função.'],['nota1, nota2','Parâmetros de entrada.'],['return','Devolve o resultado.']],checkpoints:['Sei criar função com parâmetro.','Sei usar return.','Sei chamar função.'],mistakes:['Função fazer tarefas demais.','Esquecer return.','Nome ruim, tipo fazerCoisa.'],practice:'Crie uma função que recebe preço e desconto e retorna o preço final.',starter:'function calcularPrecoFinal(preco, desconto) {\n  \n}\nconsole.log(calcularPrecoFinal(100, 10));',validator:{must:['function','return','preco','desconto'],tip:'A função precisa receber preço e desconto e retornar o resultado.'},quiz:{q:'Para que serve return?',options:['Devolver um valor da função','Mudar cor da tela','Criar HTML'],answer:0,why:'return envia o resultado para quem chamou a função.'}},
        {id:'js-002',title:'DOM: mexer na tela',level:'Intermediário',minutes:28,objective:'Selecionar elementos HTML e alterar conteúdo com JavaScript.',explain:['DOM é a representação da página para o JavaScript. Com ele, você seleciona elementos e muda texto, classes, estilos ou cria novos blocos.','querySelector busca um elemento. textContent altera texto. classList adiciona ou remove classes.','Quase todo app front-end usa DOM ou uma camada parecida para atualizar a interface.'],mental:'DOM é o controle remoto da página.',steps:['Coloque id ou class no HTML.','Selecione com document.querySelector.','Altere o conteúdo ou classe.','Teste clicando ou mudando dados.'],code:'const titulo = document.querySelector("#titulo");\ntitulo.textContent = "Aula concluída";\ntitulo.classList.add("feito");',lines:[['querySelector','Procura um elemento na página.'],['textContent','Troca o texto interno.'],['classList.add','Adiciona uma classe CSS.']],checkpoints:['Sei selecionar por id e class.','Sei mudar texto.','Sei adicionar classe.'],mistakes:['Selecionar antes do elemento existir.','Errar # para id e . para classe.','Misturar HTML grande dentro de JS sem cuidado.'],practice:'Crie botão que ao clicar troca o texto de um parágrafo.',starter:'const p = document.querySelector("#mensagem");\n// altere o texto aqui',validator:{must:['document.querySelector','textContent'],tip:'Use querySelector e textContent.'},quiz:{q:'O que querySelector faz?',options:['Seleciona elemento da página','Compila Java','Cria banco de dados'],answer:0,why:'Ele busca um elemento usando seletor CSS.'}}
      ]}]
    },
    {
      id:'backend', name:'Backend', icon:'🧩', color:'#22c55e', desc:'APIs, rotas, JSON, CRUD e pensamento de servidor.',
      modules:[{title:'API sem mistério',level:'Intermediário',lessons:[
        {id:'back-001',title:'O que é backend',level:'Básico',minutes:22,objective:'Entender o papel do backend em um app real.',explain:['Backend é a parte que roda no servidor. Ele recebe pedidos do front-end, valida regras, acessa banco de dados e devolve resposta.','O front-end mostra a tela. O backend protege regra importante e dados.','Exemplo: tela de login é front-end; conferir senha e gerar sessão é backend.'],mental:'Front-end é o balcão. Backend é a cozinha e o estoque.',steps:['Receber uma requisição.','Validar dados.','Executar regra de negócio.','Responder em JSON.'],code:'GET /usuarios/10\n\nResposta:\n{\n  "id": 10,\n  "nome": "Ana",\n  "ativo": true\n}',lines:[['GET','Verbo usado para buscar dados.'],['/usuarios/10','Rota/recurso solicitado.'],['JSON','Formato comum de resposta entre sistemas.']],checkpoints:['Sei diferença entre front e back.','Sei o que é rota.','Sei por que usar JSON.'],mistakes:['Colocar regra sensível só no front-end.','Não validar entrada.','Confundir rota com tela.'],practice:'Desenhe as rotas de um app de tarefas: listar, criar, concluir e apagar.',starter:'GET /tarefas\nPOST /tarefas\nPATCH /tarefas/:id\nDELETE /tarefas/:id',validator:{must:['GET','POST','PATCH','DELETE'],tip:'Use os verbos principais de CRUD.'},quiz:{q:'Qual é função principal do backend?',options:['Processar regras e dados no servidor','Escolher cor do botão','Aumentar brilho da tela'],answer:0,why:'Backend cuida das regras, dados e comunicação do servidor.'}}
      ]}]
    },
    {
      id:'java', name:'Java', icon:'☕', color:'#ef4444', desc:'Sintaxe, POO, classes e base forte para backend.',
      modules:[{title:'Java do jeito certo',level:'Básico',lessons:[
        {id:'java-001',title:'Classe, main e primeiro programa',level:'Básico',minutes:25,objective:'Entender a estrutura mínima de um programa Java.',explain:['Java organiza código em classes. Para rodar um programa simples, você usa uma classe com método main.','public static void main é o ponto de entrada: é onde o programa começa.','Java é mais rígido que JavaScript. Isso parece chato no começo, mas ajuda em projetos grandes.'],mental:'Classe é um arquivo organizado. main é o botão iniciar.',steps:['Crie uma classe com o mesmo nome do arquivo.','Crie o método main.','Escreva comandos dentro dele.','Compile e execute.'],code:'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Olá, Java");\n  }\n}',lines:[['public class Main','Define uma classe pública chamada Main.'],['main','Ponto onde o programa começa.'],['System.out.println','Mostra texto no terminal.']],checkpoints:['Sei onde o Java começa.','Sei imprimir no terminal.','Sei que classe e arquivo precisam combinar em muitos casos.'],mistakes:['Errar maiúsculas em System.','Esquecer ponto e vírgula.','Nome da classe diferente do arquivo.'],practice:'Crie um programa Java que mostre seu nome, idade e objetivo de estudo.',starter:'public class Main {\n  public static void main(String[] args) {\n    \n  }\n}',validator:{must:['public class','public static void main','System.out.println',';'],tip:'Use a estrutura completa do Java e finalize comandos com ;.'},quiz:{q:'O que é o main em Java?',options:['Ponto de entrada do programa','Arquivo de imagem','Comando CSS'],answer:0,why:'O método main é executado quando o programa inicia.'}}
      ]}]
    }
  ],
  plan:[
    {day:'Segunda',focus:'Lógica + variáveis',task:'1 aula + 2 exercícios curtos + revisar anotações.'},
    {day:'Terça',focus:'HTML/CSS',task:'Montar uma tela simples no celular.'},
    {day:'Quarta',focus:'JavaScript',task:'Função + DOM + mini prática.'},
    {day:'Quinta',focus:'Backend',task:'Desenhar rotas de API e entender JSON.'},
    {day:'Sexta',focus:'Java',task:'Escrever 2 programas pequenos no terminal.'},
    {day:'Sábado',focus:'Projeto',task:'Juntar tela + lógica + salvamento local.'},
    {day:'Domingo',focus:'Revisão',task:'Refazer erros e responder prova do app.'}
  ],
  challenges:[
    {id:'c1',course:'logica',title:'Sistema de aprovação',level:'Básico',brief:'Receba duas notas, calcule média e diga aprovado, recuperação ou reprovado.',requirements:['Usar variáveis claras','Usar if/else if/else','Testar média 8, 6 e 3','Explicar a regra em 3 linhas'],rubric:['Resultado correto','Código simples','Nomes bons','Testes feitos']},
    {id:'c2',course:'html',title:'Tela inicial de curso',level:'Básico',brief:'Crie uma tela com header, main, card de curso e botão de começar.',requirements:['Usar tags semânticas','Usar h1 e h2 corretamente','Ter botão com texto claro','Funcionar no celular'],rubric:['Semântica','Organização','Legibilidade','Mobile']},
    {id:'c3',course:'css',title:'Card mobile profissional',level:'Básico',brief:'Estilize um card com bom espaçamento, botão confortável e visual limpo.',requirements:['Usar box-sizing','Usar padding e gap','Botão com min-height 44px','Sem scroll lateral'],rubric:['Responsivo','Visual limpo','Toque confortável','CSS organizado']},
    {id:'c4',course:'js',title:'Botão que altera estado',level:'Intermediário',brief:'Crie um botão que muda texto e marca aula como concluída.',requirements:['Selecionar DOM','Adicionar evento click','Alterar texto','Salvar estado em variável'],rubric:['Funciona','Código separado','Boa nomenclatura','Sem repetição']},
    {id:'c5',course:'backend',title:'Rotas de tarefas',level:'Intermediário',brief:'Planeje uma API CRUD de tarefas com métodos HTTP.',requirements:['Listar rotas','Usar GET POST PATCH DELETE','Definir JSON de exemplo','Explicar validação'],rubric:['Rotas corretas','JSON claro','Regras bem pensadas','Organização']},
    {id:'c6',course:'java',title:'Programa de cadastro simples',level:'Básico',brief:'Faça um programa Java que imprime dados de um aluno.',requirements:['Classe Main','Método main','Variáveis nome e idade','System.out.println'],rubric:['Sintaxe correta','Ponto e vírgula','Saída clara','Nomes bons']}
  ]
};

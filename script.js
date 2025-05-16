// Dados para popular os módulos, pra facilitar expansão
const dadosPortais = [
  {
    titulo: 'Notícias em Geral',
    nacional: [
      {
        nome: 'Agência Pública',
        url: 'https://apublica.org/',
        sobre:
          'Fundada em 2011 por repórteres mulheres, a Pública é a primeira agência de jornalismo investigativo sem fins lucrativos do Brasil. Todas as nossas reportagens são feitas com base na rigorosa apuração dos fatos e têm como princípio a defesa intransigente dos direitos humanos.',
      },

      {
        nome: 'Nexo Jornal (Pago)',
        url: 'https://www.nexojornal.com.br/',
        sobre:
          'O Nexo é um jornal digital criado em 2015 que oferece notícias aprofundadas e contextualizadas, com foco em dados e estatísticas. Cobre diversos temas de forma equilibrada, priorizando rigor e qualidade editorial.',
      },
    ],
    internacional: [
      {
        nome: 'Reuters',
        url: 'https://www.reuters.com',
        sobre:
          'A Reuters, divisão de notícias da Thomson Reuters, é a maior provedora de notícias multimídia do mundo, alcançando bilhões de pessoas diariamente. Ela fornece notícias empresariais, financeiras, nacionais e internacionais para profissionais (via terminais de desktop), organizações de mídia globais, eventos do setor e diretamente ao público.',
      },

      {
        nome: 'AP News',
        url: 'https://apnews.com/',
        sobre:
          'A AP (Associated Press) permanece hoje a fonte mais confiável de notícias independentes, imparciais e factuais em todos os formatos e a provedora essencial de tecnologia e serviços indispensáveis para o setor de notícias.',
      },
    ],
  },

  {
    titulo: 'Ciência',
    nacional: [
      {
        nome: 'Revista Fapesp',
        url: 'https://revistapesquisa.fapesp.br/',
        sobre:
          'Pesquisa FAPESP é a única revista jornalística especializada em cobrir a produção científica e tecnológica do Brasil. Por meio de reportagens, vídeos e podcasts, aborda resultados de pesquisa nacional, em todos os campos do conhecimento, que se destaquem por seu impacto intelectual, social ou econômico.',
      },
    ],
    internacional: [
      {
        nome: 'Nature',
        url: 'https://www.nature.com/',
        sobre:
          'O Nature Portfolio tem como objetivo servir à comunidade científica, publicando as descobertas mais relevantes, que ampliam o conhecimento e abordam os maiores desafios atuais da sociedade. Nossas revistas incluem pesquisa original, revisões, comentários críticos, notícias e análises.',
      },
    ],
  },

  {
    titulo: 'Tecnologia',
    nacional: [
      {
        nome: 'Tecnoblog',
        url: 'https://tecnoblog.net/',
        sobre:
          'Hoje o TB é o maior site de tecnologia independente do Brasil, com uma equipe de mais de 30 pessoas que compartilham experiências, auxiliam as decisões de compra e ajudam as pessoas a usarem melhor a tecnologia.',
      },
    ],
    internacional: [
      {
        nome: 'Art Technica',
        url: 'https://arstechnica.com/',
        sobre:
          'A Ars Technica tornou-se uma fonte confiável para notícias de tecnologia, análises de políticas tecnológicas, detalhamentos dos avanços científicos mais recentes, análises de gadgets, software, hardware e quase tudo o que existe entre as camadas de silício.',
      },
    ],
  },
];

function criarModulo(modulo) {
  const container = document.getElementById('portais-container');

  const divModulo = document.createElement('div');
  divModulo.classList.add('modulo');

  const btnTitulo = document.createElement('button');
  btnTitulo.classList.add('modulo-titulo');
  btnTitulo.textContent = modulo.titulo;

  const divConteudo = document.createElement('div');
  divConteudo.classList.add('modulo-conteudo');

  // Nacional
  const nacionalTitulo = document.createElement('p');
  nacionalTitulo.innerHTML = '<strong>Nacional:</strong>';
  divConteudo.appendChild(nacionalTitulo);

  const nacionalLista = document.createElement('ul');
  nacionalLista.classList.add('link-list');
  modulo.nacional.forEach((site) => {
    const li = document.createElement('li');

    const link = document.createElement('a');
    link.href = site.url;
    link.textContent = site.nome;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    const descricao = document.createElement('p');
    descricao.textContent = site.sobre || ''; // Se não tiver descrição, fica vazio
    descricao.classList.add('descricao'); // Pra estilizar no CSS

    li.appendChild(link);
    li.appendChild(descricao);

    nacionalLista.appendChild(li);
  });
  divConteudo.appendChild(nacionalLista);

  // Internacional
  const internacionalTitulo = document.createElement('p');
  internacionalTitulo.innerHTML = '<strong>Internacional:</strong>';
  divConteudo.appendChild(internacionalTitulo);

  const internacionalLista = document.createElement('ul');
  internacionalLista.classList.add('link-list');
  modulo.internacional.forEach((site) => {
    const li = document.createElement('li');

    const link = document.createElement('a');
    link.href = site.url;
    link.textContent = site.nome;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    const descricao = document.createElement('p');
    descricao.textContent = site.sobre || ''; // Se não tiver descrição, fica vazio
    descricao.classList.add('descricao'); // Pra estilizar no CSS

    li.appendChild(link);
    li.appendChild(descricao);

    internacionalLista.appendChild(li);
  });
  divConteudo.appendChild(internacionalLista);

  // Toggle visibilidade
  btnTitulo.addEventListener('click', () => {
    const isAberto = divConteudo.style.display === 'block';
    divConteudo.style.display = isAberto ? 'none' : 'block';
  });

  divModulo.appendChild(btnTitulo);
  divModulo.appendChild(divConteudo);
  container.appendChild(divModulo);
}

// Inicializa a página
dadosPortais.forEach(criarModulo);

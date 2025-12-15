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
        nome: 'Agência Brasil - EBC',
        url: 'https://agenciabrasil.ebc.com.br/',
        sobre:
          'A Empresa Brasil de Comunicação - EBC é a empresa pública brasileira que tem como missão garantir o direito humano à comunicação. Ela representa um projeto de país que valoriza a diversidade cultural, fomenta a cidadania e fortalece a democracia com informação acessível, cultura, arte e educação, combatendo a desinformação.',
      },

      {
        nome:'Repórter Brasil',
        url:'https://reporterbrasil.org.br/',
        sobre:
          'A Repórter Brasil foi fundada em 2001 por jornalistas, cientistas sociais e educadores com o objetivo de fomentar a reflexão e ação sobre a violação aos direitos fundamentais dos povos e trabalhadores no Brasil.',
      },

      {
        nome:'Aos Fatos',
        url:'https://www.aosfatos.org/',
        sobre:
          'Aos Fatos é uma organização jornalística dedicada ao combate à desinformação, à cobertura da tecnopolítica e à checagem de fatos. Foi ao ar pela primeira vez em 7 de julho de 2015 e alia tecnologia e investigação jornalística para informar sobre as mentiras que os poderosos contam, endossam e financiam.',
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

      {
        nome:'BBC News',
        url:'https://www.bbc.com/news',
        sobre:
          'Somos imparciais e independentes, e todos os dias criamos programas e conteúdos únicos e de alta qualidade que informam, educam e entretêm milhões de pessoas no Reino Unido e em todo o mundo.',
      },

      {
        nome:'The New York Times',
        url:'https://www.nytimes.com/international/',
        sobre:
          'Nossa missão é buscar a verdade e ajudar as pessoas a compreenderem o mundo. Essa missão se fundamenta na nossa crença de que o bom jornalismo tem o poder de enriquecer e tornar mais plena a vida de cada leitor, e de fortalecer e tornar mais justa a sociedade como um todo.',
      },

      {
        nome:'The Guardian',
        url:'https://www.theguardian.com/international',
        sobre:
          'O Guardian Media Group é uma organização global de notícias que oferece jornalismo investigativo e destemido, dando voz aos marginalizados e responsabilizando o poder. Nossa estrutura de propriedade independente significa que somos totalmente livres de influências políticas e comerciais. Somente nossos valores determinam as histórias que escolhemos cobrir – de forma incansável e corajosa.',
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

      {
        nome:'Agência BORI',
        url:'https://abori.com.br/',
        sobre:
          'A  Bori é um serviço único no Brasil que apoia a cobertura da imprensa de todo o país à luz de evidências científicas. Jornalistas encontram na Bori pesquisas inéditas de instituições brasileiras explicadas de diversas áreas como saúde, ambiente e economia acompanhadas do contato do/a porta-voz, além de  treinamentos em coberturas específicas e telefone celular de cientistas de diversas regiões do Brasil preparados para atender a imprensa.',
      }
    ],
    internacional: [
      {
        nome: 'Nature',
        url: 'https://www.nature.com/',
        sobre:
          'O Nature Portfolio tem como objetivo servir à comunidade científica, publicando as descobertas mais relevantes, que ampliam o conhecimento e abordam os maiores desafios atuais da sociedade. Nossas revistas incluem pesquisa original, revisões, comentários críticos, notícias e análises.',
      },

      {
        nome:'Science',
        url:'https://www.science.org/journal/science',
        sobre:
          'Desde sua fundação em 1880, com o financiamento inicial de Thomas Edison, a revista Science tem estado no centro de importantes descobertas científicas. Hoje, a Science continua a publicar o melhor da pesquisa em todas as áreas da ciência, com artigos que figuram consistentemente entre os mais citados do mundo.',
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

      {
        nome: 'Manual do Usuário',
        url: 'https://manualdousuario.net/',
        sobre:
          'O Manual do Usuário é um blog de tecnologia independente, criado e mantido pelo jornalista Rodrigo Ghedin. Aborda temas como tecnologias não comerciais, privacidade digital e assuntos pouco explorados pela mídia especializada. O site é opinativo, segue rigor jornalístico e adota a filosofia da slow web, sem foco em tempo real.',
      },
    ],
    internacional: [
      {
        nome: 'Art Technica',
        url: 'https://arstechnica.com/',
        sobre:
          'A Ars Technica tornou-se uma fonte confiável para notícias de tecnologia, análises de políticas tecnológicas, detalhamentos dos avanços científicos mais recentes, análises de gadgets, software, hardware e quase tudo o que existe entre as camadas de silício.',
      },

      {
        nome: 'IEEE Spectrum',
        url: 'https://spectrum.ieee.org/',
        sobre:
          'A IEEE Spectrum é uma revista de tecnologia premiada e a principal publicação do IEEE, a maior organização profissional do mundo dedicada à engenharia e às ciências aplicadas. Com raízes que remontam a 1884, o IEEE organiza conferências de pesquisa, publica periódicos de engenharia e é responsável por importantes padrões tecnológicos, incluindo, mais notavelmente, o Ethernet e o Wi-Fi.'
      },

      {
        nome: 'MIT Technology Review',
        url: 'https://www.technologyreview.com/',
        sobre:
          'A MIT Technology Review é uma empresa de mídia independente de renome mundial, fundada no Instituto de Tecnologia de Massachusetts (MIT) em 1899. A MIT Technology Review oferece análises e insights que explicam as tecnologias mais recentes e seus impactos comerciais, sociais e políticos por meio de jornalismo premiado e eventos presenciais de alta qualidade. Nossa missão é capacitar nosso público com informações confiáveis ​​para que compreendam as tendências futuras em tecnologia e por que elas são importantes.'
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

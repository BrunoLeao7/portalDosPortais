// Dados para popular os módulos, pra facilitar expansão
const dadosPortais = [
  {
    titulo: 'Notícias em Geral',
    nacional: [
      {
        nome: 'Agência Pública',
        url: 'https://apublica.org/',
        sobre:
          'Agência de jornalismo investigativo sem fins lucrativos, fundada em 2011, com foco em interesse público, direitos humanos, poder público, empresas, meio ambiente e populações vulneráveis.',
      },

      {
        nome: 'Agência Brasil - EBC',
        url: 'https://agenciabrasil.ebc.com.br/',
        sobre:
          'Agência pública de notícias vinculada à EBC, com foco em políticas públicas e cidadania, oferecendo cobertura jornalística factual, contextualizada e de serviço, com produção diária e versões em outros idiomas.',
      },

      {
        nome:'Repórter Brasil',
        url:'https://reporterbrasil.org.br/',
        sobre:
          'Organização fundada em 2001 que produz jornalismo investigativo, pesquisas e conteúdos educacionais sobre direitos trabalhistas, trabalho escravo e impactos socioambientais, com foco em direitos humanos e interesse público.',
      },

      {
        nome:'Aos Fatos',
        url:'https://www.aosfatos.org/',
        sobre:
          'Organização jornalística fundada em 2015 dedicada à checagem de fatos, ao combate à desinformação e à cobertura de tecnopolítica, unindo jornalismo investigativo e tecnologia com foco em interesse público e democracia.',
      },

      {
        nome: 'Nexo Jornal (Pago)',
        url: 'https://www.nexojornal.com.br/',
        sobre:
          'Jornal digital independente lançado em 2015, focado em notícias aprofundadas e contextualizadas, com uso de dados, diferentes formatos digitais e compromisso com clareza, equilíbrio e transparência no debate público.',
      },
    ],
    internacional: [
      {
        nome: 'Reuters',
        url: 'https://www.reuters.com',
        sobre:
          'A Reuters fornece notícias empresariais, financeiras, nacionais e internacionais para profissionais (via terminais de desktop), organizações de mídia globais, eventos do setor e diretamente ao público.',
      },

      {
        nome: 'AP News',
        url: 'https://apnews.com/',
        sobre:
          'Agência global de notícias independente e sem fins lucrativos, dedicada ao jornalismo factual, com atuação internacional e reinvestimento integral de seus recursos na produção jornalística.',
      },

      {
        nome:'BBC News',
        url:'https://www.bbc.com/news',
        sobre:
          'Emissora pública britânica e organização global de mídia, conhecida pela produção de conteúdo jornalístico imparcial e independente, com atuação em TV, rádio e plataformas digitais, incluindo cobertura internacional em diversos idiomas.',
      },

      {
        nome:'The New York Times',
        url:'https://www.nytimes.com/international/',
        sobre:
          'Jornal internacional com cobertura global, focado em notícias factuais, reportagens especializadas, investigações aprofundadas e análises, com atuação em mais de 160 países e forte presença digital.',
      },

      {
        nome:'The Guardian',
        url:'https://www.theguardian.com/international',
        sobre:
          'Jornal internacional de propriedade independente, com foco em reportagens investigativas, cobertura de política, meio ambiente, ciência e justiça social, e reinvestimento de seus recursos na produção jornalística.',
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
          'Revista jornalística especializada na cobertura da produção científica e tecnológica do Brasil, com reportagens, vídeos e podcasts sobre pesquisas de impacto intelectual, social e econômico.',
      },

      {
        nome:'Agência BORI',
        url:'https://abori.com.br/',
        sobre:
          'Serviço fundado em 2020 que apoia a cobertura jornalística com base em evidências científicas, conectando jornalistas a pesquisas brasileiras, especialistas e treinamentos em áreas como saúde, meio ambiente e economia.',
      }
    ],
    internacional: [
      {
        nome: 'Nature',
        url: 'https://www.nature.com/',
        sobre:
          'Grupo internacional de publicações científicas que reúne revistas como Nature e outros periódicos especializados, com foco em pesquisas relevantes, análises, notícias e divulgação científica para a comunidade acadêmica global.',
      },

      {
        nome:'Science',
        url:'https://www.science.org/journal/science',
        sobre:
          'Família internacional de revistas científicas publicada pela AAAS, dedicada à divulgação de pesquisas de alto impacto em diversas áreas da ciência, com foco em descobertas relevantes, revisão por pares e acesso ao conhecimento científico.',
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
          'Site brasileiro de tecnologia fundado em 2005, com cobertura independente sobre o setor, produção jornalística especializada, análises, notícias e conteúdos voltados a ajudar o público a entender e usar melhor a tecnologia.',
      },

      {
        nome: 'Manual do Usuário',
        url: 'https://manualdousuario.net/',
        sobre:
          'Blog independente de tecnologia criado em 2013, com textos opinativos e rigor jornalístico, focado em privacidade digital, tecnologias alternativas e reflexão crítica, seguindo a proposta de publicação sem urgência e fora do tempo real.',
      },
    ],
    internacional: [
      {
        nome: 'Art Technica',
        url: 'https://arstechnica.com/',
        sobre:
          'Site internacional de jornalismo de tecnologia fundado em 1998, conhecido por análises aprofundadas, reportagens técnicas, ciência, política tecnológica e reviews, com foco em precisão, contexto e público especializado.',
      },

      {
        nome: 'IEEE Spectrum',
        url: 'https://spectrum.ieee.org/',
        sobre:
          'Revista internacional de tecnologia publicada pelo IEEE, dedicada à cobertura de tendências e avanços em engenharia, ciência e tecnologia, com reportagens, análises e conteúdos explicativos para público técnico e geral.'
      },

      {
        nome: 'MIT Technology Review',
        url: 'https://www.technologyreview.com/',
        sobre:
          'Publicação internacional fundada em 1899, ligada ao MIT, focada na análise de tecnologias emergentes e seus impactos sociais, econômicos e políticos, com jornalismo especializado e cobertura de inovação científica e tecnológica.'
      },
    ],
  },

  {
    titulo: 'Política e Governo',
    nacional: [
      {
        nome: 'JOTA',
        url: 'https://www.jota.info/',
        sobre:
          'Plataforma de jornalismo e inteligência institucional fundada em 2014, especializada na cobertura do Judiciário, política e regulação, com análises aprofundadas voltadas a decisões estratégicas no setor público e privado.',
      },

      {
        nome: 'Poder360',
        url: 'https://www.poder360.com.br/',
        sobre:
          'Grupo jornalístico brasileiro com foco na cobertura de poder, política, tecnologia e mídia, produzido a partir de Brasília, com conteúdos informativos, análises e pesquisas de opinião de interesse público.',
      },

      {
        nome: 'Sul 21',
        url: 'https://sul21.com.br/',
        sobre:
          'Site de notícias independente fundado em 2010, com foco em reportagens aprofundadas sobre direitos humanos, democracia, meio ambiente e pautas sociais, com atenção especial às comunidades locais e temas pouco abordados pela mídia tradicional',
      },
    ],
    internacional: [
      {
        nome: 'POLITICO',
        url: 'https://www.politico.com/',
        sobre:
          'Veículo internacional fundado em 2007, especializado em política e políticas públicas, com foco em análises aprofundadas, bastidores do poder e inteligência estratégica para tomadores de decisão.',
      },

      {
        nome: 'Euractiv',
        url: 'https://www.euractiv.com/',
        sobre:
          'Veículo pan-europeu independente fundado em 1999, especializado na cobertura de políticas e instituições da União Europeia, com reportagens críticas e análises sobre economia, política e áreas regulatórias como energia, saúde, agricultura e tecnologia.',
      },

      {
        nome: 'Voxeurop',
        url: 'https://voxeurop.eu/',
        sobre:
          'Veículo digital independente criado por jornalistas de diversos países europeus, organizado como uma cooperativa de imprensa, com foco em jornalismo transnacional e perspectivas europeias.',
      },
    ],
  },

  {
    titulo: 'Meio Ambiente & Sustentabilidade',
    nacional: [
      {
        nome: 'InfoAmazonia',
        url: 'https://infoamazonia.org/',
        sobre:
          'Veículo jornalístico sem fins lucrativos focado na cobertura da Amazônia, que combina dados, mapas e reportagens geolocalizadas para investigar temas ambientais e sociais de forma colaborativa e transnacional.',
      },

      {
        nome: '((o))eco',
        url: 'https://oeco.org.br/',
        sobre:
          'Veículo jornalístico sem fins lucrativos fundado em 2004, dedicado à cobertura de meio ambiente, biodiversidade e política ambiental no Brasil, com jornalismo independente focado na conservação da natureza.',
      },
    ],
    internacional: [
      {
        nome: 'Mongabay',
        url: 'https://news.mongabay.com/',
        sobre:
          'Organização jornalística internacional e sem fins lucrativos dedicada à cobertura de meio ambiente e desafios planetários, com rede global de jornalistas locais e foco em ciência, transparência e impactos socioambientais.',
      },

      {
        nome: 'Yale Environment 360',
        url: 'https://e360.yale.edu/',
        sobre:
          'Revista digital publicada pela Yale School of the Environment, dedicada a análises, reportagens e debates sobre questões ambientais globais, com artigos de especialistas e jornalistas de diferentes áreas.',
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

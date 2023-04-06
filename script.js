$(function () {
    $('#sidebar-toggle').on('click', function () {
        $('#sidebarContainer').toggleClass('d-none d-md-block');
    });

});
  
 var json=[
    {
      "title": "Cursos",
      "links": [
        {
          "title": "Como ingressar",
          "url": "https://www.ifsudestemg.edu.br/barbacena/cursos/como-ingressar"
        },
        {
          "title": "Técnicos",
          "url": "https://www.ifsudestemg.edu.br/barbacena/cursos/tecnicos"
        },
        {
          "title": "Graduação",
          "url": "https://www.ifsudestemg.edu.br/barbacena/cursos/graduacao"
        },
        {
          "title": "Pós-Graduação",
          "url": "https://www.ifsudestemg.edu.br/barbacena/cursos/pos-graduacao"
        }
      ]
    },
    {
      "title": "Acesso a informação",
      "links":[
        

            {
              "title": "Institucional",
              "url": "https://www.ifsudestemg.edu.br/institucional"
            },
            {
              "title": "Ações e programas",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/acoes-e-programas"
            },
            {
              "title": "Participação Social",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/participacao-social"
            },
            {
              "title": "Auditorias",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/auditorias"
            },
            {
              "title": "Convênios e Transferências",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/convenios-e-transferencias"
            },
            {
              "title": "Receitas e Despesas",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/receitas-e-despesas"
            },
            {
              "title": "Licitações e Contratos",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/licitacoes-e-contratos"
            },
            {
              "title": "Servidores",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/servidores"
            },
            {
              "title": "Terceirizados",
              "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/unidades/reitoria/pro-reitorias/administracao/outros-documentos/terceirizados.pdf"
            },
            {
              "title": "Informações classificadas",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/informacoes-classificadas"
            },
            {
              "title": "Serviço de Informação ao Cidadão - SIC",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/servico-informacao-cidadao-sic"
            },
            {
              "title": "Perguntas Frequentes",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/perguntas-frequentes"
            },
            {
              "title": "Dados Abertos",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/dados-abertos"
            },
            {
              "title": "Agendas de Autoridades",
              "url": "https://eagendas.cgu.gov.br/"
            },
            {
              "title": "Protocolo Integrado",
              "url": "https://sig.ifsudestemg.edu.br/public/jsp/portal.jsf"
            },
            {
              "title": "Quadro de Referência TAE",
              "url": "https://www.ifsudestemg.edu.br/institucional/gestao-de-pessoas/quadro-funcional/quadro-de-referencia-tae"
            },
            {
              "title": "Contabilidade",
              "url": "https://www.ifsudestemg.edu.br/institucional/pro-reitorias/administracao/estrutura-organizacional/contabilidade-e-custos"
            },
            {
              "title": "Carta de Serviço",
              "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/carta_de_servicos.pdf/view"
            },
            {
              "title": "Diplomas de Graduação",
              "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/unidades/reitoria/pro-reitorias/ensino/graduacao/diplomas-de-graduacao"
            },
            {
              "title": "Diplomas de Mestrado",
              "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/unidades/reitoria/pro-reitorias/ensino/mestrado/registro-de-diplomas"
            },
            {
              "title": "Relatório de Gestão",
              "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/relatorios-de-gestao"
            },
            {
              "title": "Integridade pública",
              "url": "https://www.ifsudestemg.edu.br/institucional/comissoes-e-comites/cgpi"
            },
            {
              "title": "Segurança da Informação e Proteção de Dados Pessoais no IF Sudeste MG",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/protecao-de-dados-pessoais-no-if-sudeste-mg"
            },
            {
              "title": "Transparência e Prestação de Contas",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/transparencia-e-prestacao-de-contas"
            },
            {
              "title": "Banco de Professor Equivalente",
              "url": "https://www.ifsudestemg.edu.br/institucional/gestao-de-pessoas"
            }
          
          
            
        ]
    },
    {
      "title": "Acesso Rapido",
      "links": [
        {
          "title": "Apoio ao Discente",
          "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/ensino/apoio-ao-discente"
      },
      {
          "title": "Calendário Acadêmico",
          "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/unidades/barbacena/diretorias-sistemicas/ensino/calendario-academico"
      },
      {
          "title": "Editais",
          "url": "https://www.ifsudestemg.edu.br/editais#b_start=0&c4=barbacena"
      },
      {
          "title": "Biblioteca",
          "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/diretorias-sistemicas/ensino/estrutura-organizacional/biblioteca"
      },
      {
          "title": "Documentos",
          "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/barbacena"
      },
      {
          "title": "Licitações",
          "url": "https://www.ifsudestemg.edu.br/licitacoes#b_start=0&c4=barbacena-148413"
      },
      {
          "title": "Banco de Expertises",
          "url": "https://www.ifsudestemg.edu.br/acesso-rapido/documentos-institucionais/unidades/reitoria/pro-reitorias/pesquisa-posgraduacao-e-inovacao/outros-documentos/nittec/inovacao/banco-de-expertises-1"
      },
      {
          "title": "Dados Abertos",
          "url": "https://dados.ifsudestemg.edu.br/"
      },
      {
          "title": "Concursos",
          "url": "https://www.ifsudestemg.edu.br/concursos"
      },
      {
          "title": "Internacional",
          "url": "https://www.ifsudestemg.edu.br/institucional/pro-reitorias/extensao/estrutura-organizacional/driit/assessoria-de-relacoes-internacionais/assessoria-de-relacoes-internacionais"
      },
      {
          "title": "Oportunidades",
          "url": "https://www.ifsudestemg.edu.br/oportunidades#b_start=0"
      },
      {
          "title": "Eventos",
          "url": "https://www.ifsudestemg.edu.br/eventos"
      },
      {
          "title": "SIPAC: Pesquisa pública",
          "url": "https://sig.ifsudestemg.edu.br/public/jsp/portal.jsf"
      },
      {
          "title": "Portfólio de tecnologia",
          "url": "https://www.ifsudestemg.edu.br/institucional/pro-reitorias/pesquisa-posgraduacao-e-inovacao/inovacao/nittec/inovacao/portfolio"
      }
      
      ]
    },    {
      "title": "Campus Barbacena",
      "links": [
        {
          "title": "O instituto ",
          "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/o-instituto"
      },
      {
          "title": "O campus",
          "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/o-campus"
      },
      {
          "title": "Gabinete",
          "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/gabinete"
      },
      {
          "title": "Ensino",
          "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/ensino"
      },
      {
          "title": "Extensão",
          "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/extensao"
      },
      {
          "title": "Licitações",
          "url": "https://www.ifsudestemg.edu.br/licitacoes#b_start=0&c4=barbacena-148413"
      },
      {
          "title": "Pesquisa",
          "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/pesquisa"
      },
      {
          "title": "Gestão institucional",
          "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/gestao-institucional"
      },
      {
          "title": "Gestão de pessoas",
          "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/gestao-de-pessoas"
      },
      {
          "title": "Corpo docente",
          "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/corpo-docente"
      },
      {
          "title": "Órgãos colegiados ",
          "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/orgaos-colegiados"
      },
      {
          "title": "Órgãos estudantis",
          "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/orgaos-estudantis"
      },
      {
          "title": "Comissões e comitês",
          "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/comissoes-e-comites"
      },
      {
          "title": "Documentos institucionais",
          "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/unidades/barbacena"
      }
      
      ]
    },
    {
      "title": "Campus Planejamento Institucional",
      "links": [
        {
          "title": "PDI 2021 - 2025",
          "url": "https://www.ifsudestemg.edu.br/institucional/pdi/pdi-2021-2025"
      },
      {
          "title": "PDI 2014/2 - 2020 - Página antiga ",
          "url": "https://www.ifsudestemg.edu.br/institucional/pdi/pdi-2014-2020"
      }
      ]
    },
    {
      "title": "Unidades do IF sudeste MG",
      "links": [
        {
          "title": "Visão Geral",
          "url": "https://www.ifsudestemg.edu.br/institucional/unidades"
      },
      {
          "title": "Reitoria",
          "url": "https://www.ifsudestemg.edu.br/IFSudesteMG"
      },
      {
          "title": "Barbacena",
          "url": "https://www.ifsudestemg.edu.br/barbacena"
      },
      {
          "title": "Juiz de fora",
          "url": "https://www.ifsudestemg.edu.br/juizdefora"
      },
      {
          "title": "Manhuaçu",
          "url": "https://www.ifsudestemg.edu.br/manhuacu"
      },
      {
          "title": "Muriaé",
          "url": "https://www.ifsudestemg.edu.br/muriae"
      },
      {
          "title": "Rio Pomba",
          "url": "https://www.ifsudestemg.edu.br/riopomba"
      },
      {
          "title": "Santos Dumont",
          "url": "https://www.ifsudestemg.edu.br/santosdumont"
      },
      {
          "title": "São João",
          "url": "https://www.ifsudestemg.edu.br/sjdr"
      },
      {
          "title": "Bom sucesso",
          "url": "https://www.ifsudestemg.edu.br/bomsucesso"
      },
      {
          "title": "Cataguases",
          "url": "https://www.ifsudestemg.edu.br/cataguases"
      },
      {
          "title": "Ubá",
          "url": "https://www.ifsudestemg.edu.br/uba"
      }
      ]
    },
    {
      "title": "Barra lateral",
      "links": [
        {
          "title": "Estudante",
          "url": "https://www.ifsudestemg.edu.br/barbacena/acesso-rapido/estudante"
      },
      {
          "title": "Servidor",
          "url": "https://www.ifsudestemg.edu.br/barbacena/acesso-rapido/servidor"
      },
      {
        "title": "Matrícula",
        "url": "https://www.ifsudestemg.edu.br/matriculas"
      }
      ]
    },
    {
      "title": "Cabeçalho",
      "links": [
        {
          "title": "Fale Conosco",
          "url": "https://www.ifsudestemg.edu.br/fale-conosco"
      },
      {
          "title": "Ouvidoria",
          "url": "https://www.ifsudestemg.edu.br/ouvidoria"
      },
      {
        "title": "Perguntas Frequentes",
        "url": "https://www.ifsudestemg.edu.br/perguntas-frequentes"
      },
      {
        "title": "Comunicação Social",
        "url": "https://www.ifsudestemg.edu.br/comunicacao-social"
      }
      ]
    },
    {
      "title": "Redes Sociais",
      "links": [
        {
          "title": "YouTube",
          "url": "https://www.youtube.com/IFSUDESTEMGVIDEOS"
      },
      {
          "title": "Instagram",
          "url": "https://www.instagram.com/ifsudestemg/"
      },
      {
        "title": "Facebook",
        "url": "https://www.facebook.com/institutofederalsudestemg"
      }
      ]
    },
    {
      "title": "Notícias",
      "links": [
        {
          "title": "Todas as Notícias",
          "url": "https://www.ifsudestemg.edu.br/noticias/barbacena/"
      },
      {
          "title": "Notícias ensino",
          "url": "https://www.ifsudestemg.edu.br/noticias/barbacena/ensino/"
      },
      {
        "title": "Extensão notícias",
        "url": "https://www.ifsudestemg.edu.br/noticias/barbacena/extensao/"
      }
      ]
    },
    {
      "title": "Hotsites",
      "links": [
        {
          "title": "Processo seletivo",
          "url": "https://www.ifsudestemg.edu.br/hotsites/processo-seletivo-2023-1"
      },
        {
          "title": "hotsites",
          "url": "https://www.ifsudestemg.edu.br/hotsites"
      },
      {
          "title": "Calendários",
          "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/calendarios"
      },
      {
        "title": "Cursos",
        "url": "https://www.ifsudestemg.edu.br/cursos"
      }
      ]
    },
    {
      "title": "Links Úteis",
      "links": [
        {
          "title": "Enem",
          "url": "https://www.ifsudestemg.edu.br/institucional/pro-reitorias/ensino/certificacoes-enem"
      },
      {
          "title": "ENCCEJA",
          "url": "https://www.ifsudestemg.edu.br/institucional/pro-reitorias/ensino/programas-e-projetos/encceja"
      },
      {
        "title": "COPESE",
        "url": "https://www.ifsudestemg.edu.br/hotsites/processo-seletivo-2023-2"
      },
      {
        "title": "periodicos.",
        "url": "https://www-periodicos-capes-gov-br.ez367.periodicos.capes.gov.br/index.php?"
      }
      ]
    },
    {
      "title": "Rodapé",
      "links": [
        {
          "title": "Consulte o cadastro do IFSudesteMG no e-MEC",
          "url": "https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MzI3OQ=="
      },
      {
          "title": "RSS",
          "url": "https://www.ifsudestemg.edu.br/rss/o-que-e"
      },
      {
        "title": "Acesso à informação",
        "url": "https://www.gov.br/acessoainformacao/pt-br"
      }
      ]
    },
    {
      "title": "Fique por dentro",
      "links": [
        {
          "title": "ÚLTIMOS EDITAIS",
          "url": "https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MzI3OQ=="
      },
      {
          "title": "CONVOCAÇÕES DO CONSELHO DE CAMPUS",
          "url": "https://www.ifsudestemg.edu.br/convocacoes/barbacena/convocacoes-do-conselho-de-campus"
      },
      {
        "title": "CONVOCAÇÕES DOS ÓRGÃOS SUPERIORES E COLEGIADOS ESPECIALIZADOS",
        "url": "https://www.ifsudestemg.edu.br/convocacoes/convocacoes-orgaos-superiores-e-colegiados"
      },
      {
        "title": "Relações Internacionais",
        "url": "https://www.ifsudestemg.edu.br/institucional/pro-reitorias/extensao/estrutura-organizacional/driit"
      }
      ]
    }
  ]


var orderJson = [
  {
      "title": "A",
      "links": [
          {
              "title": "Ações e programas",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/acoes-e-programas"
          },
          {
              "title": "Auditorias",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/auditorias"
          },
          {
              "title": "Agendas de Autoridades",
              "url": "https://eagendas.cgu.gov.br/"
          },
          {
              "title": "Apoio ao Discente",
              "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/ensino/apoio-ao-discente"
          },
          {
              "title": "Acesso à informação",
              "url": "https://www.gov.br/acessoainformacao/pt-br"
          }
      ]
  },
  {
      "title": "B",
      "links": [
          {
              "title": "Banco de Professor Equivalente",
              "url": "https://www.ifsudestemg.edu.br/institucional/gestao-de-pessoas"
          },
          {
              "title": "Biblioteca",
              "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/diretorias-sistemicas/ensino/estrutura-organizacional/biblioteca"
          },
          {
              "title": "Banco de Expertises",
              "url": "https://www.ifsudestemg.edu.br/acesso-rapido/documentos-institucionais/unidades/reitoria/pro-reitorias/pesquisa-posgraduacao-e-inovacao/outros-documentos/nittec/inovacao/banco-de-expertises-1"
          },
          {
              "title": "Barbacena",
              "url": "https://www.ifsudestemg.edu.br/barbacena"
          },
          {
              "title": "Bom sucesso",
              "url": "https://www.ifsudestemg.edu.br/bomsucesso"
          }
      ]
  },
  {
      "title": "C",
      "links": [
          {
              "title": "Como ingressar",
              "url": "https://www.ifsudestemg.edu.br/barbacena/cursos/como-ingressar"
          },
          {
              "title": "Convênios e Transferências",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/convenios-e-transferencias"
          },
          {
              "title": "Contabilidade",
              "url": "https://www.ifsudestemg.edu.br/institucional/pro-reitorias/administracao/estrutura-organizacional/contabilidade-e-custos"
          },
          {
              "title": "Carta de Serviço",
              "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/carta_de_servicos.pdf/view"
          },
          {
              "title": "Calendário Acadêmico",
              "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/unidades/barbacena/diretorias-sistemicas/ensino/calendario-academico"
          },
          {
              "title": "Concursos",
              "url": "https://www.ifsudestemg.edu.br/concursos"
          },
          {
              "title": "Corpo docente",
              "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/corpo-docente"
          },
          {
              "title": "Comissões e comitês",
              "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/comissoes-e-comites"
          },
          {
              "title": "Cataguases",
              "url": "https://www.ifsudestemg.edu.br/cataguases"
          },
          {
              "title": "Comunicação Social",
              "url": "https://www.ifsudestemg.edu.br/comunicacao-social"
          },
          {
              "title": "Calendários",
              "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/calendarios"
          },
          {
              "title": "Cursos",
              "url": "https://www.ifsudestemg.edu.br/cursos"
          },
          {
              "title": "COPESE",
              "url": "https://www.ifsudestemg.edu.br/hotsites/processo-seletivo-2023-2"
          },
          {
              "title": "Consulte o cadastro do IFSudesteMG no e-MEC",
              "url": "https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MzI3OQ=="
          },
          {
              "title": "CONVOCAÇÕES DO CONSELHO DE CAMPUS",
              "url": "https://www.ifsudestemg.edu.br/convocacoes/barbacena/convocacoes-do-conselho-de-campus"
          },
          {
              "title": "CONVOCAÇÕES DOS ÓRGÃOS SUPERIORES E COLEGIADOS ESPECIALIZADOS",
              "url": "https://www.ifsudestemg.edu.br/convocacoes/convocacoes-orgaos-superiores-e-colegiados"
          }
      ]
  },
  {
      "title": "D",
      "links": [
          {
              "title": "Dados Abertos",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/dados-abertos"
          },
          {
              "title": "Diplomas de Graduação",
              "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/unidades/reitoria/pro-reitorias/ensino/graduacao/diplomas-de-graduacao"
          },
          {
              "title": "Diplomas de Mestrado",
              "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/unidades/reitoria/pro-reitorias/ensino/mestrado/registro-de-diplomas"
          },
          {
              "title": "Documentos",
              "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/barbacena"
          },
          {
              "title": "Dados Abertos",
              "url": "https://dados.ifsudestemg.edu.br/"
          },
          {
              "title": "Documentos institucionais",
              "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/unidades/barbacena"
          }
      ]
  },
  {
      "title": "E",
      "links": [
          {
              "title": "Editais",
              "url": "https://www.ifsudestemg.edu.br/editais#b_start=0&c4=barbacena"
          },
          {
              "title": "Eventos",
              "url": "https://www.ifsudestemg.edu.br/eventos"
          },
          {
              "title": "Ensino",
              "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/ensino"
          },
          {
              "title": "Extensão",
              "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/extensao"
          },
          {
              "title": "Estudante",
              "url": "https://www.ifsudestemg.edu.br/barbacena/acesso-rapido/estudante"
          },
          {
              "title": "Extensão notícias",
              "url": "https://www.ifsudestemg.edu.br/noticias/barbacena/extensao/"
          },
          {
              "title": "Enem",
              "url": "https://www.ifsudestemg.edu.br/institucional/pro-reitorias/ensino/certificacoes-enem"
          },
          {
              "title": "ENCCEJA",
              "url": "https://www.ifsudestemg.edu.br/institucional/pro-reitorias/ensino/programas-e-projetos/encceja"
          }
      ]
  },
  {
      "title": "F",
      "links": [
          {
              "title": "Fale Conosco",
              "url": "https://www.ifsudestemg.edu.br/fale-conosco"
          },
          {
              "title": "Facebook",
              "url": "https://www.facebook.com/institutofederalsudestemg"
          }
      ]
  },
  {
      "title": "G",
      "links": [
          {
              "title": "Graduação",
              "url": "https://www.ifsudestemg.edu.br/barbacena/cursos/graduacao"
          },
          {
              "title": "Gabinete",
              "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/gabinete"
          },
          {
              "title": "Gestão institucional",
              "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/gestao-institucional"
          },
          {
              "title": "Gestão de pessoas",
              "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/gestao-de-pessoas"
          }
      ]
  },
  {
      "title": "I",
      "links": [
          {
              "title": "Institucional",
              "url": "https://www.ifsudestemg.edu.br/institucional"
          },
          {
              "title": "Informações classificadas",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/informacoes-classificadas"
          },
          {
              "title": "Integridade pública",
              "url": "https://www.ifsudestemg.edu.br/institucional/comissoes-e-comites/cgpi"
          },
          {
              "title": "Internacional",
              "url": "https://www.ifsudestemg.edu.br/institucional/pro-reitorias/extensao/estrutura-organizacional/driit/assessoria-de-relacoes-internacionais/assessoria-de-relacoes-internacionais"
          },
          {
              "title": "Instagram",
              "url": "https://www.instagram.com/ifsudestemg/"
          }
      ]
  },
  {
      "title": "J",
      "links": [
          {
              "title": "Juiz de fora",
              "url": "https://www.ifsudestemg.edu.br/juizdefora"
          }
      ]
  },
  {
      "title": "L",
      "links": [
          {
              "title": "Licitações e Contratos",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/licitacoes-e-contratos"
          },
          {
              "title": "Licitações",
              "url": "https://www.ifsudestemg.edu.br/licitacoes#b_start=0&c4=barbacena-148413"
          },
          {
              "title": "Licitações",
              "url": "https://www.ifsudestemg.edu.br/licitacoes#b_start=0&c4=barbacena-148413"
          }
      ]
  },
  {
      "title": "M",
      "links": [
          {
              "title": "Manhuaçu",
              "url": "https://www.ifsudestemg.edu.br/manhuacu"
          },
          {
              "title": "Muriaé",
              "url": "https://www.ifsudestemg.edu.br/muriae"
          },
          {
              "title": "Matrícula",
              "url": "https://www.ifsudestemg.edu.br/matriculas"
          }
      ]
  },
  {
      "title": "N",
      "links": [
          {
              "title": "Notícias ensino",
              "url": "https://www.ifsudestemg.edu.br/noticias/barbacena/ensino/"
          }
      ]
  },
  {
      "title": "O",
      "links": [
          {
              "title": "Oportunidades",
              "url": "https://www.ifsudestemg.edu.br/oportunidades#b_start=0"
          },
          {
              "title": "O instituto ",
              "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/o-instituto"
          },
          {
              "title": "O campus",
              "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/o-campus"
          },
          {
              "title": "Ouvidoria",
              "url": "https://www.ifsudestemg.edu.br/ouvidoria"
          },    {
            "title": "Órgãos colegiados ",
            "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/orgaos-colegiados"
        },
        {
            "title": "Órgãos estudantis",
            "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/orgaos-estudantis"
        }
      ]
  },
  {
      "title": "P",
      "links": [
          {
              "title": "Pós-Graduação",
              "url": "https://www.ifsudestemg.edu.br/barbacena/cursos/pos-graduacao"
          },
          {
              "title": "Participação Social",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/participacao-social"
          },
          {
              "title": "Perguntas Frequentes",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/perguntas-frequentes"
          },
          {
              "title": "Protocolo Integrado",
              "url": "https://sig.ifsudestemg.edu.br/public/jsp/portal.jsf"
          },
          {
              "title": "Portfólio de tecnologia",
              "url": "https://www.ifsudestemg.edu.br/institucional/pro-reitorias/pesquisa-posgraduacao-e-inovacao/inovacao/nittec/inovacao/portfolio"
          },
          {
              "title": "Pesquisa",
              "url": "https://www.ifsudestemg.edu.br/barbacena/institucional/pesquisa"
          },
          {
              "title": "PDI 2021 - 2025",
              "url": "https://www.ifsudestemg.edu.br/institucional/pdi/pdi-2021-2025"
          },
          {
              "title": "PDI 2014/2 - 2020 - Página antiga ",
              "url": "https://www.ifsudestemg.edu.br/institucional/pdi/pdi-2014-2020"
          },
          {
              "title": "Perguntas Frequentes",
              "url": "https://www.ifsudestemg.edu.br/perguntas-frequentes"
          },
          {
              "title": "Processo seletivo",
              "url": "https://www.ifsudestemg.edu.br/hotsites/processo-seletivo-2023-1"
          },
          {
              "title": "periodicos.",
              "url": "https://www-periodicos-capes-gov-br.ez367.periodicos.capes.gov.br/index.php?"
          }
      ]
  },
  {
      "title": "Q",
      "links": [
          {
              "title": "Quadro de Referência TAE",
              "url": "https://www.ifsudestemg.edu.br/institucional/gestao-de-pessoas/quadro-funcional/quadro-de-referencia-tae"
          }
      ]
  },
  {
      "title": "R",
      "links": [
          {
              "title": "Receitas e Despesas",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/receitas-e-despesas"
          },
          {
              "title": "Relatório de Gestão",
              "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/relatorios-de-gestao"
          },
          {
              "title": "Reitoria",
              "url": "https://www.ifsudestemg.edu.br/IFSudesteMG"
          },
          {
              "title": "Rio Pomba",
              "url": "https://www.ifsudestemg.edu.br/riopomba"
          },
          {
              "title": "RSS",
              "url": "https://www.ifsudestemg.edu.br/rss/o-que-e"
          },
          {
              "title": "Relações Internacionais",
              "url": "https://www.ifsudestemg.edu.br/institucional/pro-reitorias/extensao/estrutura-organizacional/driit"
          }
      ]
  },
  {
      "title": "S",
      "links": [
          {
              "title": "Servidores",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/servidores"
          },
          {
              "title": "Serviço de Informação ao Cidadão - SIC",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/servico-informacao-cidadao-sic"
          },
          {
              "title": "Segurança da Informação e Proteção de Dados Pessoais no IF Sudeste MG",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/protecao-de-dados-pessoais-no-if-sudeste-mg"
          },
          {
              "title": "SIPAC: Pesquisa pública",
              "url": "https://sig.ifsudestemg.edu.br/public/jsp/portal.jsf"
          },
          {
              "title": "Santos Dumont",
              "url": "https://www.ifsudestemg.edu.br/santosdumont"
          },
          {
              "title": "São João",
              "url": "https://www.ifsudestemg.edu.br/sjdr"
          },
          {
              "title": "Servidor",
              "url": "https://www.ifsudestemg.edu.br/barbacena/acesso-rapido/servidor"
          }
      ]
  },
  {
      "title": "T",
      "links": [
          {
              "title": "Técnicos",
              "url": "https://www.ifsudestemg.edu.br/barbacena/cursos/tecnicos"
          },
          {
              "title": "Terceirizados",
              "url": "https://www.ifsudestemg.edu.br/documentos-institucionais/unidades/reitoria/pro-reitorias/administracao/outros-documentos/terceirizados.pdf"
          },
          {
              "title": "Transparência e Prestação de Contas",
              "url": "https://www.ifsudestemg.edu.br/acessoainformacao/transparencia-e-prestacao-de-contas"
          },
          {
              "title": "Todas as Notícias",
              "url": "https://www.ifsudestemg.edu.br/noticias/barbacena/"
          }
      ]
  },
  {
      "title": "U",
      "links": [
          {
              "title": "Ubá",
              "url": "https://www.ifsudestemg.edu.br/uba"
          },
          {
            "title": "ÚLTIMOS EDITAIS",
            "url": "https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MzI3OQ=="
        }
      ]
  },
  {
      "title": "V",
      "links": [
          {
              "title": "Visão Geral",
              "url": "https://www.ifsudestemg.edu.br/institucional/unidades"
          }
      ]
  },
  {
      "title": "Y",
      "links": [
          {
              "title": "YouTube",
              "url": "https://www.youtube.com/IFSUDESTEMGVIDEOS"
          }
      ]
  }
 
]

isImputEmpty()

function isImputEmpty(){
    document.querySelector(".form-control-lg").addEventListener('input', function (e) {
        console.log("input:", e.target.value) 
        let teste = document.querySelector("#teste")
        if (e.target.value.length){
            teste.style.display = "flex"
        }
        else{
            teste.style.display = "none"
        }
    })
}
// function ordenarJson(json) {
//   // Cria um objeto para guardar os links de cada letra
//   var linksByLetter = {};

//   // Percorre o JSON e agrupa os links por letra
//   for (var i = 0; i < json.length; i++) {
//     var title = json[i].title;
//     var letter = title[0].toUpperCase(); // Pega a primeira letra do título
//     var links = json[i].links;

//     for (var j = 0; j < links.length; j++) {
//       var sublink = links[j];
//       var sublinkLetter = sublink.title[0].toUpperCase(); // Pega a primeira letra do título do sublink

//       if (!linksByLetter[sublinkLetter]) {
//         linksByLetter[sublinkLetter] = [];
//       }

//       linksByLetter[sublinkLetter].push({
//         title: sublink.title,
//         url: sublink.url
//       });
//     }
//   }

//   // Ordena as letras
//   var letters = Object.keys(linksByLetter).sort();

//   // Cria um novo array com os links ordenados por letra
//   var sortedJson = [];
//   for (var k = 0; k < letters.length; k++) {
//     var letter = letters[k];
//     var links = linksByLetter[letter];

//     // Cria um objeto para cada letra e adiciona os links
//     var letterObj = { title: letter, links: [] };
//     for (var l = 0; l < links.length; l++) {
//       letterObj.links.push(links[l]);
//     }

//     sortedJson.push(letterObj);
//   }

//   // Exibe o novo JSON no console
//   console.log(sortedJson);
// }




  function ordenarJadson(){
    alert('entrou')
    ordenarJson(json)
  }


  function removelinks(){
    var listaPai = document.getElementById('teste');
      for(child of listaPai.children){
      child.remove()
    }
    var ull = document.createElement("ul")
    ull.id = "listalinks"
    listaPai.appendChild(ull)
    return ;
  }
  
  function createDropdownMenu(title, links) {
    // Criar o elemento HTML do dropdown
    var dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");
    dropdown.classList.add("dddelete");
    
    // Criar o elemento HTML do botão do dropdown
    var dropdownButton = document.createElement("button");
    dropdownButton.classList.add("dropdown-button");
    dropdownButton.textContent = title;
    dropdown.appendChild(dropdownButton);
    
    // Criar o elemento HTML da lista de sublinks
    var dropdownList = document.createElement("ul");
    dropdownList.classList.add("dropdown-menu");
    
    
    // Adicionar cada sublink na lista
    for (var i = 0; i < links.length; i++) {
      var sublink = links[i];
    
      // Criar o elemento HTML do sublink
      var sublinkElement = document.createElement("li");
      var sublinkAnchor = document.createElement("a");
      sublinkAnchor.href = sublink.url;
      sublinkAnchor.textContent = sublink.title;
      sublinkElement.appendChild(sublinkAnchor);
      dropdownList.appendChild(sublinkElement);
    }
    
    // Adicionar a lista de sublinks ao dropdown
    dropdown.appendChild(dropdownList);
    
    // Adicionar evento de clique no botão do dropdown
    dropdownButton.addEventListener("click", function() {
      dropdownList.classList.toggle("show");
    });
    
    return dropdown;
  }
  
  var sidebarContent = document.getElementById("sidebarContainer");
  for (var i = 0; i < json.length; i++) {
    
    var dropdownTitle = json[i].title;
    var dropdownLinks = json[i].links;
    
    // Criar o elemento HTML do dropdown
    var dropdown = createDropdownMenu(dropdownTitle, dropdownLinks);
    
    // Adicionar o dropdown na seção de conteúdo
    sidebarContent.appendChild(dropdown);
  }

  function adicionarDropdowns(newJson){
    var sidebarContent = document.getElementById("sidebarContainer");
    var elementos = document.querySelectorAll('.dddelete');
    for (var i = 0; i < elementos.length; i++) {
      elementos[i].remove();
    }
    for (var i = 0; i < newJson.length; i++) {
      
      var dropdownTitle = newJson[i].title;
      var dropdownLinks = newJson[i].links;
      
      // Criar o elemento HTML do dropdown
      var dropdown = createDropdownMenu(dropdownTitle, dropdownLinks);
      
      // Adicionar o dropdown na seção de conteúdo
      sidebarContent.appendChild(dropdown);
    }
  }

const searchBar = document.getElementById('searchBar');
 searchBar.addEventListener('keyup', e => {
    search = searchBar.value
    lista = [];
    var links = [];
    for (let tituloPrincipal = 0; tituloPrincipal < json.length; tituloPrincipal++) {
        jl = json[tituloPrincipal].links;
        for(let buscarlink = 0 ; buscarlink < jl.length ; buscarlink++)
          links.push(jl[buscarlink])
  
      // Criar o elemento HTML do dropdown
      
    }
    if(!links){
      removelinks();
      return;
    }
    removelinks()
    getLinksMatchList(search,links);
});

function getLinksMatchList(termo,links){
 var lista = document.getElementById('listalinks');
  var tamanho = termo.length
  if(!tamanho){
    return ;
  }
  
   
    for (let i = 0; i < links.length; i++) {
      var sublink = links[i];
    
      // Criar o elemento HTML do sublink
      if(sublink.title.toUpperCase().includes(termo.toUpperCase())){
        
        var sublinkElement = document.createElement("li");
        var sublinkAnchor = document.createElement("a");
        sublinkAnchor.href = sublink.url;
        sublinkAnchor.textContent = sublink.title;
        sublinkElement.appendChild(sublinkAnchor);
        lista.appendChild(sublinkElement)
      }
    }
    return ;
}

const myLink = document.getElementById('azLink');
myLink.addEventListener('click', function() {
   adicionarDropdowns(orderJson)
   return;
});
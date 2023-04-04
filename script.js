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
    }
  ]
  
  function createDropdownMenu(title, links) {
    // Criar o elemento HTML do dropdown
    var dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");
    
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

  // for (var i = 0; i < json.length; i++) {
  //   var dropdownTitle = json[i].title;
  //   var dropdownLinks = json[i].links;
  
  //   // Criar o elemento HTML do dropdown
  //   var dropdown = document.createElement("div");
  //   dropdown.classList.add("dropdown");
  
  //   // Criar o elemento HTML do botão do dropdown
  //   var dropdownButton = document.createElement("button");
  //   dropdownButton.classList.add("btn", "btn-secondary", "dropdown-toggle");
  //   dropdownButton.type = "button";
  //   dropdownButton.textContent = dropdownTitle;
  //   dropdownButton.setAttribute("data-bs-toggle", "dropdown");
  //   dropdown.appendChild(dropdownButton);
  
  //   // Criar o elemento HTML da lista de sublinks
  //   var dropdownList = document.createElement("ul");
  //   dropdownList.classList.add("dropdown-menu");
  
  //   // Adicionar cada sublink na lista
  //   for (var j = 0; j < dropdownLinks.length; j++) {
  //     var sublink = dropdownLinks[j];
  
  //     // Criar o elemento HTML do sublink
  //     var sublinkElement = document.createElement("li");
  //     var sublinkAnchor = document.createElement("a");
  //     sublinkAnchor.classList.add("dropdown-item");
  //     sublinkAnchor.href = sublink.url;
  //     sublinkAnchor.textContent = sublink.title;
  //     sublinkElement.appendChild(sublinkAnchor);
  //     dropdownList.appendChild(sublinkElement);
  //   }
  
  //   // Adicionar a lista de sublinks ao dropdown
  //   dropdown.appendChild(dropdownList);
  
  //   // Adicionar o dropdown na seção de conteúdo
  //   sidebarContent.appendChild(dropdown);
  // }  

  

const vagasDeTrabalhoMock = [
  {
    titulo: "Desenvolvedor(a) Front-End Estágio",
    tecnologias: ["HTML", "CSS", "JavaScript", "React"],
    empresa: "Tech Solutions",
    horario: "Vespertino",
    bolsa: 1500,
    descricao: "Buscando um estagiário apaixonado por tecnologia para se juntar à nossa equipe de front-end e ajudar a criar interfaces incríveis para nossos clientes.",
  },
  {
    titulo: "Estágio em Análise de Dados",
    tecnologias: ["Python", "SQL", "Pandas", "PowerBI"],
    empresa: "Data Insights",
    horario: "Matutino",
    bolsa: 1800,
    descricao: "Oportunidade para atuar com análise de dados, gerando relatórios e dashboards que impactam diretamente as decisões de negócio.",
  },
  {
    titulo: "Estágio em UI/UX Design",
    tecnologias: ["Figma", "Adobe XD", "Pesquisa de Usuário"],
    empresa: "Creative Minds",
    horario: "Flexível",
    bolsa: 1400,
    descricao: "Vaga para quem ama design centrado no usuário. Você participará de todo o processo, desde a pesquisa inicial e wireframes até a prototipação final.",
  },
  {
    titulo: "Desenvolvedor(a) Back-End Estágio",
    tecnologias: ["Node.js", "JavaScript", "SQL", "Docker"],
    empresa: "Innovatech",
    horario: "Vespertino",
    bolsa: 1600,
    descricao: "Junte-se ao nosso time de backend para desenvolver e manter APIs robustas e escaláveis, aprendendo as melhores práticas de mercado.",
  },
  {
    titulo: "Estágio em Qualidade de Software (QA)",
    tecnologias: ["Testes Manuais", "Automação", "Jira", "Selenium"],
    empresa: "Quality First",
    horario: "Matutino",
    bolsa: 1300,
    descricao: "Buscamos um olhar atento aos detalhes para garantir a qualidade de nossos produtos através de testes manuais e da criação de scripts de automação.",
  },
  {
    titulo: "Estágio em DevOps",
    tecnologias: ["AWS", "Docker", "Kubernetes", "Linux"],
    empresa: "Cloud Masters",
    horario: "Flexível",
    bolsa: 1900,
    descricao: "Aprenda a automatizar e otimizar a infraestrutura de aplicações em nuvem, trabalhando com as tecnologias mais modernas de CI/CD e orquestração.",
  },
  {
    titulo: "Estágio em Marketing Digital",
    tecnologias: ["Google Analytics", "SEO", "Redes Sociais", "Copywriting"],
    empresa: "Growth Hackers",
    horario: "Vespertino",
    bolsa: 1200,
    descricao: "Oportunidade para criar e gerenciar campanhas de marketing digital, focando em crescimento, aquisição e engajamento de usuários.",
  },
  {
    titulo: "Desenvolvedor(a) Mobile Estágio (React Native)",
    tecnologias: ["React Native", "JavaScript", "Firebase", "Git"],
    empresa: "App Factory",
    horario: "Noturno",
    bolsa: 1750,
    descricao: "Vaga para desenvolver aplicativos móveis multiplataforma para iOS e Android utilizando React Native, em um ambiente de startup acelerado.",
  },
  {
    titulo: "Estágio em Cibersegurança",
    tecnologias: ["Redes", "Pentest", "Análise de Vulnerabilidades"],
    empresa: "Secure Corp",
    horario: "Matutino",
    bolsa: 2000,
    descricao: "Atue na linha de frente da proteção de dados, aprendendo a identificar e mitigar ameaças de segurança em sistemas e redes corporativas.",
  },
  {
    titulo: "Estágio em Gestão de Projetos de TI",
    tecnologias: ["Scrum", "Kanban", "Jira", "Trello"],
    empresa: "Agile Way",
    horario: "Vespertino",
    bolsa: 1550,
    descricao: "Apoie os gerentes de projeto no planejamento, execução e monitoramento de projetos de software, utilizando metodologias ágeis.",
  },
  {
    titulo: "Cientista de Dados Estágio",
    tecnologias: ["Machine Learning", "Python", "TensorFlow", "Scikit-learn"],
    empresa: "AI Future",
    horario: "Flexível",
    bolsa: 2100,
    descricao: "Trabalhe com grandes volumes de dados para treinar modelos de machine learning e criar soluções de inteligência artificial inovadoras.",
  },
  {
    titulo: "Estágio em Suporte Técnico de TI",
    tecnologias: ["Windows", "Hardware", "Redes", "Helpdesk"],
    empresa: "Help Desk Heroes",
    horario: "Noturno",
    bolsa: 1100,
    descricao: "Seja o ponto de contato para resolver problemas técnicos de hardware e software para nossos colaboradores, garantindo a continuidade das operações.",
  },
  {
    titulo: "Desenvolvedor(a) de Jogos Estágio (Unity)",
    tecnologias: ["Unity", "C#", "3D", "Blender"],
    empresa: "Pixel Play",
    horario: "Vespertino",
    bolsa: 1650,
    descricao: "Participe da criação de jogos incríveis! Você ajudará a programar mecânicas de jogo, interfaces e a integrar assets na engine Unity.",
  },
  {
    titulo: "Estágio em Finanças e Controladoria",
    tecnologias: ["Excel Avançado", "SAP", "Contabilidade"],
    empresa: "Capital Group",
    horario: "Matutino",
    bolsa: 1700,
    descricao: "Apoie a equipe financeira com conciliação bancária, relatórios gerenciais e análise de orçamento. Ótima oportunidade para estudantes de áreas correlatas.",
  },
  {
    titulo: "Estágio em Engenharia de Nuvem (Azure)",
    tecnologias: ["Azure", "Terraform", "CI/CD", "PowerShell"],
    empresa: "Blue Sky Cloud",
    horario: "Flexível",
    bolsa: 2200,
    descricao: "Foco em automação de infraestrutura na nuvem da Microsoft, criando e gerenciando recursos de forma programática e segura.",
  },
  {
    titulo: "Estágio de Product Owner (PO)",
    tecnologias: ["Jira", "Metodologias Ágeis", "Roadmap", "UX"],
    empresa: "Product First",
    horario: "Vespertino",
    bolsa: 1800,
    descricao: "Aprenda a ser a ponte entre o time de desenvolvimento e as necessidades do negócio, priorizando o backlog e definindo o futuro do produto.",
  },
  {
    titulo: "Estágio em Business Intelligence (BI)",
    tecnologias: ["Tableau", "SQL Server", "ETL", "Data Warehouse"],
    empresa: "Vision Data",
    horario: "Matutino",
    bolsa: 1700,
    descricao: "Transforme dados brutos em insights poderosos. Você será responsável pela criação de dashboards interativos e análises para nossos clientes.",
  },
  {
    titulo: "Desenvolvedor(a) Java Estágio",
    tecnologias: ["Java", "Spring Boot", "Maven", "PostgreSQL"],
    empresa: "Enterprise Systems",
    horario: "Vespertino",
    bolsa: 1600,
    descricao: "Vaga para atuar em sistemas corporativos robustos, utilizando o ecossistema Spring para criar soluções de back-end de alta performance.",
  },
  {
    titulo: "Estágio em Tech Recruiting (RH)",
    tecnologias: ["Recrutamento", "LinkedIn Recruiter", "Entrevistas"],
    empresa: "Talent Finders",
    horario: "Flexível",
    bolsa: 1400,
    descricao: "Se você ama tecnologia e pessoas, venha nos ajudar a encontrar os melhores talentos para as vagas mais desafiadoras do mercado.",
  },
  {
    titulo: "Desenvolvedor(a) PHP Estágio",
    tecnologias: ["PHP", "Laravel", "MySQL", "APIs REST"],
    empresa: "Web Crafters",
    horario: "Noturno",
    bolsa: 1350,
    descricao: "Manutenção e desenvolvimento de novas funcionalidades para sistemas web utilizando a framework Laravel e as melhores práticas de mercado.",
  },
  {
    titulo: "Estágio em Engenharia de Dados",
    tecnologias: ["Apache Spark", "Airflow", "Python", "SQL"],
    empresa: "Pipeline Corp",
    horario: "Flexível",
    bolsa: 2300,
    descricao: "Construa e mantenha pipelines de dados escaláveis, garantindo que os dados certos cheguem às equipes de análise e ciência de dados.",
  },
  {
    titulo: "Desenvolvedor(a) Go (Golang) Estágio",
    tecnologias: ["Go", "Microserviços", "gRPC", "Docker"],
    empresa: "Concurrency Inc.",
    horario: "Vespertino",
    bolsa: 1950,
    descricao: "Trabalhe com uma das linguagens que mais crescem no mercado, focando em sistemas de alta performance e concorrência para aplicações de back-end.",
  },
  {
    titulo: "Estágio em Conteúdo Técnico / Social Media",
    tecnologias: ["Redes Sociais", "Blog", "SEO", "Edição de Vídeo"],
    empresa: "Dev Explained",
    horario: "Flexível",
    bolsa: 1250,
    descricao: "Crie conteúdo relevante para a comunidade de desenvolvedores, incluindo posts para blog, vídeos curtos e gerenciamento de redes sociais.",
  },
  {
    titulo: "Desenvolvedor(a) Ruby on Rails Estágio",
    tecnologias: ["Ruby", "Rails", "PostgreSQL", "RSpec"],
    empresa: "Basecampers",
    horario: "Matutino",
    bolsa: 1850,
    descricao: "Desenvolva aplicações web de forma rápida e elegante com a framework Ruby on Rails, focando em produtividade e código limpo.",
  },
  {
    titulo: "Estágio em UX Writing",
    tecnologias: ["Copywriting", "UX", "Microcopy", "Testes A/B"],
    empresa: "Clarity UI",
    horario: "Flexível",
    bolsa: 1500,
    descricao: "Escreva os textos que guiam o usuário através da interface de nossos produtos. O objetivo é criar uma comunicação clara, útil e empática.",
  },
  {
    titulo: "Desenvolvedor(a) C++ Estágio (Games)",
    tecnologias: ["C++", "Unreal Engine", "Blueprints", "Perforce"],
    empresa: "Epic Games BR",
    horario: "Vespertino",
    bolsa: 2000,
    descricao: "Oportunidade para trabalhar na indústria de jogos, programando mecânicas e sistemas de gameplay em C++ na Unreal Engine.",
  },
  {
    titulo: "Estágio em Infraestrutura de TI",
    tecnologias: ["Redes de Computadores", "Active Directory", "VMware"],
    empresa: "Network Solutions",
    horario: "Noturno",
    bolsa: 1450,
    descricao: "Garanta que a infraestrutura de TI da empresa funcione perfeitamente, dando suporte a servidores, redes e estações de trabalho.",
  },
  {
    titulo: "Estágio como Scrum Master / Agilista",
    tecnologias: ["Scrum", "Agile Coach", "Kanban", "Métricas Ágeis"],
    empresa: "Sprint Fast",
    horario: "Matutino",
    bolsa: 1750,
    descricao: "Facilite as cerimônias ágeis, remova impedimentos e ajude o time de desenvolvimento a atingir seu potencial máximo de entrega de valor.",
  },
  {
    titulo: "Estágio em Vendas / BizDev (SaaS)",
    tecnologias: ["CRM", "Salesforce", "Prospecção", "Negociação"],
    empresa: "SaaSy",
    horario: "Vespertino",
    bolsa: 1300,
    descricao: "Atue na prospecção de novos clientes para nosso software, realizando demonstrações e acompanhando o funil de vendas.",
  },
  {
    titulo: "Estágio em Cloud (Google Cloud Platform)",
    tecnologias: ["GCP", "BigQuery", "Cloud Functions", "IAM"],
    empresa: "Google Cloud Partners",
    horario: "Flexível",
    bolsa: 2250,
    descricao: "Implemente soluções na nuvem do Google, ajudando nossos clientes a migrar e otimizar suas aplicações na GCP.",
  },
  {
    titulo: "Estágio para Redator(a) Técnico (Documentação)",
    tecnologias: ["Documentação de API", "Markdown", "Swagger", "Git"],
    empresa: "DocuWrite",
    horario: "Flexível",
    bolsa: 1600,
    descricao: "Crie documentações claras e precisas para nossas APIs e sistemas, ajudando outros desenvolvedores a usar nossas ferramentas.",
  },
  {
    titulo: "Desenvolvedor(a) iOS Estágio (Swift)",
    tecnologias: ["Swift", "SwiftUI", "Xcode", "Core Data"],
    empresa: "Apple Experts",
    horario: "Matutino",
    bolsa: 1900,
    descricao: "Desenvolva aplicativos nativos para o ecossistema Apple, utilizando as tecnologias mais recentes como Swift e SwiftUI.",
  },
  {
    titulo: "Desenvolvedor(a) Android Estágio (Kotlin)",
    tecnologias: ["Kotlin", "Jetpack Compose", "Android Studio", "Gradle"],
    empresa: "DroidWorks",
    horario: "Vespertino",
    bolsa: 1900,
    descricao: "Crie aplicativos nativos para Android com design moderno e alta performance utilizando Kotlin e Jetpack Compose.",
  },
  {
    titulo: "Estágio Front-End com Angular",
    tecnologias: ["Angular", "TypeScript", "RxJS", "NGRX"],
    empresa: "Component Co.",
    horario: "Flexível",
    bolsa: 1700,
    descricao: "Trabalhe no desenvolvimento de aplicações web complexas e de larga escala com a framework Angular, focando em arquitetura e componentização.",
  },
  {
    titulo: "Estágio Front-End com Vue.js",
    tecnologias: ["Vue.js", "Vuex", "Nuxt.js", "TypeScript"],
    empresa: "VueVibes",
    horario: "Vespertino",
    bolsa: 1750,
    descricao: "Participe da criação de interfaces reativas e componentizadas com Vue.js, uma das frameworks mais amigáveis para iniciantes.",
  },
  {
    titulo: "Desenvolvedor(a) .NET Estágio",
    tecnologias: ["C#", ".NET Core", "ASP.NET", "Entity Framework"],
    empresa: "DotNet Solutions",
    horario: "Flexível",
    bolsa: 1800,
    descricao: "Desenvolva aplicações web e APIs robustas com o ecossistema .NET da Microsoft, focando em soluções para o mundo corporativo.",
  },
  {
    titulo: "Estágio em SRE (Site Reliability Engineering)",
    tecnologias: ["Prometheus", "Grafana", "Kubernetes", "Go"],
    empresa: "Uptime Inc.",
    horario: "Flexível",
    bolsa: 2400,
    descricao: "Aprenda a garantir que sistemas complexos permaneçam online e performáticos, combinando engenharia de software e administração de sistemas.",
  },
  {
    titulo: "Desenvolvedor(a) Mobile com Flutter Estágio",
    tecnologias: ["Flutter", "Dart", "BLoC", "Firebase"],
    empresa: "Cross-Platform Experts",
    horario: "Matutino",
    bolsa: 1700,
    descricao: "Crie apps bonitos e nativos para mobile e web a partir de uma única base de código com o SDK de UI do Google.",
  },
  {
    titulo: "Estágio Back-End com Python e Django",
    tecnologias: ["Python", "Django", "Django REST Framework", "Celery"],
    empresa: "PyWeb",
    horario: "Vespertino",
    bolsa: 1650,
    descricao: "Desenvolva aplicações web complexas e seguras de forma rápida com a framework 'para perfeccionistas com prazos'.",
  },
  {
    titulo: "Estágio em Acessibilidade Web (A11y)",
    tecnologias: ["WCAG", "WAI-ARIA", "HTML Semântico", "Testes de Acessibilidade"],
    empresa: "Inclusive Web",
    horario: "Flexível",
    bolsa: 1500,
    descricao: "Garanta que nossas aplicações possam ser usadas por todas as pessoas, independentemente de suas habilidades, seguindo as diretrizes de acessibilidade.",
  },
  {
    titulo: "Estágio em Engenharia de Machine Learning",
    tecnologias: ["Python", "PyTorch", "MLOps", "AWS Sagemaker"],
    empresa: "IntelliModel",
    horario: "Flexível",
    bolsa: 2500,
    descricao: "Coloque modelos de machine learning em produção. Você irá trabalhar com o ciclo de vida completo, do treinamento ao deploy e monitoramento.",
  },
  {
    titulo: "Estágio em Testes de Performance",
    tecnologias: ["JMeter", "Gatling", "Análise de Gargalos", "Load Testing"],
    empresa: "SpeedTest Co.",
    horario: "Noturno",
    bolsa: 1600,
    descricao: "Descubra os limites de nossas aplicações, realizando testes de carga e estresse para identificar e resolver gargalos de performance.",
  },
  {
    titulo: "Estágio em Desenvolvimento Blockchain",
    tecnologias: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
    empresa: "Chain Innovations",
    horario: "Flexível",
    bolsa: 2300,
    descricao: "Desenvolva contratos inteligentes (smart contracts) e aplicações descentralizadas (dApps) na blockchain Ethereum.",
  },
  {
    titulo: "Estágio em Design Systems",
    tecnologias: ["Figma", "Storybook", "Styled Components", "Documentação"],
    empresa: "Systemic Design",
    horario: "Vespertino",
    bolsa: 1600,
    descricao: "Ajude a construir e manter a fonte única de verdade para nossos componentes de UI, garantindo consistência e escalabilidade no design.",
  },
  {
    titulo: "Estágio Back-End com Rust",
    tecnologias: ["Rust", "Tokio", "Actix-web", "Cargo"],
    empresa: "Ferris Systems",
    horario: "Flexível",
    bolsa: 2100,
    descricao: "Programe sistemas de altíssima performance com foco em segurança de memória, utilizando uma das linguagens mais amadas pela comunidade.",
  },
  {
    titulo: "Estágio Front-End com Svelte",
    tecnologias: ["Svelte", "SvelteKit", "TypeScript", "TailwindCSS"],
    empresa: "Lean Web",
    horario: "Matutino",
    bolsa: 1700,
    descricao: "Crie interfaces web rápidas e com menos código. Svelte é um compilador que transforma seus componentes em JavaScript eficiente.",
  },
  {
    titulo: "Estágio em Visualização de Dados (D3.js)",
    tecnologias: ["D3.js", "JavaScript", "SVG", "React"],
    empresa: "DataViz Masters",
    horario: "Flexível",
    bolsa: 1900,
    descricao: "Dê vida aos dados criando visualizações customizadas e interativas para a web utilizando a poderosa biblioteca D3.js.",
  },
  {
    titulo: "Estágio de Product Manager Técnico",
    tecnologias: ["APIs", "Arquitetura de Sistemas", "SQL", "Roadmap"],
    empresa: "Tech Roadmap Inc.",
    horario: "Vespertino",
    bolsa: 1950,
    descricao: "Trabalhe com equipes de engenharia para definir os requisitos técnicos de novas features e garantir que o produto seja construído de forma robusta.",
  },
  {
    titulo: "Estágio como Developer Advocate",
    tecnologias: ["Comunidade", "Conteúdo Técnico", "APIs", "Palestras"],
    empresa: "DevRel Co.",
    horario: "Flexível",
    bolsa: 1800,
    descricao: "Seja a voz da nossa empresa na comunidade de desenvolvedores, criando tutoriais, artigos e apresentações sobre nossas APIs e produtos.",
  },
];

function showToast(message) {
  const popup = document.createElement("div");
  popup.className = "app-popup success";
  popup.textContent = message;
  document.body.appendChild(popup);
  setTimeout(() => {
    popup.remove();
  }, 3500);
}

function normalizeString(str) {
  if (typeof str !== "string") return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

document.addEventListener("DOMContentLoaded", function () {
  const loggedInUserEmail = sessionStorage.getItem("loggedInUserEmail");
  if (!loggedInUserEmail) {
    window.location.href = "../auth/login.html";
    return;
  }

  const allUsers = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = allUsers.find((user) => user.email === loggedInUserEmail);

  document.getElementById("logout-button").addEventListener("click", function () {
    sessionStorage.removeItem("loggedInUserEmail");
    window.location.href = "../auth/login.html";
  });

  if (currentUser) {
    populateUserData(currentUser);
  } else {
    sessionStorage.removeItem("loggedInUserEmail");
    window.location.href = "../auth/login.html";
  }

  const currentPageFilename = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".sidebar-nav a");
  navLinks.forEach((link) => {
    const linkFilename = link.getAttribute("href").split("/").pop();
    if (linkFilename === currentPageFilename) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  const filtroForm = document.getElementById("filtro-form");
  const limparFiltroBtn = document.getElementById("limpar-filtro-btn");
  const listaVagasEl = document.getElementById("lista-vagas");
  const listaCandidaturasEl = document.getElementById("lista-candidaturas");

  if (filtroForm) {
    filtroForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const tecnologiaFiltro = normalizeString(document.getElementById("filtro-tecnologia").value);
      const horarioFiltro = normalizeString(document.getElementById("filtro-horario").value);
      const bolsaFiltro = parseFloat(document.getElementById("filtro-bolsa").value) || 0;

      const vagasFiltradas = vagasDeTrabalhoMock.filter((vaga) => {
        const correspondeTecnologia = tecnologiaFiltro === "" || vaga.tecnologias.some((t) => normalizeString(t).includes(tecnologiaFiltro)) || normalizeString(vaga.titulo).includes(tecnologiaFiltro);
        const correspondeHorario = horarioFiltro === "" || normalizeString(vaga.horario) === horarioFiltro;
        const correspondeBolsa = bolsaFiltro === 0 || vaga.bolsa >= bolsaFiltro;
        return correspondeTecnologia && correspondeHorario && correspondeBolsa;
      });

      renderVagas(vagasFiltradas);
    });

    limparFiltroBtn.addEventListener("click", function () {
      filtroForm.reset();
      renderVagas(vagasDeTrabalhoMock);
    });

    listaVagasEl.addEventListener("click", function (event) {
      if (event.target && event.target.classList.contains("botao-candidatar")) {
        const botao = event.target;
        const cardDaVaga = botao.closest(".vaga-card");
        const vagaId = parseInt(botao.dataset.vagaId, 10);
        const vagaAplicada = vagasDeTrabalhoMock[vagaId];

        if (!vagaAplicada || botao.disabled) return;

        let candidaturas = JSON.parse(localStorage.getItem("minhasCandidaturas")) || [];
        if (!candidaturas.some((c) => c.titulo === vagaAplicada.titulo && c.empresa === vagaAplicada.empresa)) {
          candidaturas.push(vagaAplicada);
          localStorage.setItem("minhasCandidaturas", JSON.stringify(candidaturas));
        }

        botao.textContent = "Candidatura Enviada!";
        botao.disabled = true;
        showToast("Candidatura realizada com sucesso!");

        setTimeout(() => {
          cardDaVaga.classList.add("fade-out");
          setTimeout(() => {
            cardDaVaga.remove();
          }, 500);
        }, 3000);
      }
    });
  }

  if (listaCandidaturasEl) {
    renderCandidaturas();
  }
});

function renderVagas(vagas) {
  const listaVagasEl = document.getElementById("lista-vagas");
  const contadorEl = document.getElementById("vagas-encontradas-contador");
  const candidaturas = JSON.parse(localStorage.getItem("minhasCandidaturas")) || [];

  listaVagasEl.innerHTML = "";

  const vagasParaMostrar = vagas.filter((vaga) => !candidaturas.some((c) => c.titulo === vaga.titulo && c.empresa === vaga.empresa));

  const numeroDeVagas = vagasParaMostrar.length;

  if (numeroDeVagas === 0) {
    contadorEl.textContent = "Nenhuma vaga encontrada com os filtros selecionados.";
    listaVagasEl.innerHTML = '<p style="text-align: center; color: #6c757d; padding: 20px;">Tente alterar ou limpar os filtros.</p>';
  } else if (numeroDeVagas === 1) {
    contadorEl.textContent = "1 vaga encontrada.";
  } else {
    contadorEl.textContent = `${numeroDeVagas} vagas encontradas.`;
  }

  vagasParaMostrar.forEach((vaga) => {
    const originalIndex = vagasDeTrabalhoMock.findIndex((mockVaga) => mockVaga.titulo === vaga.titulo && mockVaga.empresa === vaga.empresa);
    const tecnologiasHTML = vaga.tecnologias.map((t) => `<span class="tag">${t}</span>`).join("");
    const vagaCardHTML = `
            <div class="vaga-card">
                <div class="vaga-header">
                    <h3>${vaga.titulo}</h3>
                    <span class="empresa">${vaga.empresa}</span>
                </div>
                <div class="vaga-detalhes">
                    <span><i class="fa-solid fa-clock"></i> ${vaga.horario}</span>
                    <span><i class="fa-solid fa-hand-holding-dollar"></i> R$ ${vaga.bolsa},00</span>
                </div>
                <p class="vaga-descricao">${vaga.descricao}</p>
                <div class="vaga-tecnologias">
                    ${tecnologiasHTML}
                </div>
                <div class="vaga-actions">
                    <button class="botao-candidatar" data-vaga-id="${originalIndex}">Candidatar-se</button>
                </div>
            </div>
        `;
    listaVagasEl.innerHTML += vagaCardHTML;
  });
}

function renderCandidaturas() {
  const listaCandidaturasEl = document.getElementById("lista-candidaturas");
  const candidaturas = JSON.parse(localStorage.getItem("minhasCandidaturas")) || [];
  listaCandidaturasEl.innerHTML = "";

  if (candidaturas.length === 0) {
    listaCandidaturasEl.innerHTML = '<p style="text-align: center; color: #6c757d; padding: 40px; font-size: 1.1em;">Você ainda não se candidatou a nenhuma vaga.</p>';
  } else {
    candidaturas.forEach((vaga) => {
      const tecnologiasHTML = vaga.tecnologias.map((t) => `<span class="tag">${t}</span>`).join("");
      const vagaCardHTML = `
          <div class="vaga-card">
              <div class="vaga-header"><h3>${vaga.titulo}</h3><span class="empresa">${vaga.empresa}</span></div>
              <div class="vaga-detalhes"><span><i class="fa-solid fa-clock"></i> ${vaga.horario}</span><span><i class="fa-solid fa-hand-holding-dollar"></i> R$ ${vaga.bolsa},00</span></div>
              <p class="vaga-descricao">${vaga.descricao}</p>
              <div class="vaga-tecnologias">${tecnologiasHTML}</div>
              <div class="vaga-actions"><button class="botao-candidatar" disabled>Candidatura Realizada</button></div>
          </div>
      `;
      listaCandidaturasEl.innerHTML += vagaCardHTML;
    });
  }
}

function populateUserData(user) {
  const mandatoryFields = { weight: 50, fields: ["nome", "email", "estadoCivil", "telefone1", "sexo", "dataNascimento", "pcd", "raca"] };
  const additionalFields = { weight: 50, fields: ["foto", "habilidades", "cursoInteresse", "idiomas", "sintese", "pretensaoBolsa", "turnoDisponivel", "complementos"] };
  const calculateProgress = (fieldGroup, userData) => {
    let completed = fieldGroup.fields.filter((field) => userData[field] && userData[field] !== "").length;
    return (completed / fieldGroup.fields.length) * fieldGroup.weight;
  };
  const totalPercentage = Math.round(calculateProgress(mandatoryFields, user) + calculateProgress(additionalFields, user));
  document.querySelector(".progress-bar-fill").style.width = totalPercentage + "%";
  document.querySelector(".progress-info .progress-text span:last-child").textContent = totalPercentage + "%";
  document.querySelector(".progress-info .progress-text span:first-child").textContent = totalPercentage === 100 ? "Perfil completo!" : "Perfil quase completo";
  const notificationCard = document.getElementById("notificacoes");
  const vagasContainer = document.getElementById("vagas-container");
  if (notificationCard && vagasContainer) {
    if (totalPercentage === 100) {
      notificationCard.style.display = "none";
      vagasContainer.style.display = "block";
      renderVagas(vagasDeTrabalhoMock);
    } else {
      notificationCard.style.display = "block";
      vagasContainer.style.display = "none";
    }
  }
  document.getElementById("user-name").textContent = user.nome || "Usuário";
  const photoContainer = document.getElementById("profile-picture-container");
  const userPhotoEl = document.getElementById("user-photo");
  const existingIcon = photoContainer.querySelector(".default-user-icon");
  if (existingIcon) existingIcon.remove();
  if (user.foto) {
    userPhotoEl.src = user.foto;
    userPhotoEl.style.display = "block";
  } else {
    userPhotoEl.style.display = "none";
    const defaultIcon = document.createElement("i");
    defaultIcon.className = "fa-solid fa-user default-user-icon";
    photoContainer.appendChild(defaultIcon);
  }
  for (const key in user) {
    if (Object.hasOwnProperty.call(user, key)) {
      const displayElement = document.getElementById(`display-${key}`);
      if (displayElement) {
        displayElement.textContent = user[key] || "--";
      }
      const inputElement = document.querySelector(`[name="${key}"]`);
      if (inputElement) {
        inputElement.value = user[key] || "";
      }
    }
  }
}

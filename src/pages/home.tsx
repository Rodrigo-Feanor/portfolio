import { Link } from "react-router-dom"

import im1 from "../assets/img1.jpg"
import im2 from "../assets/img2.png"

interface Experience {
  id: number
  company: string
  position: string
  period: string
  description: string
}

const Home = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      company: "INDRA MINSAIT",
      position: "Dono do Produto / Analista de Requisitos",
      period: "setembro de 2022 a março de 2023 | junho de 2023 até o presente",
      description:
        `Principais atividades:
        - Garantir entrega de valor ao cliente
        - Atuar como interface entre cliente e equipe de desenvolvimento
        - Gerenciar o backlog do produto
        - Escrever documentação de requisitos
        - Acompanhar as atividades do time Scrum
        - Acompanhar e atualizar indicadores na plataforma da empresa
        - Elaborar artefatos de contratação pública de soluções de TIC`,
    },
    {
      id: 2,
      company: "INDRA MINSAIT",
      position: "Preposto Técnico",
      period: `setembro de 2022 a março de 2023 | junho de 2023 até o
      presente
      `,
      description:
        `Principais atividades:
      - Gerenciar time do contrato
      - Atualizar e enviar os boletins de medição ao cliente
      - Estabelecer e fortalecer relacionamento com o cliente
      - Acompanhar e atualizar indicadores na plataforma da empresa
      - Fornecer informações do contrato à gestão regional da empresa
      - Planejar as atividades técnicas do contrato e suas equipes
      - Realizar o planejamento financeiro do contrato
      `,
    },
    {
      id: 3,
      company: "SECRETARIA DE EDUCAÇÃO E ESPORTES DO ESTADO DE PERNAMBUCO",
      position: "Analista de Planejamento Estratégico",
      period: "Setembro de 2015 a setembro de 2021",
      description:
        `Principais atividades:
      - Elaborar o mapa da estratégia
      - Gerenciar índices e indicadores educacionais
      - Articular ações dos projetos em parceria
      - Elaborar relatório anual de indicadores
      - Definir as metas do IDEPE para a iniciativa de gestão por resultados
      - Realizar o cálculo do bônus de desempenho educacional
      - Realizar o cálculo do IDE para repasse do ICMS aos municípios
      `,
    },
  ]

  const handleDownloadCV = (): void => {
    const link = document.createElement("a")
    link.href = '/public/CURRÍCULUM VITAE - RODRIGO CAVALCANTI.pdf'
    link.download = "curriculo.pdf"
    link.click()
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Olá, eu sou um <span className="text-primary-600">Analista de Sistemas</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Um profissional com habilidades analiticas e experiencia em traduzir informaçoes complexas em soluçoes efetivas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/projetos" className="btn-primary">
                  Ver Projetos
                </Link>
                <Link to="/contato" className="btn-secondary">
                  Entre em Contato
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={im1}
                  alt="Desenvolvedor"
                  className="rounded-full w-80 h-80 object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white p-4 rounded-full shadow-lg">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={im2}
                alt="Sobre mim"
                className="rounded-lg shadow-lg w-[300px] h-[300px]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre Mim</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sou um analista de sistemas com 10 anos de experiência no setor público, atuando em projetos estratégicos e de impacto à sociedade.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                O desejo de melhorar a experiência digital dos usuários é o que me move. Portanto, estou sempre atualizado com as melhores práticas de desenvolvimento.               
                Adoro trabalhar em equipe e estou sempre em busca de novos
                desafios e aprendizados.
              </p>
              <button onClick={handleDownloadCV} className="btn-primary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experiências Profissionais</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Minha jornada profissional construindo soluções digitais inovadoras
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience) => (
              <div key={experience.id} className="card p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.position}</h3>
                    <p className="text-lg text-primary-600 font-medium">{experience.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                      {experience.period}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vamos trabalhar juntos?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a novos projetos e oportunidades. Entre em contato e vamos conversar!
          </p>
          <Link
            to="/contato"
            className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Entre em Contato
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

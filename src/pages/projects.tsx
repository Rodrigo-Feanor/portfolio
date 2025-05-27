import img1 from "../assets/111.jpeg"
import img2 from "../assets/222.jpeg"
import img3 from "../assets/333.jpeg"

export interface Project {
  id: string
  title: string
  description: string
  imageProject: string
  link: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Pe no Campus",
    description:
      "O programa tem o objetivo de estimular o acesso e a permanência de estudantes de baixa renda nas instituições de ensino superior localizadas em todo o território nacional.",
    imageProject: img3,
    link: "https://www3.educacao.pe.gov.br/ppc/",
  },
  {
    id: "2",
    title: "Matricula 2025",
    description:
      "Plataforma oficial do Governo do Estado de Pernambuco destinada à realização de matrículas para estudantes da rede estadual de ensino.",
    imageProject: img2,
    link: "https://matricularapida.pe.gov.br/#/",
  },
  {
    id: "3",
    title: "Coopera TI",
    description:
      "Iniciativa dedicada a promover a cooperação e a transparência no setor público de tecnologia.",
    imageProject: img1,
    link: "https://cooperati.educacao.pe.gov.br/",
  },
]

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meus Projetos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e projetos que demonstram minhas habilidades em desenvolvimento front-end.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum projeto encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card group hover:scale-105 transition-transform duration-300">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={project.imageProject}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 h-[300px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm text-center"
                    >
                      Link de Acesso
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects

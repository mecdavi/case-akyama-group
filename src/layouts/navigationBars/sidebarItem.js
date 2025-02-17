const sidebarItem =[
    { header: 'Home' ,
      items:[
        {
            title: 'Dashboard',
            icon: 'mdi-home',
            to: '/'
        },
      ]
    },

    { header: 'Cadastros',
      items:[
        {
            title: 'Turmas',
            icon: 'mdi-google-classroom ',
            to: '/turmas'
        },
        {
          title: 'Matérias',
          icon: 'mdi-bookshelf',
          to: '/materias'
        },
        {
          title: 'Alunos',
          icon: 'mdi-account',
          to: '/alunos'
        },
        {
          title: 'Professores',
          icon: 'mdi-account-tie',
          to: '/professores'
        },
        {
            title: 'Provas',
            icon: 'mdi-book-open-variant',
            to: '/provas'
        },
      ]
    },
    { header: 'Acompanhamento',
        items:[
          {
              title: 'Lançar Notas',
              icon: 'mdi-alpha-a-circle',
              to: '/nota-prova'
          },
          {
              title: 'Média Alunos',
              icon: 'mdi-account-box',
              to: '/nota-aluno'
          },
        ]
      },
];

export default sidebarItem;
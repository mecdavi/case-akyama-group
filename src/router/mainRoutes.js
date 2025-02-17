const MainRoutes = {
    meta: {
        requiresAuth: false
    },
    children: [
        {
            name: 'alunos',
            path: '/alunos',
            component: () => import('../pages/alunos/index.vue')
        },
        {
            name: 'alunos-show',
            path: '/alunos/show/:id',
            props:true,
            component: () => import('../pages/alunos/show.vue'),
            meta: { fdisable: true}

        },
        {
            name: 'alunos-edit',
            path: '/alunos/edit/:id',
            props:true,
            component: () => import('../pages/alunos/show.vue'),
            meta: { fdisable: false}
        },
        {
            name: 'professores',
            path: '/professores',
            component: () => import('../pages/professores/index.vue')
        },
        {
            name: 'professores-show',
            path: '/professores/show/:id',
            component: () => import('../pages/professores/show.vue'),
            meta: { fdisable: true}
        },
        {
            name: 'professores-edit',
            path: '/professores/edit/:id',
            component: () => import('../pages/professores/show.vue'),
            meta: { fdisable: false}
        },
        {
            name: 'materias',
            path: '/materias',
            component: () => import('../pages/materias/index.vue')
        },
        {
            name: 'materias-show',
            path: '/materias/show/:id',
            component: () => import('../pages/materias/show.vue'),
            meta: { fdisable: true}
        },
        {
            name: 'materias-edit',
            path: '/materias/edit/:id',
            component: () => import('../pages/materias/show.vue'),
            meta: { fdisable: false}
        },
        {
            name: 'turmas',
            path: '/turmas',
            component: () => import('../pages/turmas/index.vue')
        },
        {
            name: 'turmas-show',
            path: '/turmas/show/:id',
            component: () => import('../pages/turmas/show.vue'),
            meta: { fdisable: true}
        },
        {
            name: 'turmas-edit',
            path: '/turmas/edit/:id',
            component: () => import('../pages/turmas/show.vue'),
            meta: { fdisable: false}
        },
        {
            name: 'provas',
            path: '/provas',
            component: () => import('../pages/provas/index.vue')
        },
        {
            name: 'provas-show',
            path: '/provas/show/:id',
            component: () => import('../pages/provas/show.vue'),
            meta: { fdisable: true}
        },
        {
            name: 'provas-edit',
            path: '/provas/edit/:id',
            component: () => import('../pages/provas/show.vue'),
            meta: { fdisable: false}
        },
        {
            name: 'nota-prova',
            path: '/nota-prova',
            component: () => import('../pages/nota-prova/index.vue')
        },
        {
            name: 'nota-prova-show',
            path: '/nota-prova/show/:id',
            component: () => import('../pages/nota-prova/show.vue'),
            meta: { fdisable: true}
        },
        {
            name: 'nota-prova-edit',
            path: '/nota-prova/edit/:id',
            component: () => import('../pages/nota-prova/show.vue'),
            meta: { fdisable: false}
        },
        {
            name: 'nota-aluno',
            path: '/nota-aluno',
            component: () => import('../pages/nota-aluno/index.vue')
        },
        {
            name: 'dashboard',
            path: '/',
            component: () => import('../pages/nota-aluno/index.vue')
        },
       
    ]
};

export default MainRoutes;

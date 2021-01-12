
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { 
        path: '',
        name: 'home',
        component: () => import('pages/PageNote.vue')
      },
      {
        path: 'create',
        name: 'create',
        component: () => import('pages/PageEditor.vue') 
      },
      {
        path: 'note/:id/edit',
        name: 'edit',
        component: () => import('pages/NoteEdit.vue') 
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

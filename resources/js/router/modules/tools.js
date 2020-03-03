/** When your routing table is too long, you can split it into small modules**/
import Layout from '@/layout';

const toolsRoutes = {
  path: '/tools',
  component: Layout,
  redirect: '/tools',
  name: 'Tools',
  meta: {
    title: 'Tools',
    icon: 'tree',
    // permissions: ['view menu excel'],
  },
  children: [
    {
      path: 'view-cache',
      component: () => import('@/views/tools/cacheView'),
      name: 'cache view',
      meta: { title: 'Cache View\'s' },
    },
    {
      path: 'clear-cache',
      component: () => import('@/views/tools/clearCache'),
      name: 'clearCache',
      meta: { title: 'Clear Cache' },
    },
    // {
    //   path: 'export-merge-header',
    //   component: () => import('@/views/excel/MergeHeader'),
    //   name: 'MergeHeader',
    //   meta: { title: 'mergeHeader' },
    // },
    // {
    //   path: 'upload-excel',
    //   component: () => import('@/views/excel/UploadExcel'),
    //   name: 'UploadExcel',
    //   meta: { title: 'uploadExcel' },
    // },
  ],
};

export default toolsRoutes;

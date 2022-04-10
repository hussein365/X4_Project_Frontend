import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Home',
    icon: 'bx-home-circle',
    link: '/home',
  },
  {
    id: 2,
    label: 'Masterdata',
    icon: 'bx-home-circle',
    subItems: [
      {
        i3: 3,
        label: 'Masterdata with tree TA_TYP TA',
        link: '/tree_ta_typ_ta',
        parentI2: 2,
      },
      {
        i3: 4,
        label: 'Masterdata with tree ',
        link: '/tree/All',
        parentI2: 2,
      },
    ],
  },
  {
    id: 5,
    label: 'Archive FIO',
    icon: 'bx-home-circle',
    subItems: [
      {
        id: 6,
        label: 'Archive-11',
        link: '/archive11',
        parentId: 5,
      },
      {
        id: 7,
        label: 'Archive-12',
        link: '/archive12/All',
        parentId: 5,
      },
      {
        id: 8,
        label: 'Archive-13',
        link: '/archive13',
        parentId: 5,
      },
      {
        id: 9,
        label: 'Archive-14',
        link: '/archive14',
        parentId: 5,
      },
      {
        id: 10,
        label: 'Archive-16',
        link: '/archive16',
        parentId: 5,
      },
      {
        id: 11,
        label: 'Archive-18',
        link: '/archive18',
        parentId: 5,
      },
    ],
  },
  {
    id: 12,
    label: 'Batchjob',
    icon: 'bx-home-circle',
    subItems: [
      {
        i3: 13,
        label: 'Batchjob(Archive)',
        link: '/batchjob_archive',
        parentI2: 12,
      },
      {
        i3: 14,
        label: 'Batchjob Parameter',
        link: '/batchjob_parameter',
        parentI2: 12,
      },
      {
        i3: 15    ,
        label: 'Batchjob(Bepro) Neu',
        link: '/batchjob_bepro_neu',
        parentI2: 12,
      },
      {
        i3: 16,
        label: 'Batchjob Settings',
        link: '/batchjob_settings',
        parentI2: 12,
      },
      {
        i3: 17,
        label: 'helloworld',
        link: '/helloworld',
        parentI2: 12,
      }
    ],
    },
];

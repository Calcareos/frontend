import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Opciones',
    title: true
  },
  {
    name: 'Corte',
    url : '/corte',
    iconComponent : {name : 'cil-crop'},
    children : [
      {
        name: 'Listar Ordenes',
        url:'/corte/lista'
      }
    ]
  }
];

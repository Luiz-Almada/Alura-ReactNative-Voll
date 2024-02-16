import Principal from '../Tabs/Principal';
import Consultas from '../Tabs/Consultas';
import Explorar from '../Tabs/Explorar';
import Perfil from '../Tabs/Perfil';

export const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851"
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#FFF"
}

export const tabs = [
  {
    name: 'Principal',
    component: Principal,
    icon: 'home'
  },
  {
    name: 'Consultas',
    component: Consultas,
    icon: 'calendar'
  },
  {
    name: 'Explorar',
    component: Explorar,
    icon: 'search'
  },  
  {
    name: 'Perfil',
    component: Perfil,
    icon: 'person'
  },
]
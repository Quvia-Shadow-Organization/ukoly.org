export default <NavbarObject>{
  settings: {
    width: [null, '10rem', '15rem'],
    name: 'ukoly.org',
    mobile: {
      height: '2.65rem',
      itemWidth: '100%'
    }
  },
  items: [
    {
      name: 'Home',
      icon: 'home',
      mobile: {
        name: 'Home'
      },
      path: '/'
    },
    {
      name: 'About',
      icon: 'info',
      mobile: {
        name: 'Info'
      },
      path: '/about'
    }
  ]
}

type NavbarObject = {
  settings: {
    width: string[]
    name: string
    mobile: {
      height: string
      itemWidth: string
    }
  }
  items: {
    name: string
    path: string
    icon?: string
    mobile: {
      name?: string
    }
    type: 'main' | 'mini' | 'category'
  }[]
}

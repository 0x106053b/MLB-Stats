const AppAni = {
    init: {
      x: window.innerWidth < 1024 ? '150%' : '-150%',
      transition: { type: 'spring', duration: 0 }
    },
    ani: {
      x: 0,
      y: 0,
      transition: { type: 'spring', duration: 0.6 }
    },
    exit: {
      x: window.innerWidth < 1024 ? '150%' : '-150%',
      transition: { type: 'spring', duration: 0.6 }
    },
  }

export default AppAni
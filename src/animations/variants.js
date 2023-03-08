export const textContainerVariants = {
    init:{
      opacity:0,
      x:-50
    },
    show:{
      opacity:1,
      x:0,
      transition:{
        duration:0.75,
        staggerChildren:0.3
      }
    }
  }
  export const textContainerWithoutXVariants = {
    init:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        duration:0.75,
        staggerChildren:0.3
      }
    }
  }
export const CardContainerVariants = {
    init:{
      opacity:0,
      x:-50
    },
    show:{
      opacity:1,
      x:0,
      transition:{
        duration:0.75,
        staggerChildren:0.75
      }
    }
  }
export const TextVariants = {
    init:{
      opacity:0,
      x:-50
    },
    show:{
      opacity:1,
      x:0,
      transition:{
        duration:0.5
      }
    }
  }

export const ImgVariants = {
    init:{
      opacity:0,
      x:250
    },
    show:{
      opacity:1,
      x:0,
      transition:{
        duration:1,
        delay:0.75
      }
    }
  }

export 
const FeaturesVariants = {
  init:{
    opacity:0,
    y:250,
    x:'-50%'
  },
  show:{
    opacity:1,
    y:0,
    x:'-50%',
    transition:{
      duration:1.25,
      delay:1.25
    }
  },
  mobInit:{
    opacity:0,
  },
  mobShow:{
    opacity:1,
    transition:{
      duration:1.25,
      delay:1.25
    }
  }
}

export const navBarVariants = {
  open:{
    clipPath:[
      'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
      'polygon(100% 0, 100% 0, 100% 100%, 25% 100%)',
      'polygon(0 0, 100% 0, 100% 100%, 25% 100%)',
      'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
    ],
    transition:{
      duration:0.5,
      times: [0, 0.4, 0.9, 1] 
    }
  }, 
    close:{
      clipPath:[
        'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        'polygon(75% 0, 100% 0, 100% 100%, 0 100%)',
        'polygon(75% 0, 100% 0, 100% 100%, 100% 100%)',
        'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
      ],
      transition:{
        duration:0.5,
        times: [0, 0.4, 0.9, 1] 
      }
    }
}

export const darkModeTogglerVariants = {
  init:{
    x:-50,
    transformOrigin:'left bottom',
    rotate:'-90deg',
    opacity:0
  },
  show:{
    x:0,
    transformOrigin:'left bottom',
    rotate:'0deg',
    opacity:1
  },
  exit:{
    x:50,
    transformOrigin:'right center',
    rotate:'90deg',
    opacity:0
  }
}
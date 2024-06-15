const transition = {
  duration: 1.75,
  ease: [0.165, 0.84, 0.44, 1],
};

export const variants = {
  fadeUp: {
    hidden: {
      y: "200px",
    },
    visible: {
      y: "0px",
    },
    transition,
  },
  fadeIn: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    transition,
  },
};

export const textFade = {
  overline: {
    initial: {
      y: "20px",
    },
    animate: {
      y: 0,
    },
    transition: {
      duration: 1.75,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
  headline: {
    initial: {
      y: "100px",
    },
    animate: {
      y: 0,
    },
    transition: {
      duration: 1.75,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },

  text: {
    initial: {
      y: "80px",
    },
    animate: {
      y: 0,
    },
    transition: {
      duration: 1.75,
      ease: [0.165, 0.84, 0.44, 1],
      delay: 1.25,
    },
  },

  line: {
    initial: {
      scaleX: 0,
      transformOrigin: "left",
    },
    animate: {
      scaleX: 1,
    },
    transition: {
      duration: 2,
      ease: [0.165, 0.84, 0.44, 1],
      delay: 1.75,
    },
  },
};
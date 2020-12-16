import chroma from 'chroma-js';

const baseColors = {
  none: 'transparent',
  primaryVariant: '#353535',
  primary: '#6E6E6E',
  secondary: '#0F6CFF',
  secondaryVariant: '#CCD32B',
  buttonSupport: '#D3D3D3',
  primaryBackground: '#FAFAFD',
  box: '#1A42BC',
  error: '#ED091C',
  success: '#A2D9A2',
  textNegative: '#FFFFFF',
  textLabel: '#353535',
  primaryLink: '#0B68B8',
  textPositive: '#000000',
  borderSupport: '#949494',
  secondaryBackground: '#F5F8FB',
  reserve01: '#c1c5c7',
  reserve02: '#C0C3C7',
  reserve03: '#dcdcdc',
  neutralAlert: '#FF9429',
  focus: '#949494',
};

export default {
  // TODO: Remove after CORE Fix missing default theme
  idVerification: {
    verifyIdentity: {
      button: {},
    },
    photo: {
      captured: {
        checked: {},
      },
    },
  },
  typography: {
    primary: {
      color: baseColors.primary,
    },
    secondary: {
      color: baseColors.secondary,
    },
    textPrimary: {
      color: baseColors.textPositive,
    },
    textSecondary: {
      color: baseColors.textNegative,
    },
    error: {
      color: chroma(baseColors.error).brighten(0.5).hex(),
    },
  },
  paragraph: {
    light: {
      color: baseColors.textNegative,
    },
    dark: {
      color: baseColors.textPositive,
    },
  },

  slider: {
    trackColor: baseColors.box,
    railColor: baseColors.reserve03,
    handleColor: baseColors.textPositive,
    background: baseColors.secondaryBackground,
  },

  inputNumber: {
    border: baseColors.borderSupport,
  },

  asyncDropdown: {
    control: {
      border: baseColors.borderSupport,
      focused: {
        border: baseColors.borderSupport,
      },
      valid: {
        border: baseColors.success,
      },
      invalid: {
        border: baseColors.error,
      },
    },
    list: {
      background: baseColors.primaryBackground,
      border: baseColors.borderSupport,
      color: baseColors.primaryVariant,
    },
    option: {
      hoverBackground: baseColors.buttonSupport,
    },
  },
  alerts: {
    success: {
      color: baseColors.textNegative,
      background: baseColors.success,
      border: baseColors.success,
      link: baseColors.textNegative,
    },
    info: {
      color: baseColors.textNegative,
      background: baseColors.focus,
      border: baseColors.focus,
      link: baseColors.textNegative,
    },
    error: {
      color: baseColors.textNegative,
      background: baseColors.error,
      border: baseColors.error,
      link: baseColors.textNegative,
    },
    warning: {
      color: baseColors.textNegative,
      background: baseColors.neutralAlert,
      border: baseColors.neutralAlert,
      link: baseColors.textNegative,
    },
  },
  alertUi: {
    color: baseColors.textNegative,
    background: baseColors.error,
    border: baseColors.textNegative,
    link: baseColors.textNegative,
    success: {
      color: baseColors.background,
      background: baseColors.success,
      border: baseColors.success,
    },
    info: {
      color: baseColors.primary,
      background: baseColors.focus,
      border: baseColors.focus,
    },
    error: {
      color: baseColors.textNegative,
      background: baseColors.error,
      border: baseColors.error,
    },
    warning: {
      color: baseColors.textNegative,
      background: baseColors.neutralAlert,
      border: baseColors.neutralAlert,
    },
  },
  tableUi: {
    head: {
      background: baseColors.reserve03,
      color: baseColors.primaryVariant,
    },
    body: {
      background: baseColors.secondaryBackground,
      backgroundHover: baseColors.primaryBackground,
      color: baseColors.primaryVariant,
      invalid: baseColors.error,
      edit: {
        color: baseColors.buttonSupport,
      },
    },
    NoDataMessage: {
      background: baseColors.secondaryBackground,
      color: baseColors.primary,
    },
    blurred: baseColors.reserve02,
  },
  table: {
    header: baseColors.reserve03,
    rows: baseColors.secondaryBackground,
    color: baseColors.primaryVariant,
    border: baseColors.borderSupport,
    invalidRow: baseColors.error,
    mobile: {
      title: baseColors.primary,
      edit: {
        color: baseColors.borderSupport,
      },
    },
    body: {
      background: baseColors.secondaryBackground,
      backgroundHover: baseColors.primaryBackground,
      color: baseColors.primaryVariant,
      invalid: baseColors.error,
      edit: {
        color: baseColors.textNegative,
      },
    },
    NoDataMessage: {
      background: baseColors.secondaryBackground,
      color: baseColors.primary,
    },
    blurred: baseColors.primary,
  },
  uploadUi: {
    background: baseColors.primaryBackground,
    border: baseColors.buttonSupport,
    color: baseColors.primary,
    disabled: {
      color: baseColors.buttonSupport,
    },
    dragOver: {
      border: baseColors.secondary,
    },
    icon: {
      fill: baseColors.box,
    },
  },
  uploadDocButton: {
    background: baseColors.success,
    color: baseColors.textLabel,
    border: baseColors.textNegative,
  },
  button: {
    default: {
      background: baseColors.secondary,
      color: baseColors.textPositive,
      hoverBackground: chroma(baseColors.secondary).darker(0.7).hex(),
    },

    primary: {
      color: baseColors.primary,
      hoverBackground: chroma(baseColors.buttonSupport).darker(0.7).hex(),
      border: baseColors.primaryVariant,
      background: baseColors.buttonSupport,
    },
    secondary: {
      background: baseColors.secondary,
      color: baseColors.textNegative,
      hoverBackground: chroma(baseColors.secondary).darker(0.7).hex(),
    },
    disabled: {
      background: chroma(baseColors.buttonSupport).brighten(0.5).hex(),
      color: baseColors.buttonSupport,
      border: chroma(baseColors.buttonSupport).brighten(0.5).hex(),
    },
    actionButton: {
      background: baseColors.secondary,
    },
    outlined: {
      color: baseColors.secondary,
    },
  },
  datePicker: {
    picker: {
      background: baseColors.textNegative,
      color: baseColors.textPositive,
      border: baseColors.buttonSupport,
      header: {
        background: baseColors.secondary,
        color: baseColors.textPositive,
      },
      days: {
        background: baseColors.textNegative,
        color: baseColors.textPositive,
      },
      day: {
        color: baseColors.textPositive,
        hoverColor: baseColors.textPositive,
        hoverBackground: baseColors.reserve02,
      },
      outsideMonth: {
        color: baseColors.buttonSupport,
        background: baseColors.textNegative,
      },
      dayInRange: {
        background: baseColors.secondary,
        color: baseColors.textLabel,
      },
      disabled: {
        color: baseColors.reserve02,
      },
      dropdown: {
        background: baseColors.secondaryBackground,
        color: baseColors.primary,
      },
      monthOption: {
        hoverBackground: baseColors.buttonSupport,
        hoverColor: baseColors.primary,
      },
      board: {
        background: baseColors.secondaryBackground,
      },
      selectedDay: {
        color: baseColors.textLabel,
        background: baseColors.reserve02,
      },
    },
  },
  dropdown: {
    background: baseColors.primaryBackground,
    border: baseColors.borderSupport,
    listItem: {
      focus: {
        background: baseColors.borderSupport,
        color: baseColors.primaryVariant,
      },
      selected: {
        background: baseColors.secondary,
      },
    },
    valid: {
      border: baseColors.success,
    },
    invalid: {
      border: baseColors.error,
    },
  },
  dot: {
    border: baseColors.buttonSupport,
    valid: {
      background: baseColors.success,
      border: baseColors.success,
    },
    invalid: {
      background: baseColors.error,
      border: baseColors.error,
    },
  },
  fieldLabel: {
    color: baseColors.textLabel,
    errorMessage: {
      color: baseColors.error,
    },
  },
  popupLoader: {
    background: baseColors.textPositive,
    dots: baseColors.secondary,
  },
  toggleButton: {
    color: baseColors.borderSupport,
  },
  tooltip: {
    color: baseColors.secondary,
    hoverColor: chroma(baseColors.secondary).darker(0.7).hex(),
    iconTextColor: baseColors.textNegative,
    content: {
      border: baseColors.reserve02,
      color: baseColors.textPositive,
    },
  },
  residentialData: {
    timeAtAddress: {
      tabButton: {
        color: baseColors.borderSupport,
        selected: baseColors.box,
      },
    },
    background: baseColors.primaryBackground,
    border: baseColors.primaryLink,
  },
  checkbox: {
    light: {
      hoverBorder: baseColors.secondary,
      border: baseColors.secondaryBackground,
      checked: {
        background: baseColors.secondary,
        border: baseColors.secondary,
        hoverBorder: baseColors.secondary,
        color: baseColors.textLabel,
      },
      disabled: {
        color: baseColors.reserve02,
        border: baseColors.reserve02,
        background: 'transparent',
      },
      invalid: {
        background: baseColors.error,
      },
    },
    dark: {
      hoverBorder: baseColors.secondary,
      border: baseColors.reserve01,
      background: baseColors.textNegative,
      checked: {
        background: baseColors.secondary,
        border: baseColors.reserve01,
        hoverBorder: baseColors.secondary,
        color: baseColors.textLabel,
      },
      disabled: {
        color: baseColors.reserve02,
        border: baseColors.reserve02,
        background: 'transparent',
      },
      invalid: {
        background: baseColors.error,
      },
    },
  },
  flow: {
    background: baseColors.primaryBackground,
  },
  footer: {
    background: baseColors.box,
    label: {
      color: baseColors.textPositive,
      underline: baseColors.textPositive,
    },
    legend: {
      color: baseColors.textPositive,
    },
  },
  header: {
    background: baseColors.box,
    number: {
      color: baseColors.textPositive,
    },
  },
  input: {
    required: {
      color: baseColors.error,
    },
    extraDetails: {
      line: baseColors.borderSupport,
      color: baseColors.primary,
    },
    border: baseColors.reserve03,
    background: baseColors.textNegative,
    neutral: {
      border: baseColors.borderSupport,
    },
    valid: {
      border: baseColors.success,
    },
    invalid: {
      border: baseColors.error,
    },
    disabled: {
      background: chroma(baseColors.secondaryBackground).alpha(0.5),
      color: chroma(baseColors.textLabel).alpha(0.5),
    },
    placeholder: {
      color: baseColors.primary,
    },
  },
  autocomplete: {
    placeholder: {
      color: baseColors.primary,
    },
    listItem: {
      focus: {
        background: baseColors.borderSupport,
        color: baseColors.primaryVariant,
      },
      selected: {
        background: baseColors.secondary,
      },
    },
  },
  label: {
    light: {
      color: baseColors.textNegative,
    },
    dark: {
      color: baseColors.textPositive,
    },
  },

  list: {
    item: {
      background: chroma(baseColors.buttonSupport).brighten(0.4),
      oddBackground: baseColors.primaryBackground,
      hoverBackground: baseColors.buttonSupport,
      selectedBackground: baseColors.secondary,
      border: baseColors.buttonSupport,
    },
  },
  main: {
    background: baseColors.primaryBackground,
  },
  panel: {
    background: baseColors.textLabel,
    color: baseColors.textNegative,
    hoverColor: baseColors.secondary,
    paragraph: {
      color: baseColors.readableNegative,
    },
  },
  popup: {
    content: {
      background: baseColors.primaryBackground,
    },
    close: {
      background: baseColors.secondary,
    },
    footer: {
      border: baseColors.borderSupport,
    },
  },
  progressBar: {
    background: baseColors.secondaryBackground,
    notDone: {
      background: baseColors.reserve01, //chroma(baseColors.secondary).brighten(2).hex()
    },
    done: {
      background: baseColors.success,
      color: baseColors.box,
    },
    iconWithLabel: {
      progressLine: {
        color: baseColors.borderSupport,
      },
      isActive: {
        color: baseColors.box,
      },
      notActive: {
        color: baseColors.reserve01,
      },
      circle: {
        background: baseColors.primaryVariant,
      },
      activeCircle: {
        background: baseColors.secondary,
      },
    },
  },
  seperator: {
    background: baseColors.borderSupport,
  },
  login: {
    color: baseColors.textLabel,
    link: {
      color: baseColors.primaryLink,
    },
  },
  statementTypeSelector: {
    button: {
      checkMark: {
        color: baseColors.textLabel,
      },
    },
    or: {
      color: baseColors.textPositive,
      background: baseColors.reserve02,
    },
    text: {
      valid: {
        color: chroma(baseColors.success).darker(0.9).hex(),
      },
    },
  },
  linkAccountDetails: {
    icons: {
      background: baseColors.primaryBackground,
      backgroundSelected: baseColors.secondary,
      border: baseColors.borderSupport,
    },
  },
  openBanking: {
    banksFrame: {
      border: baseColors.reserve02,
    },
  },
  confirmationPopup: {
    link: {
      color: baseColors.primaryLink,
    },
  },
  generalError: {
    errorSignBackground: baseColors.primary,
    errorSign: baseColors.secondaryVariant,
  },
  notFound: {
    context: baseColors.primary,
  },
  general: {
    focus: baseColors.focus,
    success: baseColors.success,
    error: baseColors.error,
    warning: baseColors.neutralAlert,
  },
  address: {
    enterManual: {
      background: baseColors.secondary,
      editIcon: baseColors.none,
    },
  },
  marketingPreferences: {
    line: baseColors.reserve01,
    subtitle: baseColors.primary,
  },
  carousel: {
    dots: {
      border: baseColors.primary,
      background: baseColors.textNegative,
      active: baseColors.textPositive,
    },
  },
};

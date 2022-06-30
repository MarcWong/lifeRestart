const pages = {
    LOADING: 'LOADING',
    MAIN: 'MAIN',
    TALENT: 'TALENT',
    PROPERTY: 'PROPERTY',
    TRAJECTORY: 'TRAJECTORY',
    SUMMARY: 'SUMMARY',
    ACHIEVEMENT: 'ACHIEVEMENT',
    THANKS: 'THANKS',
    THEMES: 'THEMES',
    SAVELOAD: 'SAVELOAD',
    MODE: 'MODE',
    REBORN: 'REBORN',
    SEXORIENTATION: 'SEXORIENTATION',
    PROPERTYTEXT: 'PROPERTYTEXT',
};

const popups = {
    ACHIEVEMENT: 'POPUP_ACHIEVEMENT',
    MESSAGE: 'POPUP_MESSAGE',
};

const dark = {
    pages: {
        [pages.LOADING]: "loading",
        [pages.MAIN]: "default/main",
        [pages.TALENT]: "default/talent",
        [pages.PROPERTY]: "default/property",
        [pages.TRAJECTORY]: "default/trajectory",
        [pages.SUMMARY]: "default/summary",
        [pages.THANKS]: "default/thanks",
        [pages.THEMES]: 'themes',
        [pages.SAVELOAD]: 'saveload',
        [pages.MODE]: 'default/mode',
        [pages.REBORN]: 'default/reborn',
        [pages.SEXORIENTATION]: 'default/sexorientation',
        [pages.PROPERTYTEXT]: 'default/propertyText'
    },
    popups: {
        [popups.MESSAGE]: "message",
    },
    configs: {
        bgColor: '#222831',
        common: {
            defaultFontColor: '#eeeeee',
            trajectoryItem: {
                box: {
                    // filters: ()=>[new Laya.GlowFilter("#eeeeee", 8, 0, 0)],
                    defaultStroke: '#eeeeee',
                    hoverStroke: '#eeeeee',
                    lineWidth: 2,
                },
                grade: [
                    {
                        defaultColor: '#464646',
                        hoverColor: '#4a5361',
                    },
                    {
                        defaultColor: '#6495ed',
                        hoverColor: '#87cefa',
                    },
                    {
                        defaultColor: '#e2a7ff',
                        hoverColor: '#e7beff',
                    },
                    {
                        defaultColor: '#ffa07a',
                        hoverColor: '#f7a989',
                    },
                ],
                ageColor: '#ffffee',
                contentColor: '#eeeeee',
            },
            topSupportItem: {
                defaultColor: '#ffa500',
                defaultStroke: '#ffa500',
                hoverColor: '#ffc500',
                hoverStroke: '#ffa500',
            },
            grade: [
                '#cccccc',
                '#55fffe',
                '#b17cff',
                '#ffce45',
            ],
            filter: [
                '#ccccccff',
                '#55fffeff',
                '#b17cffff',
                '#ffce45ff',
            ],
            card: [
                {
                    normal: {
                        defaultColor: '#464646',
                        defaultStroke: '#f8f8f8',
                        defaultLabel: '#eeeeee',
                        hoverColor: '#c0c0c0',
                        hoverStroke: '#f8f8f8',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    },
                    selected: {
                        defaultColor: '#c0c0c0',
                        defaultStroke: '#a5ff88',
                        defaultLabel: '#3b3b3b',
                        hoverColor: '#c0c0c0',
                        hoverStroke: '#a5ff88',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    }
                },
                {
                    normal: {
                        defaultColor: '#6495ed',
                        defaultStroke: '#f8f8f8',
                        defaultLabel: '#eeeeee',
                        hoverColor: '#87cefa',
                        hoverStroke: '#f8f8f8',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    },
                    selected: {
                        defaultColor: '#87cefa',
                        defaultStroke: '#a5ff88',
                        defaultLabel: '#3b3b3b',
                        hoverColor: '#87cefa',
                        hoverStroke: '#a5ff88',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    }
                },
                {
                    normal: {
                        defaultColor: '#e2a7ff',
                        defaultStroke: '#f8f8f8',
                        defaultLabel: '#eeeeee',
                        hoverColor: '#e7beff',
                        hoverStroke: '#f8f8f8',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    },
                    selected: {
                        defaultColor: '#e7beff',
                        defaultStroke: '#a5ff88',
                        defaultLabel: '#3b3b3b',
                        hoverColor: '#e7beff',
                        hoverStroke: '#a5ff88',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    }
                },
                {
                    normal: {
                        defaultColor: '#ffa07a',
                        defaultStroke: '#f8f8f8',
                        defaultLabel: '#eeeeee',
                        hoverColor: '#f7a989',
                        hoverStroke: '#f8f8f8',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    },
                    selected: {
                        defaultColor: '#f7a989',
                        defaultStroke: '#f8f8f8',
                        defaultLabel: '#3b3b3b',
                        hoverColor: '#f7a989',
                        hoverStroke: '#f8f8f8',
                        hoverLabel: '#3b3b3b',
                        lineWidth: 4,
                        radius: 4,
                    }
                }
            ],
            summary: [
                {
                    defaultColor: '#464646',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#c0c0c0',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 2,
                    radius: 0,
                },{
                    defaultColor: '#6495ed',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#87cefa',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 2,
                    radius: 0,
                },{
                    defaultColor: '#e2a7ff',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#e7beff',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 2,
                    radius: 0,
                },
                {
                    defaultColor: '#ffa07a',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#f7a989',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 2,
                    radius: 0,
                }
            ],
            achievement: [
                {
                    defaultColor: '#464646',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#c0c0c0',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 4,
                    radius: 0,
                },{
                    defaultColor: '#6495ed',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#87cefa',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 4,
                    radius: 0,
                },{
                    defaultColor: '#e2a7ff',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#e7beff',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 4,
                    radius: 0,
                },
                {
                    defaultColor: '#ffa07a',
                    defaultStroke: '#f8f8f8',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#f7a989',
                    hoverStroke: '#f8f8f8',
                    hoverLabel: '#3b3b3b',
                    lineWidth: 4,
                    radius: 0,
                }
            ],
            characterItem: {
                name: {
                    defaultColor: '#393e46',
                    defaultStroke: '#eeeeee',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#ff7878',
                    hoverStroke: '#eeeeee',
                    hoverLabel: '#eeeeee',
                    lineWidth: 2,
                },
                state: {
                    defaultColor: '#393e46',
                    defaultStroke: '#eeeeee',
                    defaultLabel: '#eeeeee',
                    hoverColor: '#393e46',
                    hoverStroke: '#eeeeee',
                    hoverLabel: '#eeeeee',
                    lineWidth: 2,
                },
                propertyColor: '#000000',
            },
        },
        class: {
            btn_main: {
                defaultColor: '#ffffff',
                defaultLabel: '#000000',
                bgColor: '#ffffff',
                hoverColor: '#cccccc',
                hoverLabel: '#000000',
                lineWidth: 2,
                radius: 40,
            },
            btn_main2: {
                defaultColor: '#ffffff',
                defaultLabel: '#000000',
                bgColor: '#999999',
                hoverColor: '#cccccc',
                hoverLabel: '#000000',
                lineWidth: 2,
                radius: 100,
            },
            btn_small: {
                defaultColor: '#5865f2',
                defaultStroke: '#eeeeee',
                defaultLabel: '#eeeeee',
                hoverColor: '#1160b0',
                hoverStroke: '#eeeeee',
                hoverLabel: '#eeeeee',
                lineWidth: 0,
                radius: 4,
            },
            title: {
                color: '#ffffff',
            },
            text_main: {
                defaultColor: '#ffffff',
                defaultLabel: '#000000',
                bgColor: '#ffffff',
                lineWidth: 0,
                radius: 4,
                alpha: 0.8,
            },
            font_default: {
                fontFamily: 'Agency FB',
                color: '#eeeeee',
            }
        },
        pages: {
            [pages.MAIN]: {
                vars: {
                    btnRemake: 'btn_main',
                    btnThemes: {
                        defaultColor: '#cccccc',
                        radius: 100,
                    },
                    btnSaveLoad: {
                        defaultColor: '#5865f2',
                        defaultStroke: '#eeeeee',
                        defaultLabel: '#eeeeee',
                        hoverColor: '#1160b0',
                        hoverStroke: '#eeeeee',
                        hoverLabel: '#eeeeee',
                        lineWidth: 0,
                        radius: 100,
                    },
                },
                names: {
                    title: 'title',
                    btnSmall: 'btn_small',
                }
            },
            [pages.REBORN]: {
                vars: {
                    btnContinue: 'btn_main',
                    boxReborn: 'text_main',
                }
            },
            [pages.PROPERTYTEXT]: {
                vars: {
                    btnContinue: 'btn_main'
                }
            },
            [pages.MODE]: {
                vars: {
                    textCountry: 'text_main',
                    btnAfg: 'btn_main',
                    btnChn: 'btn_main',
                    btnEgp: 'btn_main',
                    btnIdn: 'btn_main',
                    btnJpn: 'btn_main',
                    btnUsa: 'btn_main'
                }
            },
            [pages.SEXORIENTATION]: {
                vars: {
                    btnStraight: 'btn_main2',
                    btnLBTQ: 'btn_main2'
                }
            },
            [pages.TALENT]: {
                vars: {
                    btnDrawCard: 'btn_main2',
                    title: 'title',
                }
            },
            [pages.PROPERTY]: {
                vars: {
                    btnRandomAllocate: 'btn_main',
                    btnNext: 'btn_main2',
                    title: 'title',
                },
                names: {
                    font_default: 'font_default',
                    property: {
                        colorFilter: '#eeeeeeff'
                    }
                }
            },
            [pages.TRAJECTORY]: {
                vars: {
                    btnSummary: 'btn_main',
                    boxTrajectory: {
                        defaultColor: '#393e46',
                        defaultStroke: '#eeeeee',
                        defaultLabel: '#eeeeee',
                        hoverColor: '#393e46',
                        hoverStroke: '#eeeeee',
                        hoverLabel: '#eeeeee',
                        lineWidth: 2,
                        radius: 4,
                    },
                    boxSpeed: {
                        colorFilter: '#ffffffff'
                    }
                },
                names: {
                    propertyBox: {
                        defaultColor: '#222831',
                        defaultStroke: '#eeeeee',
                        defaultLabel: '#eeeeee',
                        hoverColor: '#222831',
                        hoverStroke: '#eeeeee',
                        hoverLabel: '#eeeeee',
                        lineWidth: 2,
                        radius: 4,
                    },
                    propertyValue: {
                        defaultColor: '#eeeeee',
                        defaultStroke: '#eeeeee',
                        defaultLabel: '#222831',
                        hoverColor: '#eeeeee',
                        hoverStroke: '#eeeeee',
                        hoverLabel: '#222831',
                        lineWidth: 0,
                        radius: 4,
                    }
                }
            },
            [pages.SUMMARY]: {
                vars: {
                    btnAgain: 'btn_main',
                    title: 'title',
                },
                names: {
                    font_default: 'font_default',
                }
            },
            [pages.ACHIEVEMENT]: {
                vars: {
                    btnBack: 'btn_small',
                    btnRank: 'btn_small',
                },
                names: {
                    font_default: 'font_default',
                    title: 'title',
                }
            },
            [pages.THANKS]: {
                vars: {
                    btnBack: 'btn_small',
                    btnAFD: {
                        defaultColor: '#8764de',
                        defaultStroke: '#8764de',
                        defaultLabel: '#ffffff',
                        hoverColor: '#9774ee',
                        hoverStroke: '#9774ee',
                        hoverLabel: '#ffffff',
                        radius: 4,
                    },
                    btnDDF: {
                        defaultColor: '#cc6699',
                        defaultStroke: '#cc6699',
                        defaultLabel: '#ffffff',
                        hoverColor: '#dc76a9',
                        hoverStroke: '#dc76a9',
                        hoverLabel: '#ffffff',
                        radius: 4,
                    },
                },
            },
            [pages.THEMES]: {
                vars: {
                    btnOK: {
                        defaultColor: '#28b070',
                        defaultLabel: '#ffffff',
                        hoverColor: '#00ff00',
                        hoverLabel: '#ffffff',
                        radius: 80,
                    },
                    btnClose: {
                        defaultColor: '#eb3941',
                        defaultLabel: '#ffffff',
                        hoverColor: '#ff0000',
                        hoverLabel: '#ffffff',
                        radius: 80,
                    },
                }
            },
            [pages.SAVELOAD]: {
                vars: {
                    btnClose: {
                        defaultColor: '#eb3941',
                        hoverColor: '#ff0000',
                    },
                    btnSave: {
                        defaultColor: '#007046',
                        hoverColor: '#76f190',
                    },
                    btnRead: {
                        defaultColor: '#007046',
                        hoverColor: '#76f190',
                    },
                    btnLoad: {
                        defaultColor: '#fc5531',
                        hoverColor: '#f28b54',
                    },
                    btnWrite: {
                        defaultColor: '#fc5531',
                        hoverColor: '#f28b54',
                    },
                    btnBackup: {
                        defaultColor: '#9c30cd',
                        hoverColor: '#bf50fd',
                        radius: 8,
                        defaultLabel: '#ffffff',
                        hoverLabel: '#ffffff',
                    },
                },
                names: {
                    btnSmall: {
                        radius: 80,
                        defaultLabel: '#ffffff',
                        hoverLabel: '#ffffff',
                    }
                }
            },
            [pages.MODE]: {
                names: {
                    font_default: 'font_default',
                    btn: 'btn_main',
                }
            },
        },
        popups: {
            [popups.ACHIEVEMENT]: {
                vars: {
                    bg1: {
                        defaultColor: '#292a28',
                        defaultStroke: '#84ff55',
                        hoverColor: '#292a28',
                        hoverStroke: '#84ff55',
                    }
                }
            }
        }
    }
}

const themes = { default: dark, dark };

export default { themes, pages, popups };
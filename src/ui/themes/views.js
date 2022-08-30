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
                        defaultColor: '#464646',
                        hoverColor: '#4a5361',
                    },
                    {
                        defaultColor: '#464646',
                        hoverColor: '#4a5361',
                    },
                    {
                        defaultColor: '#464646',
                        hoverColor: '#4a5361',
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
                '#cccccc',
                '#cccccc',
                '#cccccc'
            ],
            filter: [
                '#ccccccff',
                '#ccccccff',
                '#ccccccff',
                '#ccccccff'
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
                        defaultColor: '#464646',
                        defaultStroke: '#f8f8f8',
                        defaultLabel: '#eeeeee',
                        hoverColor: '#c0c0c0',
                        hoverStroke: '#f8f8f8',
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
            btn_print: {
                defaultColor: '#3ec103',
                defaultLabel: '#eeeeee',
                bgColor: '#073065',
                hoverColor: '#cccccc',
                hoverLabel: '#eeeeee',
                lineWidth: 2,
                radius: 40,
            },
            title: {
                color: '#ffffff',
            },
            text_main: {
                defaultColor: '#ffffff',
                defaultLabel: '#000000',
                bgColor: '#ffffff',
                lineWidth: 0,
                radius: 20,
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
                    btnRemake: 'btn_main'
                },
                names: {
                    title: 'title'
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
                    boxProperty: 'text_main',
                    btnContinue: 'btn_main'
                }
            },
            [pages.MODE]: {
                vars: {
                    boxText: 'text_main',
                    btnAfg: 'btn_main',
                    btnChn: 'btn_main',
                    btnEgp: 'btn_main',
                    btnInd: 'btn_main',
                    btnJpn: 'btn_main',
                    btnUsa: 'btn_main'
                }
            },
            [pages.SEXORIENTATION]: {
                vars: {
                    boxText: 'text_main',
                    btnStraight: 'btn_main',
                    btnLBTQ: 'btn_main'
                }
            },
            [pages.TALENT]: {
                vars: {
                    boxText: 'text_main',
                    btnDrawCard: 'btn_main',
                    title: 'title',
                }
            },
            [pages.PROPERTY]: {
                vars: {
                    boxText: 'text_main',
                    btnRandomAllocate: 'btn_main',
                    btnNext: 'btn_main',
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
                    btnPrint: 'btn_print',
                    title: 'title',
                },
                names: {
                    font_default: 'font_default',
                }
            }
        }
    }
}

const themes = { default: dark, dark };

export default { themes, pages, popups };
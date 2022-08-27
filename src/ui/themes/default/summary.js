export default class Summary extends ui.view.DefaultTheme.SummaryUI {
    constructor() {
        super();
        this.listSummary.renderHandler = Laya.Handler.create(this, this.renderSummary, null, false);
        this.listSelectedTalents.renderHandler = Laya.Handler.create(this, this.renderTalent, null, false);
        this.btnAgain.on(Laya.Event.CLICK, this, this.onAgain);
        this.btnPrint.on(Laya.Event.CLICK, this, this.onPrint);
    }

    #printText;

    onAgain() {
        window.location.reload()
    }

    onPrint() {
        const txts = this.#printText.split('\n')
        let element = document.createElement('canvas')
        element.id = 'canvas'
        element.width = 700
        element.height = 16000
        let ctx = element.getContext("2d")
        ctx.font = "30px 'Casadia Code', Consolas, monospace"
        let y = 30
        const wrapTxt = 41 // characters in a line
        for (let id = 0; id < txts.length; id++) {
            let n = 0
            while (n * wrapTxt < txts[id].length) {
                ctx.fillText(txts[id].substring(n * wrapTxt, (n+1)*wrapTxt), 10, y)
                y += 33 // linespace
                n += 1
            }
        }
        // element.height = y+30

        const win = window.open()
        win.document.write("<img src='"
            + element.toDataURL()
            + "'/>")
        win.focus()    
        win.document.close()
        win.print()
        // win.close()
        // this.downloadTxt(this.#printText, "print.txt")
    }

    // Save as a txt
    // downloadTxt(text, fileName) {
    //     let element = document.createElement('a')
    //     element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    //     element.setAttribute('download', fileName)
    //     element.style.display = 'none'
    //     element.click()
    // }

    init({ talents, printText, enableExtend}) {
        const {summary, lastExtendTalent} = core;
        this.#printText = printText;
        console.log(this.#printText.split('\n'))

        this.listSummary.array = [
            [core.PropertyTypes.HCHR, $lang.UI_Property_Charm],
            [core.PropertyTypes.HINT, $lang.UI_Property_Intelligence],
            [core.PropertyTypes.HSTR, $lang.UI_Property_Strength],
            [core.PropertyTypes.HMNY, $lang.UI_Property_Money],
            [core.PropertyTypes.HSPR, $lang.UI_Property_Spirit],
            //[core.PropertyTypes.HAGE, $lang.UI_Final_Age],
            //[core.PropertyTypes.SUM, $lang.UI_Total_Judge],
        ].map(([type, key]) => {
            const data = summary[type];
            return {
                label: `${key}${$lang.UI_Colon} ${data.value > 13 ? 13 : data.value}`,
                grade: data.grade,
            }
        });

        this.listSelectedTalents.array = talents;
    }
    renderSummary(box) {
        const {label, grade} = box.dataSource;
        box.label = label;
        $_.deepMapSet(box, $ui.common.summary[grade]);
    }
    renderTalent(box) {
        const dataSource = box.dataSource;
        box.label = $_.format($lang.F_TalentSelection, dataSource);
        const style = $ui.common.card[dataSource.grade];
        $_.deepMapSet(box, dataSource.id = style.normal);
    }

}
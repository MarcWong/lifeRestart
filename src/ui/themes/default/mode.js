export default class Mode extends ui.view.DefaultTheme.ModeUI {
    constructor() {
        super();
        const types =
            this.#types = core.PropertyTypes;
        this.#nationalityAllocate = {
            [types.AFG]: 0,
            [types.CHN]: 0,
            [types.EGP]: 0,
            [types.IND]: 0,
            [types.JPN]: 0,
            [types.USA]: 0,
        }
        this.btnAfg.on(Laya.Event.CLICK, this, this.onClickAfg);
        this.btnChn.on(Laya.Event.CLICK, this, this.onClickChn);
        this.btnEgp.on(Laya.Event.CLICK, this, this.onClickEgp);
        this.btnInd.on(Laya.Event.CLICK, this, this.onClickInd);
        this.btnJpn.on(Laya.Event.CLICK, this, this.onClickJpn);
        this.btnUsa.on(Laya.Event.CLICK, this, this.onClickUsa);
    }
    #types;
    #nationalityAllocate;
    onClickAfg() {
        this.onClickNext(this.#types.AFG)
    }
    onClickChn() {
        this.onClickNext(this.#types.CHN)
    }
    onClickEgp() {
        this.onClickNext(this.#types.EGP)
    }
    onClickInd() {
        this.onClickNext(this.#types.IND)
    }
    onClickJpn() {
        this.onClickNext(this.#types.JPN)
    }
    onClickUsa() {
        this.onClickNext(this.#types.USA)
    }
    onClickNext (NAT) {
        this.#nationalityAllocate[NAT] = 1
        console.log(this.#nationalityAllocate)
        const nationality = this.#nationalityAllocate
        $ui.switchView(UI.pages.SEXORIENTATION, { nationality, enableExtend: true });
    }
}

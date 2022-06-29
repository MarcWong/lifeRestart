export default class Mode extends ui.view.DefaultTheme.ModeUI {
    constructor() {
        super();
        this.#types = core.PropertyTypes;
        this.btnAfg.on(Laya.Event.CLICK, this, this.onClickAfg);
        this.btnChn.on(Laya.Event.CLICK, this, this.onClickChn);
        this.btnEgp.on(Laya.Event.CLICK, this, this.onClickEgp);
        this.btnInd.on(Laya.Event.CLICK, this, this.onClickInd);
        this.btnJpn.on(Laya.Event.CLICK, this, this.onClickJpn);
        this.btnUsa.on(Laya.Event.CLICK, this, this.onClickUsa);
    }
    #types;
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
        var nationality = {
            [this.#types.AFG]: 0,
            [this.#types.CHN]: 0,
            [this.#types.EGP]: 0,
            [this.#types.IND]: 0,
            [this.#types.JPN]: 0,
            [this.#types.USA]: 0,
        }
        nationality[NAT] = 1
        console.log(nationality)
        $ui.switchView(UI.pages.SEXORIENTATION, { nationality, enableExtend: true });
    }
}

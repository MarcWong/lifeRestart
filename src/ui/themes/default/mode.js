export default class Mode extends ui.view.DefaultTheme.ModeUI {
    constructor() {
        super();
        const types =
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
        this.onClickNext('AFG')
    }
    onClickChn() {
        this.onClickNext('CHN')
    }
    onClickEgp() {
        this.onClickNext('EGP')
    }
    onClickInd() {
        this.onClickNext('IND')
    }
    onClickJpn() {
        this.onClickNext('JPN')
    }
    onClickUsa() {
        this.onClickNext('USA')
    }
    onClickNext (NAT) {
        core.addNationality(NAT)
        console.log(core.propertys)

        $ui.switchView(UI.pages.TALENT);
    }
}

export default class Mode extends ui.view.DefaultTheme.SexOrientationUI {
    constructor() {
        super();
        this.#types = core.PropertyTypes;
        this.btnStraight.on(Laya.Event.CLICK, this, this.onClickStraight);
        this.btnLBTQ.on(Laya.Event.CLICK, this, this.onClickLBTQ);
    }
    init({ nationality }) {
        this.#sexAllocate = {
            [this.#types.AFG]: nationality[this.#types.AFG],
            [this.#types.CHN]: nationality[this.#types.CHN],
            [this.#types.EGP]: nationality[this.#types.EGP],
            [this.#types.IND]: nationality[this.#types.IND],
            [this.#types.JPN]: nationality[this.#types.JPN],
            [this.#types.USA]: nationality[this.#types.USA],
            [this.#types.LBTQ]: 0,
        }
    }
    #types;
    #sexAllocate;
    onClickStraight() {
        this.onClickNext(0)
    }
    onClickLBTQ() {
        this.onClickNext(1)
    }
    onClickNext (SEX) {
        this.#sexAllocate[this.#types.LBTQ] = SEX
        const property = this.#sexAllocate
        $ui.switchView(UI.pages.TALENT, { property, enableExtend: true });
    }
}

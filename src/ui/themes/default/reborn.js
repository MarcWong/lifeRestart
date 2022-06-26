export default class Mode extends ui.view.DefaultTheme.RebornUI {
    constructor() {
        super();
        this.btnContinue.on(Laya.Event.CLICK, this, () => $ui.switchView(UI.pages.MODE));
    }
}

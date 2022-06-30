export default class Talent extends ui.view.DefaultTheme.TalentUI {
    constructor() {
        super();
        this.btnDrawCard.on(Laya.Event.CLICK, this, this.onClickDrawCard);
    }

    init({ property }) {
        this.property = property;
        this.pageDrawCard.visible = true;
    }

    close() {}

    onClickDrawCard() {
        const listTalents = core.talentRandom();
        var selected = new Set();
        while (selected.size < 3) {
            var id = Math.floor(Math.random() * 10);
            if (!selected.has(id))
                selected.add(id)
        }
        const talents = [...selected].map(index => listTalents[index]);
        $ui.switchView(UI.pages.PROPERTYTEXT, { talents, property: this.property, enableExtend: true });
    }
}
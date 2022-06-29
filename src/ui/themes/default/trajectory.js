export default class Trajectory extends ui.view.DefaultTheme.TrajectoryUI {
    constructor() {
        super();
        let pos1 = [0, 0];
        this.panelTrajectory.on(Laya.Event.MOUSE_DOWN, this, e => pos1 = [e.stageX, e.stageY]);
        this.panelTrajectory.on(Laya.Event.MOUSE_UP, this, e => {
            const distanceX = e.stageX - pos1[0];
            const distanceY = e.stageY - pos1[1];
            if(Math.sqrt(Math.abs(distanceX) + Math.abs(distanceY)) > 10) {
                return;
            }
            this.onNext();
        });
        this.btnSummary.on(Laya.Event.CLICK, this, this.onSummary);

        this.panelTrajectory.vScrollBar.elasticDistance = 150;
        this.scbSpeed.on(Laya.Event.CHANGE, this, () => this.speed = this.scbSpeed.value);
        this.scbSpeed.on(Laya.Event.MOUSE_UP, this, () => this.onNext());
    }

    #speed;
    #auto;

    static load() {
        return [
            "images/atlas/images/progress.atlas",
            'images/atlas/images/slider.atlas',
        ];
    }

    static #createComponent = Laya.plugin.extractComponents(Trajectory.uiView, ['boxTrajectoryItem']);
    #createTrajectoryItem() {
        const item = Trajectory.#createComponent('boxTrajectoryItem');
        item.labContent = item.getChildByName('labContent');
        item.labAge = item.getChildByName('hboxAge').getChildByName('labAge');
        const config = $ui.common.trajectoryItem;
        $_.deepMapSet(item, config.box);
        item.grade = grade => {
            $_.deepMapSet(item, config.grade[grade || 0]);
        }
        item.getChildByName('hboxAge')._childs.forEach(child => child.color = config.ageColor);
        item.labContent.color = config.contentColor;
        return item;
    }
    #isEnd;
    #trajectoryItems;
    #talents;
    #enableExtend;

    init({propertyAllocate, talents, enableExtend}) {
        console.log('trajectory init', propertyAllocate)

        const newProperty = this.initProperty(propertyAllocate);
        this.#enableExtend = enableExtend;
        this.boxParticle.visible = false;
        this.boxSpeed.visible = true;
        this.btnSummary.visible = false;
        this.#trajectoryItems = [];
        this.#isEnd = false;
        this.#talents = talents;
        core.start(newProperty);
        console.log(core.propertys)
        this.updateProperty();
        this.onNext();
    }

    close() {
        this.scbSpeed.value = 0;
        this.speed = 0;
        this.#trajectoryItems.forEach(item => {
            item.removeSelf();
            item.destroy();
        });
        this.#trajectoryItems = null;
    }

    initProperty(propertyAllocate) {
        const types = core.PropertyTypes;
        var max = 0;
        var newProperty = propertyAllocate;
        if (propertyAllocate[types.CHR] > max)
            max = propertyAllocate[types.CHR]
        if (propertyAllocate[types.INT] > max)
            max = propertyAllocate[types.INT]
        if (propertyAllocate[types.STR] > max)
            max = propertyAllocate[types.STR]
        if (propertyAllocate[types.MNY] > max)
            max = propertyAllocate[types.MNY]
        if (propertyAllocate[types.SPR] > max)
            max = propertyAllocate[types.SPR]
        if (max > 7) {
            if (newProperty[types.CHR] < 8)
                newProperty[types.CHR] = newProperty[types.CHR] < 4 ? newProperty[types.CHR] + 5 : 8;
            if (newProperty[types.INT] < 8)
                newProperty[types.INT] = newProperty[types.INT] < 4 ? newProperty[types.INT] + 5 : 8;
            if (newProperty[types.STR] < 8)
                newProperty[types.STR] = newProperty[types.STR] < 4 ? newProperty[types.STR] + 5 : 8;
            if (newProperty[types.MNY] < 8)
                newProperty[types.MNY] = newProperty[types.MNY] < 4 ? newProperty[types.MNY] + 5 : 8;
            if (newProperty[types.SPR] < 8)
                newProperty[types.SPR] = newProperty[types.SPR] < 4 ? newProperty[types.SPR] + 5 : 8;
        }
        console.log('max property:', max, newProperty)
        return newProperty
    }

    updateProperty() {
        const types = core.PropertyTypes;
        const propertys = core.propertys;

        this.labCharm.text = propertys[types.CHR];
        this.labIntelligence.text = propertys[types.INT];
        this.labStrength.text = propertys[types.STR];
        this.labMoney.text = propertys[types.MNY];
        this.labSpirit.text = propertys[types.SPR];
    }

    onNext() {
        if(this.#isEnd) return;

        const { age, content, isEnd } = core.next();
        this.#isEnd = isEnd;

        if(isEnd) {
            this.boxSpeed.visible = false;
            this.btnSummary.visible = true;
            Laya.timer.frameOnce(1,this,()=>{
                this.panelTrajectory.scrollTo(0, this.panelTrajectory.contentHeight);
            });
        }
        this.panelTrajectory.scrollTo(0, this.panelTrajectory.contentHeight);
        this.renderTrajectory(age, content);

        if(age >= 100) {
            this.boxParticle.visible = true;
        }
        this.updateProperty();
    }

    renderTrajectory(age, content) {
        const item = this.#createTrajectoryItem();
        item.labAge.text = (2022 + age) + '\n Age: ' + age;
        item.labContent.text = content.map(
            ({type, description, grade, name, postEvent}) => {
                switch(type) {
                    case 'TLT':
                        return `Talent {${name}}: ${description}`;
                    case 'EVT':
                        return description + (postEvent?`\n${postEvent}`:'');
                }
            }
        ).join('\n');
        item.grade(content[content.length - 1].grade);
        this.vboxTrajectory.addChild(item);
        this.#trajectoryItems.push(item);
        item.y = this.vboxTrajectory.height;
    }

    onSummary() {
        const talents = this.#talents;
        $ui.switchView(UI.pages.SUMMARY, {talents, enableExtend: this.#enableExtend});
    }

    get speed() {
        return this.#speed;
    }

    set speed(speed) {
        this.#speed = speed;
        this.prgSpeed.value = speed / this.scbSpeed.max;
        clearInterval(this.#auto);
        this.#auto = null;
        if(!speed) return;
        this.#auto = setInterval(
            () => this.onNext(),
            3000 * (1 - this.prgSpeed.value) + 300
        );
    }
}
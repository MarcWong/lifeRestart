var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var AchievementUI=(function(_super){
		function AchievementUI(){
			
		    this.btnBack=null;
		    this.boxRemakeTimes=null;
		    this.labRemakeTimes=null;
		    this.labRemakeTimesJudge=null;
		    this.boxAchievementCount=null;
		    this.labAchievementCount=null;
		    this.labAchievementCountJudge=null;
		    this.boxEventRate=null;
		    this.prgEventRate=null;
		    this.labEventRate=null;
		    this.boxTalentRate=null;
		    this.prgTalentRate=null;
		    this.labTalentRate=null;
		    this.btnRank=null;
		    this.listAchievements=null;
			AchievementUI.__super.call(this);
		}
		CLASS$(AchievementUI,'ui.view.DefaultTheme.AchievementUI',_super);
		var __proto__=AchievementUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ViewBase",Laya.runtime.ViewBase);
			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			_super.prototype.createChildren.call(this);
			this.createView(AchievementUI.uiView);
		}
		AchievementUI.uiView={"type":"View","props":{"width":1125,"runtime":"Laya.runtime.ViewBase","height":2436},"compId":1,"child":[{"type":"Label","props":{"y":80,"text":"UI_Statistics","name":"title","fontSize":80,"font":"SimHei","color":"#ffffff","centerX":0},"compId":86},{"type":"Box","props":{"width":260,"var":"btnBack","top":50,"runtime":"Laya.runtime.ColorfulBox","right":50,"name":"btnBack","height":90,"anchorY":0.5,"anchorX":0.5},"compId":69,"child":[{"type":"Label","props":{"y":1028,"x":332,"text":"UI_Back","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":70}]},{"type":"Box","props":{"x":33,"width":1060,"top":230,"height":540,"centerX":0},"compId":25,"child":[{"type":"Box","props":{"width":500,"var":"boxRemakeTimes","top":0,"runtime":"Laya.runtime.ColorfulBox","name":"boxRemakeTimes","left":0,"height":240},"compId":28,"child":[{"type":"Label","props":{"var":"labRemakeTimes","text":"label","right":0,"name":"font_default","left":0,"fontSize":60,"font":"SimHei","color":"#ffffff","centerY":-60,"bold":true,"align":"center"},"compId":32},{"type":"Label","props":{"var":"labRemakeTimesJudge","text":"label","right":0,"name":"font_default","left":0,"fontSize":45,"font":"SimHei","color":"#ffffff","centerY":60,"bold":false,"align":"center"},"compId":33}]},{"type":"Box","props":{"width":500,"var":"boxAchievementCount","top":0,"runtime":"Laya.runtime.ColorfulBox","right":0,"name":"boxAchievementCount","height":240},"compId":29,"child":[{"type":"Label","props":{"var":"labAchievementCount","text":"label","right":0,"name":"font_default","left":0,"fontSize":60,"font":"SimHei","color":"#ffffff","centerY":-60,"bold":true,"align":"center"},"compId":38},{"type":"Label","props":{"var":"labAchievementCountJudge","text":"label","right":0,"name":"font_default","left":0,"fontSize":45,"font":"SimHei","color":"#ffffff","centerY":60,"bold":false,"align":"center"},"compId":39}]},{"type":"Box","props":{"width":500,"var":"boxEventRate","runtime":"Laya.runtime.ColorfulBox","name":"boxEventRate","left":0,"height":240,"bottom":0},"compId":71,"child":[{"type":"Box","props":{"y":0,"x":0,"width":500,"var":"prgEventRate","height":240,"blendMode":"lighter","alpha":0.1},"compId":82,"child":[{"type":"Rect","props":{"width":500,"lineWidth":1,"height":240,"fillColor":"#ffffff"},"compId":83}]},{"type":"Label","props":{"text":"UI_Event_Collection_Rate","right":0,"name":"font_default","left":0,"fontSize":60,"font":"SimHei","color":"#ffffff","centerY":-60,"bold":true,"align":"center"},"compId":72},{"type":"Label","props":{"var":"labEventRate","text":"label","right":0,"name":"font_default","left":0,"fontSize":45,"font":"SimHei","color":"#ffffff","centerY":60,"bold":false,"align":"center"},"compId":73}]},{"type":"Box","props":{"width":500,"var":"boxTalentRate","runtime":"Laya.runtime.ColorfulBox","right":0,"name":"boxTalentRate","height":240,"bottom":0},"compId":74,"child":[{"type":"Box","props":{"y":0,"x":0,"width":500,"var":"prgTalentRate","height":240,"blendMode":"lighter","alpha":0.1},"compId":84,"child":[{"type":"Rect","props":{"width":500,"lineWidth":1,"height":240,"fillColor":"#ffffff"},"compId":85}]},{"type":"Label","props":{"text":"UI_Talent_Collection_Rate","right":0,"name":"font_default","left":0,"fontSize":60,"font":"SimHei","color":"#ffffff","centerY":-60,"bold":true,"align":"center"},"compId":75},{"type":"Label","props":{"var":"labTalentRate","text":"label","right":0,"name":"font_default","left":0,"fontSize":45,"font":"SimHei","color":"#ffffff","centerY":60,"bold":false,"align":"center"},"compId":76}]}]},{"type":"Box","props":{"width":1060,"top":800,"runtime":"Laya.runtime.ColorfulBox","name":"hr","height":10,"centerX":0},"compId":91},{"type":"Label","props":{"top":870,"text":"UI_Achievement","name":"title","fontSize":80,"font":"SimHei","color":"#ffffff","centerX":0},"compId":92},{"type":"Box","props":{"x":945,"width":260,"var":"btnRank","top":870,"runtime":"Laya.runtime.ColorfulBox","right":50,"name":"btnRank","height":90,"anchorY":0.5,"anchorX":0.5},"compId":3,"child":[{"type":"Label","props":{"text":"UI_Rank","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":7}]},{"type":"List","props":{"width":1080,"var":"listAchievements","vScrollBarSkin":" ","top":1000,"spaceY":60,"spaceX":60,"repeatX":2,"name":"listAchievements","centerX":0,"bottom":35},"compId":9,"child":[{"type":"Box","props":{"y":10,"x":10,"width":500,"runtime":"Laya.runtime.ColorfulBox","renderType":"render","height":320},"compId":77,"child":[{"type":"Label","props":{"text":"label","right":0,"name":"name","left":0,"fontSize":60,"font":"SimHei","color":"#ffffff","centerY":-80,"bold":true,"align":"center"},"compId":78},{"type":"Label","props":{"text":"label","right":0,"name":"description","left":0,"fontSize":45,"font":"SimHei","color":"#ffffff","centerY":80,"bold":false,"anchorY":0,"anchorX":0,"align":"center"},"compId":79},{"type":"Box","props":{"width":500,"name":"boxMask","height":320,"alpha":0.5},"compId":80,"child":[{"type":"Rect","props":{"width":500,"lineWidth":1,"height":320,"fillColor":"#000000"},"compId":81}]}]}]}],"loadList":[],"loadList3D":[]};
		return AchievementUI;
	})(View);
var AchievementPopupUI=(function(_super){
		function AchievementPopupUI(){
			
		    this.boxBg=null;
		    this.bg1=null;
		    this.labName=null;
			AchievementPopupUI.__super.call(this);
		}
		CLASS$(AchievementPopupUI,'ui.view.DefaultTheme.AchievementPopupUI',_super);
		var __proto__=AchievementPopupUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			_super.prototype.createChildren.call(this);
			this.createView(AchievementPopupUI.uiView);
		}
		AchievementPopupUI.uiView={"type":"View","props":{"y":50,"width":570,"mouseThrough":true,"mouseEnabled":false,"height":150,"alpha":0.75},"compId":1,"child":[{"type":"Box","props":{"var":"boxBg","top":0,"right":0,"name":"boxBg","left":0,"bottom":0},"compId":5,"child":[{"type":"Rect","props":{"y":0,"x":560,"width":10,"lineWidth":1,"height":150,"fillColor":"#84ff55"},"compId":14},{"type":"Box","props":{"var":"bg1","top":0,"runtime":"Laya.runtime.ColorfulBox","right":10,"left":0,"bottom":0},"compId":15}]},{"type":"Label","props":{"y":10,"text":"UI_Achievement_Achieve","left":40,"fontSize":40,"font":"SimHei","color":"#84ff55","bold":true},"compId":12},{"type":"Label","props":{"var":"labName","text":"Achievement","name":"labName","left":40,"fontSize":60,"font":"SimHei","color":"#cccccc","centerY":30},"compId":13}],"loadList":[],"loadList3D":[]};
		return AchievementPopupUI;
	})(View);
var CelebrityUI=(function(_super){
		function CelebrityUI(){
			
		    this.panelCharacter=null;
		    this.vboxCharacter=null;
		    this.btnRetry=null;
		    this.btnNext=null;
			CelebrityUI.__super.call(this);
		}
		CLASS$(CelebrityUI,'ui.view.DefaultTheme.CelebrityUI',_super);
		var __proto__=CelebrityUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			_super.prototype.createChildren.call(this);
			this.createView(CelebrityUI.uiView);
		}
		CelebrityUI.uiView={"type":"View","props":{"width":1125,"height":2436},"compId":1,"child":[{"type":"Label","props":{"y":80,"text":"UI_Title_Celebrity","name":"title","fontSize":80,"font":"SimHei","color":"#ffffff","centerX":0},"compId":19},{"type":"Panel","props":{"var":"panelCharacter","vScrollBarSkin":" ","top":200,"right":0,"name":"panelCharacter","left":0,"bottom":700},"compId":2,"child":[{"type":"VBox","props":{"y":10,"width":1000,"var":"vboxCharacter","space":20,"name":"vboxCharacter","centerX":0},"compId":8,"child":[{"type":"Box","props":{"right":0,"name":"boxCharacter","left":0},"compId":10,"child":[{"type":"Box","props":{"y":0,"runtime":"Laya.runtime.ColorfulBox","right":0,"name":"boxName","left":0,"height":100},"compId":12,"child":[{"type":"Label","props":{"valign":"middle","text":"颜值10 智力10 体质10 家境Π","name":"label","fontSize":55,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0,"align":"center"},"compId":18}]},{"type":"VBox","props":{"top":100,"space":20,"runtime":"Laya.runtime.ColorfulBox","right":25,"name":"vboxStates","left":25},"compId":11,"child":[{"type":"Label","props":{"valign":"middle","text":"颜值10 智力10 体质10 家境Π","name":"label","height":100,"fontSize":55,"font":"SimHei","color":"#ffffff","centerX":0,"align":"center"},"compId":14}]}]},{"type":"Box","props":{"runtime":"Laya.runtime.ColorfulBox","right":25,"name":"boxTalent","left":25,"height":100},"compId":15,"child":[{"type":"Label","props":{"valign":"middle","text":"颜值10 智力10 体质10 家境Π","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0,"align":"center"},"compId":17}]},{"type":"Box","props":{"y":10,"x":10,"right":0,"name":"boxUniqueUnGenerate","left":0},"compId":20,"child":[{"type":"Box","props":{"y":0,"runtime":"Laya.runtime.ColorfulBox","right":0,"name":"boxName","left":0,"height":100},"compId":21,"child":[{"type":"Label","props":{"valign":"middle","text":"UI_UniqueWaTaShi","name":"label","fontSize":55,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0,"align":"center"},"compId":22}]},{"type":"VBox","props":{"top":100,"space":20,"runtime":"Laya.runtime.ColorfulBox","right":25,"name":"vboxStates","left":25},"compId":23,"child":[{"type":"Label","props":{"y":1,"valign":"middle","text":"UI_UniqueWaTaShiContent","right":0,"name":"label","left":0,"leading":30,"fontSize":55,"font":"SimHei","color":"#ffffff","align":"center"},"compId":24},{"type":"Box","props":{"y":2,"right":0,"name":"boxBtn","left":0,"height":150},"compId":25,"child":[{"type":"Box","props":{"runtime":"Laya.runtime.ColorfulBox","right":50,"name":"btn","left":50,"height":120,"centerY":0},"compId":26,"child":[{"type":"Label","props":{"y":30,"x":290,"text":"UI_GenerateNow","name":"label","fontSize":60,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":27}]}]}]}]}]}]},{"type":"Box","props":{"width":480,"var":"btnRetry","runtime":"Laya.runtime.ColorfulBox","name":"btnRetry","height":150,"centerX":0,"bottom":400},"compId":4,"child":[{"type":"Label","props":{"text":"UI_AllNot","name":"label","fontSize":60,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":5}]},{"type":"Box","props":{"width":480,"var":"btnNext","runtime":"Laya.runtime.ColorfulBox","name":"btnNext","height":150,"centerX":0,"bottom":150},"compId":6,"child":[{"type":"Label","props":{"text":"UI_Make_New_Life","name":"label","fontSize":60,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":7}]}],"loadList":[],"loadList3D":[]};
		return CelebrityUI;
	})(View);
var MainUI=(function(_super){
		function MainUI(){
			
		    this.labSubTitle=null;
		    this.btnRemake=null;
			MainUI.__super.call(this);
		}
		CLASS$(MainUI,'ui.view.DefaultTheme.MainUI',_super);
		var __proto__=MainUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ViewBase",Laya.runtime.ViewBase);
			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			_super.prototype.createChildren.call(this);
			this.createView(MainUI.uiView);
		}
		MainUI.uiView={"type":"View","props":{"y":1218,"x":562,"width":1125,"runtime":"Laya.runtime.ViewBase","height":2436,"anchorY":0.5,"anchorX":0.5},"compId":1,"child":[{"type":"Label","props":{"zOrder":1,"text":"UI_Title_Remake","name":"title","fontSize":130,"font":"SimHei","color":"#ffffff","centerY":-260,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5},"compId":8},{"type":"Label","props":{"wordWrap":true,"var":"labSubTitle","text":"UI_Title_Subsequent","right":3,"name":"title","left":-14,"fontSize":70,"font":"SimHei","color":"#999999","centerY":913,"anchorY":0.5,"anchorX":0.5,"align":"center"},"compId":11},{"type":"Box","props":{"zOrder":1,"width":600,"var":"btnRemake","runtime":"Laya.runtime.ColorfulBox","name":"btnRemake","height":150,"centerY":-36,"centerX":17},"compId":85,"child":[{"type":"Label","props":{"text":"Start","name":"label","fontSize":70,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":86}]},{"type":"Image","props":{"y":315,"x":0,"width":1125,"skin":"images/background/01.png"},"compId":101}],"loadList":["images/background/01.png"],"loadList3D":[]};
		return MainUI;
	})(View);
var ModeUI=(function(_super){
		function ModeUI(){
			
		    this.btnAfg=null;
		    this.btnEgp=null;
		    this.btnInd=null;
		    this.btnJpn=null;
		    this.btnUsa=null;
		    this.btnChn=null;
			ModeUI.__super.call(this);
		}
		CLASS$(ModeUI,'ui.view.DefaultTheme.ModeUI',_super);
		var __proto__=ModeUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			_super.prototype.createChildren.call(this);
			this.createView(ModeUI.uiView);
		}
		ModeUI.uiView={"type":"View","props":{"width":1125,"height":2436},"compId":1,"child":[{"type":"Box","props":{"width":600,"var":"btnAfg","runtime":"Laya.runtime.ColorfulBox","name":"btnAfg","height":269,"centerY":-850,"centerX":0},"compId":2,"child":[{"type":"Label","props":{"top":50,"text":"Afghanistan","name":"font_default","fontSize":80,"font":"SimHei","color":"#f3302d","centerX":0,"bold":true},"compId":4}]},{"type":"Box","props":{"width":600,"var":"btnEgp","runtime":"Laya.runtime.ColorfulBox","name":"btnEgp","height":170,"centerY":-277,"centerX":0},"compId":12,"child":[{"type":"Label","props":{"top":50,"text":"Egypt","name":"font_default","fontSize":80,"font":"SimHei","color":"#f16a68","centerX":0,"bold":true},"compId":13}]},{"type":"Box","props":{"width":600,"var":"btnInd","runtime":"Laya.runtime.ColorfulBox","name":"btnInd","height":269,"centerY":8,"centerX":0},"compId":16,"child":[{"type":"Label","props":{"top":50,"text":"India","name":"font_default","fontSize":80,"font":"SimHei","color":"#db4c4a","centerX":0,"bold":true},"compId":17}]},{"type":"Box","props":{"width":600,"var":"btnJpn","runtime":"Laya.runtime.ColorfulBox","name":"btnJpn","height":269,"centerY":304,"centerX":0},"compId":20,"child":[{"type":"Label","props":{"top":50,"text":"Japan","name":"font_default","fontSize":80,"font":"SimHei","color":"#d7403d","centerX":0,"bold":true},"compId":21}]},{"type":"Box","props":{"width":600,"var":"btnUsa","runtime":"Laya.runtime.ColorfulBox","name":"btnUsa","height":269,"centerY":602,"centerX":0},"compId":24,"child":[{"type":"Label","props":{"top":50,"text":"United States","name":"United States","fontSize":80,"font":"SimHei","color":"#d94d4b","centerX":0,"bold":true},"compId":25}]},{"type":"Box","props":{"width":600,"var":"btnChn","runtime":"Laya.runtime.ColorfulBox","name":"btnChn","height":269,"centerY":-537,"centerX":0},"compId":28,"child":[{"type":"Label","props":{"top":50,"text":"China","name":"label_china","fontSize":80,"font":"SimHei","color":"#ef3734","centerX":0,"bold":true},"compId":29}]}],"loadList":[],"loadList3D":[]};
		return ModeUI;
	})(View);
var PropertyUI=(function(_super){
		function PropertyUI(){
			
		    this.title=null;
		    this.labLeftPropertyPoint=null;
		    this.boxCharm=null;
		    this.boxCharmAllocate=null;
		    this.btnCharmReduce=null;
		    this.inputCharm=null;
		    this.btnCharmIncrease=null;
		    this.boxIntelligence=null;
		    this.boxIntelligenceAllocate=null;
		    this.btnIntelligenceReduce=null;
		    this.inputIntelligence=null;
		    this.btnIntelligenceIncrease=null;
		    this.boxStrength=null;
		    this.boxStrengthAllocate=null;
		    this.btnStrengthReduce=null;
		    this.inputStrength=null;
		    this.btnStrengthIncrease=null;
		    this.boxMoney=null;
		    this.boxSpiritAllocate=null;
		    this.btnSpiritReduce=null;
		    this.inputSpirit=null;
		    this.btnSpiritIncrease=null;
		    this.btnMoneyReduce=null;
		    this.inputMoney=null;
		    this.btnMoneyIncrease=null;
		    this.listSelectedTalents=null;
		    this.btnRandomAllocate=null;
		    this.btnNext=null;
			PropertyUI.__super.call(this);
		}
		CLASS$(PropertyUI,'ui.view.DefaultTheme.PropertyUI',_super);
		var __proto__=PropertyUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ViewBase",Laya.runtime.ViewBase);
			View.regComponent("Laya.runtime.ColorFilterItem",Laya.runtime.ColorFilterItem);
			View.regComponent("Laya.runtime.ScaleButton",Laya.runtime.ScaleButton);
			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			_super.prototype.createChildren.call(this);
			this.createView(PropertyUI.uiView);
		}
		PropertyUI.uiView={"type":"View","props":{"width":1125,"runtime":"Laya.runtime.ViewBase","height":2436},"compId":1,"child":[{"type":"Label","props":{"y":80,"var":"title","text":"UI_Title_Property","name":"title","fontSize":80,"font":"SimHei","color":"#ffffff","centerX":0},"compId":6},{"type":"Box","props":{"top":230,"right":40,"name":"propertyAllocate","left":40,"height":1100},"compId":8,"child":[{"type":"HBox","props":{"top":0,"height":100,"centerX":0},"compId":50,"child":[{"type":"Label","props":{"x":0,"text":"UI_Left_Property_Point","name":"font_default","fontSize":70,"font":"SimHei","color":"#ffffff","centerY":0},"compId":52},{"type":"Label","props":{"x":1,"text":"UI_Colon","name":"font_default","fontSize":70,"font":"SimHei","color":"#ffffff","centerY":0},"compId":54},{"type":"Label","props":{"x":2,"var":"labLeftPropertyPoint","text":"0","name":"font_default","fontSize":70,"color":"#ffffff","centerY":0},"compId":53}]},{"type":"VBox","props":{"top":200,"space":100,"right":50,"left":50},"compId":120,"child":[{"type":"Box","props":{"y":0,"var":"boxCharm","right":0,"left":0,"height":130},"compId":10,"child":[{"type":"Label","props":{"x":183,"text":"UI_Property_Charm","name":"font_default","fontSize":70,"font":"SimHei","color":"#ffffff","centerY":0,"anchorY":0.5,"anchorX":0.5},"compId":19},{"type":"Box","props":{"width":590,"var":"boxCharmAllocate","runtime":"Laya.runtime.ColorFilterItem","right":30,"name":"property","height":110,"centerY":0},"compId":20,"child":[{"type":"Box","props":{"width":110,"var":"btnCharmReduce","name":"btnCharmReduce","left":0,"height":110,"centerY":0},"compId":21,"child":[{"type":"Box","props":{"width":110,"height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":24,"child":[{"type":"Rect","props":{"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":26},{"type":"Rect","props":{"y":106,"x":0,"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":27},{"type":"Rect","props":{"y":0,"x":0,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":28},{"type":"Rect","props":{"y":0,"x":106,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":30}]},{"type":"Box","props":{"width":110,"runtime":"Laya.runtime.ScaleButton","height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":39,"child":[{"type":"Box","props":{"width":48,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":25,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":23}]}]}]},{"type":"Box","props":{"y":0,"x":110,"top":0,"right":110,"left":110,"bottom":0},"compId":42,"child":[{"type":"TextInput","props":{"var":"inputCharm","type":"number","top":0,"text":"0","right":0,"promptColor":"#828282","prompt":0,"name":"inputCharm","maxChars":1,"left":0,"fontSize":80,"font":"SimHei","color":"#ffffff","bottom":0,"align":"center"},"compId":48},{"type":"Rect","props":{"y":0,"x":0,"width":370,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":223},{"type":"Rect","props":{"y":106,"x":0,"width":370,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":224}]},{"type":"Box","props":{"width":110,"var":"btnCharmIncrease","right":0,"name":"btnCharmIncrease","height":110,"centerY":0},"compId":22,"child":[{"type":"Box","props":{"width":110,"height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":31,"child":[{"type":"Rect","props":{"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":32},{"type":"Rect","props":{"y":106,"x":0,"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":33},{"type":"Rect","props":{"y":0,"x":0,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":34},{"type":"Rect","props":{"y":0,"x":106,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":35}]},{"type":"Box","props":{"width":110,"runtime":"Laya.runtime.ScaleButton","height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":38,"child":[{"type":"Box","props":{"width":48,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":36,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":37}]},{"type":"Box","props":{"width":48,"rotation":90,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":40,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":41}]}]}]}]}]},{"type":"Box","props":{"y":1,"var":"boxIntelligence","right":0,"left":0,"height":130},"compId":121,"child":[{"type":"Label","props":{"x":183,"text":"UI_Property_Intelligence","name":"font_default","fontSize":70,"font":"SimHei","color":"#ffffff","centerY":0,"anchorY":0.5,"anchorX":0.5},"compId":124},{"type":"Box","props":{"width":590,"var":"boxIntelligenceAllocate","runtime":"Laya.runtime.ColorFilterItem","right":30,"name":"property","height":110,"centerY":0},"compId":125,"child":[{"type":"Box","props":{"width":110,"var":"btnIntelligenceReduce","name":"btnIntelligenceReduce","left":0,"height":110,"centerY":0},"compId":126,"child":[{"type":"Box","props":{"width":110,"height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":127,"child":[{"type":"Rect","props":{"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":128},{"type":"Rect","props":{"y":106,"x":0,"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":129},{"type":"Rect","props":{"y":0,"x":0,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":130},{"type":"Rect","props":{"y":0,"x":106,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":131}]},{"type":"Box","props":{"width":110,"runtime":"Laya.runtime.ScaleButton","height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":132,"child":[{"type":"Box","props":{"width":48,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":133,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":134}]}]}]},{"type":"Box","props":{"y":0,"x":110,"top":0,"right":110,"left":110,"bottom":0},"compId":135,"child":[{"type":"TextInput","props":{"var":"inputIntelligence","type":"number","top":0,"text":"0","right":0,"promptColor":"#828282","prompt":0,"name":"inputIntelligence","maxChars":1,"left":0,"fontSize":80,"font":"SimHei","color":"#ffffff","bottom":0,"align":"center"},"compId":136},{"type":"Rect","props":{"y":0,"x":0,"width":370,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":221},{"type":"Rect","props":{"y":106,"x":0,"width":370,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":222}]},{"type":"Box","props":{"width":110,"var":"btnIntelligenceIncrease","right":0,"name":"btnIntelligenceIncrease","height":110,"centerY":0},"compId":140,"child":[{"type":"Box","props":{"width":110,"height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":141,"child":[{"type":"Rect","props":{"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":142},{"type":"Rect","props":{"y":106,"x":0,"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":143},{"type":"Rect","props":{"y":0,"x":0,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":144},{"type":"Rect","props":{"y":0,"x":106,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":145}]},{"type":"Box","props":{"width":110,"runtime":"Laya.runtime.ScaleButton","height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":146,"child":[{"type":"Box","props":{"width":48,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":147,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":148}]},{"type":"Box","props":{"width":48,"rotation":90,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":149,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":150}]}]}]}]}]},{"type":"Box","props":{"y":2,"var":"boxStrength","right":0,"left":0,"height":130},"compId":151,"child":[{"type":"Label","props":{"x":183,"text":"UI_Property_Strength","name":"font_default","fontSize":70,"font":"SimHei","color":"#ffffff","centerY":0,"anchorY":0.5,"anchorX":0.5},"compId":154},{"type":"Box","props":{"width":590,"var":"boxStrengthAllocate","runtime":"Laya.runtime.ColorFilterItem","right":30,"name":"property","height":110,"centerY":0},"compId":155,"child":[{"type":"Box","props":{"width":110,"var":"btnStrengthReduce","name":"btnStrengthReduce","left":0,"height":110,"centerY":0},"compId":156,"child":[{"type":"Box","props":{"width":110,"height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":157,"child":[{"type":"Rect","props":{"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":158},{"type":"Rect","props":{"y":106,"x":0,"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":159},{"type":"Rect","props":{"y":0,"x":0,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":160},{"type":"Rect","props":{"y":0,"x":106,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":161}]},{"type":"Box","props":{"width":110,"runtime":"Laya.runtime.ScaleButton","height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":162,"child":[{"type":"Box","props":{"width":48,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":163,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":164}]}]}]},{"type":"Box","props":{"y":0,"x":110,"top":0,"right":110,"left":110,"bottom":0},"compId":165,"child":[{"type":"TextInput","props":{"var":"inputStrength","type":"number","top":0,"text":"0","right":0,"promptColor":"#828282","prompt":0,"name":"inputStrength","maxChars":1,"left":0,"fontSize":80,"font":"SimHei","color":"#ffffff","bottom":0,"align":"center"},"compId":166},{"type":"Rect","props":{"y":0,"x":0,"width":370,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":219},{"type":"Rect","props":{"y":106,"x":0,"width":370,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":220}]},{"type":"Box","props":{"width":110,"var":"btnStrengthIncrease","right":0,"name":"btnStrengthIncrease","height":110,"centerY":0},"compId":170,"child":[{"type":"Box","props":{"width":110,"height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":171,"child":[{"type":"Rect","props":{"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":172},{"type":"Rect","props":{"y":106,"x":0,"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":173},{"type":"Rect","props":{"y":0,"x":0,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":174},{"type":"Rect","props":{"y":0,"x":106,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":175}]},{"type":"Box","props":{"width":110,"runtime":"Laya.runtime.ScaleButton","height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":176,"child":[{"type":"Box","props":{"width":48,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":177,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":178}]},{"type":"Box","props":{"width":48,"rotation":90,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":179,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":180}]}]}]}]}]},{"type":"Box","props":{"y":3,"var":"boxMoney","right":0,"name":"boxEQ","left":0,"height":130},"compId":181,"child":[{"type":"Label","props":{"x":183,"text":"UI_Property_Spirit","name":"font_default","fontSize":70,"font":"SimHei","color":"#ffffff","centerY":0,"anchorY":0.5,"anchorX":0.5},"compId":184},{"type":"Box","props":{"width":590,"var":"boxSpiritAllocate","runtime":"Laya.runtime.ColorFilterItem","right":30,"name":"property","height":110,"centerY":0},"compId":185,"child":[{"type":"Box","props":{"width":110,"var":"btnSpiritReduce","name":"btnSpiritReduce","left":0,"height":110,"centerY":0},"compId":186,"child":[{"type":"Box","props":{"width":110,"height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":187,"child":[{"type":"Rect","props":{"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":188},{"type":"Rect","props":{"y":106,"x":0,"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":189},{"type":"Rect","props":{"y":0,"x":0,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":190},{"type":"Rect","props":{"y":0,"x":106,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":191}]},{"type":"Box","props":{"width":110,"runtime":"Laya.runtime.ScaleButton","height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":192,"child":[{"type":"Box","props":{"width":48,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":193,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":194}]}]}]},{"type":"Box","props":{"y":0,"x":110,"top":0,"right":110,"left":110,"bottom":0},"compId":195,"child":[{"type":"TextInput","props":{"var":"inputSpirit","type":"number","top":0,"text":"0","right":0,"promptColor":"#828282","prompt":0,"name":"inputSpirit","maxChars":1,"left":0,"fontSize":80,"font":"SimHei","color":"#ffffff","bottom":0,"align":"center"},"compId":196},{"type":"Rect","props":{"y":0,"x":0,"width":370,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":217},{"type":"Rect","props":{"y":106,"x":0,"width":370,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":218}]},{"type":"Box","props":{"width":110,"var":"btnSpiritIncrease","right":0,"name":"btnSpiritIncrease","height":110,"centerY":0},"compId":200,"child":[{"type":"Box","props":{"width":110,"height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":201,"child":[{"type":"Rect","props":{"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":202},{"type":"Rect","props":{"y":106,"x":0,"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":203},{"type":"Rect","props":{"y":0,"x":0,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":204},{"type":"Rect","props":{"y":0,"x":106,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":205}]},{"type":"Box","props":{"width":110,"runtime":"Laya.runtime.ScaleButton","height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":206,"child":[{"type":"Box","props":{"width":48,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":207,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":208}]},{"type":"Box","props":{"width":48,"rotation":90,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":209,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":210}]}]}]}]}]},{"type":"Box","props":{"y":-187,"x":-50,"right":0,"name":"boxMoney","left":0,"height":130},"compId":252,"child":[{"type":"Label","props":{"x":183,"text":"UI_Property_Money","name":"font_default","fontSize":70,"font":"SimHei","color":"#ffffff","centerY":0,"anchorY":0.5,"anchorX":0.5},"compId":253},{"type":"Box","props":{"width":590,"runtime":"Laya.runtime.ColorFilterItem","right":30,"name":"property","height":110,"centerY":0},"compId":254,"child":[{"type":"Box","props":{"width":110,"var":"btnMoneyReduce","name":"btnMoneyReduce","left":0,"height":110,"centerY":0},"compId":255,"child":[{"type":"Box","props":{"width":110,"height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":256,"child":[{"type":"Rect","props":{"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":257},{"type":"Rect","props":{"y":106,"x":0,"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":258},{"type":"Rect","props":{"y":0,"x":0,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":259},{"type":"Rect","props":{"y":0,"x":106,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":260}]},{"type":"Box","props":{"width":110,"runtime":"Laya.runtime.ScaleButton","height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":261,"child":[{"type":"Box","props":{"width":48,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":262,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":263}]}]}]},{"type":"Box","props":{"y":0,"x":110,"top":0,"right":110,"left":110,"bottom":0},"compId":264,"child":[{"type":"TextInput","props":{"var":"inputMoney","type":"number","top":0,"text":"0","right":0,"promptColor":"#828282","prompt":0,"name":"inputMoney","maxChars":1,"left":0,"fontSize":80,"font":"SimHei","color":"#ffffff","bottom":0,"align":"center"},"compId":265},{"type":"Rect","props":{"y":0,"x":0,"width":370,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":266},{"type":"Rect","props":{"y":106,"x":0,"width":370,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":267}]},{"type":"Box","props":{"width":110,"var":"btnMoneyIncrease","right":0,"name":"btnMoneyIncrease","height":110,"centerY":0},"compId":268,"child":[{"type":"Box","props":{"width":110,"height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":269,"child":[{"type":"Rect","props":{"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":270},{"type":"Rect","props":{"y":106,"x":0,"width":110,"lineWidth":1,"height":4,"fillColor":"#ffffff"},"compId":271},{"type":"Rect","props":{"y":0,"x":0,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":272},{"type":"Rect","props":{"y":0,"x":106,"width":4,"lineWidth":1,"height":110,"fillColor":"#ffffff"},"compId":273}]},{"type":"Box","props":{"width":110,"runtime":"Laya.runtime.ScaleButton","height":110,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":274,"child":[{"type":"Box","props":{"width":48,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":275,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":276}]},{"type":"Box","props":{"width":48,"rotation":90,"height":12,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":277,"child":[{"type":"Rect","props":{"y":0,"x":0,"width":48,"lineWidth":1,"height":12,"fillColor":"#ffffff"},"compId":278}]}]}]}]}]}]}]},{"type":"Box","props":{"right":40,"name":"selectedTalents","left":40,"height":450,"bottom":300},"compId":56,"child":[{"type":"Label","props":{"top":20,"text":"UI_Selected_Talent","name":"font_default","left":20,"fontSize":50,"font":"SimHei","color":"#ffffff"},"compId":57},{"type":"List","props":{"var":"listSelectedTalents","vScrollBarSkin":" ","top":110,"spaceY":20,"right":10,"repeatY":3,"repeatX":1,"name":"listSelectedTalents","left":10,"bottom":10},"compId":58,"child":[{"type":"Box","props":{"y":15,"runtime":"Laya.runtime.ColorfulBox","right":15,"renderType":"render","left":15,"height":80},"compId":215,"child":[{"type":"Label","props":{"y":20,"text":"Title","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":216}]}]}]},{"type":"HBox","props":{"space":40,"name":"buttonGroup","height":150,"centerX":0,"bottom":90},"compId":212,"child":[{"type":"Box","props":{"y":0,"x":0,"width":480,"var":"btnRandomAllocate","top":0,"runtime":"Laya.runtime.ColorfulBox","name":"btnRandomAllocate","bottom":0},"compId":72,"child":[{"type":"Label","props":{"text":"UI_Random_Allocate","name":"label","fontSize":60,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":213}]},{"type":"Box","props":{"x":1,"width":480,"var":"btnNext","top":0,"runtime":"Laya.runtime.ColorfulBox","name":"btnNext","bottom":0},"compId":73,"child":[{"type":"Label","props":{"text":"UI_Make_New_Life","name":"label","fontSize":60,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":214}]}]}],"loadList":[],"loadList3D":[]};
		return PropertyUI;
	})(View);
var RebornUI=(function(_super){
		function RebornUI(){
			
		    this.btnContinue=null;
			RebornUI.__super.call(this);
		}
		CLASS$(RebornUI,'ui.view.DefaultTheme.RebornUI',_super);
		var __proto__=RebornUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ViewBase",Laya.runtime.ViewBase);
			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			_super.prototype.createChildren.call(this);
			this.createView(RebornUI.uiView);
		}
		RebornUI.uiView={"type":"View","props":{"y":1218,"x":562,"width":1125,"runtime":"Laya.runtime.ViewBase","height":2436,"anchorY":0.5,"anchorX":0.5},"compId":1,"child":[{"type":"Label","props":{"zOrder":1,"width":1292,"text":"You are born as a female","name":"title","height":100,"fontSize":130,"font":"SimHei","color":"#191717","centerY":-260,"centerX":0,"bold":true,"bgColor":"#e7dfdf","anchorY":0.5,"anchorX":0.5},"compId":8},{"type":"Box","props":{"zOrder":1,"width":600,"var":"btnContinue","runtime":"Laya.runtime.ColorfulBox","name":"btnContinue","height":150,"centerY":54,"centerX":144},"compId":85,"child":[{"type":"Label","props":{"text":"Continue","name":"txtContinue","fontSize":70,"font":"SimHei","color":"#171515","centerY":0,"centerX":0,"bgColor":"#f3eeee"},"compId":86}]},{"type":"Image","props":{"y":374,"x":0,"width":1125,"skin":"images/background/02.png"},"compId":105}],"loadList":["images/background/02.png"],"loadList3D":[]};
		return RebornUI;
	})(View);
var SexOrientationUI=(function(_super){
		function SexOrientationUI(){
			
		    this.btnStraight=null;
		    this.btnLBTQ=null;
			SexOrientationUI.__super.call(this);
		}
		CLASS$(SexOrientationUI,'ui.view.DefaultTheme.SexOrientationUI',_super);
		var __proto__=SexOrientationUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			_super.prototype.createChildren.call(this);
			this.createView(SexOrientationUI.uiView);
		}
		SexOrientationUI.uiView={"type":"View","props":{"width":1125,"height":2436},"compId":1,"child":[{"type":"Box","props":{"width":600,"var":"btnStraight","runtime":"Laya.runtime.ColorfulBox","name":"btnStraight","height":269,"centerY":-850,"centerX":0},"compId":2,"child":[{"type":"Label","props":{"top":50,"text":"Straight","name":"font_default","fontSize":80,"font":"SimHei","color":"#f3302d","centerX":0,"bold":true},"compId":4}]},{"type":"Box","props":{"width":600,"var":"btnLBTQ","runtime":"Laya.runtime.ColorfulBox","name":"btnLBTQ","height":170,"centerY":-277,"centerX":0},"compId":12,"child":[{"type":"Label","props":{"top":50,"text":"btnLBTQ","name":"font_default","fontSize":80,"font":"SimHei","color":"#f16a68","centerX":0,"bold":true},"compId":13}]}],"loadList":[],"loadList3D":[]};
		return SexOrientationUI;
	})(View);
var SummaryUI=(function(_super){
		function SummaryUI(){
			
		    this.title=null;
		    this.listSummary=null;
		    this.listSelectedTalents=null;
		    this.btnAgain=null;
			SummaryUI.__super.call(this);
		}
		CLASS$(SummaryUI,'ui.view.DefaultTheme.SummaryUI',_super);
		var __proto__=SummaryUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ViewBase",Laya.runtime.ViewBase);
			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			View.regComponent("Laya.runtime.BlankBox",Laya.runtime.BlankBox);
			_super.prototype.createChildren.call(this);
			this.createView(SummaryUI.uiView);
		}
		SummaryUI.uiView={"type":"View","props":{"width":1125,"runtime":"Laya.runtime.ViewBase","height":2436},"compId":1,"child":[{"type":"Label","props":{"y":80,"var":"title","text":"UI_Title_Summary","name":"title","fontSize":80,"font":"SimHei","color":"#ffffff","centerX":0},"compId":6},{"type":"Box","props":{"top":230,"right":40,"name":"summary","left":40,"bottom":800},"compId":8,"child":[{"type":"List","props":{"var":"listSummary","top":0,"spaceY":20,"right":0,"repeatY":7,"repeatX":1,"name":"listSummary","left":0,"bottom":0},"compId":265,"child":[{"type":"Box","props":{"y":15,"runtime":"Laya.runtime.ColorfulBox","right":15,"renderType":"render","left":15,"height":160},"compId":266,"child":[{"type":"Label","props":{"y":20,"text":"Title","name":"label","left":100,"fontSize":70,"font":"SimHei","color":"#ffffff","centerY":0},"compId":267}]}]}]},{"type":"Box","props":{"right":40,"name":"selectedTalents","left":40,"height":450,"bottom":300},"compId":9,"child":[{"type":"Label","props":{"top":20,"text":"UI_Talent_Extend","name":"font_default","left":20,"fontSize":50,"color":"#ffffff"},"compId":137},{"type":"List","props":{"var":"listSelectedTalents","vScrollBarSkin":" ","top":110,"spaceY":20,"right":0,"repeatY":3,"repeatX":1,"name":"listSelectedTalents","left":0,"bottom":10},"compId":138,"child":[{"type":"Box","props":{"y":15,"runtime":"Laya.runtime.ColorfulBox","right":15,"renderType":"render","left":15,"height":80},"compId":263,"child":[{"type":"Label","props":{"y":20,"text":"Title","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":264},{"type":"Box","props":{"top":0,"runtime":"Laya.runtime.BlankBox","right":0,"name":"blank","left":0,"bottom":0,"alpha":0.3},"compId":270}]}]}]},{"type":"Box","props":{"right":1,"name":"buttonGroup","left":1,"bottom":0},"compId":10,"child":[{"type":"Box","props":{"width":600,"var":"btnAgain","runtime":"Laya.runtime.ColorfulBox","name":"btnAgain","height":150,"centerX":0,"bottom":100},"compId":268,"child":[{"type":"Label","props":{"text":"UI_Remake_Again","name":"label","fontSize":70,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":269}]}]}],"loadList":[],"loadList3D":[]};
		return SummaryUI;
	})(View);
var TalentUI=(function(_super){
		function TalentUI(){
			
		    this.title=null;
		    this.pageDrawCard=null;
		    this.btnDrawCard=null;
		    this.pageResult=null;
		    this.listTalents=null;
		    this.btnNext=null;
			TalentUI.__super.call(this);
		}
		CLASS$(TalentUI,'ui.view.DefaultTheme.TalentUI',_super);
		var __proto__=TalentUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ViewBase",Laya.runtime.ViewBase);
			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			View.regComponent("Laya.runtime.BlankBox",Laya.runtime.BlankBox);
			_super.prototype.createChildren.call(this);
			this.createView(TalentUI.uiView);
		}
		TalentUI.uiView={"type":"View","props":{"width":1125,"runtime":"Laya.runtime.ViewBase","height":2436},"compId":1,"child":[{"type":"Label","props":{"y":80,"var":"title","text":"UI_Title_Talent","name":"title","fontSize":80,"font":"SimHei","color":"#ffffff","centerX":0},"compId":17},{"type":"Box","props":{"var":"pageDrawCard","top":0,"right":0,"name":"pageDrawCard","left":0,"bottom":0},"compId":19,"child":[{"type":"Box","props":{"width":600,"var":"btnDrawCard","runtime":"Laya.runtime.ColorfulBox","name":"btnDrawCard","height":150,"centerY":0,"centerX":0},"compId":110,"child":[{"type":"Label","props":{"text":"UI_Talent_Draw","name":"label","fontSize":70,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":111}]}]},{"type":"Box","props":{"y":0,"x":0,"var":"pageResult","top":0,"right":0,"name":"pageResult","left":0,"bottom":0},"compId":21,"child":[{"type":"List","props":{"width":1085,"var":"listTalents","vScrollBarSkin":" ","top":230,"spaceY":20,"repeatX":1,"name":"listTalents","centerX":0,"bottom":250},"compId":22,"child":[{"type":"Box","props":{"y":15,"runtime":"Laya.runtime.ColorfulBox","right":15,"renderType":"render","left":15,"height":80},"compId":23,"child":[{"type":"Label","props":{"y":20,"text":"Title","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":30},{"type":"Box","props":{"top":0,"runtime":"Laya.runtime.BlankBox","right":0,"name":"blank","left":0,"bottom":0,"alpha":0.3},"compId":116}]}]},{"type":"Box","props":{"x":263,"width":1085,"var":"btnNext","runtime":"Laya.runtime.ColorfulBox","name":"btnNext","height":150,"centerX":0,"bottom":30},"compId":114,"child":[{"type":"Label","props":{"text":"UI_Next","name":"label","fontSize":70,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":115}]}]}],"loadList":[],"loadList3D":[]};
		return TalentUI;
	})(View);
var ThanksUI=(function(_super){
		function ThanksUI(){
			
		    this.btnBack=null;
		    this.panelTopSupports=null;
		    this.vboxTopSupports=null;
		    this.listSupports=null;
		    this.btnDDF=null;
		    this.btnAFD=null;
			ThanksUI.__super.call(this);
		}
		CLASS$(ThanksUI,'ui.view.DefaultTheme.ThanksUI',_super);
		var __proto__=ThanksUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ViewBase",Laya.runtime.ViewBase);
			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			_super.prototype.createChildren.call(this);
			this.createView(ThanksUI.uiView);
		}
		ThanksUI.uiView={"type":"View","props":{"width":1125,"runtime":"Laya.runtime.ViewBase","height":2436},"compId":1,"child":[{"type":"Box","props":{"y":95,"x":945,"width":260,"var":"btnBack","top":50,"runtime":"Laya.runtime.ColorfulBox","right":50,"name":"btnBack","height":90,"anchorY":0.5,"anchorX":0.5},"compId":153,"child":[{"type":"Label","props":{"y":1028,"x":332,"text":"UI_Back","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":154}]},{"type":"Panel","props":{"width":1100,"var":"panelTopSupports","vScrollBarSkin":" ","top":170,"name":"panelTopSupports","height":400,"centerX":0},"compId":18,"child":[{"type":"VBox","props":{"y":15,"var":"vboxTopSupports","space":30,"right":-6,"name":"vboxTopSupports","left":-6},"compId":17,"child":[{"type":"Box","props":{"runtime":"Laya.runtime.ColorfulBox","right":0,"name":"boxTopSupport","left":0},"compId":88,"child":[{"type":"Label","props":{"y":25,"wordWrap":true,"width":250,"text":"Sombody","name":"name","left":50,"leading":25,"fontSize":50,"font":"SimHei","color":"#000000","align":"center"},"compId":155},{"type":"Label","props":{"y":25,"wordWrap":true,"text":"This is he say","right":20,"name":"comment","left":350,"leading":25,"fontSize":50,"font":"SimHei","color":"#000000","align":"center"},"compId":95}]}]}]},{"type":"List","props":{"width":1100,"var":"listSupports","vScrollBarSkin":" ","top":600,"spaceY":50,"spaceX":50,"name":"listSupports","centerX":0,"bottom":200},"compId":161,"child":[{"type":"Label","props":{"y":30,"x":25,"width":500,"text":"label","renderType":"render","fontSize":50,"font":"SimHei","color":"#ffffff","align":"center"},"compId":162}]},{"type":"Box","props":{"width":400,"var":"btnDDF","runtime":"Laya.runtime.ColorfulBox","name":"btnDDF","height":100,"centerX":300,"bottom":50,"anchorY":0.5,"anchorX":0.5},"compId":163,"child":[{"type":"Label","props":{"y":1028,"x":332,"text":"UI_Support_Programmer","name":"label","fontSize":45,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":164}]},{"type":"Box","props":{"width":400,"var":"btnAFD","runtime":"Laya.runtime.ColorfulBox","name":"btnAFD","height":100,"centerX":-300,"bottom":50,"anchorY":0.5,"anchorX":0.5},"compId":165,"child":[{"type":"Label","props":{"y":1028,"x":332,"text":"UI_Support_Designer","name":"label","fontSize":45,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":166}]}],"loadList":[],"loadList3D":[]};
		return ThanksUI;
	})(View);
var TrajectoryUI=(function(_super){
		function TrajectoryUI(){
			
		    this.labCharm=null;
		    this.labIntelligence=null;
		    this.labStrength=null;
		    this.labMoney=null;
		    this.labSpirit=null;
		    this.boxTrajectory=null;
		    this.panelTrajectory=null;
		    this.vboxTrajectory=null;
		    this.btnSummary=null;
		    this.boxSpeed=null;
		    this.prgSpeed=null;
		    this.scbSpeed=null;
		    this.boxParticle=null;
			TrajectoryUI.__super.call(this);
		}
		CLASS$(TrajectoryUI,'ui.view.DefaultTheme.TrajectoryUI',_super);
		var __proto__=TrajectoryUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ViewBase",Laya.runtime.ViewBase);
			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			View.regComponent("Laya.runtime.ColorFilterItem",Laya.runtime.ColorFilterItem);
			View.regComponent("Particle2D",Laya.Particle2D);
			_super.prototype.createChildren.call(this);
			this.createView(TrajectoryUI.uiView);
		}
		TrajectoryUI.uiView={"type":"View","props":{"width":1125,"runtime":"Laya.runtime.ViewBase","height":2436},"compId":1,"child":[{"type":"Box","props":{"top":80,"right":20,"left":20,"height":120},"compId":31,"child":[{"type":"HBox","props":{"space":15,"centerY":0,"centerX":0,"align":"middle"},"compId":71,"child":[{"type":"Box","props":{"x":0,"width":200,"runtime":"Laya.runtime.ColorfulBox","name":"propertyBox","height":120,"centerY":0},"compId":34,"child":[{"type":"Label","props":{"y":30,"text":"UI_Property_Charm","name":"label","fontSize":45,"font":"SimHei","color":"#ffffff","centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":39},{"type":"Box","props":{"runtime":"Laya.runtime.ColorfulBox","right":0,"name":"propertyValue","left":0,"height":60,"bottom":0},"compId":41,"child":[{"type":"Label","props":{"var":"labCharm","text":"10","name":"label","fontSize":55,"font":"SimHei","color":"#55fffe","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":40}]}]},{"type":"Box","props":{"x":1,"width":200,"runtime":"Laya.runtime.ColorfulBox","name":"propertyBox","height":120,"centerY":0},"compId":50,"child":[{"type":"Label","props":{"y":30,"text":"UI_Property_Intelligence","name":"label","fontSize":45,"font":"SimHei","color":"#ffffff","centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":54},{"type":"Box","props":{"runtime":"Laya.runtime.ColorfulBox","right":0,"name":"propertyValue","left":0,"height":60,"bottom":0},"compId":55,"child":[{"type":"Label","props":{"var":"labIntelligence","text":"10","name":"label","fontSize":55,"font":"SimHei","color":"#55fffe","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":56}]}]},{"type":"Box","props":{"x":2,"width":200,"runtime":"Laya.runtime.ColorfulBox","name":"propertyBox","height":120,"centerY":0},"compId":74,"child":[{"type":"Label","props":{"y":30,"text":"UI_Property_Strength","name":"label","fontSize":45,"font":"SimHei","color":"#ffffff","centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":78},{"type":"Box","props":{"runtime":"Laya.runtime.ColorfulBox","right":0,"name":"propertyValue","left":0,"height":60,"bottom":0},"compId":79,"child":[{"type":"Label","props":{"var":"labStrength","text":"10","name":"label","fontSize":55,"font":"SimHei","color":"#55fffe","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":80}]}]},{"type":"Box","props":{"x":3,"width":200,"runtime":"Laya.runtime.ColorfulBox","name":"propertyBox","height":120,"centerY":0},"compId":43,"child":[{"type":"Label","props":{"y":30,"text":"UI_Property_Money","name":"label","fontSize":45,"font":"SimHei","color":"#ffffff","centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":47},{"type":"Box","props":{"runtime":"Laya.runtime.ColorfulBox","right":0,"name":"propertyValue","left":0,"height":60,"bottom":0},"compId":48,"child":[{"type":"Label","props":{"var":"labMoney","text":"10","name":"label","fontSize":55,"font":"SimHei","color":"#55fffe","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":49}]}]},{"type":"Box","props":{"x":4,"width":200,"runtime":"Laya.runtime.ColorfulBox","name":"propertyBox","height":120,"centerY":0},"compId":81,"child":[{"type":"Label","props":{"y":30,"text":"UI_Property_Spirit","name":"label","fontSize":45,"font":"SimHei","color":"#ffffff","centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":85},{"type":"Box","props":{"runtime":"Laya.runtime.ColorfulBox","right":0,"name":"propertyValue","left":0,"height":60,"bottom":0},"compId":86,"child":[{"type":"Label","props":{"var":"labSpirit","text":"10","name":"label","fontSize":55,"font":"SimHei","color":"#55fffe","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":87}]}]}]}]},{"type":"Box","props":{"x":20,"var":"boxTrajectory","top":240,"runtime":"Laya.runtime.ColorfulBox","right":20,"name":"boxTrajectory","left":20,"bottom":250},"compId":102,"child":[{"type":"Panel","props":{"var":"panelTrajectory","vScrollBarSkin":" ","top":0,"right":0,"name":"panelTrajectory","left":0,"bottom":0},"compId":18,"child":[{"type":"VBox","props":{"y":15,"var":"vboxTrajectory","space":20,"right":-6,"name":"vboxTrajectory","left":-6},"compId":17,"child":[{"type":"Box","props":{"runtime":"Laya.runtime.ColorfulBox","right":0,"name":"boxTrajectoryItem","left":0},"compId":88,"child":[{"type":"HBox","props":{"y":25,"x":200,"name":"hboxAge","anchorX":1,"align":"middle"},"compId":91,"child":[{"type":"Label","props":{"x":0,"text":"3000","name":"labAge","fontSize":50,"font":"SimHei","color":"#cfea5c","anchorX":0},"compId":90},{"type":"Label","props":{"x":1,"text":"岁","fontSize":50,"font":"SimHei","color":"#cfea5c","anchorX":0},"compId":94},{"type":"Label","props":{"x":2,"text":"：","fontSize":50,"font":"SimHei","color":"#cfea5c","anchorX":0},"compId":92}]},{"type":"Label","props":{"y":25,"wordWrap":true,"text":"你的父母开始辅导你数学和英语，智力+1","right":0,"name":"labContent","left":220,"leading":25,"fontSize":50,"font":"SimHei","color":"#ffffff"},"compId":95}]}]}]}]},{"type":"Box","props":{"right":0,"left":0,"height":1,"bottom":-1},"compId":14,"child":[{"type":"Box","props":{"width":600,"var":"btnSummary","runtime":"Laya.runtime.ColorfulBox","name":"btnSummary","height":150,"centerX":0,"bottom":80},"compId":151,"child":[{"type":"Label","props":{"text":"UI_Goto_Summary","name":"label","fontSize":60,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0},"compId":152}]},{"type":"Box","props":{"y":-155,"var":"boxSpeed","runtime":"Laya.runtime.ColorFilterItem","right":100,"name":"boxSpeed","left":100,"height":150,"anchorY":0.5,"anchorX":0.5},"compId":104,"child":[{"type":"ProgressBar","props":{"var":"prgSpeed","skin":"images/progress/progress_s.png","right":0,"name":"prgSpeed","left":0,"bottom":0},"compId":105},{"type":"HScrollBar","props":{"var":"scbSpeed","skin":"images/slider/hslider_s.png","right":0,"name":"scbSpeed","min":0,"max":1000,"left":0,"height":60,"bottom":0},"compId":106},{"type":"Label","props":{"text":"UI_Manual","fontSize":50,"color":"#ffffff","bottom":70},"compId":107},{"type":"Label","props":{"text":"UI_Auto","right":0,"fontSize":50,"font":"SimHei","color":"#ffffff","bottom":70},"compId":108}]}]},{"type":"Box","props":{"width":10,"var":"boxParticle","name":"boxParticle","height":10,"centerY":0,"centerX":0},"compId":153,"child":[{"type":"Particle2D","props":{"y":5,"x":5,"url":"particle/fly.part","autoPlay":true},"compId":154}]}],"loadList":["images/progress/progress_s.png","images/slider/hslider_s.png"],"loadList3D":[]};
		return TrajectoryUI;
	})(View);
var LoadingUI=(function(_super){
		function LoadingUI(){
			
			LoadingUI.__super.call(this);
		}
		CLASS$(LoadingUI,'ui.view.LoadingUI',_super);
		var __proto__=LoadingUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ViewBase",Laya.runtime.ViewBase);
			_super.prototype.createChildren.call(this);
			this.createView(LoadingUI.uiView);
		}
		LoadingUI.uiView={"type":"View","props":{"width":1125,"runtime":"Laya.runtime.ViewBase","height":2436},"compId":1,"child":[{"type":"Sprite","props":{"y":0,"x":0,"alpha":0.3},"compId":11,"child":[{"type":"Rect","props":{"width":2000,"lineWidth":1,"height":3000,"fillColor":"#000000"},"compId":12}]},{"type":"Box","props":{"width":200,"scaleY":2,"scaleX":2,"height":200,"centerY":0,"centerX":0},"compId":2,"child":[{"type":"Animation","props":{"y":100,"x":100,"source":"view/CyberTheme/animation/circleFlash.ani","autoPlay":true},"compId":3},{"type":"Image","props":{"skin":"images/resource/circle.png","renderType":"mask"},"compId":9}]},{"type":"Label","props":{"text":"UI_Loading","fontSize":80,"font":"Impact","color":"#ffffff","centerY":400,"centerX":0},"compId":10}],"loadList":["view/CyberTheme/animation/circleFlash.ani","images/resource/circle.png"],"loadList3D":[]};
		return LoadingUI;
	})(View);
var MessagePopupUI=(function(_super){
		function MessagePopupUI(){
			
		    this.boxBg=null;
		    this.message=null;
			MessagePopupUI.__super.call(this);
		}
		CLASS$(MessagePopupUI,'ui.view.MessagePopupUI',_super);
		var __proto__=MessagePopupUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			_super.prototype.createChildren.call(this);
			this.createView(MessagePopupUI.uiView);
		}
		MessagePopupUI.uiView={"type":"View","props":{"width":1100,"mouseThrough":true,"mouseEnabled":false,"height":230},"compId":1,"child":[{"type":"Box","props":{"var":"boxBg","top":10,"runtime":"Laya.runtime.ColorfulBox","right":10,"name":"boxBg","left":10,"bottom":10,"alpha":0.75},"compId":3},{"type":"Label","props":{"wordWrap":true,"var":"message","text":"消息","right":50,"name":"message","left":50,"fontSize":60,"font":"SimHei","color":"#ffffff","centerY":0,"align":"center"},"compId":2}],"loadList":[],"loadList3D":[]};
		return MessagePopupUI;
	})(View);
var SaveLoadUI=(function(_super){
		function SaveLoadUI(){
			
		    this.input=null;
		    this.btnSave=null;
		    this.btnLoad=null;
		    this.btnRead=null;
		    this.btnWrite=null;
		    this.btnClose=null;
		    this.btnBackup=null;
			SaveLoadUI.__super.call(this);
		}
		CLASS$(SaveLoadUI,'ui.view.SaveLoadUI',_super);
		var __proto__=SaveLoadUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			_super.prototype.createChildren.call(this);
			this.createView(SaveLoadUI.uiView);
		}
		SaveLoadUI.uiView={"type":"Dialog","props":{"width":645,"height":400},"compId":1,"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":300},"compId":15,"child":[{"type":"Box","props":{"y":0,"x":0,"width":645,"height":2},"compId":19,"child":[{"type":"Rect","props":{"width":645,"lineWidth":1,"height":2,"fillColor":"#97ffe6"},"compId":17}]},{"type":"Box","props":{"width":645,"height":2,"centerX":0,"bottom":0},"compId":20,"child":[{"type":"Rect","props":{"width":645,"lineWidth":1,"height":2,"fillColor":"#97ffe6"},"compId":21}]},{"type":"Box","props":{"width":645,"height":100,"centerY":0,"centerX":0,"alpha":0.2},"compId":22,"child":[{"type":"Rect","props":{"width":645,"lineWidth":1,"height":100,"fillColor":"#000000"},"compId":23}]}]},{"type":"TextInput","props":{"wordWrap":false,"var":"input","valign":"middle","top":0,"text":"content","right":0,"overflow":"scroll","left":0,"fontSize":35,"font":"SimHei","color":"#ffffff","bottom":300},"compId":4},{"type":"Box","props":{"width":120,"var":"btnSave","runtime":"Laya.runtime.ColorfulBox","name":"btnSmall","left":5,"height":120,"bottom":155,"anchorY":0.5,"anchorX":0.5},"compId":5,"child":[{"type":"Label","props":{"text":"UI_Save","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5},"compId":7}]},{"type":"Box","props":{"width":120,"var":"btnLoad","runtime":"Laya.runtime.ColorfulBox","name":"btnSmall","left":130,"height":120,"bottom":155,"anchorY":0.5,"anchorX":0.5},"compId":6,"child":[{"type":"Label","props":{"text":"UI_Load","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5},"compId":8}]},{"type":"Box","props":{"width":120,"var":"btnRead","runtime":"Laya.runtime.ColorfulBox","name":"btnSmall","left":260,"height":120,"bottom":155,"anchorY":0.5,"anchorX":0.5},"compId":13,"child":[{"type":"Label","props":{"text":"UI_Read","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5},"compId":14}]},{"type":"Box","props":{"width":120,"var":"btnWrite","runtime":"Laya.runtime.ColorfulBox","name":"btnSmall","left":390,"height":120,"bottom":155,"anchorY":0.5,"anchorX":0.5},"compId":11,"child":[{"type":"Label","props":{"text":"UI_Write","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5},"compId":12}]},{"type":"Box","props":{"x":10,"width":120,"var":"btnClose","runtime":"Laya.runtime.ColorfulBox","right":5,"name":"btnSmall","height":120,"bottom":155,"anchorY":0.5,"anchorX":0.5},"compId":9,"child":[{"type":"Label","props":{"text":"×","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5},"compId":10}]},{"type":"Box","props":{"y":20,"var":"btnBackup","runtime":"Laya.runtime.ColorfulBox","right":5,"name":"btnBackup","left":5,"height":120,"bottom":5,"anchorY":0.5,"anchorX":0.5},"compId":25,"child":[{"type":"Label","props":{"text":"UI_BackupBtn","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5},"compId":26}]}],"loadList":[],"loadList3D":[]};
		return SaveLoadUI;
	})(Dialog);
var ThemesUI=(function(_super){
		function ThemesUI(){
			
		    this.radioTheme=null;
		    this.btnOK=null;
		    this.btnClose=null;
			ThemesUI.__super.call(this);
		}
		CLASS$(ThemesUI,'ui.view.ThemesUI',_super);
		var __proto__=ThemesUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Laya.runtime.ColorfulBox",Laya.runtime.ColorfulBox);
			_super.prototype.createChildren.call(this);
			this.createView(ThemesUI.uiView);
		}
		ThemesUI.uiView={"type":"Dialog","props":{"width":350,"height":550},"compId":1,"child":[{"type":"Box","props":{"top":20,"right":20,"left":20,"bottom":130},"compId":6,"child":[{"type":"RadioGroup","props":{"var":"radioTheme","name":"radioTheme","height":380,"centerY":0,"centerX":0},"compId":13,"child":[{"type":"Radio","props":{"width":300,"top":0,"skin":"images/radio/radio_cyber.png","name":"item0","height":100},"compId":10},{"type":"Radio","props":{"width":300,"skin":"images/radio/radio_dark.png","name":"item1","height":100,"centerY":0},"compId":11},{"type":"Radio","props":{"width":300,"skin":"images/radio/radio_light.png","name":"item2","height":100,"bottom":0},"compId":12}]}]},{"type":"Box","props":{"width":90,"var":"btnOK","runtime":"Laya.runtime.ColorfulBox","name":"btnSmall","left":20,"height":90,"bottom":20,"anchorY":0.5,"anchorX":0.5},"compId":2,"child":[{"type":"Label","props":{"text":"√","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5},"compId":3}]},{"type":"Box","props":{"width":90,"var":"btnClose","runtime":"Laya.runtime.ColorfulBox","right":20,"name":"btnSmall","height":90,"bottom":20,"anchorY":0.5,"anchorX":0.5},"compId":14,"child":[{"type":"Label","props":{"text":"×","name":"label","fontSize":50,"font":"SimHei","color":"#ffffff","centerY":0,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5},"compId":15}]}],"loadList":["images/radio/radio_cyber.png","images/radio/radio_dark.png","images/radio/radio_light.png"],"loadList3D":[]};
		return ThemesUI;
	})(Dialog);
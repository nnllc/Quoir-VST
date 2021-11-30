Content.makeFrontInterface(1000, 600);

//sampler
const var Sampler = Synth.getSampler("Sampler");
const var Sampler1 = Synth.getSampler("Sampler1");
const var Sampler2 = Synth.getSampler("Sampler2");
const var Sampler3 = Synth.getSampler("Sampler3");

//samplemaps
const var sampleMaps = Sampler.getSampleMapList();

//combobox note: cmbsamplemaps is name of combobox
const var cmbsamplemaps = Content.getComponent("cmbsamplemaps");
cmbsamplemaps.set("items", sampleMaps.join("\n"));
const var cmbsamplemaps1 = Content.getComponent("cmbsamplemaps1");
cmbsamplemaps1.set("items", sampleMaps.join("\n"));
const var cmbsamplemaps2 = Content.getComponent("cmbsamplemaps2");
cmbsamplemaps2.set("items", sampleMaps.join("\n"));
const var cmbsamplemaps3 = Content.getComponent("cmbsamplemaps3");
cmbsamplemaps3.set("items", sampleMaps.join("\n"));

//Note: Sampler is name of Sampler
inline function oncmbsamplemapsControl(component, value)
{
	Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("cmbsamplemaps").setControlCallback(oncmbsamplemapsControl);

inline function oncmbsamplemaps1Control(component, value)
{
	Sampler1.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("cmbsamplemaps1").setControlCallback(oncmbsamplemaps1Control);

inline function oncmbsamplemaps2Control(component, value)
{
	Sampler2.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("cmbsamplemaps2").setControlCallback(oncmbsamplemaps2Control);

inline function oncmbsamplemaps3Control(component, value)
{
	Sampler3.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("cmbsamplemaps3").setControlCallback(oncmbsamplemaps3Control);


inline function onLogoButtonControl(component, value)
{
	Engine.openWebsite("https://newnationllc.com");
};

Content.getComponent("LogoButton").setControlCallback(onLogoButtonControl);

//Custom Settings Popup
const var panel1 = Content.addPanel("panel1", 645, 36);

//const var hideShow = Content.addButton("hideShow");
const var hideShow = Content.getComponent("hideShow");

inline function onhideShowControl(number, value)
{
        panel1.showControl(value); 
}

hideShow.setControlCallback(onhideShowControl);
function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 
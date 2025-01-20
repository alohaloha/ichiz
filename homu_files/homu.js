// Created by iWeb 3.0.4 local-build-20170403

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_3:new IWShadow({blurRadius:6,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.750000}),shadow_5:new IWShadow({blurRadius:6,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.750000}),shadow_4:new IWShadow({blurRadius:6,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.750000}),shadow_0:new IWShadow({blurRadius:6,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.750000}),shadow_2:new IWShadow({blurRadius:6,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.750000}),shadow_1:new IWShadow({blurRadius:6,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.750000}),shadow_6:new IWShadow({blurRadius:6,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('homu_files/homuMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}

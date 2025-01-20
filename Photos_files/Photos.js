// Created by iWeb 3.0.4 local-build-20170403

function createMediaStream_id1()
{return IWCreatePhotocast("http://www4.bunbun.ne.jp/%7Eichiz/homu.html/keaofisuICHIZ/Photos_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www4.bunbun.ne.jp/%7Eichiz/homu.html/keaofisuICHIZ',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www4.bunbun.ne.jp/%7Eichiz/homu.html/keaofisuICHIZ',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(176,176),new IWSize(176,54),new IWSize(211,245),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-3,3,6,169),url:'Photos_files/stroke.png'},{rect:new IWRect(-3,-3,6,6),url:'Photos_files/stroke_1.png'},{rect:new IWRect(3,-3,169,6),url:'Photos_files/stroke_2.png'},{rect:new IWRect(172,-3,6,6),url:'Photos_files/stroke_3.png'},{rect:new IWRect(172,3,6,169),url:'Photos_files/stroke_4.png'},{rect:new IWRect(172,172,6,6),url:'Photos_files/stroke_5.png'},{rect:new IWRect(3,172,169,6),url:'Photos_files/stroke_6.png'},{rect:new IWRect(-3,172,6,6),url:'Photos_files/stroke_7.png'}],new IWSize(175,175)),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Photos_files/PhotosMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixAllIEPNGs('Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}

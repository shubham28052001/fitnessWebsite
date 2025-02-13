// Shery.imageEffect(Element,configuration)
Shery.imageEffect("#back",
    {style:5,
        config:{"a":
            {"value":0.69,"range":[0,30]},"b":{"value":-0.91,"range":[-1,1]},"zindex":{"value":1,"range":[-9999999,9999999]},"aspect":{"value":2.165336365372294},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.02},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":0.8,"range":[0.1,5]},"durationIn":{"value":0.8,"range":[0.1,5]},"displaceAmount":{"value":0.3},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.5,"range":[0,10]},"metaball":{"value":0.18,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.46,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},gooey:true})


var elems = document.querySelectorAll("#elem");

elems.forEach(function(elem){
    var h1 =elem.querySelectorAll("h1");
    var index=0;
    var animate=false;
    document.querySelector("#main").addEventListener("click",function(){
     if(!animate){
        animate=true;
        gsap.to(h1[index],{
            top:"-=100%",
            ease: Expo.easeInOut,
            duration:0.5,
            onComplete:function(){
                gsap.set(this._targets[0],{top:"100%"})
                animate=false;
           }
        });
        index===h1.length-1? index=0 : index++;
        gsap.to(h1[index],{
            top:"-=100%",
            ease: Expo.easeInOut,
            duration:0.5,
        });
     }
    }
)
})

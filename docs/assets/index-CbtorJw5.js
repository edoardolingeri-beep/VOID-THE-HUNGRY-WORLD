(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new Map;function t(t){for(let n of t)e.set(n.id,n)}function n(t){let n=e.get(t);if(!n)throw Error(`Unknown prop: ${t}`);return n}function r(){return[...e.values()]}var i={metal:`#aeb4c2`,darkMetal:`#4a4f5c`,steel:`#7d8596`,tire:`#23242b`,glass:`#6fb8e8`,darkGlass:`#2c3e5a`,wood:`#a8754a`,darkWood:`#6e4a2e`,lightWood:`#d4a873`,leaf:`#4caf50`,leafDark:`#2f8a43`,leafLight:`#7ccf5a`,trunk:`#7a5236`,concrete:`#bfc2c7`,white:`#f4f4f0`,black:`#26262c`,red:`#e8423f`,orange:`#ff8a2a`,yellow:`#ffd23f`,blue:`#3d7bf0`,green:`#3fbf6a`,pink:`#ff7eb6`,purple:`#8b5cf6`,teal:`#22c3b5`,cream:`#f6e7c8`,terracotta:`#c8653e`,sand:`#e9cf98`,carColors:[`#e8423f`,`#3d7bf0`,`#f4f4f0`,`#ffd23f`,`#2c2f3a`,`#3fbf6a`,`#ff8a2a`,`#9aa3b5`,`#8b5cf6`,`#22c3b5`],bright:[`#e8423f`,`#3d7bf0`,`#ffd23f`,`#3fbf6a`,`#ff8a2a`,`#ff7eb6`,`#8b5cf6`,`#22c3b5`]},a=[`#e8423f`,`#3d7bf0`,`#ffd23f`,`#ff7eb6`,`#3fbf6a`];t([{id:`can`,name:`Soda Can`,points:10,tags:[`small`],sound:`metal`,variants:4,blurb:`Fizzy, crunchy, gone.`,build(e,t,n){let r=[`#e8423f`,`#3d7bf0`,`#3fbf6a`,`#ff8a2a`][n%4];e.cylB(.085,.085,.24,r,0,0,0,10),e.cylB(.087,.087,.06,i.white,0,.09,0,10),e.cylB(.07,.085,.02,i.metal,0,.24,0,10),e.cylB(.075,.07,.02,i.metal,0,-0,0,10)}},{id:`apple`,name:`Apple`,points:10,tags:[`small`,`nature`],sound:`organic`,variants:3,blurb:`An apple a day keeps the void away. Or not.`,build(e,t,n){let r=[`#e8423f`,`#7ccf5a`,`#ffb02e`][n%3];e.sphere(.12,r,0,.115,0,{sy:.9,w:9,hs:7}),e.cyl(.012,.012,.07,i.trunk,0,.24,0,5,{rz:.2}),e.box(.07,.01,.035,i.leaf,.04,.25,0,{rz:-.4})}},{id:`ball`,name:`Play Ball`,points:10,tags:[`small`],sound:`plastic`,variants:5,blurb:`Bouncy. Until it is not.`,build(e,t,n){let r=a[n%a.length];e.ico(.17,r,0,.17,0,1),e.torus(.168,.018,i.white,0,.17,0,{rx:Math.PI/2,ts:18}),e.torus(.168,.018,i.white,0,.17,0,{ts:18})}},{id:`soccerball`,name:`Football`,points:12,tags:[`small`],sound:`plastic`,variants:1,blurb:`Goal! Into the void.`,build(e){e.ico(.19,i.white,0,.19,0,1);for(let[t,n,r]of[[0,1,0],[.9,.3,.3],[-.9,.3,.3],[.3,.3,-.9],[-.4,-.2,-.85],[.5,-.4,.75],[-.5,-.4,.75]]){let a=Math.hypot(t,n,r);e.dodeca(.06,i.black,t/a*.17,.19+n/a*.17,r/a*.17)}}},{id:`cup`,name:`Coffee Cup`,points:10,tags:[`small`],sound:`plastic`,variants:3,blurb:`Takeaway, take-in, take-down.`,build(e,t,n){let r=[`#f4f4f0`,`#ffd23f`,`#ff7eb6`][n%3];e.lathe([[0,0],[.07,0],[.095,.24],[0,.24]],r,0,0,0,12),e.lathe([[.082,.07],[.09,.07],[.093,.16],[.085,.16]],i.wood,0,0,0,12),e.lathe([[0,.27],[.1,.25],[.1,.24],[0,.24]],`#3a2b22`,0,0,0,12)}},{id:`bottle`,name:`Bottle`,points:10,tags:[`small`],sound:`glass`,variants:3,blurb:`Message not included.`,build(e,t,n){let r=[`#3fae6a`,`#6fb8e8`,`#a8754a`][n%3];e.lathe([[0,0],[.07,0],[.075,.2],[.03,.27],[.025,.34],[0,.34]],r,0,0,0,10),e.cylB(.028,.028,.03,i.red,0,.33,0,8),e.cylB(.076,.076,.07,i.cream,0,.08,0,10)}},{id:`flowerpot`,name:`Flower Pot`,points:15,tags:[`small`,`nature`],sound:`wood`,variants:4,blurb:`Terracotta crunch with a floral finish.`,build(e,t,n){e.lathe([[0,0],[.13,0],[.18,.26],[.2,.28],[.2,.31],[0,.31]],i.terracotta,0,0,0,10),e.cylB(.17,.17,.02,`#5a3d2a`,0,.3,0,10);let r=[`#ff7eb6`,`#ffd23f`,`#e8423f`,`#a78bfa`][n%4];for(let n=0;n<5;n++){let a=n/5*Math.PI*2+t.next(),o=Math.cos(a)*.08,s=Math.sin(a)*.08;e.cyl(.01,.01,.18,i.leafDark,o,.4,s,4),e.ico(.055,r,o,.5,s,0),e.ico(.025,i.yellow,o,.53,s,0)}e.ico(.11,i.leaf,0,.36,0,0,{sy:.6})}},{id:`vase`,name:`Ceramic Vase`,points:15,tags:[`small`],sound:`glass`,variants:3,blurb:`Priceless. Probably.`,build(e,t,n){let r=[`#3d7bf0`,`#22c3b5`,`#f4f4f0`][n%3];e.lathe([[0,0],[.09,0],[.16,.12],[.15,.26],[.07,.36],[.09,.42],[0,.42]],r,0,0,0,12),e.lathe([[.152,.14],[.158,.14],[.155,.2],[.149,.2]],i.white,0,0,0,12)}},{id:`duck`,name:`Rubber Duck`,points:15,tags:[`small`],sound:`plastic`,variants:2,blurb:`Squeak.`,build(e,t,n){let r=n===0?`#ffd23f`:`#ff7eb6`;e.sphere(.13,r,0,.11,0,{sx:1.25,sy:.85,w:10}),e.sphere(.085,r,.08,.25,0,{w:9}),e.box(.07,.025,.06,i.orange,.17,.24,0),e.sphere(.015,i.black,.14,.28,.05,{w:5,hs:4}),e.sphere(.015,i.black,.14,.28,-.05,{w:5,hs:4}),e.box(.06,.04,.12,r,-.15,.17,0,{rz:.6})}},{id:`toyblocks`,name:`Toy Blocks`,points:15,tags:[`small`],sound:`wood`,variants:3,blurb:`A, B, C… void.`,build(e,t){let n=[...i.bright].sort(()=>t.next()-.5);e.boxB(.17,.17,.17,n[0],-.1,0,0,{ry:t.range(-.3,.3)}),e.boxB(.17,.17,.17,n[1],.1,0,.02,{ry:t.range(-.3,.3)}),e.boxB(.17,.17,.17,n[2],0,.17,.01,{ry:t.range(-.5,.5)})}},{id:`teddy`,name:`Teddy Bear`,points:20,tags:[`small`],sound:`soft`,variants:2,blurb:`Cuddly snack.`,build(e,t,n){let r=n===0?`#b07a4f`:`#e8c79c`;e.sphere(.13,r,0,.14,0,{sy:1.05}),e.sphere(.1,r,0,.33,0),e.sphere(.04,r,.07,.42,0),e.sphere(.04,r,-.07,.42,0),e.sphere(.045,i.cream,0,.31,.085,{w:7,hs:5}),e.sphere(.012,i.black,0,.32,.13,{w:5,hs:4}),e.sphere(.05,r,.12,.05,.06),e.sphere(.05,r,-.12,.05,.06),e.sphere(.045,r,.14,.18,.03),e.sphere(.045,r,-.14,.18,.03),e.box(.11,.03,.02,i.red,0,.245,.085)}},{id:`toycar`,name:`Toy Car`,points:20,tags:[`small`],sound:`plastic`,variants:4,blurb:`Zoom zoom, gulp.`,build(e,t,n){let r=i.bright[n%i.bright.length];e.boxB(.34,.09,.17,r,0,.04,0),e.boxB(.18,.08,.15,i.glass,-.02,.13,0),e.wheel(.045,.03,.11,.045,.09),e.wheel(.045,.03,-.11,.045,.09),e.wheel(.045,.03,.11,.045,-.09),e.wheel(.045,.03,-.11,.045,-.09)}},{id:`frisbee`,name:`Frisbee`,points:10,tags:[`small`],sound:`plastic`,variants:3,noShadow:!0,blurb:`Thrown once, caught forever.`,build(e,t,n){let r=[`#ff8a2a`,`#22c3b5`,`#8b5cf6`][n%3];e.lathe([[0,.04],[.15,.035],[.17,0],[.16,0],[0,.03]],r,0,.005,0,14)}},{id:`flowers`,name:`Wild Flowers`,points:5,tags:[`small`,`nature`],sound:`organic`,variants:4,blurb:`Freshly picked by gravity.`,build(e,t,n){let r=[`#ff7eb6`,`#ffd23f`,`#ffffff`,`#a78bfa`][n%4];for(let n=0;n<4;n++){let n=t.range(-.08,.08),a=t.range(-.08,.08),o=t.range(.12,.22);e.cylB(.008,.008,o,i.leafDark,n,0,a,4),e.ico(.035,r,n,o,a,0)}e.ico(.07,i.leaf,0,.02,0,0,{sy:.5})}},{id:`sandwich`,name:`Sandwich`,points:10,tags:[`small`],sound:`organic`,variants:1,blurb:`Lunch for the void.`,build(e){e.extrude([[-.12,0],[.12,0],[0,.18]],.05,`#f2d49b`,0,.09,0,{rx:-Math.PI/2}),e.extrude([[-.115,0],[.115,0],[0,.17]],.03,i.leafLight,0,.055,.003,{rx:-Math.PI/2}),e.extrude([[-.12,0],[.12,0],[0,.18]],.04,`#f2d49b`,0,.025,0,{rx:-Math.PI/2})}},{id:`basket`,name:`Picnic Basket`,points:30,tags:[`small`],sound:`wood`,variants:2,blurb:`Contains one (1) delicious picnic.`,build(e,t,n){let r=n?`#d6a96c`:`#c9965f`;e.boxB(.5,.24,.34,r,0,0,0);for(let t=0;t<3;t++)e.boxB(.51,.025,.35,`#a8754a`,0,.05+t*.07,0);for(let t=0;t<5;t++)e.boxB(.04,.24,.352,`#b9844f`,-.2+t*.1,0,0);e.boxB(.46,.04,.3,n?`#3d7bf0`:`#e8423f`,0,.24,0);for(let t=0;t<4;t++)e.boxB(.05,.042,.3,`#ffffff`,-.15+t*.1,.242,0);e.box(.5,.03,.17,r,0,.32,-.12,{rx:-.9}),e.torus(.18,.018,`#8f6640`,0,.24,0,{arc:Math.PI,ts:10})}},{id:`gnome`,name:`Garden Gnome`,points:25,tags:[`small`],sound:`wood`,variants:2,blurb:`He has seen things.`,build(e,t,n){e.cylB(.12,.14,.2,n?`#3d7bf0`:`#3fbf6a`,0,0,0,8),e.sphere(.09,`#f6cfa8`,0,.27,0,{w:8,hs:6}),e.cone(.13,.08,i.white,0,.21,.05,8,{rx:.5}),e.cone(.1,.26,i.red,0,.45,0,8)}},{id:`kite`,name:`Kite`,points:15,tags:[`small`],sound:`soft`,variants:3,noShadow:!1,blurb:`Grounded at last.`,build(e,t,n){let r=i.bright[n*3%i.bright.length];e.extrude([[0,.25],[.16,0],[0,-.32],[-.16,0]],.015,r,0,.012,0,{rx:-Math.PI/2}),e.box(.012,.012,.55,i.darkWood,0,.03,0),e.box(.3,.012,.012,i.darkWood,0,.03,0)}},{id:`skateboard`,name:`Skateboard`,points:20,tags:[`small`],sound:`wood`,variants:3,blurb:`Kickflip into oblivion.`,build(e,t,n){let r=[`#e8423f`,`#2c2f3a`,`#22c3b5`][n%3];e.boxB(.7,.03,.2,r,0,.08,0),e.boxB(.06,.03,.18,r,.37,.1,0,{rz:.4}),e.boxB(.06,.03,.18,r,-.37,.1,0,{rz:-.4});for(let t of[-.24,.24])for(let n of[-.08,.08])e.cyl(.035,.035,.035,i.white,t,.035,n,8,{rx:Math.PI/2})}}]),t([{id:`cone`,name:`Traffic Cone`,points:15,tags:[`small`],sound:`plastic`,variants:1,blurb:`Orange means go — down.`,build(e){e.boxB(.36,.04,.36,i.orange,0,0,0),e.cylB(.03,.14,.52,i.orange,0,.04,0,10),e.cylB(.085,.108,.1,i.white,0,.2,0,10),e.cylB(.05,.065,.06,i.white,0,.38,0,10)}},{id:`trashbin`,name:`Street Bin`,points:25,tags:[`small`],sound:`metal`,variants:3,blurb:`Finally, someone empties it.`,build(e,t,n){let r=[`#2f7d4a`,`#3d5a80`,`#5b5f6b`][n%3];e.cylB(.26,.23,.8,r,0,0,0,12),e.cylB(.28,.28,.06,i.darkMetal,0,.8,0,12),e.cylB(.15,.2,.1,r,0,.86,0,12),e.cylB(.265,.265,.04,i.darkMetal,0,.3,0,12)}},{id:`wheeliebin`,name:`Wheelie Bin`,points:25,tags:[`small`],sound:`plastic`,variants:3,blurb:`Rolls right in.`,build(e,t,n){let r=[`#3fbf6a`,`#3d7bf0`,`#4a4f5c`][n%3];e.boxB(.55,.9,.6,r,0,.05,0),e.boxB(.6,.06,.68,r,0,.95,.02),e.box(.08,.05,.6,i.darkMetal,-.3,.9,0),e.wheel(.09,.06,0,.09,-.32,i.tire,i.darkMetal)}},{id:`cafechair`,name:`Café Chair`,points:25,tags:[`small`],sound:`metal`,variants:3,blurb:`Reserved for the void.`,build(e,t,n){let r=[`#e8423f`,`#2c2f3a`,`#22c3b5`][n%3];for(let t of[-.18,.18])for(let n of[-.18,.18])e.boxB(.035,.45,.035,i.darkMetal,t,0,n);e.boxB(.44,.05,.44,r,0,.45,0),e.boxB(.44,.4,.04,r,0,.5,-.2),e.boxB(.035,.42,.035,i.darkMetal,-.18,.45,-.2),e.boxB(.035,.42,.035,i.darkMetal,.18,.45,-.2)}},{id:`crate`,name:`Wooden Crate`,points:25,tags:[`small`],sound:`wood`,variants:2,blurb:`Fragile? Not anymore.`,build(e,t,n){let r=n?i.lightWood:i.wood,a=.56;e.boxB(a,a,a,r,0,0,0);let o=.06;for(let t of[-1,1])for(let n of[-1,1])e.boxB(o,.5700000000000001,o,i.darkWood,t*.5/2,0,n*.5/2);for(let t of[0,.5])e.boxB(.5700000000000001,o,o,i.darkWood,0,t,a/2-o/2),e.boxB(.5700000000000001,o,o,i.darkWood,0,t,-.25),e.boxB(o,o,.5700000000000001,i.darkWood,a/2-o/2,t,0),e.boxB(o,o,.5700000000000001,i.darkWood,-.25,t,0);e.box(.72,.06,.03,i.darkWood,0,a/2,.28500000000000003,{rz:.78})}},{id:`hydrant`,name:`Fire Hydrant`,points:25,tags:[`small`],sound:`metal`,variants:2,blurb:`Emergency snack.`,build(e,t,n){let r=n?`#ffd23f`:`#e8423f`;e.cylB(.16,.18,.08,r,0,0,0,10),e.cylB(.12,.12,.5,r,0,.08,0,10),e.cylB(.15,.15,.06,r,0,.55,0,10),e.sphere(.11,r,0,.62,0,{sy:.7}),e.cyl(.05,.05,.34,i.metal,0,.4,0,8,{rz:Math.PI/2}),e.cyl(.06,.06,.1,r,0,.36,.12,8,{rx:Math.PI/2})}},{id:`streetsign`,name:`Street Sign`,points:40,tags:[`small`],sound:`metal`,variants:4,heightFactor:.22,blurb:`It said: do not enter the hole.`,build(e,t,n){e.cylB(.035,.035,2.3,i.metal,0,0,0,6),e.cylB(.09,.09,.05,i.darkMetal,0,0,0,8),n===0?(e.cyl(.3,.3,.04,i.red,0,2.1,.04,8,{rx:Math.PI/2,rz:Math.PI/8}),e.box(.34,.08,.045,i.white,0,2.1,.05)):n===1?(e.cyl(.29,.29,.04,i.blue,0,2.05,.04,14,{rx:Math.PI/2}),e.box(.08,.3,.045,i.white,0,2.05,.05)):n===2?(e.extrude([[-.32,-.28],[.32,-.28],[0,.3]],.04,i.white,0,2.05,.04),e.extrude([[-.25,-.23],[.25,-.23],[0,.22]],.045,i.red,0,2.05,.045),e.extrude([[-.18,-.18],[.18,-.18],[0,.14]],.05,i.white,0,2.05,.05)):(e.box(.7,.22,.04,`#2f7d4a`,0,2.15,.04),e.box(.62,.03,.045,i.white,0,2.15,.045))}},{id:`cafetable`,name:`Bistro Table`,points:40,tags:[`small`],sound:`metal`,variants:2,blurb:`Table for one hole.`,build(e,t,n){e.cylB(.25,.28,.04,i.darkMetal,0,0,0,10),e.cylB(.035,.035,.7,i.darkMetal,0,.04,0,6),e.cylB(.38,.38,.04,n?i.white:`#d9c3a0`,0,.74,0,14),e.cylB(.045,.045,.1,i.white,.12,.78,.05,8),e.cylB(.03,.03,.14,`#6fb8e8`,-.1,.78,-.08,8)}},{id:`newsbox`,name:`Newspaper Box`,points:30,tags:[`small`],sound:`metal`,variants:3,blurb:`Breaking news: it is gone.`,build(e,t,n){let r=[`#3d7bf0`,`#e8423f`,`#ffd23f`][n%3];for(let t of[-.18,.18])for(let n of[-.15,.15])e.boxB(.04,.35,.04,i.darkMetal,t,0,n);e.boxB(.46,.6,.4,r,0,.35,0),e.boxB(.36,.25,.02,i.glass,0,.6,.2),e.boxB(.48,.05,.42,i.darkMetal,0,.95,0)}},{id:`mailbox`,name:`Mailbox`,points:30,tags:[`small`],sound:`metal`,variants:2,blurb:`Return to sender: impossible.`,build(e,t,n){let r=n?`#3d5a80`:`#e8423f`;e.boxB(.5,.9,.42,r,0,.1,0),e.cyl(.25,.25,.42,r,0,1,0,12,{rx:Math.PI/2}),e.box(.3,.04,.03,i.black,0,.85,.215);for(let t of[-.2,.2])e.boxB(.06,.12,.3,i.darkMetal,t,0,0)}},{id:`bollard`,name:`Bollard`,points:20,tags:[`small`],sound:`metal`,variants:1,blurb:`Immovable object, meet unstoppable hole.`,build(e){e.cylB(.11,.12,.8,`#3a3d48`,0,0,0,10),e.sphere(.11,`#3a3d48`,0,.8,0,{sy:.6}),e.cylB(.115,.115,.08,i.yellow,0,.62,0,10)}},{id:`parkingmeter`,name:`Parking Meter`,points:30,tags:[`small`],sound:`metal`,variants:1,heightFactor:.25,blurb:`Time is up.`,build(e){e.cylB(.04,.05,1.1,i.darkMetal,0,0,0,6),e.boxB(.22,.3,.16,i.metal,0,1.1,0),e.boxB(.14,.1,.02,i.glass,0,1.25,.08,{emissive:!0,glow:1.1}),e.sphere(.11,i.metal,0,1.4,0,{sy:.5})}},{id:`shoppingbag`,name:`Shopping Bag`,points:15,tags:[`small`],sound:`soft`,variants:4,blurb:`Retail therapy for the void.`,build(e,t,n){let r=[`#ff7eb6`,`#ffd23f`,`#22c3b5`,`#f4f4f0`][n%4];e.boxB(.32,.36,.14,r,0,0,0),e.torus(.08,.012,i.black,0,.36,0,{arc:Math.PI,ts:8})}},{id:`pizzabox`,name:`Pizza Box`,points:15,tags:[`small`],sound:`soft`,variants:1,noShadow:!1,blurb:`Extra cheese, extra void.`,build(e){e.boxB(.42,.06,.42,`#f2e3c4`,0,0,0),e.boxB(.42,.06,.42,`#f2e3c4`,.02,.06,.01,{ry:.15}),e.box(.2,.005,.2,i.red,.02,.122,.01,{ry:.15})}},{id:`planterbox`,name:`Planter Box`,points:40,tags:[`small`,`nature`],sound:`wood`,variants:3,blurb:`A tiny garden for a big appetite.`,build(e,t,n){e.boxB(.9,.45,.45,n===2?i.concrete:i.wood,0,0,0),e.boxB(.82,.04,.37,`#5a3d2a`,0,.44,0);for(let n=0;n<4;n++)e.ico(.17,n%2?i.leaf:i.leafDark,-.3+n*.2,.55+t.range(0,.05),t.range(-.05,.05),0);if(n===1)for(let t=0;t<4;t++)e.ico(.05,i.pink,-.3+t*.2,.72,.07,0)}},{id:`lamppost`,name:`Street Lamp`,points:60,tags:[`medium`],sound:`metal`,variants:1,heightFactor:.22,blurb:`Lights out.`,build(e){e.cylB(.13,.15,.3,`#3a3d48`,0,0,0,8),e.cylB(.05,.07,4.2,`#3a3d48`,0,.3,0,8),e.box(.9,.06,.08,`#3a3d48`,.4,4.4,0),e.boxB(.36,.1,.22,`#3a3d48`,.8,4.3,0),e.box(.3,.03,.18,`#fff3c4`,.8,4.29,0,{emissive:!0,glow:1.4})}},{id:`scooter`,name:`Kick Scooter`,points:35,tags:[`small`],sound:`metal`,variants:3,blurb:`Last-mile mobility, last-meal edition.`,build(e,t,n){let r=[`#3fbf6a`,`#ff8a2a`,`#2c2f3a`][n%3];e.boxB(.8,.05,.16,r,0,.08,0),e.wheel(.08,.05,.4,.08,0),e.wheel(.08,.05,-.38,.08,0),e.cyl(.025,.025,1,i.darkMetal,.38,.58,0,6,{rz:-.1}),e.cyl(.02,.02,.45,i.black,.43,1.08,0,6,{rx:Math.PI/2})}}]);function o(e,t,n,r,a){let o=n*(r===`pine`?.25:.42);if(e.cylB(n*.045,n*.06,o,i.trunk,0,0,0,7),r===`pine`){let t=a??`#2f8a43`;e.cone(n*.32,n*.42,t,0,o+n*.2,0,8),e.cone(n*.25,n*.36,`#3b9c50`,0,o+n*.42,0,8),e.cone(n*.16,n*.3,`#47ad5b`,0,o+n*.62,0,8)}else if(r===`tall`){let t=a??i.leaf;e.ico(n*.22,t,0,o+n*.18,0,1,{sy:1.5}),e.ico(n*.15,i.leafLight,n*.05,o+n*.4,n*.03,0)}else{let s=a??(r===`blossom`?`#ff9ec8`:i.leaf),c=r===`blossom`?`#ffc2dc`:i.leafLight;e.ico(n*.3,s,0,o+n*.22,0,1),e.ico(n*.2,c,n*.16,o+n*.36,n*.08,0),e.ico(n*.18,r===`blossom`?`#f77fb5`:i.leafDark,-n*.17,o+n*.16,-n*.1,0),t.chance(.5)&&e.ico(n*.15,s,n*.05,o+n*.12,n*.2,0)}}t([{id:`bush`,name:`Bush`,points:30,tags:[`small`,`nature`],sound:`organic`,variants:3,blurb:`Leafy fibre for a balanced diet.`,build(e,t,n){let r=[i.leaf,i.leafDark,`#5cb85c`][n%3];if(e.ico(.42,r,0,.36,0,1,{sy:.8}),e.ico(.3,i.leafLight,.28,.3,.1,0),e.ico(.28,r,-.25,.26,-.12,0),n===2)for(let n=0;n<5;n++)e.ico(.05,i.pink,t.range(-.4,.4),t.range(.4,.62),t.range(-.3,.3),0)}},{id:`bench`,name:`Park Bench`,points:75,tags:[`medium`],sound:`wood`,variants:2,blurb:`Have a seat. Forever.`,build(e,t,n){let r=n?i.wood:`#c9874d`;for(let t of[-.65,.65])e.boxB(.07,.42,.5,`#33363f`,t,0,0),e.boxB(.07,.5,.07,`#33363f`,t,.42,-.24,{rx:-.15}),e.boxB(.07,.04,.45,`#33363f`,t,.62,.02);for(let t=0;t<3;t++)e.boxB(1.6,.04,.13,r,0,.42,-.17+t*.16);for(let t=0;t<2;t++)e.box(1.6,.13,.04,r,0,.62+t*.17,-.27-t*.025,{rx:-.15})}},{id:`bicycle`,name:`Bicycle`,points:75,tags:[`medium`,`vehicle`],sound:`metal`,variants:4,blurb:`Two wheels, zero escape.`,build(e,t,n){let r=[`#e8423f`,`#3d7bf0`,`#3fbf6a`,`#ffd23f`][n%4];e.torus(.32,.035,i.tire,.55,.34,0,{ts:16}),e.torus(.32,.035,i.tire,-.55,.34,0,{ts:16}),e.cyl(.03,.03,.62,r,0,.52,0,6,{rz:1.2}),e.cyl(.03,.03,.7,r,.22,.6,0,6,{rz:-1}),e.cyl(.03,.03,.5,r,-.32,.5,0,6,{rz:.6}),e.cyl(.03,.03,.6,r,.48,.55,0,6,{rz:.35}),e.cyl(.03,.03,.55,r,-.4,.38,0,6,{rz:Math.PI/2}),e.box(.24,.05,.1,i.black,-.18,.84,0),e.cyl(.02,.02,.5,i.darkMetal,.42,.88,0,6,{rx:Math.PI/2}),e.cylB(.02,.02,.1,i.darkMetal,-.18,.74,0,6)}},{id:`smalltree`,name:`Young Tree`,points:90,tags:[`medium`,`nature`],sound:`organic`,variants:4,heightFactor:.28,blurb:`Roots and all.`,build(e,t,n){o(e,t,2.6+t.range(-.2,.3),[`round`,`pine`,`tall`,`blossom`][n%4])}},{id:`tree`,name:`Tree`,points:160,tags:[`nature`],sound:`organic`,variants:4,heightFactor:.26,blurb:`A whole ecosystem, one bite.`,build(e,t,n){o(e,t,5.2+t.range(-.4,.6),[`round`,`pine`,`tall`,`round`][n%4])}},{id:`bigtree`,name:`Old Oak`,points:260,tags:[`nature`],sound:`organic`,variants:2,heightFactor:.25,blurb:`Centuries old. Seconds to swallow.`,build(e,t){o(e,t,8.5+t.range(-.5,.5),`round`)}},{id:`planter`,name:`Flower Planter`,points:75,tags:[`medium`,`nature`],sound:`wood`,variants:3,blurb:`Bloom where you are swallowed.`,build(e,t,n){e.cylB(.6,.55,.5,n===1?`#d8d2c4`:i.concrete,0,0,0,10),e.cylB(.55,.55,.04,`#5a3d2a`,0,.48,0,10);let r=[`#ff7eb6`,`#ffd23f`,`#a78bfa`][n%3];for(let n=0;n<9;n++){let a=n/9*Math.PI*2,o=n%2?.38:.2;e.ico(.13,n%3?i.leaf:i.leafDark,Math.cos(a)*o,.6,Math.sin(a)*o,0),e.ico(.06,r,Math.cos(a)*o,.72+t.range(0,.05),Math.sin(a)*o,0)}}},{id:`litterbasket`,name:`Litter Basket`,points:40,tags:[`small`],sound:`metal`,variants:1,blurb:`Recycled. Permanently.`,build(e){e.cylB(.06,.06,.5,`#33363f`,0,0,0,6),e.cylB(.26,.22,.6,`#2f7d4a`,0,.3,0,10),e.cylB(.27,.27,.05,`#33363f`,0,.9,0,10),e.cylB(.2,.2,.02,i.black,0,.92,0,10)}},{id:`picnictable`,name:`Picnic Table`,points:85,tags:[`medium`],sound:`wood`,variants:1,blurb:`Lunch is served.`,build(e){e.boxB(1.8,.06,.8,i.wood,0,.72,0);for(let t of[-.65,.65])e.boxB(1.8,.05,.3,i.wood,0,.42,t);for(let t of[-.7,.7])e.box(.08,.95,.08,i.darkWood,t,.4,.3,{rx:.6}),e.box(.08,.95,.08,i.darkWood,t,.4,-.3,{rx:-.6}),e.boxB(.08,.05,1.6,i.darkWood,t,.38,0);e.boxB(.5,.01,.4,`#e8423f`,.3,.78,0)}},{id:`swing`,name:`Swing Set`,points:120,tags:[`medium`],sound:`metal`,variants:2,blurb:`Swing low, sweet void.`,build(e,t,n){let r=n?`#3d7bf0`:`#e8423f`;for(let t of[-1.4,1.4])e.cyl(.06,.06,2.3,r,t,1.1,.5,6,{rx:.42}),e.cyl(.06,.06,2.3,r,t,1.1,-.5,6,{rx:-.42});e.cyl(.07,.07,2.9,r,0,2.1,0,8,{rz:Math.PI/2});for(let t of[-.6,.6])e.box(.02,1.5,.02,i.metal,t-.2,1.35,0),e.box(.02,1.5,.02,i.metal,t+.2,1.35,0),e.boxB(.5,.05,.22,i.yellow,t,.55,0)}},{id:`slide`,name:`Playground Slide`,points:130,tags:[`medium`],sound:`plastic`,variants:2,blurb:`Wheee — gulp.`,build(e,t,n){let r=n?`#ffd23f`:`#22c3b5`;for(let t of[-.45,.45])for(let n of[-.4,.4])e.boxB(.08,1.4,.08,i.red,-.8+t*.6,0,n);e.boxB(.9,.08,.9,i.blue,-.8,1.35,0),e.cone(.65,.6,i.red,-.8,2.3,0,4,{ry:Math.PI/4}),e.box(2.3,.07,.6,r,.55,.72,0,{rz:-.6}),e.box(2.3,.15,.05,r,.55,.8,.3,{rz:-.6}),e.box(2.3,.15,.05,r,.55,.8,-.3,{rz:-.6});for(let t=0;t<5;t++)e.box(.05,.05,.7,i.metal,-1.4,.25+t*.25,0)}},{id:`seesaw`,name:`Seesaw`,points:90,tags:[`medium`],sound:`metal`,variants:1,blurb:`Up, down, gone.`,build(e){e.cone(.3,.45,i.blue,0,.22,0,4,{ry:Math.PI/4}),e.box(2.8,.07,.3,i.orange,0,.46,0,{rz:.12});for(let t of[-1.2,1.2])e.boxB(.05,.25,.4,i.darkMetal,t,.46+t*.12,0)}},{id:`birdbath`,name:`Birdbath`,points:70,tags:[`medium`],sound:`glass`,variants:1,blurb:`The birds will have to manage.`,build(e){e.lathe([[0,0],[.3,0],[.28,.08],[.1,.15],[.08,.8],[.45,.94],[.5,1.02],[.44,1.02],[.4,.96],[0,.93]],`#d8d2c4`,0,0,0,14),e.cylB(.405,.38,.03,`#7fd4ee`,0,.94,0,16)}},{id:`fountain`,name:`Grand Fountain`,points:900,tags:[`landmark`],sound:`heavy`,variants:1,heightFactor:.2,blurb:`Make a wish. The wish was hunger.`,build(e){let t=`#ddd6c6`,n=`#cfc7b5`,r=`#69c8ec`,i=`#e4f7ff`;e.lathe([[0,0],[3.1,0],[3.15,.5],[3.05,.62],[2.82,.62],[2.78,.22],[0,.22]],t,0,0,0,24),e.cylB(2.76,2.76,.2,r,0,.24,0,24),e.cylB(.55,.75,1.45,n,0,.22,0,14),e.lathe([[.4,1.62],[1.35,1.72],[1.48,1.98],[1.36,1.98],[1.28,1.8],[.4,1.8]],t,0,0,0,20),e.cylB(1.27,1.27,.1,r,0,1.8,0,20),e.cylB(.22,.32,.85,n,0,1.8,0,12),e.lathe([[.2,2.6],[.66,2.66],[.72,2.84],[.62,2.84],[.58,2.72],[.2,2.72]],t,0,0,0,16),e.cylB(.57,.57,.08,r,0,2.72,0,16),e.cone(.13,.75,i,0,3.15,0,10),e.cylB(.6,.68,.86,r,0,1.84,0,18);for(let t=0;t<8;t++){let n=t/8*Math.PI*2;e.cone(.06,.55,i,Math.cos(n)*1.9,.7,Math.sin(n)*1.9,8,{rz:Math.cos(n)*.45,rx:-Math.sin(n)*.45})}}},{id:`parkbin_lamp`,name:`Garden Lantern`,points:50,tags:[`small`],sound:`metal`,variants:1,heightFactor:.25,blurb:`A gentle glow, extinguished.`,build(e){e.cylB(.1,.12,.15,`#33363f`,0,0,0,8),e.cylB(.04,.04,1.6,`#33363f`,0,.15,0,6),e.boxB(.26,.32,.26,`#fff0b8`,0,1.75,0,{emissive:!0,glow:1.3}),e.cone(.24,.2,`#33363f`,0,2.17,0,4,{ry:Math.PI/4})}},{id:`springrider`,name:`Spring Rider`,points:60,tags:[`medium`],sound:`plastic`,variants:2,blurb:`Boing!`,build(e,t,n){let r=n?`#ffd23f`:`#3fbf6a`;e.cylB(.25,.25,.04,i.darkMetal,0,0,0,10),e.torus(.1,.03,i.metal,0,.12,0,{rx:Math.PI/2}),e.torus(.1,.03,i.metal,0,.22,0,{rx:Math.PI/2}),e.sphere(.32,r,0,.5,0,{sx:1.4,sy:.75}),e.sphere(.2,r,.38,.75,0),e.sphere(.05,i.black,.5,.82,.12,{w:5,hs:4}),e.sphere(.05,i.black,.5,.82,-.12,{w:5,hs:4})}}]);function s(e,t){let n=t.W;e.extrude(t.body,n,t.color,0,0,0),e.extrude(t.cabin,n*.9,i.darkGlass,0,0,0);let[r,a,o]=t.roof;e.box(a-r,.06,n*.92,t.color,(r+a)/2,o+.03,0),e.box(.09,(o-t.cabin[0][1])*1,n*.92,t.color,(r+a)/2-.05,(o+t.cabin[0][1])/2,0);for(let r of t.wheels)for(let i of[-n/2+.12,n/2-.12])e.wheel(t.wheelR,.26,r,t.wheelR,i);e.box(.05,.12,.3,`#fffbe0`,t.front+.02,t.lightY,n/2-.25,{emissive:!0,glow:1.6}),e.box(.05,.12,.3,`#fffbe0`,t.front+.02,t.lightY,-n/2+.25,{emissive:!0,glow:1.6}),e.box(.05,.1,.28,`#ff3045`,t.back-.02,t.lightY+.05,n/2-.22,{emissive:!0,glow:1.4}),e.box(.05,.1,.28,`#ff3045`,t.back-.02,t.lightY+.05,-n/2+.22,{emissive:!0,glow:1.4}),e.box(.12,.14,n*.98,i.darkMetal,t.front,.42,0),e.box(.12,.14,n*.98,i.darkMetal,t.back,.42,0)}var c=[[-2.1,.32],[2.1,.32],[2.12,.72],[1.95,.86],[.9,.92],[-1.45,.94],[-2.05,.9]],l=[[.9,.9],[.32,1.4],[-.95,1.4],[-1.5,.92]];t([{id:`car`,name:`Sedan`,points:150,tags:[`vehicle`],sound:`metal`,variants:10,blurb:`Zero to void in 0.8 seconds.`,build(e,t,n){s(e,{body:c,cabin:l,roof:[-.95,.32,1.4],W:1.8,wheels:[1.35,-1.35],wheelR:.34,color:i.carColors[n%i.carColors.length],front:2.1,back:-2.08,lightY:.72})}},{id:`hatchback`,name:`Hatchback`,points:130,tags:[`vehicle`],sound:`metal`,variants:8,blurb:`Compact, parks anywhere. Even in a hole.`,build(e,t,n){s(e,{body:[[-1.75,.3],[1.75,.3],[1.78,.72],[1.6,.86],[.75,.92],[-1.7,.98],[-1.75,.9]],cabin:[[.75,.9],[.2,1.42],[-1.45,1.42],[-1.68,.96]],roof:[-1.45,.2,1.42],W:1.7,wheels:[1.15,-1.15],wheelR:.32,color:i.carColors[(n+3)%i.carColors.length],front:1.76,back:-1.74,lightY:.74})}},{id:`taxi`,name:`Taxi`,points:160,tags:[`vehicle`],sound:`metal`,variants:1,blurb:`Destination: nowhere.`,build(e){s(e,{body:c,cabin:l,roof:[-.95,.32,1.4],W:1.8,wheels:[1.35,-1.35],wheelR:.34,color:`#ffc61a`,front:2.1,back:-2.08,lightY:.72}),e.boxB(.5,.2,.3,i.white,-.3,1.46,0,{emissive:!0,glow:1.2});for(let t=0;t<6;t++)e.box(.18,.08,.02,t%2?i.black:`#ffc61a`,-1+t*.36,.62,.905)}},{id:`suv`,name:`SUV`,points:200,tags:[`vehicle`],sound:`metal`,variants:8,blurb:`Sport Utility Void.`,build(e,t,n){s(e,{body:[[-2.3,.42],[2.3,.42],[2.32,1],[2.1,1.1],[1.05,1.15],[-2.25,1.2],[-2.3,1.1]],cabin:[[1.05,1.12],[.6,1.82],[-2.15,1.82],[-2.22,1.18]],roof:[-2.15,.6,1.82],W:1.95,wheels:[1.5,-1.5],wheelR:.42,color:[`#2c2f3a`,`#f4f4f0`,`#3d5a80`,`#9aa3b5`,`#7a1f2b`,`#2f5d3a`,`#c9874d`,`#e8423f`][n%8],front:2.3,back:-2.3,lightY:.95});for(let t of[-.6,.6])e.box(2.6,.05,.06,i.darkMetal,-.6,1.9,t)}},{id:`van`,name:`Delivery Van`,points:230,tags:[`vehicle`],sound:`metal`,variants:4,blurb:`Special delivery for the void.`,build(e,t,n){let r=[`#f4f4f0`,`#3d7bf0`,`#ffd23f`,`#e8423f`][n%4];s(e,{body:[[-2.6,.4],[2.6,.4],[2.62,1],[2.4,1.15],[1.7,1.2],[1.2,2.25],[-2.6,2.3]],cabin:[[1.7,1.17],[1.25,2],[.8,2],[.8,1.17]],roof:[-2.6,1.2,2.3],W:2,wheels:[1.75,-1.7],wheelR:.4,color:r,front:2.6,back:-2.6,lightY:.95}),e.box(2.4,.5,.02,n===0?i.red:i.white,-.8,1.5,1.01),e.box(2.4,.5,.02,n===0?i.red:i.white,-.8,1.5,-1.01)}},{id:`bus`,name:`City Bus`,points:420,tags:[`vehicle`],sound:`heavy`,variants:3,blurb:`Next stop: the abyss.`,build(e,t,n){let r=[`#e8423f`,`#3d7bf0`,`#3fbf6a`][n%3],a=10.5,o=2.5;e.boxB(a,2.6,o,r,0,.5,0),e.boxB(10.3,.15,2.4,i.white,0,3.1,0),e.box(9.3,1.05,.02,i.darkGlass,-.3,2.1,1.26),e.box(9.3,1.05,.02,i.darkGlass,-.3,2.1,-2.5/2-.01);for(let t=0;t<8;t++)e.box(.08,1.05,.03,r,-4.25+t*1.18,2.1,1.265),e.box(.08,1.05,.03,r,-4.25+t*1.18,2.1,-2.5/2-.015);e.box(.02,1.6,2.2,i.darkGlass,5.26,1.9,0),e.box(.03,.3,1.4,`#ffb02e`,5.27,2.9,0,{emissive:!0,glow:1.4}),e.box(.9,1.9,.03,i.darkGlass,a/2-1.2,1.45,1.27),e.box(.9,1.9,.03,i.darkGlass,-.6,1.45,1.27);for(let t of[a/2-1.8,-3.05])for(let n of[-1.05,o/2-.2])e.wheel(.52,.32,t,.52,n);for(let t of[-.8,.8])e.box(.05,.16,.36,`#fffbe0`,5.28,.85,t,{emissive:!0,glow:1.6});e.box(.15,.25,o,i.darkMetal,a/2,.5,0),e.box(.15,.25,o,i.darkMetal,-10.5/2,.5,0)}},{id:`motorcycle`,name:`Motorcycle`,points:90,tags:[`vehicle`],sound:`metal`,variants:4,blurb:`Vroom… vrooo… v…`,build(e,t,n){let r=[`#e8423f`,`#2c2f3a`,`#3d7bf0`,`#ff8a2a`][n%4];e.cyl(.33,.33,.14,i.tire,.75,.33,0,12,{rx:Math.PI/2}),e.cyl(.33,.33,.16,i.tire,-.75,.33,0,12,{rx:Math.PI/2}),e.cyl(.15,.15,.17,i.metal,.75,.33,0,8,{rx:Math.PI/2}),e.cyl(.15,.15,.18,i.metal,-.75,.33,0,8,{rx:Math.PI/2}),e.box(.9,.35,.32,i.darkMetal,0,.55,0),e.sphere(.3,r,.25,.85,0,{sx:1.3,sy:.6,sz:.9}),e.box(.7,.12,.3,i.black,-.35,.86,0),e.box(.5,.12,.25,r,-.75,.75,0,{rz:.2}),e.cyl(.04,.04,.7,i.metal,.62,.75,0,6,{rz:-.45}),e.cyl(.03,.03,.7,i.black,.5,1.05,0,6,{rx:Math.PI/2}),e.sphere(.09,`#fffbe0`,.72,.98,0,{emissive:!0,glow:1.6}),e.cyl(.06,.06,.6,i.metal,-.4,.4,.2,6,{rz:Math.PI/2-.1})}},{id:`vespa`,name:`Retro Scooter`,points:80,tags:[`vehicle`],sound:`metal`,variants:4,blurb:`Ciao, bella.`,build(e,t,n){let r=[`#7fd6c2`,`#ff7eb6`,`#f4f4f0`,`#ffd23f`][n%4];e.cyl(.22,.22,.12,i.tire,.58,.22,0,10,{rx:Math.PI/2}),e.cyl(.22,.22,.12,i.tire,-.55,.22,0,10,{rx:Math.PI/2}),e.sphere(.34,r,-.4,.5,0,{sx:1.2,sy:.75,sz:.85}),e.box(.45,.08,.36,r,.12,.32,0),e.box(.12,.85,.36,r,.55,.62,0,{rz:-.25}),e.box(.55,.1,.3,`#5a3d2a`,-.38,.86,0),e.cyl(.025,.025,.6,i.metal,.66,1.08,0,6,{rx:Math.PI/2}),e.sphere(.08,`#fffbe0`,.72,1.05,0,{emissive:!0,glow:1.5})}},{id:`pickup`,name:`Pickup Truck`,points:220,tags:[`vehicle`],sound:`metal`,variants:5,blurb:`Picked up, permanently.`,build(e,t,n){let r=[`#e8423f`,`#3d5a80`,`#f4f4f0`,`#2f5d3a`,`#ff8a2a`][n%5];s(e,{body:[[-2.7,.45],[2.7,.45],[2.72,1.05],[2.5,1.15],[1.5,1.2],[-2.7,1.2]],cabin:[[1.5,1.18],[1.05,1.9],[-.4,1.9],[-.4,1.18]],roof:[-.4,1.05,1.9],W:1.95,wheels:[1.75,-1.75],wheelR:.44,color:r,front:2.7,back:-2.7,lightY:1}),e.box(2.1,.45,.08,r,-1.6,1.42,.94),e.box(2.1,.45,.08,r,-1.6,1.42,-.94),e.box(.08,.45,1.95,r,-2.66,1.42,0),e.boxB(1,.4,.8,i.wood,-1.6,1.2,.2)}},{id:`icecreamvan`,name:`Ice Cream Van`,points:300,tags:[`vehicle`,`commercial`],sound:`metal`,variants:2,blurb:`Brain freeze, void edition.`,build(e,t,n){s(e,{body:[[-2.6,.4],[2.6,.4],[2.62,1],[2.4,1.15],[1.7,1.2],[1.2,2.3],[-2.6,2.35]],cabin:[[1.7,1.17],[1.25,2.05],[.8,2.05],[.8,1.17]],roof:[-2.6,1.2,2.35],W:2,wheels:[1.75,-1.7],wheelR:.4,color:n?`#ffd1e8`:`#c8f2ff`,front:2.6,back:-2.6,lightY:.95}),e.box(1.8,.8,.04,`#2c3e5a`,-.8,1.6,1),e.box(2,.08,.5,`#ff7eb6`,-.8,2.05,1.2,{rx:.3}),e.lathe([[0,0],[.18,.5],[.2,.5],[0,0]],`#d4a873`,-1,2.4,0,8),e.sphere(.24,`#ff7eb6`,-1,3,0),e.sphere(.16,`#fff3c4`,-1,3.25,0)}}]);var u=1e3,d=1001,f=1002,p=1003,m=1004,h=1005,g=1006,_=1007,v=1008,y=1009,b=1010,x=1011,S=1012,C=1013,w=1014,T=1015,E=1016,D=1017,O=1018,ee=1020,k=35902,A=35899,j=1021,M=1022,te=1023,N=1026,ne=1027,re=1028,ie=1029,ae=1030,oe=1031,se=1033,ce=33776,le=33777,P=33778,F=33779,ue=35840,de=35841,fe=35842,pe=35843,me=36196,he=37492,ge=37496,_e=37488,ve=37489,ye=37490,be=37491,xe=37808,Se=37809,Ce=37810,we=37811,Te=37812,Ee=37813,De=37814,Oe=37815,ke=37816,Ae=37817,je=37818,Me=37819,I=37820,Ne=37821,Pe=36492,Fe=36494,L=36495,Ie=36283,R=36284,z=36285,Le=36286,Re=2300,ze=2301,Be=2302,Ve=2303,He=2400,Ue=2401,We=2402,Ge=3200,Ke=`srgb`,qe=`srgb-linear`,Je=`linear`,Ye=`srgb`,Xe=7680,Ze=35044,Qe=35048,$e=2e3;function et(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function tt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function nt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function rt(){let e=nt(`canvas`);return e.style.display=`block`,e}var it={};function at(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ot(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=ot(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=ot(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function st(...e){let t=e.join(` `);t in it||(it[t]=!0,B(...e))}function ct(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var lt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ut=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},dt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ft=1234567,pt=Math.PI/180,mt=180/Math.PI;function ht(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dt[e&255]+dt[e>>8&255]+dt[e>>16&255]+dt[e>>24&255]+`-`+dt[t&255]+dt[t>>8&255]+`-`+dt[t>>16&15|64]+dt[t>>24&255]+`-`+dt[n&63|128]+dt[n>>8&255]+`-`+dt[n>>16&255]+dt[n>>24&255]+dt[r&255]+dt[r>>8&255]+dt[r>>16&255]+dt[r>>24&255]).toLowerCase()}function H(e,t,n){return Math.max(t,Math.min(n,e))}function gt(e,t){return(e%t+t)%t}function _t(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function vt(e,t,n){return e===t?0:(n-e)/(t-e)}function yt(e,t,n){return(1-n)*e+n*t}function bt(e,t,n,r){return yt(e,t,1-Math.exp(-n*r))}function xt(e,t=1){return t-Math.abs(gt(e,t*2)-t)}function St(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Ct(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function wt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Tt(e,t){return e+Math.random()*(t-e)}function Et(e){return e*(.5-Math.random())}function Dt(e){e!==void 0&&(ft=e);let t=ft+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ot(e){return e*pt}function kt(e){return e*mt}function At(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function jt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Mt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Nt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:B(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Pt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var It={DEG2RAD:pt,RAD2DEG:mt,generateUUID:ht,clamp:H,euclideanModulo:gt,mapLinear:_t,inverseLerp:vt,lerp:yt,damp:bt,pingpong:xt,smoothstep:St,smootherstep:Ct,randInt:wt,randFloat:Tt,randFloatSpread:Et,seededRandom:Dt,degToRad:Ot,radToDeg:kt,isPowerOfTwo:At,ceilPowerOfTwo:jt,floorPowerOfTwo:Mt,setQuaternionFromProperEuler:Nt,normalize:Ft,denormalize:Pt},U=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Lt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(H(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rt.copy(this).projectOnVector(e),this.sub(Rt)}reflect(e){return this.sub(Rt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rt=new W,zt=new Lt,G=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return st(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Bt.makeScale(e,t)),this}rotate(e){return st(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Bt.makeRotation(-e)),this}translate(e,t){return st(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Bt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Bt=new G,Vt=new G().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ht=new G().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ut(){let e={enabled:!0,workingColorSpace:qe,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Wt(e.r),e.g=Wt(e.g),e.b=Wt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Gt(e.r),e.g=Gt(e.g),e.b=Gt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Je:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return st(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return st(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[qe]:{primaries:t,whitePoint:r,transfer:Je,toXYZ:Vt,fromXYZ:Ht,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:r,transfer:Ye,toXYZ:Vt,fromXYZ:Ht,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),e}var K=Ut();function Wt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Gt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Kt,qt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kt===void 0&&(Kt=nt(`canvas`)),Kt.width=e.width,Kt.height=e.height;let t=Kt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Kt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=nt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Wt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Wt(t[e]/255)*255):t[e]=Wt(t[e]);return{data:t,width:e.width,height:e.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Jt=0,Yt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=ht(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Xt(r[t].image)):e.push(Xt(r[t]))}else e=Xt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Xt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?qt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var Zt=0,Qt=new W,$t=class e extends ut{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=d,i=d,a=g,o=v,s=te,c=y,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zt++}),this.uuid=ht(),this.name=``,this.source=new Yt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qt).x}get height(){return this.source.getSize(Qt).y}get depth(){return this.source.getSize(Qt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case u:e.x-=Math.floor(e.x);break;case d:e.x=e.x<0?0:1;break;case f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case u:e.y-=Math.floor(e.y);break;case d:e.y=e.y<0?0:1;break;case f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null,$t.DEFAULT_MAPPING=300,$t.DEFAULT_ANISOTROPY=1;var en=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this.w=H(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this.w=H(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tn=class extends ut{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:g,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];let r=new $t({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:g,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Yt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},nn=class extends tn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rn=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=p,this.minFilter=p,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},an=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=p,this.minFilter=p,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},on=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/sn.setFromMatrixColumn(e,0).length(),i=1/sn.setFromMatrixColumn(e,1).length(),a=1/sn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ln,e,un)}lookAt(e,t,n){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),dn.crossVectors(n,pn),dn.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),dn.crossVectors(n,pn)),dn.normalize(),fn.crossVectors(pn,dn),r[0]=dn.x,r[4]=fn.x,r[8]=pn.x,r[1]=dn.y,r[5]=fn.y,r[9]=pn.y,r[2]=dn.z,r[6]=fn.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],A=r[10],j=r[14],M=r[3],te=r[7],N=r[11],ne=r[15];return i[0]=a*x+o*T+s*ee+c*M,i[4]=a*S+o*E+s*k+c*te,i[8]=a*C+o*D+s*A+c*N,i[12]=a*w+o*O+s*j+c*ne,i[1]=l*x+u*T+d*ee+f*M,i[5]=l*S+u*E+d*k+f*te,i[9]=l*C+u*D+d*A+f*N,i[13]=l*w+u*O+d*j+f*ne,i[2]=p*x+m*T+h*ee+g*M,i[6]=p*S+m*E+h*k+g*te,i[10]=p*C+m*D+h*A+g*N,i[14]=p*w+m*O+h*j+g*ne,i[3]=_*x+v*T+y*ee+b*M,i[7]=_*S+v*E+y*k+b*te,i[11]=_*C+v*D+y*A+b*N,i[15]=_*w+v*O+y*j+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=sn.set(r[0],r[1],r[2]).length(),o=sn.set(r[4],r[5],r[6]).length(),s=sn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),cn.copy(this);let c=1/a,l=1/o,u=1/s;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=l,cn.elements[5]*=l,cn.elements[6]*=l,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=$e,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=$e,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},sn=new W,cn=new on,ln=new W(0,0,0),un=new W(1,1,1),dn=new W,fn=new W,pn=new W,mn=new on,hn=new Lt,gn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(H(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-H(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(H(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-H(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(H(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-H(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hn.setFromEuler(this),this.setFromQuaternion(hn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER=`XYZ`;var _n=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},vn=0,yn=new W,bn=new Lt,xn=new on,Sn=new W,Cn=new W,wn=new W,Tn=new Lt,En=new W(1,0,0),Dn=new W(0,1,0),On=new W(0,0,1),kn={type:`added`},An={type:`removed`},jn={type:`childadded`,child:null},Mn={type:`childremoved`,child:null},Nn=class e extends ut{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vn++}),this.uuid=ht(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new gn,r=new Lt,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new on},normalMatrix:{value:new G}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _n,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.multiply(bn),this}rotateOnWorldAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.premultiply(bn),this}rotateX(e){return this.rotateOnAxis(En,e)}rotateY(e){return this.rotateOnAxis(Dn,e)}rotateZ(e){return this.rotateOnAxis(On,e)}translateOnAxis(e,t){return yn.copy(e).applyQuaternion(this.quaternion),this.position.add(yn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(En,e)}translateY(e){return this.translateOnAxis(Dn,e)}translateZ(e){return this.translateOnAxis(On,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sn.copy(e):Sn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Cn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Cn,Sn,this.up):xn.lookAt(Sn,Cn,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),bn.setFromRotationMatrix(xn),this.quaternion.premultiply(bn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,e,wn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,Tn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Nn.DEFAULT_UP=new W(0,1,0),Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=class extends Nn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Fn={type:`move`},In=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},zn={h:0,s:0,l:0};function Bn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,K.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=K.workingColorSpace){return this.r=e,this.g=t,this.b=n,K.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=K.workingColorSpace){if(e=gt(e,1),t=H(t,0,1),n=H(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Bn(i,r,e+1/3),this.g=Bn(i,r,e),this.b=Bn(i,r,e-1/3)}return K.colorSpaceToWorking(this,r),this}setStyle(e,t=Ke){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ke){let n=Ln[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wt(e.r),this.g=Wt(e.g),this.b=Wt(e.b),this}copyLinearToSRGB(e){return this.r=Gt(e.r),this.g=Gt(e.g),this.b=Gt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ke){return K.workingToColorSpace(Vn.copy(this),e),Math.round(H(Vn.r*255,0,255))*65536+Math.round(H(Vn.g*255,0,255))*256+Math.round(H(Vn.b*255,0,255))}getHexString(e=Ke){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=K.workingColorSpace){K.workingToColorSpace(Vn.copy(this),t);let n=Vn.r,r=Vn.g,i=Vn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=K.workingColorSpace){return K.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=Ke){K.workingToColorSpace(Vn.copy(this),e);let t=Vn.r,n=Vn.g,r=Vn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(zn);let n=yt(Rn.h,zn.h,t),r=yt(Rn.s,zn.s,t),i=yt(Rn.l,zn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new q;q.NAMES=Ln;var Hn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new q(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Un=class extends Nn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wn=new W,Gn=new W,Kn=new W,qn=new W,Jn=new W,Yn=new W,Xn=new W,Zn=new W,Qn=new W,$n=new W,er=new en,tr=new en,nr=new en,rr=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wn.subVectors(e,t),r.cross(Wn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Wn.subVectors(r,t),Gn.subVectors(n,t),Kn.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(Gn),s=Wn.dot(Kn),c=Gn.dot(Gn),l=Gn.dot(Kn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qn)!==null&&qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,qn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,qn.x),s.addScaledVector(a,qn.y),s.addScaledVector(o,qn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return er.setScalar(0),tr.setScalar(0),nr.setScalar(0),er.fromBufferAttribute(e,t),tr.fromBufferAttribute(e,n),nr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(er,i.x),a.addScaledVector(tr,i.y),a.addScaledVector(nr,i.z),a}static isFrontFacing(e,t,n,r){return Wn.subVectors(n,t),Gn.subVectors(e,t),Wn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Wn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Jn.subVectors(r,n),Yn.subVectors(i,n),Zn.subVectors(e,n);let s=Jn.dot(Zn),c=Yn.dot(Zn);if(s<=0&&c<=0)return t.copy(n);Qn.subVectors(e,r);let l=Jn.dot(Qn),u=Yn.dot(Qn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Jn,a);$n.subVectors(e,i);let f=Jn.dot($n),p=Yn.dot($n);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Yn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Xn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Xn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Jn,a).addScaledVector(Yn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ir=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=or.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,or):or.fromBufferAttribute(r,t),or.applyMatrix4(e.matrixWorld),this.expandByPoint(or);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),hr.subVectors(this.max,mr),cr.subVectors(e.a,mr),lr.subVectors(e.b,mr),ur.subVectors(e.c,mr),dr.subVectors(lr,cr),fr.subVectors(ur,lr),pr.subVectors(cr,ur);let t=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-pr.z,pr.y,dr.z,0,-dr.x,fr.z,0,-fr.x,pr.z,0,-pr.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-pr.y,pr.x,0];return!vr(t,cr,lr,ur,hr)||(t=[1,0,0,0,1,0,0,0,1],!vr(t,cr,lr,ur,hr))?!1:(gr.crossVectors(dr,fr),t=[gr.x,gr.y,gr.z],vr(t,cr,lr,ur,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(or).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ar=[new W,new W,new W,new W,new W,new W,new W,new W],or=new W,sr=new ir,cr=new W,lr=new W,ur=new W,dr=new W,fr=new W,pr=new W,mr=new W,hr=new W,gr=new W,_r=new W;function vr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){_r.fromArray(e,a);let o=i.x*Math.abs(_r.x)+i.y*Math.abs(_r.y)+i.z*Math.abs(_r.z),s=t.dot(_r),c=n.dot(_r),l=r.dot(_r);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var yr=new W,br=new U,xr=0,Sr=class extends ut{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ze,this.updateRanges=[],this.gpuType=T,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix4(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyNormalMatrix(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.transformDirection(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Cr=class extends Sr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},wr=class extends Sr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},J=class extends Sr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tr=new ir,Er=new W,Dr=new W,Or=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Tr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);let t=Er.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Er,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Dr)),this.expandByPoint(Er.copy(e.center).sub(Dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kr=0,Ar=new on,jr=new Nn,Mr=new W,Nr=new ir,Pr=new ir,Fr=new W,Ir=class e extends ut{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kr++}),this.uuid=ht(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(et(e)?wr:Cr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new G().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ar.makeRotationFromQuaternion(e),this.applyMatrix4(Ar),this}rotateX(e){return Ar.makeRotationX(e),this.applyMatrix4(Ar),this}rotateY(e){return Ar.makeRotationY(e),this.applyMatrix4(Ar),this}rotateZ(e){return Ar.makeRotationZ(e),this.applyMatrix4(Ar),this}translate(e,t,n){return Ar.makeTranslation(e,t,n),this.applyMatrix4(Ar),this}scale(e,t,n){return Ar.makeScale(e,t,n),this.applyMatrix4(Ar),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new J(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Nr.setFromBufferAttribute(n),this.morphTargetsRelative?(Fr.addVectors(this.boundingBox.min,Nr.min),this.boundingBox.expandByPoint(Fr),Fr.addVectors(this.boundingBox.max,Nr.max),this.boundingBox.expandByPoint(Fr)):(this.boundingBox.expandByPoint(Nr.min),this.boundingBox.expandByPoint(Nr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);else if(e){let n=this.boundingSphere.center;if(Nr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Pr.setFromBufferAttribute(n),this.morphTargetsRelative?(Fr.addVectors(Nr.min,Pr.min),Nr.expandByPoint(Fr),Fr.addVectors(Nr.max,Pr.max),Nr.expandByPoint(Fr)):(Nr.expandByPoint(Pr.min),Nr.expandByPoint(Pr.max))}Nr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Fr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Fr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Fr.fromBufferAttribute(a,t),o&&(Mr.fromBufferAttribute(e,t),Fr.add(Mr)),r=Math.max(r,n.distanceToSquared(Fr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Sr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let c=new W,l=new W,u=new W,d=new U,f=new U,p=new U,m=new W,h=new W;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new W,y=new W,b=new W,x=new W;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Sr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fr.fromBufferAttribute(e,t),Fr.normalize(),e.setXYZ(t,Fr.x,Fr.y,Fr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Sr(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Lr=new W,Rr=new W,zr=new G,Br=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Lr.subVectors(n,t).cross(Rr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Lr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zr.getNormalMatrix(e),r=this.coplanarPoint(Lr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vr=0,Hr=class extends ut{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vr++}),this.uuid=ht(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xe,this.stencilZFail=Xe,this.stencilZPass=Xe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new q().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Br().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new U().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new U().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ur=new W,Wr=new W,Gr=new W,Kr=new W,qr=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ur.copy(this.origin).addScaledVector(this.direction,t),Ur.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Wr.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(Wr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Gr),o=Kr.dot(this.direction),s=-Kr.dot(Gr),c=Kr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Wr).addScaledVector(Gr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ur.subVectors(e.center,this.origin);let n=Ur.dot(this.direction),r=Ur.dot(Ur)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ur)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,A,j,M;if(y>=b&&y>=x?(w=s,D=u,k=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,A=_,j=v):(S=l,C=c,T=f,E=d,O=h,ee=m,A=v,j=_)):b>=x?(w=c,D=d,k=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,A=v,j=g):(S=s,C=l,T=u,E=f,O=p,ee=h,A=g,j=v)):(w=l,D=f,k=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,A=g,j=_):(S=c,C=s,T=d,E=u,O=m,ee=p,A=_,j=g)),w===0)return null;let te=S/w,N=C/w,ne=1/w,re=T-te*D,ie=E-N*D,ae=O-te*k,oe=ee-N*k,se=A-te*M,ce=j-N*M,le=se*oe-ce*ae,P=re*ce-ie*se,F=ae*ie-oe*re;if(r){if(le<0||P<0||F<0)return null}else if((le<0||P<0||F<0)&&(le>0||P>0||F>0))return null;let ue=le+P+F;if(ue===0)return null;let de=ne*(le*D+P*k+F*M);return(ue>0?de<0:de>0)?null:this.at(de/ue,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jr=class extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yr=new on,Xr=new qr,Zr=new Or,Qr=new W,$r=new W,ei=new W,ti=new W,ni=new W,ri=new W,ii=new W,ai=new W,oi=class extends Nn{constructor(e=new Ir,t=new Jr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ri.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ni.fromBufferAttribute(s,e),a?ri.addScaledVector(ni,r):ri.addScaledVector(ni.sub(t),r))}t.add(ri)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Xr.copy(e.ray).recast(e.near),!(Zr.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Zr,Qr)===null||Xr.origin.distanceToSquared(Qr)>(e.far-e.near)**2))&&(Yr.copy(i).invert(),Xr.copy(e.ray).applyMatrix4(Yr),(n.boundingBox===null||Xr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ci(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ci(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ci(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ci(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function si(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ai.copy(s),ai.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ai);return l<n.near||l>n.far?null:{distance:l,point:ai.clone(),object:e}}function ci(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,$r),e.getVertexPosition(c,ei),e.getVertexPosition(l,ti);let u=si(e,t,n,r,$r,ei,ti,ii);if(u){let e=new W;rr.getBarycoord(ii,$r,ei,ti,e),i&&(u.uv=rr.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=rr.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=rr.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};rr.getNormal($r,ei,ti,t.normal),u.face=t,u.barycoord=e}return u}var li=class extends $t{constructor(e=null,t=1,n=1,r,i,a,o,s,c=p,l=p,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ui=class extends Sr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},di=new on,fi=new on,pi=[],mi=new ir,hi=new on,gi=new oi,_i=new Or,vi=class extends oi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ui(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,hi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ir),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,di),mi.copy(e.boundingBox).applyMatrix4(di),this.boundingBox.union(mi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Or),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,di),_i.copy(e.boundingSphere).applyMatrix4(di),this.boundingSphere.union(_i)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(gi.geometry=this.geometry,gi.material=this.material,gi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_i.copy(this.boundingSphere),_i.applyMatrix4(n),e.ray.intersectsSphere(_i)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,di),fi.multiplyMatrices(n,di),gi.matrixWorld=fi,gi.raycast(e,pi);for(let e=0,n=pi.length;e<n;e++){let n=pi[e];n.instanceId=i,n.object=this,t.push(n)}pi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new li(new Float32Array(r*this.count),r,this.count,re,T));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},yi=new Or,bi=new U(.5,.5),xi=new W,Si=class{constructor(e=new Br,t=new Br,n=new Br,r=new Br,i=new Br,a=new Br){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$e,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476+bi.distanceTo(e.center),yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(xi.x=r.normal.x>0?e.max.x:e.min.x,xi.y=r.normal.y>0?e.max.y:e.min.y,xi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ci=class extends Hr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wi=new on,Ti=new qr,Ei=new Or,Di=new W,Oi=class extends Nn{constructor(e=new Ir,t=new Ci){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ei.copy(n.boundingSphere),Ei.applyMatrix4(r),Ei.radius+=i,e.ray.intersectsSphere(Ei)===!1)return;wi.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(wi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Di.fromBufferAttribute(l,n),ki(Di,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Di.fromBufferAttribute(l,a),ki(Di,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ki(e,t,n,r,i,a,o){let s=Ti.distanceSqToPoint(e);if(s<n){let n=new W;Ti.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ai=class extends $t{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ji=class extends $t{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mi=class extends $t{constructor(e,t,n=w,r,i,a,o=p,s=p,c,l=N,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ni=class extends Mi{constructor(e,t=w,n=301,r,i,a=p,o=p,s,c=N){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pi=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fi=class e extends Ir{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new J(c,3)),this.setAttribute(`normal`,new J(l,3)),this.setAttribute(`uv`,new J(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ii=class e extends Ir{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new W,l=new U;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new J(a,3)),this.setAttribute(`normal`,new J(o,3)),this.setAttribute(`uv`,new J(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Li=class e extends Ir{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new J(u,3)),this.setAttribute(`normal`,new J(d,3)),this.setAttribute(`uv`,new J(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new U,m=new W,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ri=class e extends Li{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zi=class e extends Ir{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new J(i,3)),this.setAttribute(`normal`,new J(i.slice(),3)),this.setAttribute(`uv`,new J(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new W,r=new W,i=new W;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new W;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new W;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new W,t=new W,n=new W,r=new W,o=new U,s=new U,c=new U;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Bi=class e extends zi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Vi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){B(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new U:new W);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new W,r=[],i=[],a=[],o=new W,s=new on;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new W)}i[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(H(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(H(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hi=class extends Vi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new U){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ui=class extends Hi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Wi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Gi=new W,Ki=new W,qi=new Wi,Ji=new Wi,Yi=new Wi,Xi=class extends Vi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new W){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ki.subVectors(r[0],r[1]).add(r[0]),c=Ki);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Gi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Gi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),qi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ji.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Yi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(qi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ji.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Yi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(qi.calc(s),Ji.calc(s),Yi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new W().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zi(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Qi(e,t){let n=1-e;return n*n*t}function $i(e,t){return 2*(1-e)*e*t}function ea(e,t){return e*e*t}function ta(e,t,n,r){return Qi(e,t)+$i(e,n)+ea(e,r)}function na(e,t){let n=1-e;return n*n*n*t}function ra(e,t){let n=1-e;return 3*n*n*e*t}function ia(e,t){return 3*(1-e)*e*e*t}function aa(e,t){return e*e*e*t}function oa(e,t,n,r,i){return na(e,t)+ra(e,n)+ia(e,r)+aa(e,i)}var sa=class extends Vi{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(oa(e,r.x,i.x,a.x,o.x),oa(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ca=class extends Vi{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(oa(e,r.x,i.x,a.x,o.x),oa(e,r.y,i.y,a.y,o.y),oa(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},la=class extends Vi{constructor(e=new U,t=new U){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends Vi{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends Vi{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ta(e,r.x,i.x,a.x),ta(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends Vi{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ta(e,r.x,i.x,a.x),ta(e,r.y,i.y,a.y),ta(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends Vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new U){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Zi(o,s.x,c.x,l.x,u.x),Zi(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this}},ma=Object.freeze({__proto__:null,ArcCurve:Ui,CatmullRomCurve3:Xi,CubicBezierCurve:sa,CubicBezierCurve3:ca,EllipseCurve:Hi,LineCurve:la,LineCurve3:ua,QuadraticBezierCurve:da,QuadraticBezierCurve3:fa,SplineCurve:pa}),ha=class extends Vi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ma[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ma[n.type]().fromJSON(n))}return this}},ga=class extends ha{constructor(e){super(),this.type=`Path`,this.currentPoint=new U,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new la(this.currentPoint.clone(),new U(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new da(this.currentPoint.clone(),new U(e,t),new U(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new sa(this.currentPoint.clone(),new U(e,t),new U(n,r),new U(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new pa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Hi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_a=class extends ga{constructor(e){super(e),this.uuid=ht(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ga().fromJSON(n))}return this}};function va(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ya(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ea(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return xa(a,o,n,s,c,l,0),o}function ya(e,t,n,r,i){let a;if(i===Xa(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=qa(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=qa(i/r|0,e[i],e[i+1],a);return a&&za(a,a.next)&&(Ja(a),a=a.next),a}function ba(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(za(n,n.next)||Ra(n.prev,n,n.next)===0)){if(Ja(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function xa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&ja(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ca(e,r,i,a):Sa(e))t.push(c.i,e.i,l.i),Ja(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=wa(ba(e),t),xa(e,t,n,r,i,a,2)):o===2&&Ta(e,t,n,r,i,a):xa(ba(e),t,n,r,i,a,1);break}}}function Sa(e){let t=e.prev,n=e,r=e.next;if(Ra(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ia(i,s,a,c,o,l,m.x,m.y)&&Ra(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ca(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ra(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Na(p,m,t,n,r),v=Na(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ia(s,u,c,d,l,f,y.x,y.y)&&Ra(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ia(s,u,c,d,l,f,b.x,b.y)&&Ra(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ia(s,u,c,d,l,f,y.x,y.y)&&Ra(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ia(s,u,c,d,l,f,b.x,b.y)&&Ra(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function wa(e,t){let n=e;do{let r=n.prev,i=n.next.next;!za(r,i)&&Ba(r,n,n.next,i)&&Wa(r,i)&&Wa(i,r)&&(t.push(r.i,n.i,i.i),Ja(n),Ja(n.next),n=e=i),n=n.next}while(n!==e);return ba(n)}function Ta(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&La(o,e)){let s=Ka(o,e);o=ba(o,o.next),s=ba(s,s.next),xa(o,t,n,r,i,a,0),xa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ea(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=ya(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Pa(o))}i.sort(Da);for(let e=0;e<i.length;e++)n=Oa(i[e],n);return n}function Da(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Oa(e,t){let n=ka(e,t);if(!n)return t;let r=Ka(n,e);return ba(r,r.next),ba(n,n.next)}function ka(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(za(e,n))return n;do{if(za(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Fa(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Wa(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Aa(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Aa(e,t){return Ra(e.prev,e,t.prev)<0&&Ra(t.next,e,e.next)<0}function ja(e,t,n,r){let i=e;do i.z===0&&(i.z=Na(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ma(i)}function Ma(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Na(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Pa(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Fa(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ia(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Fa(e,t,n,r,i,a,o,s)}function La(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ua(e,t)&&(Wa(e,t)&&Wa(t,e)&&Ga(e,t)&&(Ra(e.prev,e,t.prev)||Ra(e,t.prev,t))||za(e,t)&&Ra(e.prev,e,e.next)>0&&Ra(t.prev,t,t.next)>0)}function Ra(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function za(e,t){return e.x===t.x&&e.y===t.y}function Ba(e,t,n,r){let i=Ha(Ra(e,t,n)),a=Ha(Ra(e,t,r)),o=Ha(Ra(n,r,e)),s=Ha(Ra(n,r,t));return!!(i!==a&&o!==s||i===0&&Va(e,n,t)||a===0&&Va(e,r,t)||o===0&&Va(n,e,r)||s===0&&Va(n,t,r))}function Va(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ha(e){return e>0?1:e<0?-1:0}function Ua(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ba(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Wa(e,t){return Ra(e.prev,e,e.next)<0?Ra(e,t,e.next)>=0&&Ra(e,e.prev,t)>=0:Ra(e,t,e.prev)<0||Ra(e,e.next,t)<0}function Ga(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ka(e,t){let n=Ya(e.i,e.x,e.y),r=Ya(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function qa(e,t,n,r){let i=Ya(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Ja(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ya(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xa(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Za=class{static triangulate(e,t,n=2){return va(e,t,n)}},Qa=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];$a(e),eo(n,e);let a=e.length;t.forEach($a);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,eo(n,t[e]);let o=Za.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function $a(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function eo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var to=class e extends Ir{constructor(e=new _a([new U(.5,.5),new U(-.5,.5),new U(-.5,-.5),new U(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new J(r,3)),this.setAttribute(`uv`,new J(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?no:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new W,b=new W,x=new W}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Qa.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Qa.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||V(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let ee=C.length;function k(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new U(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new U(r/a,i/a)}let A=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),A[e]=k(D[e],D[n],D[r]);let j=[],M,te=A.concat();for(let e=0,t=E;e<t;e++){let t=w[e];M=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),M[e]=k(t[e],t[r],t[i]);j.push(M),te=te.concat(M)}let N;if(p===0)N=Qa.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],A[t],a);se(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];M=j[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],M[e],a);se(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}N=Qa.triangulateShape(e,t)}let ne=N.length,re=d+f;for(let e=0;e<ee;e++){let t=l?O(C[e],te[e],re):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),se(x.x,x.y,x.z)):se(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<ee;t++){let n=l?O(C[t],te[t],re):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),se(x.x,x.y,x.z)):se(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],A[e],r);se(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];M=j[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],M[e],r);_?se(i.x,i.y+g[s-1].y,g[s-1].x+n):se(i.x,i.y,c+n)}}}ie(),ae();function ie(){let e=r.length/3;if(l){let e=0,t=ee*e;for(let e=0;e<ne;e++){let n=N[e];ce(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=ee*e;for(let e=0;e<ne;e++){let n=N[e];ce(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<ne;e++){let t=N[e];ce(t[2],t[1],t[0])}for(let e=0;e<ne;e++){let t=N[e];ce(t[0]+ee*s,t[1]+ee*s,t[2]+ee*s)}}n.addGroup(e,r.length/3-e,0)}function ae(){let e=r.length/3,t=0;oe(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];oe(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function oe(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=ee*e,a=ee*(e+1);le(t+r+n,t+i+n,t+i+a,t+r+a)}}}function se(e,t,n){a.push(e),a.push(t),a.push(n)}function ce(e,t,i){P(e),P(t),P(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);F(o[0]),F(o[1]),F(o[2])}function le(e,t,i,a){P(e),P(t),P(a),P(t),P(i),P(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);F(s[0]),F(s[1]),F(s[3]),F(s[1]),F(s[2]),F(s[3])}function P(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function F(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ro(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ma[i.type]().fromJSON(i)),new e(r,t.options)}},no={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new U(a,o),new U(s,c),new U(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new U(o,1-c),new U(l,1-d),new U(f,1-m),new U(h,1-_)]:[new U(s,1-c),new U(u,1-d),new U(p,1-m),new U(g,1-_)]}};function ro(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var io=class e extends zi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ao=class e extends Ir{constructor(e=[new U(0,-.5),new U(.5,0),new U(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=H(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new W,d=new U,f=new W,p=new W,m=new W,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new J(a,3)),this.setAttribute(`uv`,new J(o,2)),this.setAttribute(`normal`,new J(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},oo=class e extends zi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},so=class e extends Ir{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new J(p,3)),this.setAttribute(`normal`,new J(m,3)),this.setAttribute(`uv`,new J(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},co=class e extends Ir{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new W,p=new U;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new J(s,3)),this.setAttribute(`normal`,new J(c,3)),this.setAttribute(`uv`,new J(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},lo=class e extends Ir{constructor(e=new _a([new U(0,.5),new U(-.5,-.5),new U(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new J(r,3)),this.setAttribute(`normal`,new J(i,3)),this.setAttribute(`uv`,new J(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Qa.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Qa.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Qa.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return uo(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function uo(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var fo=class e extends Ir{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new W,d=new W,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new J(p,3)),this.setAttribute(`normal`,new J(m,3)),this.setAttribute(`uv`,new J(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},po=class e extends Ir{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new W,f=new W,p=new W;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new J(c,3)),this.setAttribute(`normal`,new J(l,3)),this.setAttribute(`uv`,new J(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function mo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(go(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(go(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function ho(e){let t={};for(let n=0;n<e.length;n++){let r=mo(e[n]);for(let e in r)t[e]=r[e]}return t}function go(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function _o(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function vo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:K.workingColorSpace}var yo={clone:mo,merge:ho},bo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,So=class extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bo,this.fragmentShader=xo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=_o(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new q().setHex(r.value);break;case`v2`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new en().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new on().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Co=class extends So{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},wo=class extends Hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},To=class extends Hr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Eo=class extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ge,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Do=class extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ko(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ao=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},jo=class extends Ao{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:He,endingEnd:He}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ue:i=e,o=2*t-n;break;case We:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ue:a=e,s=2*n-t;break;case We:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Mo=class extends Ao{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},No=class extends Ao{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Po=class extends Ao{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Lo(n,t,g,y,r);i[p]=Fo(x,o,_,b,m)}return i}};function Fo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Io(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Lo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Fo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Io(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ro=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Oo(t,this.TimeBufferType),this.values=Oo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oo(e.times,Array),values:Oo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ko(e.settings)&&(n.settings={inTangents:Oo(e.settings.inTangents,Array),outTangents:Oo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Po(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Re:t=this.InterpolantFactoryMethodDiscrete;break;case ze:t=this.InterpolantFactoryMethodLinear;break;case Be:t=this.InterpolantFactoryMethodSmooth;break;case Ve:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Re;case this.InterpolantFactoryMethodLinear:return ze;case this.InterpolantFactoryMethodSmooth:return Be;case this.InterpolantFactoryMethodBezier:return Ve}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ko(this.settings)&&(zo(this.settings.inTangents,e),zo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&tt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Be,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ko(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function zo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ro.prototype.ValueTypeName=``,Ro.prototype.TimeBufferType=Float32Array,Ro.prototype.ValueBufferType=Float32Array,Ro.prototype.DefaultInterpolation=ze;var Bo=class extends Ro{constructor(e,t,n){super(e,t,n)}};Bo.prototype.ValueTypeName=`bool`,Bo.prototype.ValueBufferType=Array,Bo.prototype.DefaultInterpolation=Re,Bo.prototype.InterpolantFactoryMethodLinear=void 0,Bo.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends Ro{constructor(e,t,n,r){super(e,t,n,r)}};Vo.prototype.ValueTypeName=`color`;var Ho=class extends Ro{constructor(e,t,n,r){super(e,t,n,r)}};Ho.prototype.ValueTypeName=`number`;var Uo=class extends Ao{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Lt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Wo=class extends Ro{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}};Wo.prototype.ValueTypeName=`quaternion`,Wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends Ro{constructor(e,t,n){super(e,t,n)}};Go.prototype.ValueTypeName=`string`,Go.prototype.ValueBufferType=Array,Go.prototype.DefaultInterpolation=Re,Go.prototype.InterpolantFactoryMethodLinear=void 0,Go.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends Ro{constructor(e,t,n,r){super(e,t,n,r)}};Ko.prototype.ValueTypeName=`vector`;var qo=class extends Nn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new q(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Jo=class extends qo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new q(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Yo=new on,Xo=new W,Zo=new W,Qo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U(512,512),this.mapType=y,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Si,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Xo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xo),Zo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Yo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$o=new W,es=new Lt,ts=new W,ns=class extends Nn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=$e,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($o,es,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,es,ts.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($o,es,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,es,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new W,is=new U,as=new U,os=class extends ns{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mt*2*Math.atan(Math.tan(pt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,is,as),t.subVectors(as,is)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ss=class extends Qo{constructor(){super(new os(90,1,.5,500)),this.isPointLightShadow=!0}},cs=class extends qo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ss}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ls=class extends ns{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},us=class extends Qo{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new us}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},fs=-90,ps=1,ms=class extends Nn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new os(fs,ps,e,t);r.layers=this.layers,this.add(r);let i=new os(fs,ps,e,t);i.layers=this.layers,this.add(i);let a=new os(fs,ps,e,t);a.layers=this.layers,this.add(a);let o=new os(fs,ps,e,t);o.layers=this.layers,this.add(o);let s=new os(fs,ps,e,t);s.layers=this.layers,this.add(s);let c=new os(fs,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},hs=class extends os{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},gs=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=_s.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function _s(){this._document.hidden===!1&&this.reset()}var vs=`\\[\\]\\.:\\/`,ys=RegExp(`[\\[\\]\\.:\\/]`,`g`),bs=`[^\\[\\]\\.:\\/]`,xs=`[^`+vs.replace(`\\.`,``)+`]`,Ss=`((?:WC+[\\/:])*)`.replace(`WC`,bs),Cs=`(WCOD+)?`.replace(`WCOD`,xs),ws=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,bs),Ts=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,bs),Es=RegExp(`^`+Ss+Cs+ws+Ts+`$`),Ds=[`material`,`materials`,`bones`,`map`],Os=class{constructor(e,t,n){let r=n||ks.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ks=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ys,``)}static parseTrackName(e){let t=Es.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ds.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ks.Composite=Os,ks.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ks.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ks.prototype.GetterByBindingType=[ks.prototype._getValue_direct,ks.prototype._getValue_array,ks.prototype._getValue_arrayElement,ks.prototype._getValue_toArray],ks.prototype.SetterByBindingTypeAndVersioning=[[ks.prototype._setValue_direct,ks.prototype._setValue_direct_setNeedsUpdate,ks.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ks.prototype._setValue_array,ks.prototype._setValue_array_setNeedsUpdate,ks.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ks.prototype._setValue_arrayElement,ks.prototype._setValue_arrayElement_setNeedsUpdate,ks.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ks.prototype._setValue_fromArray,ks.prototype._setValue_fromArray_setNeedsUpdate,ks.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function As(e,t,n,r){let i=js(r);switch(n){case j:return e*t;case re:return e*t/i.components*i.byteLength;case ie:return e*t/i.components*i.byteLength;case ae:return e*t*2/i.components*i.byteLength;case oe:return e*t*2/i.components*i.byteLength;case M:return e*t*3/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case se:return e*t*4/i.components*i.byteLength;case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:case pe:return Math.max(e,16)*Math.max(t,8)/4;case ue:case fe:return Math.max(e,8)*Math.max(t,8)/2;case me:case he:case _e:case ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ge:case ye:case be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case I:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ne:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Pe:case Fe:case L:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ie:case R:return Math.ceil(e/4)*Math.ceil(t/4)*8;case z:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function js(e){switch(e){case y:case b:return{byteLength:1,components:1};case S:case x:case E:return{byteLength:2,components:1};case D:case O:return{byteLength:2,components:4};case w:case C:case T:return{byteLength:4,components:1};case k:case A:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ms(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ns(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},Ps={basic:{uniforms:ho([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:ho([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new q(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:ho([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:ho([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:ho([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new q(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:ho([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:ho([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:ho([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:ho([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:ho([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:ho([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:ho([X.common,X.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:ho([X.lights,X.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};Ps.physical={uniforms:ho([Ps.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var Fs={r:0,b:0,g:0},Is=new on,Ls=new G;Ls.set(-1,0,0,0,1,0,0,0,1);function Rs(e,t,n,r,i,a){let o=new q(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new oi(new Fi(1,1,1),new So({name:`BackgroundCubeMaterial`,uniforms:mo(Ps.backgroundCube.uniforms),vertexShader:Ps.backgroundCube.vertexShader,fragmentShader:Ps.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Is.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ls),l.material.toneMapped=K.getTransfer(i.colorSpace)!==Ye,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new oi(new so(2,2),new So({name:`BackgroundMaterial`,uniforms:mo(Ps.background.uniforms),vertexShader:Ps.background.vertexShader,fragmentShader:Ps.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=K.getTransfer(i.colorSpace)!==Ye,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Fs,vo(e)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function zs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Bs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Vs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Hs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Br,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Us=4,Ws=6,Gs=20,Ks=256,qs=new ls,Js=new q,Ys=null,Xs=0,Zs=0,Qs=!1,$s=new W,ec=new W,tc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=$s}=i;Ys=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),Zs=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ys,Xs,Zs),this._renderer.xr.enabled=Qs,e.scissorTest=!1,ic(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ys=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),Zs=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:g,minFilter:g,generateMipmaps:!1,type:E,format:te,colorSpace:qe,depthBuffer:!1},r=rc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=nc(r)),this._blurMaterial=oc(r,e,t),this._ggxMaterial=ac(r,e,t)}return r}_compileMaterial(e){let t=new oi(new Ir,e);this._renderer.compile(t,qs)}_sceneToCubeUV(e,t,n,r,i){let a=new os(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Js),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oi(new Fi,new Jr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Js),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;ic(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;ic(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,qs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Us?n-d+Us:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,ic(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,qs),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,ic(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,qs)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];ic(t,3*l*(r>this._lodMax-Us?r-this._lodMax+Us:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,qs)}};function nc(e){let t=[],n=[],r=e,i=e-Us+1+Ws;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?ec.set(1,r,n):e===1?ec.set(-n,1,-r):e===2?ec.set(-n,r,1):e===3?ec.set(-1,r,-n):e===4?ec.set(-n,-1,r):ec.set(n,r,-1),ec.toArray(l,(e*6+t)*3)}}let u=new Ir;u.setAttribute(`position`,new Sr(c,3)),u.setAttribute(`outputDirection`,new Sr(l,3)),n.push(new oi(u,null)),r>Us&&r--}return{lodMeshes:n,sizeLods:t}}function rc(e,t,n){let r=new nn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function ic(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ac(e,t,n){return new So({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function oc(e,t,n){return new So({name:`SphericalGaussianBlur`,defines:{SAMPLES:Gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sc(){return new So({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function cc(){return new So({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var uc=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ai(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fi(5,5,5),i=new So({name:`CubemapFromEquirect`,uniforms:mo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new oi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=g),new ms(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function dc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new uc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new tc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new tc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function fc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&st(`WebGLRenderer: `+e+` extension not supported.`),t}}}function pc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?wr:Cr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function mc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function hc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function gc(e,t,n){let r=new WeakMap,i=new en;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new rn(h,p,m,u);g.type=T,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new U(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function _c(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var vc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function yc(e,t,n,r,i,a){let o=new nn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Ir;l.setAttribute(`position`,new J([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new J([0,2,0,0,2,0],2));let u=new Co({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new oi(l,u),f=new ls(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new nn(t,n,{type:E,depthBuffer:!1,stencilBuffer:!1}),c=new nn(t,n,{type:E,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},K.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=vc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var bc=new $t,xc=new Mi(1,1),Sc=new rn,Cc=new an,wc=new Ai,Tc=[],Ec=[],Dc=new Float32Array(16),Oc=new Float32Array(9),kc=new Float32Array(4);function Ac(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Tc[i];if(a===void 0&&(a=new Float32Array(i),Tc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function jc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Mc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Nc(e,t){let n=Ec[t];n===void 0&&(n=new Int32Array(t),Ec[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Pc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(jc(n,t))return;e.uniform2fv(this.addr,t),Mc(n,t)}}function Ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(jc(n,t))return;e.uniform3fv(this.addr,t),Mc(n,t)}}function Lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(jc(n,t))return;e.uniform4fv(this.addr,t),Mc(n,t)}}function Rc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(jc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Mc(n,t)}else{if(jc(n,r))return;kc.set(r),e.uniformMatrix2fv(this.addr,!1,kc),Mc(n,r)}}function zc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(jc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Mc(n,t)}else{if(jc(n,r))return;Oc.set(r),e.uniformMatrix3fv(this.addr,!1,Oc),Mc(n,r)}}function Bc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(jc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Mc(n,t)}else{if(jc(n,r))return;Dc.set(r),e.uniformMatrix4fv(this.addr,!1,Dc),Mc(n,r)}}function Vc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(jc(n,t))return;e.uniform2iv(this.addr,t),Mc(n,t)}}function Uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(jc(n,t))return;e.uniform3iv(this.addr,t),Mc(n,t)}}function Wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(jc(n,t))return;e.uniform4iv(this.addr,t),Mc(n,t)}}function Gc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(jc(n,t))return;e.uniform2uiv(this.addr,t),Mc(n,t)}}function qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(jc(n,t))return;e.uniform3uiv(this.addr,t),Mc(n,t)}}function Jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(jc(n,t))return;e.uniform4uiv(this.addr,t),Mc(n,t)}}function Yc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(xc.compareFunction=n.isReversedDepthBuffer()?518:515,a=xc):a=bc,n.setTexture2D(t||a,i)}function Xc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Cc,i)}function Zc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||wc,i)}function Qc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Sc,i)}function $c(e){switch(e){case 5126:return Pc;case 35664:return Fc;case 35665:return Ic;case 35666:return Lc;case 35674:return Rc;case 35675:return zc;case 35676:return Bc;case 5124:case 35670:return Vc;case 35667:case 35671:return Hc;case 35668:case 35672:return Uc;case 35669:case 35673:return Wc;case 5125:return Gc;case 36294:return Kc;case 36295:return qc;case 36296:return Jc;case 35678:case 36198:case 36298:case 36306:case 35682:return Yc;case 35679:case 36299:case 36307:return Xc;case 35680:case 36300:case 36308:case 36293:return Zc;case 36289:case 36303:case 36311:case 36292:return Qc}}function el(e,t){e.uniform1fv(this.addr,t)}function tl(e,t){let n=Ac(t,this.size,2);e.uniform2fv(this.addr,n)}function nl(e,t){let n=Ac(t,this.size,3);e.uniform3fv(this.addr,n)}function rl(e,t){let n=Ac(t,this.size,4);e.uniform4fv(this.addr,n)}function il(e,t){let n=Ac(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function al(e,t){let n=Ac(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ol(e,t){let n=Ac(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function sl(e,t){e.uniform1iv(this.addr,t)}function cl(e,t){e.uniform2iv(this.addr,t)}function ll(e,t){e.uniform3iv(this.addr,t)}function ul(e,t){e.uniform4iv(this.addr,t)}function dl(e,t){e.uniform1uiv(this.addr,t)}function fl(e,t){e.uniform2uiv(this.addr,t)}function pl(e,t){e.uniform3uiv(this.addr,t)}function ml(e,t){e.uniform4uiv(this.addr,t)}function hl(e,t,n){let r=this.cache,i=t.length,a=Nc(n,i);jc(r,a)||(e.uniform1iv(this.addr,a),Mc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?xc:bc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function gl(e,t,n){let r=this.cache,i=t.length,a=Nc(n,i);jc(r,a)||(e.uniform1iv(this.addr,a),Mc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Cc,a[e])}function _l(e,t,n){let r=this.cache,i=t.length,a=Nc(n,i);jc(r,a)||(e.uniform1iv(this.addr,a),Mc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||wc,a[e])}function vl(e,t,n){let r=this.cache,i=t.length,a=Nc(n,i);jc(r,a)||(e.uniform1iv(this.addr,a),Mc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Sc,a[e])}function yl(e){switch(e){case 5126:return el;case 35664:return tl;case 35665:return nl;case 35666:return rl;case 35674:return il;case 35675:return al;case 35676:return ol;case 5124:case 35670:return sl;case 35667:case 35671:return cl;case 35668:case 35672:return ll;case 35669:case 35673:return ul;case 5125:return dl;case 36294:return fl;case 36295:return pl;case 36296:return ml;case 35678:case 36198:case 36298:case 36306:case 35682:return hl;case 35679:case 36299:case 36307:return gl;case 35680:case 36300:case 36308:case 36293:return _l;case 36289:case 36303:case 36311:case 36292:return vl}}var bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$c(t.type)}},xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yl(t.type)}},Sl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Cl=/(\w+)(\])?(\[|\.)?/g;function wl(e,t){e.seq.push(t),e.map[t.id]=t}function Tl(e,t,n){let r=e.name,i=r.length;for(Cl.lastIndex=0;;){let a=Cl.exec(r),o=Cl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){wl(n,l===void 0?new bl(s,e,t):new xl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Sl(s),wl(n,e)),n=e}}}var El=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Tl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Dl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ol=37297,kl=0;function Al(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var jl=new G;function Ml(e){K._getMatrix(jl,K.workingColorSpace,e);let t=`mat3( ${jl.elements.map(e=>e.toFixed(4))} )`;switch(K.getTransfer(e)){case Je:return[t,`LinearTransferOETF`];case Ye:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Nl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Al(e.getShaderSource(t),r)}return i}function Pl(e,t){let n=Ml(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Fl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Il(e,t){let n=Fl[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ll=new W;function Rl(){return K.getLuminanceCoefficients(Ll),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ll.x.toFixed(4)}, ${Ll.y.toFixed(4)}, ${Ll.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function zl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Hl).join(`
`)}function Bl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Vl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Hl(e){return e!==``}function Ul(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(e){return e.replace(Gl,Jl)}var ql=new Map;function Jl(e,t){let n=Y[t];if(n===void 0){let e=ql.get(t);if(e!==void 0)n=Y[e],B(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Kl(n)}var Yl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(e){return e.replace(Yl,Zl)}function Zl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ql(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var $l={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function eu(e){return $l[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var tu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function nu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:tu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var ru={302:`ENVMAP_MODE_REFRACTION`};function iu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ru[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var au={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ou(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:au[e.combine]||`ENVMAP_BLENDING_NONE`}function su(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function cu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=eu(n),l=nu(n),u=iu(n),d=ou(n),f=su(n),p=zl(n),m=Bl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Hl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Hl).join(`
`),_.length>0&&(_+=`
`)):(g=[Ql(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Hl).join(`
`),_=[Ql(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:Il(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,Pl(`linearToOutputTexel`,n.outputColorSpace),Rl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Hl).join(`
`)),o=Kl(o),o=Ul(o,n),o=Wl(o,n),s=Kl(s),s=Ul(s,n),s=Wl(s,n),o=Xl(o),s=Xl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Dl(i,i.VERTEX_SHADER,y),S=Dl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Nl(i,x,`vertex`),n=Nl(i,S,`fragment`);V(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new El(i,h),T=Vl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Ol)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var lu=0,uu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new du(e),t.set(e,n)),n}},du=class{constructor(e){this.id=lu++,this.code=e,this.usedTimes=0}};function fu(e){return e===1030||e===37490||e===36285}function pu(e,t,n,r,i,a){let o=new _n,s=new uu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=Ps[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,te=h.isBatchedMesh===!0,N=!!i.map,ne=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,F=!!i.roughnessMap,ue=i.anisotropy>0,de=i.clearcoat>0,fe=i.dispersion>0,pe=i.retroreflectivity>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=ue&&!!i.anisotropyMap,ve=de&&!!i.clearcoatMap,ye=de&&!!i.clearcoatNormalMap,be=de&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ge&&!!i.transmissionMap,ke=ge&&!!i.thicknessMap,Ae=!!i.gradientMap,je=!!i.alphaMap,Me=i.alphaTest>0,I=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:te,batchingColor:te&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:K.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&fu(i.normalMap.format),metalnessMap:P,roughnessMap:F,anisotropy:ue,anisotropyMap:_e,clearcoat:de,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:fe,retroreflection:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ge,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:je,alphaTest:Me,alphaHash:I,combine:i.combine,mapUv:N&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:P&&m(i.metalnessMap.channel),roughnessMapUv:F&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:Ee&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:ke&&m(i.thicknessMap.channel),alphaMapUv:je&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||ue),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(N||je),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&K.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&K.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ps[t];n=yo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new cu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function mu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function hu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function gu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function _u(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||hu),r.length>1&&r.sort(t||gu),i.length>1&&i.sort(t||gu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function vu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new _u,e.set(t,[i])):n>=r.length?(i=new _u,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function yu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new W,color:new q};break;case`SpotLight`:n={position:new W,direction:new W,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new q,groundColor:new q};break;case`RectAreaLight`:n={color:new q,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function bu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var xu=0;function Su(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Cu(e){let t=new yu,n=bu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new on,o=new on;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Su);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=xu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function wu(e){let t=new Cu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Tu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new wu(e),t.set(n,[a])):r>=i.length?(a=new wu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Eu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Du=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ou=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],ku=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Au=new on,ju=new W,Mu=new W;function Nu(e,t,n){let r=new Si,i=new U,a=new U,o=new en,s=new Eo,c=new Do,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new So({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:Eu,fragmentShader:Du}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let h=new Ir;h.setAttribute(`position`,new Sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new oi(h,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){B(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new nn(i.x,i.y,{format:ae,type:E,minFilter:g,magFilter:g,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Mi(i.x,i.y,T),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=N,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p}else l.isPointLight?(d.map=new uc(i.x),d.map.depthTexture=new Ni(i.x,w)):(d.map=new nn(i.x,i.y),d.map.depthTexture=new Mi(i.x,i.y,w)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=N,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=g,d.map.depthTexture.magFilter=g):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ju.setFromMatrixPosition(l.matrixWorld),e.position.copy(ju),Mu.copy(e.position),Mu.add(Ou[t]),e.up.copy(ku[t]),e.lookAt(Mu),e.updateMatrixWorld(),n.makeTranslation(-ju.x,-ju.y,-ju.z),Au.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Au,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new nn(i.x,i.y,{format:ae,type:E}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Pu(e,t){function n(){let t=!1,n=new en,r=null,i=new en(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):F(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=lt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):F(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(N)[1]),M=te>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new en().fromArray(ie),se=new en().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),_e(!1),ve(1),P(e.CULL_FACE),he(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function F(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ue(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function fe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(F(e.BLEND),g=!1);else if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(pe[n],pe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(me[r],me[i],me[o],me[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ge(t,n){t.side===2?F(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):F(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ve(t){t===0?F(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==ee&&(M&&e.lineWidth(t),ee=t)}function be(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):F(e.POLYGON_OFFSET_FILL)}function xe(t){t?P(e.SCISSOR_TEST):F(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+j-1),ne!==t&&(e.activeTexture(t),ne=t)}function Ce(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+j-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function we(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function I(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ne(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function L(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Ie(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function R(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function z(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,A=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:F,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:I,texImage3D:Ne,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:R,uniformBlockBinding:z,texStorage2D:je,texStorage3D:Me,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:Ae,scissor:L,viewport:Ie,reset:Le}}function Fu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new U,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):nt(`canvas`)}function T(e,t,n){let r=1,i=Pe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function ee(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Je:K.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function k(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),te(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),re(t)}function te(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&N(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function N(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function re(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ie=0;function ae(){ie=0}function oe(){return ie}function se(e){ie=e}function ce(){let e=ie;return e>=i.maxTextures&&B(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ie+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&I(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ye(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ue(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?ye(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?be(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let fe={[u]:e.REPEAT,[d]:e.CLAMP_TO_EDGE,[f]:e.MIRRORED_REPEAT},pe={[p]:e.NEAREST,[m]:e.NEAREST_MIPMAP_NEAREST,[h]:e.NEAREST_MIPMAP_LINEAR,[g]:e.LINEAR,[_]:e.LINEAR_MIPMAP_NEAREST,[v]:e.LINEAR_MIPMAP_LINEAR},me={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function he(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,fe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,fe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,fe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,pe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,pe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,me[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ge(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,j));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=le(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&N(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=_e(n.start,r.width,4),c=_e(t.start,r.width,4);n.start<=i+1&&a===c&&_e(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ye(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ge(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=K.getPrimaries(K.workingColorSpace),r=o.colorSpace===``?null:K.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Ne(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=ee(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);he(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=A(o,t);if(o.isDepthTexture)p=k(o.format===ne,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&ve(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=As(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=As(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Pe(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Pe(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function be(t,o,s){if(o.image.length!==6)return;let c=ge(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=K.getPrimaries(K.workingColorSpace),r=o.colorSpace===``?null:K.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ne(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=ee(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=A(o,h);he(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Pe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=ee(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Me(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,je(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=k(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Me(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=ee(o.internalFormat,c,l,o.normalized,o.colorSpace);Me(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ce(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,j)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),he(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=je(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Me(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Me(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Ce(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ce(i.__webglFramebuffer[0],t,0):Ce(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Se(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Se(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,i){let a=r.get(t);n!==void 0&&xe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&we(t)}function Ee(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,M);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Me(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=ee(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=je(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Se(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),he(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)xe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else xe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),he(c,a),xe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),he(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)xe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else xe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&we(t)}function De(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Oe=[],ke=[];function Ae(t){if(t.samples>0){if(Me(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Oe.length=0,ke.length=0,Oe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Oe.push(l),ke.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ke)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Oe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function je(e){return Math.min(i.maxSamples,e.samples)}function Me(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function I(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ne(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(K.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function Pe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=P,this.setTexture2DArray=F,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Iu(e,t){function n(n,r=``){let i,a=K.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Lu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ru=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Pi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new So({vertexShader:Lu,fragmentShader:Ru,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oi(new so(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bu=class extends ut{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new zu,g={},_=t.getContextAttributes(),v=null,b=null,x=[],S=[],C=new U,T=null,E=null,D=new os;D.viewport=new en;let O=new os;O.viewport=new en;let k=[D,O],A=new hs,j=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new In,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new In,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new In,x[e]=t),t.getHandSpace()};function re(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}j=null,M=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,b=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ne:N,a=_.stencil?ee:w);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new nn(d.textureWidth,d.textureHeight,{format:te,type:y,depthTexture:new Mi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new nn(f.framebufferWidth,f.framebufferHeight,{format:te,type:y,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let oe=new W,se=new W;function ce(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=O.near=D.near=t,A.far=O.far=D.far=n,(j!==A.near||M!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),j=A.near,M=A.far),A.layers.mask=e.layers.mask|6,D.layers.mask=A.layers.mask&-5,O.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;le(A,i);for(let e=0;e<a.length;e++)le(a[e],i);a.length===2?ce(A,D,O):A.projectionMatrix.copy(D.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),P(e,A,i)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=mt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let F=null;function ue(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=k[n];o===void 0&&(o=new os,o.layers.enable(n),o.viewport=new en,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Pi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}F&&F(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let de=new Ms;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){F=e},this.dispose=function(){}}},Vu=new on,Hu=new G;Hu.set(-1,0,0,0,1,0,0,0,1);function Uu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,vo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Vu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Hu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Wu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return V(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Gu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ku=null;function qu(){return Ku===null&&(Ku=new li(Gu,16,16,ae,E),Ku.name=`DFG_LUT`,Ku.minFilter=g,Ku.magFilter=g,Ku.wrapS=d,Ku.wrapT=d,Ku.generateMipmaps=!1,Ku.needsUpdate=!0),Ku}var Ju=class{constructor(e={}){let{canvas:t=rt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=y}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([se,oe,ie]),g=new Set([y,w,S,ee,D,O]),_=new Uint32Array(4),b=new Int32Array(4),x=new W,C=null,T=null,k=[],A=[],j=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,te=!1,N=null,ne=null,re=null,ae=null;this._outputColorSpace=Ke;let ce=0,le=0,P=null,F=-1,ue=null,de=new en,fe=new en,pe=null,me=new q(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new en(0,0,ge,_e),Se=new en(0,0,ge,_e),Ce=!1,we=new Si,Te=!1,Ee=!1,De=new on,Oe=new W,ke=new en,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Me(){return P===null?ve:1}let I=n;function Ne(e,n){return t.getContext(e,n)}let Pe,Fe,L,Ie,R,z,Le,Re,ze,Be,Ve,He,Ue,We,Ge,qe,Je,Ye,Xe,Ze,Qe,et,tt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ot,!1),t.addEventListener(`webglcontextrestored`,st,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),I===null){let t=`webgl2`;if(I=Ne(t,e),I===null)throw Ne(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}nt()}catch(e){throw t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),V(`WebGLRenderer: `+e.message),e}function nt(){Pe=new fc(I),Pe.init(),Qe=new Iu(I,Pe),Fe=new Vs(I,Pe,e,Qe),L=new Pu(I,Pe),Fe.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),ne=I.createFramebuffer(),re=I.createFramebuffer(),ae=I.createFramebuffer(),Ie=new hc(I),R=new mu,z=new Fu(I,Pe,L,R,Fe,Qe,Ie),Le=new dc(M),Re=new Ns(I),et=new zs(I,Re),ze=new pc(I,Re,Ie,et),Be=new _c(I,ze,Re,et,Ie),Ye=new gc(I,Fe,z),Ge=new Hs(R),Ve=new pu(M,Le,Pe,Fe,et,Ge),He=new Uu(M,R),Ue=new vu,We=new Tu(Pe),Je=new Rs(M,Le,L,Be,p,s),qe=new Nu(M,Be,Fe),tt=new Wu(I,Ie,Fe,L),Xe=new Bs(I,Pe,Ie),Ze=new mc(I,Pe,Ie),Ie.programs=Ve.programs,M.capabilities=Fe,M.extensions=Pe,M.properties=R,M.renderLists=Ue,M.shadowMap=qe,M.state=L,M.info=Ie}m!==1009&&(j=new yc(m,t.width,t.height,o,r,i));let it=new Bu(M,I);this.xr=it,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){it.isPresenting?B(`WebGLRenderer: Can't change size while VR device is presenting.`):(ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),j!==null&&j.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)V(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}j.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),L.viewport(de.copy(xe).multiplyScalar(ve).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),L.scissor(fe.copy(Se).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){L.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=h.has(t)}if(e){let e=P.texture.type,t=g.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,I.clearBufferuiv(I.COLOR,0,_)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,I.clearBufferiv(I.COLOR,0,b))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),N=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Je.dispose(),Ue.dispose(),We.dispose(),R.dispose(),Le.dispose(),Be.dispose(),et.dispose(),tt.dispose(),Ve.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,H),it.removeEventListener(`sessionend`,gt),_t.stop()};function ot(e){e.preventDefault(),at(`WebGLRenderer: Context Lost.`),te=!0}function st(){at(`WebGLRenderer: Context Restored.`),te=!1;let e=Ie.autoReset,t=qe.enabled,n=qe.autoUpdate,r=qe.needsUpdate,i=qe.type;nt(),Ie.autoReset=e,qe.enabled=t,qe.autoUpdate=n,qe.needsUpdate=r,qe.type=i}function lt(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),R.remove(e)}function ft(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){Ve.releaseProgram(e)}),e.isShaderMaterial&&Ve.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Dt(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Xe;if(c!==null&&(h=Re.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Me()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(Pe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n,r){N!==null&&e.isNodeMaterial&&N.setObject(r,e),Te===!0&&Ge.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,r),e.side=0,e.needsUpdate=!0,Ct(e,t,r),e.side=2):Ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),N!==null&&N.renderStart(e,t,n),T=We.get(n),T.init(t),A.push(T),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(T.pushLight(e),e.castShadow&&T.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(T.pushLight(e),e.castShadow&&T.pushShadow(e))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),Ee=this.localClippingEnabled,Te=Ge.init(this.clippingPlanes,Ee),Te===!0&&Ge.setGlobalState(this.clippingPlanes,t),N!==null&&qe.render(T.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];pt(o,n,t,e),r.add(o)}else pt(i,n,t,e),r.add(i)}}),T=A.pop(),N!==null&&N.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Pe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function H(){_t.stop()}function gt(){_t.start()}let _t=new Ms;_t.setAnimationLoop(ht),typeof self<`u`&&_t.setContext(self),this.setAnimationLoop=function(e){mt=e,it.setAnimationLoop(e),e===null?_t.stop():_t.start()},it.addEventListener(`sessionstart`,H),it.addEventListener(`sessionend`,gt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;N!==null&&N.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=j!==null&&(P===null||n)&&j.begin(M,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,P),T=We.get(e,A.length),T.init(t),T.state.textureUnits=z.getTextureUnits(),A.push(T),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),we.setFromProjectionMatrix(De,$e,t.reversedDepth),Ee=this.localClippingEnabled,Te=Ge.init(this.clippingPlanes,Ee),C=Ue.get(e,k.length),C.init(),k.push(C),it.enabled===!0&&it.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&vt(e,t,-1/0,M.sortObjects)}vt(e,t,0,M.sortObjects),C.finish(),N!==null&&N.updateLights(T.state.lightsArray),M.sortObjects===!0&&C.sort(ye,be),je=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,je&&Je.addToRenderList(C,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Te===!0&&Ge.beginShadows();let i=T.state.shadowsArray;if(qe.render(i,e,t),Te===!0&&Ge.endShadows(),(r&&j.hasRenderPass())===!1){let n=C.opaque,r=C.transmissive;if(T.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];bt(n,r,e,a)}je&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];yt(C,e,n,n.viewport)}}else r.length>0&&bt(n,r,e,t),je&&Je.render(e),yt(C,e,t)}P!==null&&le===0&&(z.updateMultisampleRenderTarget(P),z.updateRenderTargetMipmap(P)),r&&j.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),et.resetDefaultState(),F=-1,ue=null,A.pop(),A.length>0?(T=A[A.length-1],z.setTextureUnits(T.state.textureUnits),Te===!0&&Ge.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,k.pop(),C=k.length>0?k[k.length-1]:null,N!==null&&N.renderEnd()};function vt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)T.pushLightProbeGrid(e);else if(e.isLight)T.pushLight(e),e.castShadow&&T.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(we)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let i=Be.update(e),a=e.material;a.visible&&C.push(e,i,a,n,ke.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(we))){let i=Be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ke.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&C.push(e,i,c,n,ke.z,s,t)}}else a.visible&&C.push(e,i,a,n,ke.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)vt(i[e],t,n,r)}function yt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;T.setupLightsView(n),Te===!0&&Ge.setGlobalState(M.clippingPlanes,n),r&&L.viewport(de.copy(r)),i.length>0&&xt(i,t,n),a.length>0&&xt(a,t,n),o.length>0&&xt(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function bt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[r.id]===void 0){let e=Pe.has(`EXT_color_buffer_half_float`)||Pe.has(`EXT_color_buffer_float`);T.state.transmissionRenderTarget[r.id]=new nn(1,1,{generateMipmaps:!0,type:e?E:y,minFilter:v,samples:Math.max(4,Fe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:K.workingColorSpace})}let a=T.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),c=M.getActiveCubeFace(),l=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(me),he=M.getClearAlpha(),he<1&&M.setClearColor(16777215,.5),M.clear(),je&&Je.render(n);let u=M.toneMapping;M.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),T.setupLightsView(r),Te===!0&&Ge.setGlobalState(M.clippingPlanes,r),xt(e,n,r),z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a),Pe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,St(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a))}M.setRenderTarget(s,c,l),M.setClearColor(me,he),d!==void 0&&(r.viewport=d),M.toneMapping=u}function xt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&St(o,t,n,s,l,c)}}function St(e,t,n,r,i,a){N!==null&&i.isNodeMaterial&&N.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function Ct(e,t,n){t.isScene!==!0&&(t=Ae);let r=R.get(e),i=T.state.lights,a=T.state.shadowsArray,o=i.state.version,s=Ve.getParameters(e,i.state,a,t,n,T.state.lightProbeGridArray),c=Ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Tt(e,s),d}else s.uniforms=Ve.getUniforms(e),N!==null&&e.isNodeMaterial&&N.build(e,n,s),e.onBeforeCompile(s,M),d=Ve.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ge.uniform),Tt(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=T.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function wt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=El.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Tt(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];x.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(x))return n}return null}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=Ae),z.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:K.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),y=T.state.lights;if(Te===!0&&(Ee===!0||e!==ue)){let t=e===ue&&r.id===F;Ge.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ge.numPlanes||v.numIntersection!==Ge.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=T.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Ct(r,t,i),N&&r.isNodeMaterial&&N.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,E=x.getUniforms(),D=v.uniforms;if(L.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==F&&(F=r.id,C=!0),v.needsLights){let e=Et(T.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ue!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(I,`projectionMatrix`,e.projectionMatrix),E.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(I,Oe.setFromMatrixPosition(e.matrixWorld)),Fe.logarithmicDepthBuffer&&E.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(I,`sunShadowMap`,y.state.sunShadowMap,z),y.state.directionalShadowMap.length>0&&E.setValue(I,`directionalShadowMap`,y.state.directionalShadowMap,z),y.state.spotShadowMap.length>0&&E.setValue(I,`spotShadowMap`,y.state.spotShadowMap,z),y.state.pointShadowMap.length>0&&E.setValue(I,`pointShadowMap`,y.state.pointShadowMap,z)),i.isSkinnedMesh){E.setOptional(I,i,`bindMatrix`),E.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(I,`boneTexture`,e.boneTexture,z))}i.isBatchedMesh&&(E.setOptional(I,i,`batchingTexture`),E.setValue(I,`batchingTexture`,i._matricesTexture,z),E.setOptional(I,i,`batchingIdTexture`),E.setValue(I,`batchingIdTexture`,i._indirectTexture,z),E.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(I,`batchingColorTexture`,i._colorsTexture,z));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Ye.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=qu()),C){if(E.setValue(I,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&Ot(D,w),a&&r.fog===!0&&He.refreshFogUniforms(D,a),He.refreshMaterialUniforms(D,r,ve,_e,T.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}El.upload(I,wt(v),D,z)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(El.upload(I,wt(v),D,z),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(I,`center`,i.center),E.setValue(I,`modelViewMatrix`,i.modelViewMatrix),E.setValue(I,`normalMatrix`,i.normalMatrix),E.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,x),tt.bind(n,x)}}return x}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,L.viewport(de),L.scissor(fe),L.setScissorTest(pe),F=-1;return}if(o.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(o.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(xe).multiplyScalar(ve).floor(),fe.copy(Se).multiplyScalar(ve).floor(),pe=Ce;if(n!==0&&(r=ne),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(de),L.scissor(fe),L.setScissorTest(pe),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}F=-1};function At(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Fe.textureFormatReadable(e.format),t.__typeReadable=Fe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=At(o);if(u.__formatReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,Qe.convert(c),Qe.convert(l),a)}finally{let e=P===null?null:R.get(P).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=At(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,Qe.convert(l),Qe.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=P===null?null:R.get(P).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ct(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;z.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Qe.convert(t.format),_=Qe.convert(t.type),v;t.isData3DTexture?(z.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(z.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(z.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,re),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,L.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return $e}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=K._getDrawingBufferColorSpace(e),t.unpackColorSpace=K._getUnpackColorSpace()}};function Yu(e,t,n,r,i,a,o,s=0,c=0){for(let l=0;l<2;l++){let u=[];for(let e=l;e<i;e+=2){let r=e/i*Math.PI*2,a=(e+1)/i*Math.PI*2;u.push(Math.cos(a)*t,0,Math.sin(a)*t,Math.cos(r)*t,0,Math.sin(r)*t,0,n,0),u.push(Math.cos(r)*t,0,Math.sin(r)*t,Math.cos(a)*t,0,Math.sin(a)*t,0,n*.6,0)}let d=new Ir;d.setAttribute(`position`,new J(u,3)),d.computeVertexNormals(),e.add(d,l?o:a,s,r,c)}}function Xu(e,t,n,r,i,a,o,s=0,c=.35){let l=Math.max(3,Math.round(t/.45)),u=t/l;for(let d=0;d<l;d++)e.box(u,.05,n,d%2?a:o,s-t/2+u*(d+.5),r,i,{rx:c});for(let d=0;d<l;d++)e.box(u,.18,.03,d%2?a:o,s-t/2+u*(d+.5),r-Math.sin(c)*n/2-.08,i+Math.cos(c)*n/2)}t([{id:`trafficlight`,name:`Traffic Light`,points:110,tags:[`medium`],sound:`metal`,variants:1,heightFactor:.2,blurb:`Red. Yellow. Void.`,build(e){e.cylB(.15,.18,.2,`#33363f`,0,0,0,8),e.cylB(.07,.08,3.6,`#33363f`,0,.2,0,8),e.boxB(.36,1,.32,`#2a2c33`,0,3.4,0),e.sphere(.11,`#ff3045`,0,4.18,.17,{emissive:!0,glow:1.6,w:8,hs:6}),e.sphere(.11,`#5a4a10`,0,3.9,.17,{w:8,hs:6}),e.sphere(.11,`#123d1f`,0,3.62,.17,{w:8,hs:6}),e.box(.36,.05,.2,`#2a2c33`,0,4.42,.12)}},{id:`barrier`,name:`Road Barrier`,points:50,tags:[`small`],sound:`plastic`,variants:2,blurb:`Road closed. Hole open.`,build(e,t,n){for(let t of[-.7,.7])e.box(.06,1,.06,i.white,t,.5,.2,{rx:.25}),e.box(.06,1,.06,i.white,t,.5,-.2,{rx:-.25});for(let t=0;t<6;t++)e.box(.27,.22,.05,t%2?i.white:n?i.orange:i.red,-.675+t*.27,.85,0)}},{id:`roadbarrel`,name:`Traffic Drum`,points:35,tags:[`small`],sound:`plastic`,variants:1,blurb:`Bright, round, delicious.`,build(e){e.cylB(.32,.36,.06,i.black,0,0,0,10),e.cylB(.28,.3,.95,i.orange,0,.06,0,10),e.cylB(.295,.295,.12,i.white,0,.35,0,10),e.cylB(.285,.285,.12,i.white,0,.65,0,10)}},{id:`busshelter`,name:`Bus Shelter`,points:260,tags:[`medium`],sound:`glass`,variants:2,blurb:`The bus is late. Forever.`,build(e,t,n){let r=n?`#3d7bf0`:`#33363f`;for(let t of[-1.7,1.7])e.boxB(.08,2.4,.08,r,t,0,-.6),e.boxB(.08,2.4,.08,r,t,0,.6),e.boxB(.04,2,1.1,`#bfe6ff`,t,.2,0);e.boxB(3.4,2,.04,`#bfe6ff`,0,.2,-.62),e.boxB(3.7,.12,1.6,r,0,2.4,.05),e.boxB(1,1.6,.06,`#ffe08a`,1.1,.4,-.6,{emissive:!0,glow:1.15}),e.boxB(2,.08,.4,i.wood,-.4,.5,-.35);for(let t of[-1.2,.4])e.boxB(.06,.5,.3,i.darkMetal,t,0,-.35);e.boxB(.6,.18,.04,`#ffd23f`,-1.2,2.55,.85)}},{id:`phonebooth`,name:`Phone Booth`,points:140,tags:[`medium`],sound:`glass`,variants:2,heightFactor:.25,blurb:`Collect call from the void.`,build(e,t,n){let r=n?`#3d5a80`:`#d63b3b`;e.boxB(1,.1,1,r,0,0,0);for(let t of[-.45,.45])for(let n of[-.45,.45])e.boxB(.1,2.3,.1,r,t,.1,n);for(let[t,n,r]of[[0,.46,0],[0,-.46,0],[.46,0,Math.PI/2],[-.46,0,Math.PI/2]])e.box(.8,1.7,.03,`#bfe6ff`,t,1.25,n,{ry:r});e.boxB(1.05,.25,1.05,r,0,2.4,0),e.boxB(.8,.12,1.07,`#fffbe0`,0,2.45,0,{emissive:!0,glow:1.2}),e.boxB(1.1,.1,1.1,r,0,2.65,0)}},{id:`bikerack`,name:`Bike Rack`,points:60,tags:[`small`],sound:`metal`,variants:1,blurb:`Locked up. Swallowed whole.`,build(e){for(let t=0;t<4;t++)e.torus(.35,.03,i.metal,-.75+t*.5,0,0,{arc:Math.PI,ts:10});e.box(1.8,.04,.04,i.metal,0,.02,0)}},{id:`bench_modern`,name:`Urban Bench`,points:80,tags:[`medium`],sound:`wood`,variants:2,blurb:`Minimalist. Edible.`,build(e,t,n){e.boxB(1.9,.38,.55,i.concrete,0,0,0),e.boxB(1.9,.08,.6,n?i.lightWood:i.wood,0,.38,0)}},{id:`newsstand`,name:`Newsstand`,points:320,tags:[`commercial`],sound:`wood`,variants:2,heightFactor:.22,blurb:`Read all about it: it got eaten.`,build(e,t,n){let r=n?`#2f7d4a`:`#3d5a80`;e.boxB(2.6,2.3,1.8,r,0,0,0),e.boxB(2.9,.12,2.2,i.darkMetal,0,2.3,.1),e.box(2.2,1,.03,`#ffe08a`,0,1.4,.91,{emissive:!0,glow:1.1}),e.boxB(2.4,.15,.5,i.wood,0,.85,1.1);for(let t=0;t<6;t++)e.box(.32,.42,.02,i.bright[t%8],-1+t*.4,1.45,.94);Xu(e,2.8,.7,2.15,1.25,`#ffffff`,n?`#3fbf6a`:`#3d7bf0`)}},{id:`stall`,name:`Market Stall`,points:300,tags:[`commercial`],sound:`wood`,variants:4,blurb:`Everything must go. Into the hole.`,build(e,t,n){let r=[`#e8423f`,`#3d7bf0`,`#3fbf6a`,`#ff8a2a`][n%4];e.boxB(2.6,.9,1.3,i.wood,0,0,0),e.boxB(2.7,.08,1.4,i.lightWood,0,.9,0);for(let t of[-1.25,1.25])for(let n of[-.6,.6])e.boxB(.07,2.3,.07,i.darkWood,t,0,n);Xu(e,2.9,1.7,2.35,0,i.white,r,0,.25);let a=[`#e8423f`,`#ffd23f`,`#3fbf6a`,`#ff8a2a`,`#8b5cf6`];for(let t=0;t<10;t++)e.ico(.11,a[(t+n)%5],-1.1+t%5*.55,1.05,t<5?-.25:.25,0);for(let n=0;n<3;n++)e.boxB(.5,.25,.4,i.lightWood,-.8+n*.8,0,.95+t.range(-.05,.05))}},{id:`kiosk`,name:`Kiosk`,points:380,tags:[`commercial`],sound:`wood`,variants:3,heightFactor:.22,blurb:`Open 24/7. Closed forever.`,build(e,t,n){let r=[`#ffd23f`,`#ff7eb6`,`#22c3b5`][n%3];e.boxB(2.6,2.5,2.6,r,0,0,0),e.box(1.8,.9,.03,`#fff3c4`,0,1.5,1.31,{emissive:!0,glow:1.15}),e.boxB(2,.1,.45,i.white,0,1,1.45),e.cone(2.3,1,`#e8423f`,0,3,0,4,{ry:Math.PI/4}),e.boxB(1.6,.45,.1,`#2c2f3a`,0,2.55,1.32),e.box(1.3,.25,.02,`#ffd23f`,0,2.78,1.38,{emissive:!0,glow:1.4})}},{id:`foodcart`,name:`Food Cart`,points:260,tags:[`commercial`],sound:`metal`,variants:3,blurb:`Hot dogs, hot holes.`,build(e,t,n){let r=[`#e8423f`,`#3d7bf0`,`#ffd23f`][n%3];e.boxB(1.8,.9,.95,i.metal,0,.35,0),e.box(1.82,.3,.97,r,0,.75,0),e.wheel(.32,.12,-.5,.32,.5),e.wheel(.32,.12,-.5,.32,-.5),e.boxB(.08,.35,.08,i.darkMetal,.8,0,0),e.cylB(.03,.03,1.6,i.darkMetal,0,1.25,0,6),Yu(e,1.25,.55,2.8,10,r,i.white),e.cylB(.07,.07,.3,`#c9874d`,.4,1.25,.2,6,{rz:Math.PI/2})}},{id:`flowerstand`,name:`Flower Stand`,points:240,tags:[`commercial`],sound:`wood`,variants:2,blurb:`Fresh bouquets for the void.`,build(e,t){e.boxB(2.2,.3,1,i.darkWood,0,0,0);for(let n=0;n<3;n++){e.boxB(2.2,.08,.35,i.wood,0,.3+n*.4,-.3+n*.3-.3+.3);for(let r=0;r<6;r++){let a=-.9+r*.36,o=.4+n*.4,s=-.3+n*.3-.3+.3;e.cylB(.1,.08,.18,i.terracotta,a,o,s,6),e.ico(.11,t.pick([`#ff7eb6`,`#ffd23f`,`#e8423f`,`#a78bfa`,`#ffffff`]),a,o+.27,s,0)}}Xu(e,2.4,1,2,.3,`#ffffff`,`#3fbf6a`,0,.3);for(let t of[-1.1,1.1])e.boxB(.06,2,.06,i.darkWood,t,0,-.45)}},{id:`aframe`,name:`A-Frame Sign`,points:30,tags:[`small`],sound:`wood`,variants:3,blurb:`Today’s special: you.`,build(e,t,n){let r=[`#2c2f3a`,`#3d5a80`,`#7a1f2b`][n%3];e.box(.55,.85,.04,r,0,.42,.14,{rx:-.32}),e.box(.55,.85,.04,r,0,.42,-.14,{rx:.32}),e.box(.42,.55,.01,`#f4f4f0`,0,.48,.17,{rx:-.32}),e.box(.3,.05,.012,i.red,0,.62,.185,{rx:-.32})}},{id:`cafeset`,name:`Café Terrace`,points:180,tags:[`medium`],sound:`wood`,variants:3,blurb:`Espresso, with a view of the abyss.`,build(e,t,n){let r=[`#e8423f`,`#3fbf6a`,`#3d7bf0`][n%3];e.cylB(.25,.28,.04,i.darkMetal,0,0,0,10),e.cylB(.035,.035,.72,i.darkMetal,0,.04,0,6),e.cylB(.45,.45,.04,i.white,0,.74,0,14);for(let t of[0,Math.PI]){e.push(Math.cos(t)*.75,0,Math.sin(t)*.75,-t+Math.PI/2);for(let t of[-.17,.17])for(let n of[-.17,.17])e.boxB(.03,.45,.03,i.darkMetal,t,0,n);e.boxB(.42,.05,.42,r,0,.45,0),e.boxB(.42,.38,.04,r,0,.5,-.19),e.pop()}e.cylB(.03,.03,2.3,i.white,0,.78,0,6),Yu(e,1.35,.5,2.7,12,r,i.white)}},{id:`vending`,name:`Vending Machine`,points:130,tags:[`medium`],sound:`metal`,variants:3,blurb:`Insert hole to continue.`,build(e,t,n){let r=[`#e8423f`,`#3d7bf0`,`#f4f4f0`][n%3];e.boxB(1,1.9,.8,r,0,0,0),e.boxB(.65,1.2,.03,`#d8f3ff`,-.1,.55,.4,{emissive:!0,glow:1.15});for(let t=0;t<4;t++)for(let n=0;n<4;n++)e.box(.1,.18,.02,i.bright[(t*4+n)%8],-.36+n*.17,.75+t*.27,.42);e.boxB(.18,.5,.03,i.darkMetal,.36,.9,.41),e.boxB(.7,.2,.03,i.black,-.1,.18,.41)}},{id:`clothesrack`,name:`Clothes Rack`,points:90,tags:[`medium`],sound:`soft`,variants:2,blurb:`One size fits all holes.`,build(e,t){for(let t of[-.7,.7])e.boxB(.05,1.5,.05,i.metal,t,0,0),e.boxB(.05,.05,.6,i.metal,t,0,0);e.box(1.45,.04,.04,i.metal,0,1.48,0);for(let n=0;n<7;n++)e.boxB(.08,.75,.45,t.pick(i.bright),-.55+n*.18,.7,0,{ry:t.range(-.1,.1)})}},{id:`giftboxes`,name:`Gift Boxes`,points:40,tags:[`small`],sound:`soft`,variants:3,blurb:`It is the thought that counts.`,build(e,t){let n=[...i.bright].sort(()=>t.next()-.5),r=[[.45,.35,-.12,0],[.32,.3,.25,0],[.26,.24,-.05,.35]];for(let t=0;t<3;t++){let[a,o,s,c]=r[t];e.boxB(a,o,a,n[t],s,c,0),e.boxB(a+.01,o+.01,.05,i.white,s,c,0),e.boxB(.05,o+.01,a+.01,i.white,s,c,0)}}},{id:`shopsign`,name:`Shop Sign`,points:90,tags:[`medium`],sound:`metal`,variants:4,heightFactor:.2,blurb:`Grand opening, grand swallowing.`,build(e,t,n){let r=[`#ff3d9a`,`#3de8ff`,`#ffd23f`,`#7b5cff`][n%4];e.cylB(.05,.05,2.6,i.darkMetal,-.8,0,0,6),e.cylB(.05,.05,2.6,i.darkMetal,.8,0,0,6),e.boxB(2,.8,.12,`#22232a`,0,2.1,0),e.box(1.8,.6,.02,r,0,2.5,.07,{emissive:!0,glow:1.25}),e.box(1.8,.6,.02,r,0,2.5,-.07,{emissive:!0,glow:1.25})}},{id:`umbrella_table`,name:`Parasol`,points:70,tags:[`medium`],sound:`soft`,variants:4,blurb:`Shade for the void.`,build(e,t,n){let r=[`#e8423f`,`#3d7bf0`,`#3fbf6a`,`#ff8a2a`][n%4];e.cylB(.25,.28,.08,i.darkMetal,0,0,0,8),e.cylB(.03,.03,2.2,i.white,0,.08,0,6),Yu(e,1.15,.42,1.95,10,r,i.white)}}]);function Zu(e,t,n){let r=n.floorH??3.1,a=n.trim??`#e9e4da`,o=n.window??(n.night?`#1d2440`:`#5d8fbf`),s=n.night?`#ffd88a`:`#9fd0ff`,c=n.setbacks??0,l=n.w,u=n.d,d=0,f=c?Math.ceil(n.floors/(c+1)):n.floors,p=n.floors,m=!0;for(;p>0;){let i=Math.min(f,p),c=i*r+(m?.6:0);if(n.glassTower){e.boxB(l,c,u,n.night?`#1b2448`:`#7fb3d8`,0,d,0);for(let t=0;t<=i;t++)e.boxB(l+.08,.14,u+.08,n.color,0,d+(m?.6:0)+t*r-.07,0);let a=Math.max(2,Math.round(l/2.2));for(let t=0;t<=a;t++){let r=-l/2+l/a*t;e.boxB(.14,c,.14,n.color,r,d,u/2),e.boxB(.14,c,.14,n.color,r,d,-u/2)}let f=Math.max(2,Math.round(u/2.2));for(let t=0;t<=f;t++){let r=-u/2+u/f*t;e.boxB(.14,c,.14,n.color,l/2,d,r),e.boxB(.14,c,.14,n.color,-l/2,d,r)}if(n.night)for(let n of[0,1,2,3]){let a=n<2?l:u;e.windows(n,l,u,0,0,d+(m?.6:0),d+c,Math.max(2,Math.round(a/2.2)),i,o,{ww:a/Math.max(2,Math.round(a/2.2))*.8,wh:r*.7,litColor:s,litChance:.4,rnd:()=>t.next(),glow:1.2})}}else{e.boxB(l,c,u,n.color,0,d,0);for(let t=1;t<=i;t++)e.boxB(l+.1,.12,u+.1,a,0,d+(m?.6:0)+t*r-.12,0);let f=d+(m?.6:0)+(m&&n.shop?r:0),p=i-(m&&n.shop?1:0);if(p>0)for(let i of[0,1,2,3]){let a=i<2?l:u,c=Math.max(1,Math.round(a/2));e.windows(i,l,u,0,0,f,f+p*r,c,p,o,{ww:Math.min(1.2,a/c*.55),wh:r*.5,litColor:s,litChance:n.night?.55:.12,rnd:()=>t.next(),glow:1.15})}}m&&(n.shop?(e.box(l*.8,r*.6,.04,n.night?`#ffe7a8`:`#bfe6ff`,0,.6+r*.38,u/2+.03,{emissive:!!n.night,glow:1.1}),Xu(e,l*.86,1,.6+r*.82,u/2+.5,n.shop.awning,`#ffffff`),e.box(l*.5,.45,.06,n.shop.sign,0,.6+r*.98+.25,u/2+.05,{emissive:!0,glow:1.2})):(e.box(1.2,2.1,.06,`#5a3d2a`,0,1.35,u/2+.03),e.box(1.6,.1,.6,a,0,2.55,u/2+.3)),e.boxB(l+.2,.6,u+.2,`#9a9da6`,0,0,0)),d+=c,p-=i,m=!1,p>0&&(l*=.78,u*=.78)}let h=n.roofColor??`#6b6f7a`;switch(n.roof??`flat`){case`gable`:e.extrude([[-l/2-.2,0],[l/2+.2,0],[0,Math.min(3,l*.4)]],u+.3,h,0,d,0);break;case`tower`:e.boxB(l*.6,2.5,u*.6,n.color,0,d,0),e.cone(Math.max(l,u)*.45,4,h,0,d+4.5,0,4,{ry:Math.PI/4});break;case`garden`:e.boxB(l,.3,u,a,0,d,0);for(let n=0;n<5;n++)e.ico(.8,i.leaf,t.range(-l/3,l/3),d+.7,t.range(-u/3,u/3),0);break;case`antenna`:e.boxB(l+.2,.4,u+.2,a,0,d,0),e.boxB(l*.4,1.6,u*.4,`#8a8f9a`,0,d+.4,0),e.cylB(.12,.2,7,`#c9ccd6`,0,d+2,0,6),e.sphere(.3,`#ff3045`,0,d+9.1,0,{emissive:!0,glow:2});break;case`none`:break;default:e.boxB(l+.2,.4,u+.2,a,0,d,0),t.chance(.7)&&e.boxB(Math.min(2.4,l*.3),1.4,Math.min(2.4,u*.3),`#8a8f9a`,t.range(-l/4,l/4),d+.4,t.range(-u/4,u/4)),t.chance(.5)&&e.cylB(.7,.7,1.6,`#a7abb5`,t.range(-l/4,l/4),d+.4,t.range(-u/4,u/4),8)}}var Qu=[`#e9b98a`,`#c96f5a`,`#f2d7a6`,`#9fb7c9`,`#d9d2c4`,`#b5c99a`,`#e6a0a0`,`#a59bd1`],$u=[`#e8423f`,`#3fbf6a`,`#3d7bf0`,`#ff8a2a`,`#8b5cf6`];t([{id:`sculpture`,name:`Abstract Sculpture`,points:280,tags:[`medium`],sound:`metal`,variants:3,heightFactor:.22,blurb:`Critics called it "hungry".`,build(e,t,n){e.boxB(2,.5,2,`#d8d2c4`,0,0,0);let r=[`#ff3d9a`,`#ffc94a`,`#3de8ff`][n%3];if(n===0)e.torus(1,.25,r,0,1.9,0,{ts:18});else if(n===1)for(let t=0;t<4;t++)e.box(.6,.6,.6,r,0,.9+t*.6,0,{ry:t*.5,rx:.6,rz:.6});else e.ico(.9,r,0,1.6,0,0)}},{id:`statue`,name:`Bronze Statue`,points:420,tags:[`medium`],sound:`heavy`,variants:1,heightFactor:.2,blurb:`A local hero, locally consumed.`,build(e){e.boxB(2.4,1.6,2.4,`#d8d2c4`,0,0,0),e.boxB(2.6,.2,2.6,`#c4bdae`,0,1.6,0);let t=`#9a7a3a`;e.boxB(.5,1,.35,t,0,1.8,0),e.boxB(.75,1.1,.45,t,0,2.8,0),e.sphere(.3,t,0,4.2,0),e.box(.2,1,.2,t,.55,4,0,{rz:-.4}),e.box(.2,.9,.2,t,-.48,3.2,0,{rz:.15}),e.cone(.15,.4,`#ffd23f`,.85,4.7,0,6,{emissive:!0,glow:1.4})}},{id:`clocktower`,name:`Clock Pillar`,points:300,tags:[`medium`],sound:`metal`,variants:1,heightFactor:.2,blurb:`Time to eat.`,build(e){e.cylB(.4,.5,.4,`#33363f`,0,0,0,8),e.cylB(.15,.15,3.6,`#33363f`,0,.4,0,8),e.boxB(1.1,1.1,1.1,`#2a2c33`,0,4,0);for(let[t,n,r]of[[0,.56,0],[0,-.56,Math.PI],[.56,0,Math.PI/2],[-.56,0,-Math.PI/2]])e.cyl(.42,.42,.02,`#fffbe8`,t,4.55,n,16,{rx:Math.PI/2,ry:r,emissive:!0,glow:1.05});e.cone(.75,.6,`#2a2c33`,0,5.4,0,4,{ry:Math.PI/4})}},{id:`metroentrance`,name:`Metro Entrance`,points:520,tags:[`building`],sound:`glass`,variants:1,heightFactor:.2,blurb:`Mind the gap. The very big gap.`,build(e){e.boxB(4.4,.25,2.6,`#6b6f7a`,0,0,0);for(let t of[-2.1,2.1])for(let n of[-1.2,1.2])e.boxB(.12,2.6,.12,`#2f7d4a`,t,0,n);e.boxB(4.6,.2,2.8,`#2f7d4a`,0,2.6,0),e.boxB(4.4,.1,2.6,`#bfe6ff`,0,2.5,0),e.boxB(1.4,.5,.1,`#ffd23f`,0,2.85,1.3,{emissive:!0,glow:1.3}),e.boxB(4.2,1,.06,`#2f7d4a`,0,.25,-1.2);for(let t=0;t<5;t++)e.boxB(1.8,.12,.4,`#8a8f9a`,0,.25-t*0,-.8+t*.4,{rx:0})}},{id:`pavilion`,name:`Glass Pavilion`,points:650,tags:[`building`,`commercial`],sound:`glass`,variants:2,heightFactor:.2,blurb:`Transparent pricing, transparent walls, transparent fate.`,build(e,t,n){let r=3.4;e.boxB(7,.3,5,`#c4bdae`,0,0,0),e.boxB(6.6,r,4.6,`#a9dcf5`,0,.3,0);for(let t=0;t<=5;t++)e.boxB(.12,r,.12,`#33363f`,-3.3+t*6.6/5,.3,5/2-.2),e.boxB(.12,r,.12,`#33363f`,-3.3+t*6.6/5,.3,-2.3);e.boxB(7.6,.3,5.6,n?`#ffffff`:`#33363f`,0,3.6999999999999997,0),e.boxB(3,.6,.1,n?`#ff7eb6`:`#3de8ff`,0,4,2.75,{emissive:!0,glow:1.25});for(let t=0;t<3;t++)e.cylB(.4,.4,.75,i.white,-2+t*2,.3,.5,10)}},{id:`house`,name:`Town House`,points:700,tags:[`building`],sound:`heavy`,variants:6,heightFactor:.16,blurb:`Home sweet void.`,build(e,t,n){Zu(e,t,{w:6,d:6,floors:2,color:Qu[n%Qu.length],roof:`gable`,roofColor:n%2?`#a5483b`:`#5b5f6b`,shop:null})}},{id:`shopbuilding`,name:`Corner Shop`,points:900,tags:[`building`,`commercial`],sound:`heavy`,variants:6,heightFactor:.15,blurb:`Under new management: the void.`,build(e,t,n){Zu(e,t,{w:8,d:7,floors:3,color:Qu[(n+2)%Qu.length],roof:`flat`,shop:{awning:$u[n%5],sign:$u[(n+2)%5]}})}},{id:`apartment`,name:`Apartment Block`,points:1400,tags:[`building`],sound:`heavy`,variants:6,heightFactor:.14,blurb:`Hundreds of tenants, one landlord: hunger.`,build(e,t,n){Zu(e,t,{w:10,d:9,floors:6,color:Qu[(n+4)%Qu.length],roof:n%2?`garden`:`flat`,shop:n%3==0?{awning:$u[n%5],sign:`#ffd23f`}:null})}},{id:`office`,name:`Office Tower`,points:2200,tags:[`building`],sound:`heavy`,variants:4,heightFactor:.12,blurb:`Meeting cancelled. Permanently.`,build(e,t,n){Zu(e,t,{w:12,d:12,floors:11,color:[`#d9dde6`,`#3a4256`,`#c9b79c`,`#7d8596`][n%4],glassTower:!0,roof:`antenna`,setbacks:1})}},{id:`skyscraper`,name:`Skyscraper`,points:3500,tags:[`building`,`landmark`],sound:`heavy`,variants:3,heightFactor:.1,blurb:`Scraped the sky. Now scraping the void.`,build(e,t,n){Zu(e,t,{w:14,d:14,floors:18,color:[`#e9edf5`,`#2c3448`,`#b8c4d6`][n%3],glassTower:!0,roof:`antenna`,setbacks:2})}},{id:`spire`,name:`The Hungry Spire`,points:8e3,tags:[`landmark`,`building`],sound:`heavy`,variants:1,size:11.2,blurb:`The tallest structure in the world. Was.`,build(e){e.boxB(22,1.2,22,`#d8d2c4`,0,0,0),e.boxB(19,6,19,`#f1ece2`,0,1.2,0);for(let t=0;t<8;t++){let n=-8+16/7*t;e.boxB(1.2,6,.4,`#c4bdae`,n,1.2,9.6),e.boxB(1.2,6,.4,`#c4bdae`,n,1.2,-9.6),e.boxB(.4,6,1.2,`#c4bdae`,9.6,1.2,n),e.boxB(.4,6,1.2,`#c4bdae`,-9.6,1.2,n)}e.box(6,4,.1,`#ffe7a8`,0,3.5,9.55,{emissive:!0,glow:1.2});let t=[[15,16,`#2c3448`],[12,14,`#36405a`],[9,12,`#414c6a`],[6,10,`#4c587a`]],n=7.2;for(let[r,i,a]of t){e.boxB(r,i,r,a,0,n,0),e.boxB(r+.6,.5,r+.6,`#ffc94a`,0,n+i-.5,0,{emissive:!0,glow:1.25});for(let t of[0,1,2,3])e.windows(t,r,r,0,0,n+.5,n+i-.8,Math.round(r/1.6),Math.round(i/2.2),`#9fd0ff`,{emissive:!0,glow:1.05});n+=i}e.cone(3.6,8,`#ffc94a`,0,n+4,0,4,{ry:Math.PI/4}),e.cylB(.25,.4,9,`#ffe08a`,0,n+7,0,6,{emissive:!0,glow:1.6}),e.ico(1,`#ffffff`,0,n+16.5,0,1,{emissive:!0,glow:2.2})}},{id:`obelisk`,name:`Obelisk`,points:1800,tags:[`landmark`],sound:`heavy`,variants:1,heightFactor:.12,blurb:`Ancient, imposing, edible.`,build(e){e.boxB(6,1.2,6,`#d8d2c4`,0,0,0),e.boxB(4.4,1.2,4.4,`#c4bdae`,0,1.2,0),e.cylB(1,1.6,22,`#e6dccb`,0,2.4,0,4,{ry:Math.PI/4}),e.cone(1,2.2,`#ffc94a`,0,25.5,0,4,{ry:Math.PI/4,emissive:!0,glow:1.3})}},{id:`arch`,name:`Triumphal Arch`,points:2600,tags:[`landmark`],sound:`heavy`,variants:1,heightFactor:.12,blurb:`Victory belongs to the hole.`,build(e){let t=`#e6dccb`;e.boxB(4,14,6,t,-6,0,0),e.boxB(4,14,6,t,6,0,0),e.boxB(16,5,6,t,0,14,0),e.boxB(16.6,.6,6.6,`#cfc4b0`,0,18.4,0),e.boxB(16.6,.6,6.6,`#cfc4b0`,0,13.6,0),e.extrude([[-4,0],[4,0],[4,3],[3,4.2],[0,4.8],[-3,4.2],[-4,3]],6.1,`#cfc4b0`,0,9.6,0),e.boxB(6,1.4,.2,`#ffc94a`,0,15.6,3.05,{emissive:!0,glow:1.2})}},{id:`festivetree`,name:`Plaza Tree`,points:380,tags:[`nature`],sound:`organic`,variants:2,heightFactor:.22,blurb:`It had fairy lights. Had.`,build(e,t){e.cylB(1.1,1.2,.6,`#c4bdae`,0,0,0,10),o(e,t,7.5,`round`);for(let n=0;n<12;n++)e.sphere(.12,i.yellow,t.range(-1.6,1.6),t.range(3.6,6.5),t.range(-1.6,1.6),{emissive:!0,glow:1.6,w:5,hs:4})}},{id:`billboard`,name:`Billboard`,points:480,tags:[`medium`],sound:`metal`,variants:3,heightFactor:.14,blurb:`Advertising space: now available in the void.`,build(e,t,n){let r=[`#ff3d9a`,`#3de8ff`,`#ffc94a`][n%3];e.cylB(.3,.35,6,`#4a4f5c`,0,0,0,8),e.boxB(7,3.2,.4,`#2a2c33`,0,6,0),e.box(6.6,2.8,.05,r,0,7.6,.22,{emissive:!0,glow:1.1}),e.box(4,.5,.06,`#ffffff`,-.8,8.2,.25,{emissive:!0,glow:1.2}),e.box(2.5,.35,.06,`#1a1a22`,-1.5,7.3,.25),e.box(6.8,.15,.6,`#4a4f5c`,0,5.95,.3)}}]);function ed(e,t=0){for(let n of[-.5,0,.5])e.boxB(1.2,.1,.12,i.lightWood,0,t,n);for(let n=0;n<6;n++)e.boxB(.15,.03,1.15,i.lightWood,-.52+n*.208,t+.1,0)}t([{id:`pallet`,name:`Pallet`,points:30,tags:[`small`],sound:`wood`,variants:1,blurb:`Flat-packed snack.`,build(e){ed(e)}},{id:`palletboxes`,name:`Loaded Pallet`,points:70,tags:[`small`],sound:`wood`,variants:3,blurb:`Shipping delayed indefinitely.`,build(e,t,n){ed(e);let r=2+n;for(let n=0;n<r;n++){let r=n%2*.55-.27,i=Math.floor(n/2)%2?.27:-.27,a=.13+(n>=4?.5:0);e.boxB(.52,.5,.52,t.pick([`#c9965f`,`#b9844f`,`#d6a96c`]),r,a,i),e.boxB(.53,.07,.1,`#e8d6a8`,r,a+.43,i)}}},{id:`barrel`,name:`Oil Drum`,points:35,tags:[`small`],sound:`metal`,variants:4,blurb:`Contents: unknown. Destination: void.`,build(e,t,n){let r=[`#3d7bf0`,`#e8423f`,`#ffd23f`,`#3fbf6a`][n%4];e.cylB(.3,.3,.9,r,0,0,0,12);for(let t of[.25,.62])e.cylB(.31,.31,.04,i.darkMetal,0,t,0,12);e.cylB(.28,.28,.02,i.darkMetal,0,.9,0,12),e.cylB(.04,.04,.04,i.metal,.15,.91,0,6)}},{id:`cardboard`,name:`Box Stack`,points:40,tags:[`small`],sound:`soft`,variants:3,blurb:`This side up. Now: this side down.`,build(e,t){for(let n=0;n<3;n++){let r=t.range(.4,.6);e.boxB(r,r*.8,r,t.pick([`#c9965f`,`#b9844f`,`#d6a96c`]),t.range(-.08,.08),n*.42,t.range(-.08,.08),{ry:t.range(-.3,.3)})}}},{id:`gascylinders`,name:`Gas Cylinders`,points:60,tags:[`small`],sound:`metal`,variants:2,blurb:`Highly compressed. Now highly compressed differently.`,build(e,t,n){let r=n?`#3fbf6a`:`#e8423f`;for(let t=0;t<4;t++){let n=t%2*.32-.16,a=Math.floor(t/2)*.32-.16;e.cylB(.14,.14,1.2,r,n,0,a,8),e.sphere(.14,r,n,1.2,a,{sy:.6,w:8,hs:5}),e.cylB(.04,.04,.12,i.metal,n,1.28,a,6)}e.boxB(.7,.06,.7,i.darkMetal,0,.6,0)}},{id:`spool`,name:`Cable Spool`,points:80,tags:[`medium`],sound:`wood`,variants:2,blurb:`Unwinding, unwinding, gone.`,build(e,t,n){e.cyl(.75,.75,.1,i.wood,0,.75,.5,14,{rx:Math.PI/2}),e.cyl(.75,.75,.1,i.wood,0,.75,-.5,14,{rx:Math.PI/2}),e.cyl(.5,.5,.9,n?`#e8423f`:`#2c2f3a`,0,.75,0,14,{rx:Math.PI/2})}},{id:`toolchest`,name:`Tool Chest`,points:60,tags:[`small`],sound:`metal`,variants:2,blurb:`Every tool except an escape plan.`,build(e,t,n){let r=n?`#e8423f`:`#3d7bf0`;e.boxB(.9,1.1,.55,r,0,.1,0);for(let t=0;t<5;t++)e.box(.8,.03,.02,i.metal,0,.3+t*.18,.285);for(let t of[-.35,.35])for(let n of[-.2,.2])e.cylB(.05,.05,.1,i.black,t,0,n,6)}},{id:`ibc`,name:`IBC Tank`,points:90,tags:[`medium`],sound:`plastic`,variants:1,blurb:`1000 litres of nope.`,build(e){ed(e),e.boxB(1.1,1,1.1,`#e9eef2`,0,.13,0);for(let t=0;t<4;t++)e.boxB(1.14,.04,1.14,i.metal,0,.25+t*.28,0);e.cylB(.18,.18,.1,`#2c2f3a`,0,1.13,0,8)}},{id:`generator`,name:`Generator`,points:260,tags:[`industrial`],sound:`heavy`,variants:2,blurb:`Power cut.`,build(e,t,n){let r=n?`#ffb02e`:`#3fbf6a`;e.boxB(2.6,.2,1.3,i.darkMetal,0,0,0),e.boxB(2.4,1.3,1.2,r,0,.2,0);for(let t=0;t<7;t++)e.box(.05,.8,.02,i.darkMetal,-.9+t*.15,.85,.61);e.boxB(.6,.4,.02,`#2c2f3a`,.7,.9,.61),e.sphere(.06,`#3fff7a`,.55,1.2,.62,{emissive:!0,glow:2,w:5,hs:4}),e.cylB(.1,.1,.8,i.steel,-.8,1.5,.3,6)}},{id:`compressor`,name:`Compressor`,points:240,tags:[`industrial`],sound:`heavy`,variants:1,blurb:`Under pressure.`,build(e){e.cyl(.55,.55,2,`#e8423f`,0,.75,0,12,{rz:Math.PI/2}),e.sphere(.55,`#e8423f`,1,.75,0,{sx:.4}),e.sphere(.55,`#e8423f`,-1,.75,0,{sx:.4}),e.boxB(1,.6,.7,i.darkMetal,0,1.25,0),e.cyl(.3,.3,.2,i.metal,.3,1.6,.36,10,{rx:Math.PI/2});for(let t of[-.7,.7])e.boxB(.15,.25,.9,i.darkMetal,t,0,0)}},{id:`machine`,name:`Press Machine`,points:380,tags:[`industrial`],sound:`heavy`,variants:2,heightFactor:.22,blurb:`Pressed into service. Then into the void.`,build(e,t,n){let r=n?`#3d7bf0`:`#ffb02e`;e.boxB(2.6,.6,2,i.darkMetal,0,0,0);for(let t of[-1,1])e.boxB(.5,3.2,1.6,r,t,.6,0);e.boxB(2.6,.9,1.8,r,0,3.8,0),e.boxB(1.4,.4,1.2,i.steel,0,2.6,0),e.cylB(.25,.25,.8,i.metal,0,3,0,10),e.boxB(.5,.7,.2,`#2c2f3a`,1.2,1.4,.9),e.sphere(.08,`#ff3045`,1.2,1.9,1.01,{emissive:!0,glow:2,w:5,hs:4}),e.box(2.7,.15,.04,i.yellow,0,.45,1.01)}},{id:`forklift`,name:`Forklift`,points:320,tags:[`industrial`,`vehicle`],sound:`metal`,variants:2,blurb:`Lifted. Dropped. Very far.`,build(e,t,n){let r=n?`#ffb02e`:`#ffd23f`;e.boxB(1.8,.8,1.2,r,-.2,.3,0),e.boxB(.8,.9,1.2,`#33363f`,-.85,.3,0),e.boxB(.6,.4,.5,i.black,0,1.1,0);for(let t of[-.3,.6])for(let n of[-.5,.5])e.boxB(.06,1.2,.06,i.darkMetal,t,1.1,n);e.boxB(1,.08,1.2,r,.15,2.3,0);for(let t of[-.35,.35])e.boxB(.12,2.6,.12,i.darkMetal,.8,.1,t);for(let t of[-.35,.35])e.boxB(1.1,.06,.15,i.steel,1.35,.15,t);e.wheel(.32,.26,.45,.32,.55),e.wheel(.32,.26,.45,.32,-.55),e.wheel(.26,.24,-.8,.26,.55),e.wheel(.26,.24,-.8,.26,-.55),e.sphere(.1,`#ff8a2a`,.15,2.4,0,{emissive:!0,glow:2,w:5,hs:4})}},{id:`container`,name:`Shipping Container`,points:480,tags:[`industrial`],sound:`heavy`,variants:5,blurb:`33 cubic metres of cargo, 0 of resistance.`,build(e,t,n){let r=[`#e8423f`,`#3d7bf0`,`#ff8a2a`,`#3fbf6a`,`#8a8f9a`][n%5],a=2.6;e.boxB(6.1,a,2.44,r,0,0,0);for(let t=0;t<22;t++){let n=-6.1/2+.2+5.699999999999999/21*t;e.boxB(.1,2.4,.04,r,n,.1,1.23),e.boxB(.1,2.4,.04,r,n,.1,-2.44/2-.01)}e.boxB(6.14,.12,2.48,i.darkMetal,0,0,0),e.boxB(6.14,.12,2.48,i.darkMetal,0,2.48,0),e.box(.04,2.3000000000000003,.05,i.darkMetal,3.07,a/2,0);for(let t of[-.6,.6])e.box(.05,2.2,.06,i.metal,3.0799999999999996,a/2,t)}},{id:`boxtruck`,name:`Box Truck`,points:450,tags:[`industrial`,`vehicle`],sound:`heavy`,variants:3,blurb:`Fragile cargo, hungry road.`,build(e,t,n){let r=[`#f4f4f0`,`#ffd23f`,`#3d7bf0`][n%3];e.boxB(1.9,1.8,2.2,`#e8423f`,2.6,.6,0),e.box(.04,.8,1.9,i.darkGlass,3.56,1.8,0),e.boxB(4.8,2.8,2.4,r,-.75,.75,0),e.boxB(7.2,.25,2.2,i.darkMetal,.2,.5,0);for(let t of[2.6,-1.2,-2.3])for(let n of[-1,1])e.wheel(.48,.3,t,.48,n);for(let t of[-.8,.8])e.box(.05,.15,.3,`#fffbe0`,3.57,1,t,{emissive:!0,glow:1.6});e.box(3.6,.6,.02,`#e8423f`,-.75,2.4,1.21)}},{id:`mixer`,name:`Cement Mixer`,points:600,tags:[`industrial`,`vehicle`],sound:`heavy`,variants:2,blurb:`Mixed feelings.`,build(e,t,n){let r=n?`#3d7bf0`:`#ff8a2a`;e.boxB(2,2,2.3,r,3,.6,0),e.box(.04,.8,2,i.darkGlass,4.01,2,0),e.boxB(6,.3,2.2,i.darkMetal,-.4,.6,0),e.lathe([[.3,0],[1.25,.8],[1.3,2.6],[.6,4.2],[.3,4.2]],`#e9eef2`,-2.6,2.25,0,10,{rz:-Math.PI/2+.25});for(let t=0;t<3;t++)e.torus(1.1-t*.05,.06,r,-.6-t*1,2.35+t*.12,0,{ry:Math.PI/2,rx:.25});for(let t of[3,-.8,-2])for(let n of[-1,1])e.wheel(.5,.32,t,.5,n)}},{id:`silo`,name:`Storage Silo`,points:900,tags:[`industrial`,`building`],sound:`heavy`,variants:2,heightFactor:.15,blurb:`Grain? Gone.`,build(e,t,n){let r=n?`#d9dde6`:`#c9ccd6`;for(let t=0;t<4;t++)e.cylB(.15,.15,3,i.darkMetal,Math.cos(t*1.57+.78)*2.2,0,Math.sin(t*1.57+.78)*2.2,6);e.cylB(3,3,10,r,0,3,0,16),e.cone(3.1,2.2,`#a7abb5`,0,14.1,0,16),e.lathe([[.4,0],[3,3],[0,3]],r,0,0,0,16);for(let t=0;t<4;t++)e.cylB(3.03,3.03,.15,`#8a8f9a`,0,4+t*2.6,0,16);for(let t=0;t<14;t++)e.box(.6,.05,.05,i.yellow,0,3.4+t*.75,3.05);e.box(.05,10.5,.05,i.yellow,.3,8.3,3.05),e.box(.05,10.5,.05,i.yellow,-.3,8.3,3.05)}},{id:`portacabin`,name:`Site Office`,points:520,tags:[`industrial`,`building`],sound:`heavy`,variants:2,heightFactor:.2,blurb:`Health & safety meeting: cancelled.`,build(e,t,n){let r=n?`#3d7bf0`:`#e9e4da`;e.boxB(6,2.6,2.6,r,0,.3,0);for(let t of[-2.6,2.6])for(let n of[-1,1])e.boxB(.3,.3,.3,i.darkMetal,t,0,n);for(let t of[-1.8,.4,1.8])e.box(1,.8,.04,i.glass,t,1.9,1.32);e.box(.9,2,.04,`#5a3d2a`,-.7,1.3,1.32),e.boxB(6.2,.15,2.8,i.darkMetal,0,2.9,0),e.boxB(1.2,.5,.8,`#c9ccd6`,1.6,3.05,0)}},{id:`craneloader`,name:`Gantry Crane`,points:1200,tags:[`industrial`,`building`],sound:`heavy`,variants:1,heightFactor:.15,blurb:`It lifted containers. Now it is the container.`,build(e){let t=`#ffb02e`;for(let n of[-5,5])for(let r of[-2.5,2.5])e.boxB(.6,11,.6,t,n,0,r);for(let n of[-5,5])e.boxB(.6,.6,5.6,t,n,5.5,0);e.boxB(11.2,1,1,t,0,11,-2.5),e.boxB(11.2,1,1,t,0,11,2.5),e.boxB(2,1.6,6,`#33363f`,1.5,10.6,0),e.box(.08,4,.08,i.darkMetal,1.5,8.6,0),e.boxB(1.6,.3,2.6,i.darkMetal,1.5,6.3,0);for(let t of[-5,5])for(let n of[-2.5,2.5])e.boxB(1.2,.5,1.2,i.darkMetal,t,0,n)}}]);var td=[`#ff5a5f`,`#3d7bf0`,`#ffd23f`,`#22c3b5`,`#ff7eb6`,`#ff8a2a`];function nd(e,t,n){let r=t.range(.4,1)*t.sign(),i=0,a=0;for(let t=0;t<7;t++){let o=t/7,s=r*o*o*n*.25;e.cyl(n*.035*(1-o*.35),n*.042*(1-o*.3),n/7+.05,t%2?`#a77b4e`:`#8f6640`,s,a+n/7/2,0,7,{rz:-r*o*.5}),i=s,a+=n/7}for(let r=0;r<7;r++){let o=r/7*Math.PI*2+t.next();e.box(n*.42,.06,n*.11,r%2?`#3fae4a`:`#2f8f3c`,i+Math.cos(o)*n*.18,a-.15,Math.sin(o)*n*.18,{ry:-o,rz:-.45})}e.ico(n*.05,`#7a5236`,i,a-.2,0,0),e.ico(n*.04,`#7a5236`,i+.15,a-.3,.1,0)}t([{id:`beachball`,name:`Beach Ball`,points:15,tags:[`small`],sound:`plastic`,variants:3,blurb:`Inflated ego, deflated future.`,build(e,t,n){e.sphere(.3,td[n%6],0,.3,0,{w:12,hs:8}),e.sphere(.302,i.white,0,.3,0,{w:12,hs:8,sx:.4}),e.sphere(.303,td[(n+2)%6],0,.3,0,{w:12,hs:8,sz:.4})}},{id:`bucket`,name:`Sand Bucket`,points:12,tags:[`small`],sound:`plastic`,variants:3,blurb:`Comes with a spade. Leaves with nothing.`,build(e,t,n){let r=td[n*2%6];e.lathe([[0,0],[.13,0],[.17,.25],[0,.25]],r,0,0,0,10),e.torus(.15,.012,r,0,.25,0,{arc:Math.PI,ts:8}),e.box(.06,.03,.4,i.yellow,.25,.02,0,{ry:.6})}},{id:`sandcastle`,name:`Sandcastle`,points:35,tags:[`small`],sound:`organic`,variants:2,blurb:`A kingdom falls.`,build(e){let t=`#e6c88a`;e.boxB(.7,.25,.7,t,0,0,0);for(let n of[-.3,.3])for(let r of[-.3,.3])e.cylB(.12,.14,.45,t,n,0,r,8),e.cone(.13,.15,`#d9b878`,n,.52,r,8);e.cylB(.16,.18,.6,t,0,.2,0,8),e.cone(.18,.2,`#d9b878`,0,.9,0,8),e.box(.01,.12,.12,i.red,0,1.07,.06)}},{id:`cooler`,name:`Cooler Box`,points:30,tags:[`small`],sound:`plastic`,variants:3,blurb:`Stay cool. In the void.`,build(e,t,n){let r=[`#3d7bf0`,`#e8423f`,`#22c3b5`][n%3];e.boxB(.6,.4,.4,r,0,0,0),e.boxB(.62,.1,.42,i.white,0,.4,0),e.box(.3,.04,.05,i.white,0,.53,0)}},{id:`towel`,name:`Beach Towel`,points:15,tags:[`small`],sound:`soft`,variants:4,noShadow:!0,blurb:`Folded. Swallowed.`,build(e,t,n){let r=td[n%6];e.boxB(1.8,.03,.85,r,0,0,0);for(let t=0;t<4;t++)e.boxB(.18,.035,.85,i.white,-.6+t*.4,0,0)}},{id:`flipflops`,name:`Flip-Flops`,points:10,tags:[`small`],sound:`soft`,variants:3,noShadow:!0,blurb:`Flip. Flop. Plop.`,build(e,t,n){let r=td[(n+1)%6];for(let t of[-.08,.08])e.boxB(.28,.03,.11,r,0,0,t),e.torus(.05,.008,i.white,.05,.03,t,{arc:Math.PI,ry:Math.PI/2,ts:6})}},{id:`swimring`,name:`Swim Ring`,points:20,tags:[`small`],sound:`plastic`,variants:3,blurb:`It will not keep you afloat here.`,build(e,t,n){e.torus(.32,.12,td[n%6],0,.12,0,{rx:Math.PI/2,ts:14});for(let t=0;t<4;t++){let n=t/4*Math.PI*2;e.sphere(.125,i.white,Math.cos(n)*.32,.12,Math.sin(n)*.32,{sx:.5,w:8,hs:6})}}},{id:`beachumbrella`,name:`Beach Umbrella`,points:90,tags:[`medium`],sound:`soft`,variants:6,blurb:`Shade, then darkness.`,build(e,t,n){let r=t.range(-.12,.12);e.cyl(.035,.035,2.3,i.white,0,1.12,0,6,{rz:r}),e.push(-Math.sin(r)*1.12,2.02,0,0),Yu(e,1.3,.5,0,12,td[n%6],i.white),e.pop()}},{id:`lounger`,name:`Sun Lounger`,points:70,tags:[`medium`],sound:`wood`,variants:4,blurb:`Lie back. Further. Further.`,build(e,t,n){let r=td[(n+3)%6];for(let t of[-.75,.45])for(let n of[-.3,.3])e.boxB(.05,.3,.05,i.white,t,0,n);e.boxB(1.3,.06,.66,i.white,-.15,.3,0),e.boxB(1.25,.07,.6,r,-.15,.34,0),e.box(.7,.07,.6,r,.75,.55,0,{rz:.6}),e.box(.7,.05,.66,i.white,.76,.52,0,{rz:.6})}},{id:`deckchair`,name:`Deck Chair`,points:45,tags:[`small`],sound:`wood`,variants:4,blurb:`Folding under pressure.`,build(e,t,n){let r=td[n%6];e.box(.06,1,.06,i.lightWood,-.2,.45,.27,{rz:-.6}),e.box(.06,1,.06,i.lightWood,-.2,.45,-.27,{rz:-.6}),e.box(.06,.8,.06,i.lightWood,.15,.35,.27,{rz:.5}),e.box(.06,.8,.06,i.lightWood,.15,.35,-.27,{rz:.5}),e.box(.03,.9,.5,r,-.12,.5,0,{rz:-.75}),e.box(.031,.9,.16,i.white,-.12,.5,0,{rz:-.75})}},{id:`surfboard`,name:`Surfboard`,points:60,tags:[`medium`],sound:`plastic`,variants:5,blurb:`Caught the biggest wave of all.`,build(e,t,n){let r=td[(n+4)%6];e.sphere(1,r,0,.06,0,{sx:1,sy:.05,sz:.27,w:14,hs:6}),e.sphere(1,i.white,0,.065,0,{sx:.95,sy:.05,sz:.04,w:14,hs:6}),e.box(.15,.12,.02,i.black,-.85,0,0)}},{id:`surfrack`,name:`Surf Rack`,points:160,tags:[`medium`],sound:`wood`,variants:2,heightFactor:.25,blurb:`Surf’s up. Then down.`,build(e,t){for(let t of[-1,1])e.boxB(.12,1.4,.8,i.wood,t,0,0);e.boxB(2.2,.1,.8,i.darkWood,0,.4,0);for(let n=0;n<4;n++)e.sphere(1,t.pick(td),-.6+n*.4,1.2,0,{sx:.06,sy:1,sz:.27,w:12,hs:6,rz:.12})}},{id:`beachhut`,name:`Beach Kiosk`,points:420,tags:[`commercial`],sound:`wood`,variants:3,heightFactor:.22,blurb:`Smoothies served until the end of the world.`,build(e,t,n){let r=[`#ff7eb6`,`#22c3b5`,`#ffd23f`][n%3];e.boxB(3.2,2.4,3,r,0,0,0);for(let t=0;t<8;t++)e.boxB(.06,2.4,.04,i.white,-1.4+t*.4,0,1.51);e.box(2.2,.9,.03,`#fff3c4`,0,1.6,1.53,{emissive:!0,glow:1.1}),e.boxB(2.6,.1,.6,i.lightWood,0,1.05,1.75),e.cone(2.8,1.6,`#d9b878`,0,3.2,0,8),e.cone(2.9,.4,`#c9a868`,0,2.55,0,8);for(let t=0;t<3;t++)e.cylB(.18,.2,.8,i.white,-1+t,0,2.3,8)}},{id:`lifeguard`,name:`Lifeguard Tower`,points:520,tags:[`building`],sound:`wood`,variants:1,heightFactor:.2,blurb:`No one can save it now.`,build(e){for(let t of[-1.1,1.1])for(let n of[-1.1,1.1])e.boxB(.18,2.4,.18,i.white,t,0,n);e.boxB(3,.15,3,i.lightWood,0,2.4,0),e.boxB(2.4,1.8,2.4,`#ff5a5f`,0,2.55,0),e.box(1.8,.8,.03,i.darkGlass,0,3.6,1.21),e.extrude([[-1.6,0],[1.6,0],[0,1]],2.8,i.white,0,4.35,0);for(let t=0;t<8;t++)e.box(.8,.06,.15,i.lightWood,0,.3*t+.15,1.7+t*.2);e.cylB(.03,.03,1.4,i.white,1.3,4.35,0,4),e.box(.5,.35,.02,i.red,1.55,5.5,0)}},{id:`rowboat`,name:`Rowing Boat`,points:320,tags:[`vehicle`],sound:`wood`,variants:4,blurb:`It sank, technically.`,build(e,t,n){let r=[`#ffffff`,`#3d7bf0`,`#ff5a5f`,`#22c3b5`][n%4];e.extrude([[-1.9,.75],[-1.6,.15],[1.2,0],[2,.85]],1.5,r,0,0,0,{sz:1}),e.extrude([[-1.8,.8],[-1.5,.3],[1.1,.2],[1.85,.85]],1.3,`#a8754a`,0,.02,0),e.box(.3,.06,1.4,i.lightWood,-.2,.6,0),e.box(.3,.06,1.4,i.lightWood,.8,.6,0),e.box(4,.1,.08,`#ffd23f`,.05,.6,.8,{rz:.02}),e.box(4,.1,.08,`#ffd23f`,.05,.6,-.8,{rz:.02}),e.box(2.2,.06,.08,i.darkWood,.2,.7,.5,{ry:.4})}},{id:`sailboat`,name:`Sailboat`,points:650,tags:[`vehicle`],sound:`wood`,variants:3,heightFactor:.14,blurb:`Sailed off the edge of the world.`,build(e,t,n){let r=[`#ffffff`,`#3d5a80`,`#ff5a5f`][n%3];e.extrude([[-3.2,1.2],[-2.8,.3],[2,0],[3.4,1.3]],2.2,r,0,0,0),e.boxB(5.6,.12,1.9,i.lightWood,0,1.15,0),e.boxB(1.8,.7,1.4,i.white,-.8,1.25,0),e.cylB(.08,.1,7.5,`#c9ccd6`,.4,1.2,0,6),e.extrude([[0,0],[0,6.5],[-3.2,0]],.04,`#fff8ee`,.3,1.9,0,{ry:Math.PI/2*0}),e.extrude([[0,0],[0,5.5],[2.2,0]],.04,td[n%6],.55,2,0),e.cylB(.06,.06,4,`#c9ccd6`,-1.2,1.9,0,6,{rz:Math.PI/2})}},{id:`jetski`,name:`Jet Ski`,points:200,tags:[`vehicle`],sound:`metal`,variants:3,blurb:`Full throttle into the abyss.`,build(e,t,n){let r=[`#ffd23f`,`#e8423f`,`#22c3b5`][n%3];e.extrude([[-1.4,.6],[-1.3,.1],[.9,0],[1.5,.55]],1,r,0,0,0),e.box(1,.25,.5,i.black,-.4,.75,0),e.box(.4,.4,.8,i.white,.6,.75,0,{rz:-.4}),e.cyl(.03,.03,.7,i.black,.6,1,0,6,{rx:Math.PI/2})}},{id:`palm`,name:`Palm Tree`,points:230,tags:[`nature`],sound:`organic`,variants:4,heightFactor:.2,blurb:`Tropical. Delicious.`,build(e,t){nd(e,t,t.range(6,7.5))}},{id:`volleynet`,name:`Volleyball Net`,points:280,tags:[`medium`],sound:`soft`,variants:1,heightFactor:.2,blurb:`Spike!`,build(e){for(let t of[-4,4])e.cylB(.07,.07,2.6,i.white,t,0,0,6);e.box(8,.9,.02,`#2c2f3a`,0,2.1,0),e.box(8,.08,.04,i.white,0,2.55,0),e.sphere(.12,i.yellow,1.5,.12,1.4)}}]);var rd=[`#ff3d9a`,`#3de8ff`,`#7b5cff`,`#ffe14a`,`#3dff9e`],id=`#1d2033`,ad=`#2b2f48`;t([{id:`neonbollard`,name:`Glow Bollard`,points:20,tags:[`small`],sound:`tech`,variants:3,blurb:`Pretty light, pretty snack.`,build(e,t,n){e.cylB(.13,.15,.7,id,0,0,0,8),e.cylB(.14,.14,.12,rd[n%5],0,.55,0,8,{emissive:!0,glow:1.8})}},{id:`datacube`,name:`Data Cube`,points:25,tags:[`small`],sound:`tech`,variants:3,blurb:`1 terabyte of cat videos.`,build(e,t,n){e.boxB(.5,.5,.5,ad,0,0,0),e.boxB(.52,.06,.52,rd[n%5],0,.22,0,{emissive:!0,glow:1.6}),e.boxB(.3,.3,.02,rd[(n+1)%5],0,.1,.26,{emissive:!0,glow:1.3})}},{id:`holoplant`,name:`Holo Plant`,points:30,tags:[`small`,`nature`],sound:`tech`,variants:2,blurb:`Synthetic photosynthesis, genuine digestion.`,build(e,t,n){e.cylB(.22,.18,.35,ad,0,0,0,8),e.ico(.28,n?`#3dff9e`:`#3de8ff`,0,.65,0,0,{emissive:!0,glow:.8})}},{id:`drone`,name:`Courier Drone`,points:60,tags:[`small`],sound:`tech`,variants:2,idle:`hover`,blurb:`Package undeliverable.`,build(e,t,n){let r=rd[n%5];e.boxB(.5,.15,.5,ad,0,.9,0);for(let t of[-.35,.35])for(let n of[-.35,.35])e.cyl(.18,.18,.02,r,t,1.07,n,10,{emissive:!0,glow:1.3}),e.box(.35,.04,.04,id,t/2,1,n/2,{ry:Math.atan2(n,t)});e.boxB(.3,.25,.3,`#ffd23f`,0,.62,0),e.cylB(.02,.02,.6,id,0,0,0,4)}},{id:`robot`,name:`Service Robot`,points:140,tags:[`medium`],sound:`tech`,variants:3,idle:`robot`,blurb:`Beep boop. Gulp.`,build(e,t,n){let r=rd[n%5];e.cylB(.38,.45,.3,id,0,0,0,10),e.cylB(.32,.38,.9,`#d9dde6`,0,.3,0,10),e.cylB(.39,.39,.08,r,0,.75,0,10,{emissive:!0,glow:1.5}),e.sphere(.3,`#d9dde6`,0,1.35,0,{w:10,hs:7}),e.box(.42,.12,.2,r,0,1.38,.2,{emissive:!0,glow:1.8}),e.cylB(.02,.02,.35,id,0,1.6,0,4),e.sphere(.06,r,0,1.97,0,{emissive:!0,glow:2});for(let t of[-1,1])e.box(.1,.55,.12,ad,t*.42,.85,0,{rz:t*.25})}},{id:`mech`,name:`Patrol Mech`,points:480,tags:[`medium`,`vehicle`],sound:`tech`,variants:2,idle:`robot`,heightFactor:.22,blurb:`Defeated without a fight.`,build(e,t,n){let r=rd[(n+2)%5];for(let t of[-1,1])e.boxB(.5,1.6,.6,ad,t*.7,0,0),e.boxB(.7,.2,1,id,t*.7,0,.1),e.box(.52,.1,.62,r,t*.7,1,0,{emissive:!0,glow:1.5});e.boxB(2.2,1.3,1.6,`#d9dde6`,0,1.6,0),e.box(1.4,.3,.05,r,0,2.5,.81,{emissive:!0,glow:2});for(let t of[-1,1])e.boxB(.5,.5,1.6,ad,t*1.35,2.1,.3);e.cylB(.05,.05,1,id,.6,2.9,-.4,4),e.sphere(.1,r,.6,3.95,-.4,{emissive:!0,glow:2})}},{id:`hovercar`,name:`Hovercar`,points:220,tags:[`vehicle`],sound:`tech`,variants:5,idle:`hover`,blurb:`Flying cars were promised. Holes were delivered.`,build(e,t,n){let r=[`#e9edf5`,`#2c3448`,`#ff3d9a`,`#7b5cff`,`#ffe14a`][n%5],i=rd[(n+1)%5];e.extrude([[-2.2,.5],[2.3,.5],[2.4,.75],[1.2,.95],[.4,1.5],[-1.2,1.5],[-2.2,1]],1.9,r,0,0,0),e.extrude([[1.2,.93],[.42,1.45],[-1.15,1.45],[-1.6,1.05]],1.75,`#141a33`,0,0,0),e.box(4.2,.08,1.6,i,0,.45,0,{emissive:!0,glow:2.2}),e.box(.05,.08,1.7,`#ffffff`,2.38,.72,0,{emissive:!0,glow:2}),e.box(.05,.1,1.7,`#ff3045`,-2.22,.85,0,{emissive:!0,glow:2});for(let t of[-1,1])e.box(3.6,.06,.05,i,-.1,.78,t,{emissive:!0,glow:1.6})}},{id:`cyberbike`,name:`Light Cycle`,points:120,tags:[`vehicle`],sound:`tech`,variants:3,blurb:`Derezzed.`,build(e,t,n){let r=rd[n%5];e.torus(.38,.08,id,.8,.42,0,{ts:16}),e.torus(.38,.08,id,-.8,.42,0,{ts:16}),e.torus(.33,.03,r,.8,.42,0,{ts:16,emissive:!0,glow:2}),e.torus(.33,.03,r,-.8,.42,0,{ts:16,emissive:!0,glow:2}),e.extrude([[-1,.5],[1,.5],[.8,.95],[-.2,1.05],[-1.1,.8]],.42,`#e9edf5`,0,0,0),e.box(1.6,.05,.44,r,0,.75,0,{emissive:!0,glow:1.6})}},{id:`neonsign`,name:`Neon Sign`,points:180,tags:[`medium`],sound:`glass`,variants:5,heightFactor:.2,blurb:`OPEN. Now permanently CLOSED.`,build(e,t,n){let r=rd[n%5],i=rd[(n+2)%5];e.cylB(.08,.1,3.2,id,0,0,0,6),e.boxB(2.4,1.3,.2,`#11131f`,0,3,0),e.box(2.2,.1,.05,r,0,4.15,.12,{emissive:!0,glow:2}),e.box(2.2,.1,.05,r,0,3.15,.12,{emissive:!0,glow:2}),e.box(.1,1,.05,r,-1.1,3.65,.12,{emissive:!0,glow:2}),e.box(.1,1,.05,r,1.1,3.65,.12,{emissive:!0,glow:2}),n%2?e.torus(.32,.06,i,-.4,3.65,.12,{emissive:!0,glow:2,ts:14}):e.box(.6,.6,.05,i,-.4,3.65,.12,{emissive:!0,glow:2,rz:Math.PI/4}),e.box(.7,.12,.05,i,.5,3.85,.12,{emissive:!0,glow:2}),e.box(.7,.12,.05,i,.5,3.45,.12,{emissive:!0,glow:2})}},{id:`holokiosk`,name:`Holo Kiosk`,points:360,tags:[`commercial`],sound:`tech`,variants:3,heightFactor:.2,blurb:`Hologram: "please do not eat the kiosk."`,build(e,t,n){let r=rd[n%5];e.cylB(1.5,1.6,.4,id,0,0,0,12),e.cylB(1.3,1.3,1.1,`#d9dde6`,0,.4,0,12),e.cylB(1.32,1.32,.1,r,0,1,0,12,{emissive:!0,glow:1.6}),e.cylB(1.5,1.5,.15,ad,0,1.5,0,12),e.cylB(.6,1,2.4,r,0,1.65,0,10,{emissive:!0,glow:.55}),e.ico(.5,`#ffffff`,0,3,0,0,{emissive:!0,glow:1.4})}},{id:`pylon`,name:`Energy Pylon`,points:520,tags:[`building`],sound:`tech`,variants:2,heightFactor:.14,blurb:`All that energy, in one gulp.`,build(e,t,n){let r=rd[(n+1)%5];e.cylB(1.6,2,.6,id,0,0,0,6),e.cylB(.6,1.1,9,ad,0,.6,0,6);for(let t=0;t<4;t++)e.torus(1-t*.12,.08,r,0,2.5+t*2,0,{rx:Math.PI/2,emissive:!0,glow:2,ts:16});e.ico(.7,r,0,10.4,0,0,{emissive:!0,glow:2.2})}},{id:`servertower`,name:`Server Tower`,points:300,tags:[`medium`],sound:`tech`,variants:2,heightFactor:.2,blurb:`The cloud, grounded.`,build(e,t,n){e.boxB(1.4,3,1.2,id,0,0,0);for(let r=0;r<9;r++){e.box(1.2,.08,.02,`#2b2f48`,0,.35+r*.3,.61);for(let i=0;i<4;i++)t.chance(.6)&&e.box(.06,.06,.02,rd[(n+i)%5],-.45+i*.12,.45+r*.3,.62,{emissive:!0,glow:2})}}},{id:`neontree`,name:`Neon Tree`,points:200,tags:[`nature`],sound:`tech`,variants:3,heightFactor:.25,blurb:`Bio-luminescent bark, bite-sized.`,build(e,t,n){let r=rd[n%5];e.cylB(.15,.22,2.2,ad,0,0,0,6),e.ico(1.2,r,0,3,0,0,{emissive:!0,glow:.65}),e.ico(.7,`#ffffff`,.5,3.7,.3,0,{emissive:!0,glow:.45})}},{id:`satdish`,name:`Sat Dish`,points:260,tags:[`medium`],sound:`metal`,variants:1,heightFactor:.22,blurb:`Signal lost.`,build(e){e.boxB(1.4,.4,1.4,id,0,0,0),e.cylB(.12,.16,1.6,ad,0,.4,0,6),e.lathe([[0,0],[1.3,.4],[1.35,.5],[0,.1]],`#d9dde6`,0,2.1,0,14,{rx:-.7}),e.cyl(.03,.03,1,id,0,2.6,.4,4,{rx:-.7}),e.sphere(.1,`#3de8ff`,0,2.95,.75,{emissive:!0,glow:2})}}]);function od(e,t){e.cylB(.32,.38,.12,`#1d2033`,0,0,0,12),e.cylB(.34,.34,.03,t,0,.12,0,16,{emissive:!0,glow:1.8})}t([{id:`pw_time`,name:`Time Crystal`,points:500,tags:[`special`],power:`time`,sound:`tech`,variants:1,idle:`spin`,size:.01,noShadow:!0,blurb:`Swallow it to earn +6 seconds.`,build(e){od(e,`#3de8ff`),e.add(new oo(.26,0),`#3de8ff`,0,.6,0,{emissive:!0,glow:1.9,sy:1.5}),e.add(new oo(.15,0),`#ffffff`,0,.6,0,{emissive:!0,glow:2.2,sy:1.5})}},{id:`pw_magnet`,name:`Gravity Core`,points:500,tags:[`special`],power:`magnet`,sound:`tech`,variants:1,idle:`spin`,size:.01,noShadow:!0,blurb:`Pulls nearby objects into the hole for a while.`,build(e){od(e,`#ff3d9a`),e.sphere(.17,`#ff3d9a`,0,.6,0,{emissive:!0,glow:2}),e.torus(.3,.035,`#ffffff`,0,.6,0,{emissive:!0,glow:1.8,rx:1.2,ts:18}),e.torus(.3,.035,`#ffb3d6`,0,.6,0,{emissive:!0,glow:1.8,rx:-.4,rz:1,ts:18})}},{id:`pw_multi`,name:`Golden Star`,points:500,tags:[`special`],power:`multiplier`,sound:`tech`,variants:1,idle:`spin`,size:.01,noShadow:!0,blurb:`Doubles every point for a while.`,build(e){od(e,`#ffc94a`);let t=[];for(let e=0;e<10;e++){let n=e/10*Math.PI*2+Math.PI/2,r=e%2?.13:.32;t.push([Math.cos(n)*r,Math.sin(n)*r])}e.extrude(t,.12,`#ffc94a`,0,.62,0,{emissive:!0,glow:1.9})}},{id:`pw_surge`,name:`Void Surge`,points:500,tags:[`special`],power:`surge`,sound:`tech`,variants:1,idle:`spin`,size:.01,noShadow:!0,blurb:`Temporarily makes the hole much bigger.`,build(e){od(e,`#7b5cff`),e.ico(.26,`#7b5cff`,0,.6,0,0,{emissive:!0,glow:2}),e.ico(.14,`#ffffff`,0,.6,0,0,{emissive:!0,glow:2});for(let t=0;t<3;t++)e.torus(.36,.02,`#c4b5ff`,0,.6,0,{emissive:!0,glow:1.6,rx:t,ry:t*1.3,ts:18})}},{id:`coin`,name:`Void Coin`,points:15,tags:[`chain`,`small`],sound:`tech`,variants:1,idle:`spin`,size:.01,noShadow:!0,blurb:`Collect a full trail for a chain bonus.`,build(e){e.cyl(.16,.16,.04,`#ffc94a`,0,.32,0,14,{rx:Math.PI/2,emissive:!0,glow:1.5}),e.cyl(.1,.1,.05,`#fff1b8`,0,.32,0,14,{rx:Math.PI/2,emissive:!0,glow:1.8})}},{id:`secret_duck`,name:`Golden Duck`,points:1e3,tags:[`secret`],sound:`tech`,variants:1,idle:`bob`,size:.01,blurb:`A secret hidden somewhere in every world.`,build(e){let t=`#ffc94a`;e.sphere(.15,t,0,.13,0,{sx:1.25,sy:.85,w:10,emissive:!0,glow:1.2}),e.sphere(.1,t,.09,.3,0,{w:9,emissive:!0,glow:1.2}),e.box(.08,.03,.07,`#ff8a2a`,.2,.29,0),e.sphere(.018,`#26262c`,.16,.33,.06,{w:5,hs:4}),e.sphere(.018,`#26262c`,.16,.33,-.06,{w:5,hs:4})}}]);var sd=[`#ff3d6e`,`#ffc94a`,`#3db8ff`,`#7b5cff`,`#3fd58a`,`#ff8a2a`];function cd(e,t,n,r,i=`#fff1b8`){for(let a=0;a<r;a++){let o=a/r*Math.PI*2;e.sphere(.07,i,Math.cos(o)*t,n,Math.sin(o)*t,{emissive:!0,glow:1.3,w:5,hs:4})}}t([{id:`balloon`,name:`Helium Balloon`,points:12,tags:[`small`],sound:`plastic`,variants:6,idle:`bob`,heightFactor:.08,blurb:`It wanted to fly. It fell instead.`,build(e,t,n){let r=sd[n%sd.length];e.cylB(.006,.006,1.25,`#f4f4f0`,0,0,0,4),e.sphere(.24,r,0,1.5,0,{sy:1.2}),e.cone(.05,.08,r,0,1.22,0,6,{rx:Math.PI})}},{id:`icecream`,name:`Ice Cream Cone`,points:10,tags:[`small`],sound:`organic`,variants:3,blurb:`Melting into the void.`,build(e,t,n){e.cone(.08,.22,`#d9a35f`,0,.11,0,10,{rx:Math.PI}),e.sphere(.09,[`#ffb6d0`,`#fff1d6`,`#8b5a3c`][n%3],0,.26,0),e.sphere(.07,[`#fff1d6`,`#ffb6d0`,`#ffd23f`][n%3],.01,.36,0)}},{id:`balloonstand`,name:`Balloon Cart`,points:80,tags:[`medium`],sound:`plastic`,variants:2,heightFactor:.15,blurb:`A whole bouquet of lift, cancelled.`,build(e,t){e.boxB(.9,.6,.6,`#f4f4f0`,0,.2,0),e.wheel(.2,.08,-.25,.2,.33),e.wheel(.2,.08,-.25,.2,-.33);for(let n=0;n<9;n++){let r=t.range(-.6,.6),i=t.range(-.6,.6),a=t.range(1.6,2.4);e.cylB(.006,.006,a-.8,`#f4f4f0`,r*.3,.8,i*.3,4),e.sphere(.26,sd[n%sd.length],r,a,i,{sy:1.2})}}},{id:`bumpercar`,name:`Bumper Car`,points:70,tags:[`medium`,`vehicle`],sound:`metal`,variants:5,idle:`robot`,blurb:`Bump. Bump. Gulp.`,build(e,t,n){let r=sd[n%sd.length];e.boxB(1.3,.25,.9,`#2c2f3a`,0,.05,0),e.torus(.55,.1,`#2c2f3a`,0,.2,0,{rx:Math.PI/2,sx:1.25}),e.boxB(1.1,.35,.8,r,0,.3,0),e.boxB(.35,.45,.7,r,-.35,.55,0),e.boxB(.3,.12,.55,`#26262c`,.05,.65,0),e.cylB(.02,.02,1.6,i.metal,-.45,.6,0,6),e.sphere(.08,`#ffd23f`,.5,.6,0,{emissive:!0,glow:1.2})}},{id:`popcorn`,name:`Popcorn Cart`,points:220,tags:[`commercial`],sound:`metal`,variants:2,blurb:`Pop. Pop. Void.`,build(e,t,n){let r=n?`#3db8ff`:`#e8423f`;e.boxB(1.3,.8,.8,r,0,.35,0),e.wheel(.3,.1,-.35,.3,.45),e.wheel(.3,.1,-.35,.3,-.45),e.boxB(1,.75,.6,`#d8f3ff`,0,1.15,0),e.boxB(.9,.35,.5,`#ffe18a`,0,1.17,0),e.boxB(1.1,.1,.7,r,0,1.9,0),Yu(e,.75,.45,2,10,r,i.white)}},{id:`cottoncandy`,name:`Candy Floss Cart`,points:220,tags:[`commercial`],sound:`soft`,variants:2,blurb:`Sugar clouds, sucked in.`,build(e,t,n){let r=n?`#7b5cff`:`#ff7eb6`;e.boxB(1.4,.9,.8,`#f4f4f0`,0,.3,0),e.box(1.42,.25,.82,r,0,.9,0),e.wheel(.28,.1,.4,.28,.45),e.wheel(.28,.1,.4,.28,-.45),e.cylB(.4,.3,.3,i.metal,0,1.2,0,12);for(let t=0;t<5;t++){let n=-.5+t*.25;e.cylB(.012,.012,.5,`#f4f4f0`,n,1.2,-.3,4),e.sphere(.16,t%2?`#ffc2dc`:`#c9b8ff`,n,1.8,-.3,{sy:1.2})}e.cylB(.03,.03,1.3,i.white,.6,1.2,.3,6),Yu(e,.9,.4,2.45,10,r,i.white,.6,.3)}},{id:`ticketbooth`,name:`Ticket Booth`,points:300,tags:[`commercial`],sound:`wood`,variants:2,heightFactor:.2,blurb:`Admit one. Into the hole.`,build(e,t,n){let r=n?`#3fd58a`:`#ffc94a`;e.cylB(1,1.05,2.2,r,0,0,0,12),e.box(.9,.7,.03,`#fff3c4`,0,1.35,1,{emissive:!0,glow:1.05}),e.boxB(1,.08,.35,i.white,0,.95,1.05),e.cylB(1.2,1.2,.15,i.white,0,2.2,0,12),Yu(e,1.25,.9,2.35,12,`#e8423f`,i.white),e.sphere(.12,`#ffc94a`,0,3.35,0,{emissive:!0,glow:1.3}),cd(e,1.22,2.28,12)}},{id:`gamebooth`,name:`Prize Booth`,points:340,tags:[`commercial`],sound:`wood`,variants:3,heightFactor:.2,blurb:`Everybody wins. Especially the hole.`,build(e,t,n){let r=sd[n*2%sd.length];e.boxB(3,1,1.6,r,0,0,0),e.boxB(3.1,.1,1.8,i.white,0,1,.05);for(let t of[-1.45,1.45])for(let n of[-.75,.75])e.boxB(.1,2.6,.1,i.white,t,0,n);e.boxB(3,1.6,.1,`#2c2f3a`,0,1,-.75);for(let n=0;n<12;n++){let r=-1.2+n%6*.48,i=1.25+Math.floor(n/6)*.55;e.sphere(.17,t.pick([`#b07a4f`,`#ff9ec8`,`#9fd3ff`,`#ffd23f`]),r,i,-.6)}Xu(e,3.3,1.2,2.6,.25,i.white,r,0,.3),e.box(1.6,.4,.06,`#ffc94a`,0,3,.85,{emissive:!0,glow:1.2})}},{id:`teacups`,name:`Teacup Ride`,points:800,tags:[`ride`],sound:`glass`,variants:1,heightFactor:.2,blurb:`Spinning straight down.`,build(e){e.cylB(3.9,4,.3,`#f4f4f0`,0,0,0,24),e.cylB(3.6,3.6,.05,`#ff9ec8`,0,.3,0,24);for(let t=0;t<4;t++){let n=t/4*Math.PI*2+.4,r=Math.cos(n)*2.3,i=Math.sin(n)*2.3,a=sd[t%sd.length];e.lathe([[0,0],[.4,0],[.9,.35],[1.05,.95],[.98,.95],[.85,.42],[0,.42]],a,r,.35,i,14),e.torus(.28,.07,a,r+1.1*Math.cos(n),.95,i+1.1*Math.sin(n),{ry:-n,ts:10}),e.cylB(.5,.5,.25,`#f4f4f0`,r,.75,i,12)}e.sphere(.9,`#ffffff`,0,1,0,{sy:.85}),e.sphere(.25,`#ff7eb6`,0,1.85,0),e.cyl(.12,.2,.9,`#ffffff`,.95,1.2,0,8,{rz:-1}),cd(e,3.85,.32,24)}},{id:`carousel`,name:`Carousel`,points:1300,tags:[`ride`],sound:`metal`,variants:2,heightFactor:.2,blurb:`Round and round and down.`,build(e,t,n){let r=n?`#3db8ff`:`#e8423f`;e.cylB(4.8,5,.5,`#f4e3c1`,0,0,0,28),e.cylB(4.6,4.6,.06,`#c96f5a`,0,.5,0,28),e.cylB(.9,.9,3.6,`#ffc94a`,0,.5,0,16);for(let n=0;n<10;n++){let i=n/10*Math.PI*2,a=Math.cos(i)*3.5,o=Math.sin(i)*3.5;e.cylB(.05,.05,3.6,`#ffe18a`,a,.5,o,6);let s=1.2+n%2*.35;e.push(a,s,o,-i);let c=t.pick([`#ffffff`,`#f2d7a6`,`#b07a4f`,`#d9d2c4`]);e.box(.28,.45,1,c,0,.25,0),e.box(.2,.5,.25,c,0,.6,.5,{rx:-.5}),e.box(.08,.5,.08,c,.1,-.15,.35),e.box(.08,.5,.08,c,-.1,-.15,-.35),e.box(.3,.1,.35,r,0,.5,0),e.pop()}e.cylB(5,5,.6,r,0,4,0,28),e.cylB(5.02,5.02,.12,`#ffc94a`,0,4.25,0,28),Yu(e,5.2,2.2,4.6,20,r,`#ffffff`),e.cylB(.08,.08,1,`#ffc94a`,0,6.7,0,6),e.sphere(.3,`#ffc94a`,0,7.8,0,{emissive:!0,glow:1.3}),cd(e,5.05,4.3,28)}},{id:`ferriswheel`,name:`Ferris Wheel`,points:3200,tags:[`ride`,`landmark`],sound:`heavy`,variants:1,heightFactor:.1,blurb:`The best view in town, now from below.`,build(e){let t=7.4,n=9.2;for(let t of[-1.4,1.4])e.box(.35,10.2,.35,`#f4f4f0`,-2.4,4.6,t,{rz:-.27}),e.box(.35,10.2,.35,`#f4f4f0`,2.4,4.6,t,{rz:.27});e.boxB(7.6,.4,3.6,`#c4bdae`,0,0,0),e.cyl(.45,.45,3.2,`#ffc94a`,0,n,0,14,{rx:Math.PI/2});for(let r of[-.75,.75]){e.torus(t,.13,`#ff3d6e`,0,n,r,{ts:48,rs:6}),e.torus(t*.55,.08,`#ffffff`,0,n,r,{ts:32,rs:6});for(let i=0;i<12;i++){let a=i/12*Math.PI*2;e.box(.08,t,.08,`#ffffff`,Math.cos(a)*t*.5,n+Math.sin(a)*t*.5,r,{rz:a-Math.PI/2})}}for(let r=0;r<12;r++){let i=r/12*Math.PI*2,a=Math.cos(i)*t,o=n+Math.sin(i)*t;e.box(.06,.6,.06,`#d9d2c4`,a,o-.3,0),e.boxB(.95,.8,1.1,sd[r%sd.length],a,o-1.35,0),e.cone(.65,.3,sd[(r+2)%sd.length],a,o-.4,0,4,{ry:Math.PI/4}),e.sphere(.12,`#fff1b8`,a,o,.85,{emissive:!0,glow:1.4,w:6,hs:4}),e.sphere(.12,`#fff1b8`,a,o,-.85,{emissive:!0,glow:1.4,w:6,hs:4})}}}]);var ld=[`#e8423f`,`#3d7bf0`,`#7b5cff`,`#22c3b5`,`#ff8a2a`];function ud(e,t,n,r,i,a){e.cyl(n,n,t*.7,i,0,r,0,14,{rz:Math.PI/2}),e.cyl(n*.25,n,t*.17,i,t*.435,r,0,14,{rz:-Math.PI/2}),e.sphere(n*.25,i,t*.52,r,0),e.cyl(n*.98,n*.28,t*.25,i,-t*.475,r+n*.25,0,14,{rz:-Math.PI/2});for(let i of[-1,1])e.box(t*.82,n*.28,.03,a,-t*.02,r-n*.18,i*n*.99);e.box(n*.5,n*.3,n*1.4,`#1d2840`,t*.42,r+n*.45,0,{rz:-.5});for(let i=0;i<Math.floor(t*.9);i++){let a=-t*.3+i*.6;if(a>t*.32)break;e.box(.25,.2,.02,`#1d2840`,a,r+n*.35,n*.97),e.box(.25,.2,.02,`#1d2840`,a,r+n*.35,-n*.97)}}t([{id:`suitcase`,name:`Suitcase`,points:15,tags:[`small`],sound:`plastic`,variants:6,blurb:`Lost luggage, found by the void.`,build(e,t,n){let r=[`#2c2f3a`,`#e8423f`,`#3d7bf0`,`#ffd23f`,`#22c3b5`,`#a59bd1`][n%6];e.boxB(.45,.62,.26,r,0,.06,0);for(let t of[-.12,.12])e.boxB(.03,.62,.27,`#1d1f26`,t,.06,0);e.boxB(.04,.2,.04,i.metal,-.12,.68,0),e.boxB(.04,.2,.04,i.metal,.12,.68,0),e.boxB(.28,.04,.05,i.black,0,.86,0);for(let t of[-.17,.17])e.cyl(.04,.04,.04,i.black,t,.04,.08,8,{rx:Math.PI/2})}},{id:`windsock`,name:`Windsock`,points:45,tags:[`small`],sound:`soft`,variants:1,heightFactor:.12,blurb:`Wind direction: towards the hole.`,build(e){e.cylB(.05,.06,3.2,i.white,0,0,0,6);for(let t=0;t<4;t++)e.cyl(.24-t*.04,.2-t*.04,.35,t%2?i.white:i.orange,.18+t*.35,3.1,0,10,{rz:Math.PI/2+.15})}},{id:`runwaylight`,name:`Runway Light`,points:8,tags:[`small`],sound:`glass`,variants:2,noShadow:!0,blurb:`Cleared for swallowing.`,build(e,t,n){e.cylB(.09,.11,.12,`#4a4f5c`,0,0,0,8),e.sphere(.07,n?`#3db8ff`:`#ffe18a`,0,.14,0,{emissive:!0,glow:1.6})}},{id:`uld`,name:`Cargo Container`,points:70,tags:[`medium`],sound:`metal`,variants:2,blurb:`Air freight, ground delivery.`,build(e,t,n){e.extrude([[-.8,0],[.8,0],[.8,1.6],[-.4,1.6],[-.8,1]],1.5,n?`#c9ccd6`:`#a7abb5`,0,0,0),e.box(1.2,1.2,.02,`#3d7bf0`,.15,.8,.76)}},{id:`baggagecart`,name:`Baggage Cart`,points:110,tags:[`medium`,`vehicle`],sound:`metal`,variants:3,blurb:`Every bag, all at once.`,build(e,t){e.boxB(2.4,.15,1.3,`#4a4f5c`,0,.3,0);for(let t of[-1.1,1.1])e.boxB(.08,.9,1.3,`#7d8596`,t,.45,0);for(let t of[-.8,.8])for(let n of[-.6,.6])e.wheel(.18,.12,t,.18,n);e.box(.8,.06,.06,`#4a4f5c`,1.6,.3,0);for(let n=0;n<6;n++){let r=t.pick([`#2c2f3a`,`#e8423f`,`#3d7bf0`,`#ffd23f`,`#22c3b5`]);e.boxB(.6,.25,.45,r,-.7+n%3*.7,.45+Math.floor(n/3)*.27,t.range(-.3,.3),{ry:t.range(-.2,.2)})}}},{id:`tug`,name:`Baggage Tug`,points:170,tags:[`vehicle`],sound:`metal`,variants:3,blurb:`Tugged into the abyss.`,build(e,t,n){let r=[`#ffc61a`,`#ff8a2a`,`#3d7bf0`][n%3];e.boxB(2.3,.6,1.4,r,0,.3,0),e.boxB(.9,.8,1.3,`#2c2f3a`,-.5,.9,0),e.boxB(1,.08,1.4,r,-.5,1.7,0);for(let t of[-.9,.9])e.boxB(.08,.8,.08,`#2c2f3a`,t*.5-.5,.9,.62);for(let t of[-.75,.75])for(let n of[-.65,.65])e.wheel(.3,.22,t,.3,n);e.sphere(.1,`#ff8a2a`,-.5,1.82,0,{emissive:!0,glow:1.8})}},{id:`stairtruck`,name:`Stair Truck`,points:360,tags:[`vehicle`],sound:`metal`,variants:2,blurb:`A stairway to nowhere.`,build(e,t,n){let r=n?`#f4f4f0`:`#ffc61a`;e.boxB(5.2,.5,2,`#4a4f5c`,0,.45,0),e.boxB(1.5,1.4,2,r,1.9,.95,0),e.box(.04,.6,1.7,i.darkGlass,2.66,1.85,0);for(let t of[1.8,-1.6])for(let n of[-.9,.9])e.wheel(.42,.28,t,.42,n);e.box(4.6,.12,1.2,`#aeb4c2`,-.8,2.3,0,{rz:.42});for(let t=0;t<12;t++)e.box(.14,.05,1.2,`#7d8596`,-2.8+t*.36,1.4+t*.16,0);for(let t of[-.62,.62])e.box(4.6,.06,.06,r,-.8,3.2,t,{rz:.42});e.boxB(1.4,.1,1.3,`#aeb4c2`,1.4,3.3,0)}},{id:`fueltruck`,name:`Fuel Bowser`,points:520,tags:[`vehicle`,`industrial`],sound:`heavy`,variants:2,blurb:`Fully refuelled hunger.`,build(e,t,n){let r=n?`#f4f4f0`:`#ff8a2a`;e.boxB(2,2,2.4,r,3,.6,0),e.box(.04,.9,2.1,i.darkGlass,4.01,2,0),e.boxB(7.4,.3,2.2,`#4a4f5c`,-.6,.6,0),e.cyl(1.15,1.15,5.4,`#e9eef2`,-1.1,2.05,0,16,{rz:Math.PI/2}),e.sphere(1.15,`#e9eef2`,1.6,2.05,0,{sx:.3}),e.sphere(1.15,`#e9eef2`,-3.8,2.05,0,{sx:.3}),e.cyl(1.17,1.17,.5,r,-1.1,2.05,0,16,{rz:Math.PI/2});for(let t of[3,-1.4,-2.7])for(let n of[-1,1])e.wheel(.5,.32,t,.5,n);e.box(4.4,.05,.5,`#7d8596`,-1.1,3.22,0)}},{id:`propplane`,name:`Prop Plane`,points:950,tags:[`aircraft`,`vehicle`],sound:`heavy`,variants:4,blurb:`Grounded. Permanently.`,build(e,t,n){let r=ld[n%ld.length];ud(e,8,.75,1.4,`#f4f4f0`,r),e.box(1.4,.14,10,`#f4f4f0`,.6,1.75,0),e.box(1.42,.15,1.2,r,.6,1.76,4.4),e.box(1.42,.15,1.2,r,.6,1.76,-4.4),e.box(.9,.1,3.4,`#f4f4f0`,-3.6,1.75,0),e.extrude([[0,0],[1.2,0],[.4,1.6],[-.1,1.6]],.12,r,-3.9,1.7,0),e.box(.1,1.9,.18,`#26262c`,4.2,1.4,0),e.box(.1,.18,1.9,`#26262c`,4.2,1.4,0),e.cyl(.04,.04,.9,`#4a4f5c`,1.2,.85,.9,6),e.cyl(.04,.04,.9,`#4a4f5c`,1.2,.85,-.9,6),e.wheel(.3,.16,1.2,.3,.9),e.wheel(.3,.16,1.2,.3,-.9),e.wheel(.18,.1,-3.4,.55,0)}},{id:`helicopter`,name:`Helicopter`,points:800,tags:[`aircraft`,`vehicle`],sound:`heavy`,variants:3,heightFactor:.2,blurb:`Rotors stopped. Forever.`,build(e,t,n){let r=[`#e8423f`,`#2c2f3a`,`#ffc61a`][n%3];for(let t of[-.8,.8])e.box(3.4,.1,.1,`#26262c`,0,.12,t),e.box(.08,.5,.08,`#26262c`,-.6,.35,t),e.box(.08,.5,.08,`#26262c`,.7,.35,t);e.sphere(1,r,.3,1.35,0,{sx:1.45,sy:.85,sz:.85}),e.sphere(.72,`#1d2840`,1,1.45,0,{sx:.9,sy:.75,sz:.85}),e.cyl(.15,.35,3.6,r,-2.6,1.55,0,10,{rz:Math.PI/2}),e.box(.6,.9,.08,r,-4.3,1.9,0),e.box(.08,.7,.04,`#26262c`,-4.35,1.95,.12),e.cylB(.12,.12,.45,`#26262c`,.3,2.1,0,8),e.box(10,.05,.3,`#26262c`,.3,2.6,0,{ry:.4}),e.box(10,.05,.3,`#26262c`,.3,2.6,0,{ry:.4+Math.PI/2})}},{id:`jet`,name:`Regional Jet`,points:3e3,tags:[`aircraft`,`vehicle`,`landmark`],sound:`heavy`,variants:3,heightFactor:.1,blurb:`Flight cancelled due to hole.`,build(e,t,n){let r=ld[(n+1)%ld.length];ud(e,18,1.35,2.6,`#f4f4f0`,r);for(let t of[-1,1])e.extrude([[0,0],[2.6,0],[.4,8.6*t],[-1,8.6*t]],.22,`#e9edf5`,.6,2.1,0,{rx:-Math.PI/2}),e.cyl(.55,.5,2.6,`#c9ccd6`,.9,1.45,t*3.2,14,{rz:Math.PI/2}),e.cyl(.4,.4,.1,`#26262c`,2.21,1.45,t*3.2,14,{rz:Math.PI/2}),e.box(.12,.8,.12,`#aeb4c2`,1.2,1.8,t*3.2);e.extrude([[0,0],[2.6,0],[.5,4.2],[-.6,4.2]],.25,r,-8.4,3.4,0),e.extrude([[0,0],[1.6,0],[.4,3.4],[-.4,3.4]],.16,`#e9edf5`,-8.2,7.4,0,{rx:-Math.PI/2}),e.extrude([[0,0],[1.6,0],[.4,-3.4],[-.4,-3.4]],.16,`#e9edf5`,-8.2,7.4,0,{rx:-Math.PI/2}),e.wheel(.45,.3,.2,.45,1.3),e.wheel(.45,.3,.2,.45,-1.3),e.wheel(.32,.2,7,.32,0);for(let t of[-1.3,1.3])e.box(.15,1.2,.15,`#7d8596`,.2,1.1,t);e.box(.15,1.3,.15,`#7d8596`,7,1,0)}},{id:`controltower`,name:`Control Tower`,points:2400,tags:[`building`,`landmark`],sound:`heavy`,variants:1,heightFactor:.16,blurb:`Tower to hole: you are cleared to land.`,build(e){e.cylB(3.2,3.4,1,`#c4bdae`,0,0,0,16),e.cylB(1.5,2,15,`#e9e4da`,0,1,0,16);for(let t=0;t<6;t++)e.cylB(1.55,1.55,.25,`#cfc8b8`,0,3+t*2.2,0,16);e.cylB(2.6,1.8,1.4,`#e9e4da`,0,16,0,8),e.cylB(3,2.7,2.6,`#7fc4ea`,0,17.4,0,8);for(let t=0;t<8;t++){let n=t/8*Math.PI*2+Math.PI/8;e.box(.14,2.6,.14,`#4a4f5c`,Math.cos(n)*2.85,18.7,Math.sin(n)*2.85)}e.cylB(3.3,3.1,.5,`#4a4f5c`,0,20,0,8),e.cylB(.1,.1,3,`#c9ccd6`,.8,20.5,0,6),e.sphere(.25,`#ff3045`,.8,23.6,0,{emissive:!0,glow:2}),e.boxB(1.2,.8,1.2,`#aeb4c2`,-1.2,20.5,.6)}}]);var dd={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},fd=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},pd=new ls(-1,1,1,-1,0,1),md=new class extends Ir{constructor(){super(),this.setAttribute(`position`,new J([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new J([0,2,0,0,2,0],2))}},hd=class{constructor(e){this._mesh=new oi(md,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pd)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},gd=class extends fd{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof So?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=yo.clone(e.uniforms),this.material=new So({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new hd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},_d=class extends fd{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},vd=class extends fd{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},yd=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new U);this._width=n.width,this._height=n.height,t=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:E}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gd(dd),this.copyPass.material.blending=0,this.timer=new gs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}_d!==void 0&&(r instanceof _d?n=!0:r instanceof vd&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new U);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},bd=class extends fd{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new q}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},xd={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new q(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Sd=class e extends fd{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new U(256,256):new U(e.x,e.y),this.clearColor=new q(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(i,a,{type:E,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new nn(i,a,{type:E,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new nn(i,a,{type:E,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=xd;this.highPassUniforms=yo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new So({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new U(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=yo.clone(dd.uniforms),this.blendMaterial=new So({uniforms:this.copyUniforms,vertexShader:dd.vertexShader,fragmentShader:dd.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new q,this._oldClearAlpha=1,this._basic=new Jr,this._fsQuad=new hd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new U(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new So({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new U(.5,.5)},direction:{value:new U(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new So({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Sd.BlurDirectionX=new U(1,0),Sd.BlurDirectionY=new U(0,1);var Cd={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},wd=class extends fd{constructor(){super(),this.isOutputPass=!0,this.uniforms=yo.clone(Cd.uniforms),this.material=new Co({name:Cd.name,uniforms:this.uniforms,vertexShader:Cd.vertexShader,fragmentShader:Cd.fragmentShader}),this._fsQuad=new hd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},K.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Td=class extends Un{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new Fi;e.deleteAttribute(`uv`);let t=new wo({side:1}),n=new wo,r=new cs(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new oi(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new vi(e,n,6),o=new Nn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new oi(e,Ed(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new oi(e,Ed(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new oi(e,Ed(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new oi(e,Ed(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new oi(e,Ed(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new oi(e,Ed(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ed(e){return new To({color:0,emissive:16777215,emissiveIntensity:e})}var Dd={uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uSat:{value:1.08},uFlash:{value:0},uFlashColor:{value:new q(1,1,1)}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uVignette; uniform float uSat; uniform float uFlash; uniform vec3 uFlashColor;
    varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(l), c.rgb, uSat);
      vec2 d = vUv - 0.5;
      float v = 1.0 - dot(d, d) * uVignette * 2.2;
      c.rgb *= clamp(v, 0.0, 1.0);
      c.rgb = mix(c.rgb, uFlashColor, uFlash);
      gl_FragColor = c;
    }`},Od=class{renderer;canvas;quality=`high`;composer=null;renderPass=null;bloom=null;grade=null;bloomSettings={strength:.4,radius:.5,threshold:.88};loopFn=null;last=0;running=!1;width=1;height=1;flash=0;flashColor=new q(1,1,1);contextLost=!1;headless=!1;constructor(e){this.canvas=e,this.renderer=new Ju({canvas:e,antialias:!0,powerPreference:`high-performance`,stencil:!1,preserveDrawingBuffer:!1}),this.renderer.outputColorSpace=Ke,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,e.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),this.contextLost=!0}),e.addEventListener(`webglcontextrestored`,()=>{this.contextLost=!1,this.setQuality(this.quality)}),window.addEventListener(`resize`,()=>this.resize()),window.visualViewport?.addEventListener(`resize`,()=>this.resize()),this.resize()}env=null;get envMap(){if(!this.env){let e=new tc(this.renderer);this.env=e.fromScene(new Td,.04).texture,e.dispose()}return this.env}get maxAnisotropy(){return this.renderer.capabilities.getMaxAnisotropy()}setQuality(e){this.quality=e;let t=window.devicePixelRatio||1,n=e===`low`?Math.min(t,1.25):e===`medium`?Math.min(t,2):Math.min(t,2.5);if(this.renderer.setPixelRatio(n),this.renderer.shadowMap.type=1,this.renderer.shadowMap.needsUpdate=!0,this.composer&&(this.composer.dispose(),this.composer=null,this.bloom?.dispose(),this.bloom=null),e!==`low`){let e=this.renderer.getDrawingBufferSize(new U),t=new nn(e.x,e.y,{type:E,samples:4});this.composer=new yd(this.renderer,t),this.renderPass=new bd(new Un,new os),this.composer.addPass(this.renderPass),this.bloom=new Sd(new U(this.width/2,this.height/2),.4,.5,.88),this.composer.addPass(this.bloom),this.composer.addPass(new wd),this.grade=new gd(Dd),this.composer.addPass(this.grade),this.applyBloom()}this.resize()}get shadowSize(){return this.quality===`low`?1024:this.quality===`medium`?2048:4096}setBloom(e){Object.assign(this.bloomSettings,e),this.applyBloom()}applyBloom(){this.bloom&&(this.bloom.strength=this.bloomSettings.strength,this.bloom.radius=this.bloomSettings.radius,this.bloom.threshold=this.bloomSettings.threshold)}resize(){let e=window.visualViewport,t=Math.max(1,Math.floor(e?e.width:window.innerWidth)),n=Math.max(1,Math.floor(e?e.height:window.innerHeight));this.width=t,this.height=n,this.renderer.setSize(t,n,!1),this.canvas.style.width=t+`px`,this.canvas.style.height=n+`px`,this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,n),this.bloom?.resolution.set(t/2,n/2))}render(e,t){this.headless||this.contextLost||(this.composer&&this.renderPass&&this.grade?(this.renderPass.scene=e,this.renderPass.camera=t,this.grade.uniforms.uFlash.value=this.flash,this.grade.uniforms.uFlashColor.value.copy(this.flashColor),this.composer.render()):this.renderer.render(e,t))}start(e){if(this.loopFn=e,this.running)return;this.running=!0,this.last=performance.now();let t=e=>{if(!this.running)return;requestAnimationFrame(t);let n=(e-this.last)/1e3;this.last=e,n>.1&&(n=.1),n<=0&&(n=1/60),this.flash=Math.max(0,this.flash-n*2.5),this.loopFn?.(n,e)};requestAnimationFrame(t)}},kd=(e,t,n)=>e<t?t:e>n?n:e,Ad=(e,t,n)=>e+(t-e)*n,jd=(e,t)=>1-Math.exp(-e*t),Md=class{s;constructor(e=1){this.s=e>>>0||1}next(){let e=this.s+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.next()*e.length)]}chance(e){return this.next()<e}sign(){return this.next()<.5?-1:1}};function Nd(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}var Pd=()=>typeof window<`u`&&(`ontouchstart`in window||navigator.maxTouchPoints>0);function Fd(e){return Math.round(e).toLocaleString(`en-US`)}function Id(e){let t=Math.max(0,Math.ceil(e));return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,`0`)}`}var Ld=class{keys=new Set;mouseDown=!1;mouseX=0;mouseY=0;mouseSteering=!0;holeScreen={x:0,y:0};joyId=null;joyOrigin={x:0,y:0};joyVec={x:0,y:0};joyEl=null;joyKnob=null;joyRadius=60;enabled=!1;lastDevice=`keyboard`;onPause=null;onAnyInput=null;constructor(e){window.addEventListener(`keydown`,e=>{(!e.repeat||e.code!==`Escape`&&e.code!==`KeyP`)&&(e.code===`Escape`||e.code===`KeyP`?this.onPause?.():Rd.has(e.code)&&(this.enabled&&e.preventDefault(),this.keys.add(e.code),this.lastDevice=`keyboard`,this.onAnyInput?.()))}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>this.reset()),e.addEventListener(`pointerdown`,e=>this.down(e)),window.addEventListener(`pointermove`,e=>this.move(e)),window.addEventListener(`pointerup`,e=>this.up(e)),window.addEventListener(`pointercancel`,e=>this.up(e)),e.addEventListener(`contextmenu`,e=>e.preventDefault())}attachJoystick(e,t){this.joyEl=e,this.joyKnob=t}reset(){this.keys.clear(),this.mouseDown=!1,this.releaseJoy()}down(e){if(this.enabled){if(e.pointerType===`mouse`){if(e.button!==0)return;this.mouseDown=!0,this.mouseX=e.clientX,this.mouseY=e.clientY,this.lastDevice=`mouse`,this.onAnyInput?.()}else this.joyId===null&&(e.preventDefault(),this.joyId=e.pointerId,this.joyOrigin={x:e.clientX,y:e.clientY},this.joyVec={x:0,y:0},this.lastDevice=`touch`,this.joyRadius=kd(Math.min(window.innerWidth,window.innerHeight)*.11,46,78),this.joyEl&&(this.joyEl.classList.add(`active`),this.joyEl.style.left=`${e.clientX}px`,this.joyEl.style.top=`${e.clientY}px`,this.joyEl.style.setProperty(`--joy-r`,`${this.joyRadius}px`)),this.updateKnob(),this.onAnyInput?.())}}move(e){if(e.pointerType===`mouse`){this.mouseX=e.clientX,this.mouseY=e.clientY;return}if(e.pointerId!==this.joyId)return;let t=e.clientX-this.joyOrigin.x,n=e.clientY-this.joyOrigin.y,r=Math.hypot(t,n),i=this.joyRadius;if(r>i){let a=r-i;this.joyOrigin.x+=t/r*a,this.joyOrigin.y+=n/r*a,t=e.clientX-this.joyOrigin.x,n=e.clientY-this.joyOrigin.y,this.joyEl&&(this.joyEl.style.left=`${this.joyOrigin.x}px`,this.joyEl.style.top=`${this.joyOrigin.y}px`)}this.joyVec={x:t/i,y:n/i},this.updateKnob()}up(e){e.pointerType===`mouse`?e.button===0&&(this.mouseDown=!1):e.pointerId===this.joyId&&this.releaseJoy()}releaseJoy(){this.joyId=null,this.joyVec={x:0,y:0},this.joyEl?.classList.remove(`active`),this.updateKnob()}updateKnob(){if(!this.joyKnob)return;let e=this.joyRadius;this.joyKnob.style.transform=`translate(calc(-50% + ${this.joyVec.x*e}px), calc(-50% + ${this.joyVec.y*e}px))`}getMove(){let e=0,t=0;if((this.keys.has(`KeyA`)||this.keys.has(`ArrowLeft`))&&--e,(this.keys.has(`KeyD`)||this.keys.has(`ArrowRight`))&&(e+=1),(this.keys.has(`KeyW`)||this.keys.has(`ArrowUp`))&&--t,(this.keys.has(`KeyS`)||this.keys.has(`ArrowDown`))&&(t+=1),e||t){let n=Math.hypot(e,t);return{x:e/n,y:t/n}}if(this.joyId!==null){let e=Math.hypot(this.joyVec.x,this.joyVec.y);if(e<.12)return{x:0,y:0};let t=Math.min(1,(e-.12)/.75);return{x:this.joyVec.x/e*t,y:this.joyVec.y/e*t}}if(this.mouseDown&&this.mouseSteering){let e=this.mouseX-this.holeScreen.x,t=this.mouseY-this.holeScreen.y,n=Math.hypot(e,t);if(n<12)return{x:0,y:0};let r=Math.min(1,(n-12)/(Math.min(window.innerWidth,window.innerHeight)*.22));return{x:e/n*r,y:t/n*r}}return{x:0,y:0}}},Rd=new Set([`KeyW`,`KeyA`,`KeyS`,`KeyD`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`]),zd=class{camera;target=new W;dist=10;pitch=It.degToRad(56);yaw=0;trauma=0;fovKick=0;baseFov=42;shakeEnabled=!0;zoomMul=1;zoomMulTarget=1;orbit=0;time=0;bounds={minX:-50,maxX:50,minZ:-50,maxZ:50};constructor(e){this.camera=new os(this.baseFov,e,.1,800)}distanceFor(e,t){let n=2.9+e*8+Math.sqrt(e)*1.9;return t<1?n*(1+(1-t)*.75):n}snap(e,t,n){this.target.set(e,0,t),this.dist=this.distanceFor(n,this.camera.aspect),this.apply()}addTrauma(e){this.shakeEnabled&&(this.trauma=Math.min(1,this.trauma+e))}kickFov(e){this.fovKick=Math.max(this.fovKick,e)}setZoom(e){this.zoomMulTarget=e}update(e,t,n,r,i,a){this.time+=e;let o=t+r*.22,s=n+i*.22,c=jd(4.2,e);this.target.x=Ad(this.target.x,o,c),this.target.z=Ad(this.target.z,s,c);let l=this.bounds;this.target.x=kd(this.target.x,l.minX,l.maxX),this.target.z=kd(this.target.z,l.minZ,l.maxZ),this.zoomMul=Ad(this.zoomMul,this.zoomMulTarget,jd(2.2,e));let u=this.distanceFor(a,this.camera.aspect)*this.zoomMul;this.dist=Ad(this.dist,u,jd(2,e)),this.trauma=Math.max(0,this.trauma-e*1.6),this.fovKick=Math.max(0,this.fovKick-e*6),this.yaw+=this.orbit*e,this.apply()}apply(){let e=this.camera,t=this.dist,n=Math.cos(this.pitch),r=Math.sin(this.pitch);e.position.set(this.target.x+Math.sin(this.yaw)*n*t,r*t,this.target.z+Math.cos(this.yaw)*n*t);let i=this.trauma*this.trauma,a=0,o=0;if(i>0){let e=this.time*38;a=(Math.sin(e*1.3)+Math.sin(e*2.9)*.5)*i*t*.012,o=(Math.cos(e*1.7)+Math.sin(e*3.7)*.5)*i*t*.012}e.position.x+=a,e.position.y+=o,e.lookAt(this.target.x+a,0,this.target.z),e.near=Math.max(.08,t*.04),e.far=t*6+120,e.fov=this.baseFov+this.fovKick,e.updateProjectionMatrix()}get focus(){return this.target}get distance(){return this.dist}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}},Bd=class{minX;minZ;maxX;maxZ;canvas;ctx;s;rng;speckRng;constructor(e,t,n,r,i,a=7){this.minX=e,this.minZ=t,this.maxX=n,this.maxZ=r;let o=n-e,s=r-t;this.s=Math.min(i/Math.max(o,s),48),this.canvas=document.createElement(`canvas`),this.canvas.width=Math.max(4,Math.round(o*this.s)),this.canvas.height=Math.max(4,Math.round(s*this.s)),this.ctx=this.canvas.getContext(`2d`),this.rng=new Md(a),this.speckRng=new Md(a*7+3)}get width(){return this.maxX-this.minX}get height(){return this.maxZ-this.minZ}px(e){return(e-this.minX)*this.s}pz(e){return(e-this.minZ)*this.s}fill(e){return this.ctx.fillStyle=e,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this}rect(e,t,n,r,i){return this.ctx.fillStyle=i,this.ctx.fillRect(this.px(e),this.pz(t),(n-e)*this.s,(r-t)*this.s),this}roundRect(e,t,n,r,i,a,o){let s=this.ctx;return s.beginPath(),s.roundRect(this.px(e),this.pz(t),(n-e)*this.s,(r-t)*this.s,i*this.s),s.fillStyle=a,s.fill(),o&&(s.lineWidth=o.w*this.s,s.strokeStyle=o.color,s.stroke()),this}circle(e,t,n,r){let i=this.ctx;return i.beginPath(),i.arc(this.px(e),this.pz(t),n*this.s,0,Math.PI*2),i.fillStyle=r,i.fill(),this}ring(e,t,n,r,i){let a=this.ctx;return a.beginPath(),a.arc(this.px(e),this.pz(t),n*this.s,0,Math.PI*2),a.lineWidth=r*this.s,a.strokeStyle=i,a.stroke(),this}poly(e,t){let n=this.ctx;return n.beginPath(),e.forEach(([e,t],r)=>r?n.lineTo(this.px(e),this.pz(t)):n.moveTo(this.px(e),this.pz(t))),n.closePath(),n.fillStyle=t,n.fill(),this}path(e,t,n,r={}){let i=this.ctx;if(i.save(),i.beginPath(),r.smooth&&e.length>2){i.moveTo(this.px(e[0][0]),this.pz(e[0][1]));for(let t=1;t<e.length-1;t++){let n=(e[t][0]+e[t+1][0])/2,r=(e[t][1]+e[t+1][1])/2;i.quadraticCurveTo(this.px(e[t][0]),this.pz(e[t][1]),this.px(n),this.pz(r))}let t=e[e.length-1];i.lineTo(this.px(t[0]),this.pz(t[1]))}else e.forEach(([e,t],n)=>n?i.lineTo(this.px(e),this.pz(t)):i.moveTo(this.px(e),this.pz(t)));return i.lineWidth=t*this.s,i.lineCap=r.cap??`round`,i.lineJoin=`round`,i.strokeStyle=n,r.dash&&i.setLineDash([r.dash[0]*this.s,r.dash[1]*this.s]),i.stroke(),i.restore(),this}road(e,t,n,r,i,a={}){let o=Math.abs(r-t)<Math.abs(n-e),s=a.asphalt??`#4a4d57`,c=a.line??`#f4f4ee`,l=i/2;o?this.rect(Math.min(e,n),t-l,Math.max(e,n),t+l,s):this.rect(e-l,Math.min(t,r),e+l,Math.max(t,r),s),this.speckle(o?Math.min(e,n):e-l,o?t-l:Math.min(t,r),o?Math.max(e,n):e+l,o?t+l:Math.max(t,r),[`rgba(0,0,0,0.08)`,`rgba(255,255,255,0.04)`],.25,.12);let u=(i,a,s=c,l=.15)=>{o?this.path([[e,t+i],[n,r+i]],l,s,{dash:a,cap:`butt`}):this.path([[e+i,t],[n+i,r]],l,s,{dash:a,cap:`butt`})},d=a.center??`dashed`;return d===`dashed`&&u(0,[2.2,2.2]),d===`double`&&(u(-.16,void 0,a.edgeColor??`#ffd23f`,.12),u(.16,void 0,a.edgeColor??`#ffd23f`,.12)),(a.lanes??2)>=4&&(u(-l/2,[2.2,2.2]),u(l/2,[2.2,2.2])),a.edge!==!1&&(u(-l+.35,void 0,c,.12),u(l-.35,void 0,c,.12)),this}crosswalk(e,t,n,r,i,a=`#f4f4ee`){let o=Math.floor(n/.9);for(let s=0;s<o;s++){let o=-n/2+.45+s*.9;i===`x`?this.rect(e+o-.25,t-r/2,e+o+.25,t+r/2,a):this.rect(e-r/2,t+o-.25,e+r/2,t+o+.25,a)}return this}speckle(e,t,n,r,i,a,o){let s=(n-e)*(r-t),c=Math.min(6e4,Math.floor(s*a*10*Math.min(1,(this.s/18)**2))),l=this.ctx,u=this.speckRng,d=Math.max(1,o*this.s);for(let a=0;a<c;a++){l.fillStyle=i[a%i.length];let o=this.px(u.range(e,n)),s=this.pz(u.range(t,r));l.fillRect(o,s,d*u.range(.6,1.4),d*u.range(.6,1.4))}return this}blotches(e,t,n,r,i,a,o,s){let c=this.ctx;for(let l=0;l<a;l++){let a=this.px(this.rng.range(e,n)),u=this.pz(this.rng.range(t,r)),d=this.rng.range(o,s)*this.s,f=c.createRadialGradient(a,u,0,a,u,d);f.addColorStop(0,i[l%i.length]),f.addColorStop(1,`rgba(0,0,0,0)`),c.fillStyle=f,c.fillRect(a-d,u-d,d*2,d*2)}return this}stripes(e,t,n,r,i,a,o=`x`){let s=this.ctx;if(s.save(),s.beginPath(),s.rect(this.px(e),this.pz(t),(n-e)*this.s,(r-t)*this.s),s.clip(),s.fillStyle=i,o===`x`)for(let i=e;i<n;i+=a*2)s.fillRect(this.px(i),this.pz(t),a*this.s,(r-t)*this.s);else for(let i=t;i<r;i+=a*2)s.fillRect(this.px(e),this.pz(i),(n-e)*this.s,a*this.s);return s.restore(),this}tiles(e,t,n,r,i,a,o,s,c=.04){if(this.rect(e,t,n,r,a),o)for(let a=e,s=0;a<n;a+=i,s++)for(let e=t,c=0;e<r;e+=i,c++)(s+c)%2&&this.rect(a,e,Math.min(n,a+i),Math.min(r,e+i),o);let l=this.ctx;l.fillStyle=s;let u=Math.max(1,c*this.s);for(let a=e;a<=n;a+=i)l.fillRect(this.px(a)-u/2,this.pz(t),u,(r-t)*this.s);for(let a=t;a<=r;a+=i)l.fillRect(this.px(e),this.pz(a)-u/2,(n-e)*this.s,u);return this}grid(e,t,n,r,i,a,o){let s=this.ctx;s.save(),s.strokeStyle=a,s.lineWidth=Math.max(1,o*this.s),s.shadowColor=a,s.shadowBlur=6,s.beginPath();for(let a=Math.ceil(e/i)*i;a<=n;a+=i)s.moveTo(this.px(a),this.pz(t)),s.lineTo(this.px(a),this.pz(r));for(let a=Math.ceil(t/i)*i;a<=r;a+=i)s.moveTo(this.px(e),this.pz(a)),s.lineTo(this.px(n),this.pz(a));return s.stroke(),s.restore(),this}glow(e,t,n,r){let i=this.ctx,a=this.px(e),o=this.pz(t),s=n*this.s,c=i.createRadialGradient(a,o,0,a,o,s);return c.addColorStop(0,r),c.addColorStop(1,`rgba(0,0,0,0)`),i.fillStyle=c,i.fillRect(a-s,o-s,s*2,s*2),this}text(e,t,n,r,i,a=0){let o=this.ctx;return o.save(),o.translate(this.px(e),this.pz(t)),o.rotate(a),o.font=`800 ${r*this.s}px Unbounded, sans-serif`,o.textAlign=`center`,o.textBaseline=`middle`,o.fillStyle=i,o.fillText(n,0,0),o.restore(),this}parking(e,t,n,r,i,a,o=`#f4f4ee`){for(let s=0;s<=n;s++){let n=e+s*r;this.path([[n,t],[n,t+i*a]],.12,o,{cap:`butt`})}return this}texture(e=4){let t=new ji(this.canvas);return t.colorSpace=Ke,t.anisotropy=e,t.wrapS=t.wrapT=d,t.generateMipmaps=!0,t.minFilter=v,t.magFilter=g,t.needsUpdate=!0,t}};function Vd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Ir,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Hd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Hd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Hd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Sr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Ud=new q,Wd=e=>e>=8?Math.round(e*1.7):e,Gd=new on,Kd=new Lt,qd=new gn,Jd=new W,Yd=new W,Xd={box:new Fi(1,1,1),plane:new so(1,1)},Zd=class{std=[];emi=[];stack=[];push(e,t,n,r=0,i=1){let a=new on().compose(Jd.set(e,t,n),Kd.setFromEuler(qd.set(0,r,0)),Yd.set(i,i,i)),o=this.stack[this.stack.length-1];return this.stack.push(o?o.clone().multiply(a):a),this}pushM(e){let t=this.stack[this.stack.length-1];return this.stack.push(t?t.clone().multiply(e):e),this}pop(){return this.stack.pop(),this}add(e,t,n,r,i,a={}){let o=e.index?e.toNonIndexed():e;o===e&&(o=e.clone());for(let e of Object.keys(o.attributes))e!==`position`&&e!==`normal`&&o.deleteAttribute(e);o.attributes.normal||o.computeVertexNormals(),qd.set(a.rx??0,a.ry??0,a.rz??0),Gd.compose(Jd.set(n,r,i),Kd.setFromEuler(qd),Yd.set(a.sx??1,a.sy??1,a.sz??1));let s=this.stack[this.stack.length-1];s&&Gd.premultiply(s),o.applyMatrix4(Gd),Ud.set(t);let c=a.emissive?a.glow??1:1,l=o.attributes.position.count,u=new Float32Array(l*3);for(let e=0;e<l;e++)u[e*3]=Ud.r*c,u[e*3+1]=Ud.g*c,u[e*3+2]=Ud.b*c;return o.setAttribute(`color`,new Sr(u,3)),(a.emissive?this.emi:this.std).push(o),this}box(e,t,n,r,i=0,a=0,o=0,s={}){let c=Xd.box.clone();return c.scale(e,t,n),this.add(c,r,i,a,o,s)}boxB(e,t,n,r,i=0,a=0,o=0,s={}){return this.box(e,t,n,r,i,a+t/2,o,s)}quad(e,t,n,r=0,i=0,a=0,o={}){let s=Xd.plane.clone();return s.scale(e,t,1),this.add(s,n,r,i,a,o)}cyl(e,t,n,r,i=0,a=0,o=0,s=10,c={}){return this.add(new Li(e,t,n,Wd(s),1),r,i,a,o,c)}cylB(e,t,n,r,i=0,a=0,o=0,s=10,c={}){return this.cyl(e,t,n,r,i,a+n/2,o,s,c)}sphere(e,t,n=0,r=0,i=0,a={}){return this.add(new fo(e,a.w?Math.round(a.w*1.6):18,a.hs?Math.round(a.hs*1.6):12),t,n,r,i,a)}ico(e,t,n=0,r=0,i=0,a=0,o={}){return this.add(new io(e,a),t,n,r,i,o)}dodeca(e,t,n=0,r=0,i=0,a={}){return this.add(new Bi(e,0),t,n,r,i,a)}cone(e,t,n,r=0,i=0,a=0,o=10,s={}){return this.add(new Ri(e,t,Wd(o),1),n,r,i,a,s)}torus(e,t,n,r=0,i=0,a=0,o={}){return this.add(new po(e,t,o.rs??8,Wd(o.ts??16),o.arc??Math.PI*2),n,r,i,a,o)}lathe(e,t,n=0,r=0,i=0,a=12,o={}){let s=e.map(([e,t])=>new U(e,t));return this.add(new ao(s,Wd(a)),t,n,r,i,o)}extrude(e,t,n,r=0,i=0,a=0,o={}){let s=new to(new _a(e.map(([e,t])=>new U(e,t))),{depth:t,bevelEnabled:!1});return s.translate(0,0,-t/2),this.add(s,n,r,i,a,o)}wheel(e,t,n,r,i,a=`#22232a`,o=`#c9ccd6`){return this.cyl(e,e,t,a,n,r,i,10,{rz:Math.PI/2}),this.cyl(e*.5,e*.5,t*1.04,o,n,r,i,8,{rz:Math.PI/2}),this}windows(e,t,n,r,i,a,o,s,c,l,u={}){let d=e<2?t:n,f=(e<2?n:t)/2+.02,p=d/s,m=(o-a)/c,h=u.ww??p*.55,g=u.wh??m*.55,_=e===0?0:e===1?Math.PI:e===2?Math.PI/2:-Math.PI/2;for(let t=0;t<s;t++)for(let n=0;n<c;n++){let o=-d/2+p*(t+.5),s=a+m*(n+.5),c=r,v=i;e===0?(c+=o,v+=f):e===1?(c-=o,v-=f):e===2?(c+=f,v-=o):(c-=f,v+=o);let y=u.litColor&&u.rnd&&u.rnd()<(u.litChance??.5);this.quad(h,g,y?u.litColor:l,c,s,v,{ry:_,emissive:u.emissive||!!y,glow:u.glow})}return this}isEmpty(){return this.std.length+this.emi.length===0}build(){let e=[],t=this.std.length?Vd(this.std,!1):null,n=this.emi.length?Vd(this.emi,!1):null,r;t&&n?(e.push(t,n),r=Vd(e,!0),t.dispose(),n.dispose()):t?(r=t,r.addGroup(0,t.attributes.position.count,0)):n?(r=n,r.addGroup(0,n.attributes.position.count,1)):r=new Ir,!t&&n&&(r.groups[0].materialIndex=1);for(let e of this.std)e.dispose();for(let e of this.emi)e.dispose();return this.std=[],this.emi=[],r.computeBoundingBox(),r.computeBoundingSphere(),r}},Qd=new Map;function $d(e,t=0){let r=n(e),i=r.variants??3,a=(t%i+i)%i,o=`${e}#${a}`,s=Qd.get(o);if(s)return s;let c=new Zd;r.build(c,new Md(Nd(o)),a);let l=c.build(),u=l.boundingBox,d=Math.max(Math.abs(u.min.x),Math.abs(u.max.x)),f=Math.max(Math.abs(u.min.z),Math.abs(u.max.z)),p=Math.max(.05,u.max.y),m=r.size??Math.max(d,f,p*(r.heightFactor??.3)),h=Math.max(m,.12),g=h*h*2*(r.mass??1),_=l.getAttribute(`color`),v=new q(0,0,0),y=Math.max(1,Math.floor(_.count/400)),b=0;for(let e=0;e<_.count;e+=y)v.r+=Math.min(1,_.getX(e)),v.g+=Math.min(1,_.getY(e)),v.b+=Math.min(1,_.getZ(e)),b++;return b&&v.multiplyScalar(1/b),s={def:r,variant:a,geometry:l,hx:d,hz:f,height:p,size:m,mass:g,color:v},Qd.set(o,s),s}function ef(e){return n(e).variants??3}function tf(e,t){let n=new Proxy(e,{get(r,i,a){let o=Reflect.get(r,i,a);return typeof o==`function`?(...r)=>{let a=o.apply(e,r);return t[i].apply(t,r),a===e?n:a}:o}});return n}function nf(e,t){if(typeof t==`string`)return t;if(typeof t[0]==`string`)return e.pick(t);let n=t,r=0;for(let[,e]of n)r+=e;let i=e.next()*r;for(let[e,t]of n)if(i-=t,i<=0)return e;return n[n.length-1][0]}var rf=class{rng;painter;inner;outer;innerExt;placements=[];lanes=[];bounds;ext;chunks=new Map;chunkSize=60;grid=new Map;cell=4;blocks=[];chainId=0;extras=[];night;constructor(e,t,n,r,i,a=!1,o=0){this.rng=new Md(r),this.night=a,this.bounds={minX:-e/2,maxX:e/2,minZ:-t/2,maxZ:t/2},this.ext={minX:-e/2-n,maxX:e/2+n,minZ:-t/2-n,maxZ:t/2+n};let s=Math.min(n,8);if(this.innerExt={minX:-e/2-s,maxX:e/2+s,minZ:-t/2-s,maxZ:t/2+s},o>0){let e=this.innerExt;this.inner=new Bd(e.minX,e.minZ,e.maxX,e.maxZ,i,r),this.outer=new Bd(this.ext.minX,this.ext.minZ,this.ext.maxX,this.ext.maxZ,o,r),this.painter=tf(this.inner,this.outer)}else this.inner=this.outer=this.painter=new Bd(this.ext.minX,this.ext.minZ,this.ext.maxX,this.ext.maxZ,i,r)}key(e,t){return`${Math.floor(e/this.cell)},${Math.floor(t/this.cell)}`}free(e,t,n){let r=this.bounds;if(e-n*.5<r.minX||e+n*.5>r.maxX||t-n*.5<r.minZ||t+n*.5>r.maxZ)return!1;for(let r of this.blocks)if(this.inZone(r,e,t,n*.6))return!1;let i=Math.ceil((n+12)/this.cell),a=Math.floor(e/this.cell),o=Math.floor(t/this.cell);for(let r=-i;r<=i;r++)for(let s=-i;s<=i;s++){let i=this.grid.get(`${a+r},${o+s}`);if(i){for(let r of i)if(Math.hypot(r.x-e,r.z-t)<r.r+n)return!1}}return!0}occupy(e,t,n){let r=this.key(e,t),i=this.grid.get(r);i||this.grid.set(r,i=[]),i.push({x:e,z:t,r:n})}inZone(e,t,n,r=0){if(`x0`in e)return t>=e.x0-r&&t<=e.x1+r&&n>=e.z0-r&&n<=e.z1+r;if(`cx`in e){let i=Math.hypot(t-e.cx,n-e.cz);return i<=e.r+r&&i>=(e.r0??0)-r}for(let i=0;i<e.path.length-1;i++){let[a,o]=e.path[i],[s,c]=e.path[i+1],l=s-a,u=c-o,d=Math.max(0,Math.min(1,((t-a)*l+(n-o)*u)/(l*l+u*u||1)));if(Math.hypot(t-a-l*d,n-o-u*d)<=e.w/2+r)return!0}return!1}samplePoint(e){let t=this.rng;if(`x0`in e)return[t.range(e.x0,e.x1),t.range(e.z0,e.z1)];if(`cx`in e){let n=t.range(0,Math.PI*2),r=e.r0??0,i=Math.sqrt(t.range(r*r/(e.r*e.r),1))*e.r;return[e.cx+Math.cos(n)*i,e.cz+Math.sin(n)*i]}let n=e.path.length-1,r=t.int(0,n-1),[i,a]=e.path[r],[o,s]=e.path[r+1],c=t.next(),l=Math.hypot(o-i,s-a)||1,u=-(s-a)/l,d=(o-i)/l,f=t.range(-e.w/2,e.w/2);return[i+(o-i)*c+u*f,a+(s-a)*c+d*f]}block(e){return this.blocks.push(e),this}place(e,t,n,r={}){let i=r.variant??this.rng.int(0,ef(e)-1),a=$d(e,i),o=Math.max(a.hx,a.hz)*.9+(r.gap??.15);return!r.force&&!this.free(t,n,o)?!1:(this.occupy(t,n,o),this.placements.push({id:e,variant:i,x:t,z:n,rot:r.rot??this.rng.range(0,Math.PI*2),chain:r.chain,respawn:r.respawn,wander:r.wander}),!0)}scatter(e,t,n,r={}){let i=0,a=r.attempts??30;for(let o=0;o<n;o++){let n=nf(this.rng,e);for(let e=0;e<a;e++){let[e,a]=this.samplePoint(t);if(!this.inZone(t,e,a))continue;let o=r.rot===void 0||r.rot===`random`?this.rng.range(0,Math.PI*2):r.rot===`axis`?this.rng.int(0,3)*Math.PI/2:r.rot;if(this.place(n,e,a,{rot:o,gap:r.gap,respawn:r.respawn,wander:r.wander})){i++;break}}}return i}row(e,t,n,r,i,a,o={}){let s=Math.hypot(r-t,i-n),c=Math.max(1,Math.floor(s/a)+1),l=Math.atan2(-(i-n),r-t),u=0;for(let a=0;a<c;a++){if(o.skip&&this.rng.chance(o.skip))continue;let s=c===1?.5:a/(c-1),d=o.jitter??0,f=t+(r-t)*s+this.rng.range(-d,d),p=n+(i-n)*s+this.rng.range(-d,d);this.place(nf(this.rng,e),f,p,{rot:o.rot??l,gap:o.gap??.05,force:o.force})&&u++}return u}circleOf(e,t,n,r,i,a={}){for(let o=0;o<i;o++){let s=(a.phase??0)+o/i*Math.PI*2;this.place(nf(this.rng,e),t+Math.cos(s)*r,n+Math.sin(s)*r,{rot:a.face?-s+Math.PI/2:this.rng.range(0,6.28),gap:a.gap??.05})}}cluster(e,t,n,r,i,a=.05){return this.scatter(e,{cx:t,cz:n,r},i,{gap:a,attempts:40})}coins(e,t){let n=++this.chainId,r=0;for(let t=0;t<e.length-1;t++)r+=Math.hypot(e[t+1][0]-e[t][0],e[t+1][1]-e[t][1]);let i=0;for(let a=0;a<t;a++){let o=a/Math.max(1,t-1)*r;for(let t=0;t<e.length-1;t++){let[r,a]=e[t],[s,c]=e[t+1],l=Math.hypot(s-r,c-a);if(o<=l+1e-6){let e=l?o/l:0;this.place(`coin`,r+(s-r)*e,a+(c-a)*e,{chain:n,gap:0,rot:0,force:!0})&&i++;break}o-=l}}return i}lane(e){return this.lanes.push(e),this}chunkFor(e,t){let n=`${Math.floor(e/this.chunkSize)},${Math.floor(t/this.chunkSize)}`,r=this.chunks.get(n);return r||this.chunks.set(n,r=new Zd),r}building(e,t,n,r){let i=this.chunkFor(e,t);return i.push(e,0,t,n),Zu(i,this.rng,{color:r.color??this.rng.pick([`#e9b98a`,`#c96f5a`,`#f2d7a6`,`#9fb7c9`,`#d9d2c4`,`#b5c99a`]),night:this.night,...r}),i.pop(),this}tree(e,t,n,r=`round`,i){let a=this.chunkFor(e,t);return a.push(e,0,t,this.rng.range(0,6.28)),o(a,this.rng,n,r,i),a.pop(),this}palm(e,t,n){let r=this.chunkFor(e,t);return r.push(e,0,t,this.rng.range(0,6.28)),nd(r,this.rng,n),r.pop(),this}deco(e,t,r,i=0,a,o=1){let s=this.chunkFor(t,r);s.push(t,0,r,i,o);let c=n(e),l=a??this.rng.int(0,(c.variants??3)-1);return c.build(s,this.rng,l),s.pop(),this}raw(e,t,n){return n(this.chunkFor(e,t)),this}buildScenery(){let e=[];for(let t of this.chunks.values())t.isEmpty()||e.push(t.build());return this.chunks.clear(),e}treeBorder(e,t,n=[`round`,`pine`,`tall`]){let r=this.bounds,i=this.ext;for(let a=i.minX;a<i.maxX;a+=e)for(let o=0;o<t;o++){let t=2+o*e*.9+this.rng.range(0,e*.5);r.minZ-t>i.minZ&&this.tree(a+this.rng.range(-1,1),r.minZ-t,this.rng.range(4,8),this.rng.pick(n)),r.maxZ+t<i.maxZ&&this.tree(a+this.rng.range(-1,1),r.maxZ+t,this.rng.range(4,8),this.rng.pick(n))}for(let a=r.minZ;a<r.maxZ;a+=e)for(let o=0;o<t;o++){let t=2+o*e*.9+this.rng.range(0,e*.5);r.minX-t>i.minX&&this.tree(r.minX-t,a+this.rng.range(-1,1),this.rng.range(4,8),this.rng.pick(n)),r.maxX+t<i.maxX&&this.tree(r.maxX+t,a+this.rng.range(-1,1),this.rng.range(4,8),this.rng.pick(n))}}},af={uHolePos:{value:new U(0,0)},uHoleR:{value:.5},uTime:{value:0},uHoleTint:{value:new q(`#8a5cff`)},uPulse:{value:0}},of=`
varying vec3 vWPos;
`,sf=`
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
`,cf=`
varying vec3 vWPos;
uniform vec2 uHolePos;
uniform float uHoleR;
uniform float uTime;
uniform vec3 uHoleTint;
uniform float uPulse;
uniform vec2 uMapSize;
uniform vec2 uMapMin;
uniform float uDetail;

float vHash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
float vNoise(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p);
  float a = vHash(i), b = vHash(i+vec2(1.0,0.0)), c = vHash(i+vec2(0.0,1.0)), d = vHash(i+vec2(1.0,1.0));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
}

`,lf=`
vec2 hRel = vWPos.xz - uHolePos;
float hD = length(hRel);
// anti-aliased rim: fractional coverage over ~1px instead of a hard discard edge
float hPx = max(fwidth(hD), 1e-4);
float hCov = clamp((hD - uHoleR) / hPx + 0.5, 0.0, 1.0);
if (hCov <= 0.0) discard;
float hBand = uHoleR * 0.85 + 0.3;
float hT = clamp((hD - uHoleR) / hBand, 0.0, 1.0);
float hInv = 1.0 - hT;
vec2 hDir = hD > 1e-4 ? hRel / hD : vec2(0.0);
#ifdef USE_MAP
  // world-space mapping; a gentle gravitational lens pulls the ground towards the hole
  float lens = hInv * hInv * hInv * (uHoleR * 0.16 + 0.02);
  vec2 wp = vWPos.xz + hDir * lens;
  vec2 uvW = vec2((wp.x - uMapMin.x) / uMapSize.x, 1.0 - (wp.y - uMapMin.y) / uMapSize.y);
  vec4 sampledDiffuseColor = texture2D( map, uvW );
  diffuseColor *= sampledDiffuseColor;
#endif
float nA = vNoise(vWPos.xz * 2.7);
float nB = vNoise(vWPos.xz * 0.35);
diffuseColor.rgb *= 1.0 + ((nA - 0.5) * 0.05 + (nB - 0.5) * 0.07) * uDetail;
float hAO = mix(0.3, 1.0, smoothstep(0.0, 1.0, hT));
diffuseColor.rgb *= hAO;
float wl = 0.32 + uHoleR * 0.42;
float ripple = sin((hD - uTime * (0.6 + uHoleR * 0.5)) * 6.2831 / wl);
diffuseColor.rgb += uHoleTint * (pow(hInv, 4.0) * (0.2 + uPulse * 0.5) + max(ripple, 0.0) * hInv * hInv * 0.06);
diffuseColor.a = hCov;
`;function uf(e,t,n,r=1){e.onBeforeCompile=e=>{Object.assign(e.uniforms,af,{uMapSize:{value:n},uMapMin:{value:t},uDetail:{value:r}}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${of}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\n${sf}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${cf}`).replace(`#include <map_fragment>`,lf)},e.customProgramCacheKey=()=>`void-ground-`+(e.map?`m`:`n`)}function df(e,t,n,r=`#ffffff`){let i=new wo({map:e??void 0,color:r,roughness:.92,metalness:0,alphaToCoverage:!0});return uf(i,t,n),i}var ff=`
varying vec3 vWPos;
uniform float uHoleR;
uniform vec3 uHoleTint;
`,pf=`
float below = clamp(-vWPos.y / (0.25 + uHoleR * 1.3), 0.0, 1.0);
gl_FragColor.rgb = mix(gl_FragColor.rgb, uHoleTint * 0.06, below * 0.94);
#include <fog_fragment>
`;function mf(e,t){e.onBeforeCompile=e=>{e.uniforms.uHoleR=af.uHoleR,e.uniforms.uHoleTint=af.uHoleTint,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${of}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
`).replace(`#include <project_vertex>`,`#include <project_vertex>
#ifdef USE_INSTANCING
vWPos = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif
`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${ff}`).replace(`#include <fog_fragment>`,pf)},e.customProgramCacheKey=()=>t}var hf=null;function gf(){if(hf)return hf;let e=new wo({vertexColors:!0,roughness:.7,metalness:.04});mf(e,`void-prop-std`);let t=new Jr({vertexColors:!0});return mf(t,`void-prop-emi`),hf={standard:e,emissive:t,list:[e,t]},hf}var _f=null;function vf(){if(_f)return _f;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.25,`rgba(255,255,255,0.85)`),n.addColorStop(.6,`rgba(255,255,255,0.18)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),_f=new ji(e),_f}var yf=`
varying vec2 vUv;
varying float vDepth;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vDepth = -wp.y;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,bf=`
uniform float uTime;
uniform float uHoleR;
uniform vec3 uHoleTint;
uniform float uPulse;
varying vec2 vUv;
varying float vDepth;
void main() {
  float t = clamp(vDepth / (uHoleR * 2.2 + 0.2), 0.0, 1.0);
  vec3 base = mix(uHoleTint * 0.20, vec3(0.0), pow(t, 0.42));
  float ang = vUv.x * 6.28318;
  float s = sin(ang * 9.0 + t * 14.0 - uTime * 2.6);
  float streak = smoothstep(0.72, 1.0, s) * pow(1.0 - t, 2.0) * 0.38;
  float lip = smoothstep(0.1, 0.0, t);
  vec3 col = base + uHoleTint * (streak + lip * (0.55 + uPulse * 1.2));
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,xf=`
uniform float uTime;
uniform vec3 uHoleTint;
varying vec2 vP;
void main() {
  float rr = length(vP);
  float a = atan(vP.y, vP.x);
  float sp = sin(a * 3.0 + rr * 14.0 - uTime * 3.2);
  vec3 col = uHoleTint * 0.12 * smoothstep(0.2, 1.0, sp) * (1.0 - rr);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Sf=`
varying vec2 vP;
void main() {
  vP = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Cf=`
uniform float uTime;
uniform vec3 uHoleTint;
uniform float uPulse;
uniform float uEdge;
uniform float uGlowW;
varying vec2 vP;
void main() {
  float rr = length(vP);
  float a = atan(vP.y, vP.x);
  // crisp, anti-aliased rim line at least ~1.5px wide
  float px = max(fwidth(rr), 1e-5);
  float lineW = max(uEdge, px * 1.6);
  float d = rr - 1.0;
  float edge = (1.0 - smoothstep(lineW - px, lineW + px, d)) * smoothstep(-px, 0.0, d);
  float g = clamp(1.0 - d / uGlowW, 0.0, 1.0);
  float glow = g * g * g * (0.16 + uPulse * 0.55);
  float dash = smoothstep(0.55, 1.0, sin(a * 28.0 - uTime * 2.4)) * (1.0 - smoothstep(lineW * 3.0, lineW * 4.5, d)) * step(lineW, d) * 0.3;
  vec3 hot = mix(uHoleTint, vec3(1.0), 0.55);
  vec3 col = hot * edge * (0.9 + uPulse * 1.2) + uHoleTint * (glow + dash);
  float alpha = clamp(edge + glow + dash, 0.0, 1.0);
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,wf=class{group=new Pn;well;bottom;ring;ringMat;shock=[];shockMat=[];shockT=[];constructor(){let e=new Li(1,1,1,72,1,!0);e.translate(0,-.5,0);let t=new So({vertexShader:yf,fragmentShader:bf,uniforms:af,side:1});this.well=new oi(e,t),this.well.renderOrder=-1,this.well.frustumCulled=!1;let n=new Ii(1,48);n.rotateX(-Math.PI/2);let r=new So({vertexShader:`varying vec2 vP; void main(){ vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:xf,uniforms:af});this.bottom=new oi(n,r),this.bottom.frustumCulled=!1;let i=new co(.99,1.45,128,1);this.ringMat=new So({vertexShader:Sf,fragmentShader:Cf,uniforms:{...af,uEdge:{value:.05},uGlowW:{value:.35}},transparent:!0,depthWrite:!1,blending:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),this.ring=new oi(i,this.ringMat),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=2,this.ring.frustumCulled=!1;for(let e=0;e<3;e++){let e=new So({vertexShader:Sf,fragmentShader:`
          uniform vec3 uHoleTint; uniform float uA; varying vec2 vP;
          void main(){ float rr = length(vP); float e = smoothstep(0.9,1.0,rr)*smoothstep(1.0,0.97,rr);
          gl_FragColor = vec4(mix(uHoleTint, vec3(1.0), 0.4) * e * uA, e * uA);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          }`,uniforms:{uHoleTint:af.uHoleTint,uA:{value:0}},transparent:!0,depthWrite:!1,blending:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),t=new oi(new co(.85,1,96,1),e);t.rotation.x=-Math.PI/2,t.visible=!1,t.renderOrder=3,this.shock.push(t),this.shockMat.push(e),this.shockT.push(-1),this.group.add(t)}this.group.add(this.well,this.bottom,this.ring)}shockwave(){let e=this.shockT.findIndex(e=>e<0),t=e>=0?e:0;this.shockT[t]=0,this.shock[t].visible=!0}update(e,t,n,r){let i=n*2.2+.2;this.well.position.set(e,0,t),this.well.scale.set(n*1.004,i,n*1.004),this.bottom.position.set(e,-i+.001,t),this.bottom.scale.set(n*1.01,1,n*1.01),this.ring.position.set(e,.01,t),this.ring.scale.set(n,n,n),this.ringMat.uniforms.uEdge.value=Math.min(.05,.02/n+.008),this.ringMat.uniforms.uGlowW.value=Math.min(.3,.08/n+.1);for(let i=0;i<this.shock.length;i++){if(this.shockT[i]<0)continue;this.shockT[i]+=r;let a=this.shockT[i]/.9;if(a>=1){this.shockT[i]=-1,this.shock[i].visible=!1;continue}let o=n*(1.05+a*1.6);this.shock[i].position.set(e,.012,t),this.shock[i].scale.set(o,o,o),this.shockMat[i].uniforms.uA.value=(1-a)*(1-a)*1.2}}dispose(){this.group.traverse(e=>{e instanceof oi&&(e.geometry.dispose(),e.material.dispose())})}},Tf=[.3,.38,.48,.6,.75,.94,1.18,1.48,1.85,2.3,2.85,3.5,4.3,5.3,6.5,7.9,9.5,11.4,13.5,16],Ef=7.5,Df=class{startTier;maxTier;rate;tier;progress=0;total=0;constructor(e,t,n){this.startTier=e,this.maxTier=t,this.rate=n,this.tier=e}need(e=this.tier){let t=Tf[Math.min(e,Tf.length-1)],n=Tf[Math.min(e+1,Tf.length-1)];return Math.max(.01,(n*n-t*t)*Ef)}get atMax(){return this.tier>=this.maxTier}add(e){let t=e*this.rate;if(this.total+=t,this.atMax)return this.progress=Math.min(1,this.progress+t/this.need()),0;let n=0,r=t;for(;r>0&&!this.atMax;){let e=this.need(),t=(1-this.progress)*e;r>=t?(r-=t,this.tier++,this.progress=0,n++):(this.progress+=r/e,r=0)}return this.atMax&&(this.progress=Math.min(1,this.progress)),n}get radius(){let e=Tf[this.tier];return this.atMax?e*(1+this.progress*.06):e+(Tf[this.tier+1]-e)*this.progress*.3}get level(){return this.tier+1}},Of=1400,kf=`
attribute float aSize;
attribute float aAlpha;
attribute vec3 aColor;
varying float vAlpha;
varying vec3 vColor;
uniform float uScale;
void main() {
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float ps = aSize * uScale / max(0.1, -mv.z);
  // fade sprites that get too close to the camera instead of letting them fill the screen
  vAlpha = aAlpha * clamp(1.0 - (ps - 40.0) / 40.0, 0.0, 1.0);
  gl_PointSize = min(ps, 80.0);
  gl_Position = projectionMatrix * mv;
}
`,Af=`
uniform sampler2D uMap;
varying float vAlpha;
varying vec3 vColor;
void main() {
  vec4 t = texture2D(uMap, gl_PointCoord);
  gl_FragColor = vec4(vColor * t.a * vAlpha, t.a * vAlpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,jf=class{points;pos=new Float32Array(Of*3);col=new Float32Array(Of*3);size=new Float32Array(Of);alpha=new Float32Array(Of);mode=new Uint8Array(Of);life=new Float32Array(Of);maxLife=new Float32Array(Of);vel=new Float32Array(Of*3);ang=new Float32Array(Of);rad=new Float32Array(Of);h=new Float32Array(Of);baseSize=new Float32Array(Of);cursor=0;geo;mat;holeX=0;holeZ=0;holeR=1;budget=1;constructor(){this.geo=new Ir,this.geo.setAttribute(`position`,new Sr(this.pos,3).setUsage(Qe)),this.geo.setAttribute(`aColor`,new Sr(this.col,3).setUsage(Qe)),this.geo.setAttribute(`aSize`,new Sr(this.size,1).setUsage(Qe)),this.geo.setAttribute(`aAlpha`,new Sr(this.alpha,1).setUsage(Qe)),this.mat=new So({vertexShader:kf,fragmentShader:Af,uniforms:{uMap:{value:vf()},uScale:{value:600}},transparent:!0,depthWrite:!1,blending:2}),this.points=new Oi(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5}setViewport(e){this.mat.uniforms.uScale.value=e*1.3}alloc(){for(let e=0;e<Of;e++){let t=(this.cursor+e)%Of;if(this.mode[t]===0)return this.cursor=(t+1)%Of,t}let e=this.cursor;return this.cursor=(e+1)%Of,e}setColor(e,t,n=.15){this.col[e*3]=Math.min(2,t.r*(1+(Math.random()-.5)*n)+.15),this.col[e*3+1]=Math.min(2,t.g*(1+(Math.random()-.5)*n)+.15),this.col[e*3+2]=Math.min(2,t.b*(1+(Math.random()-.5)*n)+.15)}swallow(e,t,n,r,i,a){let o=Math.max(2,Math.round(r*this.budget)),s=e-this.holeX,c=t-this.holeZ,l=Math.atan2(c,s),u=Math.max(this.holeR*.6,Math.hypot(s,c));for(let e=0;e<o;e++){let e=this.alloc();this.mode[e]=1,this.ang[e]=l+(Math.random()-.5)*1.6,this.rad[e]=u*(.8+Math.random()*.5),this.h[e]=i*(.2+Math.random()*1),this.life[e]=0,this.maxLife[e]=.55+Math.random()*.5,this.baseSize[e]=(.08+Math.random()*.12)*(.5+this.holeR*.6),this.setColor(e,Math.random()<.3?a:n)}}burst(e,t,n,r,i,a,o=1,s=1){r=Math.round(r*this.budget);for(let c=0;c<r;c++){let r=this.alloc();this.mode[r]=2;let l=Math.random()*Math.PI*2,u=i*(.4+Math.random()*.8);this.pos[r*3]=e,this.pos[r*3+1]=t,this.pos[r*3+2]=n,this.vel[r*3]=Math.cos(l)*u,this.vel[r*3+1]=(.6+Math.random())*i*s,this.vel[r*3+2]=Math.sin(l)*u,this.life[r]=0,this.maxLife[r]=.8+Math.random()*.8,this.baseSize[r]=(.12+Math.random()*.2)*o,this.setColor(r,a[c%a.length],.3)}}rise(e,t,n,r,i,a=1){r=Math.round(r*this.budget);for(let o=0;o<r;o++){let r=this.alloc();this.mode[r]=3;let o=Math.random()*Math.PI*2;this.pos[r*3]=e+Math.cos(o)*n,this.pos[r*3+1]=.05,this.pos[r*3+2]=t+Math.sin(o)*n,this.vel[r*3]=Math.cos(o)*.3,this.vel[r*3+1]=.8+Math.random()*1.6*a,this.vel[r*3+2]=Math.sin(o)*.3,this.life[r]=0,this.maxLife[r]=.7+Math.random()*.7,this.baseSize[r]=(.08+Math.random()*.14)*a,this.setColor(r,i,.3)}}update(e){let t=0;for(let n=0;n<Of;n++){let r=this.mode[n];if(r===0){this.alpha[n]=0;continue}t++,this.life[n]+=e;let i=this.life[n]/this.maxLife[n];if(i>=1)this.mode[n]=0,this.alpha[n]=0;else if(r===1){this.ang[n]+=e*(3+i*9)/Math.max(.5,this.holeR*.5),this.rad[n]*=Math.exp(-e*3.4);let t=this.h[n]*(1-i*1.8)-i*i*this.holeR*1.5;this.pos[n*3]=this.holeX+Math.cos(this.ang[n])*this.rad[n],this.pos[n*3+1]=t,this.pos[n*3+2]=this.holeZ+Math.sin(this.ang[n])*this.rad[n],this.alpha[n]=Math.min(1,i*6)*(1-i),this.size[n]=this.baseSize[n]*(1-i*.5)}else{let t=r===2?9:-.5;this.vel[n*3+1]-=t*e;let a=Math.exp(-e*(r===2?1.2:.6));this.vel[n*3]*=a,this.vel[n*3+2]*=a,this.pos[n*3]+=this.vel[n*3]*e,this.pos[n*3+1]+=this.vel[n*3+1]*e,this.pos[n*3+2]+=this.vel[n*3+2]*e,this.alpha[n]=(1-i)*Math.min(1,i*8),this.size[n]=this.baseSize[n]*(r===3?1-i*.6:1)}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0,this.points.visible=t>0}dispose(){this.geo.dispose(),this.mat.dispose()}},Mf=new Lt,Nf=new Lt,Pf=new W,Ff=new W(0,1,0),If=class{uid;asset;mesh;state=`idle`;x;z;y=0;rot;vy=0;tilt=0;tiltDir=0;spin=0;fallT=0;wobble=0;wobbleDir=0;wobbleAmp=.08;castsShadow=!0;phase=Math.random()*Math.PI*2;lane=-1;laneT=0;speed=0;homeX;homeZ;wander=0;heading=0;chain;respawn=!1;respawnAt=0;spawnT=0;baseY=0;hintCooldown=0;dirty=!0;constructor(e,t,n,r,i,a){this.uid=e,this.asset=t,this.mesh=n,this.x=r,this.z=i,this.rot=a,this.homeX=r,this.homeZ=i,n.matrixAutoUpdate=!1,t.def.idle===`hover`&&(this.baseY=t.def.tags.includes(`vehicle`)?.35:.2),this.sync()}get size(){return this.asset.size}sync(e=1){let t=this.mesh;t.position.set(this.x,this.y+this.baseY,this.z),Mf.setFromAxisAngle(Ff,this.rot);let n=this.state===`falling`?this.tilt:this.wobble*this.wobbleAmp,r=this.state===`falling`?this.tiltDir:this.wobbleDir;n===0?t.quaternion.copy(Mf):(Pf.set(Math.sin(r),0,-Math.cos(r)),Nf.setFromAxisAngle(Pf,n),t.quaternion.copy(Nf).multiply(Mf),this.spin&&(Nf.setFromAxisAngle(Ff,this.spin),t.quaternion.multiply(Nf))),t.scale.setScalar(e),t.updateMatrix(),t.updateMatrixWorld(),this.dirty=!1}},Lf=[0,2,4,5,7,9,11],Rf=[0,2,3,5,7,8,10],zf=[0,2,3,5,7,9,10],Bf=[0,1,3,5,7,8,10],Vf=[0,2,4,6,7,9,11],Z=0,Hf={fair:{bpm:126,root:48,scale:Lf,prog:[0,3,4,0],pad:`triangle`,padCut:2400,lead:`marimba`,leadPattern:[0,2,4,5,4,2,0,-1,1,3,5,4,3,1,2,-1],bass:`triangle`,bassPattern:[1,Z,Z,2,Z,Z,1,Z,Z,2,Z,Z,3,Z,2,Z],kick:[0,6,12],snare:[4,10],hat:[2,8,14],leadOct:2,delay:.25},sky:{bpm:116,root:45,scale:Vf,prog:[0,1,4,3],pad:`sawtooth`,padCut:1900,lead:`triangle`,leadPattern:[0,-1,4,-1,2,-1,5,-1,4,-1,2,-1,3,-1,1,-1],bass:`sawtooth`,bassPattern:[1,Z,Z,1,Z,Z,2,Z,1,Z,Z,1,Z,3,Z,Z],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14],leadOct:2,delay:.375},menu:{bpm:80,root:45,scale:Rf,prog:[0,5,2,6],pad:`sawtooth`,padCut:900,lead:`triangle`,leadPattern:[0,-1,-1,2,-1,-1,4,-1,-1,3,-1,-1,2,-1,1,-1],bass:`sine`,bassPattern:[1,Z,Z,Z,Z,Z,Z,Z,1,Z,Z,Z,Z,Z,Z,Z],kick:[],snare:[],hat:[],leadOct:2,delay:.42},park:{bpm:112,root:48,scale:Lf,prog:[0,4,5,3],pad:`triangle`,padCut:1800,lead:`triangle`,leadPattern:[0,-1,2,-1,4,-1,2,-1,5,-1,4,-1,2,-1,1,-1],bass:`triangle`,bassPattern:[1,Z,Z,Z,2,Z,Z,Z,1,Z,3,Z,2,Z,Z,Z],kick:[0,8],snare:[4,12],hat:[2,6,10,14],leadOct:2,delay:.3},street:{bpm:100,root:50,scale:zf,prog:[0,3,0,4],pad:`sawtooth`,padCut:1100,lead:`square`,leadPattern:[-1,-1,0,-1,-1,2,-1,3,-1,-1,4,-1,2,-1,-1,-1],bass:`square`,bassPattern:[1,Z,Z,1,Z,Z,3,Z,Z,1,Z,Z,2,Z,1,Z],kick:[0,7,10],snare:[4,12],hat:[0,2,4,6,8,10,12,14],swing:.12,leadOct:2,delay:.25},traffic:{bpm:122,root:40,scale:Rf,prog:[0,0,5,6],pad:`sawtooth`,padCut:1300,lead:`sawtooth`,leadPattern:[0,-1,2,0,-1,4,-1,2,0,-1,2,0,5,-1,4,-1],bass:`sawtooth`,bassPattern:[1,Z,1,Z,1,Z,1,Z,1,Z,1,Z,2,Z,3,Z],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14,15],leadOct:2,delay:.2},shopping:{bpm:108,root:53,scale:Vf,prog:[0,1,4,3],pad:`triangle`,padCut:2200,lead:`marimba`,leadPattern:[0,-1,2,4,-1,2,5,-1,4,-1,2,-1,1,2,-1,-1],bass:`triangle`,bassPattern:[1,Z,Z,2,Z,Z,1,Z,3,Z,Z,2,Z,Z,1,Z],kick:[0,8],snare:[4,12],hat:[2,6,10,14],leadOct:1,delay:.25},downtown:{bpm:120,root:42,scale:Rf,prog:[0,5,3,4],pad:`sawtooth`,padCut:1500,lead:`square`,leadPattern:[-1,0,-1,2,-1,0,-1,4,-1,0,-1,2,-1,5,-1,4],bass:`sawtooth`,bassPattern:[Z,Z,1,Z,Z,Z,1,Z,Z,Z,1,Z,Z,Z,3,Z],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14],leadOct:2,delay:.3},industrial:{bpm:96,root:40,scale:Bf,prog:[0,1,0,6],pad:`sawtooth`,padCut:800,lead:`square`,leadPattern:[0,-1,-1,1,-1,-1,0,-1,-1,-1,3,-1,1,-1,-1,-1],bass:`square`,bassPattern:[1,Z,1,Z,Z,1,Z,Z,1,Z,1,Z,Z,2,Z,Z],kick:[0,3,8,11],snare:[4,12],hat:[0,2,4,6,8,10,12,14],leadOct:1,delay:.35,metal:!0},beach:{bpm:104,root:43,scale:Lf,prog:[0,3,4,3],pad:`sine`,padCut:2400,lead:`marimba`,leadPattern:[0,-1,2,-1,4,2,-1,5,-1,4,-1,2,4,-1,2,-1],bass:`triangle`,bassPattern:[1,Z,Z,1,Z,Z,2,Z,1,Z,Z,1,Z,Z,3,Z],kick:[0,6,8],snare:[4,12],hat:[1,3,5,7,9,11,13,15],swing:.1,leadOct:2,delay:.3},neon:{bpm:110,root:45,scale:Rf,prog:[0,5,2,6],pad:`sawtooth`,padCut:1700,lead:`sawtooth`,leadPattern:[0,2,4,2,0,2,4,5,0,2,4,2,0,2,5,4],bass:`sawtooth`,bassPattern:[1,Z,1,1,Z,1,1,Z,1,Z,1,1,Z,1,3,Z],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14],leadOct:2,delay:.375},finale:{bpm:128,root:38,scale:Rf,prog:[0,5,2,6],pad:`sawtooth`,padCut:2e3,lead:`sawtooth`,leadPattern:[0,-1,4,-1,2,-1,5,4,0,-1,4,-1,2,3,4,5],bass:`sawtooth`,bassPattern:[1,Z,3,Z,1,Z,3,Z,1,Z,3,Z,2,Z,3,Z],kick:[0,4,8,12],snare:[4,12],hat:[2,6,10,14,15],leadOct:2,delay:.3}},Uf=e=>440*2**((e-69)/12),Wf=class{ctx;theme=null;step=0;nextTime=0;timer=null;bus;delay;delayFb;delaySend;noise;intensity=0;bar=0;constructor(e,t){this.ctx=e,this.bus=e.createGain(),this.bus.gain.value=0,this.bus.connect(t),this.delay=e.createDelay(1.5),this.delayFb=e.createGain(),this.delayFb.gain.value=.32,this.delaySend=e.createGain(),this.delaySend.gain.value=.28;let n=e.createBiquadFilter();n.type=`lowpass`,n.frequency.value=2800,this.delaySend.connect(this.delay),this.delay.connect(n),n.connect(this.delayFb),this.delayFb.connect(this.delay),n.connect(this.bus);let r=e.sampleRate*1;this.noise=e.createBuffer(1,r,e.sampleRate);let i=this.noise.getChannelData(0);for(let e=0;e<r;e++)i[e]=Math.random()*2-1}play(e){let t=Hf[e];if(this.theme===t&&this.timer!==null)return;let n=this.ctx.currentTime;this.bus.gain.cancelScheduledValues(n),this.bus.gain.setValueAtTime(this.bus.gain.value,n),this.bus.gain.linearRampToValueAtTime(0,n+.4),window.setTimeout(()=>{this.theme=t,this.step=0,this.bar=0,this.delay.delayTime.value=60/t.bpm*(t.delay??.3)*2,this.nextTime=this.ctx.currentTime+.08;let e=this.ctx.currentTime;this.bus.gain.cancelScheduledValues(e),this.bus.gain.setValueAtTime(0,e),this.bus.gain.linearRampToValueAtTime(.9,e+1.2),this.timer===null&&(this.timer=window.setInterval(()=>this.schedule(),40))},this.timer===null?0:420)}stop(){let e=this.ctx.currentTime;this.bus.gain.cancelScheduledValues(e),this.bus.gain.setValueAtTime(this.bus.gain.value,e),this.bus.gain.linearRampToValueAtTime(0,e+.5),window.setTimeout(()=>{this.timer!==null&&window.clearInterval(this.timer),this.timer=null,this.theme=null},520)}schedule(){let e=this.theme;if(!e)return;let t=60/e.bpm/4;for(;this.nextTime<this.ctx.currentTime+.12;){let n=this.step%16,r=this.nextTime;e.swing&&n%2==1&&(r+=t*e.swing),this.playStep(e,n,r,t),this.nextTime+=t,this.step++,this.step%16==0&&this.bar++}}chordTones(e,t){let n=e.scale,r=t=>{let r=Math.floor(t/7);return e.root+n[(t%7+7)%7]+r*12};return[r(t),r(t+2),r(t+4),r(t+7),r(t+9),r(t+11)]}playStep(e,t,n,r){let i=e.prog[this.bar%e.prog.length],a=this.chordTones(e,i);t===0&&this.pad(e,a,n,r*16);let o=e.bassPattern[t];if(o&&e.bass!==`none`){let t=o===1?a[0]:o===2?a[2]:a[0]+12;this.bass(e.bass,Uf(t),n,r*1.8)}let s=e.leadPattern[t];e.lead!==`none`&&s>=0&&(this.intensity>.2||this.bar%4!=3||t<8)&&this.lead(e,Uf(a[s]+12*(e.leadOct??2)),n,r*1.5),e.kick.includes(t)&&this.kick(n,e.metal),e.snare.includes(t)&&this.snare(n,e.metal),(e.hat.includes(t)||this.intensity>.6&&t%2==1)&&this.hat(n,t%4==2?.07:.045)}env(e,t,n,r,i,a){e.gain.setValueAtTime(1e-4,t),e.gain.linearRampToValueAtTime(r,t+n),e.gain.setValueAtTime(r,t+Math.max(n,i-a)),e.gain.exponentialRampToValueAtTime(1e-4,t+i)}pad(e,t,n,r){let i=this.ctx.createBiquadFilter();i.type=`lowpass`,i.frequency.setValueAtTime(e.padCut*(.7+this.intensity*.6),n),i.Q.value=.6;let a=this.ctx.createGain();this.env(a,n,r*.25,.05,r+.3,r*.4),i.connect(a),a.connect(this.bus);for(let a=0;a<3;a++)for(let o of[-7,7]){let s=this.ctx.createOscillator();s.type=e.pad,s.frequency.value=Uf(t[a]+12),s.detune.value=o,s.connect(i),s.start(n),s.stop(n+r+.35)}}bass(e,t,n,r){let i=this.ctx.createOscillator();i.type=e,i.frequency.value=t;let a=this.ctx.createBiquadFilter();a.type=`lowpass`,a.frequency.setValueAtTime(900,n),a.frequency.exponentialRampToValueAtTime(180,n+r);let o=this.ctx.createGain();this.env(o,n,.005,e===`sine`?.22:.13,r,r*.5),i.connect(a),a.connect(o),o.connect(this.bus),i.start(n),i.stop(n+r+.05)}lead(e,t,n,r){let i=this.ctx.createGain();if(i.connect(this.bus),i.connect(this.delaySend),e.lead===`marimba`){for(let[e,r]of[[1,.09],[4,.025]]){let a=this.ctx.createOscillator();a.type=`sine`,a.frequency.value=t*e;let o=this.ctx.createGain();o.gain.setValueAtTime(r,n),o.gain.exponentialRampToValueAtTime(1e-4,n+(e===1?.45:.12)),a.connect(o),o.connect(i),a.start(n),a.stop(n+.5)}i.gain.value=1;return}let a=this.ctx.createOscillator();a.type=e.lead,a.frequency.value=t;let o=this.ctx.createBiquadFilter();o.type=`lowpass`,o.frequency.setValueAtTime(3200+this.intensity*2e3,n),o.frequency.exponentialRampToValueAtTime(600,n+r);let s=e.lead===`triangle`?.08:.035;this.env(i,n,.004,s,r,r*.7),a.connect(o),o.connect(i),a.start(n),a.stop(n+r+.05)}kick(e,t){let n=this.ctx.createOscillator();n.type=`sine`,n.frequency.setValueAtTime(t?120:150,e),n.frequency.exponentialRampToValueAtTime(42,e+.14);let r=this.ctx.createGain();r.gain.setValueAtTime(.42,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.32),n.connect(r),r.connect(this.bus),n.start(e),n.stop(e+.35)}noiseHit(e,t,n,r,i,a){let o=this.ctx.createBufferSource();o.buffer=this.noise;let s=this.ctx.createBiquadFilter();s.type=t,s.frequency.value=n,s.Q.value=r;let c=this.ctx.createGain();c.gain.setValueAtTime(i,e),c.gain.exponentialRampToValueAtTime(1e-4,e+a),o.connect(s),s.connect(c),c.connect(this.bus),o.start(e,Math.random()*.5),o.stop(e+a+.02)}snare(e,t){this.noiseHit(e,`bandpass`,t?2600:1800,t?6:.8,.16,t?.12:.18),t&&this.noiseHit(e,`bandpass`,5200,12,.06,.25)}hat(e,t){this.noiseHit(e,`highpass`,7e3,.7,t,.05)}},Gf=e=>440*2**((e-69)/12),Kf=new class{ctx=null;master;musicGain;sfxGain;music=null;noise;pendingTheme=null;musicVol=.6;sfxVol=.8;muted=!1;recent=[];suspendedByApp=!1;constructor(){let e=()=>{this.ensure(),this.ctx&&this.ctx.state===`suspended`&&!this.suspendedByApp&&this.ctx.resume()};window.addEventListener(`pointerdown`,e,{passive:!0}),window.addEventListener(`keydown`,e),window.addEventListener(`touchend`,e,{passive:!0})}ensure(){if(this.ctx)return;let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.knee.value=12,n.ratio.value=4,n.attack.value=.004,n.release.value=.2,n.connect(t.destination),this.master=t.createGain(),this.master.connect(n),this.musicGain=t.createGain(),this.sfxGain=t.createGain(),this.musicGain.connect(this.master),this.sfxGain.connect(this.master),this.applyVolumes();let r=t.sampleRate;this.noise=t.createBuffer(1,r,t.sampleRate);let i=this.noise.getChannelData(0);for(let e=0;e<r;e++)i[e]=Math.random()*2-1;this.music=new Wf(t,this.musicGain),this.pendingTheme&&this.music.play(this.pendingTheme)}get ready(){return!!this.ctx}setVolumes(e,t){this.musicVol=e,this.sfxVol=t,this.applyVolumes()}setMuted(e){this.muted=e,this.applyVolumes()}get isMuted(){return this.muted}applyVolumes(){if(!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(+!this.muted,e,.05),this.musicGain.gain.setTargetAtTime(this.musicVol*.55,e,.05),this.sfxGain.gain.setTargetAtTime(this.sfxVol*.9,e,.05)}suspend(){this.suspendedByApp=!0,this.ctx&&this.ctx.state===`running`&&this.ctx.suspend()}resume(){this.suspendedByApp=!1,this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}playMusic(e){this.pendingTheme=e,this.music?.play(e)}stopMusic(){this.pendingTheme=null,this.music?.stop()}setIntensity(e){this.music&&(this.music.intensity=e)}osc(e,t,n,r,i,a,o){let s=this.ctx,c=s.createOscillator();c.type=e,c.frequency.setValueAtTime(t,r),c.frequency.exponentialRampToValueAtTime(Math.max(20,n),r+i);let l=s.createGain();l.gain.setValueAtTime(1e-4,r),l.gain.linearRampToValueAtTime(a,r+Math.min(.012,i*.2)),l.gain.exponentialRampToValueAtTime(1e-4,r+i),c.connect(l),l.connect(o??this.sfxGain),c.start(r),c.stop(r+i+.02)}noiseBurst(e,t,n,r,i,a,o){let s=this.ctx,c=s.createBufferSource();c.buffer=this.noise;let l=s.createBiquadFilter();l.type=t,l.frequency.setValueAtTime(n,e),o&&l.frequency.exponentialRampToValueAtTime(o,e+a),l.Q.value=r;let u=s.createGain();u.gain.setValueAtTime(i,e),u.gain.exponentialRampToValueAtTime(1e-4,e+a),c.connect(l),l.connect(u),u.connect(this.sfxGain),c.start(e,Math.random()*.6),c.stop(e+a+.02)}throttle(e){let t=performance.now();return this.recent=this.recent.filter(e=>t-e<120),this.recent.length>=e?!1:(this.recent.push(t),!0)}gulp(e,t,n,r){if(!this.ctx||!this.throttle(r?10:6))return;let i=this.ctx.currentTime+.005,a=2**(Math.min(n,14)/24),o=Math.min(1,Math.max(0,t)),s=(520-o*380)*a;switch(this.osc(`sine`,s*1.6,s*.45,i,.16+o*.2,.32),(r||o>.6)&&(this.osc(`sine`,110*a,38,i,.55,.45),this.noiseBurst(i,`lowpass`,900,.7,.28,.5,120)),e){case`metal`:this.osc(`square`,1400*a,900,i,.12,.04),this.noiseBurst(i,`bandpass`,3200,8,.08,.15);break;case`glass`:this.osc(`sine`,2600*a,2400,i+.02,.18,.06),this.osc(`sine`,3400*a,3300,i+.06,.15,.04);break;case`wood`:this.noiseBurst(i,`bandpass`,700,3,.18,.08);break;case`soft`:this.noiseBurst(i,`lowpass`,1200,.5,.12,.12,300);break;case`tech`:this.osc(`square`,880*a,1760*a,i,.08,.035),this.osc(`square`,1320*a,2640*a,i+.05,.08,.03);break;case`plastic`:this.osc(`triangle`,700*a,300,i,.1,.12);break;case`organic`:this.noiseBurst(i,`bandpass`,1500,1.2,.08,.06);break;case`heavy`:this.osc(`sawtooth`,70,30,i,.8,.12),this.noiseBurst(i,`lowpass`,400,.7,.4,.9,60)}}growth(e){if(!this.ctx)return;let t=this.ctx.currentTime,n=this.ctx,r=n.createOscillator();r.type=`sawtooth`,r.frequency.setValueAtTime(110+e*8,t),r.frequency.exponentialRampToValueAtTime(440+e*30,t+.45);let i=n.createBiquadFilter();i.type=`lowpass`,i.frequency.setValueAtTime(300,t),i.frequency.exponentialRampToValueAtTime(4e3,t+.45);let a=n.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(.14,t+.1),a.gain.exponentialRampToValueAtTime(1e-4,t+.7),r.connect(i),i.connect(a),a.connect(this.sfxGain),r.start(t),r.stop(t+.75),[0,4,7,12].forEach((n,r)=>this.osc(`triangle`,Gf(72+n+e%5),Gf(72+n+e%5),t+.3+r*.05,.3,.07)),this.osc(`sine`,80,40,t,.5,.3)}combo(e){if(!this.ctx)return;let t=this.ctx.currentTime,n=[0,4,7,12,16],r=Math.min(n.length,2+e);for(let i=0;i<r;i++)this.osc(`square`,Gf(76+n[i]+e*2),Gf(76+n[i]+e*2),t+i*.055,.12,.05)}power(){if(!this.ctx)return;let e=this.ctx.currentTime;for(let t=0;t<6;t++)this.osc(`triangle`,Gf(79+t*3),Gf(79+t*3+12),e+t*.04,.25,.06);this.noiseBurst(e,`highpass`,6e3,.6,.08,.6)}chain(){if(!this.ctx)return;let e=this.ctx.currentTime;[72,76,79,84,88].forEach((t,n)=>this.osc(`sine`,Gf(t),Gf(t),e+n*.06,.35,.09))}objective(){if(!this.ctx)return;let e=this.ctx.currentTime;[60,64,67,72].forEach(t=>this.osc(`triangle`,Gf(t+12),Gf(t+12),e,1,.06)),[72,76,79,84].forEach((t,n)=>this.osc(`square`,Gf(t+12),Gf(t+12),e+.12*n,.2,.035))}tick(e){if(!this.ctx)return;let t=this.ctx.currentTime;this.osc(`square`,e?1760:1320,e?1700:1300,t,.05,e?.07:.045)}win(){if(!this.ctx)return;let e=this.ctx.currentTime;[60,64,67,72,76,79,84].forEach((t,n)=>this.osc(`triangle`,Gf(t+12),Gf(t+12),e+n*.08,.5,.08)),[60,64,67].forEach(t=>this.osc(`sawtooth`,Gf(t),Gf(t),e+.6,1.2,.03))}lose(){if(!this.ctx)return;let e=this.ctx.currentTime;[67,63,60,55].forEach((t,n)=>this.osc(`triangle`,Gf(t+12),Gf(t+12)*.98,e+n*.16,.45,.08))}star(e){if(!this.ctx)return;let t=this.ctx.currentTime,n=[76,79,84][Math.min(2,e)];this.osc(`sine`,Gf(n+12),Gf(n+12),t,.6,.12),this.osc(`triangle`,Gf(n),Gf(n),t,.5,.08),this.noiseBurst(t,`highpass`,8e3,.5,.06,.4)}hover(){this.ctx&&this.throttle(4)&&this.osc(`sine`,1800,2200,this.ctx.currentTime,.04,.025)}click(){if(!this.ctx)return;let e=this.ctx.currentTime;this.osc(`triangle`,880,1320,e,.07,.08),this.osc(`sine`,220,110,e,.08,.08)}back(){this.ctx&&this.osc(`triangle`,660,330,this.ctx.currentTime,.09,.08)}bump(){this.ctx&&this.throttle(3)&&this.osc(`sine`,160,90,this.ctx.currentTime,.12,.08)}finale(){if(!this.ctx)return;let e=this.ctx.currentTime;this.osc(`sawtooth`,55,25,e,3,.2),this.noiseBurst(e,`lowpass`,1200,.5,.5,3,50),[50,57,62,69,74].forEach((t,n)=>this.osc(`triangle`,Gf(t+12),Gf(t+12),e+.8+n*.12,2,.07))}whoosh(){this.ctx&&this.noiseBurst(this.ctx.currentTime,`bandpass`,400,1.2,.18,.5,3e3)}},qf=1.15,Jf=[[5,`NICE!`],[10,`GREAT!`],[20,`MASSIVE COMBO!`],[35,`ABSOLUTE DEVOURER!`]],Yf={time:0,magnet:7,multiplier:8,surge:7},Xf=new W,Zf=class{engine;def;mode;input;hooks;scene=new Un;rig;objects=[];growth;hole=new wf;particles=new jf;ctx;sun;hemi;ground;disposables=[];lanes=[];lightPhase=0;lightTimer=0;uid=0;hx=0;hz=0;vx=0;vz=0;radius;surgeMul=1;time=0;timeLeft;score=0;eaten=0;tagCounts={};counts={};combo=0;comboTimer=0;maxCombo=0;comboMsgIdx=0;powers={time:0,magnet:0,multiplier:0,surge:0};objectivesDone=!1;doneAt=-1;speedBonus=0;state=`intro`;introT=0;endT=0;timeScale=1;finaleT=0;chains=new Map;secretFound=!1;lastTick=99;tutorialStep=0;respawnQueue=[];hasMoved=!1;botTarget=null;botRetarget=0;bot=!1;botIgnore=new Set;lodT=0;paused=!1;constructor(e,t,n,r,i={}){this.engine=e,this.def=t,this.mode=n,this.input=r,this.hooks=i,this.bot=n===`demo`;let a=t.theme;this.rig=new zd(e.width/e.height),this.timeLeft=t.duration,this.growth=new Df(t.startTier,t.maxTier,t.growth),this.radius=Tf[t.startTier];let o=e.quality===`low`?2048:e.quality===`medium`?3072:4096;this.ctx=new rf(t.w,t.h,t.margin,t.seed,o,!!a.night,e.quality===`low`?1024:2048),t.build(this.ctx);let s=this.scene;s.background=new q(a.sky),s.fog=new Hn(a.fog,30,120),this.hemi=new Jo(a.hemiSky,a.hemiGround,a.hemiIntensity*.85),s.environment=e.envMap,s.environmentIntensity=a.night?.12:.16,s.add(this.hemi),this.sun=new ds(a.sunColor,a.sunIntensity),this.sun.castShadow=!0;let c=e.shadowSize;this.sun.shadow.mapSize.set(c,c),this.sun.shadow.bias=-25e-5,this.sun.shadow.normalBias=.025,this.sun.shadow.radius=2,s.add(this.sun,this.sun.target);let l=this.ctx.ext,u=this.ctx.innerExt,d=Math.min(16,e.maxAnisotropy),f=this.ctx.inner.texture(d),p=u.maxX-u.minX,m=u.maxZ-u.minZ,h=df(f,new U(u.minX,u.minZ),new U(p,m)),g=new so(p,m,1,1);if(g.rotateX(-Math.PI/2),this.ground=new oi(g,h),this.ground.position.set((u.minX+u.maxX)/2,0,(u.minZ+u.maxZ)/2),this.ground.receiveShadow=!0,s.add(this.ground),this.disposables.push(f,h,g),this.ctx.outer!==this.ctx.inner){let e=this.ctx.outer.texture(d),t=df(e,new U(l.minX,l.minZ),new U(l.maxX-l.minX,l.maxZ-l.minZ)),n=new _a([new U(l.minX,-l.minZ),new U(l.maxX,-l.minZ),new U(l.maxX,-l.maxZ),new U(l.minX,-l.maxZ)]);n.holes.push(new ga([new U(u.minX,-u.minZ),new U(u.minX,-u.maxZ),new U(u.maxX,-u.maxZ),new U(u.maxX,-u.minZ)]));let r=new lo(n);r.rotateX(-Math.PI/2);let i=new oi(r,t);i.receiveShadow=!0,s.add(i),this.disposables.push(e,t,r)}let _=new _a([new U(-3e3,-3e3),new U(3e3,-3e3),new U(3e3,3e3),new U(-3e3,3e3)]);_.holes.push(new ga([new U(l.minX,l.minZ),new U(l.minX,l.maxZ),new U(l.maxX,l.maxZ),new U(l.maxX,l.minZ)]));let v=new lo(_);v.rotateX(Math.PI/2);let y=new oi(v,new wo({color:this.outerColor(),roughness:1,side:2}));y.position.y=-.01,s.add(y),this.disposables.push(v,y.material);let b=gf();for(let e of this.ctx.buildScenery()){let t=new oi(e,b.list);t.castShadow=!0,t.receiveShadow=!0,t.matrixAutoUpdate=!1,t.updateMatrix(),s.add(t),this.disposables.push(e)}for(let e of this.ctx.extras)s.add(e);for(let e of this.ctx.placements){let t=this.spawn(e.id,e.variant,e.x,e.z,e.rot);if(t.chain=e.chain,t.respawn=!!e.respawn||n===`demo`,e.wander&&(t.wander=e.wander),e.chain){let t=this.chains.get(e.chain)??{total:0,eaten:0};t.total++,this.chains.set(e.chain,t)}}for(let e of this.ctx.lanes){let t={...e,cars:[],spawnTimer:0};this.lanes.push(t);let n=Math.hypot(e.x1-e.x0,e.z1-e.z0),r=Math.floor(n/14);for(let e=0;e<r;e++)this.ctx.rng.chance(.35)||this.spawnOnLane(this.lanes.length-1,e/r*n+this.ctx.rng.range(0,3))}s.add(this.hole.group),s.add(this.particles.points),af.uHoleTint.value.set(a.holeTint),[this.hx,this.hz]=t.start??[0,0],this.findStart(),this.rig.bounds={minX:-t.w/2,maxX:t.w/2,minZ:-t.h/2,maxZ:t.h/2},this.rig.shakeEnabled=!0,this.rig.snap(this.hx,this.hz,this.radius),n===`play`&&(this.rig.setZoom(1),this.rig.zoomMul=2.2),n===`demo`&&(this.rig.orbit=0),this.applyUniforms(),e.setBloom(a.bloom),e.renderer.toneMappingExposure=a.exposure,this.particles.setViewport(e.height),this.particles.budget=e.quality===`low`?.5:e.quality===`medium`?.8:1}outerColor(){let e=this.ctx.outer.ctx.getImageData(1,1,1,1).data;return new q(`rgb(${e[0]},${e[1]},${e[2]})`)}findStart(){let e=this.radius;for(let t=0;t<200;t++){let n=t*2.39996,r=Math.sqrt(t)*1.2,i=this.hx+Math.cos(n)*r*+!!t,a=this.hz+Math.sin(n)*r*+!!t,o=!0;for(let t of this.objects){if(t.state!==`idle`)continue;let n=Math.max(t.asset.hx,t.asset.hz)+e+.3;if(Math.abs(t.x-i)<n&&Math.abs(t.z-a)<n){o=!1;break}}if(o){this.hx=i,this.hz=a;return}}}spawn(e,t,n,r,i){let a=$d(e,t),o=gf(),s=new oi(a.geometry,o.list);s.castShadow=!a.def.noShadow&&(this.engine.quality!==`low`||a.height>1.2),s.receiveShadow=this.engine.quality!==`low`||a.size>1;let c=new If(++this.uid,a,s,n,r,i);return c.castsShadow=s.castShadow,this.objects.push(c),this.scene.add(s),c}spawnOnLane(e,t){let n=this.lanes[e],r=this.ctx.rng.pick(n.ids),i=Math.atan2(-(n.z1-n.z0),n.x1-n.x0),a=Math.hypot(n.x1-n.x0,n.z1-n.z0),o=n.x0+(n.x1-n.x0)*t/a,s=n.z0+(n.z1-n.z0)*t/a,c=this.respawnQueue.find(t=>t.lane===e&&t.state===`gone`&&t.asset.def.id===r)??null;return c?(this.respawnQueue.splice(this.respawnQueue.indexOf(c),1),c.asset=$d(r,this.ctx.rng.int(0,ef(r)-1)),c.mesh.geometry=c.asset.geometry,c.x=o,c.z=s,c.rot=i,c.y=0,c.tilt=0,c.spin=0,c.state=`idle`,c.mesh.visible=!0,c.sync()):c=this.spawn(r,this.ctx.rng.int(0,ef(r)-1),o,s,i),c.lane=e,c.laneT=t,c.speed=n.speed,n.hover&&(c.baseY=n.hover),n.cars.push(c),c}get sizeLevel(){return this.growth.tier-this.def.startTier+1}get effectiveRadius(){return this.radius}get comboMult(){let e=this.combo;return e>=30?2:e>=18?1.75:e>=10?1.5:e>=5?1.25:1}objectiveValue(e){if(e.kind===`count`)return this.eaten;if(e.kind===`score`)return this.score;let t=Array.isArray(e.tag)?e.tag:[e.tag],n=0;for(let e of t)n+=this.tagCounts[e]??0;return n}objectiveProgress(){return this.def.objectives.map(e=>{let t=this.objectiveValue(e);return{o:e,v:t,done:t>=e.target}})}project(e,t,n){return Xf.set(e,t,n).project(this.rig.camera),{x:(Xf.x*.5+.5)*this.engine.width,y:(-Xf.y*.5+.5)*this.engine.height,visible:Xf.z<1&&Math.abs(Xf.x)<1.2&&Math.abs(Xf.y)<1.2}}resize(){this.rig.setAspect(this.engine.width/this.engine.height),this.particles.setViewport(this.engine.height)}update(e){if(this.paused)return;this.state===`finale`&&(this.finaleT+=e,this.timeScale=this.finaleT<2.4?.22:Ad(this.timeScale,1,jd(3,e)),this.finaleT>3.6&&(this.timeScale=1,this.rig.orbit=0,this.rig.setZoom(1),this.objectivesDone?this.finish():this.state=`playing`));let t=e*this.timeScale;this.time+=t,af.uTime.value+=t,this.state===`intro`&&(this.introT+=e,this.introT>(this.mode===`demo`?0:.9)&&(this.state=`playing`,this.def.tutorial&&this.tut(1)));let n=this.state===`playing`||this.state===`finale`;if(this.state===`playing`&&this.mode===`play`){this.timeLeft-=t;let e=Math.ceil(this.timeLeft);this.timeLeft<=10&&e!==this.lastTick&&e>0&&(this.lastTick=e,Kf.tick(e<=5),e===10&&this.hooks.message?.(`10 SECONDS LEFT`,`warn`)),Kf.setIntensity(this.timeLeft<10?1:this.combo>8?.7:.3),this.timeLeft<=0&&(this.timeLeft=0,this.finish())}for(let e of Object.keys(this.powers))this.powers[e]>0&&(this.powers[e]=Math.max(0,this.powers[e]-t));this.surgeMul=Ad(this.surgeMul,this.powers.surge>0?1.4:1,jd(4,t)),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=0,this.comboMsgIdx=0));let r=0,i=0;if(n){if(this.bot){let e=this.botMove(t);r=e.x,i=e.y}else if(this.input){let e=this.input.getMove();r=e.x,i=e.y}}(r||i)&&!this.hasMoved&&(this.hasMoved=!0,this.def.tutorial&&this.tut(2));let a=this.rig.yaw,o=r*Math.cos(a)+i*Math.sin(a),s=-r*Math.sin(a)+i*Math.cos(a),c=2.4+this.radius*3.1,l=jd(r||i?7:5,t);this.vx=Ad(this.vx,o*c,l),this.vz=Ad(this.vz,s*c,l),this.hx+=this.vx*t,this.hz+=this.vz*t;let u=this.growth.radius*this.surgeMul;this.radius=Ad(this.radius,u,jd(5,t)),af.uPulse.value=Math.max(0,af.uPulse.value-t*1.6),this.collide();let d=this.ctx.bounds,f=this.radius;if(this.hx=kd(this.hx,d.minX+f,d.maxX-f),this.hz=kd(this.hz,d.minZ+f,d.maxZ-f),this.updateLanes(t),this.updateObjects(t,n),this.updateRespawn(),this.rig.update(e,this.hx,this.hz,this.vx,this.vz,this.radius),this.applyUniforms(),this.updateShadow(),this.particles.holeX=this.hx,this.particles.holeZ=this.hz,this.particles.holeR=this.radius,this.particles.update(t),this.hole.update(this.hx,this.hz,this.radius,t),this.input){let e=this.project(this.hx,0,this.hz);this.input.holeScreen.x=e.x,this.input.holeScreen.y=e.y}this.state===`ending`&&(this.endT+=e,this.endT>1.6&&(this.state=`ended`,this.hooks.end?.(this.result())))}applyUniforms(){af.uHolePos.value.set(this.hx,this.hz),af.uHoleR.value=this.radius;let e=this.scene.fog,t=this.rig.distance;e.near=t*(this.def.theme.fogNear??1.5),e.far=t*(this.def.theme.fogFar??4.2)}updateShadow(){let e=this.rig.focus,t=this.rig.distance,n=t*.95+6,r=1.18**Math.ceil(Math.log(n)/Math.log(1.18)),i=this.sun.shadow.camera,a=r*2/this.sun.shadow.mapSize.x,o=Math.round(e.x/a)*a,s=Math.round(e.z/a)*a,[c,l,u]=this.def.theme.sunDir,d=Math.hypot(c,l,u),f=60+t*1.5;this.sun.position.set(o+c/d*f,l/d*f,s+u/d*f),this.sun.target.position.set(o,0,s),i.right!==r&&(i.left=-r,i.right=r,i.top=r,i.bottom=-r),i.near=1,i.far=f*2+40,i.updateProjectionMatrix()}collide(){let e=this.radius;for(let t of this.objects){if(t.state!==`idle`)continue;let n=t.asset,r=Math.max(n.hx,n.hz)+e,i=this.hx-t.x,a=this.hz-t.z;if(Math.abs(i)>r||Math.abs(a)>r){t.wobble>0&&(t.wobble=Math.max(0,t.wobble-.05),t.sync());continue}if(n.size<=e||n.def.tags.includes(`special`)||n.def.tags.includes(`chain`))continue;let o=Math.cos(t.rot),s=Math.sin(t.rot),c=i*o-a*s,l=i*s+a*o,u=n.def.solid??.92,d=n.hx*u,f=n.hz*u,p=kd(c,-d,d),m=kd(l,-f,f),h=c-p,g=l-m,_=Math.hypot(h,g),v=e*.55;if(_>=v)continue;let y;if(_<1e-5){let e=d-Math.abs(c),t=f-Math.abs(l);e<t?(h=Math.sign(c)||1,g=0,y=e+v):(h=0,g=Math.sign(l)||1,y=t+v),_=1}else y=v-_,h/=_,g/=_;let b=h*o+g*s,x=-h*s+g*o;this.hx+=b*y,this.hz+=x*y;let S=this.vx*b+this.vz*x;if(S<0&&(this.vx-=b*S*.9,this.vz-=x*S*.9,S<-1.5&&this.mode===`play`&&Kf.bump()),t.wobble=Math.min(1,t.wobble+.25),t.wobbleAmp=n.size>e*1.8?0:.07*Math.min(1,1.8-n.size/e),t.wobbleDir=Math.atan2(this.hz-t.z,this.hx-t.x),t.sync(),t.hintCooldown<=this.time&&this.mode===`play`){t.hintCooldown=this.time+2.5;let e=this.levelFor(n.size);this.hooks.float?.({x:t.x,y:n.height+.3,z:t.z,text:e>0?`SIZE ${e}`:`TOO BIG`,kind:`lock`}),this.def.tutorial&&this.tut(4)}}}levelFor(e){for(let t=this.def.startTier;t<Tf.length;t++)if(Tf[t]>=e)return t-this.def.startTier+1;return-1}updateObjects(e,t){let n=this.radius,r=this.hx,i=this.hz,a=this.rig.distance,o=this.rig.focus.x,s=this.rig.focus.z,c=a*1.6+10,l=this.powers.magnet>0,u=n*4+3;this.lodT-=e;let d=this.lodT<=0;d&&(this.lodT=.3);let f=a*(this.engine.quality===`low`?.013:this.engine.quality===`medium`?.009:.006),p=a*(this.engine.quality===`high`?.012:.022);for(let a of this.objects){if(a.state===`gone`)continue;if(d&&a.state===`idle`){let e=Math.max(a.asset.size,a.asset.height*.6),t=e>f;a.mesh.visible!==t&&(a.mesh.visible=t);let n=a.castsShadow&&e>p;a.mesh.castShadow!==n&&(a.mesh.castShadow=n)}if(a.state===`falling`){this.updateFall(a,e);continue}if(a.state===`spawning`){a.spawnT+=e*2.5;let t=a.spawnT>=1?1:1-(1-a.spawnT)**3*1;a.sync(Math.max(.01,t*(1+Math.sin(a.spawnT*Math.PI)*.15))),a.spawnT>=1&&(a.state=`idle`,a.sync());continue}let m=Math.abs(a.x-o)<c&&Math.abs(a.z-s)<c,h=a.asset.def.idle;if(m&&h&&h!==`none`&&this.animateIdle(a,e),a.wobble>0&&!(Math.abs(a.x-r)<n+3&&Math.abs(a.z-i)<n+3)&&(a.wobble=Math.max(0,a.wobble-e*3),a.sync()),!t)continue;let g=a.asset.size,_=g<=n,v=a.x-r,y=a.z-i,b=n+Math.max(a.asset.hx,a.asset.hz)+(l&&_?u:.2);if(Math.abs(v)>b||Math.abs(y)>b)continue;let x=Math.hypot(v,y);if(!_)continue;if(x<n-g*.35){this.startFall(a);continue}let S=n+g*.55;if(x<S||l&&x<u){let t=x<S?.5+n*.9:2+n*2.5,r=Math.min(1,t*e/Math.max(x,.001));a.x-=v*r,a.z-=y*r,a.wobble=x<S?.6:0,a.wobbleDir=Math.atan2(-y,-v),a.sync()}}}animateIdle(e,t){switch(e.phase+=t,e.asset.def.idle){case`spin`:e.rot+=t*1.8,e.y=Math.sin(e.phase*2.5)*.06+.06;break;case`bob`:e.y=Math.abs(Math.sin(e.phase*3))*.12;break;case`hover`:e.y=Math.sin(e.phase*2)*.12;break;case`robot`:{if(e.lane>=0)break;let n=e.wander||3;e.heading+=Math.sin(e.phase*.7+e.uid)*t*.9;let r=e.homeX-e.x,i=e.homeZ-e.z;Math.hypot(r,i)>n&&(e.heading=Math.atan2(i,r));let a=.9,o=e.x+Math.cos(e.heading)*a*t,s=e.z+Math.sin(e.heading)*a*t,c=Math.hypot(o-this.hx,s-this.hz);if(e.asset.size>this.radius&&c<this.radius+Math.max(e.asset.hx,e.asset.hz)+.3){e.heading+=Math.PI*.5;break}e.x=o,e.z=s,e.rot=e.asset.hx>e.asset.hz*1.2?-e.heading:Math.PI/2-e.heading,e.y=Math.abs(Math.sin(e.phase*6))*.04;break}case`sway`:e.rot+=Math.sin(e.phase)*t*.2}e.sync()}startFall(e){if(e.state=`falling`,e.mesh.visible=!0,e.vy=0,e.y=0,e.fallT=0,e.tilt=0,e.tiltDir=Math.atan2(this.hz-e.z,this.hx-e.x),e.spin=0,e.lane>=0){let t=this.lanes[e.lane];t.cars.splice(t.cars.indexOf(e),1)}}updateFall(e,t){let n=this.radius;e.fallT+=t;let r=14+n*9;e.vy-=r*t,e.y+=e.vy*t,e.x+=this.vx*t,e.z+=this.vz*t;let i=e.x-this.hx,a=e.z-this.hz,o=Math.hypot(i,a),s=Math.max(0,n*.92-e.asset.size*.55);if(o>s&&o>1e-4){let n=Math.min(1,t*10);e.x-=i/o*(o-s)*n,e.z-=a/o*(o-s)*n}else e.x-=i*Math.min(1,t*1.5),e.z-=a*Math.min(1,t*1.5);e.tiltDir=Math.atan2(this.hz-e.z,this.hx-e.x),e.tilt=Math.min(1.3,e.tilt+t*(3.5+1/Math.max(.3,e.asset.size))),e.spin+=t*2.2;let c=n*2.2+.2,l=1-kd(-e.y/(c+e.asset.height),0,1)*.55;e.sync(l),(e.y+e.asset.height*l*.4<-c||e.fallT>3)&&this.consume(e)}consume(e){e.state=`gone`,e.mesh.visible=!1;let t=e.asset,n=t.def,r=this.radius,i=t.size/r;if(this.mode===`demo`){this.growth.add(t.mass*this.def.growth),this.particles.swallow(e.x,e.z,t.color,6+i*10,t.height,af.uHoleTint.value),this.queueRespawn(e);return}if(this.state===`ended`)return;this.combo=this.comboTimer>0?this.combo+1:1,this.comboTimer=qf,this.maxCombo=Math.max(this.maxCombo,this.combo);let a=this.comboMult*(this.powers.multiplier>0?2:1),o=Math.round(n.points*a);this.score+=o,this.eaten++;for(let e of n.tags)this.tagCounts[e]=(this.tagCounts[e]??0)+1;this.counts[n.id]=(this.counts[n.id]??0)+1;let s=i>.62&&t.size>.5;for(this.hooks.float?.({x:this.hx+(e.x-this.hx)*.3,y:Math.min(t.height,3)*.5+r*.6,z:this.hz+(e.z-this.hz)*.3,text:`+${o}`,kind:s?`big`:o>=300?`bonus`:`pts`}),Kf.gulp(n.sound??`soft`,i,this.combo,s||t.size>3),this.particles.swallow(e.x,e.z,t.color,5+i*16+(s?14:0),Math.min(t.height,r*2),af.uHoleTint.value),s&&(this.rig.addTrauma(.22+Math.min(.4,t.size*.04)),this.rig.kickFov(2.5),af.uPulse.value=Math.max(af.uPulse.value,.6),(t.size>1.5||i>.85)&&this.hooks.message?.(Qf([`DELICIOUS!`,`BIG BITE!`,`MONSTER MEAL!`,`CRUNCH!`]),`big`));this.comboMsgIdx<Jf.length&&this.combo>=Jf[this.comboMsgIdx][0];)this.hooks.message?.(Jf[this.comboMsgIdx][1],`combo`),Kf.combo(this.comboMsgIdx),this.comboMsgIdx++;if(this.growth.add(t.mass*this.def.growth)>0&&(af.uPulse.value=1,this.hole.shockwave(),this.rig.addTrauma(.15),this.rig.kickFov(3.5),Kf.growth(this.growth.tier),this.particles.rise(this.hx,this.hz,this.radius,40,af.uHoleTint.value,.6+this.radius*.4),this.hooks.message?.(`SIZE ${this.sizeLevel}`,`size`),this.hooks.tier?.(this.sizeLevel),this.engine.flash=.12,this.engine.flashColor.set(this.def.theme.holeTint),this.def.tutorial&&this.tut(3)),n.power&&this.activatePower(n.power),e.chain){let t=this.chains.get(e.chain);if(t&&(t.eaten++,t.eaten===t.total)){let e=t.total*30+150;this.score+=e,this.hooks.message?.(`CHAIN COMPLETE +${e}`,`chain`),Kf.chain(),this.particles.burst(this.hx,.4,this.hz,30,4,[new q(`#ffc94a`),new q(`#fff1b8`)],1)}}if(n.tags.includes(`secret`)&&(this.secretFound=!0,this.hooks.message?.(`SECRET FOUND!`,`secret`),Kf.power()),!this.objectivesDone&&this.objectiveProgress().every(e=>e.done)){this.objectivesDone=!0,this.doneAt=this.timeLeft,this.speedBonus=Math.round(this.timeLeft/this.def.duration*this.def.stars[0]*.3),this.hooks.objectiveDone?.(),this.hooks.message?.(`OBJECTIVE COMPLETE`,`objective`),Kf.objective();let e=[`#ffc94a`,`#3de8ff`,`#ff3d9a`,`#7b5cff`,`#ffffff`].map(e=>new q(e));this.particles.burst(this.hx,.5,this.hz,120,5+this.radius*2,e,.8+this.radius*.3),this.engine.flash=.25,this.engine.flashColor.set(`#ffffff`)}this.def.finaleProp&&n.id===this.def.finaleProp&&this.startFinale(),e.respawn&&this.queueRespawn(e)}activatePower(e){let t={time:`TIME +6s`,magnet:`GRAVITY PULL`,multiplier:`DOUBLE POINTS`,surge:`VOID SURGE`};e===`time`?this.timeLeft+=6:this.powers[e]=Yf[e],this.hooks.message?.(t[e],`power`),this.hooks.power?.(e,Yf[e]),Kf.power(),this.particles.rise(this.hx,this.hz,this.radius,30,new q(e===`time`?`#3de8ff`:e===`magnet`?`#ff3d9a`:e===`multiplier`?`#ffc94a`:`#7b5cff`),1+this.radius*.3)}startFinale(){this.state=`finale`,this.finaleT=0,this.rig.setZoom(1.45),this.rig.orbit=.35,this.rig.addTrauma(.9),this.engine.flash=.6,this.engine.flashColor.set(`#ffffff`),Kf.finale();let e=[`#ffc94a`,`#ffffff`,`#ff3d9a`,`#7b5cff`,`#3de8ff`].map(e=>new q(e));this.particles.burst(this.hx,1,this.hz,400,10+this.radius*2.5,e,2.5+this.radius*.3,1.4),this.particles.rise(this.hx,this.hz,this.radius,200,af.uHoleTint.value,3),this.hooks.message?.(`THE WORLD IS CONSUMED`,`finale`)}queueRespawn(e){e.lane>=0||(e.respawnAt=this.time+9+Math.random()*8),this.respawnQueue.push(e)}updateRespawn(){if(!this.respawnQueue.length)return;let e=Math.max(14,this.rig.distance*1.5);for(let t=this.respawnQueue.length-1;t>=0;t--){let n=this.respawnQueue[t];n.lane>=0||this.time<n.respawnAt||Math.hypot(n.homeX-this.hx,n.homeZ-this.hz)<e||(this.respawnQueue.splice(t,1),n.x=n.homeX,n.z=n.homeZ,n.y=0,n.tilt=0,n.spin=0,n.state=`spawning`,n.spawnT=0,n.mesh.visible=!0,n.sync(.01))}}updateLanes(e){if(!this.lanes.length)return;this.lightTimer+=e,this.lightTimer>9&&(this.lightTimer=0,this.lightPhase=1-this.lightPhase);let t=this.lightTimer>7.5;for(let n=0;n<this.lanes.length;n++){let r=this.lanes[n],i=Math.hypot(r.x1-r.x0,r.z1-r.z0),a=(r.x1-r.x0)/i,o=(r.z1-r.z0)/i;r.cars.sort((e,t)=>t.laneT-e.laneT);for(let n=0;n<r.cars.length;n++){let s=r.cars[n];if(s.state!==`idle`)continue;let c=r.speed,l=n>0?r.cars[n-1]:null,u=s.asset.hx;if(l){let e=l.laneT-s.laneT-l.asset.hx-u;e<2.5?c=0:e<7&&(c=Math.min(c,l.speed+(e-2.5)*.8))}if(r.stop){let e=this.lightPhase!==r.stop.group||t,n=r.stop.at-(s.laneT+u);e&&n>-.5&&n<9&&(c=Math.min(c,Math.max(0,n-.5)*1.2))}if(s.asset.size>this.radius){let e=s.x+a*(u+1.5),t=s.z+o*(u+1.5);Math.hypot(e-this.hx,t-this.hz)<this.radius+1.2&&(c=0)}s.speed=Ad(s.speed,c,jd(c<s.speed?4:1.5,e)),s.laneT+=s.speed*e,s.x=r.x0+a*s.laneT,s.z=r.z0+o*s.laneT,s.asset.def.idle===`hover`&&(s.y=Math.sin(this.time*2+s.uid)*.12),s.sync(),s.laneT>i+2&&(r.cars.splice(n,1),n--,s.state=`gone`,s.mesh.visible=!1,this.respawnQueue.push(s))}r.spawnTimer-=e;let s=r.cars[r.cars.length-1],c=!s||s.laneT>12;r.spawnTimer<=0&&c&&Math.hypot(r.x0-this.hx,r.z0-this.hz)>this.radius+6&&(r.spawnTimer=2.5+Math.random()*4,this.objects.filter(e=>e.lane===n&&e.state!==`gone`).length<Math.floor(i/11)&&this.spawnOnLane(n,-3))}}botStuckT=0;botLast={x:0,z:0,t:0};botEscape=0;botEscapeDir=0;botMove(e){this.botRetarget-=e;let t=this.radius;if(this.botStuckT+=e,this.botStuckT>1.2&&(Math.hypot(this.hx-this.botLast.x,this.hz-this.botLast.z)<t*.8&&this.botTarget&&(this.botEscape=.9,this.botEscapeDir=Math.random()*Math.PI*2,this.botIgnore.add(this.botTarget.uid),this.botTarget=null),this.botStuckT=0,this.botLast={x:this.hx,z:this.hz,t:this.time}),this.botEscape>0)return this.botEscape-=e,{x:Math.cos(this.botEscapeDir),y:Math.sin(this.botEscapeDir)};if(!this.botTarget||this.botTarget.state!==`idle`||this.botTarget.asset.size>t||this.botRetarget<=0){this.botRetarget=.6;let e=null,n=-1;for(let r of this.objects){if(r.state!==`idle`||r.asset.size>t||this.botIgnore.has(r.uid))continue;let i=Math.hypot(r.x-this.hx,r.z-this.hz),a=(r.asset.def.points+r.asset.mass*40)/(1+i*i*.05);a>n&&(n=a,e=r)}this.botTarget=e}let n=this.botTarget;if(!n)return{x:Math.sin(this.time*.3),y:Math.cos(this.time*.23)};let r=n.x-this.hx,i=n.z-this.hz,a=Math.hypot(r,i)||1,o=this.mode===`demo`?.55:1,s=this.rig.yaw,c=r/a*Math.cos(s)-i/a*Math.sin(s),l=r/a*Math.sin(s)+i/a*Math.cos(s);return{x:c*o,y:l*o}}tut(e){e<=this.tutorialStep||(this.tutorialStep=e,this.hooks.tutorial?.(e))}finish(){if(this.state!==`ending`&&this.state!==`ended`){for(let e of this.objects)e.state===`falling`&&this.consume(e);this.state=`ending`,this.endT=0,this.vx=this.vz=0,this.rig.setZoom(.82),this.rig.orbit=.18,Kf.setIntensity(0)}}result(){let e=this.objectiveProgress(),t=e.every(e=>e.done),n=this.score+(t?this.speedBonus:0),r=0;return t&&(r=1,n>=this.def.stars[0]&&(r=2),n>=this.def.stars[1]&&(r=3)),{level:this.def,completed:t,score:this.score,speedBonus:t?this.speedBonus:0,total:n,stars:r,eaten:this.eaten,sizeLevel:this.sizeLevel,maxCombo:this.maxCombo,missing:e.filter(e=>!e.done).map(e=>`${e.o.label}: ${Fd(Math.floor(e.v))} / ${Fd(e.o.target)}`),counts:this.counts,secretFound:this.secretFound}}dispose(){this.sun.shadow.map?.dispose();for(let e of this.disposables)e.dispose();this.hole.dispose(),this.particles.dispose();for(let e of this.ctx.extras)e.traverse(e=>{if(e instanceof oi){e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()}});this.scene.clear()}};function Qf(e){return e[Math.floor(Math.random()*e.length)]}var $f={sunnyPark:{sky:`#bfe6ff`,fog:`#d4ecff`,sunColor:`#fff3dc`,sunIntensity:2.7,sunDir:[.45,1,.55],hemiSky:`#dff1ff`,hemiGround:`#7c9a5c`,hemiIntensity:1.25,exposure:1,bloom:{strength:.14,radius:.3,threshold:1},holeTint:`#8a5cff`,music:`park`,accent:`#7ee07a`,accent2:`#3de8ff`},street:{sky:`#c8e4ff`,fog:`#dbe9f5`,sunColor:`#fff0d6`,sunIntensity:2.6,sunDir:[-.5,1,.45],hemiSky:`#e3f0ff`,hemiGround:`#8a8478`,hemiIntensity:1.2,exposure:1,bloom:{strength:.14,radius:.3,threshold:1},holeTint:`#7b5cff`,music:`street`,accent:`#ffb347`,accent2:`#ff5a5f`},park:{sky:`#b9e2ff`,fog:`#cfe9f7`,sunColor:`#fff1d2`,sunIntensity:2.7,sunDir:[.6,1,.3],hemiSky:`#e0f2ff`,hemiGround:`#6f9a55`,hemiIntensity:1.2,exposure:1,bloom:{strength:.14,radius:.3,threshold:1},holeTint:`#9b5cff`,music:`park`,accent:`#4cd07d`,accent2:`#ffd23f`},traffic:{sky:`#cfe0f2`,fog:`#d9e2ec`,sunColor:`#ffeccc`,sunIntensity:2.5,sunDir:[.4,1,-.5],hemiSky:`#e6eefc`,hemiGround:`#7d7a72`,hemiIntensity:1.2,exposure:1,bloom:{strength:.18,radius:.3,threshold:1},holeTint:`#5c7bff`,music:`traffic`,accent:`#ff8a2a`,accent2:`#ffd23f`},shopping:{sky:`#ffe1c7`,fog:`#ffe6d2`,sunColor:`#ffe2bd`,sunIntensity:2.6,sunDir:[.7,.9,.4],hemiSky:`#fff0e0`,hemiGround:`#9a7f78`,hemiIntensity:1.2,exposure:1,bloom:{strength:.2,radius:.32,threshold:1},holeTint:`#c85cff`,music:`shopping`,accent:`#ff7eb6`,accent2:`#ffc94a`},downtown:{sky:`#b8d4f0`,fog:`#c9d8e8`,sunColor:`#fff0dc`,sunIntensity:2.6,sunDir:[-.4,1,.6],hemiSky:`#dce9ff`,hemiGround:`#6f7480`,hemiIntensity:1.25,exposure:1,bloom:{strength:.2,radius:.32,threshold:1},holeTint:`#6c5cff`,music:`downtown`,accent:`#3de8ff`,accent2:`#7b5cff`},industrial:{sky:`#d8d2c8`,fog:`#d6cfc4`,sunColor:`#ffd9a8`,sunIntensity:2.5,sunDir:[.7,.85,.35],hemiSky:`#e8e2d8`,hemiGround:`#5d6470`,hemiIntensity:1.15,exposure:1,bloom:{strength:.2,radius:.32,threshold:1},holeTint:`#ff8a2a`,music:`industrial`,accent:`#ff8a2a`,accent2:`#ffd23f`},beach:{sky:`#a8e4ff`,fog:`#c6efff`,sunColor:`#fff6e2`,sunIntensity:3,sunDir:[.3,1,.6],hemiSky:`#e6f8ff`,hemiGround:`#d8c08a`,hemiIntensity:1.3,exposure:1.02,bloom:{strength:.14,radius:.3,threshold:1},holeTint:`#5c6bff`,music:`beach`,accent:`#22c3b5`,accent2:`#ffd23f`},neon:{sky:`#0a0720`,fog:`#170c38`,sunColor:`#a3adff`,sunIntensity:1.3,sunDir:[-.4,1,.5],hemiSky:`#7a64d8`,hemiGround:`#24143e`,hemiIntensity:1.4,exposure:1.15,bloom:{strength:.7,radius:.55,threshold:.72},holeTint:`#c04dff`,night:!0,music:`neon`,fogNear:1.3,fogFar:3.6,accent:`#ff3d9a`,accent2:`#3de8ff`},finale:{sky:`#ffc8a0`,fog:`#f7c8a8`,sunColor:`#ffcf96`,sunIntensity:2.9,sunDir:[.8,.75,.45],hemiSky:`#ffe0c8`,hemiGround:`#6a5a78`,hemiIntensity:1.15,exposure:1,bloom:{strength:.26,radius:.35,threshold:.96},holeTint:`#ff3d9a`,music:`finale`,accent:`#ffc94a`,accent2:`#ff3d9a`},fair:{sky:`#ffb08f`,fog:`#f2a698`,sunColor:`#ffb27a`,sunIntensity:2.4,sunDir:[-.9,.6,.35],hemiSky:`#ffd0c2`,hemiGround:`#5d4a7a`,hemiIntensity:1.2,exposure:1,bloom:{strength:.32,radius:.4,threshold:.95},holeTint:`#ff3d9a`,music:`fair`,accent:`#ff3d6e`,accent2:`#ffc94a`},sky:{sky:`#b6dcff`,fog:`#cfe6fb`,sunColor:`#fff4e2`,sunIntensity:2.8,sunDir:[.3,1,.7],hemiSky:`#e6f2ff`,hemiGround:`#7f8a72`,hemiIntensity:1.25,exposure:1,bloom:{strength:.16,radius:.3,threshold:1},holeTint:`#3d6bff`,music:`sky`,accent:`#3db8ff`,accent2:`#e9edf5`}},ep={grass:`#7cc45c`,grassDark:`#6bb64e`,grassLight:`#8fd06a`,path:`#e8d4a6`,pathEdge:`#d7bf8b`,asphalt:`#4b4e58`,sidewalk:`#d8d3c8`,sidewalkGrout:`#bfb9ad`,curb:`#a9a59c`,plaza:`#e7e0d1`,plazaB:`#ddd5c4`,sand:`#efd9a3`,soil:`#7a5a3c`,water:`#4fb8e8`};function tp(e,t,n,r,i,a=ep.grass){let o=e.painter;o.rect(t,n,r,i,a),o.stripes(t,n,r,i,`rgba(255,255,255,0.045)`,2.4,`x`),o.blotches(t,n,r,i,[`rgba(60,120,40,0.18)`,`rgba(170,220,110,0.16)`],Math.floor((r-t)*(i-n)/40),1.5,5),o.speckle(t,n,r,i,[`rgba(40,100,30,0.35)`,`rgba(200,240,150,0.3)`],.9,.06)}function np(e,t,n,r,i,a=1.2){let o=e.painter;o.tiles(t,n,r,i,a,ep.sidewalk,null,ep.sidewalkGrout,.05),o.speckle(t,n,r,i,[`rgba(0,0,0,0.05)`],.3,.08)}function rp(e,t,n,r,i,a={}){let o=e.rng,s=a.minF??2,c=a.maxF??5,l=a.depth??9,u=i===`south`?0:i===`north`?Math.PI:i===`east`?Math.PI/2:-Math.PI/2,d=[`#e8423f`,`#3fbf6a`,`#3d7bf0`,`#ff8a2a`,`#8b5cf6`,`#ff7eb6`],f=Math.min(t,n),p=Math.max(t,n);for(;f<p-3;){let t=o.range(7,12),n=f+t/2,p=o.int(s,c),m=a.colors?o.pick(a.colors):void 0,h=a.shops&&o.chance(.8)?{awning:o.pick(d),sign:o.pick(d)}:null,g=l/2;if(i===`south`||i===`north`){let s=i===`south`?r-g:r+g;e.building(n,s,u,{w:t-(a.gap??.3),d:l,floors:p,color:m,shop:h,glassTower:a.tall&&o.chance(.5),roof:o.pick([`flat`,`flat`,`garden`,`antenna`])})}else{let s=i===`east`?r-g:r+g;e.building(s,n,u,{w:t-(a.gap??.3),d:l,floors:p,color:m,shop:h,glassTower:a.tall&&o.chance(.5),roof:o.pick([`flat`,`flat`,`garden`,`antenna`])})}f+=t}}function ip(e,t,n={}){let r=e.bounds,i=n.rows??2;for(let a=0;a<i;a++){let i=t+a*13,o={...n,minF:(n.minF??3)+a*3,maxF:(n.maxF??7)+a*5,shops:a===0&&n.shops};rp(e,r.minX-i,r.maxX+i,r.minZ-i,`south`,o),rp(e,r.minX-i,r.maxX+i,r.maxZ+i,`north`,o),rp(e,r.minZ-i+12,r.maxZ+i-12,r.minX-i,`east`,o),rp(e,r.minZ-i+12,r.maxZ+i-12,r.maxX+i,`west`,o)}}function ap(e,t,n,r,i=`#1f8fd0`,a=`#5fd6f0`){let o=new So({uniforms:{uTime:{value:0},uDeep:{value:new q(i)},uShallow:{value:new q(a)}},vertexShader:`
      varying vec3 vW; uniform float uTime;
      void main(){ vec4 w = modelMatrix * vec4(position,1.0); w.y += sin(w.x*0.35+uTime*1.3)*0.05 + cos(w.z*0.4+uTime)*0.05; vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`
      varying vec3 vW; uniform float uTime; uniform vec3 uDeep; uniform vec3 uShallow;
      void main(){
        float w1 = sin(vW.x*0.6 + vW.z*0.3 + uTime*1.4)*0.5+0.5;
        float w2 = sin(vW.x*-0.4 + vW.z*0.9 + uTime*1.1)*0.5+0.5;
        float sp = smoothstep(0.92, 1.0, w1*w2);
        vec3 c = mix(uDeep, uShallow, 0.35 + 0.3*w1*w2);
        c += vec3(1.0)*sp*0.35;
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),s=new so(n,r,40,20);s.rotateX(-Math.PI/2);let c=new oi(s,o);return c.position.set(e,-.08,t),c.onBeforeRender=()=>{o.uniforms.uTime.value=performance.now()/1e3},c}var op=[[`can`,3],[`apple`,3],[`ball`,2],[`cup`,3],[`bottle`,1],[`flowers`,3],[`frisbee`,1],[`soccerball`,1],[`sandwich`,1]],sp={id:1,name:`The First Bite`,setting:`Sunny City Park`,description:`A quiet little park. Learn to move, swallow and grow.`,duration:45,objectives:[{kind:`count`,target:20,label:`Swallow objects`}],stars:[1750,3500],startTier:0,maxTier:5,growth:1.15,w:34,h:34,margin:26,theme:$f.sunnyPark,difficulty:1,seed:101,start:[2,8],tutorial:!0,hero:[`apple`,`duck`,`ball`],build(e){let t=e.painter,n=e.ext;tp(e,n.minX,n.minZ,n.maxX,n.maxZ),t.circle(-30,-26,9,`#3f9fd0`).circle(-30,-26,7.8,`#5fc2ea`).ring(-30,-26,9,.6,`#d7c48f`);let r=[[-14,-9],[-6,-13],[6,-11],[13.5,-3],[11,9],[0,13.5],[-11,10.5],[-15,0],[-14,-9]];t.path(r,2.7,ep.pathEdge,{smooth:!0}),t.path(r,2.3,ep.path,{smooth:!0}),t.path([[-15,0],[-6,0],[0,0],[6,-2],[13.5,-3]],2,ep.pathEdge,{smooth:!0}),t.path([[-15,0],[-6,0],[0,0],[6,-2],[13.5,-3]],1.6,ep.path,{smooth:!0}),t.speckle(-17,-17,17,17,[`rgba(120,90,50,0.08)`],.2,.05),t.path([[-20,-20],[20,-20],[20,20],[-20,20],[-20,-20]],2.5,ep.path),t.circle(0,0,4.2,`#a8754a`).circle(0,0,3.8,`#f0dca6`),t.speckle(-3.8,-3.8,3.8,3.8,[`rgba(160,120,60,0.25)`],2,.05),e.block({cx:0,cz:0,r:.3});for(let[n,r,i]of[[-8,-5,`#e8423f`],[7.5,4.5,`#3d7bf0`],[-5,7.5,`#ff8a2a`],[8,-7,`#3fbf6a`]]){t.rect(n-1.6,r-1.2,n+1.6,r+1.2,`#ffffff`);for(let e=0;e<8;e++)for(let a=0;a<6;a++)(e+a)%2==0&&t.rect(n-1.6+e*.4,r-1.2+a*.4,n-1.2+e*.4,r-.8+a*.4,i);e.cluster([[`apple`,3],[`sandwich`,2],[`cup`,2],[`can`,2],[`bottle`,1]],n,r,1.3,9,.02),e.place(`basket`,n+1.9,r-.4,{gap:.05})}for(let[n,r]of[[-11,-13],[11,12],[-13,7],[13,-11],[4,-14],[-3,14]])t.circle(n,r,1.6,ep.soil).circle(n,r,1.35,`#6b4e33`),e.cluster(`flowers`,n,r,1.3,6,.02),e.place(`flowerpot`,n+1.9,r,{gap:.05});e.cluster([[`toyblocks`,2],[`duck`,2],[`toycar`,2],[`ball`,2],[`teddy`,1],[`bucket`,2]],0,0,3.4,12,.05);for(let[t,n,r]of[[-9,-11.8,.4],[9.5,-8.3,-.7],[12.5,5,1.5],[4,12.4,.2],[-13,4.2,1.6],[-4,-1.4,0]])e.place(`bench`,t,n,{rot:r,gap:.2}),e.place(`litterbasket`,t+Math.cos(r)*1.3,n-Math.sin(r)*1.3,{gap:.05});e.scatter([[`bush`,3],[`smalltree`,1]],{x0:-17,z0:-17,x1:17,z1:17},10,{gap:.6}),e.scatter([[`gnome`,1],[`kite`,1],[`skateboard`,1],[`vase`,1],[`flowerpot`,1],[`teddy`,1]],{x0:-16,z0:-16,x1:16,z1:16},12,{gap:.3}),e.scatter(op,{x0:-16.5,z0:-16.5,x1:16.5,z1:16.5},80,{gap:.25,respawn:!0}),e.scatter(op,{path:r,w:2},24,{gap:.2,respawn:!0}),e.coins([[-6,-12.6],[0,-12.4],[6,-10.6],[10.5,-6.5]],8),e.place(`pw_multi`,9,1.5,{force:!0,rot:0}),e.place(`pw_time`,-10,-2.5,{force:!0,rot:0}),e.place(`secret_duck`,16,16,{force:!0,rot:2.3}),e.treeBorder(5.5,3,[`round`,`blossom`,`tall`,`pine`]);let i=e.bounds;e.raw(0,0,e=>{for(let t=i.minX-.5;t<=i.maxX+.5;t+=2.2)e.boxB(.12,.7,.12,`#f4f1ea`,t,0,i.minZ-.6),e.boxB(.12,.7,.12,`#f4f1ea`,t,0,i.maxZ+.6);for(let t=i.minZ-.5;t<=i.maxZ+.5;t+=2.2)e.boxB(.12,.7,.12,`#f4f1ea`,i.minX-.6,0,t),e.boxB(.12,.7,.12,`#f4f1ea`,i.maxX+.6,0,t);for(let t of[i.minZ-.6,i.maxZ+.6])e.box(i.maxX-i.minX+1.2,.08,.06,`#f4f1ea`,0,.55,t),e.box(i.maxX-i.minX+1.2,.08,.06,`#f4f1ea`,0,.3,t);for(let t of[i.minX-.6,i.maxX+.6])e.box(.06,.08,i.maxZ-i.minZ+1.2,`#f4f1ea`,t,.55,0),e.box(.06,.08,i.maxZ-i.minZ+1.2,`#f4f1ea`,t,.3,0)});for(let t=0;t<10;t++)e.deco(`bush`,i.minX-1.8,i.minZ+2+t*3.2,0);e.deco(`fountain`,-30,0,0,0,.9),e.deco(`swing`,24,-6,.4),e.deco(`slide`,25,6,-.6)}},cp=[[`can`,3],[`cup`,3],[`bottle`,2],[`shoppingbag`,2],[`pizzabox`,1],[`apple`,1]],lp={id:2,name:`Street Feast`,setting:`Busy City Street`,description:`Bins, chairs, crates and signs line a lively street. Grow fast.`,duration:60,objectives:[{kind:`score`,target:1500,label:`Reach score`}],stars:[4300,8500],startTier:1,maxTier:8,growth:1,w:76,h:24,margin:30,theme:$f.street,difficulty:1,seed:202,start:[0,8],hero:[`trashbin`,`cafechair`,`hydrant`],build(e){let t=e.painter,n=e.ext;t.fill(`#c9c3b6`),t.road(n.minX,0,n.maxX,0,9,{center:`dashed`}),t.rect(n.minX,-4.8,n.maxX,-4.5,ep.curb).rect(n.minX,4.5,n.maxX,4.8,ep.curb),np(e,n.minX,-12.6,n.maxX,-4.8),np(e,n.minX,4.8,n.maxX,12.6);for(let e of[-20,20])t.crosswalk(e,0,8.4,3.2,`z`);for(let e=-34;e<34;e+=5.5)Math.abs(e+20)<4||Math.abs(e-20)<4||(t.path([[e,4.4],[e,2.6]],.1,`rgba(255,255,255,0.7)`,{cap:`butt`}),t.path([[e,-4.4],[e,-2.6]],.1,`rgba(255,255,255,0.7)`,{cap:`butt`}));for(let e=-34;e<36;e+=9)t.rect(e-1,-12.6,e+1,-11.8,`#7a5236`),t.rect(e-1,11.8,e+1,12.6,`#7a5236`);for(let n=-33;n<=33;n+=11)e.place(`lamppost`,n,-5.6,{rot:-Math.PI/2,force:!0}),e.place(`lamppost`,n+5.5,5.6,{rot:Math.PI/2,force:!0}),t.rect(n+4.6,-6.6,n+6.4,-4.8,`#6b4e33`),e.place(`smalltree`,n+5.5,-5.7,{gap:.1}),t.rect(n-.9,4.8,n+.9,6.6,`#6b4e33`),e.place(`smalltree`,n,5.7,{gap:.1});for(let[n,r]of[[-27,-9.5],[-6,9.5],[13,-9.5],[30,9.5]]){t.rect(n-4,r-2.2,n+4,r+2.2,`rgba(160,110,70,0.25)`);for(let t=-1;t<=1;t++)e.place(`cafetable`,n+t*2.6,r,{gap:.05}),e.place(`cafechair`,n+t*2.6-.75,r,{rot:Math.PI/2,gap:.02}),e.place(`cafechair`,n+t*2.6+.75,r,{rot:-Math.PI/2,gap:.02});e.place(`aframe`,n+4.6,r,{gap:.05})}let r=e=>({x0:-37,z0:Math.min(e*5.2,e*12),x1:37,z1:Math.max(e*5.2,e*12)});for(let t of[-1,1])e.scatter([[`trashbin`,3],[`wheeliebin`,2],[`crate`,3],[`newsbox`,2],[`mailbox`,1],[`hydrant`,2],[`bollard`,2],[`streetsign`,2],[`parkingmeter`,1],[`planterbox`,1],[`scooter`,1],[`cafechair`,2]],r(t),34,{gap:.35}),e.scatter(cp,r(t),45,{gap:.2,respawn:!0}),e.scatter([[`cone`,3],[`flowerpot`,1],[`crate`,1]],r(t),8,{gap:.3});for(let t=-30;t<34;t+=14)e.cluster([[`crate`,2],[`cardboard`,1],[`palletboxes`,1]],t+4,-11,1.4,3),e.cluster([[`crate`,2],[`cardboard`,1]],t-3,11,1.4,3);for(let t=-31.5;t<34;t+=5.5)Math.abs(t+20)<4||Math.abs(t-20)<4||e.rng.chance(.55)&&e.place(e.rng.chance(.6)?`hatchback`:`car`,t+2.75,e.rng.chance(.5)?3.5:-3.5,{rot:e.rng.chance(.5)?0:Math.PI,gap:.05});e.row(`cone`,-9,-.2,-3,-.2,1.5),e.row(`roadbarrel`,6,.4,10,.4,2),e.coins([[-36,8],[-26,8],[-16,8]],9),e.coins([[16,-8],[26,-7],[36,-8]],9),e.place(`pw_multi`,0,-8,{force:!0,rot:0}),e.place(`pw_time`,-14,9,{force:!0,rot:0}),e.place(`pw_surge`,26,.8,{force:!0,rot:0}),e.place(`secret_duck`,37.4,-11.6,{force:!0,rot:2}),rp(e,n.minX,n.maxX,-12.8,`south`,{minF:2,maxF:5,shops:!0}),rp(e,n.minX,n.maxX,12.8,`north`,{minF:2,maxF:5,shops:!0}),rp(e,n.minX,n.maxX,-24,`south`,{minF:6,maxF:10}),rp(e,n.minX,n.maxX,24,`north`,{minF:6,maxF:10})}},up={id:3,name:`Park Chaos`,setting:`Grand Public Park`,description:`Benches, bikes and playgrounds. Swallow the medium-sized fun.`,duration:60,objectives:[{kind:`count`,target:30,label:`Swallow objects`},{kind:`tag`,tag:`medium`,target:3,label:`Medium objects`}],stars:[6800,13500],startTier:2,maxTier:9,growth:1.05,w:64,h:64,margin:30,theme:$f.park,difficulty:2,seed:303,start:[-12,12],hero:[`bench`,`bicycle`,`swing`],build(e){let t=e.painter,n=e.ext;tp(e,n.minX,n.minZ,n.maxX,n.maxZ);for(let e of[[[-34,0],[-9,0]],[[9,0],[34,0]],[[0,-34],[0,-9]],[[0,9],[0,34]],[[-30,-30],[-8,-7]],[[30,30],[8,7]]])t.path(e,3.4,ep.pathEdge),t.path(e,3,ep.path);let r=[];for(let e=0;e<=48;e++)r.push([Math.cos(e/48*Math.PI*2)*24,Math.sin(e/48*Math.PI*2)*24]);t.path(r,3.2,ep.pathEdge,{smooth:!0}),t.path(r,2.8,ep.path,{smooth:!0}),t.circle(0,0,9.5,`#cfc6b2`).circle(0,0,9,ep.plaza);for(let e=0;e<16;e++){let n=e/16*Math.PI*2;t.path([[Math.cos(n)*4.2,Math.sin(n)*4.2],[Math.cos(n)*9,Math.sin(n)*9]],.06,`#cbbfa6`)}t.ring(0,0,6.5,.08,`#cbbfa6`),e.place(`fountain`,0,0,{force:!0,rot:0}),e.circleOf(`bench`,0,0,7.6,6,{face:!0,phase:.26}),e.circleOf(`parkbin_lamp`,0,0,8.4,6,{phase:.78}),t.roundRect(8,-28,28,-10,2,`#f0dca6`,{color:`#a8754a`,w:.5}),t.speckle(8,-28,28,-10,[`rgba(160,120,60,0.2)`],1.2,.05),e.place(`swing`,13,-23,{rot:0}),e.place(`slide`,22,-22,{rot:Math.PI/2}),e.place(`seesaw`,14,-14,{rot:.3}),e.place(`springrider`,23,-14,{}),e.place(`springrider`,19,-16,{}),e.cluster([[`ball`,2],[`toyblocks`,1],[`bucket`,2],[`duck`,1],[`toycar`,1],[`teddy`,1]],18,-19,7,18);for(let[t,n]of[[-20,14],[-13,19],[-24,22],[-16,27]])e.place(`picnictable`,t,n,{rot:e.rng.range(-.4,.4)}),e.cluster([[`apple`,2],[`sandwich`,1],[`cup`,2],[`can`,2],[`basket`,1]],t,n+1.5,1.6,5);for(let n=0;n<6;n++){let r=-28+n%3*7,i=-27+Math.floor(n/3)*8;t.roundRect(r-2.4,i-1.4,r+2.4,i+1.4,.8,ep.soil),e.cluster(`flowers`,r,i,2,6,.02)}e.scatter([[`planter`,3],[`birdbath`,1],[`flowerpot`,3],[`gnome`,1],[`bush`,2]],{x0:-31,z0:-31,x1:-10,z1:-10},16,{gap:.6});for(let t=0;t<2;t++)e.place(`bikerack`,20,14+t*4,{rot:0,force:!0}),e.row(`bicycle`,15,15.6+t*4,25,15.6+t*4,1,{rot:Math.PI/2,skip:.3,gap:-.6});for(let t=0;t<12;t++){let n=t/12*Math.PI*2+.13;e.place(t%3==0?`lamppost`:`bench`,Math.cos(n)*26.3,Math.sin(n)*26.3,{rot:-n-Math.PI/2,gap:.1}),e.place(`litterbasket`,Math.cos(n+.09)*26.3,Math.sin(n+.09)*26.3,{gap:.05})}e.scatter([[`smalltree`,3],[`tree`,2],[`bush`,2]],{x0:-31,z0:-31,x1:31,z1:31},46,{gap:1}),e.scatter([[`bench`,1],[`bicycle`,1],[`planter`,1],[`picnictable`,1]],{x0:-31,z0:-31,x1:31,z1:31},12,{gap:.6}),e.scatter([[`flowers`,3],[`ball`,2],[`frisbee`,1],[`can`,2],[`cup`,2],[`apple`,2],[`kite`,1],[`skateboard`,1],[`soccerball`,1],[`litterbasket`,1]],{x0:-31.5,z0:-31.5,x1:31.5,z1:31.5},150,{gap:.25,respawn:!0}),e.coins(r.slice(4,15),12),e.coins([[-30,0],[-12,0]],9),e.place(`pw_magnet`,0,-12,{force:!0,rot:0}),e.place(`pw_time`,-18,6,{force:!0,rot:0}),e.place(`pw_multi`,16,24,{force:!0,rot:0}),e.place(`secret_duck`,-31.3,31.3,{force:!0,rot:2}),e.treeBorder(6,4),ip(e,26,{minF:4,maxF:8,rows:1})}},dp={id:4,name:`Traffic Eater`,setting:`Urban Crossroads`,description:`Cars, scooters and road works. Grow big enough to eat the traffic.`,duration:65,objectives:[{kind:`score`,target:3e3,label:`Reach score`}],stars:[4e3,7e3],startTier:3,maxTier:10,growth:1.05,w:76,h:76,margin:32,theme:$f.traffic,difficulty:2,seed:404,start:[-20,10],hero:[`car`,`motorcycle`,`cone`],build(e){let t=e.painter,n=e.ext;t.fill(`#c9c3b6`),np(e,n.minX,n.minZ,n.maxX,n.maxZ,1.4),t.road(n.minX,0,n.maxX,0,14,{lanes:4,center:`double`}),t.road(0,n.minZ,0,n.maxZ,14,{lanes:4,center:`double`}),t.rect(-7,-7,7,7,ep.asphalt);for(let e of[-1,1])t.crosswalk(e*9.2,0,13,3,`z`),t.crosswalk(0,e*9.2,13,3,`x`),t.path([[e*7.4,-7],[e*7.4,7]],.35,`#f4f4ee`,{cap:`butt`}),t.path([[-7,e*7.4],[7,e*7.4]],.35,`#f4f4ee`,{cap:`butt`});t.rect(n.minX,-7.3,n.maxX,-7,ep.curb).rect(n.minX,7,n.maxX,7.3,ep.curb),t.rect(-7.3,n.minZ,-7,n.maxZ,ep.curb).rect(7,n.minZ,7.3,n.maxZ,ep.curb),t.rect(-7,-7.3,7,7.3,ep.asphalt).rect(-7.3,-7,7.3,7,ep.asphalt),t.roundRect(14,-36,36,-14,2,`#c4bba8`),tp(e,15,-35,35,-15),e.scatter([[`smalltree`,2],[`bench`,2],[`bush`,2],[`litterbasket`,1],[`planter`,1]],{x0:15,z0:-35,x1:35,z1:-15},18,{gap:.8}),t.rect(-36,-36,-13,-13,`#5a5d66`);for(let e=0;e<3;e++)t.parking(-35,-35+e*8,9,2.5,5,1);for(let t=0;t<3;t++)for(let n=0;n<9;n++)e.rng.chance(.62)&&e.place(e.rng.pick([`car`,`hatchback`,`car`,`suv`]),-33.75+n*2.5,-32.5+t*8,{rot:Math.PI/2+(e.rng.chance(.5)?Math.PI:0),gap:-.5});t.tiles(13,13,36,36,2,ep.plaza,ep.plazaB,`#cfc6b2`),e.place(`newsstand`,18,18,{rot:Math.PI/4}),e.place(`kiosk`,30,29,{rot:-Math.PI/4}),e.place(`vending`,25,15,{rot:Math.PI}),e.scatter([[`bench_modern`,2],[`planterbox`,2],[`phonebooth`,1],[`trashbin`,2],[`bikerack`,1],[`cafeset`,1]],{x0:14,z0:14,x1:35,z1:35},16,{gap:.8}),t.rect(-36,13,-13,36,`#9a8a72`),t.speckle(-36,13,-13,36,[`rgba(80,60,40,0.3)`,`rgba(255,255,255,0.1)`],1.4,.08),e.row(`barrier`,-34,13.5,-14,13.5,1.6,{rot:0}),e.row(`barrier`,-13.5,15,-13.5,35,1.6,{rot:Math.PI/2}),e.scatter([[`roadbarrel`,3],[`cone`,4],[`pallet`,2],[`palletboxes`,1],[`crate`,2],[`gascylinders`,1],[`toolchest`,1],[`spool`,1],[`barrel`,2]],{x0:-35,z0:15,x1:-15,z1:35},34,{gap:.5}),e.place(`generator`,-28,28,{rot:.3});for(let t of[-1,1])for(let n=12;n<37;n+=8)e.place(`lamppost`,t*n,-8.2,{rot:-Math.PI/2}),e.place(`lamppost`,t*n+4*t,8.2,{rot:Math.PI/2}),e.place(`lamppost`,-8.2,t*n,{rot:Math.PI}),e.place(`lamppost`,8.2,t*n+4*t,{rot:0});e.place(`trafficlight`,-8.6,-8.6,{rot:Math.PI/4,force:!0}),e.place(`trafficlight`,8.6,8.6,{rot:-3*Math.PI/4,force:!0}),e.place(`trafficlight`,8.6,-8.6,{rot:-Math.PI/4,force:!0}),e.place(`trafficlight`,-8.6,8.6,{rot:3*Math.PI/4,force:!0}),e.place(`busshelter`,-24,10.5,{rot:Math.PI,force:!0}),e.place(`busshelter`,24,-10.5,{rot:0,force:!0});for(let t of[{x0:-37,z0:-12.5,x1:-10,z1:-7.6},{x0:10,z0:-12.5,x1:37,z1:-7.6},{x0:-37,z0:7.6,x1:-10,z1:12.5},{x0:10,z0:7.6,x1:37,z1:12.5},{x0:-12.5,z0:-37,x1:-7.6,z1:-10},{x0:-12.5,z0:10,x1:-7.6,z1:37},{x0:7.6,z0:-37,x1:12.5,z1:-10},{x0:7.6,z0:10,x1:12.5,z1:37}])e.scatter([[`motorcycle`,2],[`vespa`,2],[`bicycle`,1],[`hydrant`,1],[`streetsign`,2],[`trashbin`,2],[`newsbox`,1],[`bollard`,2],[`parkingmeter`,1],[`cone`,2]],t,9,{gap:.4}),e.scatter([[`can`,3],[`cup`,3],[`shoppingbag`,1],[`bottle`,2],[`cone`,1]],t,16,{gap:.2,respawn:!0});let r=[`car`,`car`,`hatchback`,`taxi`,`suv`,`van`,`motorcycle`,`hatchback`];e.lane({x0:-75,z0:1.75,x1:75,z1:1.75,speed:8,ids:r,stop:{at:67,group:0}}),e.lane({x0:-75,z0:5.25,x1:75,z1:5.25,speed:6.5,ids:r,stop:{at:67,group:0}}),e.lane({x0:75,z0:-1.75,x1:-75,z1:-1.75,speed:8,ids:r,stop:{at:67,group:0}}),e.lane({x0:75,z0:-5.25,x1:-75,z1:-5.25,speed:6.5,ids:r,stop:{at:67,group:0}}),e.lane({x0:-1.75,z0:-75,x1:-1.75,z1:75,speed:8,ids:r,stop:{at:67,group:1}}),e.lane({x0:-5.25,z0:-75,x1:-5.25,z1:75,speed:6.5,ids:r,stop:{at:67,group:1}}),e.lane({x0:1.75,z0:75,x1:1.75,z1:-75,speed:8,ids:r,stop:{at:67,group:1}}),e.lane({x0:5.25,z0:75,x1:5.25,z1:-75,speed:6.5,ids:r,stop:{at:67,group:1}}),e.coins([[-36,10],[-14,10]],10),e.coins([[10,14],[10,36]],10),e.place(`pw_surge`,24,24,{force:!0,rot:0}),e.place(`pw_multi`,-25,-10,{force:!0,rot:0}),e.place(`pw_time`,11,-24,{force:!0,rot:0}),e.place(`secret_duck`,-36.8,36.8,{force:!0,rot:2}),ip(e,2.5,{minF:3,maxF:8,rows:2,shops:!0})}},fp={id:5,name:`Shopping Spree`,setting:`Commercial Avenue`,description:`Market stalls, kiosks and cafés. Devour the commerce.`,duration:70,objectives:[{kind:`tag`,tag:`commercial`,target:5,label:`Commercial structures`},{kind:`score`,target:4e3,label:`Reach score`}],stars:[9200,18400],startTier:3,maxTier:10,growth:1.05,w:88,h:44,margin:30,theme:$f.shopping,difficulty:3,seed:505,start:[-6,12],hero:[`stall`,`kiosk`,`cafeset`],build(e){let t=e.painter,n=e.ext;t.fill(`#d9cdb8`),t.tiles(n.minX,-22,n.maxX,22,1.6,`#e9dcc6`,`#e2d3ba`,`#cdbd9f`,.05),t.tiles(n.minX,-3.2,n.maxX,3.2,.8,`#c96f5a`,`#d98a70`,`#b75e4b`,.04),t.rect(n.minX,-22,n.maxX,-20.8,`#b9ab90`).rect(n.minX,20.8,n.maxX,22,`#b9ab90`),t.circle(0,0,10,`#d4c4a6`).circle(0,0,9.4,`#efe3cd`);for(let e=0;e<12;e++){let n=e/12*Math.PI*2;t.poly([[0,0],[Math.cos(n)*9.4,Math.sin(n)*9.4],[Math.cos(n+.26)*9.4,Math.sin(n+.26)*9.4]],e%2?`#e6d6bb`:`#efe3cd`)}e.place(`statue`,0,0,{rot:Math.PI/2,force:!0}),e.circleOf(`planter`,0,0,7.5,6,{phase:.5});for(let t=-42;t<=42;t+=8)Math.abs(t)<12||(e.place(`smalltree`,t,0,{}),e.place(`bench_modern`,t+4,1.6,{rot:0}),e.place(`bench_modern`,t+4,-1.6,{rot:Math.PI}));t.rect(-42,-17,-14,-6,`rgba(200,120,80,0.12)`);for(let t=0;t<4;t++)e.place(`stall`,-38+t*7,-14.5,{rot:0}),e.place(`stall`,-38+t*7,-8.5,{rot:Math.PI});e.place(`flowerstand`,-40,10,{rot:0}),e.place(`flowerstand`,-18,16,{rot:Math.PI}),t.rect(14,-17,42,-6,`rgba(90,140,200,0.12)`),e.place(`foodcart`,19,-14,{rot:.2}),e.place(`foodcart`,33,-15,{rot:-.3}),e.place(`icecreamvan`,26,9,{rot:0});for(let[t,n]of[[18,-8],[24,-10],[30,-8.5],[37,-10],[38,-4.5]])e.place(`cafeset`,t,n,{});e.place(`kiosk`,-26,13,{rot:Math.PI}),e.place(`kiosk`,14,15,{rot:Math.PI}),e.place(`newsstand`,40,14,{rot:Math.PI}),e.place(`newsstand`,-8,-15,{rot:0});for(let t of[-1,1]){let n={x0:-43,z0:Math.min(t*16.5,t*20.5),x1:43,z1:Math.max(t*16.5,t*20.5)};e.scatter([[`aframe`,3],[`clothesrack`,2],[`vending`,1],[`planterbox`,2],[`giftboxes`,2],[`umbrella_table`,2],[`cafechair`,2],[`shopsign`,1],[`flowerpot`,2]],n,30,{gap:.4}),e.scatter([[`shoppingbag`,4],[`cup`,2],[`can`,2],[`giftboxes`,1]],n,22,{gap:.2,respawn:!0})}e.scatter([[`shoppingbag`,3],[`cup`,2],[`can`,2],[`bottle`,1],[`aframe`,1],[`giftboxes`,1],[`cafechair`,1],[`cafetable`,1],[`trashbin`,1]],{x0:-43,z0:-20,x1:43,z1:20},120,{gap:.3,respawn:!0}),e.coins([[-12,-4.5],[12,-4.5]],10),e.coins([[-12,4.5],[12,4.5]],10),e.place(`pw_multi`,0,13,{force:!0,rot:0}),e.place(`pw_surge`,-30,1.5,{force:!0,rot:0}),e.place(`pw_time`,34,1.5,{force:!0,rot:0}),e.place(`secret_duck`,43.4,-21.4,{force:!0,rot:2}),rp(e,n.minX,n.maxX,-22.3,`south`,{minF:3,maxF:5,shops:!0,colors:[`#f2d7a6`,`#e6a0a0`,`#a59bd1`,`#b5c99a`,`#9fd3e0`,`#ffcf8a`]}),rp(e,n.minX,n.maxX,22.3,`north`,{minF:3,maxF:5,shops:!0,colors:[`#f2d7a6`,`#e6a0a0`,`#a59bd1`,`#b5c99a`,`#9fd3e0`,`#ffcf8a`]}),rp(e,n.minX,n.maxX,-34,`south`,{minF:6,maxF:11}),rp(e,n.minX,n.maxX,34,`north`,{minF:6,maxF:11});for(let t of[n.minX+4,n.maxX-4])for(let n=-18;n<=18;n+=6)e.tree(t,n,5,`round`)}},pp=[[`can`,3],[`cup`,3],[`bottle`,2],[`shoppingbag`,1],[`cone`,1],[`pizzabox`,1]];function mp(e,t,n,r,i={}){let a=e.painter,o=e.ext,s=i.walk??4;for(let e of n)a.rect(o.minX,e-r/2-s,o.maxX,e+r/2+s,`#cfc9bc`);for(let e of t)a.rect(e-r/2-s,o.minZ,e+r/2+s,o.maxZ,`#cfc9bc`);for(let t of n)np(e,o.minX,t-r/2-s,o.maxX,t-r/2),np(e,o.minX,t+r/2,o.maxX,t+r/2+s);for(let n of t)np(e,n-r/2-s,o.minZ,n-r/2,o.maxZ),np(e,n+r/2,o.minZ,n+r/2+s,o.maxZ);for(let e of n)a.road(o.minX,e,o.maxX,e,r,{asphalt:i.asphalt,line:i.line,center:`dashed`,edgeColor:i.edgeColor});for(let e of t)a.road(e,o.minZ,e,o.maxZ,r,{asphalt:i.asphalt,line:i.line,center:`dashed`,edgeColor:i.edgeColor});for(let e of t)for(let t of n)a.rect(e-r/2,t-r/2,e+r/2,t+r/2,i.asphalt??ep.asphalt),a.crosswalk(e-r/2-1.8,t,r-1,2.6,`z`,i.line),a.crosswalk(e+r/2+1.8,t,r-1,2.6,`z`,i.line),a.crosswalk(e,t-r/2-1.8,r-1,2.6,`x`,i.line),a.crosswalk(e,t+r/2+1.8,r-1,2.6,`x`,i.line)}function hp(e,t,n,r,i,a,o){for(let t of n)e.lane({x0:-r,z0:t+2.2,x1:r,z1:t+2.2,speed:a,ids:i,hover:o}),e.lane({x0:r,z0:t-2.2,x1:-r,z1:t-2.2,speed:a*.9,ids:i,hover:o});for(let n of t)e.lane({x0:n-2.2,z0:-r,x1:n-2.2,z1:r,speed:a*.95,ids:i,hover:o}),e.lane({x0:n+2.2,z0:r,x1:n+2.2,z1:-r,speed:a*.85,ids:i,hover:o})}var gp={id:6,name:`Downtown Devour`,setting:`Modern City Centre`,description:`Glass, steel and traffic. A dense downtown full of urban furniture.`,duration:75,objectives:[{kind:`score`,target:6e3,label:`Reach score`}],stars:[14400,28900],startTier:4,maxTier:12,growth:1.1,w:100,h:100,margin:30,theme:$f.downtown,difficulty:3,seed:606,start:[-10,-18],hero:[`busshelter`,`suv`,`sculpture`],build(e){let t=e.painter,n=e.ext;t.fill(`#d6d0c4`),t.tiles(n.minX,n.minZ,n.maxX,n.maxZ,2.2,`#dcd6ca`,`#d3ccbe`,`#c4bdae`,.05);let r=[-24,24],i=[-24,24];mp(e,r,i,11,{walk:4}),t.circle(0,0,15,`#c4bdae`).circle(0,0,14.5,`#ebe4d6`),t.ring(0,0,10,.25,`#c96f5a`).ring(0,0,5,.25,`#c96f5a`),e.place(`sculpture`,0,0,{force:!0,variant:0}),e.circleOf(`festivetree`,0,0,11.5,4,{phase:Math.PI/4}),e.circleOf(`bench_modern`,0,0,8,6,{face:!0}),e.circleOf(`parkbin_lamp`,0,0,13.5,8,{phase:.2});let a=[];for(let e of[-1,0,1])for(let t of[-1,0,1])(e||t)&&a.push([e*37.5,t*37.5]);a.forEach(([n,r],i)=>{let a={x0:n-11,z0:r-11,x1:n+11,z1:r+11};i%3==0?(t.roundRect(n-11,r-11,n+11,r+11,1.5,`#b8b09f`),tp(e,n-10.5,r-10.5,n+10.5,r+10.5),e.scatter([[`tree`,2],[`smalltree`,2],[`bench`,2],[`statue`,1],[`planter`,1]],a,12,{gap:1})):i%3==1?(e.place(`pavilion`,n,r-3,{rot:0}),e.place(`metroentrance`,n+6,r+6,{rot:Math.PI}),e.scatter([[`cafeset`,2],[`vending`,1],[`phonebooth`,1],[`clocktower`,1],[`billboard`,1]],a,8,{gap:1})):(e.place(`newsstand`,n-5,r+5,{rot:0}),e.place(`sculpture`,n+5,r-5,{}),e.scatter([[`kiosk`,1],[`planter`,2],[`bench_modern`,2],[`bikerack`,1],[`billboard`,1],[`festivetree`,1]],a,10,{gap:1})),e.scatter([[`trashbin`,2],[`bollard`,2],[`hydrant`,1],[`newsbox`,1],[`planterbox`,1],[`vespa`,1],[`bicycle`,1]],a,14,{gap:.4}),e.scatter(pp,a,22,{gap:.2,respawn:!0})});for(let t of i){for(let n=-48;n<=48;n+=9)r.some(e=>Math.abs(e-n)<9)||(e.place(`lamppost`,n,t-6.3,{rot:Math.PI/2}),e.place(`lamppost`,n+4.5,t+6.3,{rot:-Math.PI/2}));e.place(`busshelter`,-38,t-7.5,{rot:0}),e.place(`busshelter`,38,t+7.5,{rot:Math.PI})}for(let t of r)for(let n=-46;n<=46;n+=9)i.some(e=>Math.abs(e-n)<9)||e.place(`trafficlight`,t-6.4,n,{rot:0});e.scatter([[`motorcycle`,2],[`vespa`,2],[`streetsign`,2],[`trashbin`,2],[`phonebooth`,1],[`parkingmeter`,2]],{x0:-50,z0:-50,x1:50,z1:50},30,{gap:.5}),e.scatter(pp,{x0:-50,z0:-50,x1:50,z1:50},90,{gap:.25,respawn:!0}),hp(e,r,i,80,[`car`,`suv`,`van`,`taxi`,`bus`,`hatchback`,`suv`,`pickup`],7.5),e.coins([[-15,17],[15,17]],12),e.coins([[-17,-15],[-17,15]],12),e.place(`pw_magnet`,13,-18,{force:!0,rot:0}),e.place(`pw_surge`,-38,0,{force:!0,rot:0}),e.place(`pw_time`,37,-37,{force:!0,rot:0}),e.place(`pw_multi`,-18,38,{force:!0,rot:0}),e.place(`secret_duck`,49.3,49.3,{force:!0,rot:2}),ip(e,3,{minF:8,maxF:16,rows:2,tall:!0,colors:[`#d9dde6`,`#9fb7c9`,`#c9b79c`,`#7d8596`,`#e9e4da`]})}},_p={id:7,name:`Industrial Hunger`,setting:`Harbour Industrial Zone`,description:`Pallets, barrels, machines and containers. Feed on heavy industry.`,duration:80,objectives:[{kind:`tag`,tag:`industrial`,target:8,label:`Industrial objects`},{kind:`score`,target:8e3,label:`Reach score`}],stars:[19500,38900],startTier:3,maxTier:13,growth:1.15,w:100,h:100,margin:30,theme:{...$f.industrial},difficulty:4,seed:707,start:[-36,-30],hero:[`forklift`,`container`,`barrel`],build(e){let t=e.painter,n=e.ext;t.fill(`#b4b0a6`),t.tiles(n.minX,n.minZ,n.maxX,n.maxZ,6,`#bab6ac`,`#b1ada3`,`#a39f95`,.08),t.blotches(n.minX,n.minZ,n.maxX,n.maxZ,[`rgba(60,50,40,0.18)`,`rgba(255,255,255,0.08)`],160,1.5,6),t.speckle(n.minX,n.minZ,n.maxX,n.maxZ,[`rgba(0,0,0,0.12)`,`rgba(255,255,255,0.08)`],.5,.08),t.road(n.minX,0,n.maxX,0,10,{asphalt:`#3f4249`,center:`dashed`,line:`#ffd23f`}),t.road(-20,n.minZ,-20,-5,8,{asphalt:`#3f4249`,center:`none`,line:`#ffd23f`});let r=`#ffc61a`;for(let[e,n,i,a]of[[-48,-48,-24,-8],[6,-48,48,-8],[-48,8,-8,48],[8,8,48,48]])t.path([[e,n],[i,n],[i,a],[e,a],[e,n]],.25,r,{cap:`butt`});for(let[e,n]of[[-6,-20],[4,26]]){t.rect(e-3,n-3,e+3,n+3,`#2c2f3a`);for(let i=-3;i<3;i+=.8)t.path([[e+i,n-3],[e+i+3,n]],.3,r,{cap:`butt`})}for(let t=0;t<3;t++)for(let n=0;n<4;n++)e.rng.chance(.25)||e.place(`container`,14+n*8.5,-42+t*4,{rot:0,gap:.05});e.place(`craneloader`,26,-38,{rot:0,force:!0}),e.scatter([[`container`,2],[`forklift`,2],[`palletboxes`,2],[`barrel`,2]],{x0:8,z0:-28,x1:46,z1:-10},14,{gap:1}),e.scatter([[`pallet`,3],[`palletboxes`,4],[`cardboard`,3],[`ibc`,2],[`gascylinders`,1],[`forklift`,1]],{x0:-46,z0:-46,x1:-26,z1:-10},44,{gap:.4});for(let e=0;e<4;e++)t.rect(-46+e*5,-49.5,-42.5+e*5,-47,`#2c2f3a`);e.scatter([[`machine`,2],[`generator`,2],[`compressor`,2],[`spool`,2],[`toolchest`,2],[`barrel`,3]],{x0:-46,z0:10,x1:-10,z1:46},30,{gap:.8}),e.place(`portacabin`,-40,42,{rot:0}),e.place(`portacabin`,-16,14,{rot:Math.PI/2}),e.place(`silo`,38,38,{}),e.place(`silo`,30,42,{}),e.place(`silo`,42,28,{}),e.place(`mixer`,18,20,{rot:.4}),e.place(`boxtruck`,18,34,{rot:Math.PI/2}),e.place(`boxtruck`,26,14,{rot:0}),e.scatter([[`barrel`,3],[`palletboxes`,2],[`gascylinders`,1],[`cardboard`,1],[`roadbarrel`,1],[`generator`,1]],{x0:8,z0:8,x1:46,z1:46},26,{gap:.6}),e.scatter([[`barrel`,3],[`pallet`,2],[`cardboard`,3],[`cone`,2],[`crate`,2],[`can`,2],[`bottle`,1]],{x0:-49,z0:-49,x1:49,z1:49},120,{gap:.3,respawn:!0}),e.scatter([[`forklift`,1],[`pickup`,1],[`generator`,1]],{x0:-48,z0:-48,x1:48,z1:48},6,{gap:1}),e.lane({x0:-80,z0:2.4,x1:80,z1:2.4,speed:6,ids:[`boxtruck`,`pickup`,`van`,`mixer`,`forklift`]}),e.lane({x0:80,z0:-2.4,x1:-80,z1:-2.4,speed:6,ids:[`boxtruck`,`pickup`,`van`,`forklift`]}),e.coins([[-46,6],[-10,6]],14),e.coins([[10,-6],[46,-6]],14),e.place(`pw_magnet`,-30,24,{force:!0,rot:0}),e.place(`pw_surge`,34,-18,{force:!0,rot:0}),e.place(`pw_time`,-2,40,{force:!0,rot:0}),e.place(`pw_multi`,-36,-6,{force:!0,rot:0}),e.place(`secret_duck`,-49.3,49.3,{force:!0,rot:2});let i=e.bounds,a=[`#8a8f9a`,`#c96f5a`,`#5d7f9a`,`#b5b0a5`,`#7a8a6a`];for(let[t,n,r,o]of[[i.minX-10,i.maxX+10,i.minZ-3,`south`],[i.minX-10,i.maxX+10,i.maxZ+3,`north`]])for(let i=t;i<n;i+=22)e.building(i+10,o===`south`?r-9:r+9,o===`south`?0:Math.PI,{w:20,d:16,floors:2,floorH:4.4,color:e.rng.pick(a),roof:`gable`,roofColor:`#6b6f7a`});for(let[t,n,r,o]of[[i.minZ+5,i.maxZ-5,i.minX-3,`east`],[i.minZ+5,i.maxZ-5,i.maxX+3,`west`]])for(let i=t;i<n;i+=22)e.building(o===`east`?r-9:r+9,i+10,Math.PI/2,{w:20,d:16,floors:2,floorH:4.4,color:e.rng.pick(a),roof:`gable`,roofColor:`#6b6f7a`});for(let[t,n]of[[-70,-64],[64,-70],[70,60],[-62,70]])e.raw(t,n,e=>{e.cylB(2.2,2.8,26,`#9a9da6`,t,0,n,12),e.cylB(2.3,2.3,2,`#e8423f`,t,20,n,12),e.cylB(2.3,2.3,2,`#f4f4f0`,t,23,n,12)})}},vp={id:8,name:`Beach Absorption`,setting:`Summer Seaside Resort`,description:`Umbrellas, loungers, surfboards and boats under a blazing sun.`,duration:80,objectives:[{kind:`count`,target:40,label:`Swallow objects`},{kind:`score`,target:1e4,label:`Reach score`}],stars:[12e3,2e4],startTier:2,maxTier:11,growth:1.15,w:112,h:66,margin:32,theme:$f.beach,difficulty:4,seed:808,start:[-10,0],hero:[`beachumbrella`,`surfboard`,`rowboat`],build(e){let t=e.painter,n=e.ext,r=e.bounds;t.fill(ep.sand),t.blotches(n.minX,n.minZ,n.maxX,n.maxZ,[`rgba(255,240,200,0.4)`,`rgba(200,160,90,0.18)`],260,2,7),t.speckle(n.minX,n.minZ,n.maxX,n.maxZ,[`rgba(160,120,60,0.25)`,`rgba(255,255,255,0.35)`],1,.05);for(let e=0;e<12;e++)t.rect(n.minX,24+e*.7,n.maxX,24.7+e*.7,`rgba(170,140,90,${.02+e*.025})`);t.rect(n.minX,r.maxZ+.2,n.maxX,n.maxZ,`#5ec8e6`);let i=[];for(let e=n.minX;e<=n.maxX;e+=3)i.push([e,r.maxZ+.4+Math.sin(e*.3)*.4]);t.path(i,.9,`rgba(255,255,255,0.85)`,{smooth:!0}),t.tiles(n.minX,n.minZ,n.maxX,-25,1.5,`#e6d2b8`,`#dcc3a2`,`#c8ad8a`,.05),t.rect(n.minX,-25.3,n.maxX,-25,`#b9a07c`);for(let n of[-30,34])t.rect(n-8,-4,n+8,4,`rgba(255,255,255,0.0)`),t.path([[n-8,-4],[n+8,-4],[n+8,4],[n-8,4],[n-8,-4]],.12,`#3d7bf0`,{cap:`butt`}),e.place(`volleynet`,n,0,{rot:Math.PI/2,force:!0}),e.place(`beachball`,n-4,2,{});for(let[t,n]of[[-44,8],[-6,6],[14,14],[-20,-14],[26,-14]])for(let r=0;r<2;r++)for(let i=0;i<4;i++){let a=t+i*4.4,o=n+r*5;e.place(`beachumbrella`,a,o,{rot:0,gap:.05}),e.place(`lounger`,a-1.2,o+1.6,{rot:Math.PI/2+.1,gap:.02}),e.rng.chance(.6)&&e.place(`lounger`,a+1.2,o+1.6,{rot:Math.PI/2-.1,gap:.02}),e.rng.chance(.5)&&e.place(`towel`,a,o+3.4,{rot:Math.PI/2,gap:.02})}for(let t=-50;t<=50;t+=9){let n=e.rng.pick([`rowboat`,`rowboat`,`jetski`,`sailboat`]);e.place(n,t+e.rng.range(-2,2),29+e.rng.range(-1,1),{rot:Math.PI/2+e.rng.range(-.4,.4),gap:.3})}e.place(`beachhut`,-38,-20,{rot:0}),e.place(`beachhut`,4,-20,{rot:0}),e.place(`beachhut`,44,-20,{rot:0}),e.place(`lifeguard`,-18,22,{rot:Math.PI}),e.place(`lifeguard`,22,23,{rot:Math.PI}),e.place(`surfrack`,-50,20,{rot:0}),e.place(`surfrack`,50,18,{rot:0}),e.place(`icecreamvan`,22,-29,{rot:0});for(let t=-52;t<=52;t+=8)e.place(`palm`,t,-26.8,{});e.scatter([[`surfboard`,2],[`deckchair`,2],[`cooler`,2],[`sandcastle`,2],[`swimring`,1],[`beachumbrella`,1]],{x0:-55,z0:-22,x1:55,z1:31},44,{gap:.4}),e.scatter([[`towel`,2],[`beachball`,2],[`bucket`,3],[`flipflops`,3],[`sandcastle`,1],[`can`,2],[`bottle`,1],[`swimring`,1],[`cup`,1]],{x0:-55,z0:-24,x1:55,z1:31},170,{gap:.25,respawn:!0}),e.scatter([[`cafechair`,2],[`trashbin`,1],[`shoppingbag`,2],[`cup`,2],[`bench_modern`,1],[`vespa`,1],[`bicycle`,1]],{x0:-55,z0:-32.5,x1:55,z1:-27.5},34,{gap:.3}),e.coins([[-54,24],[-30,24],[-6,25]],14),e.coins([[10,25],[30,24],[54,25]],14),e.place(`pw_magnet`,0,20,{force:!0,rot:0}),e.place(`pw_surge`,-50,-8,{force:!0,rot:0}),e.place(`pw_time`,50,4,{force:!0,rot:0}),e.place(`pw_multi`,10,-6,{force:!0,rot:0}),e.place(`secret_duck`,55.4,32.4,{force:!0,rot:2});let a=ap(0,r.maxZ+1+200,1200,400,`#1a86c4`,`#56d3f0`);e.extras.push(a),e.raw(30,50,e=>{e.boxB(4,.3,40,`#a8754a`,30,.6,58);for(let t=40;t<78;t+=4)for(let n of[28.3,31.7])e.cylB(.2,.2,1.4,`#6e4a2e`,n,-.5,t,6)}),rp(e,n.minX,n.maxX,-33.2,`south`,{minF:2,maxF:5,shops:!0,colors:[`#ff9eb5`,`#ffd27a`,`#9fe0d6`,`#b9a6ff`,`#ffb38a`,`#a8e6a0`,`#f4f4f0`]}),rp(e,n.minX,n.maxX,-46,`south`,{minF:5,maxF:9,colors:[`#f4f4f0`,`#ffe2c4`,`#d9f2ff`]})}},yp={id:9,name:`Neon Metropolis`,setting:`Futuristic City at Night`,description:`Hovercars, robots and holograms. Find the glowing special cores.`,duration:90,objectives:[{kind:`score`,target:12e3,label:`Reach score`},{kind:`tag`,tag:`special`,target:3,label:`Special objects`}],stars:[17800,35700],startTier:3,maxTier:12,growth:1.15,w:100,h:100,margin:30,theme:$f.neon,difficulty:5,seed:909,start:[-18,12],hero:[`robot`,`hovercar`,`neonsign`],build(e){let t=e.painter,n=e.ext;t.fill(`#120c26`),t.tiles(n.minX,n.minZ,n.maxX,n.maxZ,3,`#1e1642`,`#1a1238`,`#2a1f58`,.05),t.grid(n.minX,n.minZ,n.maxX,n.maxZ,6,`rgba(123,92,255,0.35)`,.08);let r=[-26,26],i=[-26,26];mp(e,r,i,11,{asphalt:`#0d0a1c`,line:`#3de8ff`,edgeColor:`#ff3d9a`,walk:3});for(let e of i)t.rect(n.minX,e-8.5,n.maxX,e-5.5,`rgba(25,16,55,0.85)`),t.rect(n.minX,e+5.5,n.maxX,e+8.5,`rgba(25,16,55,0.85)`),t.path([[n.minX,e-5.6],[n.maxX,e-5.6]],.15,`#ff3d9a`),t.path([[n.minX,e+5.6],[n.maxX,e+5.6]],.15,`#ff3d9a`);for(let e of r)t.rect(e-8.5,n.minZ,e-5.5,n.maxZ,`rgba(25,16,55,0.85)`),t.rect(e+5.5,n.minZ,e+8.5,n.maxZ,`rgba(25,16,55,0.85)`),t.path([[e-5.6,n.minZ],[e-5.6,n.maxZ]],.15,`#ff3d9a`),t.path([[e+5.6,n.minZ],[e+5.6,n.maxZ]],.15,`#ff3d9a`);t.glow(0,0,18,`rgba(61,232,255,0.25)`),t.ring(0,0,14,.3,`#3de8ff`).ring(0,0,9,.2,`#ff3d9a`).ring(0,0,4,.2,`#7b5cff`),e.place(`pylon`,0,0,{force:!0}),e.circleOf(`holokiosk`,0,0,11.5,4,{phase:Math.PI/4}),e.circleOf(`neontree`,0,0,16,8,{});let a=[];for(let e of[-1,0,1])for(let t of[-1,0,1])(e||t)&&a.push([e*39,t*39]);a.forEach(([n,r],i)=>{let a={x0:n-11,z0:r-11,x1:n+11,z1:r+11};t.glow(n,r,10,i%2?`rgba(255,61,154,0.18)`:`rgba(123,92,255,0.2)`),e.scatter([[`neonsign`,2],[`servertower`,2],[`satdish`,1],[`holokiosk`,1],[`neontree`,2],[`mech`,1]],a,9,{gap:1}),e.scatter(`robot`,a,4,{gap:.6,wander:4}),e.scatter([[`neonbollard`,3],[`datacube`,3],[`holoplant`,2],[`drone`,2],[`cyberbike`,1]],a,16,{gap:.4}),e.scatter([[`datacube`,2],[`neonbollard`,1],[`can`,2],[`cup`,1],[`holoplant`,1]],a,22,{gap:.25,respawn:!0})}),e.scatter([[`neonbollard`,2],[`datacube`,2],[`drone`,1],[`cyberbike`,1],[`robot`,1]],{x0:-50,z0:-50,x1:50,z1:50},70,{gap:.3,respawn:!0}),hp(e,r,i,80,[`hovercar`,`hovercar`,`cyberbike`,`hovercar`],9,.4);for(let[t,n,r]of[[`pw_magnet`,-12,-14],[`pw_multi`,14,12],[`pw_time`,-39,39],[`pw_surge`,39,-39],[`pw_multi`,39,39],[`pw_time`,-39,-39]])e.place(t,n,r,{force:!0,rot:0});e.coins([[-18,18],[18,18]],12),e.coins([[-18,-18],[18,-18]],12),e.place(`secret_duck`,49.3,-49.3,{force:!0,rot:2}),ip(e,3,{minF:8,maxF:18,rows:2,tall:!0,colors:[`#1b1f3a`,`#241a40`,`#16243a`,`#2a1d3f`]});let o=e.bounds;for(let t=0;t<26;t++){let n=t%4,r=e.rng.range(-45,45),i=n===0?o.minX-1.5:n===1?o.maxX+1.5:r,a=n===2?o.minZ-1.5:n===3?o.maxZ+1.5:r;e.deco(`neonsign`,i,a,n===0?Math.PI/2:n===1?-Math.PI/2:n===2?0:Math.PI)}}},bp={id:10,name:`The Final Consumption`,setting:`The Grand Capital`,description:`Skyscrapers, monuments and the Hungry Spire. Consume the world.`,duration:120,objectives:[{kind:`score`,target:2e4,label:`Reach score`},{kind:`tag`,tag:`landmark`,target:1,label:`Major landmark`}],stars:[49e3,98e3],startTier:3,maxTier:17,growth:1.5,w:176,h:176,margin:50,theme:$f.finale,difficulty:5,seed:1010,start:[-22,22],hero:[`spire`,`skyscraper`,`bus`],finaleProp:`spire`,build(e){let t=e.painter,n=e.ext;t.fill(`#d6cfc1`),t.tiles(n.minX,n.minZ,n.maxX,n.maxZ,3,`#dcd5c7`,`#d4ccbd`,`#c6bfb0`,.06);let r=[-58,58],i=[-58,58];mp(e,r,i,13,{walk:4});for(let e of[-1,1])t.road(0,e*36,0,e*51,12,{center:`double`}),t.road(e*36,0,e*51,0,12,{center:`double`}),t.road(0,e*65,0,e*n.maxZ,12,{center:`double`}),t.road(e*65,0,e*n.maxX,0,12,{center:`double`});t.circle(0,0,36,`#b9ac94`).circle(0,0,35,`#efe6d4`);for(let e=0;e<24;e++){let n=e/24*Math.PI*2;t.poly([[0,0],[Math.cos(n)*35,Math.sin(n)*35],[Math.cos(n+Math.PI/24)*35,Math.sin(n+Math.PI/24)*35]],`#e6dbc5`)}t.ring(0,0,14,.6,`#c96f5a`).ring(0,0,24,.4,`#c96f5a`).ring(0,0,30,.25,`#b9ac94`),t.circle(0,0,12.5,`#cfc4b0`),e.place(`spire`,0,0,{force:!0,rot:0}),e.block({cx:0,cz:0,r:13}),e.circleOf(`obelisk`,0,0,27,4,{phase:Math.PI/4}),e.circleOf(`festivetree`,0,0,20,8,{phase:Math.PI/8}),e.circleOf(`statue`,0,0,20,4,{}),e.circleOf(`bench_modern`,0,0,16.5,12,{face:!0,phase:.2}),e.scatter([[`kiosk`,1],[`foodcart`,1],[`cafeset`,2],[`newsstand`,1],[`planter`,2],[`parkbin_lamp`,2]],{cx:0,cz:0,r:34,r0:15},30,{gap:.8}),e.scatter([[`can`,3],[`cup`,3],[`shoppingbag`,2],[`cone`,1],[`trashbin`,1],[`cafechair`,1],[`flowerpot`,1],[`bollard`,1]],{cx:0,cz:0,r:34,r0:14},150,{gap:.25,respawn:!0}),e.place(`arch`,0,74,{rot:0,force:!0}),e.place(`arch`,74,0,{rot:Math.PI/2,force:!0});for(let[n,r]of[[-30,-30],[30,-30],[-30,30],[30,30]]){let i={x0:n-13,z0:r-13,x1:n+13,z1:r+13};t.roundRect(n-14,r-14,n+14,r+14,2,`#cfc6b4`),e.scatter([[`house`,3],[`shopbuilding`,2],[`tree`,2],[`busshelter`,1],[`billboard`,1]],i,9,{gap:1.2}),e.scatter([[`car`,2],[`hatchback`,2],[`vespa`,1],[`bicycle`,1],[`trashbin`,2],[`lamppost`,2],[`planter`,1],[`bench`,1]],i,20,{gap:.6}),e.scatter(pp,i,30,{gap:.25,respawn:!0})}let a=[];for(let e of[-1,0,1])for(let t of[-1,0,1])(e||t)&&a.push([e*75,t*75]);a.forEach(([t,n],r)=>{let i={x0:t-12.5,z0:n-12.5,x1:t+12.5,z1:n+12.5};if(t===0||n===0){let r=t===0?{x0:t-12.5+8,z0:n-12.5,x1:t+12.5,z1:n+12.5}:{x0:t-12.5,z0:n-12.5+8,x1:t+12.5,z1:n+12.5};e.scatter([[`apartment`,2],[`office`,1],[`tree`,2]],r,4,{gap:1.5}),e.scatter([[`bus`,1],[`suv`,2],[`van`,1],[`car`,2]],i,6,{gap:.8})}else e.place(r%2?`skyscraper`:`office`,t,n,{rot:0}),e.scatter([[`apartment`,2],[`shopbuilding`,2],[`house`,1]],{x0:t-26,z0:n-26,x1:t+26,z1:n+26},6,{gap:1.5}),e.scatter([[`suv`,2],[`van`,1],[`bus`,1],[`car`,2],[`tree`,2],[`busshelter`,1],[`statue`,1]],{x0:t-26,z0:n-26,x1:t+26,z1:n+26},14,{gap:.8}),e.scatter(pp,{x0:t-26,z0:n-26,x1:t+26,z1:n+26},26,{gap:.25,respawn:!0})}),e.scatter([[`house`,3],[`shopbuilding`,3],[`apartment`,2],[`office`,1],[`skyscraper`,1]],{x0:-86,z0:-86,x1:86,z1:86},40,{gap:1.5}),e.scatter([[`tree`,2],[`busshelter`,1],[`kiosk`,1],[`newsstand`,1],[`phonebooth`,1],[`sculpture`,1],[`billboard`,1],[`icecreamvan`,1]],{x0:-86,z0:-86,x1:86,z1:86},60,{gap:1}),e.scatter([[`motorcycle`,2],[`vespa`,2],[`lamppost`,2],[`streetsign`,2],[`trafficlight`,1],[`bench`,2],[`bicycle`,2],[`hydrant`,2],[`trashbin`,2]],{x0:-86,z0:-86,x1:86,z1:86},140,{gap:.5}),e.scatter(pp,{x0:-86,z0:-86,x1:86,z1:86},200,{gap:.25,respawn:!0}),hp(e,r,i,140,[`car`,`suv`,`van`,`bus`,`taxi`,`hatchback`,`pickup`,`bus`],8),e.coins([[-34,-40],[34,-40]],16),e.coins([[-40,34],[-40,-34]],16),e.place(`pw_surge`,40,40,{force:!0,rot:0}),e.place(`pw_magnet`,-40,40,{force:!0,rot:0}),e.place(`pw_time`,40,-40,{force:!0,rot:0}),e.place(`pw_multi`,-42,-42,{force:!0,rot:0}),e.place(`pw_time`,0,-45,{force:!0,rot:0}),e.place(`pw_multi`,70,70,{force:!0,rot:0}),e.place(`secret_duck`,-87.3,87.3,{force:!0,rot:2}),ip(e,4,{minF:10,maxF:20,rows:2,tall:!0,colors:[`#e9edf5`,`#c9b79c`,`#9fb7c9`,`#d9d2c4`,`#e6c3a0`]})}},xp=[[`balloon`,3],[`icecream`,3],[`cup`,2],[`can`,2],[`teddy`,1],[`duck`,1],[`shoppingbag`,1],[`sandwich`,1]],Sp=[sp,lp,up,dp,fp,gp,_p,vp,yp,bp,{id:11,name:`Fun Fair Frenzy`,setting:`Funfair at Sunset`,description:`Bonus world. Carousels, teacups and a giant Ferris wheel under a pink sky.`,duration:90,objectives:[{kind:`score`,target:15e3,label:`Reach score`},{kind:`tag`,tag:`ride`,target:3,label:`Fairground rides`}],stars:[21500,43e3],startTier:3,maxTier:16,growth:1.3,w:110,h:110,margin:34,theme:$f.fair,difficulty:4,seed:1111,start:[-8,44],bonus:!0,hero:[`carousel`,`ferriswheel`,`balloon`],build(e){let t=e.painter,n=e.ext;tp(e,n.minX,n.minZ,n.maxX,n.maxZ,`#86c25e`),t.roundRect(-52,-52,52,52,6,`#d9c3a0`),t.speckle(-52,-52,52,52,[`rgba(120,80,40,0.18)`,`rgba(255,255,255,0.18)`],.8,.06);let r=e=>{t.path(e,9,`#c9a66b`),t.path(e,8.2,`#efd6a8`),t.path(e,.25,`rgba(255,61,110,0.55)`,{dash:[1.2,1.2]})};r([[0,54],[0,-54]]),r([[-54,0],[54,0]]),t.circle(0,0,11,`#c9a66b`).circle(0,0,10.3,`#f4e3c1`);for(let e=0;e<16;e++){let n=e/16*Math.PI*2;t.poly([[0,0],[Math.cos(n)*10.3,Math.sin(n)*10.3],[Math.cos(n+Math.PI/16)*10.3,Math.sin(n+Math.PI/16)*10.3]],e%2?`#ffd1dc`:`#f4e3c1`)}e.place(`balloonstand`,0,0,{force:!0,rot:0}),e.circleOf(`parkbin_lamp`,0,0,8.5,8,{phase:.2}),t.roundRect(-11,-50,11,-38,2,`#b9a07c`),e.place(`ferriswheel`,0,-44,{force:!0,rot:0});for(let[n,r]of[[-28,-24],[28,24]])t.circle(n,r,7,`#c9a66b`).circle(n,r,6.4,`#f7e6c8`),e.place(`carousel`,n,r,{force:!0,rot:0,variant:n<0?0:1});for(let[n,r]of[[28,-24],[-28,24]])t.circle(n,r,5.6,`#c9a66b`).circle(n,r,5.1,`#ffd1dc`),e.place(`teacups`,n,r,{force:!0,rot:0});t.roundRect(-14,30,14,46,3,`#3a2f55`,{color:`#ffc94a`,w:.5}),t.grid(-13,31,13,45,2,`rgba(255,255,255,0.08)`,.05),e.scatter(`bumpercar`,{x0:-12,z0:32,x1:12,z1:44},10,{gap:.8,wander:5});for(let t of[-1,1])for(let n=14;n<=48;n+=7)e.place(e.rng.pick([`gamebooth`,`popcorn`,`cottoncandy`,`ticketbooth`,`gamebooth`,`balloonstand`]),t*n,-7.5,{rot:0,gap:.3}),e.place(e.rng.pick([`gamebooth`,`popcorn`,`cottoncandy`,`icecreamvan`,`gamebooth`]),t*n,7.5,{rot:Math.PI,gap:.3}),e.place(e.rng.pick([`gamebooth`,`popcorn`,`ticketbooth`,`balloonstand`]),-7.5,t*n,{rot:Math.PI/2,gap:.3}),e.place(e.rng.pick([`gamebooth`,`cottoncandy`,`popcorn`,`balloonstand`]),7.5,t*n,{rot:-Math.PI/2,gap:.3});for(let t=-50;t<=50;t+=10)Math.abs(t)<12||(e.place(`parkbin_lamp`,t,-4.6,{gap:.05}),e.place(`parkbin_lamp`,-4.6,t,{gap:.05}));e.scatter([[`bench`,2],[`trashbin`,2],[`cafeset`,2],[`umbrella_table`,1],[`smalltree`,1],[`planter`,1]],{x0:-52,z0:-52,x1:52,z1:52},50,{gap:.8}),e.scatter(xp,{x0:-53,z0:-53,x1:53,z1:53},220,{gap:.25,respawn:!0}),e.scatter(xp,{path:[[0,52],[0,-52]],w:7},50,{gap:.2,respawn:!0}),e.scatter(xp,{path:[[-52,0],[52,0]],w:7},50,{gap:.2,respawn:!0}),e.coins([[-20,3],[-12,3]],8),e.coins([[12,-3],[20,-3]],8),e.coins([[3,14],[3,28]],10),e.place(`pw_magnet`,-14,-14,{force:!0,rot:0}),e.place(`pw_surge`,16,16,{force:!0,rot:0}),e.place(`pw_time`,-44,44,{force:!0,rot:0}),e.place(`pw_multi`,44,-44,{force:!0,rot:0}),e.place(`pw_time`,40,40,{force:!0,rot:0}),e.place(`secret_duck`,54.4,54.4,{force:!0,rot:2}),e.treeBorder(6,2,[`round`,`blossom`,`tall`]),rp(e,n.minX,n.maxX,-70,`south`,{minF:3,maxF:7,colors:[`#ffd1dc`,`#f2d7a6`,`#a59bd1`,`#9fd3e0`]}),rp(e,n.minX,n.maxX,70,`north`,{minF:3,maxF:7,colors:[`#ffd1dc`,`#f2d7a6`,`#a59bd1`,`#9fd3e0`]})}},{id:12,name:`Sky Harbor`,setting:`International Airport`,description:`Bonus world. Suitcases, tugs, helicopters and jets on the apron.`,duration:100,objectives:[{kind:`score`,target:25e3,label:`Reach score`},{kind:`tag`,tag:`aircraft`,target:2,label:`Aircraft`}],stars:[30600,61e3],startTier:3,maxTier:17,growth:1.4,w:150,h:100,margin:40,theme:$f.sky,difficulty:5,seed:1212,start:[-30,34],bonus:!0,hero:[`jet`,`suitcase`,`helicopter`],build(e){let t=e.painter,n=e.ext;tp(e,n.minX,n.minZ,n.maxX,n.maxZ,`#8fbf66`),t.rect(n.minX,-43,n.maxX,-25,`#4a4d57`),t.speckle(n.minX,-43,n.maxX,-25,[`rgba(0,0,0,0.12)`,`rgba(255,255,255,0.05)`],.3,.1),t.path([[n.minX,-34],[n.maxX,-34]],.5,`#f4f4ee`,{dash:[6,5],cap:`butt`}),t.path([[n.minX,-42],[n.maxX,-42]],.35,`#f4f4ee`,{cap:`butt`}),t.path([[n.minX,-26],[n.maxX,-26]],.35,`#f4f4ee`,{cap:`butt`});for(let e of[-70,62])for(let n=0;n<6;n++)t.rect(e+n%2*0,-40.5+n*2.4,e+7,-39.6+n*2.4,`#f4f4ee`);t.text(-52,-34,`27`,5,`rgba(244,244,238,0.9)`,-Math.PI/2),t.text(52,-34,`09`,5,`rgba(244,244,238,0.9)`,Math.PI/2),t.rect(n.minX,-17,n.maxX,-7,`#55585f`),t.path([[n.minX,-12],[n.maxX,-12]],.3,`#ffd23f`,{cap:`butt`});for(let e of[-50,0,50])t.rect(e-5,-25,e+5,-17,`#55585f`),t.path([[e,-25],[e,-12]],.3,`#ffd23f`,{cap:`butt`});t.rect(n.minX,-7,n.maxX,n.maxZ,`#b9b6ae`),t.tiles(n.minX,-7,n.maxX,n.maxZ,5,`#bdbab2`,`#b5b2aa`,`#a8a59d`,.06);for(let e=0;e<5;e++){let n=-60+e*30;t.path([[n,-2],[n,26]],.3,`#ffd23f`,{cap:`butt`}),t.path([[n-10,26],[n+10,26]],.3,`#ffd23f`,{cap:`butt`}),t.text(n+4,22,`A${e+1}`,2.2,`rgba(255,210,63,0.9)`)}t.rect(n.minX,38,n.maxX,44,`#4a4d57`),t.path([[n.minX,41],[n.maxX,41]],.15,`#f4f4ee`,{dash:[2,2],cap:`butt`});for(let t=-74;t<=74;t+=6)e.place(`runwaylight`,t,-43.5,{force:!0,rot:0,variant:0}),e.place(`runwaylight`,t,-24.5,{force:!0,rot:0,variant:0}),e.place(`runwaylight`,t+3,-17.5,{force:!0,rot:0,variant:1}),e.place(`runwaylight`,t+3,-6.5,{force:!0,rot:0,variant:1});e.place(`jet`,-60,12,{rot:Math.PI/2,force:!0}),e.place(`propplane`,-30,14,{rot:Math.PI/2,force:!0}),e.place(`jet`,0,12,{rot:Math.PI/2,force:!0,variant:1}),e.place(`propplane`,30,14,{rot:Math.PI/2,force:!0,variant:2}),e.place(`jet`,60,12,{rot:Math.PI/2,force:!0,variant:2}),t.circle(55,32,5.5,`#4a4d57`).ring(55,32,4.6,.3,`#f4f4ee`).text(55,32,`H`,4,`#f4f4ee`),e.place(`helicopter`,55,32,{rot:.3,force:!0}),e.place(`helicopter`,-70,-2,{rot:1.2,force:!0,variant:1}),e.place(`controltower`,66,-2,{rot:0,force:!0});for(let t=0;t<5;t++){let n=-60+t*30;e.place(t%2?`stairtruck`:`fueltruck`,n+9,4,{rot:Math.PI/2,gap:.4}),e.place(`baggagecart`,n-8,26,{rot:0,gap:.3}),e.place(`tug`,n-12,30,{rot:0,gap:.3}),e.cluster([[`suitcase`,4],[`uld`,1],[`cone`,2]],n-8,30,3.4,9),e.place(`uld`,n+12,26,{gap:.2})}e.scatter([[`suitcase`,4],[`cone`,3],[`uld`,1],[`barrel`,1],[`roadbarrel`,1],[`windsock`,1],[`trashbin`,1],[`bollard`,1]],{x0:-74,z0:-6,x1:74,z1:37},150,{gap:.4,respawn:!0}),e.scatter([[`baggagecart`,2],[`tug`,2],[`uld`,2],[`van`,1],[`pickup`,1]],{x0:-74,z0:-6,x1:74,z1:37},22,{gap:.8}),e.scatter([[`suitcase`,3],[`shoppingbag`,2],[`cup`,2],[`can`,2],[`bottle`,1]],{x0:-74,z0:44.5,x1:74,z1:49.5},50,{gap:.25,respawn:!0}),e.scatter([[`windsock`,1],[`runwaylight`,4],[`cone`,1]],{x0:-74,z0:-49,x1:74,z1:-44},30,{gap:.4}),e.scatter([[`windsock`,1],[`runwaylight`,3]],{x0:-74,z0:-24,x1:74,z1:-18},20,{gap:.4}),e.lane({x0:-110,z0:39.6,x1:110,z1:39.6,speed:5,ids:[`tug`,`baggagecart`,`van`,`tug`,`bus`]}),e.lane({x0:110,z0:42.4,x1:-110,z1:42.4,speed:5,ids:[`tug`,`fueltruck`,`baggagecart`,`pickup`]}),e.lane({x0:-120,z0:-12,x1:120,z1:-12,speed:4,ids:[`propplane`,`propplane`,`jet`]}),e.coins([[-44,-2],[-16,-2]],12),e.coins([[16,-2],[44,-2]],12),e.place(`pw_magnet`,-45,34,{force:!0,rot:0}),e.place(`pw_surge`,15,34,{force:!0,rot:0}),e.place(`pw_time`,45,20,{force:!0,rot:0}),e.place(`pw_multi`,-15,20,{force:!0,rot:0}),e.place(`pw_time`,-15,-40,{force:!0,rot:0}),e.place(`secret_duck`,-74.5,-49.5,{force:!0,rot:2});let r=e.bounds;e.raw(0,r.maxZ+14,e=>{e.boxB(150,9,16,`#e9edf5`,0,0,r.maxZ+14),e.boxB(150,3.5,.2,`#7fc4ea`,0,3,r.maxZ+5.9),e.boxB(152,.8,17,`#aeb4c2`,0,9,r.maxZ+14);for(let t=-70;t<=70;t+=10)e.boxB(.3,9,.3,`#aeb4c2`,t,0,r.maxZ+5.9);e.box(30,3,.3,`#3d6bff`,0,11.5,r.maxZ+6.2)});for(let t of[-95,-60,60,95])e.building(t,r.minZ-24,0,{w:30,d:22,floors:2,floorH:6,color:`#d9dde6`,roof:`gable`,roofColor:`#8a8f9a`})}}];function Cp(e){return Sp[Math.max(0,Math.min(Sp.length-1,e-1))]}var wp={...dp,id:0,name:`Menu`,duration:9999,startTier:4,maxTier:8,growth:.6,theme:{...$f.traffic,music:`menu`}};function Q(e,t=null,...n){let r=document.createElement(e);if(t)for(let[e,n]of Object.entries(t))n!=null&&n!==!1&&(e===`class`?r.className=String(n):e===`style`&&typeof n==`object`?Object.assign(r.style,n):e===`html`?r.innerHTML=String(n):e.startsWith(`on`)&&typeof n==`function`?r.addEventListener(e.slice(2).toLowerCase(),n):e.startsWith(`--`)?r.style.setProperty(e,String(n)):r.setAttribute(e,n===!0?``:String(n)));for(let e of n.flat())e!=null&&e!==!1&&r.append(typeof e==`string`?document.createTextNode(e):e);return r}function Tp(e,t=`ic`){let n=document.createElement(`template`);return n.innerHTML=`<svg class="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Ep[e]}</svg>`,n.content.firstChild}var Ep={play:`<path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none"/>`,grid:`<rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/>`,gem:`<path d="M6 3h12l3 6-9 12L3 9z"/><path d="M3 9h18M9 3l3 6 3-6M12 9v12"/>`,gear:`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68 1.65 1.65 0 0 0 10 3.17V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>`,sound:`<path d="M11 5 6 9H3v6h3l5 4z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>`,mute:`<path d="M11 5 6 9H3v6h3l5 4z" fill="currentColor"/><path d="m22 9-6 6M16 9l6 6"/>`,pause:`<rect x="6" y="4.5" width="4" height="15" rx="1.2" fill="currentColor" stroke="none"/><rect x="14" y="4.5" width="4" height="15" rx="1.2" fill="currentColor" stroke="none"/>`,retry:`<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/>`,next:`<path d="M5 12h14M13 6l6 6-6 6"/>`,back:`<path d="M19 12H5M11 18l-6-6 6-6"/>`,home:`<path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>`,star:`<path d="m12 2.8 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.6l-5.8 3.1 1.1-6.5L2.6 9.6l6.5-.9z" fill="currentColor" stroke="none"/>`,lock:`<rect x="4.5" y="10.5" width="15" height="10" rx="2.5" fill="currentColor" stroke="none"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>`,clock:`<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,trophy:`<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>`,check:`<path d="m5 12 5 5L20 7"/>`,close:`<path d="M18 6 6 18M6 6l12 12"/>`,target:`<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>`,bolt:`<path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="currentColor" stroke="none"/>`,magnet:`<path d="M6 3v8a6 6 0 0 0 12 0V3"/><path d="M6 7h4M14 7h4"/>`,x2:`<path d="M4 7l6 10M10 7 4 17" /><path d="M14 9a3 3 0 1 1 5 2.2L14 17h6"/>`,surge:`<circle cx="12" cy="12" r="4" fill="currentColor"/><circle cx="12" cy="12" r="8.5"/>`,hand:`<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12M11 11V4a1.5 1.5 0 0 1 3 0v7M14 11V5.5a1.5 1.5 0 0 1 3 0V13"/><path d="M17 9.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-1a7 7 0 0 1-5.6-2.8L3.7 15a1.6 1.6 0 0 1 2.5-2L8 15"/>`,keys:`<rect x="9" y="3" width="6" height="6" rx="1.5"/><rect x="2.5" y="11" width="6" height="6" rx="1.5"/><rect x="9" y="11" width="6" height="6" rx="1.5"/><rect x="15.5" y="11" width="6" height="6" rx="1.5"/>`,eye:`<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>`,hole:`<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5" fill="currentColor"/>`,up:`<path d="M12 19V5M6 11l6-6 6 6"/>`,fullscreen:`<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>`};function Dp(e){e.querySelectorAll(`button, .card`).forEach(e=>{e.addEventListener(`pointerenter`,e=>{e.pointerType===`mouse`&&Kf.hover()})})}function Op(e,t=18){let n=Tp(`star`);return n.setAttribute(`width`,String(t)),n.setAttribute(`height`,String(t)),n.style.color=e?`var(--gold)`:`rgba(255,255,255,.18)`,e&&(n.style.filter=`drop-shadow(0 0 6px rgba(255,201,74,.6))`),n}var kp={time:{label:`TIME`,color:`#3de8ff`,icon:`clock`},magnet:{label:`GRAVITY`,color:`#ff3d9a`,icon:`magnet`},multiplier:{label:`x2 POINTS`,color:`#ffc94a`,icon:`x2`},surge:{label:`SURGE`,color:`#a28bff`,icon:`surge`}},Ap=class{session;root;els={};objEls=[];floats=[];last={};powerEls=new Map;tutEl=null;scoreBumpT=0;joyBase;joyKnob;joyHint=null;constructor(e,t,n){this.session=e;let r=e.def,i=r.theme,a=r.objectives.map(e=>{let t=Q(`i`),n=Q(`b`,null,`0`),r=Q(`div`,{class:`obj`},Q(`div`,{class:`lab`},Q(`span`,null,e.label),n),Q(`div`,{class:`bar`},t));return this.objEls.push({root:r,bar:t,val:n}),r});this.els.timer=Q(`div`,{class:`v`},Id(r.duration)),this.els.timerBox=Q(`div`,{class:`timer glass`},this.els.timer,Q(`div`,{class:`l`},`TIME`)),this.els.score=Q(`div`,{class:`v`},`0`),this.els.lvNum=Q(`span`,null,`1`),this.els.lv=Q(`div`,{class:`lv`},Q(`small`,null,`SIZE`),this.els.lvNum),this.els.gbar=Q(`i`),this.els.gtxt=Q(`span`,null,`GROWTH`),this.els.sizebox=Q(`div`,{class:`sizebox glass`},this.els.lv,Q(`div`,{class:`gw`},Q(`div`,{class:`gl`},this.els.gtxt,Q(`span`,null,`NEXT SIZE`)),Q(`div`,{class:`gbar`},this.els.gbar))),this.els.comboX=Q(`div`,{class:`x`},`x1.5`),this.els.comboC=Q(`div`,{class:`c`},`COMBO`),this.els.comboBar=Q(`i`),this.els.combo=Q(`div`,{class:`combo`},this.els.comboX,this.els.comboC,Q(`div`,{class:`cbar`},this.els.comboBar)),this.els.toasts=Q(`div`,{class:`toasts`}),this.els.floats=Q(`div`,{class:`floats`}),this.els.powers=Q(`div`,{class:`powers`}),this.joyKnob=Q(`div`,{class:`knob`}),this.joyBase=Q(`div`,{class:`joy`},this.joyKnob);let o=Q(`button`,{class:`btn icon pausebtn interactive`,"aria-label":`Pause`,onclick:n},Tp(`pause`));this.root=Q(`div`,{class:`screen hud show`,"--accent":i.accent,"--accent2":i.accent2},this.els.floats,Q(`div`,{class:`top`},Q(`div`,{class:`lvl glass`},Q(`div`,{class:`t`},Q(`span`,{class:`n`},`LV ${r.id}`),Q(`span`,{class:`nm`},r.name.toUpperCase())),...a),this.els.timerBox,Q(`div`,{class:`scorebox`},Q(`div`,{class:`score glass`},this.els.score,Q(`div`,{class:`best`},`BEST `,Q(`b`,null,Fd(t)))),o)),this.els.powers,this.els.toasts,this.els.combo,Q(`div`,{class:`bottom`},this.els.sizebox),this.joyBase),Pd()&&(this.joyHint=Q(`div`,{class:`joy-hint`},Q(`div`,null,Q(`div`,{class:`knob`,style:{margin:`0 auto 6px`}}),`DRAG TO MOVE`)),this.root.append(this.joyHint)),this.intro()}intro(){let e=this.session.def,t=Q(`div`,{class:`intro`},Q(`div`,{class:`box glass`},Q(`div`,{class:`lnum`},`LEVEL ${e.id} · ${e.setting.toUpperCase()}`),Q(`div`,{class:`lname`},e.name.toUpperCase()),Q(`div`,{class:`goal`},...e.objectives.map(e=>Q(`span`,null,Tp(`target`),`${e.label}: ${Fd(e.target)}`)),Q(`span`,{style:{color:`var(--muted)`,fontSize:`12px`}},Tp(`clock`),`${e.duration} seconds`))));this.root.append(t),window.setTimeout(()=>t.remove(),2700)}set(e,t,n){this.last[e]!==n&&(this.last[e]=n,t.textContent=n)}update(e){let t=this.session,n=Math.max(0,t.timeLeft);this.set(`timer`,this.els.timer,Id(n));let r=n/t.def.duration,i=n<=10?`#ff5a6e`:r<.35?`#ffc94a`:`#ffffff`;this.last.tc!==i&&(this.last.tc=i,this.els.timerBox.style.setProperty(`--tc`,i),this.els.timerBox.classList.toggle(`warn`,n<=10));let a=Fd(t.score);this.last.score!==a&&(this.set(`score`,this.els.score,a),this.els.score.classList.add(`bump`),this.scoreBumpT=.12),this.scoreBumpT>0&&(this.scoreBumpT-=e,this.scoreBumpT<=0&&this.els.score.classList.remove(`bump`)),t.objectiveProgress().forEach((e,t)=>{let n=this.objEls[t],r=Math.min(100,e.v/e.o.target*100),i=`o${t}`,a=`${Fd(Math.min(e.v,e.o.target))} / ${Fd(e.o.target)}`;this.last[i]!==a&&(this.last[i]=a,n.val.textContent=a,n.bar.style.width=`${r}%`,n.root.classList.toggle(`done`,e.done))}),this.set(`lv`,this.els.lvNum,String(t.sizeLevel));let o=t.growth.atMax?100:Math.round(t.growth.progress*100);this.last.g!==o&&(this.last.g=o,this.els.gbar.style.width=`${o}%`,this.els.gtxt.textContent=t.growth.atMax?`MAX SIZE`:`GROWTH`);let s=t.combo>=3&&t.comboTimer>0;this.last.comboOn!==String(s)&&(this.last.comboOn=String(s),this.els.combo.classList.toggle(`on`,s)),s&&(this.set(`cx`,this.els.comboX,`x${t.comboMult}`),this.set(`cc`,this.els.comboC,`${t.combo} COMBO`),this.els.comboBar.style.width=`${Math.max(0,t.comboTimer/1.15*100)}%`);for(let[e,n]of this.powerEls){let r=t.powers[e];r<=0?(n.el.remove(),this.powerEls.delete(e)):n.bar.style.width=`${r/n.dur*100}%`}for(let n of this.floats){if(!n.active)continue;n.age+=e;let r=n.age/n.life;if(r>=1){n.active=!1,n.el.style.display=`none`;continue}let i=t.project(n.x,n.y,n.z),a=r*46,o=r<.15?.6+r/.15*.55:1.15-Math.min(.15,(r-.15)*.6);n.el.style.transform=`translate(${i.x}px, ${i.y-a}px) translate(-50%, -50%) scale(${o})`,n.el.style.opacity=String(r>.7?1-(r-.7)/.3:1)}}float(e){let t=this.floats.find(e=>!e.active);if(!t){if(this.floats.length>=28)t=this.floats.reduce((e,t)=>e.age>t.age?e:t);else{let e=Q(`div`,{class:`float`});this.els.floats.append(e),t={el:e,x:0,y:0,z:0,age:0,life:1,active:!1},this.floats.push(t)}}t.x=e.x,t.y=e.y,t.z=e.z,t.age=0,t.life=e.kind===`lock`?1.3:e.kind===`big`?1.2:.9,t.active=!0,t.el.className=`float ${e.kind}`,t.el.style.display=``,t.el.textContent=``,e.kind===`lock`&&t.el.append(Tp(`lock`)),t.el.append(e.text)}message(e,t){let n=Q(`div`,{class:`toast ${t} ${e.length>16&&t!==`finale`?`small`:``}`},e),r=this.els.toasts;for(;r.children.length>2;)r.firstChild?.remove();r.append(n),window.setTimeout(()=>n.remove(),t===`finale`?3300:1700)}power(e,t){if(t<=0)return;this.powerEls.get(e)?.el.remove();let n=kp[e],r=Q(`i`),i=Q(`div`,{class:`power glass`,"--pc":n.color},Q(`div`,{class:`dot`},Tp(n.icon)),n.label,Q(`div`,{class:`pbar`},r));this.els.powers.append(i),this.powerEls.set(e,{el:i,bar:r,dur:t})}sizeUp(){let e=this.els.sizebox;e.classList.remove(`up`),e.offsetWidth,e.classList.add(`up`)}tutorial(e){this.tutEl?.remove(),this.tutEl=null;let t=Pd(),n=[];e===1?n=t?[Q(`div`,{class:`ico`},Tp(`hand`)),`Touch and drag anywhere to move the hole.`]:[Q(`div`,{class:`ico`},Tp(`keys`)),`Move with `,Q(`span`,{class:`k`},`W`),Q(`span`,{class:`k`},`A`),Q(`span`,{class:`k`},`S`),Q(`span`,{class:`k`},`D`),` or arrows — or hold the mouse.`]:e===2?n=[Q(`div`,{class:`ico`},Tp(`hole`)),`Glide under small objects to swallow them. They must fit in the hole!`]:e===3?n=[Q(`div`,{class:`ico`},Tp(`up`)),`You grew! Bigger hole, bigger meals. Keep eating to grow more.`]:e===4&&(n=[Q(`div`,{class:`ico`},Tp(`lock`)),`Too big for now — grow to the size shown, then come back for it.`]),this.joyHint&&e>=2&&this.joyHint.classList.add(`hide`);let r=Q(`div`,{class:`tutorial glass`},...n);this.root.append(r),this.tutEl=r,window.setTimeout(()=>{this.tutEl===r&&(r.style.transition=`opacity .5s`,r.style.opacity=`0`,window.setTimeout(()=>r.remove(),500))},e===1?6e3:4500)}hideJoyHint(){this.joyHint?.classList.add(`hide`)}},jp=`void-hungry-world-save-v1`,Mp=2;function Np(){let e=`ontouchstart`in window||navigator.maxTouchPoints>0,t=Math.min(window.innerWidth,window.innerHeight)<600;return e&&t||e?`medium`:`high`}function Pp(){return{version:1,unlocked:1,levels:{},collection:{},secrets:{},settings:{music:.6,sfx:.8,muted:!1,quality:Np(),shake:!0,mouseSteer:!0,showFps:!1,autoPause:!0},totalEaten:0,seenTutorial:!1}}var $=new class{data;storageOk=!0;constructor(){this.data=Pp();try{let e=localStorage.getItem(jp);if(e){let t=JSON.parse(e),n=Pp();t.settingsRev!==Mp&&t.settings?.quality===`low`&&(t.settings.quality=n.settings.quality),this.data={...n,...t,settings:{...n.settings,...t.settings??{}},levels:t.levels??{},collection:t.collection??{},secrets:t.secrets??{}}}}catch{this.storageOk=!1}}save(){if(this.storageOk)try{this.data.settingsRev=Mp,localStorage.setItem(jp,JSON.stringify(this.data))}catch{this.storageOk=!1}}level(e){return this.data.levels[e]??{completed:!1,stars:0,best:0,bestSize:0,plays:0}}isUnlocked(e){return e<=this.data.unlocked}recordRun(e,t,n,r,i,a){let o={...this.level(e)},s=t>o.best;return o.plays++,o.best=Math.max(o.best,t),o.bestSize=Math.max(o.bestSize,i),r&&(o.completed=!0,o.stars=Math.max(o.stars,n),e+1>this.data.unlocked&&e<a&&(this.data.unlocked=e+1)),this.data.levels[e]=o,this.save(),s}addToCollection(e){for(let[t,n]of Object.entries(e))this.data.collection[t]=(this.data.collection[t]??0)+n,this.data.totalEaten+=n;this.save()}totalStars(){return Object.values(this.data.levels).reduce((e,t)=>e+(t.stars||0),0)}reset(){let e=this.data.settings;this.data=Pp(),this.data.settings=e,this.save()}},Fp=new class{renderer=null;scene=new Un;camera=new os(30,1,.01,500);cache=new Map;thumbs=new Map;queue=[];busy=!1;disposeTimer=0;ensure(){if(this.renderer)return this.renderer;let e=document.createElement(`canvas`);e.width=e.height=192;let t=new Ju({canvas:e,antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setPixelRatio(1),t.setSize(192,192,!1),t.outputColorSpace=Ke,t.toneMapping=4,t.setClearColor(0,0),this.renderer=t;let n=new Jo(`#eef4ff`,`#5a4a7a`,1.6),r=new ds(`#ffffff`,2.4);r.position.set(3,5,4);let i=new ds(`#b9a6ff`,1.2);return i.position.set(-4,3,-3),this.scene.add(n,r,i),t}get(e,t=0){return this.cache.get(`${e}#${t}`)??null}request(e,t,n){let r=`${e}#${t}`,i=this.cache.get(r);i?n(i):(this.queue.push({key:r,run:()=>n(this.render(e,t))}),this.pump())}requestThumb(e,t){let n=this.thumbs.get(e.id);n?t(n):(this.queue.push({key:`thumb`+e.id,run:()=>{let n=this.thumb(e);this.thumbs.set(e.id,n),t(n)}}),this.pump())}pump(){if(this.busy)return;this.busy=!0;let e=()=>{let t=performance.now();for(;this.queue.length&&performance.now()-t<12;){let e=this.queue.shift();try{e.run()}catch(t){console.warn(`icon failed`,e.key,t)}}this.queue.length?requestAnimationFrame(e):(this.busy=!1,this.scheduleDispose())};requestAnimationFrame(e)}scheduleDispose(){window.clearTimeout(this.disposeTimer),this.disposeTimer=window.setTimeout(()=>{this.renderer&&!this.queue.length&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=null)},4e3)}render(e,t){let n=`${e}#${t}`,r=this.ensure(),i=$d(e,t),a=new oi(i.geometry,gf().list);a.rotation.y=-.6,this.scene.add(a);let o=i.geometry.boundingBox,s=new W;o.getCenter(s);let c=i.geometry.boundingSphere.radius/Math.sin(It.degToRad(15))*1.02,l=new W(0,.55,1).normalize();this.camera.position.copy(s).addScaledVector(l,c),this.camera.near=c/50,this.camera.far=c*4,this.camera.lookAt(s),this.camera.updateProjectionMatrix(),r.render(this.scene,this.camera);let u=r.domElement.toDataURL(`image/png`);return this.scene.remove(a),this.cache.set(n,u),u}thumb(e){let t=new rf(e.w,e.h,Math.min(e.margin,12),e.seed,420,!!e.theme.night);e.build(t);let n=t.painter,r=n.ctx;for(let e of t.placements){let t=$d(e.id,e.variant),i=Math.max(1.2,Math.max(t.hx,t.hz)*n.s*.9);r.fillStyle=`rgb(${Math.round(Math.min(1,t.color.r*1.25)**(1/2.2)*255)},${Math.round(Math.min(1,t.color.g*1.25)**(1/2.2)*255)},${Math.round(Math.min(1,t.color.b*1.25)**(1/2.2)*255)})`,r.beginPath(),r.arc(n.px(e.x),n.pz(e.z),i,0,Math.PI*2),r.fill()}let i=document.createElement(`canvas`);i.width=384,i.height=216;let a=i.getContext(`2d`),o=n.canvas.width,s=n.canvas.height,c=16/9,l=o,u=o/c;return u>s&&(u=s,l=s*c),a.drawImage(n.canvas,(o-l)/2,(s-u)/2,l,u,0,0,i.width,i.height),i.toDataURL(`image/jpeg`,.82)}};function Ip(e,...t){let n=Q(`div`,{class:`screen interactive ${e}`},...t);return Dp(n),n}function Lp(e,t,n,r=``){return Q(`button`,{class:`btn ${r}`,onclick:()=>{Kf.click(),n()}},t?Tp(t):null,e)}function Rp(e,t,n=null){return Q(`div`,{class:`header`},Q(`button`,{class:`btn icon`,"aria-label":`Back`,onclick:()=>{Kf.back(),t()}},Tp(`back`)),Q(`h2`,null,e),Q(`div`,{class:`spacer`}),n)}function zp(e){let t=Sp.length,n=Object.values($.data.levels).filter(e=>e.completed).length,r=$.totalStars(),i=Q(`button`,{class:`btn icon`,"aria-label":`Toggle sound`,onclick:()=>{e.toggleMute(),i.replaceChildren(Tp($.data.settings.muted?`mute`:`sound`))}},Tp($.data.settings.muted?`mute`:`sound`)),a=document.fullscreenEnabled?Q(`button`,{class:`btn icon`,"aria-label":`Fullscreen`,onclick:e.fullscreen},Tp(`fullscreen`)):null,o=Math.min(t,$.data.unlocked);return Ip(`menu dim show-later`,Q(`div`,{class:`topbar`},Q(`div`,{class:`chip glass`},Q(`span`,{class:`star`},Op(!0,16)),`${r} / ${t*3}`),Q(`div`,{style:{display:`flex`,gap:`8px`}},a,i)),Q(`div`,{class:`logo`},Q(`h1`,null,`V`,Q(`span`,{class:`o`}),`ID`),Q(`div`,{class:`sub`},`THE HUNGRY WORLD`),Q(`div`,{class:`tag`},`Everything begins with a little hole.`)),Q(`div`,{class:`buttons`},Lp(n===0?`Play`:`Play · Level ${o}`,`play`,e.play,`primary big`),Lp(`Level Select`,`grid`,e.select),Q(`div`,{class:`row`},Lp(`Collection`,`gem`,e.collection),Lp(`Settings`,`gear`,e.settings))),Q(`div`,{class:`progress`},Q(`span`,null,`Levels `,Q(`b`,null,`${n}/${t}`)),Q(`div`,{class:`bar`},Q(`i`,{style:{width:`${n/t*100}%`}})),Q(`span`,null,`Devoured `,Q(`b`,null,Fd($.data.totalEaten)))),Q(`div`,{class:`credits`},`VOID: THE HUNGRY WORLD · v1.0`))}function Bp(e){let t=Q(`div`,{class:`grid`});Sp.forEach((n,r)=>{let i=$.level(n.id),a=$.isUnlocked(n.id),o=Q(`div`,{class:`thumb`}),s=Q(`img`,{class:`hero`,alt:``});s.style.opacity=`0`,s.style.transition=`opacity .4s`,o.append(Q(`div`,{class:`num`},String(n.id).padStart(2,`0`)),s);let c=i.completed?Q(`span`,{class:`pill gold badge`},Tp(`check`),`Cleared`):a&&!i.plays?Q(`span`,{class:`pill new badge`},`New`):n.bonus?Q(`span`,{class:`pill badge`},Tp(`star`),`Bonus`):null;c&&o.append(c),a||o.append(Q(`div`,{class:`lock`},Tp(`lock`)));let l=Q(`span`,{class:`diff`,title:`Difficulty`},...[1,2,3,4,5].map(e=>Q(`i`,{class:e<=n.difficulty?`on`:``}))),u=Q(`button`,{class:`card ${i.completed?`done`:``} ${a?``:`locked`}`,"--accent":n.theme.accent,style:{animationDelay:`${r*.04}s`},"aria-label":`Level ${n.id} ${n.name}${a?``:` (locked)`}`},o,Q(`div`,{class:`body`},Q(`div`,{class:`name`},n.name),Q(`div`,{class:`meta`},Q(`span`,null,n.setting),Q(`span`,null,Tp(`clock`),`${n.duration}s`),l),Q(`div`,{class:`row`},Q(`div`,{class:`stars`},Op(i.stars>=1),Op(i.stars>=2),Op(i.stars>=3)),Q(`div`,{class:`best`},a?i.best?Q(`span`,null,`Best `,Q(`b`,null,Fd(i.best))):`Not played`:`Locked`))));u.addEventListener(`click`,()=>{a?(Kf.click(),e.play(n.id)):(Kf.back(),u.animate([{transform:`translateX(0)`},{transform:`translateX(-6px)`},{transform:`translateX(6px)`},{transform:`translateX(0)`}],{duration:260}))}),t.append(u),Fp.requestThumb(n,e=>o.style.backgroundImage=`url(${e})`),Fp.request(n.hero[0],0,e=>{s.src=e,s.style.opacity=`1`})});let n=$.totalStars();return Ip(`solid`,Rp(`Select Level`,e.back,Q(`div`,{class:`chip glass`},Op(!0,16),`${n} / ${Sp.length*3}`)),Q(`div`,{class:`levels`},t))}function Vp(e){let t=r().filter(e=>!e.tags.includes(`secret`)).sort((e,t)=>e.points-t.points),n=$.data.collection,i=t.filter(e=>n[e.id]).length,a=Q(`div`,{class:`grid`});t.forEach((e,t)=>{let r=n[e.id]??0,i=Q(`img`,{alt:``,style:{opacity:`0`,transition:`opacity .3s`}}),o=e.tags.includes(`special`)||e.tags.includes(`landmark`),s=Q(`div`,{class:`item ${r?``:`locked`} ${o?`special`:``}`,style:{animationDelay:`${Math.min(t,30)*.015}s`},title:r?e.blurb??e.name:`Not yet devoured`},i,Q(`div`,{class:`n`},r?e.name:`???`),Q(`div`,{class:`c`},r?`×${Fd(r)} · ${e.points} pts`:`${e.points} pts`));a.append(s),Fp.request(e.id,0,e=>{i.src=e,i.style.opacity=`1`})});let o=Q(`div`,{class:`stats`},...Sp.map(e=>Q(`div`,{class:`chip glass`,style:{opacity:$.data.secrets[e.id]?`1`:`.45`}},Tp($.data.secrets[e.id]?`star`:`lock`),`World ${e.id}`))),s=Object.values($.data.secrets).filter(Boolean).length;return Ip(`solid`,Rp(`Collection`,e.back,Q(`div`,{class:`chip glass`},Tp(`gem`),`${i} / ${t.length}`)),Q(`div`,{class:`collection`},Q(`div`,{class:`section-title`},`Golden Ducks · ${s} / ${Sp.length} secrets found`),o,Q(`div`,{class:`section-title`},`Devoured objects · ${Fd($.data.totalEaten)} total`),a))}function Hp(e,t=!1){let n=$.data.settings,r=(t,r)=>{let i=Q(`input`,{type:`range`,min:`0`,max:`100`,value:String(Math.round(n[r]*100)),"aria-label":t});return i.addEventListener(`input`,()=>{i.style.setProperty(`--v`,`${i.value}%`),n[r]=Number(i.value)/100,e.apply(n)}),i.addEventListener(`change`,()=>{$.save(),r===`sfx`&&Kf.click()}),i.style.setProperty(`--v`,`${i.value}%`),Q(`div`,{class:`setting`},Q(`label`,null,t),i)},i=(t,r,i)=>{let a=Q(`button`,{class:`toggle ${n[i]?`on`:``}`,"aria-label":t,"aria-pressed":String(!!n[i])});return a.addEventListener(`click`,()=>{n[i]=!n[i],a.classList.toggle(`on`,n[i]),a.setAttribute(`aria-pressed`,String(n[i])),Kf.click(),$.save(),e.apply(n)}),Q(`div`,{class:`setting`},Q(`label`,null,t,Q(`span`,{class:`hint`},r)),a)},a=Q(`div`,{class:`seg`});[`low`,`medium`,`high`].forEach(t=>{let r=Q(`button`,{class:n.quality===t?`on`:``},t);r.addEventListener(`click`,()=>{n.quality=t,a.querySelectorAll(`button`).forEach(e=>e.classList.toggle(`on`,e===r)),Kf.click(),$.save(),e.apply(n)}),a.append(r)});let o=null,s=Lp(`Reset progress`,`retry`,()=>{o||(o=Q(`div`,{class:`missing`,style:{marginTop:`14px`}},Q(`b`,null,`ARE YOU SURE?`),`All levels, stars, records and the collection will be erased.`,Q(`div`,{class:`dialog-actions`},Lp(`Cancel`,null,()=>{o?.remove(),o=null},`small`),Lp(`Erase`,`close`,()=>{e.reset(),o?.remove(),o=null},`small primary`))),c.append(o),Dp(o))},`small`),c=Q(`div`,{class:`panel glass`},Q(`h3`,null,`Audio`),r(`Music volume`,`music`),r(`Sound effects`,`sfx`),i(`Mute all`,`Silence music and effects`,`muted`),Q(`h3`,{style:{marginTop:`20px`}},`Graphics & controls`),Q(`div`,{class:`setting`},Q(`label`,null,`Quality`,Q(`span`,{class:`hint`},`Lower it on older devices`)),a),i(`Camera shake`,`Impact feedback on big swallows`,`shake`),i(`Mouse steering`,`Hold the left button to steer toward the cursor`,`mouseSteer`),i(`Auto-pause`,`Pause when the window loses focus`,`autoPause`),i(`Show FPS`,`Performance counter`,`showFps`),t?null:Q(`div`,{class:`setting`},Q(`label`,null,`Progress`,Q(`span`,{class:`hint`},`Erase all saved data`)),s));return Ip(t?`overlay`:`solid`,Rp(`Settings`,e.back),Q(`div`,{class:`center`},c))}function Up(e,t){return Ip(`overlay pause`,Q(`div`,{class:`center`},Q(`div`,{class:`panel glass`},Q(`h3`,null,`PAUSED`),Q(`div`,{style:{color:`var(--muted)`,fontSize:`13px`,marginBottom:`14px`}},t),Q(`div`,{class:`btns`},Lp(`Resume`,`play`,e.resume,`primary big`),Q(`div`,{class:`row`},Lp(`Restart`,`retry`,e.restart),Lp(`Settings`,`gear`,e.settings)),Q(`div`,{class:`row`},Lp(`Levels`,`grid`,e.select),Lp(`Menu`,`home`,e.menu))))))}function Wp(e,t,n,r){let i=e.completed,a=Q(`div`,{class:`bigstars`});for(let e=0;e<3;e++){let e=Tp(`star`);e.style.color=`rgba(255,255,255,.12)`;let t=Tp(`star`);t.classList.add(`on`),t.style.color=`var(--gold)`,t.style.filter=`drop-shadow(0 0 14px rgba(255,201,74,.8))`,a.append(Q(`div`,{class:`s`},e,t))}let o=(e,t,n=``)=>Q(`div`,{class:`stat ${n}`},Q(`div`,{class:`k`},e),Q(`div`,{class:`v`},t)),s=Q(`div`,{class:`v`},`0`),c=Q(`div`,{class:`resgrid`},o(`Score`,Fd(e.score)),o(`Speed bonus`,e.speedBonus?`+${Fd(e.speedBonus)}`:`—`),o(`Swallowed`,Fd(e.eaten)),o(`Final size`,`SIZE ${e.sizeLevel}`),o(`Best combo`,`${e.maxCombo}×`),o(`Secret`,e.secretFound?`FOUND!`:`—`,e.secretFound?`hl`:``),Q(`div`,{class:`stat wide hl`},Q(`div`,{class:`k`},`Total`),s)),l=i?null:Q(`div`,{class:`missing`},Q(`b`,null,`OBJECTIVE NOT REACHED`),...e.missing.map(e=>Q(`div`,null,`• `,e))),u=Q(`div`,{class:`btns`});i&&n?u.append(Lp(`Next level`,`next`,r.next,`primary big wide`)):i||u.append(Lp(`Retry`,`retry`,r.retry,`primary big wide`)),i&&u.append(Lp(`Retry`,`retry`,r.retry)),u.append(Lp(`Levels`,`grid`,r.select)),u.append(Lp(`Menu`,`home`,r.menu,i?`wide`:``));let d=Ip(`overlay results`,Q(`div`,{class:`center`},Q(`div`,{class:`panel glass`},Q(`div`,{class:`lname`},`Level ${e.level.id} · ${e.level.name}`),Q(`div`,{class:`title ${i?`win`:`lose`}`},i?e.level.id===10?`WORLD CONSUMED`:`LEVEL COMPLETED`:`TIME'S UP`),a,t?Q(`span`,{class:`pill gold newbest`},Tp(`trophy`),`New personal best`):null,c,l,u)));i?Kf.win():Kf.lose();for(let t=0;t<e.stars;t++)window.setTimeout(()=>{a.children[t].classList.add(`lit`),Kf.star(t)},700+t*450);let f=performance.now(),p=()=>{let t=Math.min(1,(performance.now()-f)/1100);s.textContent=Fd(e.total*(1-(1-t)**3)),t<1&&requestAnimationFrame(p)};return requestAnimationFrame(p),d}function Gp(){return Q(`div`,{class:`loading`},Q(`div`,null,Q(`div`,{class:`ring`}),Q(`div`,{class:`t`},`VOID`),Q(`div`,{class:`s`},`Opening the void…`)))}var Kp=class{engine;input;session=null;hud=null;state=`menu`;screenEl=null;overlayEl=null;hudLayer;screenLayer;iris;fpsEl;frames=0;fpsT=0;currentLevel=1;params=new URLSearchParams(location.search);simSpeed=1;screenShownAt=0;constructor(e,t){this.engine=new Od(e);let n=$.data.settings;this.engine.setQuality(n.quality),this.input=new Ld(e),this.hudLayer=Q(`div`,{class:`layer`}),this.screenLayer=Q(`div`,{class:`layer`}),this.iris=Q(`div`,{class:`iris solid`}),this.fpsEl=Q(`div`,{class:`fps`}),this.fpsEl.style.display=n.showFps?``:`none`;for(let e of[this.hudLayer,this.screenLayer])Object.assign(e.style,{position:`absolute`,inset:`0`});t.append(this.hudLayer,this.screenLayer,this.iris,this.fpsEl);let r=Gp();t.append(r),this.applySettings(n),this.input.onPause=()=>{this.state===`playing`?this.pause():this.state===`paused`&&this.resume()},this.input.onAnyInput=()=>this.hud?.hideJoyHint(),document.addEventListener(`visibilitychange`,()=>{document.hidden?(Kf.suspend(),this.state===`playing`&&$.data.settings.autoPause&&this.pause()):Kf.resume()}),window.addEventListener(`blur`,()=>{this.state===`playing`&&$.data.settings.autoPause&&this.pause()}),window.addEventListener(`resize`,()=>this.session?.resize()),window.addEventListener(`orientationchange`,()=>window.setTimeout(()=>{this.engine.resize(),this.session?.resize()},250)),this.simSpeed=Number(this.params.get(`speed`)??1)||1,this.params.has(`headless`)&&(this.engine.headless=!0),this.engine.start(e=>this.frame(e));let i=()=>{r.classList.add(`hide`),window.setTimeout(()=>r.remove(),700);let e=Number(this.params.get(`level`));e?this.startLevel(e,!0):this.toMenu(!0)};document.fonts?.ready?document.fonts.ready.then(()=>window.setTimeout(i,250)):window.setTimeout(i,400)}frame(e){let t=this.session,n=(this.state===`select`||this.state===`collection`||this.state===`settings`)&&!!this.screenEl?.classList.contains(`show`)&&performance.now()-this.screenShownAt>500;if(t&&!n){let n=this.simSpeed>1?Math.round(this.simSpeed):1;for(let r=0;r<n;r++)t.update(e);this.hud&&(this.state===`playing`||this.state===`transition`)&&this.hud.update(e),this.engine.render(t.scene,t.rig.camera)}this.frames++,this.fpsT+=e,this.fpsT>=.5&&(this.fpsEl.textContent=`${Math.round(this.frames/this.fpsT)} FPS`,this.frames=0,this.fpsT=0)}showScreen(e){let t=this.screenEl;t&&(t.classList.remove(`show`),window.setTimeout(()=>t.remove(),380)),this.screenEl=e,this.screenShownAt=performance.now(),e&&(this.screenLayer.append(e),requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add(`show`))))}showOverlay(e){let t=this.overlayEl;t&&(t.classList.remove(`show`),window.setTimeout(()=>t.remove(),380)),this.overlayEl=e,e&&(this.screenLayer.append(e),requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add(`show`))))}async irisSwap(e){let t=this.state;this.state=`transition`,this.iris.classList.contains(`solid`)||(this.iris.className=`iris close`,Kf.whoosh(),await qp(560));try{e()}catch(e){console.error(e)}await qp(60),this.iris.className=`iris open`,window.setTimeout(()=>{this.iris.className===`iris open`&&(this.iris.className=`iris`)},720),this.state===`transition`&&(this.state=t)}replaceSession(e){this.session?.dispose(),this.session=e}ensureMenuWorld(){if(this.session&&this.session.mode===`demo`)return;this.clearHud();let e=new Zf(this.engine,wp,`demo`,null,{});e.rig.orbit=.04,e.rig.setZoom(1.9),e.rig.zoomMul=1.9,this.replaceSession(e),this.input.enabled=!1}clearHud(){this.hud?.root.remove(),this.hud=null}toMenu(e=!1){let t=()=>{this.showOverlay(null),this.ensureMenuWorld(),this.state=`menu`,Kf.playMusic(`menu`),this.showScreen(zp({play:()=>this.startLevel(this.nextLevelToPlay()),select:()=>this.toSelect(),collection:()=>this.toCollection(),settings:()=>this.toSettings(),toggleMute:()=>{$.data.settings.muted=!$.data.settings.muted,$.save(),this.applySettings($.data.settings)},fullscreen:()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.().catch(()=>void 0)}}))};e||!(this.session&&this.session.mode===`demo`)?this.irisSwap(t):t()}nextLevelToPlay(){for(let e of Sp)if(!$.level(e.id).completed&&$.isUnlocked(e.id))return e.id;return Math.min(Sp.length,$.data.unlocked)}toSelect(){let e=()=>{this.showOverlay(null),this.ensureMenuWorld(),this.state=`select`,Kf.playMusic(`menu`),this.showScreen(Bp({back:()=>this.toMenu(),play:e=>this.startLevel(e)}))};this.session&&this.session.mode===`demo`?e():this.irisSwap(e)}toCollection(){this.state=`collection`,this.showScreen(Vp({back:()=>this.toMenu()}))}toSettings(){this.state=`settings`,this.showScreen(Hp({back:()=>this.toMenu(),apply:e=>this.applySettings(e),reset:()=>{$.reset(),this.toMenu()}}))}applySettings(e){Kf.setVolumes(e.music,e.sfx),Kf.setMuted(e.muted),this.input.mouseSteering=e.mouseSteer,this.fpsEl.style.display=e.showFps?``:`none`,this.engine.quality!==e.quality&&(this.engine.setQuality(e.quality),this.session&&(this.session.resize(),this.session.particles.budget=e.quality===`low`?.5:e.quality===`medium`?.8:1)),this.session&&(this.session.rig.shakeEnabled=e.shake)}startLevel(e,t=!1){let n=Cp(e);this.currentLevel=n.id,t&&this.session,this.irisSwap(()=>{this.showScreen(null),this.showOverlay(null),this.clearHud();let e=new Zf(this.engine,n,`play`,this.input,{float:e=>this.hud?.float(e),message:(e,t)=>this.hud?.message(e,t),tier:()=>this.hud?.sizeUp(),power:(e,t)=>this.hud?.power(e,t),tutorial:e=>this.hud?.tutorial(e),end:e=>this.onEnd(e)});e.rig.shakeEnabled=$.data.settings.shake,this.params.has(`bot`)&&(e.bot=!0),this.replaceSession(e),this.hud=new Ap(e,$.level(n.id).best,()=>this.pause()),this.input.attachJoystick(this.hud.joyBase,this.hud.joyKnob),this.hudLayer.append(this.hud.root),this.input.reset(),this.input.enabled=!0,this.state=`playing`,Kf.playMusic(n.theme.music)})}pause(){this.state===`playing`&&this.session&&(this.state=`paused`,this.session.paused=!0,this.input.reset(),Kf.setIntensity(0),this.showOverlay(Up({resume:()=>this.resume(),restart:()=>this.startLevel(this.currentLevel),settings:()=>this.pauseSettings(),select:()=>this.toSelect(),menu:()=>this.toMenu()},`Level ${this.currentLevel} · ${Cp(this.currentLevel).name}`)))}pauseSettings(){this.showOverlay(Hp({back:()=>{this.state=`playing`,this.pause()},apply:e=>this.applySettings(e),reset:()=>void 0},!0)),this.state=`paused`}resume(){this.state===`paused`&&this.session&&(this.showOverlay(null),this.session.paused=!1,this.state=`playing`)}onEnd(e){this.input.enabled=!1;let t=$.level(e.level.id).best,n=$.recordRun(e.level.id,e.total,e.stars,e.completed,e.sizeLevel,Sp.length)&&t>0;$.addToCollection(e.counts),e.secretFound&&($.data.secrets[e.level.id]=!0,$.save()),this.state=`results`,this.hud?.root.classList.remove(`show`);let r=e.level.id<Sp.length&&$.isUnlocked(e.level.id+1);Kf.playMusic(`menu`),this.showOverlay(Wp(e,n,r,{retry:()=>this.startLevel(e.level.id),next:()=>this.startLevel(e.level.id+1),select:()=>this.toSelect(),menu:()=>this.toMenu()})),window.__lastResult=e}};function qp(e){return new Promise(t=>window.setTimeout(t,e))}var Jp=new Kp(document.getElementById(`game`),document.getElementById(`ui`));window.__void=Jp;
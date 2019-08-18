(window["webpackJsonppullstate-sudoku"]=window["webpackJsonppullstate-sudoku"]||[]).push([[0],{4132:function(e,t,n){e.exports=n(4147)},4137:function(e,t,n){},4138:function(e,t,n){},4147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=(n(4137),n(4)),l=(n(4138),n(4161)),u=n(18),d=n(15),s=n.n(d),f=new u.a({startedPuzzle:!1,finishedPuzzle:!1,filledBlocks:[],originalFilledBlocks:[]}),m=[],p=[],v=0;f.listenToPatches(function(e,t){var n=p.length-v;v=0,n>=0&&(m=m.slice(0,n),p=p.slice(0,n)),m.push(e),p.push(t)}),f.createReaction(function(e){return e.filledBlocks},function(e,t,n){if(n.startedPuzzle&&e.length>0){var a=s.a.board_grid_to_string(e),r=s.a.solve(a);r&&s.a.print_board(r),a===r&&(t.finishedPuzzle=!0)}});var g=["","1","2","3","4","5","6","7","8","9"];var h={generateNewSudoku:function(e){var t=s.a.generate(e),n=s.a.board_string_to_grid(t),a=s.a.board_string_to_grid(t);f.update(function(e){e.filledBlocks=n,e.originalFilledBlocks=a,e.startedPuzzle=!0})},editCell:function(e,t,n){g.includes(n)&&(""===n&&(n="."),f.update(function(a){a.filledBlocks[t][e]=n}))},undo:function(){var e=p.length-1-v;e>=0&&p[e]&&(v+=1,f.applyPatches(p[e]))},redo:function(){var e=m.length-v;e>=0&&m[e]&&(v-=1,f.applyPatches(m[e]))}},w=function(e){var t=e.direction,n=void 0===t?"row":t,a=e.gap,o=void 0===a?1:a,i=e.justifyContent,c=void 0===i?"center":i,l=e.justifyItems,u=void 0===l?"center":l,d=e.align,s=void 0===d?"center":d,f=e.children;return r.a.createElement("div",{style:{display:"grid",gridAutoFlow:"column"===n?"row":"column",gap:"".concat(o,"em"),justifyContent:c,justifyItems:u,alignItems:s}},f)},y=function(){return r.a.createElement(w,{justifyItems:"center",gap:1},r.a.createElement(l.a,{variant:"contained",color:"primary",onClick:function(){h.generateNewSudoku("easy")}},"Easy"),r.a.createElement(l.a,{variant:"contained",color:"primary",onClick:function(){h.generateNewSudoku("medium")}},"Medium"),r.a.createElement(l.a,{variant:"contained",color:"primary",onClick:function(){h.generateNewSudoku("hard")}},"Hard"))},b=function(e){var t=e.x,n=e.y,a=Object(u.b)(f,[["filledBlocks",n,t],["originalFilledBlocks",n,t]]),o=Object(c.a)(a,2),i=o[0],l=o[1],d={userSelect:"none"};[2,5].includes(t)&&(d.borderRight="1px solid #667788"),[3,6].includes(t)&&(d.borderLeft="1px solid #667788"),[2,5].includes(n)&&(d.borderBottom="1px solid #667788"),[3,6].includes(n)&&(d.borderTop="1px solid #667788");var s="."!==l,m="."!==i?i:"";return r.a.createElement("div",{style:d,className:"cell ".concat(s?"original":"editable")},!s&&r.a.createElement("input",{type:"number",value:m,onChange:function(e){return h.editCell(t,n,e.target.value)}}),s&&r.a.createElement("span",{className:"set-value"},m))},k=function(){var e=function(e,t,n){for(var a=[],r=0;r<e;r+=1){a.push([]);for(var o=0;o<t;o+=1)a[r].push(n(o,r))}return a}(9,9,function(e,t){return r.a.createElement(b,{key:"".concat(e).concat(t),x:e,y:t})});return r.a.createElement("div",{className:"puzzle-container"},e.map(function(e,t){return r.a.createElement("div",{key:t,className:"row"},e)}))},E=n(4162),z=n(33);var j=n(34);setTimeout(function(){h.generateNewSudoku("easy")},100);var P=function(){var e=Object(u.b)(f,[["startedPuzzle"],["finishedPuzzle"]]),t=Object(c.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)(function(){o&&function(){var e=Date.now()+15e3,t=z.a.create(),n=setInterval(function(){if(Date.now()>e)return clearInterval(n);t({startVelocity:30,spread:360,ticks:60,shapes:["square"],origin:{x:Math.random(),y:Math.random()-.2}})},200)}()},[o]);var i=function(){var e="object"===typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var n=Object(a.useState)(t),r=Object(c.a)(n,2),o=r[0],i=r[1];return Object(a.useEffect)(function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){i(t())}}),o}().width,d=Math.min(Math.round((i||100)/40),20);return r.a.createElement("div",{style:{fontSize:"".concat(d,"px")},className:"App"},n&&r.a.createElement(w,{direction:"column",gap:1},r.a.createElement(l.a,{onClick:function(){return f.update(function(e){e.startedPuzzle=!1,e.finishedPuzzle=!1})},variant:"contained",color:"primary"},"Start New Puzzle"),r.a.createElement(k,null),r.a.createElement(w,{direction:"row",gap:1},r.a.createElement(l.a,{onClick:h.undo,variant:"outlined",color:"secondary"},"Undo"),r.a.createElement(l.a,{onClick:h.redo,variant:"outlined",color:"secondary"},"Redo"))),!n&&r.a.createElement(y,null),r.a.createElement("div",{style:{marginTop:"5em"}},r.a.createElement(E.a,{icon:r.a.createElement(j.a,null),clickable:!0,component:"a",color:"primary",href:"https://github.com/lostpebble/pullstate-sudoku",label:"View the source at github.com/lostpebble/pullstate-sudoku"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[4132,1,2]]]);
//# sourceMappingURL=main.be739057.chunk.js.map
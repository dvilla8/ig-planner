var e={dxlliv:{details:{name:"",username:"dxlliv",description:"Developer of things",avatar:"avatar.jpg",stats:{followers:50,following:50}},media:["3.jpg","2.jpg","1.jpg"]}};function a(){return Object.keys(e).map((a=>{var t;return{username:(null==(t=e[a])?void 0:t.details.username)?e[a].details.username:a,url:a,avatar:s(a,e[a])}}))}async function t(a){if(Object.prototype.hasOwnProperty.call(e,a)){const t=e[a];if(t.details||(t.details={username:a}),t.details.avatar=s(a,t),t.details.description&&(t.details.description=t.details.description.replace(/(?:\r\n|\r|\n)/g,"<br>")),t.details.stats||(t.details.stats={followers:0,following:0}),t.details.stats.posts={total:0,reels:0,posts:0},t.media){t.details.stats.posts.total=t.media.length;for(let e=0;e<t.media.length;e++)switch(typeof t.media[e]){case"string":t.details.stats.posts.posts++,t.media[e]={type:"image",path:i(a,t.media[e])};break;case"object":switch(t.media[e].type){case"album":if(t.details.stats.posts.posts++,Array.isArray(t.media[e].list))for(let s=0;s<t.media[e].list.length;s++)t.media[e].list[s]=i(a,t.media[e].list[s]);break;case"video":t.details.stats.posts.posts++,t.media[e].name&&(t.media[e].path=i(a,t.media[e].name));break;case"reel":t.details.stats.posts.reels++,t.media[e].name&&(t.media[e].path=i(a,t.media[e].name))}}}else t.media=[];return t}throw Error("Profile not found")}function s(e,a){return a.details.avatar?`profiles/${e}/${a.details.avatar}`:`profiles/${e}/avatar.jpg`}function i(e,a){return`profiles/${e}/media/${a}`}export{a as g,t as l};

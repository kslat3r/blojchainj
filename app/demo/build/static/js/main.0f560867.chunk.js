(this["webpackJsonpblojchain-demo"]=this["webpackJsonpblojchain-demo"]||[]).push([[0],{299:function(e,t){},301:function(e,t){},310:function(e,t){},312:function(e,t){},337:function(e,t){},339:function(e,t){},340:function(e,t){},345:function(e,t){},347:function(e,t){},353:function(e,t){},355:function(e,t){},374:function(e,t){},386:function(e,t){},389:function(e,t){},415:function(e,t){},53:function(e,t,n){"use strict";n.r(t),n.d(t,"get",(function(){return s})),n.d(t,"post",(function(){return i})),n.d(t,"put",(function(){return u})),n.d(t,"patch",(function(){return p})),n.d(t,"del",(function(){return d}));var r=n(256),o=n.n(r),a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return{method:e,uri:t,qs:n,headers:{"Content-Type":"application/json"},body:r,json:!0}},c=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return o()(a(e,t,n,r)).then((function(e){return e})).catch((function(e){throw new Error(e.error.message)}))};function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c("get",e,t)}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c("post",e,n,t)}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c("put",e,n,t)}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c("patch",e,n,t)}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c("delete",e,t)}},540:function(e,t){},558:function(e,t,n){},559:function(e,t,n){},560:function(e,t,n){},561:function(e,t,n){},562:function(e,t,n){},564:function(e,t,n){},565:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(253),a=n.n(o),c=n(2),s=n(47),i=n.n(s),u=n(263),p=n(52),d=n(11),l=n.n(d),h="NODES_GET",j="NODES_GET_SUCCESSFUL",f="NODES_GET_UNSUCCESSFUL";var m=l.a.Map({items:[],error:null}),b="BLOJS_GET",v="BLOJS_GET_SUCCEEDED",O="BLOJS_GET_FAILED",x="BLOJS_CREATE",g="BLOJS_CREATE_SUCCEEDED",E="BLOJS_CREATE_FAILED",S="BLOJS_ADD",_="BLOJS_ADD_SUCCEEDED",C="BLOJS_ADD_FAILED",U="BLOJS_UPDATE",w="BLOJS_UPDATE_SUCCEEDED",y="BLOJS_UPDATE_FAILED";var N=l.a.Map({}),k="LOGS_GET",I="LOGS_GET_SUCCESSFUL",D="LOGS_GET_UNSUCCESSFUL",M="LOGS_ADD",T="LOGS_ADD_SUCCESSFUL",Q="LOGS_ADD_UNSUCCESSFUL";var A=l.a.Map({items:[],error:null}),F="MINING_QUEUE_GET",L="MINING_QUEUE_GET_SUCCESSFUL",J="MINING_QUEUE_GET_UNSUCCESSFUL",R="MINING_QUEUE_ADD",B="MINING_QUEUE_ADD_SUCCESSFUL",G="MINING_QUEUE_ADD_UNSUCCESSFUL",V="MINING_QUEUE_REMOVE",P="MINING_QUEUE_REMOVE_SUCCEEDED",H="MINING_QUEUE_REMOVE_FAILED";var q=l.a.Map({}),W="VERIFICATION_QUEUE_GET",K="VERIFICATION_QUEUE_GET_SUCCESSFUL",z="VERIFICATION_QUEUE_GET_UNSUCCESSFUL",X="VERIFICATION_QUEUE_ADD",Y="VERIFICATION_QUEUE_ADD_SUCCESSFUL",Z="VERIFICATION_QUEUE_ADD_UNSUCCESSFUL",$="VERIFICATION_QUEUE_REMOVE",ee="VERIFICATION_QUEUE_REMOVE_SUCCEEDED",te="VERIFICATION_QUEUE_REMOVE_FAILED";var ne=l.a.Map({}),re="CONFIRMATION_QUEUE_GET",oe="CONFIRMATION_QUEUE_GET_SUCCESSFUL",ae="CONFIRMATION_QUEUE_GET_UNSUCCESSFUL",ce="CONFIRMATION_QUEUE_ADD",se="CONFIRMATION_QUEUE_ADD_SUCCESSFUL",ie="CONFIRMATION_QUEUE_ADD_UNSUCCESSFUL",ue="CONFIRMATION_QUEUE_REMOVE",pe="CONFIRMATION_QUEUE_REMOVE_SUCCEEDED",de="CONFIRMATION_QUEUE_REMOVE_FAILED";var le=l.a.Map({}),he=Object(p.c)({nodes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return l.a.Map({items:t.data,error:null});case f:return l.a.Map({items:[],error:t.error});default:return e}},blojs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var n=e.toJS();return n[t.node.meta.id]={items:[],loading:!0,error:null},l.a.Map(n);case v:var r=e.toJS();return r[t.node.meta.id]={items:t.data,loading:!1,error:null},l.a.Map(r);case g:return e;case _:var o=e.toJS();return o[t.node.meta.id].items.push(t.data),l.a.Map(o);case w:var a=e.toJS(),c=a[t.node.meta.id].items,s=c.findIndex((function(e){return e.id===t.data.id}));return-1!==s&&(c[s]=t.data),a[t.node.meta.id].items=c,l.a.Map(a);case O:case E:case C:case y:var i=e.toJS();return i[t.node.meta.id]={items:[],error:t.error},l.a.Map(i);default:return e}},logs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:var n=e.toJS(),r=t.data.map((function(e){return e.node=t.node,e}));return n.items=n.items.concat(r).sort((function(e,t){return e.timestamp-t.timestamp})),l.a.Map(n);case T:var o=e.toJS();return o.items.push(Object.assign({},t.log,{node:t.node})),o.items=o.items.sort((function(e,t){return e.timestamp-t.timestamp})),l.a.Map(o);case Q:case D:return l.a.Map({items:[],error:t.error});default:return e}},miningQueue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:var n=e.toJS();return n[t.node.meta.id]={items:[],loading:!0,error:null},l.a.Map(n);case L:var r=e.toJS();return r[t.node.meta.id]={items:t.data,error:null},l.a.Map(r);case B:var o=e.toJS();return o[t.node.meta.id].items.push(t.bloj),l.a.Map(o);case P:var a=e.toJS(),c=a[t.node.meta.id].items.findIndex((function(e){return e.id===t.bloj.id}));return a[t.node.meta.id].items.splice(c,1),l.a.Map(a);case J:case G:case H:var s=e.toJS();return s[t.node.meta.id]={items:[],error:t.error},l.a.Map(s);default:return e}},verificationQueue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:var n=e.toJS();return n[t.node.meta.id]={items:[],loading:!0,error:null},l.a.Map(n);case K:var r=e.toJS();return r[t.node.meta.id]={items:t.data,error:null},l.a.Map(r);case Y:var o=e.toJS();return o[t.node.meta.id].items.push(t.bloj),l.a.Map(o);case ee:var a=e.toJS(),c=a[t.node.meta.id].items.findIndex((function(e){return e.id===t.bloj.id}));return a[t.node.meta.id].items.splice(c,1),l.a.Map(a);case z:case Z:case te:var s=e.toJS();return s[t.node.meta.id]={items:[],error:t.error},l.a.Map(s);default:return e}},confirmationQueue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:var n=e.toJS();return n[t.node.meta.id]={items:[],loading:!0,error:null},l.a.Map(n);case oe:var r=e.toJS();return r[t.node.meta.id]={items:t.data,error:null},l.a.Map(r);case se:var o=e.toJS();return o[t.node.meta.id].items.push(t.bloj),l.a.Map(o);case pe:var a=e.toJS(),c=a[t.node.meta.id].items.findIndex((function(e){return e.id===t.bloj.id}));return a[t.node.meta.id].items.splice(c,1),l.a.Map(a);case ae:case ie:case de:var s=e.toJS();return s[t.node.meta.id]={items:[],error:t.error},l.a.Map(s);default:return e}}}),je=n(4),fe=n.n(je),me=n(6),be=fe.a.mark(Oe),ve=n(53);function Oe(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ve.get("http://".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SEED_HOST,":").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SEED_PORT,"/peers"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),be)}var xe=fe.a.mark(ge);function ge(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.e)(h,fe.a.mark((function e(){var t;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.b)(Oe);case 3:return t=e.sent,e.next=6,Object(me.c)({type:j,data:t});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(me.c)({type:f,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));case 2:case"end":return e.stop()}}),xe)}var Ee=n(262),Se=fe.a.mark(Ue),_e=fe.a.mark(we),Ce=n(53);function Ue(e){return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ce.get("http://".concat(e.meta.serverHost,":").concat(e.meta.serverPort,"/blojs"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),Se)}function we(e){var t,n,r;return fe.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=Object(Ee.a)(e,2),n=t[0],r=t[1],o.next=3,Ce.post("http://".concat(r.meta.serverHost,":").concat(r.meta.serverPort,"/blojs"),n);case 3:return o.abrupt("return",o.sent);case 4:case"end":return o.stop()}}),_e)}var ye=fe.a.mark(De),Ne=fe.a.mark(Me),ke=fe.a.mark(Te),Ie=fe.a.mark(Qe);function De(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.d)(b,fe.a.mark((function e(t){var n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.b)(Ue,t.node);case 3:return n=e.sent,e.next=6,Object(me.c)({type:v,node:t.node,data:n});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(me.c)({type:O,node:t.node,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));case 2:case"end":return e.stop()}}),ye)}function Me(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.e)(x,fe.a.mark((function e(t){var n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.b)(we,[t.bloj,t.node]);case 3:return n=e.sent,e.next=6,Object(me.c)({type:g,node:t.node,data:n});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(me.c)({type:E,node:t.node,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));case 2:case"end":return e.stop()}}),Ne)}function Te(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.d)(S,fe.a.mark((function e(t){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.c)({type:_,node:t.node,data:t.bloj});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Object(me.c)({type:C,node:t.node,error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));case 2:case"end":return e.stop()}}),ke)}function Qe(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.d)(U,fe.a.mark((function e(t){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.c)({type:w,node:t.node,data:t.bloj});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Object(me.c)({type:y,node:t.node,error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));case 2:case"end":return e.stop()}}),Ie)}var Ae=fe.a.mark(Le),Fe=n(53);function Le(e){return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Fe.get("http://".concat(e.meta.serverHost,":").concat(e.meta.serverPort,"/logs"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),Ae)}var Je=fe.a.mark(Be),Re=fe.a.mark(Ge);function Be(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.d)(k,fe.a.mark((function e(t){var n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.b)(Le,t.node);case 3:return n=e.sent,e.next=6,Object(me.c)({type:I,node:t.node,data:n});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(me.c)({type:D,node:t.node,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));case 2:case"end":return e.stop()}}),Je)}function Ge(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.d)(M,fe.a.mark((function e(t){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.c)({type:T,node:t.node,log:t.log});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Object(me.c)({type:Q,node:t.node,error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));case 2:case"end":return e.stop()}}),Re)}var Ve=fe.a.mark(He),Pe=n(53);function He(e){return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Pe.get("http://".concat(e.meta.serverHost,":").concat(e.meta.serverPort,"/queues/miner"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),Ve)}var qe=fe.a.mark(ze),We=fe.a.mark(Xe),Ke=fe.a.mark(Ye);function ze(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.d)(F,fe.a.mark((function e(t){var n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.b)(He,t.node);case 3:return n=e.sent,e.next=6,Object(me.c)({type:L,node:t.node,data:n});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(me.c)({type:J,node:t.node,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));case 2:case"end":return e.stop()}}),qe)}function Xe(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.d)(R,fe.a.mark((function e(t){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.c)({type:B,node:t.node,bloj:t.bloj});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Object(me.c)({type:G,node:t.node,error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));case 2:case"end":return e.stop()}}),We)}function Ye(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.d)(V,fe.a.mark((function e(t){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.c)({type:P,node:t.node,bloj:t.bloj});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Object(me.c)({type:H,node:t.node,error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));case 2:case"end":return e.stop()}}),Ke)}var Ze=fe.a.mark(et),$e=n(53);function et(e){return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$e.get("http://".concat(e.meta.serverHost,":").concat(e.meta.serverPort,"/queues/verifier"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),Ze)}var tt=fe.a.mark(ot),nt=fe.a.mark(at),rt=fe.a.mark(ct);function ot(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.d)(W,fe.a.mark((function e(t){var n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.b)(et,t.node);case 3:return n=e.sent,e.next=6,Object(me.c)({type:K,node:t.node,data:n});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(me.c)({type:z,node:t.node,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));case 2:case"end":return e.stop()}}),tt)}function at(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.d)(X,fe.a.mark((function e(t){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.c)({type:Y,node:t.node,bloj:t.bloj});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Object(me.c)({type:Z,node:t.node,error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));case 2:case"end":return e.stop()}}),nt)}function ct(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.d)($,fe.a.mark((function e(t){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.c)({type:ee,node:t.node,bloj:t.bloj});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Object(me.c)({type:te,node:t.node,error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));case 2:case"end":return e.stop()}}),rt)}var st=fe.a.mark(ut),it=n(53);function ut(e){return fe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,it.get("http://".concat(e.meta.serverHost,":").concat(e.meta.serverPort,"/queues/confirmer"));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),st)}var pt=fe.a.mark(ht),dt=fe.a.mark(jt),lt=fe.a.mark(ft);function ht(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.d)(re,fe.a.mark((function e(t){var n;return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.b)(ut,t.node);case 3:return n=e.sent,e.next=6,Object(me.c)({type:oe,node:t.node,data:n});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(me.c)({type:ae,node:t.node,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));case 2:case"end":return e.stop()}}),pt)}function jt(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.d)(ce,fe.a.mark((function e(t){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.c)({type:se,node:t.node,bloj:t.bloj});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Object(me.c)({type:ie,node:t.node,error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));case 2:case"end":return e.stop()}}),dt)}function ft(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.d)(ue,fe.a.mark((function e(t){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(me.c)({type:pe,node:t.node,bloj:t.bloj});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Object(me.c)({type:de,node:t.node,error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));case 2:case"end":return e.stop()}}),lt)}var mt=fe.a.mark(bt);function bt(){return fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(me.a)([ge(),De(),Me(),Te(),Qe(),Be(),Ge(),ze(),Xe(),Ye(),ot(),at(),ct(),ht(),jt(),ft()]);case 2:case"end":return e.stop()}}),mt)}var vt=n(46),Ot=n(30),xt=n(31),gt=n(33),Et=n(32);var St=n(7),_t=function(e){return Object(r.jsx)(St.a,{color:"danger",children:e.message||"There has been an error"})},Ct=function(){return Object(r.jsx)(St.a,{color:"primary",children:"Loading..."})},Ut=n(259),wt=n.n(Ut),yt=n(38),Nt=n(48),kt=n.n(Nt),It=function(e){return Object(r.jsx)(St.a,{color:"secondary",children:e.message||"No data found"})},Dt=n(144),Mt=n.n(Dt),Tt=(n(558),function(e){Object(gt.a)(n,e);var t=Object(Et.a)(n);function n(e){var r;return Object(Ot.a)(this,n),(r=t.call(this,e)).toggle=r.toggle.bind(Object(yt.a)(r)),r.state={open:void 0!==e.open&&e.open},r}return Object(xt.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!kt()(this.props.error,e.error)||(!kt()(this.props.loading,e.loading)||(!kt()(this.props.children,e.children)||this.state.open!==t.open))}},{key:"componentDidUpdate",value:function(){this.props.forceScroll&&this.scrollElem&&(this.scrollElem.scrollLeft=this.scrollElem.scrollWidth)}},{key:"toggle",value:function(e){e.preventDefault(),this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"queue ".concat(this.state.open&&"open"),children:[Object(r.jsxs)("div",{className:"clearfix",children:[Object(r.jsx)("h2",{className:"float-left",children:this.props.title}),Object(r.jsx)("a",{className:"float-left",href:"#toggle",onClick:this.toggle,children:this.state.open?Object(r.jsx)(Mt.a,{name:"minus-square-o"}):Object(r.jsx)(Mt.a,{name:"plus-square-o"})})]}),this.state.open&&this.props.error&&Object(r.jsx)(_t,{message:this.props.error.message}),this.state.open&&!this.props.error&&this.props.loading?Object(r.jsx)(Ct,{}):null,!this.state.open||this.props.error||this.props.loading||this.props.children.length?null:Object(r.jsx)(It,{message:"No data to show"}),this.state.open&&!this.props.error&&!this.props.loading&&this.props.children.length?Object(r.jsx)("div",{className:"row scroll",ref:function(t){e.scrollElem=t},children:this.props.children}):null]})}}]),n}(c.Component)),Qt=n(260),At=(n(559),function(e){Object(gt.a)(n,e);var t=Object(Et.a)(n);function n(e){var r;return Object(Ot.a)(this,n),(r=t.call(this,e)).onChange=r.onChange.bind(Object(yt.a)(r)),r.onSubmit=r.onSubmit.bind(Object(yt.a)(r)),r.state={bloj:e.bloj||{data:""},socket:null},r}return Object(xt.a)(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){kt()(this.state.bloj,e.bloj)||this.setState({bloj:e.bloj})}},{key:"shouldComponentUpdate",value:function(e,t){return!kt()(this.props.bloj,e.bloj)||!kt()(this.state.bloj,t.bloj)}},{key:"onChange",value:function(e,t){var n=Object.assign({},this.state.bloj,Object(Qt.a)({},e,t));this.setState({bloj:n})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.createBloj(JSON.parse(this.state.bloj.data),this.props.node),this.setState({bloj:{data:""}})}},{key:"render",value:function(){var e=this;return Object(r.jsx)(St.c,{children:Object(r.jsx)(St.d,{children:Object(r.jsxs)(St.g,{className:"bloj",onSubmit:this.onSubmit,children:[this.state.bloj.id&&Object(r.jsxs)(St.h,{row:!0,children:[Object(r.jsx)(St.j,{for:"id",sm:4,children:"ID"}),Object(r.jsx)(St.e,{sm:8,children:Object(r.jsx)(St.i,{type:"text",name:"id",value:this.state.bloj.id,onChange:function(t){return e.onChange("id",t.target.value)}})})]}),this.state.bloj.height&&Object(r.jsxs)(St.h,{row:!0,children:[Object(r.jsx)(St.j,{for:"height",sm:4,children:"Height"}),Object(r.jsx)(St.e,{sm:8,children:Object(r.jsx)(St.i,{type:"text",name:"height",value:this.state.bloj.height,onChange:function(t){return e.onChange("height",t.target.value)}})})]}),this.state.bloj.nonce&&Object(r.jsxs)(St.h,{row:!0,children:[Object(r.jsx)(St.j,{for:"nonce",sm:4,children:"Nonce"}),Object(r.jsx)(St.e,{sm:8,children:Object(r.jsx)(St.i,{type:"text",name:"nonce",value:this.state.bloj.nonce,onChange:function(t){return e.onChange("nonce",t.target.value)}})})]}),Object(r.jsxs)(St.h,{row:!0,children:[Object(r.jsx)(St.j,{for:"data",sm:4,children:"Data"}),Object(r.jsx)(St.e,{sm:8,children:Object(r.jsx)(St.i,{type:"textarea",name:"data",value:this.state.bloj.id?JSON.stringify(this.state.bloj.data):this.state.bloj.data,onChange:function(t){return e.onChange("data",t.target.value)}})})]}),this.state.bloj.prevHash&&Object(r.jsxs)(St.h,{row:!0,children:[Object(r.jsx)(St.j,{for:"prevHash",sm:4,children:"Previous hash"}),Object(r.jsx)(St.e,{sm:8,children:Object(r.jsx)(St.i,{type:"text",name:"prevHash",value:this.state.bloj.prevHash,onChange:function(t){return e.onChange("prevHash",t.target.value)}})})]}),this.state.bloj.timestamp&&Object(r.jsxs)(St.h,{row:!0,children:[Object(r.jsx)(St.j,{for:"timestamp",sm:4,children:"Timestamp"}),Object(r.jsx)(St.e,{sm:8,children:Object(r.jsx)(St.i,{type:"text",name:"timestamp",value:this.state.bloj.timestamp,onChange:function(t){return e.onChange("timestamp",t.target.value)}})})]}),this.state.bloj.hash&&Object(r.jsxs)(St.h,{row:!0,children:[Object(r.jsx)(St.j,{for:"hash",sm:4,children:"Hash"}),Object(r.jsx)(St.e,{sm:8,children:Object(r.jsx)(St.i,{type:"text",name:"hash",value:this.state.bloj.hash,onChange:function(t){return e.onChange("hash",t.target.value)}})})]}),void 0!==this.state.bloj.confirmations&&Object(r.jsxs)(St.h,{row:!0,children:[Object(r.jsx)(St.j,{for:"confirmations",sm:4,children:"Confirmations"}),Object(r.jsx)(St.e,{sm:8,children:Object(r.jsx)(St.i,{type:"text",name:"confirmations",value:this.state.bloj.confirmations.length,onChange:function(t){return e.onChange("confirmations",t.target.value)}})})]}),!this.state.bloj.id&&Object(r.jsx)(St.h,{check:!0,row:!0,children:Object(r.jsx)(St.e,{sm:{size:8,offset:4},children:Object(r.jsx)(St.b,{color:"success",children:"Create"})})})]})})})}}]),n}(c.Component)),Ft=Object(vt.b)((function(){return{}}),{createBloj:function(e,t){return{type:x,bloj:e,node:t}}})(At),Lt=(n(560),function(e){Object(gt.a)(n,e);var t=Object(Et.a)(n);function n(e){var r;return Object(Ot.a)(this,n),(r=t.call(this,e)).state={socket:null},r}return Object(xt.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.getBlojs(this.props.node),this.props.getMiningQueue(this.props.node),this.props.getVerificationQueue(this.props.node),this.props.getConfirmationQueue(this.props.node),this.props.getLogs(this.props.node);var t=wt()("http://".concat(this.props.node.meta.socketHost,":").concat(this.props.node.meta.socketPort));t.on("".concat(this.props.node.host,":bloj:create"),(function(t){e.props.addBloj(t,e.props.node)})),t.on("".concat(this.props.node.host,":bloj:update"),(function(t){e.props.updateBloj(t,e.props.node)})),t.on("".concat(this.props.node.host,":miner:push"),(function(t){e.props.addBlojToMiningQueue(t,e.props.node)})),t.on("".concat(this.props.node.host,":miner:remove"),(function(t){e.props.removeBlojFromMiningQueue(t,e.props.node)})),t.on("".concat(this.props.node.host,":verifier:push"),(function(t){e.props.addBlojToVerificationQueue(t,e.props.node)})),t.on("".concat(this.props.node.host,":verifier:remove"),(function(t){e.props.removeBlojFromVerificationQueue(t,e.props.node)})),t.on("".concat(this.props.node.host,":confirmer:push"),(function(t){e.props.addBlojToConfirmationQueue(t,e.props.node)})),t.on("".concat(this.props.node.host,":confirmer:remove"),(function(t){e.props.removeBlojFromConfirmationQueue(t,e.props.node)})),t.on("".concat(this.props.node.host,":log"),(function(t){e.props.addLog(t,e.props.node)}))}},{key:"render",value:function(){var e=this.props.node,t=this.props.blojs,n=this.props.miningQueue,o=this.props.verificationQueue,a=this.props.confirmationQueue,c=t[e.meta.id]?t[e.meta.id].error:null,s=n[e.meta.id]?n[e.meta.id].error:null,i=o[e.meta.id]?o[e.meta.id].error:null,u=a[e.meta.id]?a[e.meta.id].error:null,p=t[e.meta.id]?t[e.meta.id].loading:null,d=n[e.meta.id]?n[e.meta.id].loading:null,l=o[e.meta.id]?o[e.meta.id].loading:null,h=a[e.meta.id]?a[e.meta.id].loading:null,j=t[e.meta.id]?t[e.meta.id].items:[],f=n[e.meta.id]?n[e.meta.id].items:[],m=o[e.meta.id]?o[e.meta.id].items:[],b=a[e.meta.id]?a[e.meta.id].items:[];return Object(r.jsxs)(St.m,{className:"node",children:[Object(r.jsxs)(St.e,{xs:12,children:[Object(r.jsxs)("div",{className:"title clearfix",children:[Object(r.jsx)("h1",{className:"float-left",children:e.host}),Object(r.jsx)("a",{className:"float-right",href:"http://".concat(e.meta.serverHost,":").concat(e.meta.serverPort,"/explorer"),target:"_new",children:Object(r.jsx)(St.b,{color:"primary",children:"Explorer"})})]}),Object(r.jsxs)(Tt,{title:"Blojchain (".concat(j.length,")"),open:!0,error:c,loading:p,forceScroll:!0,children:[j.map((function(t,n){return Object(r.jsx)(St.e,{xs:12,md:6,lg:4,children:Object(r.jsx)(Ft,{node:e,bloj:t})},n)})),Object(r.jsx)(St.e,{xs:12,md:6,lg:4,children:Object(r.jsx)(Ft,{node:e})})]})]}),Object(r.jsx)(St.e,{xs:12,lg:4,children:Object(r.jsx)(Tt,{title:"Mining queue (".concat(f.length,")"),open:!0,error:s,loading:d,children:f.map((function(e,t){return Object(r.jsx)(St.e,{xs:12,children:Object(r.jsx)(Ft,{bloj:e})},t)}))})}),Object(r.jsx)(St.e,{xs:12,lg:4,children:Object(r.jsx)(Tt,{title:"Verification queue (".concat(m.length,")"),open:!0,error:i,loading:l,items:m,children:m.map((function(e,t){return Object(r.jsx)(St.e,{xs:12,children:Object(r.jsx)(Ft,{bloj:e})},t)}))})}),Object(r.jsx)(St.e,{xs:12,lg:4,children:Object(r.jsx)(Tt,{title:"Confirmation queue (".concat(b.length,")"),open:!0,error:u,loading:h,items:b,children:b.map((function(e,t){return Object(r.jsx)(St.e,{xs:12,children:Object(r.jsx)(Ft,{bloj:e})},t)}))})})]})}}]),n}(c.Component)),Jt=Object(vt.b)((function(e){return{blojs:e.blojs.toJS(),miningQueue:e.miningQueue.toJS(),verificationQueue:e.verificationQueue.toJS(),confirmationQueue:e.confirmationQueue.toJS()}}),{getBlojs:function(e){return{type:b,node:e}},addBloj:function(e,t){return{type:S,bloj:e,node:t}},updateBloj:function(e,t){return{type:U,bloj:e,node:t}},getMiningQueue:function(e){return{type:F,node:e}},addBlojToMiningQueue:function(e,t){return{type:R,node:t,bloj:e}},removeBlojFromMiningQueue:function(e,t){return{type:V,node:t,bloj:e}},getVerificationQueue:function(e){return{type:W,node:e}},addBlojToVerificationQueue:function(e,t){return{type:X,node:t,bloj:e}},removeBlojFromVerificationQueue:function(e,t){return{type:$,node:t,bloj:e}},getConfirmationQueue:function(e){return{type:re,node:e}},addBlojToConfirmationQueue:function(e,t){return{type:ce,node:t,bloj:e}},removeBlojFromConfirmationQueue:function(e,t){return{type:ue,node:t,bloj:e}},getLogs:function(e){return{type:k,node:e}},addLog:function(e,t){return{type:M,node:t,log:e}}})(Lt),Rt=n(261),Bt=n.n(Rt),Gt=(n(561),function(e){return Object(r.jsxs)("div",{className:"log",children:[Object(r.jsx)("span",{className:"host",style:{color:e.log.node.colour},children:e.log.node.host}),Object(r.jsx)("span",{className:"timestamp",children:Bt()(e.log.timestamp).format()}),Object(r.jsx)("span",{className:e.log.type,children:e.log.type}),Object(r.jsx)("span",{className:"message",children:e.log.args.map((function(e){return"string"!==typeof e&&(e=JSON.stringify(e)),"".concat(e," ")}))})]})}),Vt=(n(562),function(e){Object(gt.a)(n,e);var t=Object(Et.a)(n);function n(e){var r;return Object(Ot.a)(this,n),(r=t.call(this,e)).toggle=r.toggle.bind(Object(yt.a)(r)),r.state={open:!1},r}return Object(xt.a)(n,[{key:"componentDidUpdate",value:function(){this.scroll.scrollTop=this.scroll.scrollHeight}},{key:"toggle",value:function(e){var t=this;e.preventDefault(),this.setState({open:!this.state.open},(function(){var e=document.getElementsByTagName("body")[0],n="logger-open";t.state.open?e.classList.add(n):e.classList.remove(n)}))}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"logger ".concat(this.state.open&&"open"),children:[Object(r.jsx)("a",{href:"#toggle",onClick:this.toggle,children:Object(r.jsx)(St.b,{color:"secondary",children:this.state.open?"Minimise":"Maximise"})}),Object(r.jsx)("div",{className:"scroll",ref:function(t){e.scroll=t},children:this.props.logs.map((function(e,t){return Object(r.jsx)(Gt,{log:e},t)}))})]})}}]),n}(c.Component)),Pt=(n(563),n(564),function(e){Object(gt.a)(n,e);var t=Object(Et.a)(n);function n(){return Object(Ot.a)(this,n),t.apply(this,arguments)}return Object(xt.a)(n,[{key:"componentDidMount",value:function(){this.props.getNodes()}},{key:"render",value:function(){var e=this.props.nodes.toJS(),t=e.error,n=e.items,o=this.props.logs.toJS().items;return t?Object(r.jsx)(_t,{message:t.message}):t||n.length?Object(r.jsxs)(St.f,{className:"app",children:[Object(r.jsx)(St.k,{children:n.map((function(e,t){return e.colour=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}(),Object(r.jsx)(St.l,{children:Object(r.jsx)(Jt,{node:e})},t)}))}),Object(r.jsx)(Vt,{logs:o})]}):Object(r.jsx)(Ct,{})}}]),n}(c.Component)),Ht=Object(vt.b)((function(e){return{nodes:e.nodes,logs:e.logs}}),{getNodes:function(e){return{type:h,seed:e}}})(Pt);a.a.config();var qt=function(){var e=Object(u.a)(),t=Object(p.d)(he,Object(p.a)(e));return e.run(bt),t}();i.a.render(Object(r.jsx)(vt.a,{store:qt,children:Object(r.jsx)(Ht,{})}),document.getElementById("root"))}},[[565,1,2]]]);
//# sourceMappingURL=main.0f560867.chunk.js.map
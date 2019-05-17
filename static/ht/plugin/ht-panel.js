!function(u,L,K){"use strict";var n="ht",B=u[n],A=B.Default,R=A.isTouchable,i=B.Color,q="px",m="0",D="innerHTML",N="className",Q="position",I="absolute",G="width",F="height",t="left",M="top",x="right",O="bottom",Y="max-width",U="max-height",v=null,P="none",V="",e=u.parseInt,E=u.setTimeout,p=A.getInternal(),X=A.animate,a=i.titleIconBackground,C=function(){return document},y=function(w){return C().createElement(w)},Z=function(){return y("div")},h=function(){return y("canvas")},S=function(a,R,w){a.style.setProperty(R,w,v)},c=function(w,o){return w.style.getPropertyValue(o)},k=function(e,W){e.appendChild(W)},z=function(n,R){n.removeChild(R)},g=A.eventListenerOptionsFalse,H=(A.eventListenerOptionsTrue,function(z,$,k,a){z.addEventListener($,k,a?g:g)}),f=function(Y){var q=Y.scrollWidth,L=Y.scrollHeight;return Y===C().body&&(q=Math.max(q,C().documentElement.scrollWidth),L=Math.max(L,C().documentElement.scrollHeight)),{width:q,height:L}},o=function(M){var v=M.touches[0];return v?v:M.changedTouches[0]};p.addMethod(A,{panelExpandIcon:{width:16,height:16,comps:[{type:"triangle",rect:[4,4,10,8],background:a,rotation:3.14}]},panelCollapseIcon:{width:16,height:16,comps:[{type:"triangle",rect:[4,4,10,8],background:a}]},panelLockIcon:{width:100,height:100,comps:[{type:"roundRect",rect:[10,50,80,40],borderWidth:10,borderColor:a},{type:"shape",points:[37,45,37,20,37,13,43,13,63,13,69,13,70,19,70,44],segments:[1,2,3,2,3,2],borderWidth:10,borderColor:a}]},panelUnLockIcon:{width:100,height:100,comps:[{type:"roundRect",rect:[10,50,80,40],borderWidth:10,borderColor:a},{type:"shape",points:[37,45,37,20,37,13,43,13,63,13,69,13,70,19,70,26],segments:[1,2,3,2,3,2],borderWidth:10,borderColor:a}]},panelMinimizeIcon:{width:100,height:100,comps:[{type:"shape",points:[10,35,35,35,35,10],segments:[1,2,2],borderWidth:8,borderColor:a},{type:"shape",points:[90,35,65,35,65,10],segments:[1,2,2],borderWidth:8,borderColor:a},{type:"shape",points:[10,65,35,65,35,90],segments:[1,2,2],borderWidth:8,borderColor:a},{type:"shape",points:[65,90,65,65,90,65],segments:[1,2,2],borderWidth:8,borderColor:a}]},panelRestoreIcon:{width:300,height:300,comps:[{type:"rect",rect:[10,24,268,56],background:a},{type:"rect",rect:[10,118,268,56],background:a},{type:"rect",rect:[10,213,268,56],background:a}]},panelTitleLabelColor:A.labelSelectColor,panelTitleLabelFont:A.labelFont,panelContentLabelFont:A.labelFont,panelTitleBackground:i.titleBackground,panelSeparatorWidth:1,panelSeparatorColor:K},!0);var T=B.widget.Panel=function(T){var W=this,s=W._view=p.createView(null,W);W.$1i=0,W.$18i=new B.Notifier,W.$2i="leftTop",S(s,M,m),S(s,t,m),S(s,Q,I),S(s,"overflow","hidden"),W._interactor=new J(W),W.setConfig(T),W.addEventListener(function(E){var D=W.getPanelConfig(E.id),j=D.content;("beginRestore"===E.kind||"betweenResize"===E.kind||"endToggle"===E.kind)&&(j&&j.invalidate&&j.invalidate(),D.items&&D.items.forEach(function(u){u&&u.content&&u.content.invalidate&&u.content.invalidate()}))})};A.def(T,L,{ms_v:1,_dragContainment:"parent",setConfig:function(U){function R(v){v.expanded=!v.expanded,n.togglePanel(v.id,!0,!0)}if(U){for(var n=this,b=n._view.parentNode;this._view.children.length;)this._view.removeChild(this._view.children[0]);n._config=U,n.$35i=[],U.expanded==v&&(U.expanded=U.expand!=v?U.expand:!0);var p=n._view,H=n.$24i(U,p,!0),D=H[2],L=U.width;n.$35i.push(H[1]),U.items&&U.items.forEach(function(Y){Y.expanded==v&&(Y.expanded=Y.expand!=v?Y.expand:!0);var H=n.$24i(Y,D.children[0]);n.$35i.push(H[1])});var u=Z();S(u,G,10+q),S(u,F,10+q),S(u,Q,I),S(u,O,m),S(u,x,m),u[N]="resize-area",k(p,u),n.$10i(),U.flowLayout&&S(p,Q,"relative"),S(p,"opacity",m),k(C().body,p),L==v&&(L=p.offsetWidth),S(p,G,L+q),S(p,Y,L+q);var X=U.content;X&&X.isSelfViewEvent&&(X.setX(0),X.setY(0),X.setWidth(L-2*(U.borderWidth||0)),X.setHeight(U.contentHeight)),U.items&&U.items.forEach(function(u){R(u)}),U.buttons&&U.buttons.indexOf("toggle")<0||R(U),U.minimized==v&&U.minimize!=v&&(U.minimized=U.minimize),U.minimized&&U.minimizable!==!1&&n.minimize(!0),z(C().body,p),S(p,"opacity",V),b&&k(b,p),n.iv()}},getPanelConfig:function(n){var v=this,P=v._config,j=P.items;if(P.id===n)return P;if(j)for(var z=0;z<j.length;z++){var B=j[z];if(B.id===n)return B}},getPanelView:function(k){for(var Z=this,S=Z.$35i,I=0;I<S.length;I++){var e=S[I],z=e.parentNode;if(z.$15i===k)return z}},setDragContainment:function(S){this._dragContainment=S},getDragContainment:function(){return this._dragContainment},$20i:function(){var B=this._config,n=B.restoreIconSize||24;return n},$5i:function(t){var O=t.titleIconSize||16;return R&&(O*=1.2),O},$4i:function(J){var C=J.titleHeight||A.widgetTitleHeight;return C},setTitle:function(W,O){if(O==v&&(O=this._config.id),O!=v){var u=this.getPanelConfig(O),G=this.getPanelView(O);u.title=W,G.querySelector(".panel-title span").innerHTML=W}},setInnerPanel:function(m){var u,M,p=this,t=m.id,j=p.$35i,J=!1;if(m.expanded==v&&(m.expanded=!0),t!=v){var P=p.getPanelConfig(t);if(P){J=!0;var i,V=p.getPanelView(t),Q=V.parentNode,d=V.children[0];if(V!==p._view){p.$11i();for(i in P)delete P.key;for(i in m)P[i]=m[i];u=p.$24i(m,Q,!1,V),M=u[1],Q.removeChild(V);for(var H=0;H<j.length;H++)if(j[H]===d){j.splice(H,1,M);break}p.$12i(),P.expanded=!P.expanded,p.togglePanel(P.id,!0,!0),p.iv()}}}if(!J){p.$11i(),u=p.$24i(m,p._view.children[1]),M=u[1],j.push(M),p._config.items||(p._config.items=[]);var n=p._config.items;if(n.push(m),p.$12i(),n.length>1){var x=n[n.length-2],Y=p.getPanelView(x.id).children[0];S(Y,"border-bottom",p.$55i(x))}m.expanded=!m.expanded,p.togglePanel(m.id,!0,!0),p.iv()}},removeInnerPanel:function(N){var z,E=this,s=-1,t=E._config.items;if(t)for(z=0;z<t.length;z++){var q=t[z];if(q.id===N){s=z;break}}if(E.$11i(),s>=0){var w=E.$35i,i=E.getPanelView(N),j=i.children[0];for(z=0;z<w.length;z++)if(w[z]===j){w.splice(z,1);break}t.splice(s,1),i.parentNode.removeChild(i)}if(E.$12i(),t.length>0){var O=t[t.length-1],$=E.getPanelView(O.id).children[0];S($,"border-bottom",E.$55i(O))}},$6i:function(n){S(n,"cursor","pointer"),S(n,"display","inline-block"),S(n,"margin-right",(R?8:4)+q),S(n,"vertical-align",M)},$24i:function(g,L,x,$){var Q=this,C=Q._config.flowLayout,s=x?L:Z(),H=Q.$50i(g),T=Q.$3i(g,x);s[N]="ht-widget-panel"+(x?" outer-panel":" inner-panel"),g.borderWidth==v&&(g.borderWidth=x?2:0);var _=g.borderWidth;if(_="0 "+_+q+" "+_+q+" "+_+q+" ",S(s,"border-width",_),S(s,"border-color",g.titleBackground||A.panelTitleBackground),S(s,"border-style","solid"),k(s,T),k(s,H),x||($?L.insertBefore(s,$):k(L,s)),!C&&x&&g.minimizable!==!1){var V=h(),W=Q.$20i(),B=g.restoreToolTip;p.setCanvas(V,W,W),V[N]="control-button button-minimize button-minimize-restore",Q.$6i(V),S(V,"display","none"),k(L,V),V.title=B||""}var E=g.panelBackground||g.titleBackground||A.panelTitleBackground;if(S(s,"background-color",E),g.id==v){for(var m=Q.$1i++;Q.getPanelConfig(m);)m=Q.$1i++;g.id=m}return s.$15i=g.id,g.width&&(s.style.width=g.width+q),[s,T,H]},$9i:function(B){var C=h();C[N]="control-button button-toggle button-toggle-expand",C.title=B.toggleToolTip||"";var Y=this.$4i(B),y=this.$5i(B);return this.$6i(C),p.setCanvas(C,y,Y),C},$8i:function(Y){var w=h(),s="control-button button-independent-switch";w[N]=Y.independent===!0?s+" button-independent-switch-on":s+" button-independent-switch-off",w.title=Y.independentSwitchToolTip||"";var X=this.$4i(Y),d=this.$5i(Y);return this.$6i(w),p.setCanvas(w,d,X),w},$7i:function(d){var $=h();$[N]="control-button button-minimize button-minimize-minimize",$.title=d.minimizeToolTip||"";var _=this.$4i(d),q=this.$5i(d);return this.$6i($),p.setCanvas($,q,_),$},$55i:function(e){var p=this._config,o=p.items,H=e.separatorWidth||A.panelSeparatorWidth,X=e.titleBackground||A.panelTitleBackground,z=e.expanded!==!1?X:e.separatorColor||A.panelSeparatorColor||A.brighter(X);return(p===e||o&&o.indexOf(e)===o.length-1)&&(H=0),H+q+" solid "+z},$3i:function(o,X){var l=this,v=l._config.flowLayout,u=Z(),U=Z(),F=l.$4i(o),J=o.titleBackground,T=o.titleColor,w=o.titleIcon,z=o.buttons;if(u[N]="panel-title",S(u,Q,"relative"),S(u,"background",J||A.panelTitleBackground),S(u,"color",T||A.panelTitleLabelColor),S(u,M,m),S(u,"box-sizing","border-box"),S(u,"-moz-box-sizing","border-box"),S(u,"padding","0 5px 0 0"),S(u,G,"100%"),S(u,"cursor","default"),S(u,"white-space","nowrap"),S(u,"font",A.panelTitleLabelFont),w){var j=h();j[N]="control-button panel-title-icon";var d=l.$4i(o),a=l.$5i(o);l.$6i(j),p.setCanvas(j,a,d),k(u,j)}var Y=y("span");S(Y,"display","inline-block"),S(Y,"margin-left","5px"),Y[D]="<span>"+o.title+"</span>",k(u,Y),S(u,"line-height",F+q),U[N]="panel-title-controls",S(U,Q,I),S(U,t,m),S(U,x,5+q),S(U,M,m),S(U,O,m),S(U,"text-align",x);var R=function(){var z=l.$9i(o);k(U,z)},r=function(){if(!v&&X&&o.minimizable!==!1){var d=l.$7i(o);k(U,d)}},n=function(){if(!X){var S=l.$8i(o);k(U,S)}},L=function(T){var z=h();z[N]="control-button custombutton-"+T.name,z.title=T.toolTip||"",z._action=T.action;var G=l.$4i(o),t=l.$5i(o);l.$6i(z),p.setCanvas(z,t,G),k(U,z)};if(z)for(var P=0;P<z.length;P++){var i=z[P];"string"==typeof i?"minimize"===i?r():"independentSwitch"===i?n():"toggle"===i&&R():"object"==typeof i&&L(i)}else r(),R();return k(u,U),u},$50i:function(j){var X=Z(),v=j.contentHeight,h=Z();S(h,Q,"relative"),X[N]="panel-body",S(X,"overflow","hidden");var x=j.contentBackground;if(x===K&&(x="white"),S(X,"background",x),S(X,"font",A.panelContentLabelFont),k(X,h),j.content){var t,Y=j.content;Y.getView?(k(h,Y.getView()),t=h.children[0]):Y instanceof Element?(k(h,Y),t=h.children[0]):h[D]=Y,Y.isSelfViewEvent||t&&(S(t,G,"100%"),S(t,F,"100%")),v&&S(h,F,v+q)}return X},$10i:function(){var Y=this,i=Y._config,e=Y._view,I=e.querySelector(".resize-area").style;I.display=i.flowLayout||i.minimized===!0||i.expanded===!1?P:"block"},$11i:function(){var q=this._view,L=q.children[1];this.$13i>=0?this.$13i++:this.$13i=1,S(L,U,V),S(q,Y,V)},$12i:function(){var I=--this.$13i;if(0===I){var W=this._view,g=W.children[1];S(g,U,g.scrollHeight+q),S(W,Y,W.offsetWidth+q)}},$14i:function(){var k=this._view,e=k.children[0],F=e.children[1].children,z=this._config,x=0;k.$26i=k.offsetWidth,x+=e.children[0].offsetWidth,z.titleIcon&&(x+=e.children[1].offsetWidth,F=e.children[2].children);for(var h=0;h<F.length;h++){var d=F[h];x+=d.offsetWidth+5}k.$51i=x+15},togglePanel:function(K,C,T){function h(q){var J=q.target,b=J.parentNode,j=l.getPanelConfig(b.$15i);delete b.$19i,J!==g&&l.$12i(),l.$18i.fire({kind:"endToggle",target:l,id:j.id})}for(var l=this,i=l._view,g=i.children[1],c=v,D=l.$35i,j=D.length,Z=l._config.exclusive,s=l.$2i,M=[],Q=l._config.narrowWhenCollapse,y=0;j>y;y++){var B=D[y],W=B.parentNode,e=W.$15i,J=l.getPanelConfig(e);e===K&&(c=W),!C&&Z&&J.expanded&&W!==i&&e!==K&&J.independent!==!0&&M.push(W)}if(c&&!c.$19i){c.$19i=!0;var p=c.children[1],t=c.querySelector(".button-toggle"),H=l.getPanelConfig(c.$15i);if(!t)return;c===i||H.expanded||H.independent===!0||M.forEach(function(e){l.togglePanel(e.$15i,!0)}),c!==i&&l.$11i();var r=200;if(T&&(r=0),l.$18i.fire({kind:"beginToggle",target:l,id:c.$15i}),H.expanded){var u=function(){t[N]="control-button button-toggle",t[N]+=s.indexOf("Bottom")>=0?" button-toggle-expand":" button-toggle-collapse",S(p,G,p.clientWidth+q),H.expanded=!1,S(c.children[0],"border-bottom",l.$55i(H)),X(p).duration(r).set("opacity",m).set(U,m).end(h),Q&&c===i&&X(c).duration(r).set(Y,c.$51i+q).end(),c[N]+=" panel-collapse",X(c).duration(r).set("padding-bottom",m).end(),l.$28i(H,!0),l.$10i()};Q&&c===i&&l.$14i(),u()}else t[N]="control-button button-toggle",t[N]+=s.indexOf("Bottom")>=0?" button-toggle-collapse":" button-toggle-expand",S(p,G,V),H.expanded=!0,S(c.children[0],"border-bottom",l.$55i(H)),X(p).duration(r).set("opacity","1").set(U,p.scrollHeight+q).end(h),Q&&c===i&&X(c).duration(r).set(Y,(c.$26i||c.offsetWidth)+q).end(),c[N]=c[N].replace(" panel-collapse",V),X(c).duration(r).end(),l.$28i(H,!0),l.$10i()}},$16i:function(){var P=this._view,o=P.$22i,J=P.$23i,D=this.$2i;return o==v&&(D.indexOf(t)>=0?o=P.$22i=0:D.indexOf(x)>=0&&(o=P.$22i=100)),J==v&&(D.indexOf("Top")>=0?J=P.$23i=0:D.indexOf("Bottom")>=0&&(J=P.$23i=100)),[o,J]},$25i:function(){var o=this,b=o._view,l=b.$21i,k=o.$20i(),B=o.$16i(),Z=B[0],n=B[1],L=o.$2i;b.children[0].style.display=P,b.children[1].style.display=P,b.children[2].style.display=V,S(b,"padding",m),S(b,Y,k+q),"leftTop"===L?(S(b,t,e(c(b,t))+(l.width-k)*Z/100+q),S(b,M,e(c(b,M))+(l.height-k)*n/100+q)):"leftBottom"===L?(S(b,t,e(c(b,t))+(l.width-k)*Z/100+q),S(b,O,e(c(b,O))+(l.height-k)*(1-n/100)+q)):"rightTop"===L?(S(b,x,e(c(b,x))+(l.width-k)*(1-Z/100)+q),S(b,M,e(c(b,M))+(l.height-k)*n/100+q)):"rightBottom"===L&&(S(b,x,e(c(b,x))+(l.width-k)*(1-Z/100)+q),S(b,O,e(c(b,O))+(l.height-k)*(1-n/100)+q)),b[N]+=" panel-minimized",o.$18i.fire({kind:"endMinimize",target:o,id:b.$15i})},$17i:function(){var K=this,d=K._config,n=K._view;S(n,"-webkit-transform",V),S(n,"-ms-transform",V),S(n,"transform",V),d.minimized?K.$25i():(K.$18i.fire({kind:"endRestore",target:K,id:d.id}),n[N]=n[N].replace(" panel-minimized",V)),delete n.$19i},minimize:function(D){var k=this,b=k._view;if(!b.$19i&&b.children[0].style.display!==P){var V=k._config,i=b.getBoundingClientRect(),u=k.$20i(),Y=i.width,y=i.height,F=u/Y,x=u/y,Z=k.$16i(),z=Z[0],e=Z[1];b.$52i=F,b.$53i=x,b.$21i=i,k.$18i.fire({kind:"beginMinimize",target:k,id:b.$15i});var W=200;D&&(W=0),V.minimized=!0,b.$19i=!0,V.expanded&&(b.$26i=b.offsetWidth);var n=z+"% "+e+"%";S(b,"-webkit-transform-origin",n),S(b,"-ms-transform-origin",n),S(b,"transform-origin",n),X(b).duration(W).scale(F,x).end(function(){k.$17i()}),k.$10i()}},restore:function(){var z,A,b,i,C,U,N,W,m,n,d,K,y=this,r=y._view,B=r.parentNode,w=y._config;if(!r.$19i&&w.minimized){var Q=r.$21i,g=r.$52i,k=r.$53i,h=(w.borderWidth+q,y.$20i()),j=f(B),H=y.$2i;"leftTop"===H?(z=e(c(r,t)),b=e(c(r,M)),C=z,N=b,m=z+Q.width-j.width,n=b+Q.height-j.height,m>0&&(m>=z?z=0:z-=m),n>0&&(n>=b?b=0:b-=n),d=100*((C-z)/(Q.width-h)),K=100*((N-b)/(Q.height-h)),S(r,t,z+q),S(r,M,b+q)):"leftBottom"===H?(z=e(c(r,t)),i=e(c(r,O)),C=z,W=i,m=z+Q.width-j.width,n=i+Q.height-j.height,m>0&&(m>=z?z=0:z-=m),n>0&&(n>=i?i=0:i-=n),d=100*((C-z)/(Q.width-h)),K=100*(1-(W-i)/(Q.height-h)),S(r,t,z+q),S(r,O,i+q)):"rightTop"===H?(A=e(c(r,x)),b=e(c(r,M)),U=A,N=b,m=A+Q.width-j.width,n=b+Q.height-j.height,m>0&&(m>=A?A=0:A-=m),n>0&&(n>=b?b=0:b-=n),d=100*(1-(U-A)/(Q.width-h)),K=100*((N-b)/(Q.height-h)),S(r,x,A+q),S(r,M,b+q)):"rightBottom"===H&&(A=e(c(r,x)),i=e(c(r,O)),U=A,W=i,m=A+Q.width-j.width,n=i+Q.height-j.height,m>0&&(m>=A?A=0:A-=m),n>0&&(n>=i?i=0:i-=n),d=100*(1-(U-A)/(Q.width-h)),K=100*(1-(W-i)/(Q.height-h)),S(r,x,A+q),S(r,O,i+q)),r.children[0].style.display="block",r.children[1].style.display="block",r.children[2].style.display=P,S(r,"-webkit-transform","scale("+g+", "+k+")"),S(r,"-ms-transform","scale("+g+", "+k+")"),S(r,"transform","scale("+g+", "+k+")"),r.$22i=d,r.$23i=K,S(r,"-webkit-transform-origin",d+"% "+K+"%"),S(r,"-ms-transform-origin",d+"% "+K+"%"),S(r,"transform-origin",d+"% "+K+"%"),w.narrowWhenCollapse&&!w.expanded?S(r,Y,r.$51i+q):S(r,Y,r.$26i+q),y.$18i.fire({kind:"beginRestore",target:y,id:r.$15i}),r.$19i=!0,w.minimized=!1,E(function(){X(r).scale(1,1).end(function(){y.$17i()})},30),y.$10i()}},addEventListener:function(W,t,Z){this.$18i.add(W,t,Z)},removeEventListener:function(Z,v){this.$18i.remove(Z,v)},setPosition:function(k,G){var X=this._view,n=this.$2i;"leftTop"===n?(S(X,t,k+q),S(X,M,G+q),S(X,x,V),S(X,O,V)):"leftBottom"===n?(S(X,t,k+q),S(X,O,G+q),S(X,x,V),S(X,M,V)):"rightTop"===n?(S(X,x,k+q),S(X,M,G+q),S(X,t,V),S(X,O,V)):"rightBottom"===n&&(S(X,x,k+q),S(X,O,G+q),S(X,t,V),S(X,M,V)),delete X.$22i,delete X.$23i},getPosition:function(){var E=this._view,K=this.$2i;return"leftTop"===K?{x:e(c(E,t)),y:e(c(E,M))}:"leftBottom"===K?{x:e(c(E,t)),y:e(c(E,O))}:"rightTop"===K?{x:e(c(E,x)),y:e(c(E,M))}:"rightBottom"===K?{x:e(c(E,x)),y:e(c(E,O))}:void 0},setPositionRelativeTo:function(V){var Q=this,n=Q._view.querySelectorAll(".button-toggle"),p="control-button button-toggle",W=Q.getPosition();Q.$2i=V,Q.setPosition(W.x,W.y);for(var t=0;t<n.length;t++){var F=n[t],s=Q.getPanelConfig(F.parentNode.parentNode.parentNode.$15i);F[N]=s.expanded?V.indexOf("Bottom")>=0?p+" button-toggle-collapse":p+" button-toggle-expand":V.indexOf("Bottom")>=0?p+" button-toggle-expand":p+" button-toggle-collapse"}Q.iv()},getPositionRelativeTo:function(){return this.$2i},invalidate:function(Z){var J=this;J._68I||(J._68I=1,A.callLater(J.validate,J,v,Z),J.onInvalidated&&J.onInvalidated(),J.fireViewEvent("invalidate"));var _=this._config,z=_.content;z&&z.invalidate&&z.invalidate(),_.items&&_.items.forEach(function(c){c&&c.content&&c.content.invalidate&&c.content.invalidate()})},getIconStretch:function(){var j=this._config.iconStretch||"fill";return j},$27i:function(j,Y,g,G,B){var L=p.initContext(j);p.translateAndScale(L,0,0,1),L.clearRect(0,0,g,g);var V=(g-G)/2;A.drawStretchImage(L,A.getImage(Y),this.getIconStretch(B),0,V,G,G),L.restore()},$28i:function(k){var H,G,F,j=this,$=k.id,S=j.getPanelView($),J=S.querySelector(".button-toggle"),d=j.$2i.indexOf("Bottom")>=0;if(G=d?A.panelCollapseIcon:A.panelExpandIcon,F=d?A.panelExpandIcon:A.panelCollapseIcon,J){H=k.expanded?A.getImage(F):A.getImage(G);var p=j.$4i(k),c=j.$5i(k);j.$27i(J,H,p,c,"toggle")}},$29i:function(r){var c,p=this,k=r.id,w=p.getPanelView(k),s=w.querySelector(".button-independent-switch"),x=A.panelUnLockIcon,b=A.panelLockIcon;if(s){c=r.independent!==!0?A.getImage(b):A.getImage(x);var o=p.$4i(r),a=p.$5i(r);p.$27i(s,c,o,a,"switch")}},$30i:function(N){var C=this,r=N.id,E=C.getPanelView(r),i=E.querySelector(".button-minimize-minimize"),k=A.panelMinimizeIcon;if(i){var f=C.$4i(N),a=C.$5i(N);C.$27i(i,A.getImage(k),f,a,"miminize")}},$31i:function(B){var m=this,Y=B.id,D=m.getPanelView(Y),c=D.querySelector(".button-minimize-restore"),O=B.titleIcon||A.panelRestoreIcon;if(c){var f=m.$20i();m.$27i(c,A.getImage(O),f,f,"restore")}},$32i:function(n){var V=this,H=n.id,I=V.getPanelView(H);if(n.buttons){var b=n.buttons;b.forEach(function(m){var U=m.name,J=m.icon;if(U&&J){var f=I.querySelector(".custombutton-"+U);if(f){var F=V.$4i(n),M=V.$5i(n)-1;V.$27i(f,A.getImage(J),F,M,"custom")}}})}},$33i:function(y){var Z=this,g=y.id,M=Z.getPanelView(g),B=M.querySelector(".panel-title-icon"),v=y.titleIcon;if(B&&v){var f=Z.$4i(y),S=Z.$5i(y);Z.$27i(B,A.getImage(v),f,S,"title")}},validateImpl:function(){var R=this,O=R._config;R.$28i(O),R.$30i(O),R.$31i(O),R.$32i(O),R.$33i(O),O.items&&O.items.forEach(function(k){R.$28i(k),R.$29i(k),R.$32i(k)})}});var J=function(F){var r=this,X=F.getView();r.$34i=F,r.addListeners(),H(X,"dblclick",r.$42i.bind(r))};A.def(J,L,{ms_listener:1,getView:function(){return this.$34i.getView()},clear:function(){delete this.$37i,delete this.$38i,delete this.$36i,delete this.$39i},$42i:function(B){for(var C=this.$34i,w=B.target,q=C.$35i,v=q.length,V=0;v>V;V++){var g=q[V];g.contains(w)&&(B.preventDefault(),C.togglePanel(g.parentNode.$15i))}},handle_touchstart:function(U){var H=this,k=H.$34i,Q=k._config,i=Q.flowLayout,g=U;if(A.preventDefault(U),A.isLeftButton(U)){var r=U.target,t=k.getView().children[0],q=k.getView().querySelector(".button-minimize-restore");R&&(g=o(U));var b=H.$40i={x:g.pageX,y:g.pageY};H.$41i={x:b.x,y:b.y},(!i&&t.contains(r)||q&&q.contains(r))&&(H.$38i=!0,A.startDragging(H,U)),!i&&H.handle_mousemove(U)&&(H.$37i=!0,A.startDragging(H,U),k.$11i())}},handle_mousedown:function(G){this.handle_touchstart(G)},handle_touchend:function(H){var L=this,S=L.$34i,D=H.target,k=S.$35i,C=k.length,y=0,T=S.getView(),K=T.querySelector(".button-minimize"),M=T.querySelector(".button-minimize-restore");if(!L.$39i&&!L.$36i){if(K&&K.contains(D)||M&&M.contains(D))H.preventDefault(),S._config.minimized?S.restore():S.minimize();else for(;C>y;y++){var V=k[y],h=V.parentNode,Q=h.$15i,A=S.getPanelConfig(Q),l=V.querySelector(".button-toggle"),P=V.querySelector(".button-independent-switch");if(l===D)H.preventDefault(),S.togglePanel(Q);else if(P===D){H.preventDefault();var f="button-independent-switch-off",j="button-independent-switch-on";A.independent=A.independent==v?!0:!A.independent,P[N]=A.independent?P[N].replace(f,j):P[N].replace(j,f),S.$29i(A)}else D[N]&&D[N].indexOf("control-button custombutton-")>=0&&V.contains(D)&&D._action.call(S,A,S.getPanelView(Q),H)}delete L.$40i,delete L.$41i}},handle_mouseup:function(T){this.handle_touchend(T)},handleWindowTouchEnd:function(){var h=this,q=h.$34i;h.$37i&&h.$36i?(q.$18i.fire({kind:"endResize",target:q,id:q.getView().$15i}),q.$12i()):h.$38i&&h.$39i&&q.$18i.fire({kind:"endMove",target:q,id:q.getView().$15i}),this.clear()},handleWindowMouseUp:function(m){this.handleWindowTouchEnd(m)},handle_mousemove:function(C){var d=this,H=d.getView(),U=H.querySelector(".resize-area"),J=U.getBoundingClientRect(),I={x:J.left,y:J.top,width:J.width,height:J.height};C=R?o(C):C;var k=C.clientX,v=C.clientY,F=d.$34i._config;return F.expanded&&F.minimized!==!0&&A.containsPoint(I,{x:k,y:v})?(H.style.cursor="nwse-resize",!0):(H.style.cursor=V,void 0)},handleWindowTouchMove:function(N){N.preventDefault();var W=N;R&&(W=o(N));var j=this,y=j.$40i,i=j.$41i;if(!(i.x==y.x&&i.y==y.y&&A.getDistance(i,{x:W.pageX,y:W.pageY})<=1)){var z=j.$34i,J=j.getView(),w=J.parentNode,v=z._config,_=v.resizeMode||"wh",s=W.pageX-y.x,I=W.pageY-y.y,k=z.$2i;if(j.$37i){var D=J.children[1].children[0],L=J.offsetWidth,C=D.offsetHeight,B=L+s,u=C+I;B=Math.max(B,100),u=Math.max(u,100),"w"===_?(S(J,G,B+q),v.width=B):"h"===_?(S(D,F,u+q),v.contentHeight=u):"wh"===_&&(S(J,G,B+q),S(D,F,u+q),v.width=B,v.contentHeight=u),k.indexOf("right")>=0&&S(J,x,e(c(J,x))-(B-L)+q),k.indexOf("Bottom")>=0&&S(J,O,e(c(J,O))-(u-C)+q),y.x=W.pageX,y.y=W.pageY;var E=v.content;E&&E.isSelfViewEvent&&(E.setX(0),E.setY(0),E.setWidth(v.width-2*(v.borderWidth||0)),E.setHeight(v.contentHeight)),j.$36i?z.$18i.fire({kind:"betweenResize",target:z,id:z.getView().$15i}):(j.$36i=!0,z.$18i.fire({kind:"beginResize",target:z,id:z.getView().$15i}))}else if(j.$38i){var V,m,U,Y,b,Q,g,p,H,d,Z=J.getBoundingClientRect(),a=Z.width,n=Z.height,l=f(w),r=l.width,h=l.height,T=z._dragContainment;"leftTop"===k?(V=e(c(J,t))||0,U=e(c(J,M))||0,b=V+s,g=U+I,"parent"===T&&(b+a>r&&(b=r-a),g+n>h&&(g=h-n),0>b&&(b=0),0>g&&(g=0)),H=b-V,d=g-U,z.setPosition(b,g),y.x+=H,y.y+=d):"rightBottom"===k?(m=e(c(J,x))||0,Y=e(c(J,O))||0,Q=m-s,p=Y-I,"parent"===T&&(0>Q&&(Q=0),0>p&&(p=0),Q+a>r&&(Q=r-a),p+n>h&&(p=h-n)),H=Q-m,d=p-Y,z.setPosition(Q,p),y.x-=H,y.y-=d):"rightTop"===k?(m=e(c(J,x))||0,U=e(c(J,M))||0,Q=m-s,g=U+I,"parent"===T&&(0>Q&&(Q=0),0>g&&(g=0),Q+a>r&&(Q=r-a),g+n>h&&(g=h-n)),H=Q-m,d=g-U,z.setPosition(Q,g),y.x-=H,y.y+=d):"leftBottom"===k&&(V=e(c(J,t))||0,Y=e(c(J,O))||0,b=V+s,p=Y-I,"parent"===T&&(0>b&&(b=0),0>p&&(p=0),b+a>r&&(b=r-a),p+n>h&&(p=h-n)),H=b-V,d=p-Y,z.setPosition(b,p),y.x+=H,y.y-=d),j.$39i?z.$18i.fire({kind:"betweenMove",target:z,id:z.getView().$15i}):(j.$39i=!0,z.$18i.fire({kind:"beginMove",target:z,id:z.getView().$15i}))}}},handleWindowMouseMove:function(C){this.handleWindowTouchMove(C)}});var _=B.widget.PanelGroup=function(D){var N=this,i=N._view=p.createView(null,N);i.style.border="1px dashed black",i.style.position="absolute",i.style.background="rgba(120, 120, 120, 0.4)",N.$48i=new B.List,N._tolerance=100,N._config=D||{hGap:0,vGap:0},N.bindHandlePanelMove=N.handlePanelMove.bind(N),N.bindHandlePanelEvent=N.handlePanelEvent.bind(N),N.invalidate()};A.def(_,L,{invalidate:function(){var $=this;$._68I||($._68I=1,E(function(){$.validate()},50))},validate:function(){if(this._68I){delete this._68I;var d=this.$48i.get(0);if(d){var x=d.getView().parentNode;x&&(this.layoutPanels(x,"leftTop"),this.layoutPanels(x,"rightTop"),this.layoutPanels(x,"leftBottom"),this.layoutPanels(x,"rightBottom"))}}},setLeftTopPanels:function(){var R=this,u=R.$43i,F=R.$48i;u==v&&(u=R.$43i=new B.List);for(var z=0;z<arguments.length;z++){var o=arguments[z];if("string"==typeof o)u.$49i=o;else{if(o._config.flowLayout)continue;o.setPositionRelativeTo("leftTop"),u.contains(o)||u.add(o),F.contains(o)||R.add(o)}}},setRightTopPanels:function(){var c=this,J=c.$44i,r=c.$48i;J==v&&(J=c.$44i=new B.List);for(var e=0;e<arguments.length;e++){var V=arguments[e];if("string"==typeof V)J.$49i=V;else{if(V._config.flowLayout)continue;V.setPositionRelativeTo("rightTop"),J.contains(V)||J.add(V),r.contains(V)||c.add(V)}}},setLeftBottomPanels:function(){var s=this,w=s.$45i,W=s.$48i;w==v&&(w=s.$45i=new B.List);for(var G=0;G<arguments.length;G++){var K=arguments[G];if("string"==typeof K)w.$49i=K;else{if(K._config.flowLayout)continue;K.setPositionRelativeTo("leftBottom"),w.contains(K)||w.add(K),W.contains(K)||s.add(K)}}},setRightBottomPanels:function(){var j=this,P=j.$46i,N=j.$48i;P==v&&(P=j.$46i=new B.List);for(var u=0;u<arguments.length;u++){var L=arguments[u];if("string"==typeof L)P.$49i=L;else{if(L._config.flowLayout)continue;L.setPositionRelativeTo("rightBottom"),P.contains(L)||P.add(L),N.contains(L)||j.add(L)}}},add:function(R){if(!R._config.flowLayout){var w=this,a=w.$48i;a.contains(R)||(R.addEventListener(w.bindHandlePanelMove),R.addEventListener(w.bindHandlePanelEvent),a.add(R))}},remove:function(C){var D=this,k=D.$48i;k.contains(C)&&(C.removeEventListener(D.bindHandlePanelMove),C.removeEventListener(D.bindHandlePanelEvent),k.remove(C),D.$43i.contains(C)&&D.$43i.remove(C),D.$44i.contains(C)&&D.$44i.remove(C),D.$45i.contains(C)&&D.$45i.remove(C),D.$46i.contains(C)&&D.$46i.remove(C))},layoutPanels:function(k,c,t){var $=this,l=$._config,g=l.hGap||0,Y=l.vGap||0;if(k){var P=$.$43i;if("leftBottom"===c?P=$.$45i:"rightTop"===c?P=$.$44i:"rightBottom"===c&&(P=$.$46i),!P)return;var Z=P.$49i,m=g,T=Y;if(k.contains($._view)&&k.removeChild($._view),P&&P.size()>0)for(var d=0;d<P.size();d++){var B=P.get(d),A=B.getView();k=k||A.parentNode,t!==d?B.setPosition(m,T):("leftTop"===c?($._view.style.right="",$._view.style.bottom="",$._view.style.left=m+q,$._view.style.top=T+q):"leftBottom"===c?($._view.style.right="",$._view.style.top="",$._view.style.left=m+q,$._view.style.bottom=T+q):"rightTop"===c?($._view.style.left="",$._view.style.bottom="",$._view.style.right=m+q,$._view.style.top=T+q):"rightBottom"===c&&($._view.style.left="",$._view.style.top="",$._view.style.right=m+q,$._view.style.bottom=T+q),$._view.style.width=A.offsetWidth+q,$._view.style.height=A.offsetHeight+q,k.insertBefore($._view,A)),"h"===Z?m+=A.offsetWidth+g:"v"===Z&&(T+=A.offsetHeight+Y)}}},handlePanelEvent:function(B){if("beginToggle"===B.kind||"endToggle"===B.kind||"beginRestore"===B.kind||"endMinimize"===B.kind||"endResize"===B.kind){var O=this,L=B.target,l=L.getView(),t=l.parentNode,p=O.$43i,f=O.$44i,G=O.$45i,s=O.$46i,Y=O._config,n=v,b=v,J=L.$47i;if(J==v&&(J=L.$47i=0),"beginToggle"===B.kind?J=L.$47i=J+1:"endToggle"===B.kind&&(J=L.$47i=J-1),p&&p.contains(L)?(n="leftTop",b=p):G&&G.contains(L)?(n="leftBottom",b=G):f&&f.contains(L)?(n="rightTop",b=f):s&&s.contains(L)&&(n="rightBottom",b=s),"beginToggle"===B.kind&&n&&1===J){var $=Z(),W=$.style,K=b.$49i,m="each";W.fontSize="0",W.position="absolute",W.width="100%","leftTop"===n?(W.left=0,W.top=0):"leftBottom"===n?(W.left=0,W.bottom=0,"v"===K&&(m="reverseEach")):"rightTop"===n?(W.right=0,W.top=0,W.textAlign="right","h"===K&&(m="reverseEach")):"rightBottom"===n&&(W.right=0,W.bottom=0,W.textAlign="right",m="reverseEach"),b[m](function(Q){var J=Q.getView(),r=J.style,b=Z();r.position="static",b.style.textAlign="left",b.style.position="relative",b.style.display="inline-block","leftTop"===n?(b.style.marginLeft=Y.hGap+q,b.style.marginTop=Y.vGap+q):"leftBottom"===n?(b.style.marginLeft=Y.hGap+q,b.style.marginBottom=Y.vGap+q):"rightTop"===n?(b.style.marginRight=Y.hGap+q,b.style.marginTop=Y.vGap+q):"rightBottom"===n&&(b.style.marginRight=Y.hGap+q,b.style.marginBottom=Y.vGap+q),b.appendChild(J),$.appendChild(b),"h"===K?b.style.verticalAlign="leftTop"===n||"rightTop"===n?"top":"bottom":$.appendChild(y("br"))}),O.$54i=$,t.appendChild($)}else"endToggle"===B.kind&&n&&0===J?E(function(){t=t.parentNode.parentNode,t.removeChild(O.$54i),delete O.$54i,b.each(function(n){var A=n.getView(),x=A.style;x.position="absolute",t.appendChild(A)}),O.layoutPanels(t,n)},30):("beginRestore"===B.kind||"endMinimize"===B.kind||"endResize"===B.kind)&&n&&O.layoutPanels(t,n)}},handlePanelMove:function(Y){if(!(Y.kind.indexOf("Move")<0)){var w=this,t=w._config,z=t.hGap||0,S=t.vGap||0,F=Y.target,P=F._view,p=P.getBoundingClientRect(),D=p.width,L=p.height,M=D/2,q=L/2,R=P.parentNode,W=w.$43i,U=w.$44i,j=w.$45i,u=w.$46i,c=R.getBoundingClientRect(),H=w._tolerance;if("endMove"===Y.kind){var J=w._corner;J&&(F.setPositionRelativeTo(J),w.layoutPanels(R,J)),delete w._corner}if("betweenMove"===Y.kind){var V=c.left,T=c.top,X=c.width,r=c.height,g=p.left+D/2,C=p.top+L/2;W==v&&(W=w.$43i=new B.List),j==v&&(j=w.$45i=new B.List),U==v&&(U=w.$44i=new B.List),u==v&&(u=w.$46i=new B.List),delete w._corner,W.contains(F)?(W.remove(F),w.layoutPanels(R,"leftTop")):j.contains(F)?(j.remove(F),w.layoutPanels(R,"leftBottom")):U.contains(F)?(U.remove(F),w.layoutPanels(R,"rightTop")):u.contains(F)&&(u.remove(F),w.layoutPanels(R,"rightBottom"));var x=function(o,p){var G=V+z,I=T+S;if(0===p.size()){var K=G+M,a=I+q;"leftBottom"===o?a=T+r-S-q:"rightTop"===o?K=V+X-z-M:"rightBottom"===o&&(K=V+X-z-M,a=T+r-S-q);var u=g-K,j=C-a,l=Math.sqrt(u*u+j*j);if(H>l)return w._corner=o,p.add(F),w.layoutPanels(R,o,0),!0}else if(1===p.size()){var _=p.get(0),J=_.getView().getBoundingClientRect(),N=J.left+M,E=J.top+q,d=J.left+J.width+z+M,L=I+q,s=G+M,h=J.top+J.height+S+q;"leftBottom"===o?(E=J.top+J.height-q,L=T+r-S-q,h=J.top-S-q):"rightTop"===o?(N=J.left+J.width-M,d=J.left-z-M,s=V+X-z-M):"rightBottom"===o&&(N=J.left+J.width-M,E=J.top+J.height-q,d=J.left-z-M,L=T+r-S-q,s=V+X-z-M,h=J.top-S-q);var Y=g-N,i=C-E,f=g-d,y=C-L,U=g-s,x=C-h,t=e(Math.sqrt(Y*Y+i*i)),A=e(Math.sqrt(f*f+y*y)),$=e(Math.sqrt(U*U+x*x)),Q=[t,A,$];Q.sort(function(w,E){return w-E});var W=Q[0];if(H>W){if(w._corner=o,W===t)return p.add(F,0),w.layoutPanels(R,o,0),!0;if(W===A)return p.add(F),p.$49i="h",w.layoutPanels(R,o,1),!0;if(W===$)return p.add(F),p.$49i="v",w.layoutPanels(R,o,1),!0}}else if(p.size()>1){for(var D=v,c={},B=[],m=p.$49i,k=0;k<p.size();k++){var P=p.get(k),O=P.getView(),b=O.getBoundingClientRect(),n=b.left+M,Z=b.top+q;"leftBottom"===o?Z=b.top+b.height-q:"rightTop"===o?n=b.left+b.width-M:"rightBottom"===o&&(n=b.left+b.width-M,Z=b.top+b.height-q),k===p.size()-1&&(D=b);var u=g-n,j=C-Z,l=e(Math.sqrt(u*u+j*j));c[l]=k,B.push(l)}"leftTop"===o&&"h"===m?(K=D.left+D.width+z+M,a=I+q):"leftTop"===o&&"v"===m?(K=G+M,a=D.top+D.height+S+q):"leftBottom"===o&&"h"===m?(K=D.left+D.width+z+M,a=T+r-S-q):"leftBottom"===o&&"v"===m?(K=G+M,a=D.top-S-q):"rightTop"===o&&"h"===m?(K=D.left-z-M,a=I+q):"rightTop"===o&&"v"===m?(K=V+X-z-M,a=D.top+D.height+S+q):"rightBottom"===o&&"h"===m?(K=D.left-z-M,a=T+r-S-q):"rightBottom"===o&&"v"===m&&(K=V+X-z-M,a=D.top-S-q),u=g-K,j=C-a,l=e(Math.sqrt(u*u+j*j)),c[l]=k,B.push(l),B.sort(function(B,u){return B-u});var W=B[0];if(H>W)return w._corner=o,p.add(F,c[W]),w.layoutPanels(R,o,c[W]),!0}};x("leftTop",W)||x("leftBottom",j)||x("rightTop",U)||x("rightBottom",u)}}}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);
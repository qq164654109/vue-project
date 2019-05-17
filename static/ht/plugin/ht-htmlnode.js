!function(X){"use strict";var I="ht",r=X[I],w=function(){return document},f=function(){return w().body},E=function(C,j,b){C.style.setProperty(j,b,null)},A=function(W){return w().createElement(W)},L=function(){return A("div")},v=function(){var i=A("canvas");return i},d=function(b,s){E(b,"-webkit-transform",s),E(b,"-ms-transform",s),E(b,"transform",s)},R=function(t,H){E(t,"-webkit-transform-origin",H),E(t,"-ms-transform-origin",H),E(t,"transform-origin",H)},M=function(h,$){h.appendChild($)},Z=function(B,S){B.removeChild(S)},T=X.parseInt,V=r.Default,S=V.eventListenerOptionsFalse,W=(V.eventListenerOptionsTrue,function(T,x,o,f){T.addEventListener(x,o,f?S:S)}),D=V.getInternal(),n=Math.PI,s="white-space",$="visibility",i="left",p="top",m="width",o="height",u="position",q="display",g="z-index",N="px",_="0 0",H="absolute",k="visible",a="hidden",y="none",j="block",b="nowrap",e="rgba(0, 0, 0, 0.005)";V.setImage("node_dragger","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAN9JREFUeNrsV9sNhDAMKyzQVdgARmGzrMJNUFZhAh6nfkVcG9PQgHSR8lEksJs6pnGuLCimSRzAa0yyBK9O4gy8GokU+O0kJOAwiQYg0LP1xNYDW3+0CfBYNb7VOuN4LAGpiOaYUhFDas9F2NPHDELNENJqaHgBgSQJ3ufakfQJqckERcOiK+Ae1FGWBNKGh9oX5WPpLpdNYfffijbsxTHh7VKP7388n1g1h7OKUoUuyGpJakQEuhwkZAKcDXVOdWcrOrL/feBVBHI/q8fcjE1nA9PpyHQ+NJ2Qi8A3AQYAOtS27fCoRY0AAAAASUVORK5CYII=");var t=r.graph.GraphView.prototype,F=t._42;t.adjustHtmlNodeIndex=!0,t._42=function(Z,R){if(F.call(this,Z,R),this.adjustHtmlNodeIndex)for(var u=this.getDataModel()._datas._as,w=u.length,v=1,H=0;w>H;H++){var X=u[H];if(X instanceof P){var m=this.getDataUI(X);E(m.$2f,g,v+""),E(m.$3f,g,v+1+""),v+=2}}};var U=r.HtmlNodeUI=function(d,D){var i=this;U.superClass.constructor.call(i,d,D);var h=i.$2f=L(),P=i.$3f=v();E(h,u,H),E(h,$,a),E(h,s,b),P.draggable=!1,E(P,u,H),E(P,q,y),R(P,_),W(h,"change",function(V){var x=V.target,q=x.bind||x.getAttribute("bind"),A=x.type&&"checkbox"===x.type?x.checked:x.value,u=D.getContext();q&&u&&(u[q]=A,i.$4f=JSON.stringify(u))}),["mousedown","touchstart","keydown","mousewheel","DOMMouseScroll"].forEach(function(I){W(h,I,this.$9f.bind(this))},i)};V.def(U,D.ui().NodeUI,{_visible:!0,$11f:function(){var N=this,y=N.$3f,K=N._data,o=K.getDraggerImageWidth(),$=K.getDraggerImageHeight(),d=K.getDraggerImage(),k=D.initContext(y);k.beginPath(),D.setCanvas(y,o,$),D.translateAndScale(k,0,0,1),k.clearRect(0,0,o,$),V.drawImage(k,V.getImage(d),0,0,o,$),k.restore()},_80o:function(D){U.superClass._80o.call(this,D);var Q=this,l=Q._data,O=l._padding,P=2*O,Y=Q.$2f,f=Q.$3f,x=Q.gv,J=x.getZoom(),R=x.getTranslateX(),G=x.getTranslateY(),A=x.getView(),b=Q._83o,t=l._width,_=l._height,X=b.position,r=b.rotation,v=(t-P)/l.$5f*J,W=(_-P)/l.$6f*J,K=Q._html,B=l._html,s=l.getHtmlType();if("html"===s){var Z=l.getContext()||{},z=Q.$4f,h=l.$10f,F=JSON.stringify(Z);K&&z&&K===B&&z===F||(Q.$4f=F,Q._html=B,Y.innerHTML=h?h(Z):B)}else if(null!=s){var C=l.getHtml();"ht"===s&&(C=C.getView()),K&&K===C&&Y.contains(K)||(Q._html=C,Y.innerHTML="",M(Y,C))}if(!Y.parentNode){var I=x.$1f;if(!I){var c=L();E(c,u,H),E(c,g,"0"),I=x.$1f=c;var w=x._canvas.nextSibling;w?A.insertBefore(c,w):M(A,c)}M(I,Y),M(I,f),l.onContentInitialized&&l.onContentInitialized(Y)}if(l._scalable){var S=l.$5f,V=l.$6f;d(Y,"rotate("+180*(r/n)+"deg) scale("+v+","+W+")"),E(Y,m,""),E(Y,o,""),E(Y,i,(X.x-S/J/2)*J+R+N),E(Y,p,(X.y-V/J/2)*J+G+N)}else{var nh=T(Y.style.width),Ur=T(Y.style.height),Yl=T((t-P)*J),fl=T((_-P)*J),Uq="100%",mj=Y.children[0];E(mj,m,Uq),E(mj,o,Uq),(nh!==Yl||Ur!==fl)&&(E(Y,m,Yl+N),E(Y,o,fl+N),"ht"===s&&B.invalidate()),d(Y,"rotate("+180*(r/n)+"deg)"),E(Y,i,(X.x-Yl/J/2)*J+R+N),E(Y,p,(X.y-fl/J/2)*J+G+N)}var op=Q.dragRect;x.isMovable(l)&&x.isSelected(l)&&op?(D.save(),D.fillStyle=e,D.fillRect(op.x,op.y,op.width,op.height),D.restore(),E(f,i,op.x*J+R+N),E(f,p,op.y*J+G+N),d(f,"scale("+J+","+J+")"),E(f,q,j),Q.$11f()):E(f,q,y),E(Y,$,this._visible?k:a)},dispose:function(){var m=this.gv.$1f;this.$2f.parentNode===m&&m.removeChild(this.$2f),this.$3f.parentNode===m&&m.removeChild(this.$3f)},_84o:function(M){this._visible=M,E(this.$2f,$,M?k:a),E(this.$3f,q,M?j:y)},_3O:function(){var b=this,a=b.gv,N=b._data;U.superClass._3O.call(b);var s=N.getRect();a.isEditable(N)&&(b.dragRect={x:s.x+s.width+N._padding,y:s.y+10,width:N.getDraggerImageWidth(),height:N.getDraggerImageHeight()},b._68o(b.dragRect))},rectIntersects:function(A){var _=this._79o();return r.Default.intersection(_,A)?!0:void 0},$9f:function(m){var n=this.gv,N=this._data;n.sm().contains(N)&&m.stopPropagation()}});var P=r.HtmlNode=function(){P.superClass.constructor.call(this)};r.Default.def(P,r.Node,{ms_ac:["html","context","scalable","padding","draggerImage","draggerImageWidth","draggerImageHeight"],_padding:r.Default.isTouchable?12:6,_image:null,_scalable:!0,_draggerImage:"node_dragger",_draggerImageWidth:20,_draggerImageHeight:20,setHtml:function(S){var Q=this,k=Q._html;Q._html=S,"html"===Q.getHtmlType()&&"Handlebars"in X&&(Q.$10f=Handlebars.compile(S)),Q.$13f(),Q.fp("html",k,S)},setContext:function(g){var m=this,H=m._context;m._context=g,m.fp("context",H,g),m.$13f()},setScalable:function(y){var B=this,l=B._scalable;B._scalable=y,B.fp("scalable",l,y),B.$13f()},getHtmlType:function(){var v=this._html;return v?"string"==typeof v?"html":v.getView?"ht":"dom":null},$13f:function(){var v=this,Q=v._html,t=v.$10f;if(Q){var e=L(),C=!1,g=v.getHtmlType();if(E(e,u,H),E(e,s,b),E(e,$,a),"html"===g?(e.innerHTML=t?t(v.getContext()||{}):Q,C=!0):"ht"===g?(M(e,Q.getView()),C=!0):"dom"===g&&(M(e,Q),C=!0),C){var x=2*v._padding;M(f(),e),v.$5f=e.scrollWidth,v.$6f=e.scrollHeight,v._width=v.$5f+x,v._height=v.$6f+x,v._originWidth=v._width,v._originHeight=v._height,Z(f(),e)}}},getUIClass:function(){return r.HtmlNodeUI}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);
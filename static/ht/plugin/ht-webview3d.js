!function(G){"use strict";function g(E){var $,U,B,I,Y,K,_,H=[],w=0;$=i.createDiv(),$.style.overflow="hidden";var j=E.getView();j.insertBefore($,E.getCanvas()),U=f.Default.createDiv(),U.style.WebkitTransformStyle="preserve-3d",U.style.MozTransformStyle="preserve-3d",U.style.transformStyle="preserve-3d",$.appendChild(U),[{event:"mousedown",style:"none"},{event:"mouseup",style:"auto"},{event:"touchstart",style:"none"},{event:"touchend",style:"auto"}].forEach(function(Z){var C=Z.style;j.addEventListener(Z.event,function(){$.style.pointerEvents=C})}),this.updateWebView=function(){var q=E.getCanvas(),L=1*q.style.width.slice(0,-2),Q=1*q.style.height.slice(0,-2);(H[0]!==L||H[1]!==Q)&&(H[0]=L,H[1]=Q,$.style.width=L+"px",$.style.height=Q+"px",U.style.width=L+"px",U.style.height=Q+"px");var b=E._projectMatrix[5]*H[1]/2;b!==B&&(B=b,$.style.WebkitPerspective=B+"px",$.style.MozPerspective=B+"px",$.style.perspective=B+"px"),K="translateZ("+B+"px)"+C(E._viewMatrix);var X=K+"translate("+H[0]/2+"px,"+H[1]/2+"px)";I===X||Y||(U.style.WebkitTransform=X,U.style.MozTransform=X,U.style.transform=X,I=X),w++,_=!1,E.dm().each(function(y){y.isWebView&&F(y)});for(var W,a=U.children,i=[],k=0,M=a.length;M>k;k++)W=a[k],W._isHtWebView&&W._renderCookie!==w&&i.push(W);i.length&&i.forEach(function(u){U.removeChild(u)})};var p=new Array(16),F=function(J){var s=J.getAttach();if(s){s.parentElement!==U&&U.appendChild(s),s._renderCookie=w,_=!0;var y=J.getFinalScale3d(),a=J._prefrenceSize;a&&a[0]?a[1]||(a[1]=a[0]/y[0]*y[1]):a=[y[0],y[1]],s.style.width=a[0]+"px",s.style.height=a[1]+"px";var c=1/a[0],o=1/a[1],N=1,T=J.mat;p[0]=T[0]*c,p[1]=T[1]*c,p[2]=T[2]*c,p[3]=T[3]*c,p[4]=T[4]*o,p[5]=T[5]*o,p[6]=T[6]*o,p[7]=T[7]*o,p[8]=T[8]*N,p[9]=T[9]*N,p[10]=T[10]*N,p[11]=T[11]*N,p[12]=T[12],p[13]=T[13],p[14]=T[14],p[15]=T[15];var z=d(p,Y?"translate("+H[0]/2+"px,"+H[1]/2+"px)"+K:""),G=s.$a2;G!==z&&(s.$a2=z,s.style.WebkitTransform=z,s.style.MozTransform=z,s.style.transform=z)}}}function s(S){return Math.abs(S)<1e-10?0:S}function C(L){var A=L;return"matrix3d("+s(A[0])+","+s(-A[1])+","+s(A[2])+","+s(A[3])+","+s(A[4])+","+s(-A[5])+","+s(A[6])+","+s(A[7])+","+s(A[8])+","+s(-A[9])+","+s(A[10])+","+s(A[11])+","+s(A[12])+","+s(-A[13])+","+s(A[14])+","+s(A[15])+")"}function d(u,M){var f=u,$="matrix3d("+s(f[0])+","+s(f[1])+","+s(f[2])+","+s(f[3])+","+s(-f[4])+","+s(-f[5])+","+s(-f[6])+","+s(-f[7])+","+s(f[8])+","+s(f[9])+","+s(f[10])+","+s(f[11])+","+s(f[12])+","+s(f[13])+","+s(f[14])+","+s(f[15])+")";return"translate(-50%,-50%)"+(M||"")+$}var M="ht",f=G[M],i=f.Default,I=i.getInternal(),l=I.superCall,Q=f.graph3d.Graph3dView,H=Q.prototype.validateImpl;Q.prototype.validateImpl=function(){H.call(this);var V=this._webViewRenderer;V||(V=this._webViewRenderer=new g(this)),V.updateWebView()};var _=f.WebView3d=function(){var N=this;l(_,N),N.s({shape3d:"billboard","shape3d.reverse.flip":!0})},P=[1,1,1,1],p=[0,0,0,0];i.def(M+"."+"WebView3d",f.Node,{ms_ac:["attach"],isWebView:!0,attachDOM:function(q,B,s){if(!q)return this.detachDOM();if("string"==typeof q){var e=document.createElement("iframe");e.src=q,q=e}var I=q.style;I.position="absolute",I.border=0,I.outline=0,I.padding=0,I.margin=0,q._isHtWebView=!0,this.setAttach(q),this._prefrenceSize=[B,s],this.s("shape3d.blend",p)},detachDOM:function(){this.setAttach(null),this.s("shape3d.blend",this.getBgColor())},setBgColor:function(M){this.a("defaultBgColor",M),this.getAttach()||this.s("shape3d.blend",M)},getBgColor:function(){return this.a("defaultBgColor")||P}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);
!function(t,s,K){"use strict";var _="ht",n=t[_],v=null,V=Math,X=V.abs,f=V.max,J=Number.MAX_VALUE,H=n.Default,M=H.getInternal(),u=H.clone,q=M.vec3TransformMat4,G=M.appendArray,R=function(){var i=/v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,n=/vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,D=/vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,$=function(z,o){return o=parseInt(o),o>=0?z[o-1]:z[o+z.length]},s=function(j,Z,n,z,t,X){if(j.vs){var y=$(Z,z),s=$(Z,t),C=$(Z,X),w=n.matrix,x=j.vs;if(n.flipFace){var I=s;s=C,C=I}w?(G(x,q(u(y),w)),G(x,q(u(s),w)),G(x,q(u(C),w))):(G(x,y),G(x,s),G(x,C))}},Y=function(E,z,f,d,m,T){if(E.vs){var o=$(z,d),H=$(z,m),j=$(z,T),c=f.flipY;if(f.flipFace){var l=H;H=j,j=l}E.uv.push(o[0],c?1-o[1]:o[1],H[0],c?1-H[1]:H[1],j[0],c?1-j[1]:j[1])}},F=function(y,Z,P,Q,p,Y){if(y.vs){var w=$(Z,Q),K=$(Z,p),m=$(Z,Y),d=P.normalMatrix,t=y.ns;if(P.flipFace){var T=K;K=m,m=T}d?(G(t,q(u(w),d)),G(t,q(u(K),d)),G(t,q(u(m),d))):(G(t,w),G(t,K),G(t,m))}},j=function(R,n,W,M,t,I,U,r){var z=M&&M.length&&r;I[3]===K?(s(R,n,t,I[0],I[1],I[2]),U&&Y(R,W,t,U[0],U[1],U[2]),z&&F(R,M,t,r[0],r[1],r[2])):(s(R,n,t,I[0],I[1],I[3]),s(R,n,t,I[1],I[2],I[3]),U&&(Y(R,W,t,U[0],U[1],U[3]),Y(R,W,t,U[1],U[2],U[3])),z&&(F(R,M,t,r[0],r[1],r[3]),F(R,M,t,r[1],r[2],r[3])))},z=function(S,q,$,P){var W,R,B,j,H,u,I,N=J,O=J,m=J,y=-J,Z=-J,G=-J;for(W in S)for(u=S[W].vs,I=u.length,R=0;I>R;R+=3)B=u[R+0],j=u[R+1],H=u[R+2],N>B&&(N=B),O>j&&(O=j),m>H&&(m=H),B>y&&(y=B),j>Z&&(Z=j),H>G&&(G=H);if($){var c=N+(y-N)/2,F=O+(Z-O)/2,b=m+(G-m)/2;for(W in S)for(u=S[W].vs,I=u.length,R=0;I>R;R+=3)u[R+0]-=c,u[R+1]-=F,u[R+2]-=b}var Y,x,M;$?(Y=y-N,x=Z-O,M=G-m):(Y=2*f(X(N),X(y)),x=2*f(X(O),X(Z)),M=2*f(X(m),X(G))),0===Y&&(Y=Math.min(x,M)/1e3||.001),0===x&&(x=Math.min(Y,M)/1e3||.001),0===M&&(M=Math.min(Y,x)/1e3||.001),P.rawS3=[Y,x,M];for(W in S){if(u=S[W].vs,q)for(I=u.length,R=0;I>R;R+=3)Y&&(u[R+0]/=Y),x&&(u[R+1]/=x),M&&(u[R+2]/=M);S[W].rawS3=P.rawS3}};return function(u,k,b){if(!u)return v;(M.isString(k)||k instanceof ArrayBuffer)&&(k=N(k)),b||(b={}),b.flipY==v&&(b.flipY=!0),(b.s3||b.r3||b.t3||b.mat)&&(b.matrix=M.createWorldMatrix(b.mat,b.s3,b.r3,b.rotationMode,b.t3));var G,r,t,_,h,c,U=[],e=[],R=b.ignoreNormal?v:[],T=b.reverseFlipMtls,B={vs:[],uv:[],ns:R?[]:v},w={htdefault:B},S=new o(u);for(R&&b.matrix&&(b.normalMatrix=M.createNormalMatrix(b.matrix));null!=(r=S.stepNext());)if(r=r.trim(),0!==r.length&&"#"!==r.charAt(0))if(r.indexOf("#QNAN0")>=0&&(r=r.replace(/#QNAN0/gi,"0")),t=i.exec(r))U.push([parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])]);else if(t=n.exec(r))e.push([parseFloat(t[1]),parseFloat(t[2])]);else if(R&&(t=D.exec(r)))b.flipFace?R.push([parseFloat(-t[1]),parseFloat(-t[2]),parseFloat(-t[3])]):R.push([parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])]);else if("f"===r[0]){var P=r.split(/\s+/);if(P.length<4)continue;var Z,G,d,C=[],a=[],J=[];for(G=1,d=P.length;d>G;G++)Z=P[G].split("/"),C.push(parseInt(Z[0],10)),Z.length>1&&Z[1].length>0&&J.push(parseInt(Z[1],10)),Z.length>2&&Z[2].length>0&&a.push(parseInt(Z[2],10));for(G=0,d=C.length-2;d>G;G++)j(B,U,e,R,b,[C[0],C[G+1],C[G+2]],J.length?[J[0],J[G+1],J[G+2]]:v,a.length?[a[0],a[G+1],a[G+2]]:v)}else if(/^usemtl /.test(r)&&(_=r.substring(7).trim(),!(B=w[_]))){if(B={name:_,vs:[],uv:[],ns:R?[]:v},b.ignoreMtls&&b.ignoreMtls.indexOf(_)>=0&&delete B.vs,(b.reverseFlip||"*"===T||T&&T.indexOf(_)>=0)&&(B.reverseFlip=!0),k&&(h=k[_],h&&(b.ignoreColor||(B.color=h.kd),!b.ignoreTransparent&&h.d>0&&h.d<1&&(B.transparent=!0,B.opacity=h.d),!b.ignoreImage&&(c=h.map_kd)))){c=c.split(" ");var A=-1;for(G=0;G<c.length;G++)"-o"===c[G]?(B.uvOffset=[parseFloat(c[G+1]),parseFloat(c[G+2])],G+=3,A=G):"-s"===c[G]&&(B.uvScale=[parseFloat(c[G+1]),parseFloat(c[G+2])],G+=3,A=G);B.image=(b.prefix||"")+c.splice(A+1).join(" ")}w[_]=B}var p=[];for(var F in w){var K=w[F].vs;K&&0!==K.length||p.push(F)}p.forEach(function(B){delete w[B]}),z(w,b.cube,b.center,b);var W=b.shape3d;if(W){var s=[];for(var _ in w){var B=w[_];s.rawS3=B.rawS3,s.push(B)}H.setShape3dModel(W,s)}return w}}(),N=function(T){var K={};if(T)for(var d,q,u,k,p,x,y=new o(T),O=/\s+/;null!=(q=y.stepNext());)q=q.trim(),0!==q.length&&"#"!==q.charAt(0)&&(u=q.indexOf(" "),k=(u?q.substring(0,u):q).toLowerCase(),p=(u?q.substring(u+1):"").trim(),"newmtl"===k?K[p]=d={name:p}:d&&("ka"===k||"kd"===k||"ks"===k?(x=p.split(O,3),d[k]=[parseFloat(x[0]),parseFloat(x[1]),parseFloat(x[2]),1]):d[k]="ns"===k||"d"===k?parseFloat(p):p));return K},o=function(Z){var f=this;if(Z instanceof ArrayBuffer){f.isBuffer=!0;var X=0,n=new Uint8Array(Z),S=n.length,x=n.length;f.stepNext=function(){for(var w,c,R=X;S>X;)if(w=n[X],c=w>>4,12===c||13==c)X+=2;else if(14===c)X+=3;else if(X++,10===w)return String.fromCharCode.apply(null,n.subarray(R,X));return X>R?String.fromCharCode.apply(null,n.subarray(R,X)):null}}else{f.isBuffer=!1;var b=Z.split("\n"),l=0,x=b.length;f.stepNext=function(){return x>l?b[l++]:null}}};o.prototype={},o.prototype.constructor=o,M.addMethod(H,{loadObj:function(d,U,m){m=m||{};var P=!1;/(MSIE |Trident\/|Edge\/)/.test(t.navigator.userAgent)&&(P=!0);var i=function(y){var P,g=m.finishFunc,i=m.shape3d,$=y?R(y[0],y[1],m):null;if($){if(i)P=H.getShape3dModel(i);else{P=[];for(var K in $){var h=$[K];P.rawS3=h.rawS3,P.push(h)}}g&&g($,P,P.rawS3)}else g&&g(null)};if(P){var F=function(I){m.responseType="arraybuffer",H.xhrLoad(d,function($){i([$,I])},m)};U?H.xhrLoad(U,function(r){F(r)},m):F()}else H.xhrLoad(U?[d,U]:[d],i,m)},parseObj:function(V,W,A){return R(V,W,A)}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);
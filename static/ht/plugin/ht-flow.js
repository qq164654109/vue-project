!function(w){"use strict";var o=w.ht,T=o.Default,J=T.getInternal(),g=J.ui(),M=null,j="__segmentLengths",P="__lineTotalLength",d="__linePoints",l="__distance0",A="flow.count",F="flow.step",f="flow.element.max",O="flow.element.count",c="flow.element.min",s="flow.element.space",Y="flow.element.autorotate",W="flow.element.background",q="flow.element.shadow.max",Z="flow.element.shadow.min",D="flow.element.shadow.begincolor",X="flow.element.shadow.endcolor",K="flow.element.shadow.visible",h="flow.element.image",b="flow",v=o.Math.Vector2,t=new v;new v,new v;var R=o.List,n=function(Z,p,q,H,u,r){var X,o,_,l,Y,f,O,g,m,I,Q,C=[];if(Math.abs(H)>2*Math.PI&&(H=2*Math.PI),Y=Math.ceil(Math.abs(H)/(Math.PI/4)),X=H/Y,o=-X,_=-q,Y>0){f=Z+Math.cos(q)*u,O=p+Math.sin(-q)*r,C.push({x:f,y:O});for(var B=0;Y>B;B++)_+=o,l=_-o/2,g=Z+Math.cos(_)*u,m=p+Math.sin(_)*r,I=Z+Math.cos(l)*(u/Math.cos(o/2)),Q=p+Math.sin(l)*(r/Math.cos(o/2)),C.push({x:I,y:Q}),C.push({x:g,y:m})}return C},i=function(N){if(N){var T=N._data;if(T instanceof o.Shape)return{points:T.getPoints(),segments:T.getSegments()};var F;if(T instanceof o.Edge&&(F=N._78o)){var H,s,e=F.type,L=F.points,K=F.segments,x=F.edgeTypeInfo;if(!e||L){var z=F.sourcePoint,p=z.x,G=z.y,v=F.targetPoint,m=v.x,S=v.y;if(e)K?(H=new R({x:p,y:G}),H.addAll(L),H.add({x:m,y:S}),s=new R(K._as)):(H=new R({x:p,y:G}),L.each(function(O){H.add(O)}),H.add({x:m,y:S}));else if(F.looped){H=new R(n(p,G,0,2*Math.PI,F.radius,F.radius)),s=new R([1]);for(var g=0;g<(H.size()-1)/2;g++)s.add(3)}else H=new R,F.center?(H.add({x:F.c1.x,y:F.c1.y}),H.add({x:p,y:G}),H.add({x:m,y:S}),H.add({x:F.c2.x,y:F.c2.y})):(H.add({x:p,y:G}),H.add({x:m,y:S}))}else x&&(H=new R(x.points._as),x.segments&&(s=new R(x.segments._as)));return{points:H,segments:s}}}},z=function(k,X,Y){if(null==X){var w=i(k);if(!w)return;X=w.points,Y=w.segments}if(X){if(Array.isArray(X)&&(X=new R(X)),"number"==typeof X.get(0)){for(var h=new o.List,n=0;n<X.size();n+=2)h.add({x:X.get(n),y:X.get(n+1)});X=h}if(!Y){Y=[1];for(var U=X.length-1;U>0;U--)Y.push(2)}Array.isArray(Y)&&(Y=new R(Y));for(var r=J.toPointsArray(X._as,Y._as,50),v=r.length,l=[],n=0;v>n;n++){var b=r[n];b.length>1&&l.push(b)}return l}},G=function(K,u){for(var V=[],R=K.length,$=0;R>$;$++){var D=K[$];D._as&&(D=D._as);for(var m=D[0],r=1;r<D.length;r++)V.push([m,D[r]]),m=D[r]}for(var I=[],$=0;$<V.length;$++){var C=N(V[$][0],V[$][1],u);I.push(C)}return{distance:I,segments:V}},r=function(E,s,y){if(E){for(var X,O=G(E,s),B=O.distance,n=O.segments,F=1/0,o=null,I=0,c=B.length;c>I;I++){var x=B[I];x.z<F&&(X=I,F=x.z,o=x)}if(null==y&&(y=.1),o.z<y){for(var C=0,i=0;X>=i;i++)C+=T.getDistance(n[i][0],X>i?n[i][1]:o);return C}}},N=function(b,u,n){var t=b.x,s=b.y,Y=u.x,w=u.y,N=n.x,z=n.y,Q=Y-t,E=w-s,J=Math.sqrt(Q*Q+E*E),q=Q/J,S=E/J,M=(-t+N)*q+(-s+z)*S,T={x:t+M*q,y:s+M*S};return T.x>=Math.min(b.x,u.x)&&T.x<=Math.max(b.x,u.x)&&T.y>=Math.min(b.y,u.y)&&T.y<=Math.max(b.y,u.y)||(T.x=Math.abs(T.x-b.x)<Math.abs(T.x-u.x)?b.x:u.x,T.y=Math.abs(T.y-b.y)<Math.abs(T.y-u.y)?b.y:u.y),Q=N-T.x,E=z-T.y,T.z=Math.sqrt(Q*Q+E*E),T},I=function(S,t){if(S){var J=G(S,t).distance,j=1/0,I=null;return J.forEach(function(k){k.z<j&&(j=k.z,I=k)}),I}},B=function(e){for(var F=0,R=e.length-1,r=0;R>r;r++){var J=e[r],n=e[r+1],S=n.x-J.x,B=n.y-J.y;F+=Math.sqrt(S*S+B*B)}return F},p=function(o,Y){for(var p=0,K=Y.length,w=0;K>w;w++){var Z=Y[w];if(p+=Z,p>o)return w}return Math.min(w,K-1)},E=function(R,y){for(var B=0,i=0,N=0,V=R.length-1,W=0;V>W;W++){var S=R[W],F=R[W+1],n=F.x-S.x,u=F.y-S.y;if(N=Math.sqrt(n*n+u*u),B+=N,B>y){B-=N,i=W;break}}var g=R[i],w=R[i+1],r=Math.atan2(w.y-g.y,w.x-g.x),E=y-B,u=Math.sin(r)*E,n=Math.cos(r)*E;return{x:g.x+n,y:g.y+u}},_=function(e,L,S){if(!e)return S;if(0===L){var b=e[0][0],h=e[0][1];return S+Math.atan2(h.y-b.y,h.x-b.x)}if(100===L){e=e[e.length-1];var b=e[e.length-2],h=e[e.length-1];return S+Math.atan2(h.y-b.y,h.x-b.x)}for(var Z=0,l=[],G=e.length,D=0;G>D;D++){var W=e[D],M=B(W);Z+=M,l.push(M)}for(var r=Z*L/100,q=p(r,l),A=0,t=0;q>t;t++)A+=l[t];r-=A;for(var d=E(e[q],r),f=e[q],o=0,u=0,m=0;m<f.length-1;m++){var X=f[m],T=f[m+1],J=T.x-X.x,Q=T.y-X.y,Y=Math.sqrt(J*J+Q*Q);if(o+=Y,o>r){u=m;break}}var N=f[u];return S+Math.atan2(d.y-N.y,d.x-N.x)},k=function(d){var c=0;if(d)if(Array.isArray(d[0]))for(var t=d.length,m=0;t>m;m++){var K=d[m],j=B(K);c+=j}else c=B(d);return c},U=function(D,J,h,j){return t.set(J,h).rotateAround(null,j),D?{x:D.x+t.x,y:D.y+t.y}:{x:t.x,y:t.y}},x=function(Z){var q=Z._data,r=z(Z);if(r){q.s("flow.reverse")&&(r.reverse(),r.forEach(function(Y){Y.reverse()}));for(var s=0,y=[],V=r.length,i=0;V>i;i++){var $=r[i],I=B($);s+=I,y.push(I)}if(q[j]=y,q[P]=s,q[d]=r,q instanceof o.Edge){var w=T.unionPoint(r),K=w.x+w.width/2,e=w.y+w.height/2;q.$10e={x:K,y:e}}u(Z,!0)}},a=function(z,Z){if(z){var Q;if(0===Z)Q=z[0][0];else if(100===Z)z=z[z.length-1],Q=z[z.length-1];else{for(var i=0,X=[],I=z.length,P=0;I>P;P++){var g=z[P],G=B(g);i+=G,X.push(G)}for(var F=i*Z/100,q=p(F,X),k=0,$=0;q>$;$++)k+=X[$];F-=k,Q=E(z[q],F)}return Q}},u=function(q,T){var $=q._data,b=$[P],h=$.s(A),I=$.s(F),D=0,V=$[j],N=$.s(f),H=$.s(c),r=$.s(O),u=(N-H)/(r-1),m=[];if(V){if(1===r)m.push(N);else if(2===r)m.push(N),m.push(H);else{if(!(r>2))return;m.push(N);for(var n=r-2;n>0;n--)m.push(H+u*n);m.push(H)}var X=0,d=0;m.forEach(function(h){r-1>X&&(d+=$.getFlowElementSpace(h)),X++}),d+=(N+H)/2,D=(b-h*d+d)/h;var Q=q[l];for(null==Q&&(Q=0),T||(Q+=I);Q>b+d;){var R=q._overCount;R?R++:R=1,R>=h&&(R=null),q._overCount=R,$.s("flow.autoreverse")?R?Q-=D+d:(Q=0,$.s("flow.reverse",!$.s("flow.reverse"))):Q-=D+d}q[l]=Q}},L="prototype",$=o.graph.GraphView[L],H=o.Data[L],m=g.DataUI[L],S=g.ShapeUI[L],y=g.EdgeUI[L],Q=o.DataModel[L],V=o.Style;V[f]==M&&(V[f]=7),V[c]==M&&(V[c]=0),V[A]==M&&(V[A]=1),V[F]==M&&(V[F]=3),V[O]==M&&(V[O]=10),V[s]==M&&(V[s]=3.5),V[Y]==M&&(V[Y]=!1),V[W]==M&&(V[W]="rgba(255, 255, 114, 0.4)"),V[D]==M&&(V[D]="rgba(255, 255, 0, 0.3)"),V[X]==M&&(V[X]="rgba(255, 255, 0, 0)"),V[K]==M&&(V[K]=1),V[q]==M&&(V[q]=22),V[Z]==M&&(V[Z]=4),$.calculatePointLength=function($,B,g){var c=this.getDataUI($),x=z(c);return r(x,B,g)},T.calculatePointLength=function(c,w,q,H){var _=z(M,c,w);return r(_,q,H)},T.calculateClosestPointOnLine=N,$.calculateClosestPoint=function(e,l){var V=this.getDataUI(e),g=z(V);return I(g,l)},T.calculateClosestPoint=function(W,K,i){var g=z(M,W,K);return I(g,i)},$.getPercentAngle=function(N,n){var g=this.getDataUI(N),i=z(g);return N.getRotation?N.getRotation():0,_(i,n,N.getRotation?N.getRotation():0)},T.getPercentAngle=function(K,s,D){var b=z(M,K,s);return _(b,D,0)},$.calculateLength=function(s){var R=this.getDataUI(s),O=z(R);return k(O)},T.calculateLength=function(o,t){var N=z(M,o,t);return k(N)},$.getPercentPosition=function(B,W){var r=this.getDataUI(B),G=z(r);return a(G,W)},T.getPercentPositionOnPoints=function(o,_,S){var r=z(M,o,_);return a(r,S)};var e=function(o){var u=o.data,S=this.dm();if(u&&"add"===o.kind){var R=S.$3e;R&&u.s(b)&&R.indexOf(u)<0&&R.push(u)}"clear"===o.kind&&(S.$3e=[])},C=function(y){var b=y.property,W=y.data,o=y.newValue,z=this.dm().$3e;if(z&&"s:flow"===b)if(o)z.indexOf(W)<0&&z.push(W);else for(var V=z.length,J=0;V>J;J++)if(z[J]===W){z.splice(J,1);break}},Oo=$.setDataModel;$.setDataModel=function(m){var y=this,v=y._dataModel;if(v!==m){v&&(v.umm(e,y),v.umd(C,y),v.$3e=[]),m.mm(e,y),m.md(C,y);var g=m.$3e=[];m.each(function(m){m.s(b)&&g.indexOf(m)<0&&g.push(m)}),Oo.call(y,m)}},H.getFlowElementSpace=function(){return this.s(s)};var cq=function(y){var i=this,N=i._data,s=N[P],o=N[j],e=N[d],D=N.s(A),a=0,w=i[l],b=N.s(f),H=N.s(c),B=N.s(O),X=N.s(Z),m=N.s(q),r=N.s(Y),$=(m-X)/(B-1),L=(b-H)/(B-1),g=N.getRotation?N.getRotation():0,t=N.getPosition?N.p():N.$10e,u=[],F=[];if(w!=M){if(1===B)u.push(b);else if(2===B)u.push(b),u.push(H);else{if(!(B>2))return;u.push(b);for(var C=B-2;C>0;C--)u.push(H+L*C);u.push(H)}if(1===B)F.push(m);else if(2===B)F.push(m),F.push(X);else{if(!(B>2))return;F.push(m);for(var C=B-2;C>0;C--)F.push(X+$*C);F.push(X)}var G=0,k=0;u.forEach(function(V){B-1>G&&(k+=N.getFlowElementSpace(V)),G++}),k+=(b+H)/2,a=(s-D*k+k)/D,y.save();for(var C=0;D>C;C++){var Q=w,S=0,I=i._overCount,_=0;N.s("flow.autoreverse")&&I&&I>D-(C+1)||(Q-=C*(a+k),G=0,u.forEach(function(X){var H=Q-S;if(H>=0&&s>H){var Y=!0,v=p(H,o);_=0;for(var j=0;v>j;j++)_+=o[j];if(H-=_,Y){var m=E(e[v],H),f=g;if(r){for(var M=e[v],V=0,R=0,d=0;d<M.length-1;d++){var D=M[d],L=M[d+1],b=L.x-D.x,x=L.y-D.y,$=Math.sqrt(b*b+x*x);if(V+=$,V>H){R=d;break}}var A=M[R];f+=Math.atan2(m.y-A.y,m.x-A.x)}g&&(m=U(t,m.x-t.x,m.y-t.y,g)),i.$5e(y,m,X,F[G],f)}}S+=N.getFlowElementSpace(u[G]),G++}))}y.restore()}},lc=y._80o;y._80o=function(n){lc.call(this,n);var W=this,t=W._data,i=W.gv;t.s(b)&&i.$7e!=M&&cq.call(W,n)};var xh=S._80o;S._80o=function(B){xh.call(this,B);var _=this,e=_._data,W=_.gv;e.s(b)&&W.$7e!=M&&cq.call(_,B)};var ni=y._79o,qb=S._79o,Jg=function(){var _=this,E=_._data,Q=E.s(f),D=!1,n=M;if(_._6I||(D=!0),n=E instanceof o.Edge?ni.call(_):qb.call(_),E.s(b)&&D){var z=E.s(q),g=E.s(K);g&&z>Q&&(Q=z),Q>0&&T.grow(n,Math.ceil(Q/2)),x(_)}return!E.s(b)&&D&&(E[j]=E[P]=E[d]=_[l]=M),n};S._79o=Jg,y._79o=Jg,m.$5e=function(i,Y,g,Q,t){var O=this,G=O._data,p=O.gv,z=G.s(W),I=G.s(D),S=G.s(X),H=G.s(K),f=p.$8e,d=G.s(h);if(f==M&&(f=p.$8e={}),i.beginPath(),d!=M){var v=T.getImage(d),b=g/2;i.translate(Y.x,Y.y),i.rotate(t),i.translate(-Y.x,-Y.y),T.drawImage(i,v,Y.x-b,Y.y-b,g,g,G),i.translate(Y.x,Y.y),i.rotate(-t),i.translate(-Y.x,-Y.y)}else if(p.__flowBatch){var u=p.__flowBatchGroup;u||(u=p.__flowBatchGroup={});var V=[Y.x,Y.y,g/2];u[z]?u[z].push(V):u[z]=[V]}else i.fillStyle=z,i.arc(Y.x,Y.y,g/2,0,2*Math.PI,!0),i.fill();if(H){var s=22,q=s+"_"+I+"_"+S,o=f[q];if(o==M){var C=document.createElement("canvas");J.setCanvas(C,s,s);var e=C.getContext("2d"),L=s/2,j=L,$=L;J.translateAndScale(e,0,0,1),e.beginPath();var Z=e.createRadialGradient(j,$,0,j,j,L);Z.addColorStop(0,I),Z.addColorStop(1,S),e.fillStyle=Z,e.arc(j,$,L,0,2*Math.PI,!0),e.fill(),o=f[q]=C}var b=Q/2;T.drawImage(i,o,Y.x-b,Y.y-b,Q,Q,G)}},$.$9e=function(){var F=this,t=F.dm().$3e;F._24I,t.forEach(function(q){F._24I[q._id]=q}),F.iv()};var Mp=Q.prepareRemove;Q.prepareRemove=function(J){Mp.call(this,J);var x=J._dataModel,F=x.$3e;if(F)for(var $=F.length,k=0;$>k;k++)if(F[k]===J){F.splice(k,1);break}},$.setFlowInterval=function(E){var u=this,S=u.$11e;u.$11e=E,u.fp("flowInterval",S,E),u.$7e!=M&&(clearInterval(u.$7e),delete u.$7e,u.enableFlow(E))},$.getFlowInterval=function(){return this.$11e},$.enableFlow=function(f){var g=this,P=g.dm(),K=P.$3e;g.$7e==M&&(K.forEach(function(p){var t=g.getDataUI(p);x(t)}),g.$7e=setInterval(function(){P.$3e.forEach(function(O){u(g.getDataUI(O))}),g.$9e()},f||g.$11e||50))},$.disableFlow=function(){var $=this;clearInterval($.$7e),delete $.$7e;var g=$.dm().$3e;g&&$.$9e()};var Oi=function(){this.__flowBatchGroup={}},jg=function(q){var n=this.__flowBatchGroup;if(n){q.save();for(var Y in n){q.fillStyle=Y,q.beginPath();var X=n[Y];X.forEach(function(o){q.moveTo(o[0],o[1]),q.arc(o[0],o[1],o[2],0,2*Math.PI,!0)}),q.fill()}q.restore()}};$.setFlowBatch=function(P){var s=this;!!s.__flowBatch!=!!P&&(s.__flowBatch=P,P?(s.addBottomPainter(Oi),s.addTopPainter(jg)):(s.removeBottomPainter(Oi),s.removeTopPainter(jg)))}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);
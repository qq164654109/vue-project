!function(m,z,I){"use strict";var j=ht.LiveNode=function(){j.superClass.constructor.apply(this)};ht.Default.def("ht.LiveNode",ht.Node,{_width:100,_height:35,_image:null,_enabled:!0,_editable:!0,_hover:!1,_pressed:!1,isEnabled:function(){return this._enabled},setEnabled:function(N){var A=this._enabled;this._enabled=N,this.fp("enabled",A,N)},isEditable:function(){return this._enabled},setEditable:function(n){var Y=this._editable;this._editable=n,this.fp("editable",Y,n)},isHover:function(){return this._hover},setHover:function(A){var h=this._hover;this._hover=A,this.fp("hover",h,A)},isPressed:function(){return this._pressed},setPressed:function(M){var C=this._pressed;this._pressed=M,this.fp("pressed",C,M)},getBackground:function(){var J,h,r=this;return J=r._enabled?r._pressed?"live.background.active":r._hover?"live.background.hover":"live.background":"live.background.disabled",h=r.s(J),h?h:r.s("live.background")},getForeground:function(){var X,t,J=this;return X=J._enabled?J._pressed?"live.label.active":J._hover?"live.label.hover":"live.label.color":"live.label.disabled",t=J.s(X),t?t:J.s("live.label.color")},setRotation:null,getUIClass:function(){return ht.graph.LiveNodeUI}});var x=ht.graph.LiveNodeUI=function(){x.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.LiveNodeUI",ht.Default.getInternal().ui().NodeUI,{freeDraw:function(p,z){var T=this,G=T._data,Q=ht.Default.getImage(G._image);ht.Default.drawImage(p,Q,z.x,z.y,z.width,z.height,G,T.gv)},onKeyDown:function(p){var i=this,W=i._data;return 32===p.keyCode||13===p.keyCode?(W.setPressed(!0),!0):void 0},onKeyUp:function(b){var O=this._data;(32===b.keyCode||13===b.keyCode)&&(O.setPressed(!1),O.onClicked&&O.onClicked(b))},onMouseOver:function(){this._data.setHover(!0)},onMouseOut:function(){this._data.setHover(!1)},onMouseDown:function(){this._data.setPressed(!0)},onMouseMove:function(){},onMouseUp:function(q){var v=this._data;v.setPressed(!1),v.onClicked&&v.onClicked(q)}});var t=ht.ButtonNode=function(){t.superClass.constructor.apply(this)};ht.Default.def("ht.ButtonNode",ht.LiveNode,{_image:"button_image"}),ht.Default.setImage("button_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},gradient:{func:"style@live.gradient"},gradientColor:{func:"style@live.gradient.color"},background:{func:"getBackground"},rect:[0,0,1,1],relative:!0},{type:"text",text:{func:"style@live.label"},align:{func:"style@live.label.align"},color:{func:"getForeground"},font:{func:"style@live.label.font"},rect:[0,0,1,1],relative:!0,offsetX:{func:"style@live.label.offset.x"},offsetY:{func:"style@live.label.offset.y"}}]});var a=ht.ToggleButtonNode=function(){a.superClass.constructor.apply(this)};ht.Default.def("ht.ToggleButtonNode",ht.ButtonNode,{_selected:!1,getUIClass:function(){return ht.graph.ToggleButtonNodeUI},getBackground:function(){var E,u,e=this;return e._enabled?(e._hover&&(E="live.background.hover"),e.s(E)||(E=e._selected?"live.background.active":"live.background")):E="live.background.disabled",u=e.s(E),u?u:e.s("live.background")},getForeground:function(){var f,T,C=this;return C._enabled?(C._hover&&(f="live.label.hover"),C.s(f)||(f=C._selected?"live.label.active":"live.label.color")):f="live.label.disabled",T=C.s(f),T?T:C.s("live.label.color")},isSelected:function(){return this._selected},setSelected:function(E){var X=this,U=X._selected,w=X._buttonGroup;X._selected=E,X.fp("selected",U,E)&&(w&&E&&w._selected!==X&&(w._selected&&w._selected.setSelected(!1),w._selected=X,w.onChanged(X)),X.onChanged(E))},onChanged:function(){}});var Z=ht.graph.ToggleButtonNodeUI=function(){Z.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.ToggleButtonNodeUI",ht.graph.LiveNodeUI,{rectIntersects:function(){return!0},onKeyDown:function(Y){var q=this;return Z.superClass.onKeyDown.call(q,Y)?(q.toggleSelect(),!0):void 0},onMouseDown:function(g){var p=this;Z.superClass.onMouseDown.call(p,g),p.toggleSelect()},toggleSelect:function(){var K=this,L=K._data;L._buttonGroup?L._selected||L.setSelected(!0):L.setSelected(!L._selected),L.setHover(!1)}});var Q=ht.CheckboxNode=function(){var h=this;Q.superClass.constructor.apply(h),h.s("live.label.align","left"),h.s("live.background",ht.Color.widgetIconBackground),h.s("live.background.active",ht.Color.widgetIconHighlight)};ht.Default.def("ht.CheckboxNode",ht.ToggleButtonNode,{_image:"checkbox_image",getBackground:function(){var X,h=this;return X=h._enabled?h._selected?"live.background.active":"live.background":"live.background.disabled",h.s(X)},getForeground:function(){var g,l=this;return g=l._enabled?l._selected?"live.background.active":"live.background":"live.background.disabled",l.s(g)}}),ht.Default.setImage("checkbox_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},background:{func:"getBackground"},rect:{func:function(v){var $=(v._width,v._height);return{x:.1*$,y:.2*$,width:.6*$,height:.6*$}}}},{type:"shape",points:{func:function(w){var s=(w._width,w._height);return[.3*s,.5*s,.4*s,.6*s,.55*s,.35*s]}},borderWidth:{func:function(s){return.05*s._height}},borderColor:"#FFFFFF",visible:{func:function(N){return N._selected||N._hover}}},{type:"text",text:{func:"style@live.label"},align:{func:"style@live.label.align"},color:{func:"getForeground"},font:{func:"style@live.label.font"},rect:{func:function(k){var $=k._width,C=k._height;return{x:.8*C,y:0,width:$-.8*C,height:C}}},offsetX:{func:"style@live.label.offset.x"},offsetY:{func:"style@live.label.offset.y"}}]});var B=ht.RadioButtonNode=function(){var H=this;B.superClass.constructor.apply(H),H.s("live.label.align","left"),H.s("live.background",ht.Color.widgetIconBackground),H.s("live.background.active",ht.Color.widgetIconHighlight)};ht.Default.def("ht.RadioButtonNode",ht.ToggleButtonNode,{_image:"radioButton_image",getUIClass:function(){return ht.graph.RadioButtonNodeUI},getBackground:function(){var c,A=this;return c=A._enabled?A._selected?"live.background.active":"live.background":"live.background.disabled",A.s(c)},getForeground:function(){var Y,H=this;return Y=H._enabled?H._selected?"live.background.active":"live.background":"live.background.disabled",H.s(Y)}}),ht.Default.setImage("radioButton_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:"circle",borderWidth:{func:function(I){return.1*I._height}},borderColor:{func:"getBackground"},rect:{func:function(z){var R=(z._width,z._height);return{x:.1*R,y:.2*R,width:.6*R,height:.6*R}}}},{type:"circle",background:{func:"getBackground"},rect:{func:function(y){var v=(y._width,y._height);return{x:.3*v,y:.4*v,width:.2*v,height:.2*v}}},visible:{func:function(Q){return Q._selected||Q._hover}}},{type:"text",text:{func:"style@live.label"},align:{func:"style@live.label.align"},color:{func:"getBackground"},font:{func:"style@live.label.font"},rect:{func:function(l){var g=l._width,Z=l._height;return{x:.8*Z,y:0,width:g-.8*Z,height:Z}}},offsetX:{func:"style@live.label.offset.x"},offsetY:{func:"style@live.label.offset.y"}}]});var M=ht.graph.RadioButtonNodeUI=function(){M.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.RadioButtonNodeUI",ht.graph.ToggleButtonNodeUI,{toggleSelect:function(){this._data._selected||this._data.setSelected(!0)}});var d=ht.SwitchNode=function(){var a=this;d.superClass.constructor.apply(a),a.s("live.background",ht.Color.widgetIconBackground),a.s("live.background.active",ht.Color.widgetIconHighlight),a.s("live.label.color",ht.Color.widgetIconBackground),a.s("live.label.active",ht.Color.widgetIconHighlight)};ht.Default.def("ht.SwitchNode",ht.ToggleButtonNode,{_image:"switch_image",getBackground:function(){return this.s(this._selected?"live.background.active":"live.background")},getForeground:function(){return this.s(this._selected?"live.label.active":"live.label.color")}}),ht.Default.setImage("switch_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},background:{func:"style@switch.background"},opacity:{func:function(j){return j._enabled?1:.5}},rect:[0,0,1,1],relative:!0},{type:"circle",background:{func:"getBackground"},opacity:{func:function(R){return R._enabled?1:.5}},rect:{func:function(P){var O=30,W=10,t=P._selected;return{x:t?P._width-W-O:W,y:(P._height-O)/2,width:O,height:O}}}},{type:"text",text:{func:function(m){return m.s(m._selected?"switch.text.on":"switch.text.off")}},rect:[17,1,1],relative:!0,offsetX:{func:function(J){return J._selected?-10:10}},color:{func:"getForeground"},font:{func:"style@live.label.font"},align:{func:"style@live.label.align"}}]});var s=ht.ComboboxNode=function(){var x=this;s.superClass.constructor.apply(x),x.s("live.label.align","left")};ht.Default.def("ht.ComboboxNode",ht.LiveNode,{_image:"combobox_image",_buttonWidth:20,_maxHeight:200,_selectedIndex:-1,getUIClass:function(){return ht.graph.ComboboxNodeUI},getItems:function(){return this._items},setItems:function(Q){var U=this._items;this._items=Q,this.fp("items",U,Q)},getSelectedItem:function(){return this._selectedItem},setSelectedItem:function(g){var B,D=this,d=D._items,I=D._selectedItem;!d||(B=d.indexOf(g))<0||(D._selectedItem=g,D._selectedIndex=B,D.s("live.label",g?D.getItemName(g):""),D.fp("selectedItem",I,g)&&D.onChanged(g))},getSelectedIndex:function(){return this._selectedIndex},setSelectedIndex:function(K){var g=this,t=g._items;!t||0>K||K>=t.length||(g._selectedIndex=K,g.setSelectedItem(t[K]))},getItemName:function(x){return x.label||x},onChanged:function(){}}),ht.Default.setImage("combobox_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},gradient:{func:"style@live.gradient"},gradientColor:{func:"style@live.gradient.color"},background:{func:"getBackground"},rect:[0,0,1,1],relative:!0},{type:"shape",points:{func:function(X){var Q=X._buttonWidth,D=X._width,P=X._height;return[D-Q+.5*Q,.6*P,D-Q+.75*Q,.4*P,D-Q+.25*Q,.4*P]}},background:{func:function(J){return J._pressed?"#000000":"#FFFFFF"}}},{type:"text",text:{func:"style@live.label"},align:{func:"style@live.label.align"},color:{func:"getForeground"},font:{func:"style@live.label.font"},rect:[0,0,1,1],relative:!0,offsetX:{func:"style@live.label.offset.x"},offsetY:{func:"style@live.label.offset.y"}}]});var T=ht.graph.ComboboxNodeUI=function(){T.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.ComboboxNodeUI",ht.graph.LiveNodeUI,{rectIntersects:function(){return!0},onKeyDown:function(Q){var g,v=this._data,j=0;return(37===Q.keyCode||38===Q.keyCode)&&(j=-1),(39===Q.keyCode||40===Q.keyCode)&&(j=1),j?(v._selectedIndex>=0?g=v._selectedIndex+j:v._items&&v._items.length>0&&(g=1===j?0:v.items.length-1),v.setSelectedIndex(g),this._ignore=!0,!0):27===Q.keyCode||13===Q.keyCode?(this._hidePopup(),!0):void 0},onMouseMove:function(){this._data._pressed&&(this._moved=!0)},onMouseUp:function(R){var H=this;T.superClass.onMouseUp.call(H,R),H._moved||(H._list?H._hidePopup():H._showPopup()),delete H._moved},_42:function(X){if(T.superClass._42.call(this,X),this._list&&this._data._selectedIndex>=0){var Q=this._list.getDataModel().getDatas().get(this._data._selectedIndex);this._list.sm().ld()!==Q&&this._list.sm().setSelection(Q)}},_showPopup:function(){var E,z,B,s,i,t,u,M,v,j,h=this,$=h._data,H=$._items,I=h.gv._view.getBoundingClientRect(),q=($._position.x-$._width/2)*h.gv._zoom+h.gv.tx()+I.left-h.gv._view.scrollLeft,W=($._position.y+$._height/2)*h.gv._zoom+h.gv.ty()+I.top-h.gv._view.scrollTop;if(H&&0!==H.length){for(E=new ht.DataModel,z=this._list=new ht.widget.ListView(E),z.getIcon=function(){return null},z.drawRow=function(_,B,n,F,u,e,T){z._focusData===B&&(_.fillStyle=ht.Default.darker(B.s("live.background")),_.beginPath(),_.rect(F,u,e,T),_.fill()),ht.widget.ListView.prototype.drawRow.apply(z,arguments)},B=0;B<H.length;B++)s=new ht.Data,s.setName($.getItemName(H[B])),s._index=B,E.add(s),$._selectedIndex===B&&z.sm().setSelection(s);z.onSelectionChanged=function(){var w=z.sm().ld();w&&!h._ignore&&($.setSelectedIndex(w._index),h._hidePopup(),delete h._ignore)},z.getSelectBackground=function(i){var $=i.s("live.background");return i===z._focusData?ht.Default.darker($):$},z.getView().addEventListener("mousemove",function(y){z.setFocusData(z.getDataAt(y)),z.invalidateModel()},ht.Default.eventListenerOptionFalse),M=ht.Default.getWindowInfo(),t=$._width,u=Math.min(z.getRowHeight()*H.length,$._maxHeight,M.height),v=M.width-t-10,j=M.height-u-10,q=q>v?v:q,W=W>j?j:W,q=0>q?0:q,W=0>W?0:W,i=z.getView().style,i.left=q+M.left+"px",i.top=W+M.top+"px",i.width=t+"px",i.height=u+"px",i.zIndex=1e4,i.background="white",i.borderWidth="1px",i.borderColor="#DDDDE0",i.borderStyle="solid",i.borderRadius="5px",ht.Default.appendToScreen(z.getView()),X(function(){h._hidePopup()})}},_hidePopup:function(){this._list&&(ht.Default.removeHTML(this._list.getView()),delete this._list)}});var O=ht.ProgressBarNode=function(){var A=this;O.superClass.constructor.apply(A),A.s("label.position",17),A.s("live.background",ht.Color.widgetIconBackground),A.s("live.background.active",ht.Color.widgetIconHighlight)};ht.Default.def("ht.ProgressBarNode",ht.LiveNode,{_image:"progressBar_image",_value:0,getValue:function(){return this._value},setValue:function(p){var q=this._value;this._value=p,this.fp("value",q,p)},getName:function(){return this._value+"%"}}),ht.Default.setImage("progressBar_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:"rect",background:{func:"style@live.background"},rect:[0,0,1,1],relative:!0},{type:"rect",background:{func:"style@live.background.active"},rect:{func:function(w){return[0,0,w._value/100,.5]}},relative:!0},{type:"rect",background:{func:function(J){return ht.Default.darker(J.s("live.background.active"))}},rect:{func:function(K){return[0,.5,K._value/100,.5]}},relative:!0}]});var V=ht.SliderNode=function(){var K=this;V.superClass.constructor.apply(K),K.s("label.position",17),K.s("live.background",ht.Color.widgetIconBackground),K.s("live.background.active",ht.Color.widgetIconHighlight)};ht.Default.def("ht.SliderNode",ht.LiveNode,{_image:"slider_image",_orientation:"horizontal",_value:0,_min:0,_max:100,_step:1,getUIClass:function(){return ht.graph.SliderNodeUI},getOrientation:function(){return this._orientation},setOrientation:function(p){var N=this._orientation;this._orientation=p,this.fp("orientation",N,p)},isHorizontal:function(){var y=this._orientation;return"h"===y||"horizontal"===y},getValue:function(){return this._value},setValue:function(d){var K=this,E=K._min,$=K._max,h=K._step;E>d&&(d=E),d>$&&(d=$),d=Math.floor(d/h)*h;var Y=K._value;K._value=d,K.fp("value",Y,d)&&K.onChanged(d)},getMin:function(){return this._min},setMin:function(o){var k=this._min;this._min=o,this.fp("min",k,o),this.setValue(this._value)},getMax:function(){return this._max},setMax:function(t){var w=this._max;this._max=t,this.fp("max",w,t),this.setValue(this._value)},getStep:function(){return this._step},setStep:function(Z){var i=this._step;this._step=Z,this.fp("step",i,Z),this.setValue(this._value)},getName:function(){return this._value+""},onChanged:function(){}}),ht.Default.setImage("slider_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:"rect",background:{func:"style@live.background.active"},rect:{func:function(s){var p=s.s("slider.bar.size"),y=s.s("slider.thumb.size")+s.s("live.border.width"),I=s._value/(s._max-s._min),o=s.isHorizontal(),O=s._width,E=s._height;return{x:o?y:(O-p)/2,y:o?(E-p)/2:E-y-(E-2*y)*I,width:o?(O-2*y)*I:p,height:o?p:(E-2*y)*I}}}},{type:"rect",background:{func:"style@live.background"},rect:{func:function(D){var i=D.s("slider.bar.size"),z=D.s("slider.thumb.size")+D.s("live.border.width"),I=D._value/(D._max-D._min),U=D.isHorizontal(),T=D._width,y=D._height;return{x:U?z+(T-2*z)*I:(T-i)/2,y:U?(y-i)/2:z,width:U?(T-2*z)*(1-I):i,height:U?i:(y-2*z)*(1-I)}}}},{type:"circle",borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},background:{func:"style@slider.thumb.background"},rect:{func:function(_){var B=_.s("slider.thumb.size"),M=_._value/(_._max-_._min),q=_.isHorizontal(),n=_._width,K=_._height;return{x:q?M*(n-2*B):n/2-B,y:q?K/2-B:(1-M)*(K-2*B),width:2*B,height:2*B}}}}]});var q=ht.graph.SliderNodeUI=function(){q.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.SliderNodeUI",ht.graph.LiveNodeUI,{rectIntersects:function(){return!0},onKeyDown:function(Q){var d=this._data,v=d.isHorizontal(),E=0;return(v&&37===Q.keyCode||!v&&40===Q.keyCode)&&(E=-1),(v&&39===Q.keyCode||!v&&38===Q.keyCode)&&(E=1),E?(d.setValue(d._value+d._step*E),!0):void 0},onMouseDown:function(x){var K=this,p=K._data,g=ht.Default.getClientPoint(x);K._start=p.isHorizontal()?g.x:g.y,K._startValue=p._value},onDrag:function(c){var r=this;if(r._start===I)return!1;var l=r._data,v=l.isHorizontal(),q=l._step,N=ht.Default.getClientPoint(c),i=v?N.x:N.y,p=l.s("slider.thumb.size")+l.s("live.border.width"),W=v?l._width:l._height-2*p,X=(i-r._start)*(v?1:-1),o=(l._max-l._min)*X/W/r.gv._zoom;return l.setValue(r._startValue+Math.floor(o/q)*q),!0},onMouseUp:function(){delete this._start,delete this._startValue}});var E=ht.SpinnerNode=function(){E.superClass.constructor.apply(this),this._styleMap={},this._styleMap["label.position"]=16};ht.Default.def("ht.SpinnerNode",ht.LiveNode,{_image:"spinner_image",_value:0,_min:0,_max:100,_step:1,getUIClass:function(){return ht.graph.SpinnerNodeUI},getValue:function(){return this._value},setValue:function(f){f<this._min&&(f=this._min),f>this._max&&(f=this._max),f=Math.floor(f/this._step)*this._step;var s=this._value;this._value=f,this.fp("value",s,f)&&this.onChanged(f)},getMin:function(){return this._min},setMin:function(g){var Z=this._min;this._min=g,this.fp("min",Z,g),this.setValue(this._value)},getMax:function(){return this._max},setMax:function(S){var q=this._max;this._max=S,this.fp("max",q,S),this.setValue(this._value)},getStep:function(){return this._step},setStep:function(u){var w=this._step;this._step=u,this.fp("step",w,u),this.setValue(this._value)},getName:function(){return this._value+""},onChanged:function(){},getForeground:function(){return this.s(this._enabled?"live.label.active":"live.label.color")}}),ht.Default.setImage("spinner_image",{width:{func:"getWidth"},height:{func:"getHeight"},comps:[{type:{func:"style@live.shape"},borderWidth:{func:"style@live.border.width"},borderColor:{func:"style@live.border.color"},gradient:{func:"style@live.gradient"},gradientColor:{func:"style@live.gradient.color"},background:{func:function(W){return W.s(W._enabled?"spinner.background":"live.background.disabled")}},rect:[0,0,1,1],relative:!0},{type:"rect",background:{func:function(p){var L;return L=p._topPressed?"live.background.active":p._topHover?"live.background.hover":"live.background",p.s(L)}},rect:{func:function(l){var L=l.s("spinner.button.width"),i=l.s("live.border.width");return{x:l._width-L,y:i,width:L-i,height:l._height/2-i}}}},{type:"shape",points:{func:function(w){var A=w.s("spinner.button.width"),W=w._width,g=w._height;return[W-A+.5*A,.15*g,W-A+.75*A,.4*g,W-A+.25*A,.4*g]}},background:{func:function(D){return D._topHover?"#000000":"#FFFFFF"}}},{type:"rect",background:{func:function(j){var R;return R=j._bottomPressed?"live.background.active":j._bottomHover?"live.background.hover":"live.background",j.s(R)}},rect:{func:function(U){var K=U.s("spinner.button.width"),h=U.s("live.border.width"),C=U._width,s=U._height;return{x:C-K,y:s/2,width:K-h,height:s/2-h}}}},{type:"shape",points:{func:function($){var I=$.s("spinner.button.width"),M=$._width,D=$._height;return[M-I+.5*I,.9*D,M-I+.75*I,.65*D,M-I+.25*I,.65*D]}},background:{func:function(g){return g._bottomHover?"#000000":"#FFFFFF"}}}]});var U=ht.graph.SpinnerNodeUI=function(){U.superClass.constructor.apply(this,arguments)};ht.Default.def("ht.graph.SpinnerNodeUI",ht.graph.LiveNodeUI,{_refresh:function(l){var J=this._data,g=J.s("spinner.button.width"),t=this.gv.getLogicalPoint(l),V={x:J._position.x+J._width/2-g,y:J._position.y-J._height/2,width:g,height:J._height/2},r={x:J._position.x+J._width/2-g,y:J._position.y,width:g,height:J._height/2};J._topHover=ht.Default.containsPoint(V,t),J._bottomHover=ht.Default.containsPoint(r,t)},onKeyDown:function(Z){var D=this._data,b=0;return 38===Z.keyCode&&(b=1),40===Z.keyCode&&(b=-1),b?(D.setValue(D._value+D._step*b),!0):void 0},onMouseOut:function(){var t=this._data;t._topHover=!1,t._bottomHover=!1,this.gv.invalidateData(t)},onMouseDown:function(S){var h=this,D=h._data,Y=0;h._refresh(S),D._topPressed=D._topHover,D._bottomPressed=D._bottomHover,D._topPressed&&(Y=1),D._bottomPressed&&(Y=-1),Y&&(D.setValue(D._value+D._step*Y),h._timer&&clearTimeout(h._timer),h._interval&&clearInterval(h._interval),h._timer=setTimeout(function(){h._interval=setInterval(function(){D.setValue(D._value+D._step*Y)},100)},1e3))},onMouseMove:function(f){this._refresh(f),this.gv.invalidateData(this._data)},onMouseUp:function(){var O=this,e=O._data;e._topHover=!1,e._bottomHover=!1,e._topPressed=!1,e._bottomPressed=!1,O.gv.invalidateData(e),O._timer&&(clearTimeout(O._timer),delete O._timer),O._interval&&(clearInterval(O._interval),delete O._interval)}}),ht.ButtonGroup=function(P){var e=this;e._items=new ht.List,e.addAll(P)},ht.Default.def("ht.ButtonGroup",z,{add:function(t){var e=this;e._items.contains(t)||(e._items.add(t),t._buttonGroup=e,e._selected&&t._selected&&e._selected.setSelected(!1),t._selected&&(e._selected=t))},addAll:function(g){g&&new ht.List(g).each(self.add,self)},remove:function(H){var X=this;X._items.contains(H)&&(X._items.remove(H),delete H._buttonGroup,X._selected===H&&delete X._selected)},getItems:function(){return this._items},clear:function(){var h=this;h._items.each(h.remove,h)},getSelected:function(){return this._selected},onChanged:function(){}});var S=ht.Style,f=ht.Color,p=f.widgetBackground,h=f.widgetIconHighlight,i=ht.Default.labelSelectColor;S["live.shape"]="rect",S["live.border.width"]=1,S["live.border.color"]=f.widgetBorder,S["live.gradient"]="",S["live.gradient.color"]="#FFF",S["live.background"]=h,S["live.background.disabled"]=p,S["live.background.hover"]=ht.Default.brighter(h),S["live.background.active"]=ht.Default.darker(h),S["live.label"]="",S["live.label.offset.x"]=0,S["live.label.offset.y"]=0,S["live.label.align"]="center",S["live.label.font"]=I,S["live.label.color"]=i,S["live.label.disabled"]=f.widgetIconBackground,S["live.label.hover"]=i,S["live.label.active"]=i,S["switch.background"]=p,S["switch.text.on"]="ON",S["switch.text.off"]="OFF",S["slider.bar.size"]=6,S["slider.thumb.size"]=8,S["slider.thumb.background"]=h,S["spinner.background"]="#FFFFFF",S["spinner.button.width"]=20;var r=ht.graph.GraphView.prototype;r.getFocusData=function(){return this._focusData},r.handleKeyUp=function(m){var b=this._focusData,e=b&&this._25I[b._id];b&&b._enabled&&b._editable&&e&&e.onKeyUp&&e.onKeyUp(m)},r.handleMouseDown=function(z,B){this._focusData=B;var G=B&&this._25I[B._id];B&&B._enabled&&B._editable&&G&&G.onMouseDown&&G.onMouseDown(z)},r.handleMouseUp=function(n,t){var F=t&&this._25I[t._id];t&&t._enabled&&t._editable&&F&&F.onMouseUp&&F.onMouseUp(n)},r.handleMouseMove=function(o){var i=this._lastHoverData,r=i&&this._25I[i._id],R=this.getDataAt(o),I=R&&this._25I[R._id];i&&r&&i._enabled&&i._editable&&(i===R?r.onMouseMove&&r.onMouseMove(o):r.onMouseOut&&r.onMouseOut(o)),R&&i!==R&&R._enabled&&R._editable&&I&&I.onMouseOver&&I.onMouseOver(o),this._lastHoverData=R},r._93O=function(U,N){var M=N&&this._25I[N._id];return N&&N._enabled&&N._editable&&M&&M.onDrag&&M.onDrag(U)},r=ht.graph.DefaultInteractor.prototype,r.handle_keyup=function(y){this.gv.handleKeyUp&&this.gv.handleKeyUp(y)},r.handle_mousemove=function(S){this.gv.handleMouseMove&&this.gv.handleMouseMove(S)};var A=new ht.List,X=function(d){setTimeout(function(){A.add(d)},0)};m.addEventListener(ht.Default.isTouchable?"touchend":"mouseup",function(){A.size()>0&&setTimeout(function(){A.each(function(M){M()}),A.clear()},0)},ht.Default.eventListenerOptionFalse)}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);
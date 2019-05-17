!function(b,R){"use strict";var d=ht.AlarmSeverity=function(z,k,m,a,s){this.value=z,this.name=k,this.nickName=m,this.color=a,this.displayName=s};ht.Default.def("ht.AlarmSeverity",R,{toString:function(){return this.displayName||this.name}}),function(){d.severities=new ht.List,d._vm={},d._nm={},d._cp=function(t,d){if(t&&d){var F=t.value-d.value;return F>0?1:0>F?-1:0}return t&&!d?1:!t&&d?-1:0},d.each=function(T,m){d.severities.each(T,m)},d.getSortFunction=function(){return d._cp},d.setSortFunction=function(g){d._cp=g,d.severities.sort(g)},d.add=function($,D,U,M,e){var l=new d($,D,U,M,e);return d._vm[$]=l,d._nm[D]=l,d.severities.add(l),d.severities.sort(d._cp),l},d.remove=function(J){var W=d._nm[J];return W&&(delete d._nm[J],delete d._vm[W.value],d.severities.remove(W)),W},d.CRITICAL=d.add(500,"Critical","C","#FF0000"),d.MAJOR=d.add(400,"Major","M","#FFA000"),d.MINOR=d.add(300,"Minor","m","#FFFF00"),d.WARNING=d.add(200,"Warning","W","#00FFFF"),d.INDETERMINATE=d.add(100,"Indeterminate","N","#C800FF"),d.CLEARED=d.add(0,"Cleared","R","#00FF00"),d.isClearedAlarmSeverity=function(K){return K?0===K.value:!1},d.getByName=function(N){return d._nm[N]},d.getByValue=function(Q){return d._vm[Q]},d.clear=function(){d.severities.clear(),d._vm={},d._nm={}},d.compare=function(S,J){return d._cp(S,J)}}();var W=ht.AlarmState=function(V){this._d=V,this._nm={},this._am={},this._ps=null,this._haa=null,this._hna=null,this._hoa=null,this._hta=null,this._hls=!1,this._aac=0,this._nac=0};ht.Default.def("ht.AlarmState",R,{_ep:!0,_f:function(){this._c1(),this._c2(),this._c3(),this._c4(),this._c5(),this._c6(),this._c7(),this._d.fp("alarmState",null,this)},getHighestAcknowledgedAlarmSeverity:function(){return this._haa},getHighestNewAlarmSeverity:function(){return this._hna},getHighestOverallAlarmSeverity:function(){return this._hoa},getHighestNativeAlarmSeverity:function(){return this._hta},hasLessSevereNewAlarms:function(){return this._hls},_c1:function(){var S=null;for(var T in this._am)T=d.getByName(T),d.isClearedAlarmSeverity(T)||0!==this.getAcknowledgedAlarmCount(T)&&(S=S?d.compare(S,T)>0?S:T:T);this._haa=S},_c2:function(){var i=null;for(var L in this._nm)L=d.getByName(L),d.isClearedAlarmSeverity(L)||0!==this.getNewAlarmCount(L)&&(i=i?d.compare(i,L)>0?i:L:L);this._hna=i},_c3:function(){if(!this._hna)return this._hls=!1,void 0;for(var P in this._nm)if(P=d.getByName(P),!d.isClearedAlarmSeverity(P)&&0!==this.getNewAlarmCount(P)&&d.compare(this._hna,P)>0)return this._hls=!0,void 0;this._hls=!1},_c4:function(){var A=this._haa,u=this._hna,B=this._ps;this._hoa=A,d.compare(u,this._hoa)>0&&(this._hoa=u),d.compare(B,this._hoa)>0&&(this._hoa=B)},_c5:function(){var B=this._haa,C=this._hna;this._hta=B,d.compare(C,this._hta)>0&&(this._hta=C)},increaseAcknowledgedAlarm:function(q,Y){if(0!==Y){Y=Y||1;var I=this._am[q.name]||0;I+=Y,this._am[q.name]=I,this._f()}},increaseNewAlarm:function(E,R){if(0!==R){R=R||1;var u=this._nm[E.name]||0;u+=R,this._nm[E.name]=u,this._f()}},decreaseAcknowledgedAlarm:function(n,D){if(0!==D){D||(D=1);var h=this._am[n.name]||0;if(h-=D,0>h)throw"Alarm count can not be negative";this._am[n.name]=h,this._f()}},decreaseNewAlarm:function(_,L){if(0!==L){L||(L=1);var o=this._nm[_.name]||0;if(o-=L,0>o)throw"Alarm count can not be negative";this._nm[_.name]=o,this._f()}},acknowledgeAlarm:function(Q){this.decreaseNewAlarm(Q,1),this.increaseAcknowledgedAlarm(Q,1)},acknowledgeAllAlarms:function(y){if(y){var i=this.getNewAlarmCount(y);this.decreaseNewAlarm(y,i),this.increaseAcknowledgedAlarm(y,i)}else for(var w in this._nm)this.acknowledgeAllAlarms(d.getByName(w))},_c6:function(){this._aac=0;for(var t in this._am)t=d.getByName(t),this._aac+=this.getAcknowledgedAlarmCount(t)},getAcknowledgedAlarmCount:function(Q){return Q?this._am[Q.name]||0:this._aac},getAlarmCount:function(R){return this.getAcknowledgedAlarmCount(R)+this.getNewAlarmCount(R)},_c7:function(){this._nac=0;for(var j in this._nm)this._nac+=this.getNewAlarmCount(d.getByName(j))},getNewAlarmCount:function(r){return r?this._nm[r.name]||0:this._nac},setNewAlarmCount:function(q,v){this._nm[q.name]=v,this._f()},removeAllNewAlarms:function(b){b?delete this._nm[b]:this._nm={},this._f()},setAcknowledgedAlarmCount:function(i,k){this._am[i.name]=k,this._f()},removeAllAcknowledgedAlarms:function(H){H?delete this._am[H.name]:this._am={},this._f()},isEmpty:function(){return!this._hoa},clear:function(){this._am={},this._nm={},this._f()},getPropagateSeverity:function(){return this._ps},setPropagateSeverity:function(m){if(this._ep||(m=null),this._ps!==m){var Y=this._ps;this._ps=m,this._f(),this._d.fp("propagateSeverity",Y,m)}},isEnablePropagation:function(){return this._ep},setEnablePropagation:function(i){var w=this._ep;this._ep=i,this._d.fp("enablePropagation",w,i)&&(i||this.setPropagateSeverity(null))}});var $=ht.AlarmStatePropagator=function(h){this._dataModel=h,this._enable=!1,this._isPropagating=!1};ht.Default.def("ht.AlarmStatePropagator",R,{getDataModel:function(){return this._dataModel},isEnable:function(){return this._enable},setEnable:function(V){this._enable!==V&&(this._enable=V,this._enable?(this._dataModel.mm(this.handleDataModelChange,this),this._dataModel.md(this.handleDataPropertyChange,this),this._dataModel.each(function(s){this.propagate(s)},this)):(this._dataModel.umm(this.handleDataModelChange,this),this._dataModel.umd(this.handleDataPropertyChange,this)))},handleDataModelChange:function(H){H.data&&this.propagate(H.data)},handleDataPropertyChange:function(v){if("alarmState"===v.property||"enablePropagation"===v.property)this.propagate(v.data);else if("parent"===v.property){var j=v.oldValue;j&&this.propagate(j),this.propagate(v.data)}},propagate:function(T){T&&!this._isPropagating&&(this._isPropagating=!0,this.propagateToTop(T),this._isPropagating=!1)},propagateToTop:function(T){for(this.propagateToParent(null,T);T&&T.getParent();)this.propagateToParent(T,T.getParent()),T=T.getParent()},propagateToParent:function(u,H){var C=null;H.getChildren().each(function(W){var n=W.getAlarmState().getHighestOverallAlarmSeverity();d.compare(n,C)>0&&(C=n)}),H.getAlarmState().setPropagateSeverity(C)}}),ht.AlarmStateStatistics=function(D){this.sumNew=0,this.sumAcked=0,this.sumTotal=0,this.severtiyMap={},this.dataMap={},this.setDataModel(D)},ht.Default.def("ht.AlarmStateStatistics",R,{ms_fire:1,getDataModel:function(){return this._dataModel},setDataModel:function(P){var f=this._dataModel;f!==P&&(f&&(f.umd(this.handleDataPropertyChange,this),f.umm(this.handleDataModelChange,this),this.severtiyMap={},this.dataMap={}),this._dataModel=P,this.reset(),P.md(this.handleDataPropertyChange,this),P.mm(this.handleDataModelChange,this),this.fp("dataModel",f,P))},dispose:function(){this._dataModel.umd(this.handleDataPropertyChange,this),this._dataModel.umm(this.handleDataModelChange,this),delete this._dataModel},handleDataPropertyChange:function(O){"alarmState"===O.property&&(this.increase(O.data),this.fireAlarmStateChange())},handleDataModelChange:function(G){"add"===G.kind?(this.increase(G.data),this.fireAlarmStateChange()):"remove"===G.kind?(this.decrease(G.data),this.fireAlarmStateChange()):"clear"===G.kind&&(this.severtiyMap={},this.dataMap={},this.fireAlarmStateChange())},fireAlarmStateChange:function(){this.sumAcked=0,this.sumNew=0,this.sumTotal=0,d.each(function(q){var c=this.getSumInfo(q);this.sumAcked+=c.ackedCount,this.sumNew+=c.newCount,this.sumTotal+=c.totalCount},this),this.fp("alarmState",!1,!0)},getNewAlarmCount:function(n){if(!n)return this.sumNew;var V=this.getSumInfo(n);return V.newCount},getAcknowledgedAlarmCount:function(a){if(!a)return this.sumAcked;var R=this.getSumInfo(a);return R.ackedCount},getTotalAlarmCount:function(c){if(!c)return this.sumTotal;var a=this.getSumInfo(c);return a.totalCount},getSumInfo:function(w){var K=this.severtiyMap[w.name];return K||(K={},K.newCount=0,K.ackedCount=0,K.totalCount=0,this.severtiyMap[w.name]=K),K},decrease:function(L){var K=this.dataMap[L.getId()];K&&(delete this.dataMap[L.getId()],d.each(function(H){var L=K[H.name],O=this.getSumInfo(H);O.newCount=O.newCount-L.newCount,O.ackedCount=O.ackedCount-L.ackedCount,O.totalCount=O.totalCount-L.totalCount},this))},increase:function(M){if(this.decrease(M),!this._filterFunc||this._filterFunc(M)){var h={},A=M.getAlarmState();this.dataMap[M.getId()]=h,d.each(function(f){var T={};T.newCount=A.getNewAlarmCount(f),T.ackedCount=A.getAcknowledgedAlarmCount(f),T.totalCount=A.getAlarmCount(f),h[f.name]=T;var m=this.getSumInfo(f);m.newCount=m.newCount+T.newCount,m.ackedCount=m.ackedCount+T.ackedCount,m.totalCount=m.totalCount+T.totalCount},this)}},reset:function(){this.severtiyMap={},this.dataMap={},this._dataModel.each(this.increase,this),this.fireAlarmStateChange()},setFilterFunc:function(y){var x=this._filterFunc;this._filterFunc=y,this.reset(),this.fp("filterFunc",x,y)},getFilterFunc:function(){return this._filterFunc}});var L=ht.Data.prototype;L.getAlarmState=function(){return this._alarmState||(this._alarmState=new W(this))},L=ht.DataModel.prototype,L.isEnableAlarmStatePropagator=function(){return!!this._alarmStatePropagator&&this._alarmStatePropagator.isEnable()},L.setEnableAlarmStatePropagator=function(V){V!=this.isEnableAlarmStatePropagator()&&(V?(this._alarmStatePropagator=new $(this)).setEnable(!0):this._alarmStatePropagator.setEnable(!1))},L=ht.graph.GraphView.prototype,L.getNote2=function(A){var n=A.getAlarmState().getHighestNewAlarmSeverity();if(n){var V=A.getAlarmState().getNewAlarmCount(n)+n.nickName;return A.getAlarmState().hasLessSevereNewAlarms()&&(V+="+"),V}return A.s("note2")},L.getNote2Background=function(q){var S=q.getAlarmState().getHighestNewAlarmSeverity();return S?S.color:q.s("note2.background")},L.getBodyColor=function(H){var g=H.getAlarmState().getHighestNativeAlarmSeverity();return g?g.color:H.s("body.color")},L.getBorderColor=function(b){var M=b.getAlarmState().getPropagateSeverity();return M?M.color:b.s("border.color")},L=ht.widget.TreeView.prototype,L.getBorderColor=function(h){var w=h.getAlarmState().getPropagateSeverity();return w?w.color:h.s("border.color")},L.getIcon=function(b){return b.getIcon()?"__alarmIcon__":null},L=ht.widget.TreeTableView.prototype,L.getBorderColor=function(R){var U=R.getAlarmState().getPropagateSeverity();return U?U.color:R.s("border.color")},L.getIcon=function(U){return U.getIcon()?"__alarmIcon__":null},ht.Default.setImage("__alarmIcon__",{width:16,height:16,comps:[{type:"image",name:{func:function(q){return q.getIcon()}},color:{func:function(u){var E=u.getAlarmState().getHighestNativeAlarmSeverity();return E?E.color:u.s("body.color")}},rect:[0,0,16,16]}]});var i=ht.Style;i["note2.expanded"]=!0,i["note2.color"]="#000"}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);
"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[489],{3489:(N,d,r)=>{r.r(d),r.d(d,{CoreDataModule:()=>C});var c=r(8583),s=r(9502),e=r(476);let A=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(_){return new(_||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-core-data"]],decls:21,vars:0,consts:function(){let n,_,a;return n="\u4E00\u4E2A\u4E8B\u4EF6\u8868\u793A\u4E00\u4E2A\u6216\u591A\u4E2A\u4F20\u611F\u5668\u8BFB\u503C\u7684\u96C6\u5408\uFF0C\u4E00\u4E9B\u4F20\u611F\u5668\u8BBE\u5907\u4E00\u6B21\u4E00\u4E2A\u8BFB\u503C\uFF0C\u800C\u6709\u7684\u53EF\u80FD\u4E00\u6B21\u63D0\u4F9B\u591A\u4E2A\u8BFB\u503C\uFF0C\u4F46\u662F\u4E00\u4E2A\u4E8B\u4EF6\u81F3\u5C11\u5E94\u8BE5\u6709\u4E00\u4E2A\u8BFB\u503C\uFF0C\u5728GUI\u4E0A\u64CD\u4F5C\u6570\u636E\u4E2D\u5FC3\u662F\u4E0D\u5408\u7406\u7684\u884C\u4E3A\uFF0C\u6570\u636E\u4E2D\u5FC3\u7684API\u53EA\u80FD\u662F\u5185\u90E8\u6216\u8005\u5916\u90E8\u670D\u52A1\u901A\u4FE1\u4F7F\u7528\uFF0C\u56E0\u6B64\u8FD9\u91CC\u4EC5\u4EC5\u662F\u8BA9\u7528\u6237\u9884\u89C8\u6570\u636E\u6D41",n=e.Zx4(n),_="\u4E8B\u4EF6",a="\u8BFB\u503C",[[1,"card","mb-2"],[1,"card-header"],[1,"fa","fa-info-circle","mr-2","text-info"],[1,"card-body"],n,[1,"card"],[1,"nav","nav-tabs","card-header-tabs","font-weight-bold"],[1,"nav-item"],["routerLink","./event","routerLinkActive","active",1,"nav-link"],_,["routerLink","./reading","routerLinkActive","active",1,"nav-link"],a]},template:function(_,a){1&_&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"i",2),e.TgZ(3,"span"),e._uU(4,"Tips"),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.tHW(6,4),e._UZ(7,"br"),e._UZ(8,"br"),e._UZ(9,"br"),e.N_p(),e.qZA(),e.qZA(),e.TgZ(10,"div",5),e.TgZ(11,"div",1),e.TgZ(12,"ul",6),e.TgZ(13,"li",7),e.TgZ(14,"a",8),e.SDv(15,9),e.qZA(),e.qZA(),e.TgZ(16,"li",7),e.TgZ(17,"a",10),e.SDv(18,11),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"div",3),e._UZ(20,"router-outlet"),e.qZA(),e.qZA())},directives:[s.yS,s.Od,s.lC],styles:[""]}),t})();var i=r(2468);let u=(()=>{class t{constructor(_){this.dataSvc=_,this.pauseOperate=!0}ngOnInit(){}feedEvents(){this.feedInterval=setInterval(()=>{this.dataSvc.allEventsPagination(0,5).subscribe(_=>{0!==_.events.length?_.events.forEach((a,o)=>{$("#data-event-stream").prepend('<p class="user-select-all">'+JSON.stringify(a)+"</p>")}):$("#data-event-stream").prepend('<p class="user-select-all">no data stream available, please confirm whether there is at least one device to collect data</p>')})},3e3)}start(){this.pauseOperate=!1,this.feedEvents()}pause(){this.pauseOperate=!0,window.clearInterval(this.feedInterval)}operateToggle(){this.pauseOperate=!this.pauseOperate}ngOnDestroy(){window.clearInterval(this.feedInterval)}}return t.\u0275fac=function(_){return new(_||t)(e.Y36(i.D))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-event"]],decls:20,vars:2,consts:function(){let n,_,a;return n="\u4E8B\u4EF6\u6570\u636E\u6D41",_="\u5F00\u59CB",a="\u6682\u505C",[[1,"card"],[1,"card-header"],[1,"font-weight-bold"],[1,"fa","fa-area-chart","mr-2","text-danger"],[1,"text-secondary"],n,[1,"card-header","p-2"],["role","group",1,"btn-group","btn-group-sm"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-play","mr-1"],_,["type","button",1,"btn","btn-info",3,"disabled","click"],[1,"fa","fa-pause","mr-1"],a,[1,"card-body"],["id","data-event-stream",1,"w-100","overflow-auto",2,"height","350px"]]},template:function(_,a){1&_&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"span",2),e._UZ(3,"span",3),e.TgZ(4,"span",4),e.SDv(5,5),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"button",8),e.NdJ("click",function(){return a.start()}),e.TgZ(9,"span"),e._UZ(10,"i",9),e.TgZ(11,"span"),e.SDv(12,10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"button",11),e.NdJ("click",function(){return a.pause()}),e.TgZ(14,"span"),e._UZ(15,"i",12),e.TgZ(16,"span"),e.SDv(17,13),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"div",14),e._UZ(19,"pre",15),e.qZA(),e.qZA()),2&_&&(e.xp6(8),e.Q6J("disabled",!a.pauseOperate),e.xp6(5),e.Q6J("disabled",a.pauseOperate))},styles:[".btn[disabled][_ngcontent-%COMP%]:hover{cursor:not-allowed}"]}),t})(),E=(()=>{class t{constructor(_){this.dataSvc=_,this.pauseOperate=!0}ngOnInit(){}feedEvents(){this.feedInterval=setInterval(()=>{this.dataSvc.allReadingsPagination(0,5).subscribe(_=>{0!==_.readings.length?_.readings.forEach((a,o)=>{$("#data-reading-stream").prepend('<p class="user-select-all">'+JSON.stringify(a)+"</p>")}):$("#data-event-stream").prepend('<p class="user-select-all">no data stream available, please confirm whether there is at least one device to collect data</p>')})},3e3)}start(){this.pauseOperate=!1,this.feedEvents()}pause(){this.pauseOperate=!0,window.clearInterval(this.feedInterval)}operateToggle(){this.pauseOperate=!this.pauseOperate}ngOnDestroy(){window.clearInterval(this.feedInterval)}}return t.\u0275fac=function(_){return new(_||t)(e.Y36(i.D))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-reading"]],decls:20,vars:2,consts:function(){let n,_,a;return n="\u8BFB\u503C\u6570\u636E\u6D41",_="\u5F00\u59CB",a="\u6682\u505C",[[1,"card"],[1,"card-header"],[1,"font-weight-bold"],[1,"fa","fa-area-chart","mr-2","text-danger"],[1,"text-secondary"],n,[1,"card-header","p-2"],["role","group",1,"btn-group","btn-group-sm"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-play","mr-1"],_,["type","button",1,"btn","btn-info",3,"disabled","click"],[1,"fa","fa-pause","mr-1"],a,[1,"card-body"],["id","data-reading-stream",1,"w-100","overflow-auto",2,"height","350px"]]},template:function(_,a){1&_&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"span",2),e._UZ(3,"span",3),e.TgZ(4,"span",4),e.SDv(5,5),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.TgZ(8,"button",8),e.NdJ("click",function(){return a.start()}),e.TgZ(9,"span"),e._UZ(10,"i",9),e.TgZ(11,"span"),e.SDv(12,10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"button",11),e.NdJ("click",function(){return a.pause()}),e.TgZ(14,"span"),e._UZ(15,"i",12),e.TgZ(16,"span"),e.SDv(17,13),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"div",14),e._UZ(19,"pre",15),e.qZA(),e.qZA()),2&_&&(e.xp6(8),e.Q6J("disabled",!a.pauseOperate),e.xp6(5),e.Q6J("disabled",a.pauseOperate))},styles:[".btn[disabled][_ngcontent-%COMP%]:hover{cursor:not-allowed}"]}),t})();var p=r(8253),g=r(1964),F=r(4294),f=r(5894),D=r(7216);let l=(()=>{class t{constructor(_,a){this.router=_,this.dataSvc=a}canActivate(_,a){return this.checkAvailable(_,a)}canActivateChild(_,a){return this.canActivate(_,a)}checkAvailable(_,a){return this.dataSvc.ping().pipe((0,F.q)(1),(0,f.K)(o=>this.router.navigate(["/svc-unavailable"],{queryParams:{svcName:"core data",routerPath:`/${a.url.split("/")[1]}`}})),(0,D.z)(()=>(0,g.of)(!0)))}}return t.\u0275fac=function(_){return new(_||t)(e.LFG(s.F0),e.LFG(i.D))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const T=[{path:"",component:A,canActivate:[p.a,l],canActivateChild:[l],children:[{path:"",redirectTo:"event",pathMatch:"full"},{path:"event",component:u},{path:"reading",component:E}]}];let v=(()=>{class t{}return t.\u0275fac=function(_){return new(_||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(T)],s.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(_){return new(_||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,v]]}),t})()}}]);
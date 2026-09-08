var B0=Object.defineProperty,j0=Object.defineProperties;var H0=Object.getOwnPropertyDescriptors;var nc=Object.getOwnPropertySymbols;var b_=Object.prototype.hasOwnProperty,S_=Object.prototype.propertyIsEnumerable;var y_=(n,t,e)=>t in n?B0(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,I=(n,t)=>{for(var e in t||={})b_.call(t,e)&&y_(n,e,t[e]);if(nc)for(var e of nc(t))S_.call(t,e)&&y_(n,e,t[e]);return n},he=(n,t)=>j0(n,H0(t));var Gu=(n,t)=>{var e={};for(var i in n)b_.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&nc)for(var i of nc(n))t.indexOf(i)<0&&S_.call(n,i)&&(e[i]=n[i]);return e};var kn=(n,t,e)=>new Promise((i,r)=>{var o=c=>{try{a(e.next(c))}catch(l){r(l)}},s=c=>{try{a(e.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(o,s);a((e=e.apply(n,t)).next())});var Mt=null,ic=!1,$i=1,z0=null,tt=Symbol("SIGNAL");function U(n){let t=Mt;return Mt=n,t}function ac(){return Mt}var Gi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Wi(n){if(ic)throw new Error("");if(Mt===null)return;Mt.consumerOnSignalRead(n);let t=Mt.producersTail;if(t!==void 0&&t.producer===n)return;let e,i=Mt.recomputing;if(i&&(e=t!==void 0?t.nextProducer:Mt.producers,e!==void 0&&e.producer===n)){Mt.producersTail=e,e.lastReadVersion=n.version,e.knownValidAtEpoch=$i;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===Mt&&(!i||r.knownValidAtEpoch===$i))return;let o=to(Mt),s={producer:n,consumer:Mt,nextProducer:e,prevConsumer:void 0,knownValidAtEpoch:$i,lastReadVersion:n.version,nextConsumer:void 0};Mt.producersTail=s,t!==void 0?t.nextProducer=s:Mt.producers=s,o&&E_(n,s)}function D_(){$i++}function cc(n){if(!(to(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===$i)){if(!n.producerMustRecompute(n)&&!eo(n)){sc(n);return}n.producerRecomputeValue(n),sc(n)}}function Wu(n){if(n.consumers===void 0)return;let t=ic;ic=!0;try{for(let e=n.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||U0(i)}}finally{ic=t}}function qu(){return Mt?.consumerAllowSignalWrites!==!1}function U0(n){n.dirty=!0,Wu(n),n.consumerMarkedDirty?.(n)}function sc(n){n.dirty=!1,n.lastCleanEpoch=$i}function gi(n){return n&&w_(n),U(n)}function w_(n){if(n.producersTail?.knownValidAtEpoch===$i){let t=n.producers;for(;t!==void 0;)t.knownValidAtEpoch=null,t=t.nextProducer}n.producersTail=void 0,n.recomputing=!0}function qi(n,t){U(t),n&&C_(n)}function C_(n){n.recomputing=!1;let t=n.producersTail,e=t!==void 0?t.nextProducer:n.producers;if(e!==void 0){if(to(n))do e=Ku(e);while(e!==void 0);t!==void 0?t.nextProducer=void 0:n.producers=void 0}}function eo(n){for(let t=n.producers;t!==void 0;t=t.nextProducer){let e=t.producer,i=t.lastReadVersion;if(i!==e.version||(cc(e),i!==e.version))return!0}return!1}function _i(n){if(to(n)){let t=n.producers;for(;t!==void 0;)t=Ku(t)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function E_(n,t){let e=n.consumersTail,i=to(n);if(e!==void 0?(t.nextConsumer=e.nextConsumer,e.nextConsumer=t):(t.nextConsumer=void 0,n.consumers=t),t.prevConsumer=e,n.consumersTail=t,!i)for(let r=n.producers;r!==void 0;r=r.nextProducer)E_(r.producer,r)}function Ku(n){let t=n.producer,e=n.nextProducer,i=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:t.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(t.consumers=i,!to(t)){let o=t.producers;for(;o!==void 0;)o=Ku(o)}return e}function to(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function lc(n){z0?.(n)}function dc(n,t){return Object.is(n,t)}function rs(n,t){let e=Object.create($0);e.computation=n,t!==void 0&&(e.equal=t);let i=()=>{if(cc(e),Wi(e),e.value===is)throw e.error;return e.value};return i[tt]=e,lc(e),i}var rc=Symbol("UNSET"),oc=Symbol("COMPUTING"),is=Symbol("ERRORED"),$0=he(I({},Gi),{value:rc,dirty:!0,error:null,equal:dc,kind:"computed",producerMustRecompute(n){return n.value===rc||n.value===oc},producerRecomputeValue(n){if(n.value===oc)throw new Error("");let t=n.value;n.value=oc;let e=gi(n),i,r=!1;try{i=n.computation(),U(null),r=t!==rc&&t!==is&&i!==is&&n.equal(t,i)}catch(o){i=is,n.error=o}finally{qi(n,e)}if(r){n.value=t;return}n.value=i,n.version++}});function G0(){throw new Error}var x_=G0;function I_(n){x_(n)}function Yu(n){x_=n}var W0=null;function Qu(n,t){let e=Object.create(os);e.value=n,t!==void 0&&(e.equal=t);let i=()=>N_(e);return i[tt]=e,lc(e),[i,s=>no(e,s),s=>Zu(e,s)]}function N_(n){return Wi(n),n.value}function no(n,t){qu()||I_(n),n.equal(n.value,t)||(n.value=t,q0(n))}function Zu(n,t){qu()||I_(n),no(n,t(n.value))}var os=he(I({},Gi),{equal:dc,value:void 0,kind:"signal"});function q0(n){n.version++,D_(),Wu(n),W0?.(n)}var Xu=he(I({},Gi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Ju(n){if(n.dirty=!1,n.version>0&&!eo(n))return;n.version++;let t=gi(n);try{n.cleanup(),n.fn()}finally{qi(n,t)}}var ef;function uc(){return ef}function Rn(n){let t=ef;return ef=n,t}var T_=Symbol("NotFound");function io(n){return n===T_||n?.name==="\u0275NotFound"}function M_(n){let t=U(null);try{return n()}finally{U(t)}}function te(n){return typeof n=="function"}function fc(n){let e=n(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var hc=fc(n=>function(e){n(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Ki(n,t){if(n){let e=n.indexOf(t);0<=e&&n.splice(e,1)}}var J=class n{constructor(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let t;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(te(i))try{i()}catch(o){t=o instanceof hc?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{k_(o)}catch(s){t=t??[],s instanceof hc?t=[...t,...s.errors]:t.push(s)}}if(t)throw new hc(t)}}add(t){var e;if(t&&t!==this)if(this.closed)k_(t);else{if(t instanceof n){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}}_hasParent(t){let{_parentage:e}=this;return e===t||Array.isArray(e)&&e.includes(t)}_addParent(t){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t}_removeParent(t){let{_parentage:e}=this;e===t?this._parentage=null:Array.isArray(e)&&Ki(e,t)}remove(t){let{_finalizers:e}=this;e&&Ki(e,t),t instanceof n&&t._removeParent(this)}};J.EMPTY=(()=>{let n=new J;return n.closed=!0,n})();var tf=J.EMPTY;function pc(n){return n instanceof J||n&&"closed"in n&&te(n.remove)&&te(n.add)&&te(n.unsubscribe)}function k_(n){te(n)?n():n.unsubscribe()}var hn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ro={setTimeout(n,t,...e){let{delegate:i}=ro;return i?.setTimeout?i.setTimeout(n,t,...e):setTimeout(n,t,...e)},clearTimeout(n){let{delegate:t}=ro;return(t?.clearTimeout||clearTimeout)(n)},delegate:void 0};function mc(n){ro.setTimeout(()=>{let{onUnhandledError:t}=hn;if(t)t(n);else throw n})}function Yi(){}var R_=nf("C",void 0,void 0);function A_(n){return nf("E",void 0,n)}function O_(n){return nf("N",n,void 0)}function nf(n,t,e){return{kind:n,value:t,error:e}}var Qi=null;function oo(n){if(hn.useDeprecatedSynchronousErrorHandling){let t=!Qi;if(t&&(Qi={errorThrown:!1,error:null}),n(),t){let{errorThrown:e,error:i}=Qi;if(Qi=null,e)throw i}}else n()}function P_(n){hn.useDeprecatedSynchronousErrorHandling&&Qi&&(Qi.errorThrown=!0,Qi.error=n)}var Zi=class extends J{constructor(t){super(),this.isStopped=!1,t?(this.destination=t,pc(t)&&t.add(this)):this.destination=Q0}static create(t,e,i){return new Kn(t,e,i)}next(t){this.isStopped?of(O_(t),this):this._next(t)}error(t){this.isStopped?of(A_(t),this):(this.isStopped=!0,this._error(t))}complete(){this.isStopped?of(R_,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(t){this.destination.next(t)}_error(t){try{this.destination.error(t)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},K0=Function.prototype.bind;function rf(n,t){return K0.call(n,t)}var sf=class{constructor(t){this.partialObserver=t}next(t){let{partialObserver:e}=this;if(e.next)try{e.next(t)}catch(i){gc(i)}}error(t){let{partialObserver:e}=this;if(e.error)try{e.error(t)}catch(i){gc(i)}else gc(t)}complete(){let{partialObserver:t}=this;if(t.complete)try{t.complete()}catch(e){gc(e)}}},Kn=class extends Zi{constructor(t,e,i){super();let r;if(te(t)||!t)r={next:t??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&hn.useDeprecatedNextContext?(o=Object.create(t),o.unsubscribe=()=>this.unsubscribe(),r={next:t.next&&rf(t.next,o),error:t.error&&rf(t.error,o),complete:t.complete&&rf(t.complete,o)}):r=t}this.destination=new sf(r)}};function gc(n){hn.useDeprecatedSynchronousErrorHandling?P_(n):mc(n)}function Y0(n){throw n}function of(n,t){let{onStoppedNotification:e}=hn;e&&ro.setTimeout(()=>e(n,t))}var Q0={closed:!0,next:Yi,error:Y0,complete:Yi};var so=typeof Symbol=="function"&&Symbol.observable||"@@observable";function pn(n){return n}function F_(n){return n.length===0?pn:n.length===1?n[0]:function(e){return n.reduce((i,r)=>r(i),e)}}var Y=class n{constructor(t){t&&(this._subscribe=t)}lift(t){let e=new n;return e.source=this,e.operator=t,e}subscribe(t,e,i){let r=X0(t)?t:new Kn(t,e,i);return oo(()=>{let{operator:o,source:s}=this;r.add(o?o.call(r,s):s?this._subscribe(r):this._trySubscribe(r))}),r}_trySubscribe(t){try{return this._subscribe(t)}catch(e){t.error(e)}}forEach(t,e){return e=L_(e),new e((i,r)=>{let o=new Kn({next:s=>{try{t(s)}catch(a){r(a),o.unsubscribe()}},error:r,complete:i});this.subscribe(o)})}_subscribe(t){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(t)}[so](){return this}pipe(...t){return F_(t)(this)}toPromise(t){return t=L_(t),new t((e,i)=>{let r;this.subscribe(o=>r=o,o=>i(o),()=>e(r))})}};Y.create=n=>new Y(n);function L_(n){var t;return(t=n??hn.Promise)!==null&&t!==void 0?t:Promise}function Z0(n){return n&&te(n.next)&&te(n.error)&&te(n.complete)}function X0(n){return n&&n instanceof Zi||Z0(n)&&pc(n)}function af(n){return te(n?.lift)}function se(n){return t=>{if(af(t))return t.lift(function(e){try{return n(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function re(n,t,e,i,r){return new cf(n,t,e,i,r)}var cf=class extends Zi{constructor(t,e,i,r,o,s){super(t),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(c){t.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){t.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){t.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((t=this.onFinalize)===null||t===void 0||t.call(this))}}};function V_(){return se((n,t)=>{let e=null;n._refCount++;let i=re(t,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){e=null;return}let r=n._connection,o=e;e=null,r&&(!o||r===o)&&r.unsubscribe(),t.unsubscribe()});n.subscribe(i),i.closed||(e=n.connect())})}var ss=class extends Y{constructor(t,e){super(),this.source=t,this.subjectFactory=e,this._subject=null,this._refCount=0,this._connection=null,af(t)&&(this.lift=t.lift)}_subscribe(t){return this.getSubject().subscribe(t)}getSubject(){let t=this._subject;return(!t||t.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:t}=this;this._subject=this._connection=null,t?.unsubscribe()}connect(){let t=this._connection;if(!t){t=this._connection=new J;let e=this.getSubject();t.add(this.source.subscribe(re(e,void 0,()=>{this._teardown(),e.complete()},i=>{this._teardown(),e.error(i)},()=>this._teardown()))),t.closed&&(this._connection=null,t=J.EMPTY)}return t}refCount(){return V_()(this)}};var ao={schedule(n){let t=requestAnimationFrame,e=cancelAnimationFrame,{delegate:i}=ao;i&&(t=i.requestAnimationFrame,e=i.cancelAnimationFrame);let r=t(o=>{e=void 0,n(o)});return new J(()=>e?.(r))},requestAnimationFrame(...n){let{delegate:t}=ao;return(t?.requestAnimationFrame||requestAnimationFrame)(...n)},cancelAnimationFrame(...n){let{delegate:t}=ao;return(t?.cancelAnimationFrame||cancelAnimationFrame)(...n)},delegate:void 0};var B_=fc(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var y=class extends Y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let e=new _c(this,this);return e.operator=t,e}_throwIfClosed(){if(this.closed)throw new B_}next(t){oo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let e of this.currentObservers)e.next(t)}})}error(t){oo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:e}=this;for(;e.length;)e.shift().error(t)}})}complete(){oo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:e,isStopped:i,observers:r}=this;return e||i?tf:(this.currentObservers=null,r.push(t),new J(()=>{this.currentObservers=null,Ki(r,t)}))}_checkFinalizedStatuses(t){let{hasError:e,thrownError:i,isStopped:r}=this;e?t.error(i):r&&t.complete()}asObservable(){let t=new Y;return t.source=this,t}};y.create=(n,t)=>new _c(n,t);var _c=class extends y{constructor(t,e){super(),this.destination=t,this.source=e}next(t){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,t)}error(t){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,t)}complete(){var t,e;(e=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||e===void 0||e.call(t)}_subscribe(t){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(t))!==null&&i!==void 0?i:tf}};var Lt=class extends y{constructor(t){super(),this._value=t}get value(){return this.getValue()}_subscribe(t){let e=super._subscribe(t);return!e.closed&&t.next(this._value),e}getValue(){let{hasError:t,thrownError:e,_value:i}=this;if(t)throw e;return this._throwIfClosed(),i}next(t){super.next(this._value=t)}};var as={now(){return(as.delegate||Date).now()},delegate:void 0};var Yn=class extends y{constructor(t=1/0,e=1/0,i=as){super(),this._bufferSize=t,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,t),this._windowTime=Math.max(1,e)}next(t){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(t),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(t)}_subscribe(t){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(t),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!t.closed;s+=i?1:2)t.next(o[s]);return this._checkFinalizedStatuses(t),e}_trimBuffer(){let{_bufferSize:t,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*t;if(t<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let c=1;c<i.length&&i[c]<=s;c+=2)a=c;a&&i.splice(0,a+1)}}};var vc=class extends J{constructor(t,e){super()}schedule(t,e=0){return this}};var cs={setInterval(n,t,...e){let{delegate:i}=cs;return i?.setInterval?i.setInterval(n,t,...e):setInterval(n,t,...e)},clearInterval(n){let{delegate:t}=cs;return(t?.clearInterval||clearInterval)(n)},delegate:void 0};var vi=class extends vc{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){var i;if(this.closed)return this;this.state=t;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(t,e,i=0){return cs.setInterval(t.flush.bind(t,this),i)}recycleAsyncId(t,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&cs.clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(t,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let i=!1,r;try{this.work(t)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:t,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Ki(i,this),t!=null&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null,super.unsubscribe()}}};var J0=1,lf,df={};function j_(n){return n in df?(delete df[n],!0):!1}var H_={setImmediate(n){let t=J0++;return df[t]=!0,lf||(lf=Promise.resolve()),lf.then(()=>j_(t)&&n()),t},clearImmediate(n){j_(n)}};var{setImmediate:ex,clearImmediate:tx}=H_,ls={setImmediate(...n){let{delegate:t}=ls;return(t?.setImmediate||ex)(...n)},clearImmediate(n){let{delegate:t}=ls;return(t?.clearImmediate||tx)(n)},delegate:void 0};var yc=class extends vi{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,i=0){return i!==null&&i>0?super.requestAsyncId(t,e,i):(t.actions.push(this),t._scheduled||(t._scheduled=ls.setImmediate(t.flush.bind(t,void 0))))}recycleAsyncId(t,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(t,e,i);let{actions:o}=t;e!=null&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(ls.clearImmediate(e),t._scheduled===e&&(t._scheduled=void 0))}};var uf=(()=>{class n{constructor(e,i=n.now){this.schedulerActionCtor=e,this.now=i}schedule(e,i=0,r){return new this.schedulerActionCtor(this,e).schedule(r,i)}}return n.now=as.now,n})();var yi=class extends uf{constructor(t,e=uf.now){super(t,e),this.actions=[],this._active=!1}flush(t){let{actions:e}=this;if(this._active){e.push(t);return}let i;this._active=!0;do if(i=t.execute(t.state,t.delay))break;while(t=e.shift());if(this._active=!1,i){for(;t=e.shift();)t.unsubscribe();throw i}}};var bc=class extends yi{flush(t){this._active=!0;let e=this._scheduled;this._scheduled=void 0;let{actions:i}=this,r;t=t||i.shift();do if(r=t.execute(t.state,t.delay))break;while((t=i[0])&&t.id===e&&i.shift());if(this._active=!1,r){for(;(t=i[0])&&t.id===e&&i.shift();)t.unsubscribe();throw r}}};var Sc=new bc(yc);var Qn=new yi(vi),z_=Qn;var Dc=class extends vi{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,i=0){return i!==null&&i>0?super.requestAsyncId(t,e,i):(t.actions.push(this),t._scheduled||(t._scheduled=ao.requestAnimationFrame(()=>t.flush(void 0))))}recycleAsyncId(t,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(t,e,i);let{actions:o}=t;e!=null&&e===t._scheduled&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(ao.cancelAnimationFrame(e),t._scheduled=void 0)}};var wc=class extends yi{flush(t){this._active=!0;let e;t?e=t.id:(e=this._scheduled,this._scheduled=void 0);let{actions:i}=this,r;t=t||i.shift();do if(r=t.execute(t.state,t.delay))break;while((t=i[0])&&t.id===e&&i.shift());if(this._active=!1,r){for(;(t=i[0])&&t.id===e&&i.shift();)t.unsubscribe();throw r}}};var co=new wc(Dc);var Cc=new Y(n=>n.complete());function Ec(n){return n&&te(n.schedule)}function ff(n){return n[n.length-1]}function xc(n){return te(ff(n))?n.pop():void 0}function An(n){return Ec(ff(n))?n.pop():void 0}function U_(n,t){return typeof ff(n)=="number"?n.pop():t}function G_(n,t,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{l(i.next(d))}catch(u){s(u)}}function c(d){try{l(i.throw(d))}catch(u){s(u)}}function l(d){d.done?o(d.value):r(d.value).then(a,c)}l((i=i.apply(n,t||[])).next())})}function $_(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],i=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Xi(n){return this instanceof Xi?(this.v=n,this):new Xi(n)}function W_(n,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(n,t||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(h){return function(m){return Promise.resolve(m).then(h,u)}}function a(h,m){i[h]&&(r[h]=function(g){return new Promise(function(v,C){o.push([h,g,v,C])>1||c(h,g)})},m&&(r[h]=m(r[h])))}function c(h,m){try{l(i[h](m))}catch(g){p(o[0][3],g)}}function l(h){h.value instanceof Xi?Promise.resolve(h.value.v).then(d,u):p(o[0][2],h)}function d(h){c("next",h)}function u(h){c("throw",h)}function p(h,m){h(m),o.shift(),o.length&&c(o[0][0],o[0][1])}}function q_(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],e;return t?t.call(n):(n=typeof $_=="function"?$_(n):n[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=n[o]&&function(s){return new Promise(function(a,c){s=n[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var Ic=(n=>n&&typeof n.length=="number"&&typeof n!="function");function Nc(n){return te(n?.then)}function Tc(n){return te(n[so])}function Mc(n){return Symbol.asyncIterator&&te(n?.[Symbol.asyncIterator])}function kc(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function nx(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Rc=nx();function Ac(n){return te(n?.[Rc])}function Oc(n){return W_(this,arguments,function*(){let e=n.getReader();try{for(;;){let{value:i,done:r}=yield Xi(e.read());if(r)return yield Xi(void 0);yield yield Xi(i)}}finally{e.releaseLock()}})}function Pc(n){return te(n?.getReader)}function we(n){if(n instanceof Y)return n;if(n!=null){if(Tc(n))return ix(n);if(Ic(n))return rx(n);if(Nc(n))return ox(n);if(Mc(n))return K_(n);if(Ac(n))return sx(n);if(Pc(n))return ax(n)}throw kc(n)}function ix(n){return new Y(t=>{let e=n[so]();if(te(e.subscribe))return e.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function rx(n){return new Y(t=>{for(let e=0;e<n.length&&!t.closed;e++)t.next(n[e]);t.complete()})}function ox(n){return new Y(t=>{n.then(e=>{t.closed||(t.next(e),t.complete())},e=>t.error(e)).then(null,mc)})}function sx(n){return new Y(t=>{for(let e of n)if(t.next(e),t.closed)return;t.complete()})}function K_(n){return new Y(t=>{cx(n,t).catch(e=>t.error(e))})}function ax(n){return K_(Oc(n))}function cx(n,t){var e,i,r,o;return G_(this,void 0,void 0,function*(){try{for(e=q_(n);i=yield e.next(),!i.done;){let s=i.value;if(t.next(s),t.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}t.complete()})}function Vt(n,t,e,i=0,r=!1){let o=t.schedule(function(){e(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(o),!r)return o}function Fc(n,t=0){return se((e,i)=>{e.subscribe(re(i,r=>Vt(i,n,()=>i.next(r),t),()=>Vt(i,n,()=>i.complete(),t),r=>Vt(i,n,()=>i.error(r),t)))})}function Lc(n,t=0){return se((e,i)=>{i.add(n.schedule(()=>e.subscribe(i),t))})}function Y_(n,t){return we(n).pipe(Lc(t),Fc(t))}function Q_(n,t){return we(n).pipe(Lc(t),Fc(t))}function Z_(n,t){return new Y(e=>{let i=0;return t.schedule(function(){i===n.length?e.complete():(e.next(n[i++]),e.closed||this.schedule())})})}function X_(n,t){return new Y(e=>{let i;return Vt(e,t,()=>{i=n[Rc](),Vt(e,t,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>te(i?.return)&&i.return()})}function Vc(n,t){if(!n)throw new Error("Iterable cannot be null");return new Y(e=>{Vt(e,t,()=>{let i=n[Symbol.asyncIterator]();Vt(e,t,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function J_(n,t){return Vc(Oc(n),t)}function ev(n,t){if(n!=null){if(Tc(n))return Y_(n,t);if(Ic(n))return Z_(n,t);if(Nc(n))return Q_(n,t);if(Mc(n))return Vc(n,t);if(Ac(n))return X_(n,t);if(Pc(n))return J_(n,t)}throw kc(n)}function Qt(n,t){return t?ev(n,t):we(n)}function vt(...n){let t=An(n);return Qt(n,t)}function hf(n,t){let e=te(n)?n:()=>n,i=r=>r.error(e());return new Y(t?r=>t.schedule(i,0,r):i)}function Bc(n){return!!n&&(n instanceof Y||te(n.lift)&&te(n.subscribe))}function tv(n){return n instanceof Date&&!isNaN(n)}function be(n,t){return se((e,i)=>{let r=0;e.subscribe(re(i,o=>{i.next(n.call(t,o,r++))}))})}var{isArray:lx}=Array;function dx(n,t){return lx(t)?n(...t):n(t)}function jc(n){return be(t=>dx(n,t))}var{isArray:ux}=Array,{getPrototypeOf:fx,prototype:hx,keys:px}=Object;function Hc(n){if(n.length===1){let t=n[0];if(ux(t))return{args:t,keys:null};if(mx(t)){let e=px(t);return{args:e.map(i=>t[i]),keys:e}}}return{args:n,keys:null}}function mx(n){return n&&typeof n=="object"&&fx(n)===hx}function zc(n,t){return n.reduce((e,i,r)=>(e[i]=t[r],e),{})}function ds(...n){let t=An(n),e=xc(n),{args:i,keys:r}=Hc(n);if(i.length===0)return Qt([],t);let o=new Y(gx(i,t,r?s=>zc(r,s):pn));return e?o.pipe(jc(e)):o}function gx(n,t,e=pn){return i=>{nv(t,()=>{let{length:r}=n,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)nv(t,()=>{let l=Qt(n[c],t),d=!1;l.subscribe(re(i,u=>{o[c]=u,d||(d=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function nv(n,t,e){n?Vt(e,n,t):t()}function iv(n,t,e,i,r,o,s,a){let c=[],l=0,d=0,u=!1,p=()=>{u&&!c.length&&!l&&t.complete()},h=g=>l<i?m(g):c.push(g),m=g=>{o&&t.next(g),l++;let v=!1;we(e(g,d++)).subscribe(re(t,C=>{r?.(C),o?h(C):t.next(C)},()=>{v=!0},void 0,()=>{if(v)try{for(l--;c.length&&l<i;){let C=c.shift();s?Vt(t,s,()=>m(C)):m(C)}p()}catch(C){t.error(C)}}))};return n.subscribe(re(t,h,()=>{u=!0,p()})),()=>{a?.()}}function bi(n,t,e=1/0){return te(t)?bi((i,r)=>be((o,s)=>t(i,o,r,s))(we(n(i,r))),e):(typeof t=="number"&&(e=t),se((i,r)=>iv(i,r,n,e)))}function Uc(n=1/0){return bi(pn,n)}function rv(){return Uc(1)}function us(...n){return rv()(Qt(n,An(n)))}function pf(n){return new Y(t=>{we(n()).subscribe(t)})}function fs(...n){let t=xc(n),{args:e,keys:i}=Hc(n),r=new Y(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),c=s,l=s;for(let d=0;d<s;d++){let u=!1;we(e[d]).subscribe(re(o,p=>{u||(u=!0,l--),a[d]=p},()=>c--,void 0,()=>{(!c||!u)&&(l||o.next(i?zc(i,a):a),o.complete())}))}});return t?r.pipe(jc(t)):r}function lo(n=0,t,e=z_){let i=-1;return t!=null&&(Ec(t)?e=t:i=t),new Y(r=>{let o=tv(n)?+n-e.now():n;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function mf(n=0,t=Qn){return n<0&&(n=0),lo(n,n,t)}function yt(...n){let t=An(n),e=U_(n,1/0),i=n;return i.length?i.length===1?we(i[0]):Uc(e)(Qt(i,t)):Cc}function qe(n,t){return se((e,i)=>{let r=0;e.subscribe(re(i,o=>n.call(t,o,r++)&&i.next(o)))})}function ov(n){return se((t,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}s&&e.complete()},c=()=>{o=null,s&&e.complete()};t.subscribe(re(e,l=>{i=!0,r=l,o||we(n(l)).subscribe(o=re(e,a,c))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function uo(n,t=Qn){return ov(()=>lo(n,t))}function $c(n){return se((t,e)=>{let i=null,r=!1,o;i=t.subscribe(re(e,void 0,void 0,s=>{o=we(n(s,$c(n)(t))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function gf(n,t){return te(t)?bi(n,t,1):bi(n,1)}function _f(n,t=Qn){return se((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=s+n,d=t.now();if(d<l){r=this.schedule(void 0,l-d),i.add(r);return}a()}e.subscribe(re(i,l=>{o=l,s=t.now(),r||(r=t.schedule(c,n),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function On(n){return n<=0?()=>Cc:se((t,e)=>{let i=0;t.subscribe(re(e,r=>{++i<=n&&(e.next(r),n<=i&&e.complete())}))})}function sv(){return se((n,t)=>{n.subscribe(re(t,Yi))})}function av(n){return be(()=>n)}function vf(n,t){return t?e=>us(t.pipe(On(1),sv()),e.pipe(vf(n))):bi((e,i)=>we(n(e,i)).pipe(On(1),av(e)))}function yf(n,t=Qn){let e=lo(n,t);return vf(()=>e)}function Gc(n,t=pn){return n=n??_x,se((e,i)=>{let r,o=!0;e.subscribe(re(i,s=>{let a=t(s);(o||!n(r,a))&&(o=!1,r=a,i.next(s))}))})}function _x(n,t){return n===t}function hs(n){return se((t,e)=>{try{t.subscribe(e)}finally{e.add(n)}})}function Wc(){return se((n,t)=>{let e,i=!1;n.subscribe(re(t,r=>{let o=e;e=r,i&&t.next([o,r]),i=!0}))})}function ps(n={}){let{connector:t=()=>new y,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=n;return o=>{let s,a,c,l=0,d=!1,u=!1,p=()=>{a?.unsubscribe(),a=void 0},h=()=>{p(),s=c=void 0,d=u=!1},m=()=>{let g=s;h(),g?.unsubscribe()};return se((g,v)=>{l++,!u&&!d&&p();let C=c=c??t();v.add(()=>{l--,l===0&&!u&&!d&&(a=bf(m,r))}),C.subscribe(v),!s&&l>0&&(s=new Kn({next:Q=>C.next(Q),error:Q=>{u=!0,p(),a=bf(h,e,Q),C.error(Q)},complete:()=>{d=!0,p(),a=bf(h,i),C.complete()}}),we(g).subscribe(s))})(o)}}function bf(n,t,...e){if(t===!0){n();return}if(t===!1)return;let i=new Kn({next:()=>{i.unsubscribe(),n()}});return we(t(...e)).subscribe(i)}function qc(n,t,e){let i,r=!1;return n&&typeof n=="object"?{bufferSize:i=1/0,windowTime:t=1/0,refCount:r=!1,scheduler:e}=n:i=n??1/0,ps({connector:()=>new Yn(i,t,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Sf(n){return qe((t,e)=>n<=e)}function Bt(...n){let t=An(n);return se((e,i)=>{(t?us(n,e,t):us(n,e)).subscribe(i)})}function Pn(n,t){return se((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(re(i,c=>{r?.unsubscribe();let l=0,d=o++;we(n(c,d)).subscribe(r=re(i,u=>i.next(t?t(c,u,d,l++):u),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function ae(n){return se((t,e)=>{we(n).subscribe(re(e,()=>e.complete(),Yi)),!e.closed&&t.subscribe(e)})}function Df(n,t=!1){return se((e,i)=>{let r=0;e.subscribe(re(i,o=>{let s=n(o,r++);(s||t)&&i.next(o),!s&&i.complete()}))})}function Zt(n,t,e){let i=te(n)||t||e?{next:n,error:t,complete:e}:n;return i?se((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(re(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):pn}var el="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",S=class extends Error{code;constructor(t,e){super(po(t,e)),this.code=t}};function vx(n){return`NG0${Math.abs(n)}`}function po(n,t){return`${vx(n)}${t?": "+t:""}`}function xe(n){for(let t in n)if(n[t]===xe)return t;throw Error("")}function fv(n,t){for(let e in t)t.hasOwnProperty(e)&&!n.hasOwnProperty(e)&&(n[e]=t[e])}function tl(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(tl).join(", ")}]`;if(n==null)return""+n;let t=n.overriddenName||n.name;if(t)return`${t}`;let e=n.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function nl(n,t){return n?t?`${n} ${t}`:n:t||""}var yx=xe({__forward_ref__:xe});function Ht(n){return n.__forward_ref__=Ht,n}function dt(n){return Pf(n)?n():n}function Pf(n){return typeof n=="function"&&n.hasOwnProperty(yx)&&n.__forward_ref__===Ht}function ne(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function Te(n){return{providers:n.providers||[],imports:n.imports||[]}}function il(n){return bx(n,rl)}function bx(n,t){return n.hasOwnProperty(t)&&n[t]||null}function Sx(n){let t=n?.[rl]??null;return t||null}function Cf(n){return n&&n.hasOwnProperty(Yc)?n[Yc]:null}var rl=xe({\u0275prov:xe}),Yc=xe({\u0275inj:xe}),_=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(t,e){this._desc=t,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=ne({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Ff(n){return n&&!!n.\u0275providers}var bs=xe({\u0275cmp:xe}),Ss=xe({\u0275dir:xe}),Lf=xe({\u0275pipe:xe});var gs=xe({\u0275fac:xe}),rr=xe({__NG_ELEMENT_ID__:xe}),cv=xe({__NG_ENV_ID__:xe});function Di(n){return Bf(n,"@Component"),n[bs]||null}function Vf(n){return Bf(n,"@Directive"),n[Ss]||null}function hv(n){return Bf(n,"@Pipe"),n[Lf]||null}function Bf(n,t){if(n==null)throw new S(-919,!1)}function jf(n){return typeof n=="string"?n:n==null?"":String(n)}var pv=xe({ngErrorCode:xe}),Dx=xe({ngErrorMessage:xe}),wx=xe({ngTokenPath:xe});function Hf(n,t){return mv("",-200,t)}function ol(n,t){throw new S(-201,!1)}function mv(n,t,e){let i=new S(t,n);return i[pv]=t,i[Dx]=n,e&&(i[wx]=e),i}function Cx(n){return n[pv]}var Ef;function gv(){return Ef}function Gt(n){let t=Ef;return Ef=n,t}function zf(n,t,e){let i=il(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(t!==void 0)return t;ol(n,"")}var mo=globalThis;var Ex={},Ji=Ex,xx="__NG_DI_FLAG__",xf=class{injector;constructor(t){this.injector=t}retrieve(t,e){let i=er(e)||0;try{return this.injector.get(t,i&8?null:Ji,i)}catch(r){if(io(r))return r;throw r}}};function Ix(n,t=0){let e=uc();if(e===void 0)throw new S(-203,!1);if(e===null)return zf(n,void 0,t);{let i=Nx(t),r=e.retrieve(n,i);if(io(r)){if(i.optional)return null;throw r}return r}}function B(n,t=0){return(gv()||Ix)(dt(n),t)}function f(n,t){return B(n,er(t))}function er(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Nx(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function If(n){let t=[];for(let e=0;e<n.length;e++){let i=dt(n[e]);if(Array.isArray(i)){if(i.length===0)throw new S(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=Tx(a);typeof c=="number"?c===-1?r=a.token:o|=c:r=a}t.push(B(r,o))}else t.push(B(i))}return t}function Tx(n){return n[xx]}function tr(n,t){let e=n.hasOwnProperty(gs);return e?n[gs]:null}function _v(n,t,e){if(n.length!==t.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],o=t[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function vv(n){return n.flat(Number.POSITIVE_INFINITY)}function sl(n,t){n.forEach(e=>Array.isArray(e)?sl(e,t):t(e))}function Uf(n,t,e){t>=n.length?n.push(e):n.splice(t,0,e)}function Ds(n,t){return t>=n.length-1?n.pop():n.splice(t,1)[0]}function yv(n,t){let e=[];for(let i=0;i<n;i++)e.push(t);return e}function bv(n,t,e,i){let r=n.length;if(r==t)n.push(e,i);else if(r===1)n.push(i,n[0]),n[0]=e;else{for(r--,n.push(n[r-1],n[r]);r>t;){let o=r-2;n[r]=n[o],r--}n[t]=e,n[t+1]=i}}function al(n,t,e){let i=go(n,t);return i>=0?n[i|1]=e:(i=~i,bv(n,i,t,e)),i}function cl(n,t){let e=go(n,t);if(e>=0)return n[e|1]}function go(n,t){return Mx(n,t,1)}function Mx(n,t,e){let i=0,r=n.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=n[o<<e];if(t===s)return o<<e;s>t?r=o:i=o+1}return~(r<<e)}var wi={},bt=[],_o=new _(""),ws=new _("",-1),$f=new _(""),ho=class{get(t,e=Ji){if(e===Ji){let r=mv("",-201);throw r.name="\u0275NotFound",r}return e}};function Sv(...n){return{\u0275providers:Gf(!0,n),\u0275fromNgModule:!0}}function Gf(n,...t){let e=[],i=new Set,r,o=s=>{e.push(s)};return sl(t,s=>{let a=s;Qc(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Dv(r,o),e}function Dv(n,t){for(let e=0;e<n.length;e++){let{ngModule:i,providers:r}=n[e];Wf(r,o=>{t(o,i)})}}function Qc(n,t,e,i){if(n=dt(n),!n)return!1;let r=null,o=Cf(n),s=!o&&Di(n);if(!o&&!s){let c=n.ngModule;if(o=Cf(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=n}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let l of c)Qc(l,t,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;sl(o.imports,d=>{Qc(d,t,e,i)&&(l||=[],l.push(d))}),l!==void 0&&Dv(l,t)}if(!a){let l=tr(r)||(()=>new r);t({provide:r,useFactory:l,deps:bt},r),t({provide:$f,useValue:r,multi:!0},r),t({provide:_o,useValue:()=>B(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=n;Wf(c,d=>{t(d,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Wf(n,t){for(let e of n)Ff(e)&&(e=e.\u0275providers),Array.isArray(e)?Wf(e,t):t(e)}var kx=xe({provide:String,useValue:xe});function wv(n){return n!==null&&typeof n=="object"&&kx in n}function Rx(n){return!!(n&&n.useExisting)}function Ax(n){return!!(n&&n.useFactory)}function nr(n){return typeof n=="function"}function Cv(n){return!!n.useClass}var Cs=new _(""),Kc={},lv={},wf;function vo(){return wf===void 0&&(wf=new ho),wf}var Ke=class{},ir=class extends Ke{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(t,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Tf(t,s=>this.processProvider(s)),this.records.set(ws,fo(void 0,this)),r.has("environment")&&this.records.set(Ke,fo(void 0,this));let o=this.records.get(Cs);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get($f,bt,{self:!0}))}retrieve(t,e){let i=er(e)||0;try{return this.get(t,Ji,i)}catch(r){if(io(r))return r;throw r}}destroy(){ms(this),this._destroyed=!0;let t=U(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),U(t)}}onDestroy(t){return ms(this),this._onDestroyHooks.push(t),()=>this.removeOnDestroy(t)}runInContext(t){ms(this);let e=Rn(this),i=Gt(void 0),r;try{return t()}finally{Rn(e),Gt(i)}}get(t,e=Ji,i){if(ms(this),t.hasOwnProperty(cv))return t[cv](this);let r=er(i),o,s=Rn(this),a=Gt(void 0);try{if(!(r&4)){let l=this.records.get(t);if(l===void 0){let d=Vx(t)&&il(t);d&&this.injectableDefInScope(d)?l=fo(Nf(t),Kc):l=null,this.records.set(t,l)}if(l!=null)return this.hydrate(t,l,r)}let c=r&2?vo():this.parent;return e=r&8&&e===Ji?null:e,c.get(t,e)}catch(c){let l=Cx(c);throw l===-200||l===-201?new S(l,null):c}finally{Gt(a),Rn(s)}}resolveInjectorInitializers(){let t=U(null),e=Rn(this),i=Gt(void 0),r;try{let o=this.get(_o,bt,{self:!0});for(let s of o)s()}finally{Rn(e),Gt(i),U(t)}}toString(){return"R3Injector[...]"}processProvider(t){t=dt(t);let e=nr(t)?t:dt(t&&t.provide),i=Px(t);if(!nr(t)&&t.multi===!0){let r=this.records.get(e);r||(r=fo(void 0,Kc,!0),r.factory=()=>If(r.multi),this.records.set(e,r)),e=t,r.multi.push(t)}this.records.set(e,i)}hydrate(t,e,i){let r=U(null);try{if(e.value===lv)throw Hf("");return e.value===Kc&&(e.value=lv,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&Lx(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{U(r)}}injectableDefInScope(t){if(!t.providedIn)return!1;let e=dt(t.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(t){let e=this._onDestroyHooks.indexOf(t);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Nf(n){let t=il(n),e=t!==null?t.factory:tr(n);if(e!==null)return e;if(n instanceof _)throw new S(-204,!1);if(n instanceof Function)return Ox(n);throw new S(-204,!1)}function Ox(n){if(n.length>0)throw new S(-204,!1);let e=Sx(n);return e!==null?()=>e.factory(n):()=>new n}function Px(n){if(wv(n))return fo(void 0,n.useValue);{let t=qf(n);return fo(t,Kc)}}function qf(n,t,e){let i;if(nr(n)){let r=dt(n);return tr(r)||Nf(r)}else if(wv(n))i=()=>dt(n.useValue);else if(Ax(n))i=()=>n.useFactory(...If(n.deps||[]));else if(Rx(n))i=(r,o)=>B(dt(n.useExisting),o!==void 0&&o&8?8:void 0);else{let r=dt(n&&(n.useClass||n.provide));if(Fx(n))i=()=>new r(...If(n.deps));else return tr(r)||Nf(r)}return i}function ms(n){if(n.destroyed)throw new S(-205,!1)}function fo(n,t,e=!1){return{factory:n,value:t,multi:e?[]:void 0}}function Fx(n){return!!n.deps}function Lx(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function Vx(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function Tf(n,t){for(let e of n)Array.isArray(e)?Tf(e,t):e&&Ff(e)?Tf(e.\u0275providers,t):t(e)}function yo(n,t){let e;n instanceof ir?(ms(n),e=n):e=new xf(n);let i,r=Rn(e),o=Gt(void 0);try{return t()}finally{Rn(r),Gt(o)}}function Ev(){return gv()!==void 0||uc()!=null}var mn=0,F=1,K=2,nt=3,Xt=4,St=5,or=6,bo=7,Ye=8,Dt=9,Ln=10,_e=11,So=12,Kf=13,Ci=14,Rt=15,Ei=16,sr=17,Vn=18,gn=19,Yf=20,Zn=21,ll=22,Si=23,Wt=24,ar=25,Jt=26,He=27,xv=1,Qf=6,cr=7,Es=8,lr=9,Ve=10;function Jn(n){return Array.isArray(n)&&typeof n[xv]=="object"}function en(n){return Array.isArray(n)&&n[xv]===!0}function Zf(n){return(n.flags&4)!==0}function Bn(n){return n.componentOffset>-1}function Do(n){return(n.flags&1)===1}function jn(n){return!!n.template}function wo(n){return(n[K]&512)!==0}function dr(n){return(n[K]&256)===256}var at=(function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n[n.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",n})(at||{});var Xf="svg",Iv="math";function ut(n){for(;Array.isArray(n);)n=n[mn];return n}function Jf(n,t){return ut(t[n])}function At(n,t){return ut(t[n.index])}function dl(n,t){return n.data[t]}function Nv(n,t){return n[t]}function tn(n,t){let e=t[n];return Jn(e)?e:e[mn]}function Tv(n){return(n[K]&4)===4}function ul(n){return(n[K]&128)===128}function Mv(n){return en(n[nt])}function nn(n,t){return t==null?null:n[t]}function eh(n){n[sr]=0}function th(n){n[K]&1024||(n[K]|=1024,ul(n)&&ur(n))}function kv(n,t){for(;n>0;)t=t[Ci],n--;return t}function xs(n){return!!(n[K]&9216||n[Wt]?.dirty)}function fl(n){n[Ln].changeDetectionScheduler?.notify(8),n[K]&64&&(n[K]|=1024),xs(n)&&ur(n)}function ur(n){n[Ln].changeDetectionScheduler?.notify(0);let t=Xn(n);for(;t!==null&&!(t[K]&8192||(t[K]|=8192,!ul(t)));)t=Xn(t)}function hl(n,t){if(dr(n))throw new S(911,!1);n[Zn]===null&&(n[Zn]=[]),n[Zn].push(t)}function Rv(n,t){if(n[Zn]===null)return;let e=n[Zn].indexOf(t);e!==-1&&n[Zn].splice(e,1)}function Xn(n){let t=n[nt];return en(t)?t[nt]:t}function nh(n){return n[bo]??=[]}function ih(n){return n.cleanup??=[]}function Av(n,t,e,i){let r=nh(t);r.push(e),n.firstCreatePass&&ih(n).push(i,r.length-1)}var oe={lFrame:Gv(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Mf=!1;function Ov(){return oe.lFrame.elementDepthCount}function Pv(){oe.lFrame.elementDepthCount++}function rh(){oe.lFrame.elementDepthCount--}function pl(){return oe.bindingsEnabled}function oh(){return oe.skipHydrationRootTNode!==null}function sh(n){return oe.skipHydrationRootTNode===n}function ah(){oe.skipHydrationRootTNode=null}function G(){return oe.lFrame.lView}function Ie(){return oe.lFrame.tView}function wt(n){return oe.lFrame.contextLView=n,n[Ye]}function Ct(n){return oe.lFrame.contextLView=null,n}function Be(){let n=ch();for(;n!==null&&n.type===64;)n=n.parent;return n}function ch(){return oe.lFrame.currentTNode}function Fv(){let n=oe.lFrame,t=n.currentTNode;return n.isParent?t:t.parent}function Co(n,t){let e=oe.lFrame;e.currentTNode=n,e.isParent=t}function lh(){return oe.lFrame.isParent}function dh(){oe.lFrame.isParent=!1}function Lv(){return oe.lFrame.contextLView}function uh(){return Mf}function _s(n){let t=Mf;return Mf=n,t}function Vv(){let n=oe.lFrame,t=n.bindingRootIndex;return t===-1&&(t=n.bindingRootIndex=n.tView.bindingStartIndex),t}function Bv(n){return oe.lFrame.bindingIndex=n}function ei(){return oe.lFrame.bindingIndex++}function fh(n){let t=oe.lFrame,e=t.bindingIndex;return t.bindingIndex=t.bindingIndex+n,e}function jv(){return oe.lFrame.inI18n}function Hv(n,t){let e=oe.lFrame;e.bindingIndex=e.bindingRootIndex=n,ml(t)}function zv(){return oe.lFrame.currentDirectiveIndex}function ml(n){oe.lFrame.currentDirectiveIndex=n}function Uv(n){let t=oe.lFrame.currentDirectiveIndex;return t===-1?null:n[t]}function gl(){return oe.lFrame.currentQueryIndex}function Is(n){oe.lFrame.currentQueryIndex=n}function Bx(n){let t=n[F];return t.type===2?t.declTNode:t.type===1?n[St]:null}function hh(n,t,e){if(e&4){let r=t,o=n;for(;r=r.parent,r===null&&!(e&1);)if(r=Bx(o),r===null||(o=o[Ci],r.type&10))break;if(r===null)return!1;t=r,n=o}let i=oe.lFrame=$v();return i.currentTNode=t,i.lView=n,!0}function _l(n){let t=$v(),e=n[F];oe.lFrame=t,t.currentTNode=e.firstChild,t.lView=n,t.tView=e,t.contextLView=n,t.bindingIndex=e.bindingStartIndex,t.inI18n=!1}function $v(){let n=oe.lFrame,t=n===null?null:n.child;return t===null?Gv(n):t}function Gv(n){let t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=t),t}function Wv(){let n=oe.lFrame;return oe.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var ph=Wv;function vl(){let n=Wv();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function qv(n){return(oe.lFrame.contextLView=kv(n,oe.lFrame.contextLView))[Ye]}function ti(){return oe.lFrame.selectedIndex}function xi(n){oe.lFrame.selectedIndex=n}function fr(){let n=oe.lFrame;return dl(n.tView,n.selectedIndex)}function Et(){oe.lFrame.currentNamespace=Xf}function Eo(){jx()}function jx(){oe.lFrame.currentNamespace=null}function mh(){return oe.lFrame.currentNamespace}var Kv=!0;function yl(){return Kv}function Ns(n){Kv=n}function gh(){let n,t;return{promise:new Promise((i,r)=>{n=i,t=r}),resolve:n,reject:t}}function kf(n,t=null,e=null,i){let r=Yv(n,t,e,i);return r.resolveInjectorInitializers(),r}function Yv(n,t=null,e=null,i,r=new Set){let o=[e||bt,Sv(n)],s;return new ir(o,t||vo(),s||null,r)}var ee=class n{static THROW_IF_NOT_FOUND=Ji;static NULL=new ho;static create(t,e){if(Array.isArray(t))return kf({name:""},e,t,"");{let i=t.name??"";return kf({name:i},t.parent,t.providers,i)}}static \u0275prov=ne({token:n,providedIn:"any",factory:()=>B(ws)});static __NG_ELEMENT_ID__=-1},A=new _(""),kt=class{static __NG_ELEMENT_ID__=Hx;static __NG_ENV_ID__=t=>t},Zc=class extends kt{_lView;constructor(t){super(),this._lView=t}get destroyed(){return dr(this._lView)}onDestroy(t){let e=this._lView;return hl(e,t),()=>Rv(e,t)}};function Hx(){return new Zc(G())}var Qv=!1,Zv=new _(""),hr=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Lt(!1);debugTaskTracker=f(Zv,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new Y(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=ne({token:n,providedIn:"root",factory:()=>new n})}return n})(),Rf=class extends y{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(t=!1){super(),this.__isAsync=t,Ev()&&(this.destroyRef=f(kt,{optional:!0})??void 0,this.pendingTasks=f(hr,{optional:!0})??void 0)}emit(t){let e=U(null);try{super.next(t)}finally{U(e)}}subscribe(t,e,i){let r=t,o=e||(()=>null),s=i;if(t&&typeof t=="object"){let c=t;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return t instanceof J&&t.add(a),a}wrapInTimeout(t){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{t(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},P=Rf;function Xc(...n){}function _h(n){let t,e;function i(){n=Xc;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),t!==void 0&&clearTimeout(t)}catch(r){}}return t=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{n(),i()})),()=>i()}function Xv(n){return queueMicrotask(()=>n()),()=>{n=Xc}}var vh="isAngularZone",vs=vh+"_ID",zx=0,M=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new P(!1);onMicrotaskEmpty=new P(!1);onStable=new P(!1);onError=new P(!1);constructor(t){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=Qv}=t;if(typeof Zone>"u")throw new S(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,Gx(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(vh)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new S(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new S(909,!1)}run(t,e,i){return this._inner.run(t,e,i)}runTask(t,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,t,Ux,Xc,Xc);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(t,e,i){return this._inner.runGuarded(t,e,i)}runOutsideAngular(t){return this._outer.run(t)}},Ux={};function yh(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function $x(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function t(){_h(()=>{n.callbackScheduled=!1,Af(n),n.isCheckStableRunning=!0,yh(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{t()}):n._outer.run(()=>{t()}),Af(n)}function Gx(n){let t=()=>{$x(n)},e=zx++;n._inner=n._inner.fork({name:"angular",properties:{[vh]:!0,[vs]:e,[vs+e]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(Wx(c))return i.invokeTask(o,s,a,c);try{return dv(n),i.invokeTask(o,s,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&t(),uv(n)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return dv(n),i.invoke(o,s,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!qx(c)&&t(),uv(n)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,Af(n),yh(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function Af(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function dv(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function uv(n){n._nesting--,yh(n)}var ys=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new P;onMicrotaskEmpty=new P;onStable=new P;onError=new P;run(t,e,i){return t.apply(e,i)}runGuarded(t,e,i){return t.apply(e,i)}runOutsideAngular(t){return t()}runTask(t,e,i,r){return t.apply(e,i)}};function Wx(n){return Jv(n,"__ignore_ng_zone__")}function qx(n){return Jv(n,"__scheduler_tick__")}function Jv(n,t){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[t]===!0}var jt=class{_console=console;handleError(t){this._console.error("ERROR",t)}},Ii=new _("",{factory:()=>{let n=f(M),t=f(Ke),e;return i=>{n.runOutsideAngular(()=>{t.destroyed&&!e?setTimeout(()=>{throw i}):(e??=t.get(jt),e.handleError(i))})}}}),ey={provide:_o,useValue:()=>{let n=f(jt,{optional:!0})},multi:!0};function Se(n,t){let[e,i,r]=Qu(n,t?.equal),o=e,s=o[tt];return o.set=i,o.update=r,o.asReadonly=ty.bind(o),o}function ty(){let n=this[tt];if(n.readonlyFn===void 0){let t=()=>this();t[tt]=n,n.readonlyFn=t}return n.readonlyFn}var ni=new _("",{factory:()=>Kx}),Kx="ng";var bl=new _(""),pr=new _("",{providedIn:"platform",factory:()=>"unknown"}),Ni=new _(""),Ti=new _("",{factory:()=>f(A).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var xo=(()=>{class n{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=Yx}return n})();function Yx(){return new xo(G(),Be())}var Fn=class{},Ts=new _("",{factory:()=>!0});var bh=new _(""),Sl=(()=>{class n{static \u0275prov=ne({token:n,providedIn:"root",factory:()=>new Of})}return n})(),Of=class{dirtyEffectCount=0;queues=new Map;add(t){this.enqueue(t),this.schedule(t)}schedule(t){t.dirty&&this.dirtyEffectCount++}remove(t){let e=t.zone,i=this.queues.get(e);i.has(t)&&(i.delete(t),t.dirty&&this.dirtyEffectCount--)}enqueue(t){let e=t.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(t)||i.add(t)}flush(){for(;this.dirtyEffectCount>0;){let t=!1;for(let[e,i]of this.queues)e===null?t||=this.flushQueue(i):t||=e.run(()=>this.flushQueue(i));t||(this.dirtyEffectCount=0)}}flushQueue(t){let e=!1;for(let i of t)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Jc=class{[tt];constructor(t){this[tt]=t}destroy(){this[tt].destroy()}};function ii(n,t){let e=t?.injector??f(ee),i=t?.manualCleanup!==!0?e.get(kt):null,r,o=e.get(xo,null,{optional:!0}),s=e.get(Fn);return o!==null?(r=Xx(o.view,s,n),i instanceof Zc&&i._lView===o.view&&(i=null)):r=Jx(n,e.get(Sl),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Jc(r)}var ny=he(I({},Xu),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let n=_s(!1);try{Ju(this)}finally{_s(n)}},cleanup(){if(!this.cleanupFns?.length)return;let n=U(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],U(n)}}}),Qx=he(I({},ny),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(_i(this),this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();this.cleanup(),this.scheduler.remove(this)}}),Zx=he(I({},ny),{consumerMarkedDirty(){this.view[K]|=8192,ur(this.view),this.notifier.notify(13)},destroy(){if(_i(this),this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();this.cleanup(),this.view[Si]?.delete(this)}});function Xx(n,t,e){let i=Object.create(Zx);return i.view=n,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=t,i.fn=iy(i,e),n[Si]??=new Set,n[Si].add(i),i.consumerMarkedDirty(i),i}function Jx(n,t,e){let i=Object.create(Qx);return i.fn=iy(i,n),i.scheduler=t,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function iy(n,t){return()=>{t(e=>(n.cleanupFns??=[]).push(e))}}function _n(n){return typeof n=="function"&&n[tt]!==void 0}function Dl(n){return _n(n)&&typeof n.set=="function"}var wl=(()=>{class n{internalPendingTasks=f(hr);scheduler=f(Fn);errorHandler=f(Ii);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();try{e().catch(this.errorHandler).finally(i)}catch(r){this.errorHandler(r),i()}}static \u0275prov=ne({token:n,providedIn:"root",factory:()=>new n})}return n})();function Us(n){return{toString:n}.toString()}var ge=(function(n){return n[n.TemplateCreateStart=0]="TemplateCreateStart",n[n.TemplateCreateEnd=1]="TemplateCreateEnd",n[n.TemplateUpdateStart=2]="TemplateUpdateStart",n[n.TemplateUpdateEnd=3]="TemplateUpdateEnd",n[n.LifecycleHookStart=4]="LifecycleHookStart",n[n.LifecycleHookEnd=5]="LifecycleHookEnd",n[n.OutputStart=6]="OutputStart",n[n.OutputEnd=7]="OutputEnd",n[n.BootstrapApplicationStart=8]="BootstrapApplicationStart",n[n.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",n[n.BootstrapComponentStart=10]="BootstrapComponentStart",n[n.BootstrapComponentEnd=11]="BootstrapComponentEnd",n[n.ChangeDetectionStart=12]="ChangeDetectionStart",n[n.ChangeDetectionEnd=13]="ChangeDetectionEnd",n[n.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",n[n.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",n[n.AfterRenderHooksStart=16]="AfterRenderHooksStart",n[n.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",n[n.ComponentStart=18]="ComponentStart",n[n.ComponentEnd=19]="ComponentEnd",n[n.DeferBlockStateStart=20]="DeferBlockStateStart",n[n.DeferBlockStateEnd=21]="DeferBlockStateEnd",n[n.DynamicComponentStart=22]="DynamicComponentStart",n[n.DynamicComponentEnd=23]="DynamicComponentEnd",n[n.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",n[n.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",n})(ge||{}),kl=class{previousValue;currentValue;firstChange;constructor(t,e,i){this.previousValue=t,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}};function Uy(n,t,e,i){t!==null?t.applyValueToInputSignal(t,i):n[e]=i}var $y=null,Fe=(()=>{$y=ry;let n=()=>ry;return n.ngInherit=!0,n})();function fI(){return $y}function ry(n){return n.type.prototype.ngOnChanges&&(n.setInput=pI),hI}function hI(){let n=Gy(this),t=n?.current;if(t){let e=n.previous;if(e===wi)n.previous=t;else for(let i in t)e[i]=t[i];n.current=null,this.ngOnChanges(t)}}function pI(n,t,e,i,r){let o=this.declaredInputs[i],s=Gy(n)||mI(n,{previous:wi,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new kl(l&&l.currentValue,e,c===wi),Uy(n,t,r,e)}var kh="__ngSimpleChanges__";function Gy(n){return Object.hasOwn(n,kh)&&n[kh]||null}function mI(n,t){return n[kh]=t}var oy=[];var De=function(n,t=null,e){for(let i=0;i<oy.length;i++){let r=oy[i];r(n,t,e)}};function gI(n,t,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=t.type.prototype;if(i){let s=fI()(t);(e.preOrderHooks??=[]).push(n,s),(e.preOrderCheckHooks??=[]).push(n,s)}r&&(e.preOrderHooks??=[]).push(0-n,r),o&&((e.preOrderHooks??=[]).push(n,o),(e.preOrderCheckHooks??=[]).push(n,o))}function Wy(n,t){for(let e=t.directiveStart,i=t.directiveEnd;e<i;e++){let o=n.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=o;s&&(n.contentHooks??=[]).push(-e,s),a&&((n.contentHooks??=[]).push(e,a),(n.contentCheckHooks??=[]).push(e,a)),c&&(n.viewHooks??=[]).push(-e,c),l&&((n.viewHooks??=[]).push(e,l),(n.viewCheckHooks??=[]).push(e,l)),d!=null&&(n.destroyHooks??=[]).push(e,d)}}function Il(n,t,e){qy(n,t,3,e)}function Nl(n,t,e,i){(n[K]&3)===e&&qy(n,t,e,i)}function Sh(n,t){let e=n[K];(e&3)===t&&(e&=16383,e+=1,n[K]=e)}function qy(n,t,e,i){let r=i!==void 0?n[sr]&65535:0,o=i??-1,s=t.length-1,a=0;for(let c=r;c<s;c++)if(typeof t[c+1]=="number"){if(a=t[c],i!=null&&a>=i)break}else t[c]<0&&(n[sr]+=65536),(a<o||o==-1)&&(_I(n,e,t,c),n[sr]=(n[sr]&4294901760)+c+2),c++}function sy(n,t){De(ge.LifecycleHookStart,n,t);let e=U(null);try{t.call(n)}finally{U(e),De(ge.LifecycleHookEnd,n,t)}}function _I(n,t,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=n[s];r?n[K]>>14<n[sr]>>16&&(n[K]&3)===t&&(n[K]+=16384,sy(a,o)):sy(a,o)}var No=-1,yr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(t,e,i,r){this.factory=t,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function vI(n){return(n.flags&8)!==0}function yI(n){return(n.flags&16)!==0}function bI(n,t,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];n.setAttribute(t,s,a,o)}else{let o=r,s=e[++i];SI(o)?n.setProperty(t,o,s):n.setAttribute(t,o,s),i++}}return i}function Ky(n){return n===3||n===4||n===6}function SI(n){return n.charCodeAt(0)===64}function ko(n,t){if(!(t===null||t.length===0))if(n===null||n.length===0)n=t.slice();else{let e=-1;for(let i=0;i<t.length;i++){let r=t[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?ay(n,e,r,null,t[++i]):ay(n,e,r,null,null))}}return n}function ay(n,t,e,i,r){let o=0,s=n.length;if(t===-1)s=-1;else for(;o<n.length;){let a=n[o++];if(typeof a=="number"){if(a===t){s=-1;break}else if(a>t){s=o-1;break}}}for(;o<n.length;){let a=n[o];if(typeof a=="number")break;if(a===e){r!==null&&(n[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(n.splice(s,0,t),o=s+1),n.splice(o++,0,e),r!==null&&n.splice(o++,0,r)}function Yy(n){return n!==No}function Rl(n){return n&32767}function DI(n){return n>>16}function Al(n,t){let e=DI(n),i=t;for(;e>0;)i=i[Ci],e--;return i}var Rh=!0;function cy(n){let t=Rh;return Rh=n,t}var wI=256,Qy=wI-1,Zy=5,CI=0,Hn={};function EI(n,t,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(rr)&&(i=e[rr]),i==null&&(i=e[rr]=CI++);let r=i&Qy,o=1<<r;t.data[n+(r>>Zy)]|=o}function Ol(n,t){let e=Xy(n,t);if(e!==-1)return e;let i=t[F];i.firstCreatePass&&(n.injectorIndex=t.length,Dh(i.data,n),Dh(t,null),Dh(i.blueprint,null));let r=up(n,t),o=n.injectorIndex;if(Yy(r)){let s=Rl(r),a=Al(r,t),c=a[F].data;for(let l=0;l<8;l++)t[o+l]=a[s+l]|c[s+l]}return t[o+8]=r,o}function Dh(n,t){n.push(0,0,0,0,0,0,0,0,t)}function Xy(n,t){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||t[n.injectorIndex+8]===null?-1:n.injectorIndex}function up(n,t){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let e=0,i=null,r=t;for(;r!==null;){if(i=ib(r),i===null)return No;if(e++,r=r[Ci],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return No}function Ah(n,t,e){EI(n,t,e)}function xI(n,t){if(t==="class")return n.classes;if(t==="style")return n.styles;let e=n.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(Ky(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===t)return e[r+1];r=r+2}}}return null}function Jy(n,t,e){if(e&8||n!==void 0)return n;ol(t,"NodeInjector")}function eb(n,t,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=n[Dt],o=Gt(void 0);try{return r?r.get(t,i,e&8):zf(t,i,e&8)}finally{Gt(o)}}return Jy(i,t,e)}function tb(n,t,e,i=0,r){if(n!==null){if(t[K]&2048&&!(i&2)){let s=MI(n,t,e,i,Hn);if(s!==Hn)return s}let o=nb(n,t,e,i,Hn);if(o!==Hn)return o}return eb(t,e,i,r)}function nb(n,t,e,i,r){let o=NI(e);if(typeof o=="function"){if(!hh(t,n,i))return i&1?Jy(r,e,i):eb(t,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))ol(e);else return s}finally{ph()}}else if(typeof o=="number"){let s=null,a=Xy(n,t),c=No,l=i&1?t[Rt][St]:null;for((a===-1||i&4)&&(c=a===-1?up(n,t):t[a+8],c===No||!dy(i,!1)?a=-1:(s=t[F],a=Rl(c),t=Al(c,t)));a!==-1;){let d=t[F];if(ly(o,a,d.data)){let u=II(a,t,e,s,i,l);if(u!==Hn)return u}c=t[a+8],c!==No&&dy(i,t[F].data[a+8]===l)&&ly(o,a,t)?(s=d,a=Rl(c),t=Al(c,t)):a=-1}}return r}function II(n,t,e,i,r,o){let s=t[F],a=s.data[n+8],c=i==null?Bn(a)&&Rh:i!=s&&(a.type&3)!==0,l=r&1&&o===a,d=Tl(a,s,e,c,l);return d!==null?As(t,s,d,a,r):Hn}function Tl(n,t,e,i,r){let o=n.providerIndexes,s=t.data,a=o&1048575,c=n.directiveStart,l=n.directiveEnd,d=o>>20,u=i?a:a+d,p=r?a+d:l;for(let h=u;h<p;h++){let m=s[h];if(h<c&&e===m||h>=c&&m.type===e)return h}if(r){let h=s[c];if(h&&jn(h)&&h.type===e)return c}return null}function As(n,t,e,i,r){let o=n[e],s=t.data;if(o instanceof yr){let a=o;if(a.resolving)throw Hf("");let c=cy(a.canSeeViewProviders);a.resolving=!0;let l=s[e].type||s[e],d,u=a.injectImpl?Gt(a.injectImpl):null,p=hh(n,i,0);try{o=n[e]=a.factory(void 0,r,s,n,i),t.firstCreatePass&&e>=i.directiveStart&&gI(e,s[e],t)}finally{u!==null&&Gt(u),cy(c),a.resolving=!1,ph()}}return o}function NI(n){if(typeof n=="string")return n.charCodeAt(0)||0;let t=n.hasOwnProperty(rr)?n[rr]:void 0;return typeof t=="number"?t>=0?t&Qy:TI:t}function ly(n,t,e){let i=1<<n;return!!(e[t+(n>>Zy)]&i)}function dy(n,t){return!(n&2)&&!(n&1&&t)}var Mi=class{_tNode;_lView;constructor(t,e){this._tNode=t,this._lView=e}get(t,e,i){return tb(this._tNode,this._lView,t,er(i),e)}};function TI(){return new Mi(Be(),G())}function Me(n){return Us(()=>{let t=n.prototype.constructor,e=t[gs]||Oh(t),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let o=r[gs]||Oh(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Oh(n){return Pf(n)?()=>{let t=Oh(dt(n));return t&&t()}:tr(n)}function MI(n,t,e,i,r){let o=n,s=t;for(;o!==null&&s!==null&&s[K]&2048&&!wo(s);){let a=nb(o,s,e,i|2,Hn);if(a!==Hn)return a;let c=o.parent;if(!c){let l=s[Yf];if(l){let d=l.get(e,Hn,i&-5);if(d!==Hn)return d}c=ib(s),s=s[Ci]}o=c}return r}function ib(n){let t=n[F],e=t.type;return e===2?t.declTNode:e===1?n[St]:null}function fp(n){return xI(Be(),n)}function $(n){return{token:n.token,providedIn:n.autoProvided===!1?null:"root",factory:n.factory,value:void 0}}function kI(){return Lo(Be(),G())}function Lo(n,t){return new T(At(n,t))}var T=(()=>{class n{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=kI}return n})();function rb(n){return n instanceof T?n.nativeElement:n}function RI(){return this._results[Symbol.iterator]()}var ri=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new y}constructor(t=!1){this._emitDistinctChangesOnly=t}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,e){return this._results.reduce(t,e)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,e){this.dirty=!1;let i=vv(t);(this._changesDetected=!_v(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(t){this._onDirty=t}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=RI};function ob(n){return(n.flags&128)===128}var hp=(function(n){return n[n.OnPush=0]="OnPush",n[n.Eager=1]="Eager",n[n.Default=1]="Default",n})(hp||{}),sb=new Map,AI=0;function OI(){return AI++}function PI(n){sb.set(n[gn],n)}function Ph(n){sb.delete(n[gn])}var uy="__ngContext__";function Ro(n,t){Jn(t)?(n[uy]=t[gn],PI(t)):n[uy]=t}function ab(n){return lb(n[So])}function cb(n){return lb(n[Xt])}function lb(n){for(;n!==null&&!en(n);)n=n[Xt];return n}var Fh;function pp(n){Fh=n}function db(){if(Fh!==void 0)return Fh;if(typeof document<"u")return document;throw new S(210,!1)}var ub="r";var fb="di";var hb=!1,pb=new _("",{factory:()=>hb});var fy=new WeakMap;function FI(n,t){if(n==null||typeof n!="object")return;let e=fy.get(n);e||(e=new WeakSet,fy.set(n,e)),e.add(t)}var LI=(n,t,e,i)=>{};function VI(n,t,e,i){LI(n,t,e,i)}function Wl(n){return(n.flags&32)===32}var BI=()=>null;function mb(n,t,e=!1){return BI(n,t,e)}function gb(n,t){let e=n.contentQueries;if(e!==null){let i=U(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=n.data[s];Is(o),a.contentQueries(2,t[s],s)}}}finally{U(i)}}}function Lh(n,t,e){Is(0);let i=U(null);try{t(n,e)}finally{U(i)}}function mp(n,t,e){if(Zf(t)){let i=U(null);try{let r=t.directiveStart,o=t.directiveEnd;for(let s=r;s<o;s++){let a=n.data[s];if(a.contentQueries){let c=e[s];a.contentQueries(1,c,s)}}}finally{U(i)}}}var bn=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n[n.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",n})(bn||{});var Cl;function jI(){if(Cl===void 0&&(Cl=null,mo.trustedTypes))try{Cl=mo.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch(n){}return Cl}function ql(n){return jI()?.createHTML(n)||n}var oi=class{changingThisBreaksApplicationSecurity;constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${el})`}},Vh=class extends oi{getTypeName(){return"HTML"}},Bh=class extends oi{getTypeName(){return"Style"}},jh=class extends oi{getTypeName(){return"Script"}},Hh=class extends oi{getTypeName(){return"URL"}},zh=class extends oi{getTypeName(){return"ResourceURL"}};function zn(n){return n instanceof oi?n.changingThisBreaksApplicationSecurity:n}function wr(n,t){let e=_b(n);if(e!=null&&e!==t){if(e==="ResourceURL"&&t==="URL")return!0;throw new Error(`Required a safe ${t}, got a ${e} (see ${el})`)}return e===t}function _b(n){return n instanceof oi&&n.getTypeName()||null}function gp(n){return new Vh(n)}function _p(n){return new Bh(n)}function vp(n){return new jh(n)}function yp(n){return new Hh(n)}function bp(n){return new zh(n)}function HI(n){let t=new $h(n);return zI()?new Uh(t):t}var Uh=class{inertDocumentHelper;constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{let e=new window.DOMParser().parseFromString(ql(t),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(t):(e.firstChild?.remove(),e)}catch(e){return null}}},$h=class{defaultDoc;inertDocument;constructor(t){this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(t){let e=this.inertDocument.createElement("template");return e.innerHTML=ql(t),e}};function zI(){try{return!!new window.DOMParser().parseFromString(ql(""),"text/html")}catch(n){return!1}}var UI=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Kl(n){return n=String(n),n.match(UI)?n:"unsafe:"+n}function ai(n){let t={};for(let e of n.split(","))t[e]=!0;return t}function $s(...n){let t={};for(let e of n)for(let i in e)e.hasOwnProperty(i)&&(t[i]=!0);return t}var vb=ai("area,br,col,hr,img,wbr"),yb=ai("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),bb=ai("rp,rt"),$I=$s(bb,yb),GI=$s(yb,ai("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),WI=$s(bb,ai("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),hy=$s(vb,GI,WI,$I),Sb=ai("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),qI=ai("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),KI=ai("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),YI=$s(Sb,qI,KI),QI=ai("script,style,template"),Gh=class{sanitizedSomething=!1;buf=[];sanitizeChildren(t){let e=t.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=JI(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=XI(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(t){let e=py(t).toLowerCase();if(!hy.hasOwnProperty(e))return this.sanitizedSomething=!0,!QI.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=t.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!YI.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let c=o.value;Sb[a]&&(c=Kl(c)),this.buf.push(" ",s,'="',my(c),'"')}return this.buf.push(">"),!0}endElement(t){let e=py(t).toLowerCase();hy.hasOwnProperty(e)&&!vb.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(t){this.buf.push(my(t))}};function ZI(n,t){return(n.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function XI(n){let t=n.nextSibling;if(t&&n!==t.previousSibling)throw Db(t);return t}function JI(n){let t=n.firstChild;if(t&&ZI(n,t))throw Db(t);return t}function py(n){let t=n.nodeName;return typeof t=="string"?t:"FORM"}function Db(n){return new Error(`Failed to sanitize html because the element is clobbered: ${n.outerHTML}`)}var eN=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,tN=/([^\#-~ |!])/g;function my(n){return n.replace(/&/g,"&amp;").replace(eN,function(t){let e=t.charCodeAt(0),i=t.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(tN,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var El;function Sp(n,t){let e=null;try{El=El||HI(n);let i=t?String(t):"";e=El.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=El.getInertBodyElement(i)}while(i!==o);let a=new Gh().sanitizeChildren(gy(e)||e);return ql(a)}finally{if(e){let i=gy(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function gy(n){return"content"in n&&nN(n)?n.content:null}function nN(n){return n.nodeType===Node.ELEMENT_NODE&&n.nodeName==="TEMPLATE"}var iN=/^>|^->|<!--|-->|--!>|<!-$/g,rN=/(<|>)/g,oN="\u200B$1\u200B";function sN(n){return n.replace(iN,t=>t.replace(rN,oN))}function aN(n,t){return n.createText(t)}function cN(n,t,e){n.setValue(t,e)}function lN(n,t){return n.createComment(sN(t))}function wb(n,t,e){return n.createElement(t,e)}function gr(n,t,e,i,r){n.insertBefore(t,e,i,r)}function Cb(n,t,e){n.appendChild(t,e)}function _y(n,t,e,i,r){i!==null?gr(n,t,e,i,r):Cb(n,t,e)}function Eb(n,t,e,i){n.removeChild(null,t,e,i)}function dN(n,t,e){n.setAttribute(t,"style",e)}function uN(n,t,e){e===""?n.removeAttribute(t,"class"):n.setAttribute(t,"class",e)}function xb(n,t,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&bI(n,t,i),r!==null&&uN(n,t,r),o!==null&&dN(n,t,o)}function fN(n,t,e){let i=n.length;for(;;){let r=n.indexOf(t,e);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let o=t.length;if(r+o===i||n.charCodeAt(r+o)<=32)return r}e=r+1}}var Ib="ng-template";function hN(n,t,e,i){let r=0;if(i){for(;r<t.length&&typeof t[r]=="string";r+=2)if(t[r]==="class"&&fN(t[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Dp(n))return!1;if(r=t.indexOf(1,r),r>-1){let o;for(;++r<t.length&&typeof(o=t[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Dp(n){return n.type===4&&n.value!==Ib}function pN(n,t,e){let i=n.type===4&&!e?Ib:n.value;return t===i}function mN(n,t,e){let i=4,r=n.attrs,o=r!==null?vN(r):0,s=!1;for(let a=0;a<t.length;a++){let c=t[a];if(typeof c=="number"){if(!s&&!vn(i)&&!vn(c))return!1;if(s&&vn(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==""&&!pN(n,c,e)||c===""&&t.length===1){if(vn(i))return!1;s=!0}}else if(i&8){if(r===null||!hN(n,r,c,e)){if(vn(i))return!1;s=!0}}else{let l=t[++a],d=gN(c,r,Dp(n),e);if(d===-1){if(vn(i))return!1;s=!0;continue}if(l!==""){let u;if(d>o?u="":u=r[d+1].toLowerCase(),i&2&&l!==u){if(vn(i))return!1;s=!0}}}}return vn(i)||s}function vn(n){return(n&1)===0}function gN(n,t,e,i){if(t===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<t.length;){let s=t[r];if(s===n)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=t[++r];for(;typeof a=="string";)a=t[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return yN(t,n)}function Nb(n,t,e=!1){for(let i=0;i<t.length;i++)if(mN(n,t[i],e))return!0;return!1}function _N(n){let t=n.attrs;if(t!=null){let e=t.indexOf(5);if((e&1)===0)return t[e+1]}return null}function vN(n){for(let t=0;t<n.length;t++){let e=n[t];if(Ky(e))return t}return n.length}function yN(n,t){let e=n.indexOf(4);if(e>-1)for(e++;e<n.length;){let i=n[e];if(typeof i=="number")return-1;if(i===t)return e;e++}return-1}function bN(n,t){e:for(let e=0;e<t.length;e++){let i=t[e];if(n.length===i.length){for(let r=0;r<n.length;r++)if(n[r]!==i[r])continue e;return!0}}return!1}function vy(n,t){return n?":not("+t.trim()+")":t}function SN(n){let t=n[0],e=1,i=2,r="",o=!1;for(;e<n.length;){let s=n[e];if(typeof s=="string")if(i&2){let a=n[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!vn(s)&&(t+=vy(o,r),r=""),i=s,o=o||!vn(i);e++}return r!==""&&(t+=vy(o,r)),t}function DN(n){return n.map(SN).join(",")}function wN(n){let t=[],e=[],i=1,r=2;for(;i<n.length;){let o=n[i];if(typeof o=="string")r===2?o!==""&&t.push(o,n[++i]):r===8&&e.push(o);else{if(!vn(r))break;r=o}i++}return e.length&&t.push(1,...e),t}var on={},Un=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(Un||{}),CN;function wp(n,t){return CN(n,t)}var Tb=new _("",{factory:()=>!1});var EN=!1,Gs=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";function Mb(n){return n[Dt].get(Tb,EN)}function xN(n,t,e){let i=Ao.get(n);if(i){for(let r of t)i.classList.push(r);for(let r of e)i.cleanupFns.push(r)}else Ao.set(n,{classList:t,cleanupFns:e})}function Cp(n){let t=Ao.get(n);if(t){for(let e of t.cleanupFns)e();Ao.delete(n)}_r.delete(n)}var Ao=new WeakMap,_r=new WeakMap,Os=new WeakMap;function kb(n){return n?n[Ci]??n:null}var Ms=new WeakSet;function yy(n,t){let e=Os.get(n);if(e&&e.length>0){let i=e.findIndex(r=>r.el===t);i>-1&&e.splice(i,1)}e?.length===0&&Os.delete(n)}function IN(n,t,e){let i=Os.get(n);if(!i||i.length===0)return;let r=t.parentNode,o=t.previousSibling,s=kb(e);for(let a=i.length-1;a>=0;a--){let{el:c,declarationView:l}=i[a],d=c.parentNode;c===t?(i.splice(a,1),Ms.add(c),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):o&&c===o?(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c)):d&&r&&d!==r&&(s===null||l===null||s===l)&&(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c))}}function Rb(n,t,e){let i=kb(e),r=Os.get(n);r?r.some(o=>o.el===t)||r.push({el:t,declarationView:i}):Os.set(n,[{el:t,declarationView:i}])}function by(n){let t=n[Jt]??={};return t.enter??=new Map}function Yl(n){let t=n[Jt]??={};return t.leave??=new Map}function Ab(n){let t=typeof n=="function"?n():n,e=Array.isArray(t)?t:null;return typeof t=="string"&&(e=t.trim().split(/\s+/).filter(i=>i)),e}function NN(n,t){if(!Gs)return;let e=Ao.get(n);if(e&&e.classList.length>0&&TN(n,e.classList))for(let i of e.classList)t.removeClass(n,i);Cp(n)}function TN(n,t){for(let e of t)if(n.classList.contains(e))return!0;return!1}function Ps(n){return n.composedPath?n.composedPath()[0]:n.target}function Ep(n,t){let e=_r.get(t);return e===void 0?!0:t===Ps(n)&&(e.animationName!==void 0&&n.animationName===e.animationName||e.propertyName!==void 0&&(e.propertyName==="all"||n.propertyName===e.propertyName))}function Ob(n,t,e){let i=n.get(t.index)??{animateFns:[]};i.animateFns.push(e),n.set(t.index,i)}function Sy(n,t){if(n)for(let e of n)e();for(let e of t)e()}function Dy(n,t){let e=Yl(n).get(t.index);e&&(e.resolvers=void 0)}function Pl(n){if(!n)return 0;let t=n.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(n)*t}function mr(n,t){return n.getPropertyValue(t).split(",").map(i=>i.trim())}function MN(n){let t=mr(n,"transition-property"),e=mr(n,"transition-duration"),i=mr(n,"transition-delay"),r={propertyName:"",duration:0,animationName:void 0};for(let o=0;o<t.length;o++){let s=Pl(i[o])+Pl(e[o]);s>r.duration&&(r.propertyName=t[o],r.duration=s)}return r}function kN(n){let t=mr(n,"animation-name"),e=mr(n,"animation-delay"),i=mr(n,"animation-duration"),r=mr(n,"animation-iteration-count"),o={animationName:"",propertyName:void 0,duration:0};for(let s=0;s<t.length;s++){let a=Pl(e[s])+Pl(i[s]),c=r[s];a>o.duration&&c!=="infinite"&&(o.animationName=t[s],o.duration=a)}return o}function Pb(n,t){return n!==void 0&&n.duration>t.duration}function Fb(n){return(n.animationName!=null||n.propertyName!=null)&&n.duration>0}function RN(n,t){let e=getComputedStyle(n),i=kN(e),r=MN(e),o=i.duration>r.duration?i:r;Pb(t.get(n),o)||Fb(o)&&t.set(n,o)}function Lb(n,t,e){if(!e)return;let i=n.getAnimations();return i.length===0?RN(n,t):AN(n,t,i)}function AN(n,t,e){let i={animationName:void 0,propertyName:void 0,duration:0};for(let r of e){let o=r.effect?.getTiming();if(o?.iterations===1/0)continue;let s=typeof o?.duration=="number"?o.duration:0,a=(o?.delay??0)+s,c=r.playbackRate;c!==void 0&&c!==0&&c!==1&&(a/=Math.abs(c));let l,d;r.animationName?d=r.animationName:l=r.transitionProperty,a>=i.duration&&(i={animationName:d,propertyName:l,duration:a})}Pb(t.get(n),i)||Fb(i)&&t.set(n,i)}var si=new Set,Ql=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(Ql||{}),$n=new _(""),wy=new Set;function sn(n){wy.has(n)||(wy.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var Zl=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=ne({token:n,providedIn:"root",factory:()=>new n})}return n})(),xp=[0,1,2,3],Ip=(()=>{class n{ngZone=f(M);scheduler=f(Fn);errorHandler=f(jt,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){f($n,{optional:!0})}execute(){let e=this.sequences.size>0;e&&De(ge.AfterRenderHooksStart),this.executing=!0;for(let i of xp)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&De(ge.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[ar]??=[]).push(e),ur(i),i[K]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(Ql.AFTER_NEXT_RENDER,e):e()}static \u0275prov=ne({token:n,providedIn:"root",factory:()=>new n})}return n})(),Fs=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(t,e,i,r,o,s=null){this.impl=t,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let t=this.view?.[ar];t&&(this.view[ar]=t.filter(e=>e!==this))}};function Je(n,t){let e=t?.injector??f(ee);return sn("NgAfterNextRender"),PN(n,e,t,!0)}function ON(n){return n instanceof Function?[void 0,void 0,n,void 0]:[n.earlyRead,n.write,n.mixedReadWrite,n.read]}function PN(n,t,e,i){let r=t.get(Zl);r.impl??=t.get(Ip);let o=t.get($n,null,{optional:!0}),s=e?.manualCleanup!==!0?t.get(kt):null,a=t.get(xo,null,{optional:!0}),c=new Fs(r.impl,ON(n),a?.view,i,s,o?.snapshot(null));return r.impl.register(c),c}var Ws=new _("",{factory:()=>{let n=f(Ke),t=new Set;return n.onDestroy(()=>t.clear()),{queue:t,isScheduled:!1,scheduler:null,injector:n}}});function Vb(n,t,e){let i=n.get(Ws);if(Array.isArray(t))for(let r of t)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(t),e?.detachedLeaveAnimationFns?.push(t);i.scheduler&&i.scheduler(n)}function FN(n,t){let e=n.get(Ws);if(Array.isArray(t))for(let i of t)e.queue.delete(i);else e.queue.delete(t)}function LN(n,t){let e=n.get(Ws);if(t.detachedLeaveAnimationFns){for(let i of t.detachedLeaveAnimationFns)e.queue.delete(i);t.detachedLeaveAnimationFns=void 0}}function VN(n){let t=n.get(Ws);t.isScheduled||(Je(()=>{t.isScheduled=!1;for(let e of t.queue)e();t.queue.clear()},{injector:t.injector}),t.isScheduled=!0)}function Bb(n){let t=n.get(Ws);t.scheduler=VN,t.scheduler(n)}function jb(n,t){for(let[e,i]of t)Vb(n,i.animateFns)}function Cy(n,t,e,i){let r=n?.[Jt]?.enter;t!==null&&r&&r.has(e.index)&&jb(i,r)}function Ey(n,t,e,i){try{e.get(ws)}catch(s){return i(!1)}let r=n?.[Jt];r?.enter?.has(t.index)&&FN(e,r.enter.get(t.index).animateFns);let o=BN(n,t,r);if(o.size===0){let s=!1;if(n){let a=[];Xl(n,t,a),s=a.length>0}if(!s)return i(!1)}n&&si.add(n[gn]),Vb(e,()=>jN(n,t,r||void 0,o,i),r||void 0)}function BN(n,t,e){let i=new Map,r=e?.leave;if(r&&r.has(t.index)&&i.set(t.index,r.get(t.index)),n&&r)for(let[o,s]of r){if(i.has(o))continue;let c=n[F].data[o].parent;for(;c;){if(c===t){i.set(o,s);break}c=c.parent}}return i}function jN(n,t,e,i,r){let o=[];if(e&&e.leave)for(let[s]of i){if(!e.leave.has(s))continue;let a=e.leave.get(s);for(let c of a.animateFns){let{promise:l}=c();o.push(l)}e.detachedLeaveAnimationFns=void 0}if(n&&Xl(n,t,o),o.length>0){let s=e||n?.[Jt];if(s){let a=s.running;a&&o.push(a),s.running=Promise.allSettled(o),zN(n,s.running,r)}else Promise.allSettled(o).then(()=>{n&&si.delete(n[gn]),r(!0)})}else n&&si.delete(n[gn]),r(!1)}function Xl(n,t,e){if(t.type&12){let r=n[t.index];if(en(r))for(let o=Ve;o<r.length;o++){let s=r[o];s[F].type===2&&HN(s,e)}}let i=t.child;for(;i;)Xl(n,i,e),i=i.next}function HN(n,t){let e=n[Jt];if(e&&e.leave)for(let r of e.leave.values())for(let o of r.animateFns){let{promise:s}=o();t.push(s)}let i=n[F].firstChild;for(;i;)Xl(n,i,t),i=i.next}function zN(n,t,e){t.then(()=>{n[Jt]?.running===t&&(n[Jt].running=void 0,si.delete(n[gn])),e(!0)})}function Io(n,t,e,i,r,o,s,a){if(r!=null){let c,l=!1;en(r)?c=r:Jn(r)&&(l=!0,r=r[mn]);let d=ut(r);n===0&&i!==null?(Cy(a,i,o,e),s==null?Cb(t,i,d):gr(t,i,d,s||null,!0)):n===1&&i!==null?(Cy(a,i,o,e),gr(t,i,d,s||null,!0),IN(o,d,a)):n===2?(a?.[Jt]?.leave?.has(o.index)&&Rb(o,d,a),Ms.delete(d),Ey(a,o,e,u=>{if(Ms.has(d)){Ms.delete(d);return}Eb(t,d,l,u)})):n===3&&(Ms.delete(d),Ey(a,o,e,()=>{t.destroyNode(d)})),c!=null&&JN(t,n,e,c,o,i,s)}}function UN(n,t){Hb(n,t),t[mn]=null,t[St]=null}function $N(n,t,e,i,r,o){i[mn]=r,i[St]=t,ed(n,i,e,1,r,o)}function Hb(n,t){t[Ln].changeDetectionScheduler?.notify(9),ed(n,t,t[_e],2,null,null)}function GN(n){let t=n[So];if(!t)return wh(n[F],n);for(;t;){let e=null;if(Jn(t))e=t[So];else{let i=t[Ve];i&&(e=i)}if(!e){for(;t&&!t[Xt]&&t!==n;)Jn(t)&&wh(t[F],t),t=t[nt];t===null&&(t=n),Jn(t)&&wh(t[F],t),e=t&&t[Xt]}t=e}}function Np(n,t){let e=n[lr],i=e.indexOf(t);e.splice(i,1)}function Jl(n,t){if(dr(t))return;let e=t[_e];e.destroyNode&&ed(n,t,e,3,null,null),GN(t)}function wh(n,t){if(dr(t))return;let e=U(null);try{t[K]&=-129,t[K]|=256,t[Wt]&&_i(t[Wt]),qN(n,t),WN(n,t),t[F].type===1&&t[_e].destroy();let i=t[Ei];if(i!==null&&en(t[nt])){i!==t[nt]&&Np(i,t);let r=t[Vn];r!==null&&r.detachView(n)}Ph(t)}finally{U(e)}}function WN(n,t){let e=n.cleanup,i=t[bo];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(t[bo]=null);let r=t[Zn];if(r!==null){t[Zn]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=t[Si];if(o!==null){t[Si]=null;for(let s of o)s.destroy()}}function qN(n,t){let e;if(n!=null&&(e=n.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=t[e[i]];if(!(r instanceof yr)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];De(ge.LifecycleHookStart,a,c);try{c.call(a)}finally{De(ge.LifecycleHookEnd,a,c)}}else{De(ge.LifecycleHookStart,r,o);try{o.call(r)}finally{De(ge.LifecycleHookEnd,r,o)}}}}}function zb(n,t,e){return KN(n,t.parent,e)}function KN(n,t,e){let i=t;for(;i!==null&&i.type&168;)t=i,i=t.parent;if(i===null)return e[mn];if(Bn(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===bn.None||r===bn.Emulated)return null}return At(i,e)}function Ub(n,t,e){return QN(n,t,e)}function YN(n,t,e){return n.type&40?At(n,e):null}var QN=YN,xy;function Tp(n,t,e,i){let r=zb(n,i,t),o=t[_e],s=i.parent||t[St],a=Ub(s,i,t);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)_y(o,r,e[c],a,!1);else _y(o,r,e,a,!1);xy!==void 0&&xy(o,i,t,e,r)}function ks(n,t){if(t!==null){let e=t.type;if(e&3)return At(t,n);if(e&4)return Wh(-1,n[t.index]);if(e&8){let i=t.child;if(i!==null)return ks(n,i);{let r=n[t.index];return en(r)?Wh(-1,r):ut(r)}}else{if(e&128)return ks(n,t.next);if(e&32)return wp(t,n)()||ut(n[t.index]);{let i=$b(n,t);if(i!==null){if(Array.isArray(i))return i[0];let r=Xn(n[Rt]);return ks(r,i)}else return ks(n,t.next)}}}return null}function $b(n,t){if(t!==null){let i=n[Rt][St],r=t.projection;return i.projection[r]}return null}function Wh(n,t){let e=Ve+n+1;if(e<t.length){let i=t[e],r=i[F].firstChild;if(r!==null)return ks(i,r)}return t[cr]}function Mp(n,t,e,i,r,o,s){for(;e!=null;){let a=i[Dt];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(s&&t===0&&(c&&Ro(ut(c),i),e.flags|=2),!Wl(e))if(l&8)Mp(n,t,e.child,i,r,o,!1),Io(t,n,a,r,c,e,o,i);else if(l&32){let d=wp(e,i),u;for(;u=d();)Io(t,n,a,r,u,e,o,i);Io(t,n,a,r,c,e,o,i)}else l&16?Gb(n,t,i,e,r,o):Io(t,n,a,r,c,e,o,i);e=s?e.projectionNext:e.next}}function ed(n,t,e,i,r,o){n.type===3?ZN(e,i,t,r,o):Mp(e,i,n.firstChild,t,r,o,!1)}function ZN(n,t,e,i,r){let s=e[F].firstChild,a=s.next,c=ut(e[s.index]),l=ut(e[a.index]),d=a.index+1,u=e[d];if(t===1||t===0)i!==null&&(u&&u.hasChildNodes()?gr(n,i,u,r,!0):(gr(n,i,c,r,!0),gr(n,i,l,r,!0)));else if(t===2){if(u||(u=document.createDocumentFragment(),e[d]=u),c&&c.parentNode===u)return;let p=c;for(;p!==null;){let h=p.nextSibling;if(u.appendChild(p),p===l)break;p=h}}}function XN(n,t,e){let i=t[_e],r=zb(n,e,t),o=e.parent||t[St],s=Ub(o,e,t);Gb(i,0,t,e,r,s)}function Gb(n,t,e,i,r,o){let s=e[Rt],c=s[St].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];Io(t,n,e[Dt],r,d,i,o,e)}else{let l=c,d=s[nt];ob(i)&&(l.flags|=128),Mp(n,t,l,d,r,o,!0)}}function JN(n,t,e,i,r,o,s){let a=i[cr],c=ut(i);if(a!==c&&Io(t,n,e,o,a,r,s),(i[K]&4)===0)for(let l=Ve;l<i.length;l++){let d=i[l];ed(d[F],d,n,t,o,a)}}function eT(n,t,e,i,r){if(t)r?n.addClass(e,i):n.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:Un.DashCase;r==null?n.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=Un.Important),n.setStyle(e,i,r,o))}}function kp(n,t,e,i,r,o,s,a,c,l,d){let u=He+i,p=u+r,h=tT(u,p),m=typeof l=="function"?l():l;return h[F]={type:n,blueprint:h,template:e,queries:null,viewQuery:a,declTNode:t,data:h.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:c,consts:m,incompleteFirstPass:!1,ssrId:d}}function tT(n,t){let e=[];for(let i=0;i<t;i++)e.push(i<n?null:on);return e}function nT(n){let t=n.tView;return t===null||t.incompleteFirstPass?n.tView=kp(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):t}function Rp(n,t,e,i,r,o,s,a,c,l,d){let u=t.blueprint.slice();return u[mn]=r,u[K]=i|4|128|8|64|1024,(l!==null||n&&n[K]&2048)&&(u[K]|=2048),eh(u),u[nt]=u[Ci]=n,u[Ye]=e,u[Ln]=s||n&&n[Ln],u[_e]=a||n&&n[_e],u[Dt]=c||n&&n[Dt]||null,u[St]=o,u[gn]=OI(),u[or]=d,u[Yf]=l,u[Rt]=t.type==2?n[Rt]:u,u}function iT(n,t,e){let i=At(t,n),r=nT(e),o=n[Ln].rendererFactory,s=Ap(n,Rp(n,r,null,Wb(e),i,t,null,o.createRenderer(i,e),null,null,null));return n[t.index]=s}function Wb(n){let t=16;return n.signals?t=4096:n.onPush&&(t=64),t}function qb(n,t,e,i){if(e===0)return-1;let r=t.length;for(let o=0;o<e;o++)t.push(i),n.blueprint.push(i),n.data.push(null);return r}function Ap(n,t){return n[So]?n[Kf][Xt]=t:n[So]=t,n[Kf]=t,t}function b(n=1){Kb(Ie(),G(),ti()+n,!1)}function Kb(n,t,e,i){if(!i)if((t[K]&3)===3){let o=n.preOrderCheckHooks;o!==null&&Il(t,o,e)}else{let o=n.preOrderHooks;o!==null&&Nl(t,o,0,e)}xi(e)}var td=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(td||{});function br(n,t,e,i){let r=U(null);try{let[o,s,a]=n.inputs[e],c=null;(s&td.SignalBased)!==0&&(c=t[o][tt]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(t,i)),n.setInput!==null?n.setInput(t,c,i,e,o):Uy(t,c,o,i)}finally{U(r)}}function Yb(n,t,e,i,r){let o=ti(),s=i&2;try{xi(-1),s&&t.length>He&&Kb(n,t,He,!1);let a=s?ge.TemplateUpdateStart:ge.TemplateCreateStart;De(a,r,e),e(i,r)}finally{xi(o);let a=s?ge.TemplateUpdateEnd:ge.TemplateCreateEnd;De(a,r,e)}}function nd(n,t,e){cT(n,t,e),(e.flags&64)===64&&lT(n,t,e)}function qs(n,t,e=At){let i=t.localNames;if(i!==null){let r=t.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(t,n):n[s];n[r++]=a}}}function rT(n,t,e,i){let o=i.get(pb,hb)||e===bn.ShadowDom||e===bn.ExperimentalIsolatedShadowDom,s=n.selectRootElement(t,o);return oT(s),s}function oT(n){sT(n)}var sT=()=>null;function aT(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function Qb(n,t,e,i,r,o){let s=t[F];if(id(n,s,t,e,i)){Bn(n)&&Xb(t,n.index);return}n.type&3&&(e=aT(e)),Zb(n,t,e,i,r,o)}function Zb(n,t,e,i,r,o){if(n.type&3){let s=At(n,t);i=o!=null?o(i,n.value||"",e):i,r.setProperty(s,e,i)}else n.type&12}function Xb(n,t){let e=tn(t,n);e[K]&16||(e[K]|=64)}function cT(n,t,e){let i=e.directiveStart,r=e.directiveEnd;Bn(e)&&iT(t,e,n.data[i+e.componentOffset]),n.firstCreatePass||Ol(e,t);let o=e.initialInputs;for(let s=i;s<r;s++){let a=n.data[s],c=As(t,n,s,e);if(Ro(c,t),o!==null&&fT(t,s-i,c,a,e,o),jn(a)){let l=tn(e.index,t);l[Ye]=As(t,n,s,e)}}}function lT(n,t,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=zv();try{xi(o);for(let a=i;a<r;a++){let c=n.data[a],l=t[a];ml(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&dT(c,l)}}finally{xi(-1),ml(s)}}function dT(n,t){n.hostBindings!==null&&n.hostBindings(1,t)}function Op(n,t){let e=n.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];Nb(t,o.selectors,!1)&&(i??=[],jn(o)?i.unshift(o):i.push(o))}return i}function uT(n,t,e,i,r,o){let s=At(n,t);Jb(t[_e],s,o,n.value,e,i,r)}function Jb(n,t,e,i,r,o,s){if(o==null)s?.(o,i||"",r),n.removeAttribute(t,r,e);else{let a=s==null?jf(o):s(o,i||"",r);n.setAttribute(t,r,a,e)}}function fT(n,t,e,i,r,o){let s=o[t];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];br(i,e,c,l)}}function Pp(n,t,e,i,r){let o=He+e,s=t[F],a=r(s,t,n,i,e);t[o]=a,Co(n,!0);let c=n.type===2;return c?(xb(t[_e],a,n),(Ov()===0||Do(n))&&Ro(a,t),Pv()):Ro(a,t),yl()&&(!c||!Wl(n))&&Tp(s,t,a,n),n}function Fp(n){let t=n;return lh()?dh():(t=t.parent,Co(t,!1)),t}function hT(n,t){let e=n[Dt];if(!e)return;let i;try{i=e.get(Ii,null)}catch(r){i=null}i?.(t)}function id(n,t,e,i,r){let o=n.inputs?.[i],s=n.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],d=s[c+1],u=t.data[l];br(u,e[l],d,r),a=!0}if(o)for(let c of o){let l=e[c],d=t.data[c];br(d,l,i,r),a=!0}return a}function pT(n,t,e,i,r,o){let s=null,a=null,c=null,l=!1,d=n.directiveToIndex.get(i.type);if(typeof d=="number"?s=d:[s,a,c]=d,a!==null&&c!==null&&n.hostDirectiveInputs?.hasOwnProperty(r)){let u=n.hostDirectiveInputs[r];for(let p=0;p<u.length;p+=2){let h=u[p];if(h>=a&&h<=c){let m=t.data[h],g=u[p+1];br(m,e[h],g,o),l=!0}else if(h>c)break}}return s!==null&&i.inputs.hasOwnProperty(r)&&(br(i,e[s],r,o),l=!0),l}function mT(n,t){let e=tn(t,n),i=e[F];gT(i,e);let r=e[mn];r!==null&&e[or]===null&&(e[or]=mb(r,e[Dt])),De(ge.ComponentStart);try{Lp(i,e,e[Ye])}finally{De(ge.ComponentEnd,e[Ye])}}function gT(n,t){for(let e=t.length;e<n.blueprint.length;e++)t.push(n.blueprint[e])}function Lp(n,t,e){_l(t);try{let i=n.viewQuery;i!==null&&Lh(1,i,e);let r=n.template;r!==null&&Yb(n,t,r,1,e),n.firstCreatePass&&(n.firstCreatePass=!1),t[Vn]?.finishViewCreation(n),n.staticContentQueries&&gb(n,t),n.staticViewQueries&&Lh(2,n.viewQuery,e);let o=n.components;o!==null&&_T(t,o)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{t[K]&=-5,vl()}}function _T(n,t){for(let e=0;e<t.length;e++)mT(n,t[e])}function Ks(n,t,e,i){let r=U(null);try{let o=t.tView,a=n[K]&4096?4096:16,c=Rp(n,o,e,a,null,t,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[t.index];c[Ei]=l;let d=n[Vn];return d!==null&&(c[Vn]=d.createEmbeddedView(o)),Lp(o,c,e),c}finally{U(r)}}function Oo(n,t){return!t||t.firstChild===null||ob(n)}function Ls(n,t,e,i,r=!1){if(n.type===3){let o=n.firstChild,s=o.next,a=ut(t[o.index]),c=ut(t[s.index]),l=a;for(;l!==null&&(i.push(l),l!==c);)l=l.nextSibling;return i}for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=t[e.index];if(o!==null)if(en(o)){let a=o[cr];a!==o[mn]&&i.push(ut(o)),o[K]&4||eS(o,i),i.push(a)}else i.push(ut(o));let s=e.type;if(s&8)Ls(n,t,e.child,i);else if(s&32){let a=wp(e,t),c;for(;c=a();)i.push(c)}else if(s&16){let a=$b(t,e);if(Array.isArray(a))i.push(...a);else{let c=Xn(t[Rt]);Ls(c[F],c,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function eS(n,t){for(let e=Ve;e<n.length;e++){let i=n[e],r=i[F].firstChild;r!==null&&Ls(i[F],i,r,t)}}function tS(n){if(n[ar]!==null){for(let t of n[ar])t.impl.addSequence(t);n[ar].length=0}}var nS=[];function vT(n){return n[Wt]??yT(n)}function yT(n){let t=nS.pop()??Object.create(ST);return t.lView=n,t}function bT(n){n.lView[Wt]!==n&&(n.lView=null,nS.push(n))}var ST=he(I({},Gi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{ur(n.lView)},consumerOnSignalRead(){this.lView[Wt]=this}});function DT(n){let t=n[Wt]??Object.create(wT);return t.lView=n,t}var wT=he(I({},Gi),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let t=Xn(n.lView);for(;t&&!iS(t[F]);)t=Xn(t);t&&th(t)},consumerOnSignalRead(){this.lView[Wt]=this}});function iS(n){return n.type!==2}function rS(n){if(n[Si]===null)return;let t=!0;for(;t;){let e=!1;for(let i of n[Si])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));t=e&&!!(n[K]&8192)}}var CT=100;function oS(n,t=0){let i=n[Ln].rendererFactory,r=!1;r||i.begin?.();try{ET(n,t)}finally{r||i.end?.()}}function ET(n,t){let e=uh();try{_s(!0),qh(n,t);let i=0;for(;xs(n);){if(i===CT)throw new S(103,!1);i++,qh(n,1)}}finally{_s(e)}}function xT(n,t,e,i){if(dr(t))return;let r=t[K],o=!1,s=!1;_l(t);let a=!0,c=null,l=null;o||(iS(n)?(l=vT(t),c=gi(l)):ac()===null?(a=!1,l=DT(t),c=gi(l)):t[Wt]&&(_i(t[Wt]),t[Wt]=null));try{eh(t),Bv(n.bindingStartIndex),e!==null&&Yb(n,t,e,2,i);let d=(r&3)===3;if(!o)if(d){let h=n.preOrderCheckHooks;h!==null&&Il(t,h,null)}else{let h=n.preOrderHooks;h!==null&&Nl(t,h,0,null),Sh(t,0)}if(s||IT(t),rS(t),sS(t,0),n.contentQueries!==null&&gb(n,t),!o)if(d){let h=n.contentCheckHooks;h!==null&&Il(t,h)}else{let h=n.contentHooks;h!==null&&Nl(t,h,1),Sh(t,1)}TT(n,t);let u=n.components;u!==null&&cS(t,u,0);let p=n.viewQuery;if(p!==null&&Lh(2,p,i),!o)if(d){let h=n.viewCheckHooks;h!==null&&Il(t,h)}else{let h=n.viewHooks;h!==null&&Nl(t,h,2),Sh(t,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),t[ll]){for(let h of t[ll])h();t[ll]=null}o||(tS(t),t[K]&=-73)}catch(d){throw o||ur(t),d}finally{l!==null&&(qi(l,c),a&&bT(l)),vl()}}function sS(n,t){for(let e=ab(n);e!==null;e=cb(e))for(let i=Ve;i<e.length;i++){let r=e[i];aS(r,t)}}function IT(n){for(let t=ab(n);t!==null;t=cb(t)){if(!(t[K]&2))continue;let e=t[lr];for(let i=0;i<e.length;i++){let r=e[i];th(r)}}}function NT(n,t,e){De(ge.ComponentStart);let i=tn(t,n);try{aS(i,e)}finally{De(ge.ComponentEnd,i[Ye])}}function aS(n,t){ul(n)&&qh(n,t)}function qh(n,t){let i=n[F],r=n[K],o=n[Wt],s=!!(t===0&&r&16);if(s||=!!(r&64&&t===0),s||=!!(r&1024),s||=!!(o?.dirty&&eo(o)),s||=!1,o&&(o.dirty=!1),n[K]&=-9217,s)xT(i,n,i.template,n[Ye]);else if(r&8192){let a=U(null);try{rS(n),sS(n,1);let c=i.components;c!==null&&cS(n,c,1),tS(n)}finally{U(a)}}}function cS(n,t,e){for(let i=0;i<t.length;i++)NT(n,t[i],e)}function TT(n,t){let e=n.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)xi(~r);else{let o=r,s=e[++i],a=e[++i];Hv(s,o);let c=t[o];De(ge.HostBindingsUpdateStart,c);try{a(2,c)}finally{De(ge.HostBindingsUpdateEnd,c)}}}}finally{xi(-1)}}function Vp(n,t){let e=uh()?64:1088;for(n[Ln].changeDetectionScheduler?.notify(t);n;){n[K]|=e;let i=Xn(n);if(wo(n)&&!i)return n;n=i}return null}function lS(n,t,e,i){return[n,!0,0,t,null,i,null,e,null,null]}function dS(n,t){let e=Ve+t;if(e<n.length)return n[e]}function Ys(n,t,e,i=!0){let r=t[F];if(MT(r,t,n,e),i){let s=Wh(e,n),a=t[_e],c=a.parentNode(n[cr]);c!==null&&$N(r,n[St],a,t,c,s)}let o=t[or];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function uS(n,t){let e=Vs(n,t);return e!==void 0&&Jl(e[F],e),e}function Vs(n,t){if(n.length<=Ve)return;let e=Ve+t,i=n[e];if(i){let r=i[Ei];r!==null&&r!==n&&Np(r,i),t>0&&(n[e-1][Xt]=i[Xt]);let o=Ds(n,Ve+t);UN(i[F],i);let s=o[Vn];s!==null&&s.detachView(o[F]),i[nt]=null,i[Xt]=null,i[K]&=-129}return i}function MT(n,t,e,i){let r=Ve+i,o=e.length;i>0&&(e[r-1][Xt]=t),i<o-Ve?(t[Xt]=e[r],Uf(e,Ve+i,t)):(e.push(t),t[Xt]=null),t[nt]=e;let s=t[Ei];s!==null&&e!==s&&fS(s,t);let a=t[Vn];a!==null&&a.insertView(n),fl(t),t[K]|=128}function fS(n,t){let e=n[lr],i=t[nt];if(Jn(i))n[K]|=2;else{let r=i[nt][Rt];t[Rt]!==r&&(n[K]|=2)}e===null?n[lr]=[t]:e.push(t)}var ki=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let t=this._lView,e=t[F];return Ls(e,t,e.firstChild,[])}constructor(t,e){this._lView=t,this._cdRefInjectingView=e}get context(){return this._lView[Ye]}set context(t){this._lView[Ye]=t}get destroyed(){return dr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let t=this._lView[nt];if(en(t)){let e=t[Es],i=e?e.indexOf(this):-1;i>-1&&(Vs(t,i),Ds(e,i))}this._attachedToViewContainer=!1}Jl(this._lView[F],this._lView)}onDestroy(t){hl(this._lView,t)}markForCheck(){Vp(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[K]&=-129}reattach(){fl(this._lView),this._lView[K]|=128}detectChanges(){this._lView[K]|=1024,oS(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new S(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let t=wo(this._lView),e=this._lView[Ei];e!==null&&!t&&Np(e,this._lView),Hb(this._lView[F],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new S(902,!1);this._appRef=t;let e=wo(this._lView),i=this._lView[Ei];i!==null&&!e&&fS(i,this._lView),fl(this._lView)}};var ft=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=kT;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=Ks(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new ki(o)}}return n})();function kT(){return rd(Be(),G())}function rd(n,t){return n.type&4?new ft(t,n,Lo(n,t)):null}function Vo(n,t,e,i,r){let o=n.data[t];if(o===null)o=RT(n,t,e,i,r),jv()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=Fv();o.injectorIndex=s===null?-1:s.injectorIndex}return Co(o,!0),o}function RT(n,t,e,i,r){let o=ch(),s=lh(),a=s?o:o&&o.parent,c=n.data[t]=OT(n,a,e,t,i,r);return AT(n,c,o,s),c}function AT(n,t,e,i){n.firstChild===null&&(n.firstChild=t),e!==null&&(i?e.child==null&&t.parent!==null&&(e.child=t):e.next===null&&(e.next=t,t.prev=e))}function OT(n,t,e,i,r,o){let s=t?t.injectorIndex:-1,a=0;return oh()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:mh(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function PT(n){let t=n[Qf]??[],i=n[nt][_e],r=[];for(let o of t)o.data[fb]!==void 0?r.push(o):FT(o,i);n[Qf]=r}function FT(n,t){let e=0,i=n.firstChild;if(i){let r=n.data[ub];for(;e<r;){let o=i.nextSibling;Eb(t,i,!1),i=o,e++}}}var LT=()=>null,VT=()=>null;function Fl(n,t){return LT(n,t)}function hS(n,t,e){return VT(n,t,e)}var pS=class{},je=class{},Pe=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>BT()};function BT(){let n=G(),t=Be(),e=tn(t.index,n);return(Jn(e)?e:n)[_e]}var mS=(()=>{class n{static \u0275prov=ne({token:n,providedIn:"root",factory:()=>null})}return n})();function gS(n){return n.debugInfo?.className||n.type.name||null}var Ml={},Ll=class{injector;parentInjector;constructor(t,e){this.injector=t,this.parentInjector=e}get(t,e,i){let r=this.injector.get(t,Ml,i);return r!==Ml||e===Ml?r:this.parentInjector.get(t,e,i)}};function Bp(n){return vS(n)?Array.isArray(n)||!(n instanceof Map)&&Symbol.iterator in n:!1}function _S(n,t){if(Array.isArray(n))for(let e=0;e<n.length;e++)t(n[e]);else{let e=n[Symbol.iterator](),i;for(;!(i=e.next()).done;)t(i.value)}}function vS(n){return n!==null&&(typeof n=="function"||typeof n=="object")}function jT(n,t,e){return n[t]=e}function rn(n,t,e){if(e===on)return!1;let i=n[t];return Object.is(i,e)?!1:(n[t]=e,!0)}function HT(n,t,e,i){let r=rn(n,t,e);return rn(n,t+1,i)||r}function vr(n,t,e){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&FI(r,o);let s=Bn(n)?tn(n.index,t):t;Vp(s,5);let a=t[Ye],c=Iy(t,a,e,r),l=i.__ngNextListenerFn__;for(;l;)c=Iy(t,a,l,r)&&c,l=l.__ngNextListenerFn__;return c}}function Iy(n,t,e,i){let r=U(null);try{return De(ge.OutputStart,t,e),e(i)!==!1}catch(o){return hT(n,o),!1}finally{De(ge.OutputEnd,t,e),U(r)}}function jp(n,t,e,i,r,o,s,a){let c=Do(n),l=!1,d=null;if(!i&&c&&(d=UT(t,e,o,n.index)),d!==null){let u=d.__ngLastListenerFn__||d;u.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,l=!0}else{let u=At(n,e),p=i?i(u):u;VI(e,p,o,a),i||(a.__ngNativeEl__=u);let h=r.listen(p,o,a);if(!zT(o)){let m=i?g=>i(ut(g[n.index])):n.index;yS(m,t,e,o,a,h,!1)}}return l}function zT(n){return n.startsWith("animation")||n.startsWith("transition")}function UT(n,t,e,i){let r=n.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=t[bo],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s=="string"&&(o+=2)}return null}function yS(n,t,e,i,r,o,s){let a=t.firstCreatePass?ih(t):null,c=nh(e),l=c.length;c.push(r,o),a&&a.push(i,n,l,(l+1)*(s?-1:1))}function Ny(n,t,e,i,r){let o=null,s=null,a=null,c=!1,l=n.directiveToIndex.get(e.type);if(typeof l=="number"?o=l:[o,s,a]=l,s!==null&&a!==null&&n.hostDirectiveOutputs?.hasOwnProperty(i)){let d=n.hostDirectiveOutputs[i];for(let u=0;u<d.length;u+=2){let p=d[u];if(p>=s&&p<=a)c=!0,Vl(n,t,p,d[u+1],i,r);else if(p>a)break}}return e.outputs.hasOwnProperty(i)&&(c=!0,Vl(n,t,o,i,i,r)),c}function Vl(n,t,e,i,r,o){let s=t[e],a=t[F],l=a.data[e].outputs[i],u=s[l].subscribe(o);yS(n.index,a,t,r,o,u,!0)}function Cr(){$T()}function $T(){let n=G(),t=Ie(),e=Be();if(t.firstCreatePass&&WT(t,e),e.controlDirectiveIndex===-1)return;sn("NgSignalForms");let i=n[e.controlDirectiveIndex];t.data[e.controlDirectiveIndex].controlDef.create(i,new Bl(n,t,e))}function Er(){GT()}function GT(){let n=G(),t=Ie(),e=fr();if(e.controlDirectiveIndex===-1)return;let i=t.data[e.controlDirectiveIndex].controlDef,r=n[e.controlDirectiveIndex];i.update(r,new Bl(n,t,e))}var Bl=class{lView;tView;tNode;hasPassThrough;constructor(t,e,i){this.lView=t,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return At(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(t,e){let i=this.tView.data[this.tNode.customControlIndex];Ny(this.tNode,this.lView,i,t,vr(this.tNode,this.lView,e))}listenToCustomControlModel(t){let e=this.tNode.flags&1024?"valueChange":"checkedChange",i=this.tView.data[this.tNode.customControlIndex];Ny(this.tNode,this.lView,i,e,vr(this.tNode,this.lView,t))}listenToDom(t,e){jp(this.tNode,this.tView,this.lView,void 0,this.lView[_e],t,e,vr(this.tNode,this.lView,e))}setInputOnDirectives(t,e){let i=this.tNode.inputs?.[t],r=this.tNode.hostDirectiveInputs?.[t];if(!i&&!r)return!1;let o=!1;if(i)for(let s of i){if(s===this.tNode.controlDirectiveIndex)continue;let a=this.tView.data[s],c=this.lView[s];br(a,c,t,e),o=!0}if(r)for(let s=0;s<r.length;s+=2){let a=r[s];if(a===this.tNode.controlDirectiveIndex)continue;let c=r[s+1],l=this.tView.data[a],d=this.lView[a];br(l,d,c,e),o=!0}return o}setCustomControlModelInput(t){let e=this.tView.data[this.tNode.customControlIndex],i=this.tNode.flags&1024?"value":"checked";pT(this.tNode,this.tView,this.lView,e,i,t)}customControlHasInput(t){if(this.tNode.customControlIndex===-1)return!1;let e=this.tView.data[this.tNode.customControlIndex];return(e.signalFormsInputPresence??=this._buildCustomControlInputCache(e))[t]===!0}_buildCustomControlInputCache(t){let e={};for(let i in t.inputs)e[i]=!0;if(t.hostDirectives!==null){let i=[...t.hostDirectives];for(;i.length>0;){let r=i.shift();if(typeof r!="function"){for(let s in r.inputs)e[r.inputs[s]]=!0;let o=Ty(r.directive);o!==null&&i.push(...o);continue}for(let o of r()){if(typeof o=="function")continue;if(o.inputs)for(let a=0;a<o.inputs.length;a+=2){let c=o.inputs[a+1]||o.inputs[a];e[c]=!0}let s=Ty(o.directive);s!==null&&i.push(...s)}}}return e}};function Ty(n){return typeof n=="function"&&"\u0275dir"in n?n.\u0275dir.hostDirectives??null:null}function WT(n,t,e){for(let r=t.directiveStart;r<t.directiveEnd;r++)if(n.data[r].controlDef){t.controlDirectiveIndex=r;break}if(t.controlDirectiveIndex===-1)return;let i=n.data[t.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(t.inputs?.[i.passThroughInput]?.length??0)>1){t.flags|=4096;return}qT(n,t)}function qT(n,t){for(let e=t.directiveStart;e<t.directiveEnd;e++){let i=n.data[e];if(!(t.directiveToIndex&&!t.directiveToIndex.has(i.type))){if(My(i,"value")){t.flags|=1024,t.customControlIndex=e;return}if(My(i,"checked")){t.flags|=2048,t.customControlIndex=e;return}}}if(t.hostDirectiveInputs!==null&&t.hostDirectiveOutputs!==null&&t.directiveToIndex!==null){let e=(i,r)=>{let o=t.hostDirectiveInputs[i],s=t.hostDirectiveOutputs[i+"Change"];if(!o||!s)return!1;for(let a=0;a<o.length;a+=2){let c=o[a];for(let l=0;l<s.length;l+=2){let d=s[l];if(c===d)for(let u of t.directiveToIndex.values()){if(!Array.isArray(u))continue;let[p,h,m]=u;if(c>=h&&c<=m)return t.flags|=r,t.customControlIndex=p,!0}}}return!1};if(e("value",1024)||e("checked",2048))return}}function My(n,t){return KT(n,t)&&YT(n,t+"Change")}function KT(n,t){return t in n.inputs}function YT(n,t){return t in n.outputs}var Kh=Symbol("BINDING");var xr=new _("");function jl(n,t,e){let i=e?n.styles:null,r=e?n.classes:null,o=0;if(t!==null)for(let s=0;s<t.length;s++){let a=t[s];if(typeof a=="number")o=a;else if(o==1)r=nl(r,a);else if(o==2){let c=a,l=t[++s];i=nl(i,c+": "+l+";")}}e?n.styles=i:n.stylesWithoutHost=i,e?n.classes=r:n.classesWithoutHost=r}function Ce(n,t=0){let e=G();if(e===null)return B(n,t);let i=Be();return tb(i,e,dt(n),t)}function bS(n,t,e,i,r){let o=i===null?null:{"":-1},s=r(n,e);if(s!==null){let a=s,c=null,l=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,c,l]=d.resolveHostDirectives(s);break}XT(n,t,e,a,o,c,l)}o!==null&&i!==null&&QT(e,i,o)}function QT(n,t,e){let i=n.localNames=[];for(let r=0;r<t.length;r+=2){let o=e[t[r+1]];if(o==null)throw new S(-301,!1);i.push(t[r],o)}}function ZT(n,t,e){t.componentOffset=e,(n.components??=[]).push(t.index)}function XT(n,t,e,i,r,o,s){let a=i.length,c=null;for(let p=0;p<a;p++){let h=i[p];c===null&&jn(h)&&(c=h,ZT(n,e,p)),Ah(Ol(e,t),n,h.type)}rM(e,n.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let p=0;p<a;p++){let h=i[p];h.providersResolver&&h.providersResolver(h)}let l=!1,d=!1,u=qb(n,t,a,null);a>0&&(e.directiveToIndex=new Map);for(let p=0;p<a;p++){let h=i[p];if(e.mergedAttrs=ko(e.mergedAttrs,h.hostAttrs),eM(n,e,t,u,h),iM(u,h,r),s!==null&&s.has(h)){let[g,v]=s.get(h);e.directiveToIndex.set(h.type,[u,g+e.directiveStart,v+e.directiveStart])}else(o===null||!o.has(h))&&e.directiveToIndex.set(h.type,u);h.contentQueries!==null&&(e.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(e.flags|=64);let m=h.type.prototype;!l&&(m.ngOnChanges||m.ngOnInit||m.ngDoCheck)&&((n.preOrderHooks??=[]).push(e.index),l=!0),!d&&(m.ngOnChanges||m.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(e.index),d=!0),u++}JT(n,e,o)}function JT(n,t,e){for(let i=t.directiveStart;i<t.directiveEnd;i++){let r=n.data[i];if(e===null||!e.has(r))ky(0,t,r,i),ky(1,t,r,i),Ay(t,i,!1);else{let o=e.get(r);Ry(0,t,o,i),Ry(1,t,o,i),Ay(t,i,!0)}}}function ky(n,t,e,i){let r=n===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;n===0?s=t.inputs??={}:s=t.outputs??={},s[o]??=[],s[o].push(i),SS(t,o)}}function Ry(n,t,e,i){let r=n===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;n===0?a=t.hostDirectiveInputs??={}:a=t.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),SS(t,s)}}function SS(n,t){t==="class"?n.flags|=8:t==="style"&&(n.flags|=16)}function Ay(n,t,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=n;if(i===null||!e&&r===null||e&&o===null||Dp(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!e&&r.hasOwnProperty(c)){let l=r[c];for(let d of l)if(d===t){s??=[],s.push(c,i[a+1]);break}}else if(e&&o.hasOwnProperty(c)){let l=o[c];for(let d=0;d<l.length;d+=2)if(l[d]===t){s??=[],s.push(l[d+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(s)}function eM(n,t,e,i,r){n.data[i]=r;let o=r.factory||(r.factory=tr(r.type,!0)),s=new yr(o,jn(r),Ce,null);n.blueprint[i]=s,e[i]=s,tM(n,t,i,qb(n,e,r.hostVars,on),r)}function tM(n,t,e,i,r){let o=r.hostBindings;if(o){let s=n.hostBindingOpCodes;s===null&&(s=n.hostBindingOpCodes=[]);let a=~t.index;nM(s)!=a&&s.push(a),s.push(e,i,o)}}function nM(n){let t=n.length;for(;t>0;){let e=n[--t];if(typeof e=="number"&&e<0)return e}return 0}function iM(n,t,e){if(e){if(t.exportAs)for(let i=0;i<t.exportAs.length;i++)e[t.exportAs[i]]=n;jn(t)&&(e[""]=n)}}function rM(n,t,e){n.flags|=1,n.directiveStart=t,n.directiveEnd=t+e,n.providerIndexes=t}function Hp(n,t,e,i,r,o,s,a){let c=t[F],l=c.consts,d=nn(l,s),u=Vo(c,n,e,i,d);return o&&bS(c,t,u,nn(l,a),r),u.mergedAttrs=ko(u.mergedAttrs,u.attrs),u.attrs!==null&&jl(u,u.attrs,!1),u.mergedAttrs!==null&&jl(u,u.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,u),u}function zp(n,t){Wy(n,t),Zf(t)&&n.queries.elementEnd(t)}function oM(n,t,e,i,r,o){let s=t.consts,a=nn(s,r),c=Vo(t,n,e,i,a);if(c.mergedAttrs=ko(c.mergedAttrs,c.attrs),o!=null){let l=nn(s,o);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&jl(c,c.attrs,!1),c.mergedAttrs!==null&&jl(c,c.mergedAttrs,!0),t.queries!==null&&t.queries.elementStart(t,c),c}var DS=typeof ShadowRoot<"u",sM=typeof Document<"u";function aM(n){return Object.keys(n).map(t=>{let[e,i,r]=n[t],o={propName:e,templateName:t,isSignal:(i&td.SignalBased)!==0};return r&&(o.transform=r),o})}function cM(n){return Object.keys(n).map(t=>({propName:n[t],templateName:t}))}function lM(n,t,e){let i=t instanceof Ke?t:t?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new Ll(e,i):e}function dM(n){let t=n.get(je,null);if(t===null)throw new S(407,!1);let e=n.get(mS,null),i=n.get(Fn,null),r=n.get($n,null,{optional:!0});return{rendererFactory:t,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function uM(n,t){let e=wS(n);return wb(t,e,e==="svg"?Xf:e==="math"?Iv:null)}function fM(n){if(n?.toLowerCase()==="script")throw new S(905,!1)}function wS(n){return(n.selectors[0][0]||"div").toLowerCase()}var Po=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=aM(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=cM(this.componentDef.outputs),this.cachedOutputs}constructor(t,e){this.componentDef=t,this.ngModule=e,this.componentType=t.type,this.selector=DN(t.selectors),this.ngContentSelectors=t.ngContentSelectors??[],this.isBoundToModule=!!e}create(t,e,i,r,o,s){De(ge.DynamicComponentStart);let a=U(null);try{let c=this.componentDef,l=lM(c,r||this.ngModule,t),d=dM(l),u=d.tracingService;return u&&u.componentCreate?u.componentCreate(gS(c),()=>this.createComponentRef(d,l,e,i,o,s)):this.createComponentRef(d,l,e,i,o,s)}finally{U(a)}}createComponentRef(t,e,i,r,o,s){let a=this.componentDef,c=hM(r,a,s,o),l=t.rendererFactory.createRenderer(null,a),d=r?rT(l,r,a.encapsulation,e):uM(a,l);fM(d?.tagName);let u=e.get(xr,null),p=pM(d,()=>e.get(A,null)??db());u&&u.addHost(p);let h=s?.some(Oy)||o?.some(v=>typeof v!="function"&&v.bindings.some(Oy)),m=Rp(null,c,null,512|Wb(a),null,null,t,l,e,null,mb(d,e,!0));u&&DS&&p instanceof ShadowRoot&&hl(m,()=>{u.removeHost(p)}),m[He]=d,_l(m);let g=null;try{let v=Hp(He,m,2,"#host",()=>c.directiveRegistry,!0,0);xb(l,d,v),Ro(d,m),nd(c,m,v),mp(c,v,m),zp(c,v),i!==void 0&&gM(v,this.ngContentSelectors,i),g=tn(v.index,m),m[Ye]=g[Ye],Lp(c,m,null)}catch(v){throw g!==null&&Ph(g),Ph(m),v}finally{De(ge.DynamicComponentEnd),vl()}return new Hl(this.componentType,m,!!h)}};function hM(n,t,e,i){let r=n?["ng-version","22.1.1"]:wN(t.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[Kh].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let u=i[d];if(typeof u!="function")for(let p of u.bindings){a+=p[Kh].requiredVars;let h=d+1;p.create&&(p.targetIdx=h,(o??=[]).push(p)),p.update&&(p.targetIdx=h,(s??=[]).push(p))}}let c=[t];if(i)for(let d of i){let u=typeof d=="function"?d:d.type,p=Vf(u);c.push(p)}return kp(0,null,mM(o,s),1,a,c,null,null,null,[r],null)}function pM(n,t){let e=n.getRootNode?.();return sM&&e instanceof Document?e.head:e&&DS&&e instanceof ShadowRoot?e:t().head}function mM(n,t){return!n&&!t?null:e=>{if(e&1&&n)for(let i of n)i.create();if(e&2&&t)for(let i of t)i.update()}}function Oy(n){let t=n[Kh].kind;return t==="input"||t==="twoWay"}var Hl=class extends pS{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(t,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=dl(e[F],He),this.location=Lo(this._tNode,e),this.instance=tn(this._tNode.index,e)[Ye],this.hostView=this.changeDetectorRef=new ki(e,void 0),this.componentType=t}setInput(t,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(t)&&Object.is(this.previousInputValues.get(t),e))return;let r=this._rootLView,o=id(i,r[F],r,t,e);this.previousInputValues.set(t,e);let s=tn(i.index,r);Vp(s,1)}get injector(){return new Mi(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}};function gM(n,t,e){let i=n.projection=[];for(let r=0;r<t.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var ze=(()=>{class n{static __NG_ELEMENT_ID__=_M}return n})();function _M(){let n=Be();return CS(n,G())}var Yh=class n extends ze{_lContainer;_hostTNode;_hostLView;constructor(t,e,i){super(),this._lContainer=t,this._hostTNode=e,this._hostLView=i}get element(){return Lo(this._hostTNode,this._hostLView)}get injector(){return new Mi(this._hostTNode,this._hostLView)}get parentInjector(){let t=up(this._hostTNode,this._hostLView);if(Yy(t)){let e=Al(t,this._hostLView),i=Rl(t),r=e[F].data[i+8];return new Mi(r,e)}else return new Mi(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){let e=Py(this._lContainer);return e!==null&&e[t]||null}get length(){return this._lContainer.length-Ve}createEmbeddedView(t,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=Fl(this._lContainer,t.ssrId),a=t.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,Oo(this._hostTNode,s)),a}createComponent(t,e,i,r,o,s,a){let c,l=e||{};c=l.index,i=l.injector,r=l.projectableNodes,o=l.environmentInjector||l.ngModuleRef,s=l.directives,a=l.bindings;let d=new Po(Di(t)),u=i||this.parentInjector;if(!o&&d.ngModule==null){let C=this.parentInjector.get(Ke,null);C&&(o=C)}let p=Di(d.componentType??{}),h=Fl(this._lContainer,p?.id??null),m=h?.firstChild??null,g=d.create(u,r,m,o,s,a);return this.insertImpl(g.hostView,c,Oo(this._hostTNode,h)),g}insert(t,e){return this.insertImpl(t,e,!0)}insertImpl(t,e,i){let r=t._lView;if(Mv(r)){let a=this.indexOf(t);if(a!==-1)this.detach(a);else{let c=r[nt],l=new n(c,c[St],c[nt]);l.detach(l.indexOf(t))}}let o=this._adjustIndex(e),s=this._lContainer;return Ys(s,r,o,i),t.attachToViewContainerRef(),Uf(Ch(s),o,t),t}move(t,e){return this.insert(t,e)}indexOf(t){let e=Py(this._lContainer);return e!==null?e.indexOf(t):-1}remove(t){let e=this._adjustIndex(t,-1),i=Vs(this._lContainer,e);i&&(Ds(Ch(this._lContainer),e),Jl(i[F],i))}detach(t){let e=this._adjustIndex(t,-1),i=Vs(this._lContainer,e);return i&&Ds(Ch(this._lContainer),e)!=null?new ki(i):null}_adjustIndex(t,e=0){return t??this.length+e}};function Py(n){return n[Es]}function Ch(n){return n[Es]||(n[Es]=[])}function CS(n,t){let e,i=t[n.index];return en(i)?e=i:(e=lS(i,t,null,n),t[n.index]=e,Ap(t,e)),yM(e,t,n,i),new Yh(e,n,t)}function vM(n,t){let e=n[_e],i=e.createComment(""),r=At(t,n),o=e.parentNode(r);return gr(e,o,i,e.nextSibling(r),!1),i}var yM=DM,bM=()=>!1;function SM(n,t,e){return bM(n,t,e)}function DM(n,t,e,i){if(n[cr])return;let r;e.type&8?r=ut(i):r=vM(t,e),n[cr]=r}var Qh=class n{queryList;matches=null;constructor(t){this.queryList=t}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Zh=class n{queries;constructor(t=[]){this.queries=t}createEmbeddedView(t){let e=t.queries;if(e!==null){let i=t.contentQueries!==null?t.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}finishViewCreation(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let e=0;e<this.queries.length;e++)$p(t,e).matches!==null&&this.queries[e].setDirty()}},zl=class{flags;read;predicate;constructor(t,e,i=null){this.flags=e,this.read=i,typeof t=="string"?this.predicate=IM(t):this.predicate=t}},Xh=class n{queries;constructor(t=[]){this.queries=t}elementStart(t,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(t,e)}elementEnd(t){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(t)}embeddedTView(t){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(t,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new n(e):null}template(t,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(t,e)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}},Jh=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(t,e=-1){this.metadata=t,this._declarationNodeIndex=e}elementStart(t,e){this.isApplyingToNode(e)&&this.matchTNode(t,e)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,e){this.elementStart(t,e)}embeddedTView(t,e){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,e),new n(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=t.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(t,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(t,e,wM(e,o)),this.matchTNodeWithReadOption(t,e,Tl(e,t,o,!1,!1))}else i===ft?e.type&4&&this.matchTNodeWithReadOption(t,e,-1):this.matchTNodeWithReadOption(t,e,Tl(e,t,i,!1,!1))}matchTNodeWithReadOption(t,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===T||r===ze||r===ft&&e.type&4)this.addMatch(e.index,-2);else{let o=Tl(e,t,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(t,e){this.matches===null?this.matches=[t,e]:this.matches.push(t,e)}};function wM(n,t){let e=n.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===t)return e[i+1]}return null}function CM(n,t){return n.type&11?Lo(n,t):n.type&4?rd(n,t):null}function EM(n,t,e,i){return e===-1?CM(t,n):e===-2?xM(n,t,i):As(n,n[F],e,t)}function xM(n,t,e){if(e===T)return Lo(t,n);if(e===ft)return rd(t,n);if(e===ze)return CS(t,n)}function ES(n,t,e,i){let r=t[Vn].queries[i];if(r.matches===null){let o=n.data,s=e.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let d=o[l];a.push(EM(t,d,s[c+1],e.metadata.read))}}r.matches=a}return r.matches}function ep(n,t,e,i){let r=n.queries.getByIndex(e),o=r.matches;if(o!==null){let s=ES(n,t,r,e);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],d=t[-c];for(let u=Ve;u<d.length;u++){let p=d[u];p[Ei]===p[nt]&&ep(p[F],p,l,i)}if(d[lr]!==null){let u=d[lr];for(let p=0;p<u.length;p++){let h=u[p];ep(h[F],h,l,i)}}}}}return i}function Up(n,t){return n[Vn].queries[t].queryList}function xS(n,t,e){let i=new ri((e&4)===4);return Av(n,t,i,i.destroy),(t[Vn]??=new Zh).queries.push(new Qh(i))-1}function IS(n,t,e){let i=Ie();return i.firstCreatePass&&(TS(i,new zl(n,t,e),-1),(t&2)===2&&(i.staticViewQueries=!0)),xS(i,G(),t)}function NS(n,t,e,i){let r=Ie();if(r.firstCreatePass){let o=Be();TS(r,new zl(t,e,i),o.index),NM(r,n),(e&2)===2&&(r.staticContentQueries=!0)}return xS(r,G(),e)}function IM(n){return n.split(",").map(t=>t.trim())}function TS(n,t,e){n.queries===null&&(n.queries=new Xh),n.queries.track(new Jh(t,e))}function NM(n,t){let e=n.contentQueries||(n.contentQueries=[]),i=e.length?e[e.length-1]:-1;t!==i&&e.push(n.queries.length-1,t)}function $p(n,t){return n.queries.getByIndex(t)}function MS(n,t){let e=n[F],i=$p(e,t);return i.crossesNgTemplate?ep(e,n,t,[]):ES(e,n,i,t)}function kS(n,t,e){let i,r=rs(()=>{i._dirtyCounter();let o=TM(i,n);if(t&&o===void 0)throw new S(-951,!1);return o});return i=r[tt],i._dirtyCounter=Se(0),i._flatValue=void 0,r}function Gp(n){return kS(!0,!1,n)}function Wp(n){return kS(!0,!0,n)}function RS(n,t){let e=n[tt];e._lView=G(),e._queryIndex=t,e._queryList=Up(e._lView,t),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function TM(n,t){let e=n._lView,i=n._queryIndex;if(e===void 0||i===void 0||e[K]&4)return t?void 0:bt;let r=Up(e,i),o=MS(e,i);return r.reset(o,rb),t?r.first:r._changesDetected||n._flatValue===void 0?n._flatValue=r.toArray():n._flatValue}function Ir(n){return!!n&&typeof n.then=="function"}function qp(n){return!!n&&typeof n.subscribe=="function"}var Sr=class{};var Bs=class extends Sr{injector;instance=null;constructor(t){super();let e=new ir([...t.providers,{provide:Sr,useValue:this}],t.parent||vo(),t.debugName,new Set(["environment"]));this.injector=e,t.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}};function AS(n,t,e=null){return new Bs({providers:n,parent:t,debugName:e,runEnvironmentInitializers:!0}).injector}var MM=(()=>{class n{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=Gf(!1,e.type),r=i.length>0?AS([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=ne({token:n,providedIn:"environment",factory:()=>new n(B(Ke))})}return n})();function j(n){return Us(()=>{let t=OS(n),e=he(I({},t),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection!==hp.Eager,directiveDefs:null,pipeDefs:null,dependencies:t.standalone&&n.dependencies||null,getStandaloneInjector:t.standalone?r=>r.get(MM).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||bn.Emulated,styles:n.styles||bt,_:null,schemas:n.schemas||null,tView:null,id:""});t.standalone&&sn("NgStandalone"),PS(e);let i=n.dependencies;return e.directiveDefs=Fy(i,kM),e.pipeDefs=Fy(i,hv),e.id=OM(e),e})}function kM(n){return Di(n)||Vf(n)}function Ae(n){return Us(()=>({type:n.type,bootstrap:n.bootstrap||bt,declarations:n.declarations||bt,imports:n.imports||bt,exports:n.exports||bt,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function RM(n,t){if(n==null)return wi;let e={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=td.None,c=null),e[o]=[i,a,c],t[o]=s}return e}function AM(n){if(n==null)return wi;let t={};for(let e in n)n.hasOwnProperty(e)&&(t[n[e]]=e);return t}function x(n){return Us(()=>{let t=OS(n);return PS(t),t})}function OS(n){let t={};return{type:n.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:t,inputConfig:n.inputs||wi,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||bt,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:RM(n.inputs,t),outputs:AM(n.outputs),debugInfo:null}}function PS(n){n.features?.forEach(t=>t(n))}function Fy(n,t){return n?()=>{let e=typeof n=="function"?n():n,i=[];for(let r of e){let o=t(r);o!==null&&i.push(o)}return i}:null}function OM(n){let t=0,e=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,e,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let o of i.join("|"))t=Math.imul(31,t)+o.charCodeAt(0)<<0;return t+=2147483648,"c"+t}var FS=new _("");var Kp=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=f(FS,{optional:!0})??[];injector=f(ee);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=yo(this.injector,r);if(Ir(o))e.push(o);else if(qp(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();function Yp(n){return t=>{t.controlDef={create:(e,i)=>{e?.\u0275ngControlCreate(i)},update:(e,i)=>{e?.\u0275ngControlUpdate?.(i)},passThroughInput:n}}}function PM(n){return Object.getPrototypeOf(n.prototype).constructor}function ce(n){let t=PM(n.type),e=!0,i=[n];for(;t&&t!==Function.prototype&&t!==Object.prototype;){let r,o=Object.hasOwn(t,bs)?t[bs]:void 0,s=Object.hasOwn(t,Ss)?t[Ss]:void 0;if(jn(n))r=o??s;else{if(o)throw new S(903,!1);r=s}if(r){if(e){i.push(r);let c=n;c.inputs=Eh(n.inputs),c.declaredInputs=Eh(n.declaredInputs),c.outputs=Eh(n.outputs);let l=r.hostBindings;l&&jM(n,l);let d=r.viewQuery,u=r.contentQueries;if(d&&VM(n,d),u&&BM(n,u),FM(n,r),fv(n.outputs,r.outputs),jn(r)&&r.data.animation){let p=n.data;p.animation=(p.animation||[]).concat(r.data.animation)}}let a=r.features;if(a)for(let c=0;c<a.length;c++){let l=a[c];l&&l.ngInherit&&l(n),l===ce&&(e=!1)}}t=Object.getPrototypeOf(t)}LM(i)}function FM(n,t){for(let e in t.inputs){if(!t.inputs.hasOwnProperty(e)||n.inputs.hasOwnProperty(e))continue;let i=t.inputs[e];i!==void 0&&(n.inputs[e]=i,n.declaredInputs[e]=t.declaredInputs[e])}}function LM(n){let t=0,e=null;for(let i=n.length-1;i>=0;i--){let r=n[i];r.hostVars=t+=r.hostVars,r.hostAttrs=ko(r.hostAttrs,e=ko(e,r.hostAttrs))}}function Eh(n){return n===wi?{}:n===bt?[]:n}function VM(n,t){let e=n.viewQuery;e?n.viewQuery=(i,r)=>{t(i,r),e(i,r)}:n.viewQuery=t}function BM(n,t){let e=n.contentQueries;e?n.contentQueries=(i,r,o)=>{t(i,r,o),e(i,r,o)}:n.contentQueries=t}function jM(n,t){let e=n.hostBindings;e?n.hostBindings=(i,r)=>{t(i,r),e(i,r)}:n.hostBindings=t}function LS(n,t,e,i,r,o,s,a){if(e.firstCreatePass){n.mergedAttrs=ko(n.mergedAttrs,n.attrs);let d=n.tView=kp(2,n,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,n),d.queries=e.queries.embeddedTView(n))}a&&(n.flags|=a),Co(n,!1);let c=zM(e,t,n,i);yl()&&Tp(e,t,c,n),Ro(c,t);let l=lS(c,t,c,n);t[i+He]=l,Ap(t,l),SM(l,n,t)}function HM(n,t,e,i,r,o,s,a,c,l,d){let u=e+He,p;return t.firstCreatePass?(p=Vo(t,u,4,s||null,a||null),pl()&&bS(t,n,p,nn(t.consts,l),Op),Wy(t,p)):p=t.data[u],LS(p,n,t,e,i,r,o,c),Do(p)&&nd(t,n,p),l!=null&&qs(n,p,d),p}function js(n,t,e,i,r,o,s,a,c,l,d){let u=e+He,p;if(t.firstCreatePass){if(p=Vo(t,u,4,s||null,a||null),l!=null){let h=nn(t.consts,l);p.localNames=[];for(let m=0;m<h.length;m+=2)p.localNames.push(h[m],-1)}}else p=t.data[u];return LS(p,n,t,e,i,r,o,c),l!=null&&qs(n,p,d),p}function xt(n,t,e,i,r,o,s,a){let c=G(),l=Ie(),d=nn(l.consts,o);return HM(c,l,n,t,e,i,r,d,void 0,s,a),xt}var zM=UM;function UM(n,t,e,i){return Ns(!0),t[_e].createComment("")}var Qp=new _("");var Zp=new _("");function VS(){Yu(()=>{let n="";throw new S(600,n)})}var $M=10;var Sn=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=f(Ii);afterRenderManager=f(Zl);zonelessEnabled=f(Ts);rootEffectScheduler=f(Sl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new y;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=f(hr);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(be(e=>!e))}constructor(){f($n,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=f(Ke);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=ee.NULL){return this._injector.get(M).run(()=>{if(De(ge.BootstrapComponentStart),!this._injector.get(Kp).done){let C="";throw new S(405,C)}let a=Di(e),c=this._injector.get(Sr),l=new Po(a,c);this.componentTypes.push(e);let{hostElement:d,directives:u,bindings:p}=GM(i),h=d||l.selector,m=l.create(r,[],h,c.injector,u,p),g=m.location.nativeElement,v=m.injector.get(Qp,null);return v?.registerApplication(g),m.onDestroy(()=>{this.detachView(m.hostView),Rs(this.components,m),v?.unregisterApplication(g)}),this._loadComponent(m),De(ge.BootstrapComponentEnd,m),m})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){De(ge.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Ql.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw De(ge.ChangeDetectionEnd),new S(101,!1);let e=U(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,U(e),this.afterTick.next(),De(ge.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(je,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<$M;){De(ge.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{De(ge.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!xs(r))continue;let o=i&&!this.zonelessEnabled?0:1;oS(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>xs(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;Rs(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Zp,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>Rs(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new S(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();function GM(n){return n===void 0||typeof n=="string"||n instanceof Element?{hostElement:n}:n}function Rs(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function od(n,t){let e=G(),i=ei();if(rn(e,i,t)){let r=Ie(),o=fr();if(id(o,r,e,n,t))Bn(o)&&Xb(e,o.index);else{let a=At(o,e);Jb(e[_e],a,null,o.value,n,t,null)}}return od}function le(n,t,e,i){let r=G(),o=ei();if(rn(r,o,t)){let s=Ie(),a=fr();uT(a,r,n,t,e,i)}return le}function To(n){if(sn("NgAnimateEnter"),!Gs)return To;let t=G();if(Mb(t))return To;let e=Be(),i=t[Dt].get(M);return Ob(by(t),e,()=>WM(t,e,n,i)),Bb(t[Dt]),jb(t[Dt],by(t)),To}function WM(n,t,e,i){let r=At(t,n),o=n[_e],s=Ab(e),a=[],c=!1,l=u=>{if(Ps(u)!==r)return;let p=u instanceof AnimationEvent?"animationend":"transitionend";i.runOutsideAngular(()=>{o.listen(r,p,d)})},d=u=>{Ps(u)===r&&(Ep(u,r)&&(c=!0),qM(u,r,o))};if(s&&s.length>0){i.runOutsideAngular(()=>{a.push(o.listen(r,"animationstart",l)),a.push(o.listen(r,"transitionstart",l))}),xN(r,s,a);for(let u of s)o.addClass(r,u);i.runOutsideAngular(()=>{requestAnimationFrame(()=>{if(!c&&(Lb(r,_r,Gs),!_r.has(r))){for(let u of s)o.removeClass(r,u);Cp(r)}})})}}function qM(n,t,e){let i=Ao.get(t);if(!(Ps(n)!==t||!i)&&Ep(n,t)){n.stopPropagation();for(let r of i.classList)e.removeClass(t,r);Cp(t)}}function Mo(n){if(sn("NgAnimateLeave"),!Gs)return Mo;let t=G();if(Mb(t))return Mo;let i=Be(),r=t[Dt].get(M);return Ob(Yl(t),i,()=>KM(t,i,n,r)),Bb(t[Dt]),Mo}function KM(n,t,e,i){let{promise:r,resolve:o}=gh(),s=At(t,n),a=n[_e];si.add(n[gn]),(Yl(n).get(t.index).resolvers??=[]).push(o);let c=Ab(e);return c&&c.length>0?YM(s,t,n,c,a,i):o(),{promise:r,resolve:o}}function YM(n,t,e,i,r,o){NN(n,r);let s=[],a=Yl(e).get(t.index)?.resolvers,c,l=!1,d=u=>{if(!(Ps(u)!==n&&u.type!=="animation-fallback")&&(u.type==="animation-fallback"||Ep(u,n))){if(l=!0,c&&clearTimeout(c),u.type!=="animation-fallback"&&u.stopPropagation(),_r.delete(n),yy(t,n),Array.isArray(t.projection))for(let h of i)r.removeClass(n,h);Sy(a,s),Dy(e,t)}};o.runOutsideAngular(()=>{s.push(r.listen(n,"animationend",d)),s.push(r.listen(n,"transitionend",d))}),Rb(t,n);for(let u of i)r.addClass(n,u);o.runOutsideAngular(()=>{requestAnimationFrame(()=>{if(l)return;Lb(n,_r,Gs);let u=_r.get(n);u?(c=setTimeout(()=>{d(new CustomEvent("animation-fallback"))},u.duration+50),s.push(()=>clearTimeout(c))):(yy(t,n),Sy(a,s),Dy(e,t))})})}var tp=class{destroy(t){}updateValue(t,e){}swap(t,e){let i=Math.min(t,e),r=Math.max(t,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(t,e){this.attach(e,this.detach(t))}};function xh(n,t,e,i,r){return n===e&&Object.is(t,i)?1:Object.is(r(n,t),r(e,i))?-1:0}function QM(n,t,e,i){let r,o,s=0,a=n.length-1,c=void 0;if(Array.isArray(t)){U(i);let l=t.length-1;for(U(null);s<=a&&s<=l;){let d=n.at(s),u=t[s],p=xh(s,d,s,u,e);if(p!==0){p<0&&n.updateValue(s,u),s++;continue}let h=n.at(a),m=t[l],g=xh(a,h,l,m,e);if(g!==0){g<0&&n.updateValue(a,m),a--,l--;continue}let v=e(s,d),C=e(a,h),Q=e(s,u);if(Object.is(Q,C)){let ye=e(l,m);Object.is(ye,v)?(n.swap(s,a),n.updateValue(a,m),l--,a--):n.move(a,s),n.updateValue(s,u),s++;continue}if(r??=new Ul,o??=Vy(n,s,a,e),np(n,r,s,Q))n.updateValue(s,u),s++,a++;else if(o.has(Q))r.set(v,n.detach(s)),a--;else{let ye=n.create(s,t[s]);n.attach(s,ye),s++,a++}}for(;s<=l;)Ly(n,r,e,s,t[s]),s++}else if(t!=null){U(i);let l=t[Symbol.iterator]();U(null);let d=l.next();for(;!d.done&&s<=a;){let u=n.at(s),p=d.value,h=xh(s,u,s,p,e);if(h!==0)h<0&&n.updateValue(s,p),s++,d=l.next();else{r??=new Ul,o??=Vy(n,s,a,e);let m=e(s,p);if(np(n,r,s,m))n.updateValue(s,p),s++,a++,d=l.next();else if(!o.has(m))n.attach(s,n.create(s,p)),s++,a++,d=l.next();else{let g=e(s,u);r.set(g,n.detach(s)),a--}}}for(;!d.done;)Ly(n,r,e,n.length,d.value),d=l.next()}for(;s<=a;)n.destroy(n.detach(a--));r?.forEach(l=>{n.destroy(l)})}function np(n,t,e,i){return t!==void 0&&t.has(i)?(n.attach(e,t.get(i)),t.delete(i),!0):!1}function Ly(n,t,e,i,r){if(np(n,t,i,e(i,r)))n.updateValue(i,r);else{let o=n.create(i,r);n.attach(i,o)}}function Vy(n,t,e,i){let r=new Set;for(let o=t;o<=e;o++)r.add(i(o,n.at(o)));return r}var Ul=class{kvMap=new Map;_vMap=void 0;has(t){return this.kvMap.has(t)}delete(t){if(!this.has(t))return!1;let e=this.kvMap.get(t);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(t,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(t),!0}get(t){return this.kvMap.get(t)}set(t,e){if(this.kvMap.has(t)){let i=this.kvMap.get(t);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(t,e)}forEach(t){for(let[e,i]of this.kvMap)if(t(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),t(i,e)}}};function L(n,t,e,i,r,o,s,a){sn("NgControlFlow");let c=G(),l=Ie(),d=nn(l.consts,o);return js(c,l,n,t,e,i,r,d,256,s,a),Xp}function Xp(n,t,e,i,r,o,s,a){sn("NgControlFlow");let c=G(),l=Ie(),d=nn(l.consts,o);return js(c,l,n,t,e,i,r,d,512,s,a),Xp}function V(n,t){sn("NgControlFlow");let e=G(),i=ei(),r=e[i]!==on?e[i]:-1,o=r!==-1?$l(e,He+r):void 0,s=0;if(rn(e,i,n)){let a=U(null);try{if(o!==void 0&&uS(o,s),n!==-1){let c=He+n,l=$l(e,c),d=sp(e[F],c),u=hS(l,d,e),p=Ks(e,d,t,{dehydratedView:u});Ys(l,p,s,Oo(d,u))}}finally{U(a)}}else if(o!==void 0){let a=dS(o,s);a!==void 0&&(a[Ye]=t)}}var ip=class{lContainer;$implicit;$index;constructor(t,e,i){this.lContainer=t,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-Ve}};function Qs(n,t){return t}var rp=class{hasEmptyBlock;trackByFn;liveCollection;constructor(t,e,i){this.hasEmptyBlock=t,this.trackByFn=e,this.liveCollection=i}};function Ri(n,t,e,i,r,o,s,a,c,l,d,u,p){sn("NgControlFlow");let h=G(),m=Ie(),g=c!==void 0,v=G(),C=a?s.bind(v[Rt][Ye]):s,Q=new rp(g,C);v[He+n]=Q,js(h,m,n+1,t,e,i,r,nn(m.consts,o),256),g&&js(h,m,n+2,c,l,d,u,nn(m.consts,p),512)}var op=class extends tp{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(t,e,i){super(),this.lContainer=t,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-Ve}at(t){return this.getLView(t)[Ye].$implicit}attach(t,e){let i=e[or];this.needsIndexUpdate||=t!==this.length,Ys(this.lContainer,e,t,Oo(this.templateTNode,i)),ZM(this.lContainer,t)}detach(t){return this.needsIndexUpdate||=t!==this.length-1,XM(this.lContainer,t),JM(this.lContainer,t)}create(t,e){let i=Fl(this.lContainer,this.templateTNode.tView.ssrId);return Ks(this.hostLView,this.templateTNode,new ip(this.lContainer,e,t),{dehydratedView:i})}destroy(t){Jl(t[F],t)}updateValue(t,e){this.getLView(t)[Ye].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let t=0;t<this.length;t++)this.getLView(t)[Ye].$index=t}getLView(t){return ek(this.lContainer,t)}};function Ai(n){let t=U(null),e=ti();try{let i=G(),r=i[F],o=i[e],s=e+1,a=$l(i,s);if(o.liveCollection===void 0){let l=sp(r,s);o.liveCollection=new op(a,i,l)}else o.liveCollection.reset();let c=o.liveCollection;if(QM(c,n,o.trackByFn,t),c.updateIndexes(),o.hasEmptyBlock){let l=ei(),d=c.length===0;if(rn(i,l,d)){let u=e+2,p=$l(i,u);if(d){let h=sp(r,u),m=hS(p,h,i),g=Ks(i,h,void 0,{dehydratedView:m});Ys(p,g,0,Oo(h,m))}else r.firstUpdatePass&&PT(p),uS(p,0)}}}finally{U(t)}}function $l(n,t){return n[t]}function ZM(n,t){if(n.length<=Ve)return;let e=Ve+t,i=n[e],r=i?i[Jt]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Dt];LN(o,r),si.delete(i[gn]),r.detachedLeaveAnimationFns=void 0}}function XM(n,t){if(n.length<=Ve)return;let e=Ve+t,i=n[e],r=i?i[Jt]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function JM(n,t){return Vs(n,t)}function ek(n,t){return dS(n,t)}function sp(n,t){return dl(n,t)}function ie(n,t,e){let i=G(),r=ei();if(rn(i,r,t)){let o=Ie(),s=fr();Qb(s,i,n,t,i[_e],e)}return ie}function ap(n,t,e,i,r){id(t,n,e,r?"class":"style",i)}function D(n,t,e,i){let r=G(),o=r[F],s=n+He,a=o.firstCreatePass?Hp(s,r,2,t,Op,pl(),e,i):o.data[s];if(Bn(a)){let c=r[Ln].tracingService;if(c&&c.componentCreate){let l=o.data[a.directiveStart+a.componentOffset];return c.componentCreate(gS(l),()=>(By(n,t,r,a,i),D))}}return By(n,t,r,a,i),D}function By(n,t,e,i,r){if(Pp(i,e,n,t,BS),Do(i)){let o=e[F];nd(o,e,i),mp(o,i,e)}r!=null&&qs(e,i)}function w(){let n=Ie(),t=Be(),e=Fp(t);return n.firstCreatePass&&zp(n,e),sh(e)&&ah(),rh(),e.classesWithoutHost!=null&&vI(e)&&ap(n,e,G(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&yI(e)&&ap(n,e,G(),e.stylesWithoutHost,!1),w}function fe(n,t,e,i){return D(n,t,e,i),w(),fe}function ke(n,t,e,i){let r=G(),o=r[F],s=n+He,a=o.firstCreatePass?oM(s,o,2,t,e,i):o.data[s];return Pp(a,r,n,t,BS),i!=null&&qs(r,a),ke}function Re(){let n=Be(),t=Fp(n);return sh(t)&&ah(),rh(),Re}function It(n,t,e,i){return ke(n,t,e,i),Re(),It}var BS=(n,t,e,i,r)=>(Ns(!0),wb(t[_e],i,mh()));function Nr(n,t,e){let i=G(),r=i[F],o=n+He,s=r.firstCreatePass?Hp(o,i,8,"ng-container",Op,pl(),t,e):r.data[o];if(Pp(s,i,n,"ng-container",tk),Do(s)){let a=i[F];nd(a,i,s),mp(a,s,i)}return e!=null&&qs(i,s),Nr}function Tr(){let n=Ie(),t=Be(),e=Fp(t);return n.firstCreatePass&&zp(n,e),Tr}function ct(n,t,e){return Nr(n,t,e),Tr(),ct}var tk=(n,t,e,i,r)=>(Ns(!0),lN(t[_e],""));function Dn(){return G()}function wn(n,t,e){let i=G(),r=ei();if(rn(i,r,t)){let o=Ie(),s=fr();Zb(s,i,n,t,i[_e],e)}return wn}var Zs="en-US";var nk=Zs;function jS(n){typeof n=="string"&&(nk=n.toLowerCase().replace(/_/g,"-"))}function X(n,t,e){let i=G(),r=Ie(),o=Be();return HS(r,i,i[_e],o,n,t,e),X}function sd(n,t,e){let i=G(),r=Ie(),o=Be();return(o.type&3||e)&&jp(o,r,i,e,i[_e],n,t,vr(o,i,t)),sd}function HS(n,t,e,i,r,o,s){let a=!0,c=null;if((i.type&3||s)&&(c??=vr(i,t,o),jp(i,n,t,s,e,r,o,c)&&(a=!1)),a){let l=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let u=0;u<d.length;u+=2){let p=d[u],h=d[u+1];c??=vr(i,t,o),Vl(i,t,p,h,r,c)}if(l&&l.length)for(let u of l)c??=vr(i,t,o),Vl(i,t,u,r,r,c)}}function W(n=1){return qv(n)}function ik(n,t){let e=null,i=_N(n);for(let r=0;r<t.length;r++){let o=t[r];if(o==="*"){e=r;continue}if(i===null?Nb(n,o,!0):bN(i,o))return r}return e}function ve(n){let t=G()[Rt][St];if(!t.projection){let e=n?n.length:1,i=t.projection=yv(e,null),r=i.slice(),o=t.child;for(;o!==null;){if(o.type!==128){let s=n?ik(o,n):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function O(n,t=0,e,i,r,o){let s=G(),a=Ie(),c=i?n+1:null;c!==null&&js(s,a,c,i,r,o,null,e);let l=Vo(a,He+n,16,null,e||null);l.projection===null&&(l.projection=t),dh();let u=!s[or]||oh();s[Rt][St].projection[l.projection]===null&&c!==null?rk(s,a,c):u&&!Wl(l)&&XN(a,s,l)}function rk(n,t,e){let i=He+e,r=t.data[i],o=n[i],s=Fl(o,r.tView.ssrId),a=Ks(n,r,void 0,{dehydratedView:s});Ys(o,a,0,Oo(r,s))}function Ot(n,t,e,i){return NS(n,t,e,i),Ot}function Ue(n,t,e){return IS(n,t,e),Ue}function k(n){let t=G(),e=Ie(),i=gl();Is(i+1);let r=$p(e,i);if(n.dirty&&Tv(t)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let o=MS(t,i);n.reset(o,rb),n.notifyOnChanges()}return!0}return!1}function R(){return Up(G(),gl())}function ad(n,t,e,i,r){return RS(t,NS(n,e,i,r)),ad}function cd(n,t,e,i){return RS(n,IS(t,e,i)),cd}function ld(n=1){Is(gl()+n)}function Gn(n){let t=Lv();return Nv(t,He+n)}function xl(n,t){return n<<17|t<<2}function Dr(n){return n>>17&32767}function ok(n){return(n&2)==2}function sk(n,t){return n&131071|t<<17}function cp(n){return n|2}function Fo(n){return(n&131068)>>2}function Ih(n,t){return n&-131069|t<<2}function ak(n){return(n&1)===1}function lp(n){return n|1}function ck(n,t,e,i,r,o){let s=o?t.classBindings:t.styleBindings,a=Dr(s),c=Fo(s);n[i]=e;let l=!1,d;if(Array.isArray(e)){let u=e;d=u[1],(d===null||go(u,d)>0)&&(l=!0)}else d=e;if(r)if(c!==0){let p=Dr(n[a+1]);n[i+1]=xl(p,a),p!==0&&(n[p+1]=Ih(n[p+1],i)),n[a+1]=sk(n[a+1],i)}else n[i+1]=xl(a,0),a!==0&&(n[a+1]=Ih(n[a+1],i)),a=i;else n[i+1]=xl(c,0),a===0?a=i:n[c+1]=Ih(n[c+1],i),c=i;l&&(n[i+1]=cp(n[i+1])),jy(n,d,i,!0),jy(n,d,i,!1),lk(t,d,n,i,o),s=xl(a,c),o?t.classBindings=s:t.styleBindings=s}function lk(n,t,e,i,r){let o=r?n.residualClasses:n.residualStyles;o!=null&&typeof t=="string"&&go(o,t)>=0&&(e[i+1]=lp(e[i+1]))}function jy(n,t,e,i){let r=n[e+1],o=t===null,s=i?Dr(r):Fo(r),a=!1;for(;s!==0&&(a===!1||o);){let c=n[s],l=n[s+1];dk(c,t)&&(a=!0,n[s+1]=i?lp(l):cp(l)),s=i?Dr(l):Fo(l)}a&&(n[e+1]=i?cp(r):lp(r))}function dk(n,t){return n===null||t==null||(Array.isArray(n)?n[1]:n)===t?!0:Array.isArray(n)&&typeof t=="string"?go(n,t)>=0:!1}var yn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function uk(n){return n.substring(yn.key,yn.keyEnd)}function fk(n){return hk(n),zS(n,US(n,0,yn.textEnd))}function zS(n,t){let e=yn.textEnd;return e===t?-1:(t=yn.keyEnd=pk(n,yn.key=t,e),US(n,t,e))}function hk(n){yn.key=0,yn.keyEnd=0,yn.value=0,yn.valueEnd=0,yn.textEnd=n.length}function US(n,t,e){for(;t<e&&n.charCodeAt(t)<=32;)t++;return t}function pk(n,t,e){for(;t<e&&n.charCodeAt(t)>32;)t++;return t}function z(n,t){return gk(n,t,null,!0),z}function qt(n){_k(wk,mk,n,!0)}function mk(n,t){for(let e=fk(t);e>=0;e=zS(t,e))al(n,uk(t),!0)}function gk(n,t,e,i){let r=G(),o=Ie(),s=fh(2);if(o.firstUpdatePass&&GS(o,n,s,i),t!==on&&rn(r,s,t)){let a=o.data[ti()];WS(o,a,r,r[_e],n,r[s+1]=Ek(t,e),i,s)}}function _k(n,t,e,i){let r=Ie(),o=fh(2);r.firstUpdatePass&&GS(r,null,o,i);let s=G();if(e!==on&&rn(s,o,e)){let a=r.data[ti()];if(qS(a,i)&&!$S(r,o)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(e=nl(c,e||"")),ap(r,a,s,e,i)}else Ck(r,a,s,s[_e],s[o+1],s[o+1]=Dk(n,t,e),i,o)}}function $S(n,t){return t>=n.expandoStartIndex}function GS(n,t,e,i){let r=n.data;if(r[e+1]===null){let o=r[ti()],s=$S(n,e);qS(o,i)&&t===null&&!s&&(t=!1),t=vk(r,o,t,i),ck(r,o,t,e,s,i)}}function vk(n,t,e,i){let r=Uv(n),o=i?t.residualClasses:t.residualStyles;if(r===null)(i?t.classBindings:t.styleBindings)===0&&(e=Nh(null,n,t,e,i),e=Hs(e,t.attrs,i),o=null);else{let s=t.directiveStylingLast;if(s===-1||n[s]!==r)if(e=Nh(r,n,t,e,i),o===null){let c=yk(n,t,i);c!==void 0&&Array.isArray(c)&&(c=Nh(null,n,t,c[1],i),c=Hs(c,t.attrs,i),bk(n,t,i,c))}else o=Sk(n,t,i)}return o!==void 0&&(i?t.residualClasses=o:t.residualStyles=o),e}function yk(n,t,e){let i=e?t.classBindings:t.styleBindings;if(Fo(i)!==0)return n[Dr(i)]}function bk(n,t,e,i){let r=e?t.classBindings:t.styleBindings;n[Dr(r)]=i}function Sk(n,t,e){let i,r=t.directiveEnd;for(let o=1+t.directiveStylingLast;o<r;o++){let s=n[o].hostAttrs;i=Hs(i,s,e)}return Hs(i,t.attrs,e)}function Nh(n,t,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=t[a],i=Hs(i,o.hostAttrs,r),o!==n);)a++;return n!==null&&(e.directiveStylingLast=a),i}function Hs(n,t,e){let i=e?1:2,r=-1;if(t!==null)for(let o=0;o<t.length;o++){let s=t[o];typeof s=="number"?r=s:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),al(n,s,e?!0:t[++o]))}return n===void 0?null:n}function Dk(n,t,e){if(e==null||e==="")return bt;let i=[],r=zn(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)n(i,r[o],!0);else if(r instanceof Set)for(let o of r)n(i,o,!0);else if(typeof r=="object")for(let o in r)Object.hasOwn(r,o)&&n(i,o,r[o]);else typeof r=="string"&&t(i,r);return i}function wk(n,t,e){let i=String(t);i!==""&&!i.includes(" ")&&al(n,i,e)}function Ck(n,t,e,i,r,o,s,a){r===on&&(r=bt);let c=0,l=0,d=0<r.length?r[0]:null,u=0<o.length?o[0]:null;for(;d!==null||u!==null;){let p=c<r.length?r[c+1]:void 0,h=l<o.length?o[l+1]:void 0,m=null,g;d===u?(c+=2,l+=2,p!==h&&(m=u,g=h)):u===null||d!==null&&d<u?(c+=2,m=d):(l+=2,m=u,g=h),m!==null&&WS(n,t,e,i,m,g,s,a),d=c<r.length?r[c]:null,u=l<o.length?o[l]:null}}function WS(n,t,e,i,r,o,s,a){if(!(t.type&3))return;let c=n.data,l=c[a+1],d=ak(l)?Hy(c,t,e,r,Fo(l),s):void 0;if(!Gl(d)){Gl(o)||ok(l)&&(o=Hy(c,null,e,r,a,s));let u=Jf(ti(),e);eT(i,s,u,r,o)}}function Hy(n,t,e,i,r,o){let s=t===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),d=l?c[1]:c,u=d===null,p=e[r+1];p===on&&(p=u?bt:void 0);let h=u?cl(p,i):d===i?p:void 0;if(l&&!Gl(h)&&(h=cl(c,i)),Gl(h)&&(a=h,s))return a;let m=n[r+1];r=s?Dr(m):Fo(m)}if(t!==null){let c=o?t.residualClasses:t.residualStyles;c!=null&&(a=cl(c,i))}return a}function Gl(n){return n!==void 0}function Ek(n,t){return n==null||n===""||(typeof t=="string"?n=zn(n)+t:typeof n=="object"&&(n=tl(zn(n)))),n}function qS(n,t){return(n.flags&(t?8:16))!==0}function pe(n,t=""){let e=G(),i=Ie(),r=n+He,o=i.firstCreatePass?Vo(i,r,1,t,null):i.data[r],s=xk(i,e,o,t);e[r]=s,yl()&&Tp(i,e,s,o),Co(o,!1)}var xk=(n,t,e,i)=>(Ns(!0),aN(t[_e],i));function Ik(n,t,e,i=""){return rn(n,ei(),e)?t+jf(e)+i:on}function Nt(n){return lt("",n),Nt}function lt(n,t,e){let i=G(),r=Ik(i,n,t,e);return r!==on&&Nk(i,ti(),r),lt}function Nk(n,t,e){let i=Jf(t,n);cN(n[_e],i,e)}function Oi(n,t,e){Dl(t)&&(t=t());let i=G(),r=ei();if(rn(i,r,t)){let o=Ie(),s=fr();Qb(s,i,n,t,i[_e],e)}return Oi}function Mr(n,t){let e=Dl(n);return e&&n.set(t),e}function Pi(n,t){let e=G(),i=Ie(),r=Be();return HS(i,e,e[_e],r,n,t),Pi}function zy(n,t,e){let i=Ie();i.firstCreatePass&&KS(t,i.data,i.blueprint,jn(n),e)}function KS(n,t,e,i,r){if(n=dt(n),Array.isArray(n))for(let o=0;o<n.length;o++)KS(n[o],t,e,i,r);else{let o=Ie(),s=G(),a=Be(),c=nr(n)?n:dt(n.provide),l=qf(n),d=a.providerIndexes&1048575,u=a.directiveStart,p=a.providerIndexes>>20;if(nr(n)||!n.multi){let h=new yr(l,r,Ce,null),m=Mh(c,t,r?d:d+p,u);m===-1?(Ah(Ol(a,s),o,c),Th(o,n,t.length),t.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(h),s.push(h)):(e[m]=h,s[m]=h)}else{let h=Mh(c,t,d+p,u),m=Mh(c,t,d,d+p),g=h>=0&&e[h],v=m>=0&&e[m];if(r&&!v||!r&&!g){Ah(Ol(a,s),o,c);let C=kk(r?Mk:Tk,e.length,r,i,l,n);!r&&v&&(e[m].providerFactory=C),Th(o,n,t.length,0),t.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(C),s.push(C)}else{let C=YS(e[r?m:h],l,!r&&i);Th(o,n,h>-1?h:m,C)}!r&&i&&v&&e[m].componentProviders++}}}function Th(n,t,e,i){let r=nr(t),o=Cv(t);if(r||o){let c=(o?dt(t.useClass):t).prototype.ngOnDestroy;if(c){let l=n.destroyHooks||(n.destroyHooks=[]);if(!r&&t.multi){let d=l.indexOf(e);d===-1?l.push(e,[i,c]):l[d+1].push(i,c)}else l.push(e,c)}}}function YS(n,t,e){return e&&n.componentProviders++,n.multi.push(t)-1}function Mh(n,t,e,i){for(let r=e;r<i;r++)if(t[r]===n)return r;return-1}function Tk(n,t,e,i,r){return dp(this.multi,[])}function Mk(n,t,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=As(i,i[F],this.providerFactory.index,r);s=c.slice(0,a),dp(o,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],dp(o,s);return s}function dp(n,t){for(let e=0;e<n.length;e++){let i=n[e];t.push(i())}return t}function kk(n,t,e,i,r,o){let s=new yr(n,e,Ce,null);return s.multi=[],s.index=t,s.componentProviders=0,YS(s,r,i&&!e),s}function ue(n,t){return e=>{e.providersResolver=(i,r)=>zy(i,r?r(n):n,!1),t&&(e.viewProvidersResolver=(i,r)=>zy(i,r?r(t):t,!0))}}function Jp(n,t,e,i){return Ak(G(),Vv(),n,t,e,i)}function Rk(n,t){let e=n[t];return e===on?void 0:e}function Ak(n,t,e,i,r,o,s){let a=t+e;return HT(n,a,r,o)?jT(n,a+2,s?i.call(s,r,o):i(r,o)):Rk(n,a+2)}function kr(n,t){return rd(n,t)}var QS=(()=>{class n{applicationErrorHandler=f(Ii);appRef=f(Sn);taskService=f(hr);ngZone=f(M);zonelessEnabled=f(Ts);tracing=f($n,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new J;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(vs):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(f(bh,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?Xv:_h;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(vs+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();function ZS(){return[{provide:Fn,useExisting:QS},{provide:M,useClass:ys},{provide:Ts,useValue:!0}]}function Ok(){return typeof $localize<"u"&&$localize.locale||Zs}var dd=new _("",{factory:()=>f(dd,{optional:!0,skipSelf:!0})||Ok()});function Kt(n,t){return rs(n,t?.equal)}function it(n){return M_(n)}var XS=class n extends Error{_brand;constructor(t){super(t)}static IDLE=new n("IDLE");static LOADING=new n("LOADING")};var oD=Symbol("InputSignalNode#UNSET"),Xk=he(I({},os),{transformFn:void 0,applyValueToInputSignal(n,t){no(n,t)}});function sD(n,t){let e=Object.create(Xk);e.value=n,e.transformFn=t?.transform;function i(){if(Wi(e),e.value===oD){let r=null;throw new S(-950,r)}return e.value}return i[tt]=e,i}var Wn=class{attributeName;constructor(t){this.attributeName=t}__NG_ELEMENT_ID__=()=>fp(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},aD=(()=>{let n=new _("");return n.__NG_ELEMENT_ID__=t=>{let e=Be();if(e===null)throw new S(-204,!1);if(e.type&2)return e.value;if(t&8)return null;throw new S(-204,!1)},n})();function JS(n,t){return sD(n,t)}function Jk(n){return sD(oD,n)}var cm=(JS.required=Jk,JS);function eD(n,t){return Gp(t)}function eR(n,t){return Wp(t)}var Js=(eD.required=eR,eD);function tD(n,t){return Gp(t)}function tR(n,t){return Wp(t)}var cD=(tD.required=tR,tD);var nR=1e4;var bq=nR-1e3;var tm=class{supports(t){return Bp(t)}create(t){return new nm(t)}},iR=(n,t)=>t,nm=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(t){this._trackByFn=t||iR}forEachItem(t){let e;for(e=this._itHead;e!==null;e=e._next)t(e)}forEachOperation(t){let e=this._itHead,i=this._removalsHead,r=0,o=null;for(;e||i;){let s=!i||e&&e.currentIndex<nD(i,r,o)?e:i,a=nD(s,r,o),c=s.currentIndex;if(s===i)r--,i=i._nextRemoved;else if(e=e._next,s.previousIndex==null)r++;else{o||(o=[]);let l=a-r,d=c-r;if(l!=d){for(let p=0;p<l;p++){let h=p<o.length?o[p]:o[p]=0,m=h+p;d<=m&&m<l&&(o[p]=h+1)}let u=s.previousIndex;o[u]=d-l}}a!==c&&t(s,a,c)}}forEachPreviousItem(t){let e;for(e=this._previousItHead;e!==null;e=e._nextPrevious)t(e)}forEachAddedItem(t){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)t(e)}forEachMovedItem(t){let e;for(e=this._movesHead;e!==null;e=e._nextMoved)t(e)}forEachRemovedItem(t){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)t(e)}forEachIdentityChange(t){let e;for(e=this._identityChangesHead;e!==null;e=e._nextIdentityChange)t(e)}diff(t){if(t==null&&(t=[]),!Bp(t))throw new S(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let e=this._itHead,i=!1,r,o,s;if(Array.isArray(t)){this.length=t.length;for(let a=0;a<this.length;a++)o=t[a],s=this._trackByFn(a,o),e===null||!Object.is(e.trackById,s)?(e=this._mismatch(e,o,s,a),i=!0):(i&&(e=this._verifyReinsertion(e,o,s,a)),Object.is(e.item,o)||this._addIdentityChange(e,o)),e=e._next}else r=0,_S(t,a=>{s=this._trackByFn(r,a),e===null||!Object.is(e.trackById,s)?(e=this._mismatch(e,a,s,r),i=!0):(i&&(e=this._verifyReinsertion(e,a,s,r)),Object.is(e.item,a)||this._addIdentityChange(e,a)),e=e._next,r++}),this.length=r;return this._truncate(e),this.collection=t,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;t!==null;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;t!==null;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;t!==null;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,e,i,r){let o;return t===null?o=this._itTail:(o=t._prev,this._remove(t)),t=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null),t!==null?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._reinsertAfter(t,o,r)):(t=this._linkedRecords===null?null:this._linkedRecords.get(i,r),t!==null?(Object.is(t.item,e)||this._addIdentityChange(t,e),this._moveAfter(t,o,r)):t=this._addAfter(new im(e,i),o,r)),t}_verifyReinsertion(t,e,i,r){let o=this._unlinkedRecords===null?null:this._unlinkedRecords.get(i,null);return o!==null?t=this._reinsertAfter(o,t._prev,r):t.currentIndex!=r&&(t.currentIndex=r,this._addToMoves(t,r)),t}_truncate(t){for(;t!==null;){let e=t._next;this._addToRemovals(this._unlink(t)),t=e}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,e,i){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(t);let r=t._prevRemoved,o=t._nextRemoved;return r===null?this._removalsHead=o:r._nextRemoved=o,o===null?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(t,e,i),this._addToMoves(t,i),t}_moveAfter(t,e,i){return this._unlink(t),this._insertAfter(t,e,i),this._addToMoves(t,i),t}_addAfter(t,e,i){return this._insertAfter(t,e,i),this._additionsTail===null?this._additionsTail=this._additionsHead=t:this._additionsTail=this._additionsTail._nextAdded=t,t}_insertAfter(t,e,i){let r=e===null?this._itHead:e._next;return t._next=r,t._prev=e,r===null?this._itTail=t:r._prev=t,e===null?this._itHead=t:e._next=t,this._linkedRecords===null&&(this._linkedRecords=new fd),this._linkedRecords.put(t),t.currentIndex=i,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){this._linkedRecords!==null&&this._linkedRecords.remove(t);let e=t._prev,i=t._next;return e===null?this._itHead=i:e._next=i,i===null?this._itTail=e:i._prev=e,t}_addToMoves(t,e){return t.previousIndex===e||(this._movesTail===null?this._movesTail=this._movesHead=t:this._movesTail=this._movesTail._nextMoved=t),t}_addToRemovals(t){return this._unlinkedRecords===null&&(this._unlinkedRecords=new fd),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,e){return t.item=e,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=t:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=t,t}},im=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(t,e){this.item=t,this.trackById=e}},rm=class{_head=null;_tail=null;add(t){this._head===null?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,e){let i;for(i=this._head;i!==null;i=i._nextDup)if((e===null||e<=i.currentIndex)&&Object.is(i.trackById,t))return i;return null}remove(t){let e=t._prevDup,i=t._nextDup;return e===null?this._head=i:e._nextDup=i,i===null?this._tail=e:i._prevDup=e,this._head===null}},fd=class{map=new Map;put(t){let e=t.trackById,i=this.map.get(e);i||(i=new rm,this.map.set(e,i)),i.add(t)}get(t,e){let i=t,r=this.map.get(i);return r?r.get(t,e):null}remove(t){let e=t.trackById;return this.map.get(e).remove(t)&&this.map.delete(e),t}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function nD(n,t,e){let i=n.previousIndex;if(i===null)return i;let r=0;return e&&i<e.length&&(r=e[i]),i+t+r}function iD(){return new Bo([new tm])}var Bo=(()=>{class n{factories;static \u0275prov=ne({token:n,providedIn:"root",factory:iD});constructor(e){this.factories=e}static create(e,i){if(i!=null){let r=i.factories.slice();e=e.concat(r)}return new n(e)}static extend(e){return{provide:n,useFactory:()=>{let i=f(n,{optional:!0,skipSelf:!0});return n.create(e,i||iD())}}}find(e){let i=this.factories.find(r=>r.supports(e));if(i!=null)return i;throw new S(901,!1)}}return n})();var Ee=(()=>{class n{static __NG_ELEMENT_ID__=rR}return n})();function rR(n){return oR(Be(),G(),(n&16)===16)}function oR(n,t,e){if(Bn(n)&&!e){let i=tn(n.index,t);return new ki(i,i)}else if(n.type&175){let i=t[Rt];return new ki(i,t)}return null}var om=new _(""),sR=new _("");function Xs(n){return!n.moduleRef}function aR(n){let t=Xs(n)?n.r3Injector:n.moduleRef.injector,e=t.get(M);return e.run(()=>{Xs(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=t.get(Ii),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Xs(n)){let o=()=>t.destroy(),s=n.platformInjector.get(om);s.add(o),t.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>n.moduleRef.destroy(),s=n.platformInjector.get(om);s.add(o),n.moduleRef.onDestroy(()=>{Rs(n.allPlatformModules,n.moduleRef),r.unsubscribe(),s.delete(o)})}return lR(i,e,()=>{let o=t.get(hr),s=o.add(),a=t.get(Kp);return a.runInitializers(),a.donePromise.then(()=>{let c=t.get(dd,Zs);if(jS(c||Zs),!t.get(sR,!0))return Xs(n)?t.get(Sn):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Xs(n)){let d=t.get(Sn);return n.rootComponent!==void 0&&d.bootstrap(n.rootComponent),d}else return cR?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>{o.remove(s)})})})}var cR;function lR(n,t,e){try{let i=e();return Ir(i)?i.catch(r=>{throw t.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw t.runOutsideAngular(()=>n(i)),i}}var ud=null;function dR(n=[],t){return ee.create({name:t,providers:[{provide:Cs,useValue:"platform"},{provide:om,useValue:new Set([()=>ud=null])},...n]})}function uR(n=[]){if(ud)return ud;let t=dR(n);return ud=t,VS(),fR(t),t}function fR(n){let t=n.get(bl,null);yo(n,()=>{t?.forEach(e=>e())})}function lD(n){let{rootComponent:t,appProviders:e,platformProviders:i,platformRef:r}=n;De(ge.BootstrapApplicationStart);try{let o=r?.injector??uR(i),s=[ZS(),ey,...e||[]],a=new Bs({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return aR({r3Injector:a.injector,platformInjector:o,rootComponent:t})}catch(o){return Promise.reject(o)}finally{De(ge.BootstrapApplicationEnd)}}function E(n){return typeof n=="boolean"?n:n!=null&&n!=="false"}function ht(n,t=NaN){return!isNaN(parseFloat(n))&&!isNaN(Number(n))?Number(n):t}var em=Symbol("NOT_SET"),dD=new Set,hR=he(I({},os),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:em,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(n){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==em&&!eo(this))return this.signal;try{for(let r of this.cleanup??dD)r()}finally{this.cleanup?.clear()}let t=[];n!==void 0&&t.push(n),t.push(this.registerCleanupFn);let e=gi(this),i;try{i=this.userFn.apply(null,t)}finally{qi(this,e)}return(this.value===em||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),sm=class extends Fs{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(t,e,i,r,o,s=null){super(t,[void 0,void 0,void 0,void 0],i,!1,o.get(kt),s),this.scheduler=r;for(let a of xp){let c=e[a];if(c===void 0)continue;let l=Object.create(hR);l.sequence=this,l.phase=a,l.userFn=c,l.dirty=!0,l.signal=()=>(Wi(l),l.value),l.signal[tt]=l,l.registerCleanupFn=d=>(l.cleanup??=new Set).add(d),this.nodes[a]=l,this.hooks[a]=d=>l.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();super.destroy();for(let t of this.nodes)if(t)try{for(let e of t.cleanup??dD)e()}finally{_i(t)}}};function lm(n,t){let e=t?.injector??f(ee),i=e.get(Fn),r=e.get(Zl),o=e.get($n,null,{optional:!0});r.impl??=e.get(Ip);let s=n;typeof s=="function"&&(s={mixedReadWrite:n});let a=e.get(xo,null,{optional:!0}),c=new sm(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}function hd(n,t){let e=Di(n),i=t.elementInjector||vo();return new Po(e).create(i,t.projectableNodes,t.hostElement,t.environmentInjector,t.directives,t.bindings)}var uD=null;function an(){return uD}function dm(n){uD??=n}var ea=class{},jo=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ne({token:n,factory:()=>f(fD),providedIn:"platform"})}return n})();var fD=(()=>{class n extends jo{_location;_history;_doc=f(A);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return an().getBaseHref(this._doc)}onPopState(e){let i=an().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=an().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ne({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function mD(n,t){return n?t?n.endsWith("/")?t.startsWith("/")?n+t.slice(1):n+t:t.startsWith("/")?n+t:`${n}/${t}`:n:t}function hD(n){let t=n.search(/#|\?|$/);return n[t-1]==="/"?n.slice(0,t-1)+n.slice(t):n}function Fi(n){return n&&n[0]!=="?"?`?${n}`:n}var pd=(()=>{class n{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ne({token:n,factory:()=>f(mR),providedIn:"root"})}return n})(),pR=new _(""),mR=(()=>{class n extends pd{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??f(A).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return mD(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Fi(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+Fi(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+Fi(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||n)(B(jo),B(pR,8))};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var md=(()=>{class n{_subject=new y;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=vR(hD(pD(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+Fi(i))}normalize(e){return n.stripTrailingSlash(_R(this._basePath,pD(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Fi(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Fi(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Fi;static joinWithSlash=mD;static stripTrailingSlash=hD;static \u0275fac=function(i){return new(i||n)(B(pd))};static \u0275prov=ne({token:n,factory:()=>gR(),providedIn:"root"})}return n})();function gR(){return new md(B(pd))}function _R(n,t){if(!n||!t.startsWith(n))return t;let e=t.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:t}function pD(n){return n.replace(/\/index\.html$/,"")}function vR(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}var ta=(()=>{class n{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=f(ee);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||n)(Ce(ze))};static \u0275dir=x({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Fe]})}return n})();function na(n,t){t=encodeURIComponent(t);for(let e of n.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()!==t)continue;let s=o;try{s=decodeURIComponent(o)}catch(a){}return s.length>1&&s[0]==='"'&&s[s.length-1]==='"'&&(s=s.slice(1,-1)),s}return null}var um="browser";function _D(n){return n===um}var ia=class{_doc;constructor(t){this._doc=t}manager},gd=(()=>{class n extends ia{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||n)(B(A))};static \u0275prov=ne({token:n,factory:n.\u0275fac})}return n})(),yd=new _(""),mm=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof gd));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof gd);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new S(-5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||n)(B(yd),B(M))};static \u0275prov=ne({token:n,factory:n.\u0275fac})}return n})(),fm="ng-app-id";function vD(n){for(let t of n)t.remove()}function yD(n,t){let e=t.createElement("style");return e.textContent=n,e}function SR(n,t,e,i){let r=n.head?.querySelectorAll(`style[${fm}="${t}"],link[${fm}="${t}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute(fm),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function pm(n,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}var gm=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,SR(e,i,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,yD);i?.forEach(r=>this.addUsage(r,this.external,pm))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(vD(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])vD(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,yD(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,pm(i,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let i of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of i.elements)o.parentNode===e?o.remove():r.push(o);i.elements=r}}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||n)(B(A),B(ni),B(Ti,8),B(pr))};static \u0275prov=ne({token:n,factory:n.\u0275fac})}return n})(),hm={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},_m=/%COMP%/g;var SD="%COMP%",DR=`_nghost-${SD}`,wR=`_ngcontent-${SD}`,CR=!0,ER=new _("",{factory:()=>CR}),xR=new _("");function IR(n){return wR.replace(_m,n)}function NR(n){return DR.replace(_m,n)}function DD(n,t){return t.map(e=>e.replace(_m,n))}var sa=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,i,r,o,s,a,c=null,l=null,d=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.cssVarNamespace=d??"",this.defaultRenderer=new ra(e,s,a,this.tracingService,this.cssVarNamespace)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof vd?r.applyToHost(e):r instanceof oa&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.tracingService;switch(i.encapsulation){case bn.Emulated:o=new vd(c,l,i,this.appId,d,s,a,u,this.cssVarNamespace);break;case bn.ShadowDom:return new _d(c,e,i,s,a,this.nonce,u,this.cssVarNamespace,l);case bn.ExperimentalIsolatedShadowDom:return new _d(c,e,i,s,a,this.nonce,u,this.cssVarNamespace);default:o=new oa(c,l,i,d,s,a,u,this.cssVarNamespace);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||n)(B(mm),B(xr),B(ni),B(ER),B(A),B(M),B(Ti),B($n,8),B(xR,8))};static \u0275prov=ne({token:n,factory:n.\u0275fac})}return n})(),ra=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,i,r,o=""){this.eventManager=t,this.doc=e,this.ngZone=i,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(hm[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(bD(t)?t.content:t).appendChild(e)}insertBefore(t,e,i){t&&(bD(t)?t.content:t).insertBefore(e,i)}removeChild(t,e){e.remove()}selectRootElement(t,e){let i=typeof t=="string"?this.doc.querySelector(t):t;if(!i)throw new S(-5104,!1);return e||(i.textContent=""),i}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,i,r){if(r){e=r+":"+e;let o=hm[r];o?t.setAttributeNS(o,e,i):t.setAttribute(e,i)}else t.setAttribute(e,i)}removeAttribute(t,e,i){if(i){let r=hm[i];r?t.removeAttributeNS(r,e):t.removeAttribute(`${i}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,i,r){let o=e.startsWith("--");o&&(e=e.replace("%NS%",this.cssVarNamespace)),o||r&(Un.DashCase|Un.Important)?t.style.setProperty(e,i,r&Un.Important?"important":""):t.style[e]=i}removeStyle(t,e,i){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||i&Un.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,i){t!=null&&(t[e]=i)}setValue(t,e){t.nodeValue=e}listen(t,e,i,r){if(typeof t=="string"&&(t=an().getGlobalEventTarget(this.doc,t),!t))throw new S(-5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(t,e,o)),this.eventManager.addEventListener(t,e,o,r)}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;t(e)===!1&&e.preventDefault()}}};function bD(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var _d=class extends ra{hostEl;sharedStylesHost;shadowRoot;constructor(t,e,i,r,o,s,a,c,l){super(t,r,o,a,c),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=i.styles;d=DD(i.id,d).map(p=>p.replace(/%NS%/g,c));for(let p of d){let h=document.createElement("style");s&&h.setAttribute("nonce",s),h.textContent=p,this.shadowRoot.appendChild(h)}let u=i.getExternalStyles?.();if(u)for(let p of u){let h=pm(p,r);s&&h.setAttribute("nonce",s),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,i){return super.insertBefore(this.nodeOrShadowRoot(t),e,i)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},oa=class extends ra{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,i,r,o,s,a,c,l){super(t,o,s,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=i.styles,u=l?DD(l,d):d;this.styles=u.map(p=>p.replace(/%NS%/g,c)),this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&si.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},vd=class extends oa{contentAttr;hostAttr;constructor(t,e,i,r,o,s,a,c,l){let d=r+"-"+i.id;super(t,e,i,o,s,a,c,l,d),this.contentAttr=IR(d),this.hostAttr=NR(d)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let i=super.createElement(t,e);return super.setAttribute(i,this.contentAttr,""),i}};var bd=class n extends ea{supportsDOMEvents=!0;static makeCurrent(){dm(new n)}onAndCancel(t,e,i,r){return t.addEventListener(e,i,r),()=>{t.removeEventListener(e,i,r)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=TR();return e==null?null:MR(e)}resetBaseElement(){aa=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return na(document.cookie,t)}},aa=null;function TR(){return aa=aa||document.head.querySelector("base"),aa?aa.getAttribute("href"):null}function MR(n){return new URL(n,document.baseURI).pathname}var wD=["alt","control","meta","shift"],kR={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},RR={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},CD=(()=>{class n extends ia{constructor(e){super(e)}supports(e){return n.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=n.parseEventName(i),a=n.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>an().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=n._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),wD.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),s+=l+".")}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(e,i){let r=kR[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),wD.forEach(s=>{if(s!==r){let a=RR[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{n.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||n)(B(A))};static \u0275prov=ne({token:n,factory:n.\u0275fac})}return n})();function vm(n,t,e){return kn(this,null,function*(){let i=I({rootComponent:n},AR(t,e));return lD(i)})}function AR(n,t){return{platformRef:t?.platformRef,appProviders:[...VR,...n?.providers??[]],platformProviders:LR}}function OR(){bd.makeCurrent()}function PR(){return new jt}function FR(){return pp(document),document}var LR=[{provide:pr,useValue:um},{provide:bl,useValue:OR,multi:!0},{provide:A,useFactory:FR}];var VR=[{provide:Cs,useValue:"root"},{provide:jt,useFactory:PR},{provide:yd,useClass:gd,multi:!0},{provide:yd,useClass:CD,multi:!0},sa,{provide:xr,useClass:gm},{provide:gm,useExisting:xr},mm,{provide:je,useExisting:sa},[]];var li=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init();for(let[e,i]of t.headers.entries())this.headers.set(e,i),this.normalizedNames.set(e,t.normalizedNames.get(e))}clone(t){let e=new n;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let i=t.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(t.name,e);let r=t.op==="a"?(this.headers.get(e)||[]).slice():[];r.push(...i),this.headers.set(e,r);break;case"d":let o=t.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=Array.isArray(o)?o:[o],a=this.headers.get(e);if(!a)return;a=a.filter(c=>s.indexOf(c)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(t,e){let i=t.toLowerCase();this.maybeSetNormalizedName(t,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(t,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=t.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var Dm=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}},wm=class{encodeKey(t){return ED(t)}encodeValue(t){return ED(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function BR(n,t){let e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,o)),t.decodeValue(r.slice(o+1))],c=e.get(s)||[];c.push(a),e.set(s,c)}),e}var jR=/%(\d[a-f0-9])/gi,HR={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ED(n){return encodeURIComponent(n).replace(jR,(t,e)=>HR[e]??t)}function Sd(n){return`${n}`}var ci=class n{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new wm,t.fromString){if(t.fromObject)throw new S(2805,!1);this.map=BR(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let i=t.fromObject[e],r=Array.isArray(i)?i.map(Sd):[Sd(i)];this.map.set(e,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(i=>{let r=t[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new n({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[t,e]of this.cloneFrom.map.entries())this.map.set(t,e);this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=t.op==="a"?(this.map.get(t.param)||[]).slice():[];e.push(Sd(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let i=(this.map.get(t.param)||[]).slice(),r=i.indexOf(Sd(t.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(t.param,i):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null}}};function zR(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function xD(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function ID(n){return typeof Blob<"u"&&n instanceof Blob}function ND(n){return typeof FormData<"u"&&n instanceof FormData}function UR(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var ym="Content-Type",TD="Accept",kD="text/plain",RD="application/json",$R=`${RD}, ${kD}, */*`,Ho=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(t,e,i,r){this.url=e,this.method=t.toUpperCase();let o;if(zR(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new S(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new li,this.context??=new Dm,!this.params)this.params=new ci,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e,c="",l=e.indexOf("#");l!==-1&&(c=e.substring(l),a=e.substring(0,l));let d=a.indexOf("?"),u=d===-1?"?":d<a.length-1?"&":"";this.urlWithParams=a+u+s+c}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||xD(this.body)||ID(this.body)||ND(this.body)||UR(this.body)?this.body:this.body instanceof ci?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ND(this.body)?null:ID(this.body)?this.body.type||null:xD(this.body)?null:typeof this.body=="string"?kD:this.body instanceof ci?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?RD:null}clone(t={}){let e=t.method||this.method,i=t.url||this.url,r=t.responseType||this.responseType,o=t.keepalive??this.keepalive,s=t.priority||this.priority,a=t.cache||this.cache,c=t.mode||this.mode,l=t.redirect||this.redirect,d=t.credentials||this.credentials,u=t.referrer??this.referrer,p=t.integrity||this.integrity,h=t.referrerPolicy||this.referrerPolicy,m=t.transferCache??this.transferCache,g=t.timeout??this.timeout,v=t.body!==void 0?t.body:this.body,C=t.withCredentials??this.withCredentials,Q=t.reportProgress??this.reportProgress,ye=t.reportUploadProgress??this.reportUploadProgress,Ne=t.reportDownloadProgress??this.reportDownloadProgress,ot=t.headers||this.headers,mt=t.params||this.params,Ge=t.context??this.context;return t.setHeaders!==void 0&&(ot=Object.keys(t.setHeaders).reduce((We,gt)=>We.set(gt,t.setHeaders[gt]),ot)),t.setParams&&(mt=Object.keys(t.setParams).reduce((We,gt)=>We.set(gt,t.setParams[gt]),mt)),new n(e,i,v,{params:mt,headers:ot,context:Ge,reportProgress:Q,reportUploadProgress:ye,reportDownloadProgress:Ne,responseType:r,withCredentials:C,transferCache:m,keepalive:o,cache:a,priority:s,timeout:g,mode:c,redirect:l,credentials:d,referrer:u,integrity:p,referrerPolicy:h})}},Ar=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Ar||{}),ca=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(t,e=200,i="OK"){this.headers=t.headers||new li,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||i,this.url=t.url||null,this.redirected=t.redirected,this.responseType=t.responseType,this.ok=this.status>=200&&this.status<300}},Cm=class n extends ca{constructor(t={}){super(t)}type=Ar.ResponseHeader;clone(t={}){return new n({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},la=class n extends ca{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=Ar.Response;clone(t={}){return new n({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0,redirected:t.redirected??this.redirected,responseType:t.responseType??this.responseType})}},Rr=class extends ca{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},GR=200;var WR=/^\)\]\}',?\n/,j9=1024*1024,qR=new _("",{factory:()=>null}),KR=(()=>{class n{fetchImpl=f(Em,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=f(M);destroyRef=f(kt);maxResponseSize=f(qR);handle(e){return new Y(i=>{let r=new AbortController,o=!1,s={next:c=>{c.type===Ar.Response&&(o=!0),i.next(c)},error:c=>{o=!0,i.error(c)},complete:()=>{o=!0,i.complete()}};this.doRequest(e,r.signal,s).then(xm,c=>s.error(new Rr({error:c})));let a;return e.timeout&&(a=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{a!==void 0&&clearTimeout(a),!o&&!r.signal.aborted&&r.abort()}})}doRequest(e,i,r){return kn(this,null,function*(){let o=this.createRequestInit(e),s;try{let v=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,I({signal:i},o)));YR(v),r.next({type:Ar.Sent}),s=yield v}catch(v){r.error(new Rr({error:v,status:v.status??0,statusText:v.statusText,url:e.urlWithParams,headers:v.headers}));return}let a=new li(s.headers),c=s.statusText,l=s.url||e.urlWithParams,d=s.status,u=null,p=e.reportProgress||e.reportDownloadProgress;if(p&&r.next(new Cm({headers:a,status:d,statusText:c,url:l})),s.body){let v=s.headers.get(ym)??"",C=s.headers.get("content-length"),Q=C!==null?Number(C):NaN;this.maxResponseSize!==null&&Number.isFinite(Q)&&Q>this.maxResponseSize&&MD(this.maxResponseSize);let ye=[],Ne=s.body.getReader(),ot=0,mt,Ge,We=typeof Zone<"u"&&Zone.current,gt=!1;if(yield this.ngZone.runOutsideAngular(()=>kn(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield Ne.cancel(),gt=!0;break}let{done:Xr,value:fn}=yield Ne.read();if(Xr)break;if(ye.push(fn),ot+=fn.length,this.maxResponseSize!==null&&ot>this.maxResponseSize&&(yield Ne.cancel(),MD(this.maxResponseSize)),p){Ge=e.responseType==="text"?(Ge??"")+(mt??=bm(v)).decode(fn,{stream:!0}):void 0;let Jr=()=>r.next({type:Ar.DownloadProgress,total:Number.isFinite(Q)?Q:void 0,loaded:ot,partialText:Ge});We?We.run(Jr):Jr()}}})),gt){r.complete();return}let pi=this.concatChunks(ye,ot);try{u=this.parseBody(e,pi,v,d)}catch(Xr){r.error(new Rr({error:Xr,headers:new li(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}d===0&&(d=u?GR:0);let h=d>=200&&d<300,m=s.redirected,g=s.type;h?(r.next(new la({body:u,headers:a,status:d,statusText:c,url:l,redirected:m,responseType:g})),r.complete()):r.error(new Rr({error:u,headers:a,status:d,statusText:c,url:l,redirected:m,responseType:g}))})}parseBody(e,i,r,o){switch(e.responseType){case"json":let s=bm(r).decode(i).replace(WR,"");if(s==="")return null;try{return JSON.parse(s)}catch(a){if(o<200||o>=300)return s;throw a}case"text":return bm(r).decode(i);case"blob":return new Blob([i],{type:r});case"arraybuffer":return i.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new S(2824,!1);let i={},r;if(r=e.credentials,e.withCredentials&&(r="include"),e.headers.forEach((o,s)=>i[o]=s.join(",")),e.headers.has(TD)||(i[TD]=$R),!e.headers.has(ym)){let o=e.detectContentTypeHeader();o!==null&&(i[ym]=o)}return{body:e.serializeBody(),method:e.method,headers:i,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,i){let r=new Uint8Array(i),o=0;for(let s of e)r.set(s,o),o+=s.length;return r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),Em=class{};function xm(){}function YR(n){n.then(xm,xm)}function MD(n){throw new S(-2825,!1)}var QR=/charset=\s*["']?([^;"'\s]+)["']?/i;function bm(n){let t=n.match(QR);if(t!==null)try{return new TextDecoder(t[1])}catch(e){}return new TextDecoder}var ZR=new _("",{factory:()=>!0}),XR="XSRF-TOKEN",JR=new _("",{factory:()=>XR}),eA="X-XSRF-TOKEN",tA=new _("",{factory:()=>eA}),nA=(()=>{class n{cookieName=f(JR);doc=f(A);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=na(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),iA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=ne({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=B(nA),r},providedIn:"root"})}return n})();function rA(n,t){if(!f(ZR)||n.method==="GET"||n.method==="HEAD")return t(n);try{let r=f(jo).href,{origin:o}=new URL(r),{origin:s}=new URL(n.url,o);if(o!==s)return t(n)}catch(r){return t(n)}let e=f(iA).getToken(),i=f(tA);return e!=null&&!n.headers.has(i)&&(n=n.clone({headers:n.headers.set(i,e)})),t(n)}function oA(n,t){return t(n)}function sA(n,t,e){return(i,r)=>yo(e,()=>t(i,o=>n(o,r)))}var aA=new _("",{factory:()=>[rA]}),AD=new _(""),cA=new _("",{factory:()=>!0});var lA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=ne({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=B(KR),r},providedIn:"root"})}return n})();var dA=(()=>{class n{backend;injector;chain=null;pendingTasks=f(wl);contributeToStability=f(cA);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let r=this.injector.get(OD,null,{skipSelf:!0}),o=r!==null&&this.backend===r,s=this.injector.get(AD,[],o?{self:!0}:void 0),a=Array.from(new Set([...this.injector.get(aA),...s]));this.chain=a.reduceRight((c,l)=>sA(c,l,this.injector),oA)}let i=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return it(()=>i(e,o=>this.backend.handle(o))).pipe(hs(r))}else return it(()=>i(e,r=>this.backend.handle(r)))}static \u0275fac=function(i){return new(i||n)(B(lA),B(Ke))};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),OD=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=ne({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=B(dA),r},providedIn:"root"})}return n})();function Sm(n,t){return I({body:t},n)}var Im=(()=>{class n{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof Ho)o=e;else{let c;r.headers instanceof li?c=r.headers:c=new li(r.headers);let l;r.params&&(r.params instanceof ci?l=r.params:l=new ci({fromObject:r.params})),o=new Ho(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=vt(o).pipe(gf(c=>this.handler.handle(c)));if(e instanceof Ho||r.observe==="events")return s;let a=s.pipe(qe(c=>c instanceof la));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(be(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new S(2806,!1);return c.body}));case"blob":return a.pipe(be(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new S(2807,!1);return c.body}));case"text":return a.pipe(be(c=>{if(c.body!==null&&typeof c.body!="string")throw new S(2808,!1);return c.body}));default:return a.pipe(be(c=>c.body))}case"response":return a;default:throw new S(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new ci().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,Sm(r,i))}post(e,i,r={}){return this.request("POST",e,Sm(r,i))}put(e,i,r={}){return this.request("PUT",e,Sm(r,i))}static \u0275fac=function(i){return new(i||n)(B(OD))};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var da=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=ne({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=B(fA),r},providedIn:"root"})}return n})(),fA=(()=>{class n extends da{_doc=f(A);sanitize(e,i){if(i==null)return null;switch(e){case at.NONE:return i;case at.HTML:return wr(i,"HTML")?zn(i):Sp(this._doc,String(i)).toString();case at.STYLE:return wr(i,"Style")?zn(i):i;case at.SCRIPT:if(wr(i,"Script"))return zn(i);throw new S(5200,!1);case at.URL:return wr(i,"URL")?zn(i):Kl(String(i));case at.RESOURCE_URL:if(wr(i,"ResourceURL"))return zn(i);throw new S(-5201,!1);default:throw new S(5202,!1)}}bypassSecurityTrustHtml(e){return gp(e)}bypassSecurityTrustStyle(e){return _p(e)}bypassSecurityTrustScript(e){return vp(e)}bypassSecurityTrustUrl(e){return yp(e)}bypassSecurityTrustResourceUrl(e){return bp(e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();function Or(n){return n.buttons===0||n.detail===0}function Pr(n){let t=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var Nm;function PD(){if(Nm==null){let n=typeof document<"u"?document.head:null;Nm=!!(n&&(n.createShadowRoot||n.attachShadow))}return Nm}function Fr(n){if(PD()){let t=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function $e(n){if(n.composedPath)try{return n.composedPath()[0]}catch(t){}return n.target}var Tm;try{Tm=typeof Intl<"u"&&Intl.v8BreakIterator}catch(n){Tm=!1}var Oe=(()=>{class n{_platformId=f(pr);isBrowser=this._platformId?_D(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Tm)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();var ua;function FD(){if(ua==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ua=!0}))}finally{ua=ua||!1}return ua}function zo(n){return FD()?n:!!n.capture}function Li(n,t=0){return LD(n)?Number(n):arguments.length===2?t:0}function LD(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function rt(n){return n instanceof T?n.nativeElement:n}var VD=new _("cdk-input-modality-detector-options"),BD={ignoreKeys:[18,17,224,91,16]},jD=650,Mm={passive:!0,capture:!0},HD=(()=>{class n{_platform=f(Oe);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Lt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=$e(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<jD||(this._modality.next(Or(e)?"keyboard":"mouse"),this._mostRecentTarget=$e(e))};_onTouchstart=e=>{if(Pr(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=$e(e)};constructor(){let e=f(M),i=f(A),r=f(VD,{optional:!0});if(this._options=I(I({},BD),r),this.modalityDetected=this._modality.pipe(Sf(1)),this.modalityChanged=this.modalityDetected.pipe(Gc()),this._platform.isBrowser){let o=f(je).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Mm),o.listen(i,"mousedown",this._onMousedown,Mm),o.listen(i,"touchstart",this._onTouchstart,Mm)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),fa=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(fa||{}),zD=new _("cdk-focus-monitor-default-options"),Dd=zo({passive:!0,capture:!0}),di=(()=>{class n{_ngZone=f(M);_platform=f(Oe);_inputModalityDetector=f(HD);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=f(A);_stopInputModalityDetector=new y;constructor(){let e=f(zD,{optional:!0});this._detectionMode=e?.detectionMode||fa.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=$e(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=rt(e);if(!this._platform.isBrowser||r.nodeType!==1)return vt();let o=Fr(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new y,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=rt(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=rt(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,c])=>this._originChanged(a,i,c)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===fa.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===fa.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?jD:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=$e(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Dd),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Dd)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ae(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Dd),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Dd),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();var wd=new WeakMap,Qe=(()=>{class n{_appRef;_injector=f(ee);_environmentInjector=f(Ke);load(e){let i=this._appRef=this._appRef||this._injector.get(Sn),r=wd.get(i);r||(r={loaders:new Set,refs:[]},wd.set(i,r),i.onDestroy(()=>{wd.get(i)?.refs.forEach(o=>o.destroy()),wd.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(hd(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();var Lr=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})(),Cd;function pA(){if(Cd===void 0&&(Cd=null,typeof window<"u")){let n=window;if(n.trustedTypes!==void 0)try{Cd=n.trustedTypes.createPolicy("angular#components",{createHTML:t=>t})}catch(t){console.error(t)}}return Cd}function Vr(n){return pA()?.createHTML(n)||n}function UD(n,t,e){let i=e.sanitize(at.HTML,t);n.innerHTML=Vr(i||"")}function ha(n){return Array.isArray(n)?n:[n]}var $D=new Set,Br,pa=(()=>{class n{_platform=f(Oe);_nonce=f(Ti,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):gA}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&mA(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();function mA(n,t){if(!$D.has(n))try{Br||(Br=document.createElement("style"),t&&Br.setAttribute("nonce",t),Br.setAttribute("type","text/css"),document.head.appendChild(Br)),Br.sheet&&(Br.sheet.insertRule(`@media ${n.replace(/[{}]/g,"")} {body{ }}`,0),$D.add(n))}catch(e){console.error(e)}}function gA(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var GD=new _("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),WD=new _("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),_A=0,km=(()=>{class n{_ngZone=f(M);_defaultOptions=f(WD,{optional:!0});_liveElement;_document=f(A);_sanitizer=f(da);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=f(GD,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let r=this._defaultOptions,o,s;return i.length===1&&typeof i[0]=="number"?s=i[0]:[o,s]=i,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),s==null&&r&&(s=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(a=>this._currentResolve=a)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:UD(this._liveElement,e,this._sanitizer),typeof s=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",i=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<i.length;o++)i[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${_A++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<i.length;r++){let o=i[r],s=o.getAttribute("aria-owns");s?s.indexOf(e)===-1&&o.setAttribute("aria-owns",s+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();var vA=200,Ed=class{_letterKeyStream=new y;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new y;selectedItem=this._selectedItem;constructor(t,e){let i=typeof e?.debounceInterval=="number"?e.debounceInterval:vA;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(t),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(t){this._selectedItemIndex=t}setItems(t){this._items=t}handleKey(t){let e=t.keyCode;t.key&&t.key.length===1?this._letterKeyStream.next(t.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(t){this._letterKeyStream.pipe(Zt(e=>this._pressedLetters.push(e)),_f(t),qe(()=>this._pressedLetters.length>0),be(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function cn(n,...t){return t.length?t.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Uo=class{_items;_activeItemIndex=Se(-1);_activeItem=Se(null);_wrap=!1;_typeaheadSubscription=J.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=t=>t.disabled;constructor(t,e){this._items=t,t instanceof ri?this._itemChangesSubscription=t.changes.subscribe(i=>this._itemsChanged(i.toArray())):_n(t)&&(this._effectRef=ii(()=>this._itemsChanged(t()),{injector:e}))}tabOut=new y;change=new y;skipPredicate(t){return this._skipPredicateFn=t,this}withWrap(t=!0){return this._wrap=t,this}withVerticalOrientation(t=!0){return this._vertical=t,this}withHorizontalOrientation(t){return this._horizontal=t,this}withAllowedModifierKeys(t){return this._allowedModifierKeys=t,this}withTypeAhead(t=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Ed(e,{debounceInterval:typeof t=="number"?t:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(t=!0){return this._homeAndEnd=t,this}withPageUpDown(t=!0,e=10){return this._pageUpAndDown={enabled:t,delta:e},this}setActiveItem(t){let e=this._activeItem();this.updateActiveItem(t),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(t){let e=t.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!t[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||cn(t,"shiftKey"))&&this._typeahead?.handleKey(t);return}this._typeahead?.reset(),t.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(t){let e=this._getItemsArray(),i=typeof t=="number"?t:e.indexOf(t),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(t){this._wrap?this._setActiveInWrapMode(t):this._setActiveInDefaultMode(t)}_setActiveInWrapMode(t){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+t*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(t){this._setActiveItemByIndex(this._activeItemIndex()+t,t)}_setActiveItemByIndex(t,e){let i=this._getItemsArray();if(i[t]){for(;this._skipPredicateFn(i[t]);)if(t+=e,!i[t])return;this.setActiveItem(t)}}_getItemsArray(){return _n(this._items)?this._items():this._items instanceof ri?this._items.toArray():this._items}_itemsChanged(t){this._typeahead?.setItems(t);let e=this._activeItem();if(e){let i=t.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var ma=class extends Uo{setActiveItem(t){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(t),this.activeItem&&this.activeItem.setActiveStyles()}};var ga=class extends Uo{_origin="program";setFocusOrigin(t){return this._origin=t,this}setActiveItem(t){super.setActiveItem(t),this.activeItem&&this.activeItem.focus(this._origin)}};var QD=new Map,et=class n{_appId=f(ni);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(t,e=!1){this._appId!=="ng"&&(t+=this._appId);let i=QD.get(t);return i===void 0?i=0:i++,QD.set(t,i),`${t}${e?n._infix+"-":""}${i}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})};var XD=" ";function yA(n,t,e){let i=Id(n,t);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),n.setAttribute(t,i.join(XD)))}function bA(n,t,e){let i=Id(n,t);e=e.trim();let r=i.filter(o=>o!==e);r.length?n.setAttribute(t,r.join(XD)):n.removeAttribute(t)}function Id(n,t){return n.getAttribute(t)?.match(/\S+/g)??[]}var JD="cdk-describedby-message",xd="cdk-describedby-host",Pm=0,Nd=(()=>{class n{_platform=f(Oe);_document=f(A);_messageRegistry=new Map;_messagesContainer=null;_id=`${Pm++}`;constructor(){f(Qe).load(Lr),this._id=f(ni)+"-"+Pm++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=Om(i,r);typeof i!="string"?(ZD(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=Om(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i=="string"){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${xd}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(xd);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement("div");ZD(r,this._id),r.textContent=e,i&&r.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Om(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=Id(e,"aria-describedby").filter(r=>r.indexOf(JD)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);yA(e,"aria-describedby",r.messageElement.id),e.setAttribute(xd,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,bA(e,"aria-describedby",r.messageElement.id),e.removeAttribute(xd)}_isElementDescribedByMessage(e,i){let r=Id(e,"aria-describedby"),o=this._messageRegistry.get(i),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;let r=i==null?"":`${i}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();function Om(n,t){return typeof n=="string"?`${t||""}/${n}`:n}function ZD(n,t){n.id||(n.id=`${JD}-${t}-${Pm++}`)}var SA=new _("cdk-dir-doc",{providedIn:"root",factory:()=>f(A)}),DA=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ew(n){let t=n?.toLowerCase()||"";return t==="auto"&&typeof navigator<"u"&&navigator?.language?DA.test(navigator.language)?"rtl":"ltr":t==="rtl"?"rtl":"ltr"}var pt=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Se("ltr");change=new P;constructor(){let e=f(SA,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ew(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();var jr;function tw(){if(jr==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return jr=!1,jr;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)jr=!0;else{let n=Element.prototype.scrollTo;n?jr=!/\{\s*\[native code\]\s*\}/.test(n.toString()):jr=!1}}return jr}var _a=class{};function va(n){return n&&typeof n.connect=="function"&&!(n instanceof ss)}var Cn=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(Cn||{}),Td=class{viewCacheSize=20;_viewCache=[];applyChanges(t,e,i,r,o){t.forEachOperation((s,a,c)=>{let l,d;if(s.previousIndex==null){let u=()=>i(s,a,c);l=this._insertView(u,c,e,r(s)),d=l?Cn.INSERTED:Cn.REPLACED}else c==null?(this._detachAndCacheView(a,e),d=Cn.REMOVED):(l=this._moveView(a,c,e,r(s)),d=Cn.MOVED);o&&o({context:l?.context,operation:d,record:s})})}detach(){for(let t of this._viewCache)t.destroy();this._viewCache=[]}_insertView(t,e,i,r){let o=this._insertViewFromCache(e,i);if(o){o.context.$implicit=r;return}let s=t();return i.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(t,e){let i=e.detach(t);this._maybeCacheView(i,e)}_moveView(t,e,i,r){let o=i.get(t);return i.move(o,e),o.context.$implicit=r,o}_maybeCacheView(t,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(t);else{let i=e.indexOf(t);i===-1?t.destroy():e.remove(i)}}_insertViewFromCache(t,e){let i=this._viewCache.pop();return i&&e.insert(i,t),i||null}};var Md=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ae({type:n});static \u0275inj=Te({})}return n})();var wA=20,Vi=(()=>{class n{_ngZone=f(M);_platform=f(Oe);_renderer=f(je).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new y;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=wA){return this._platform.isBrowser?new Y(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(uo(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):vt()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(qe(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&i.push(o)}),i}_targetContainsElement(e,i){let r=rt(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();var CA=20,Pt=(()=>{class n{_platform=f(Oe);_listeners;_viewportSize=null;_change=new y;_document=f(A);constructor(){let e=f(M),i=f(je).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=CA){return e>0?this._change.pipe(uo(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();var nw=new _("CDK_VIRTUAL_SCROLL_VIEWPORT");var kd=class{applyChanges(t,e,i,r,o){t.forEachOperation((s,a,c)=>{let l,d;if(s.previousIndex==null){let u=i(s,a,c);l=e.createEmbeddedView(u.templateRef,u.context,u.index),d=Cn.INSERTED}else c==null?(e.remove(a),d=Cn.REMOVED):(l=e.get(a),e.move(l,c),d=Cn.MOVED);o&&o({context:l?.context,operation:d,record:s})})}detach(){}};var xA=[[["caption"]],[["colgroup"],["col"]],"*"],IA=["caption","colgroup, col","*"];function NA(n,t){n&1&&O(0,2)}function TA(n,t){n&1&&(D(0,"thead",0),ct(1,1),w(),D(2,"tbody",0),ct(3,2)(4,3),w(),D(5,"tfoot",0),ct(6,4),w())}function MA(n,t){n&1&&ct(0,1)(1,2)(2,3)(3,4)}var En=new _("CDK_TABLE");var Od=(()=>{class n{template=f(ft);static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),Pd=(()=>{class n{template=f(ft);static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),ow=(()=>{class n{template=f(ft);static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),Bi=(()=>{class n{_table=f(En,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(i,r,o){if(i&1&&Ot(o,Od,5)(o,Pd,5)(o,ow,5),i&2){let s;k(s=R())&&(r.cell=s.first),k(s=R())&&(r.headerCell=s.first),k(s=R())&&(r.footerCell=s.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",E],stickyEnd:[2,"stickyEnd","stickyEnd",E]}})}return n})(),Ad=class{constructor(t,e){e.nativeElement.classList.add(...t._columnCssClassName)}},sw=(()=>{class n extends Ad{constructor(){super(f(Bi),f(T))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[ce]})}return n})();var aw=(()=>{class n extends Ad{constructor(){let e=f(Bi),i=f(T);super(e,i);let r=e._table?._getCellRole();r&&i.nativeElement.setAttribute("role",r)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[ce]})}return n})();var Lm=(()=>{class n{template=f(ft);_differs=f(Bo);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let i=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(i).create(),this._columnsDiffer.diff(i)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof ba?e.headerCell.template:this instanceof Vm?e.footerCell.template:e.cell.template}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,features:[Fe]})}return n})(),ba=(()=>{class n extends Lm{_table=f(En,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=x({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",E]},features:[ce,Fe]})}return n})(),Vm=(()=>{class n extends Lm{_table=f(En,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=x({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",E]},features:[ce,Fe]})}return n})(),Fd=(()=>{class n extends Lm{_table=f(En,{optional:!0});when;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=x({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[ce]})}return n})(),Hr=(()=>{class n{_viewContainer=f(ze);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),Bm=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&ct(0,0)},dependencies:[Hr],encapsulation:2,changeDetection:1})}return n})();var jm=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&ct(0,0)},dependencies:[Hr],encapsulation:2,changeDetection:1})}return n})(),cw=(()=>{class n{templateRef=f(ft);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),iw=["top","bottom","left","right"],Fm=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(t=>this._updateCachedSizes(t)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(t,e,i=!0,r=!0,o,s,a){this._isNativeHtmlTable=t,this._stickCellCss=e,this._isBrowser=i,this._needsPositionStickyOnElement=r,this.direction=o,this._positionListener=s,this._tableInjector=a,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(t,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(t);let i=[];for(let r of t)r.nodeType===r.ELEMENT_NODE&&i.push(r,...Array.from(r.children));Je({write:()=>{for(let r of i)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(t,e,i,r=!0,o=!0){if(!t.length||!this._isBrowser||!(e.some(v=>v)||i.some(v=>v))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let s=t[0],a=s.children.length,c=this.direction==="rtl",l=c?"right":"left",d=c?"left":"right",u=e.lastIndexOf(!0),p=i.indexOf(!0),h,m,g;o&&this._updateStickyColumnReplayQueue({rows:[...t],stickyStartStates:[...e],stickyEndStates:[...i]}),Je({earlyRead:()=>{h=this._getCellWidths(s,r),m=this._getStickyStartColumnPositions(h,e),g=this._getStickyEndColumnPositions(h,i)},write:()=>{for(let v of t)for(let C=0;C<a;C++){let Q=v.children[C];e[C]&&this._addStickyStyle(Q,l,m[C],C===u),i[C]&&this._addStickyStyle(Q,d,g[C],C===p)}this._positionListener&&h.some(v=>!!v)&&(this._positionListener.stickyColumnsUpdated({sizes:u===-1?[]:h.slice(0,u+1).map((v,C)=>e[C]?v:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:p===-1?[]:h.slice(p).map((v,C)=>i[C+p]?v:null).reverse()}))}},{injector:this._tableInjector})}stickRows(t,e,i){if(!this._isBrowser)return;let r=i==="bottom"?t.slice().reverse():t,o=i==="bottom"?e.slice().reverse():e,s=[],a=[],c=[];Je({earlyRead:()=>{for(let l=0,d=0;l<r.length;l++){if(!o[l])continue;s[l]=d;let u=r[l];c[l]=this._isNativeHtmlTable?Array.from(u.children):[u];let p=this._retrieveElementSize(u).height;d+=p,a[l]=p}},write:()=>{let l=o.lastIndexOf(!0);for(let d=0;d<r.length;d++){if(!o[d])continue;let u=s[d],p=d===l;for(let h of c[d])this._addStickyStyle(h,i,u,p)}i==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:a,offsets:s,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:a,offsets:s,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(t,e){this._isNativeHtmlTable&&Je({write:()=>{let i=t.querySelector("tfoot");i&&(e.some(r=>!r)?this._removeStickyStyle(i,["bottom"]):this._addStickyStyle(i,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(t,e){if(!t.classList.contains(this._stickCellCss))return;for(let r of e)t.style[r]="",t.classList.remove(this._borderCellCss[r]);iw.some(r=>e.indexOf(r)===-1&&t.style[r])?t.style.zIndex=this._getCalculatedZIndex(t):(t.style.zIndex="",this._needsPositionStickyOnElement&&(t.style.position=""),t.classList.remove(this._stickCellCss))}_addStickyStyle(t,e,i,r){t.classList.add(this._stickCellCss),r&&t.classList.add(this._borderCellCss[e]),t.style[e]=`${i}px`,t.style.zIndex=this._getCalculatedZIndex(t),this._needsPositionStickyOnElement&&(t.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(t){let e={top:100,bottom:10,left:1,right:1},i=0;for(let r of iw)t.style[r]&&(i+=e[r]);return i?`${i}`:""}_getCellWidths(t,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let i=[],r=t.children;for(let o=0;o<r.length;o++){let s=r[o];i.push(this._retrieveElementSize(s).width)}return this._cachedCellWidths=i,i}_getStickyStartColumnPositions(t,e){let i=[],r=0;for(let o=0;o<t.length;o++)e[o]&&(i[o]=r,r+=t[o]);return i}_getStickyEndColumnPositions(t,e){let i=[],r=0;for(let o=t.length;o>0;o--)e[o]&&(i[o]=r,r+=t[o]);return i}_retrieveElementSize(t){let e=this._elemSizeCache.get(t);if(e)return e;let i=t.getBoundingClientRect(),r={width:i.width,height:i.height};return this._resizeObserver&&(this._elemSizeCache.set(t,r),this._resizeObserver.observe(t,{box:"border-box"})),r}_updateStickyColumnReplayQueue(t){this._removeFromStickyColumnReplayQueue(t.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(t)}_removeFromStickyColumnReplayQueue(t){let e=new Set(t);for(let i of this._updatedStickyColumnsParamsToReplay)i.rows=i.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(i=>!!i.rows.length)}_updateCachedSizes(t){let e=!1;for(let i of t){let r=i.borderBoxSize?.length?{width:i.borderBoxSize[0].inlineSize,height:i.borderBoxSize[0].blockSize}:{width:i.contentRect.width,height:i.contentRect.height};r.width!==this._elemSizeCache.get(i.target)?.width&&kA(i.target)&&(e=!0),this._elemSizeCache.set(i.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let i of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(i.rows,i.stickyStartStates,i.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function kA(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(t=>n.classList.contains(t))}var ya=new _("STICKY_POSITIONING_LISTENER");var Hm=(()=>{class n{viewContainer=f(ze);elementRef=f(T);constructor(){let e=f(En);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","rowOutlet",""]]})}return n})(),zm=(()=>{class n{viewContainer=f(ze);elementRef=f(T);constructor(){let e=f(En);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),Um=(()=>{class n{viewContainer=f(ze);elementRef=f(T);constructor(){let e=f(En);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),$m=(()=>{class n{viewContainer=f(ze);elementRef=f(T);constructor(){let e=f(En);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),Gm=(()=>{class n{_differs=f(Bo);_changeDetectorRef=f(Ee);_elementRef=f(T);_dir=f(pt,{optional:!0});_platform=f(Oe);_viewRepeater;_viewportRuler=f(Pt);_injector=f(ee);_virtualScrollViewport=f(nw,{optional:!0,host:!0});_positionListener=f(ya,{optional:!0})||f(ya,{optional:!0,skipSelf:!0});_document=f(A);_data;_renderedRange;_onDestroy=new y;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new y;_footerRowStickyUpdates=new y;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new y;_dataStream=new y;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new P;viewChange=new Lt({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){f(new Wn("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((i,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(ae(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Td:new kd,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),va(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let i=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,i,(r,o,s)=>this._getEmbeddedViewArgs(r.item,s),r=>r.item.data,r=>{r.operation===Cn.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let o=i.get(r.currentIndex);o.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=rw(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let i=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,i,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=rw(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let i=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,i,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,i),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),i=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...i,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,s)=>{this._addStickyColumnStyles([o],this._headerRowDefs[s])}),this._rowDefs.forEach(o=>{let s=[];for(let a=0;a<i.length;a++)this._renderRows[a].rowDef===o&&s.push(i[a]);this._addStickyColumnStyles(s,o)}),r.forEach((o,s)=>{this._addStickyColumnStyles([o],this._footerRowDefs[s])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let i=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||i,this._forceRecalculateCellWidths=i,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],i=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<i;o++){let s=this._data[o],a=this._getRenderRowsForData(s,o,r.get(s));this._cachedRenderRowsMap.has(s)||this._cachedRenderRowsMap.set(s,new WeakMap);for(let c=0;c<a.length;c++){let l=a[c],d=this._cachedRenderRowsMap.get(l.data);d.has(l.rowDef)?d.get(l.rowDef).push(l):d.set(l.rowDef,[l]),e.push(l)}}return e}_getRenderRowsForData(e,i,r){return this._getRowDefs(e,i).map(s=>{let a=r&&r.has(s)?r.get(s):[];if(a.length){let c=a.shift();return c.dataIndex=i,c}else return{data:e,rowDef:s,dataIndex:i}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Rd(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(i=>{this._columnDefsByName.has(i.name),this._columnDefsByName.set(i.name,i)})}_cacheRowDefs(){this._headerRowDefs=Rd(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Rd(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Rd(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(i=>!i.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(s,a)=>{let c=!!a.getColumnsDiff();return s||c},i=this._rowDefs.reduce(e,!1);i&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),i||r||o}_switchDataSource(e){this._data=[],va(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;va(this.dataSource)?e=this.dataSource.connect(this):Bc(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=vt(this.dataSource)),this._renderChangeSubscription=ds([e,this.viewChange]).pipe(ae(this._onDestroy)).subscribe(([i,r])=>{this._data=i||[],this._renderedRange=r,this._dataStream.next(i),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,i)=>this._renderRow(this._headerRowOutlet,e,i)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,i)=>this._renderRow(this._footerRowOutlet,e,i)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,i){let r=Array.from(i?.columns||[]).map(a=>{let c=this._columnDefsByName.get(a);return c}),o=r.map(a=>a.sticky),s=r.map(a=>a.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,s,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let i=[];for(let r=0;r<e.viewContainer.length;r++){let o=e.viewContainer.get(r);i.push(o.rootNodes[0])}return i}_getRowDefs(e,i){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(o=>!o.when||o.when(i,e));else{let o=this._rowDefs.find(s=>s.when&&s.when(i,e))||this._defaultRowDef;o&&r.push(o)}return r.length,r}_getEmbeddedViewArgs(e,i){let r=e.rowDef,o={$implicit:e.data};return{templateRef:r.template,context:o,index:i}}_renderRow(e,i,r,o={}){let s=e.viewContainer.createEmbeddedView(i.template,o,r);return this._renderCellTemplateForItem(i,o),s}_renderCellTemplateForItem(e,i){for(let r of this._getCellTemplates(e))Hr.mostRecentCellOutlet&&Hr.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,i);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let i=0,r=e.length;i<r;i++){let s=e.get(i).context;s.count=r,s.first=i===0,s.last=i===r-1,s.even=i%2===0,s.odd=!s.even,this.multiTemplateDataRows?(s.dataIndex=this._renderRows[i].dataIndex,s.renderIndex=i):s.index=this._renderRows[i].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,i=>{let r=this._columnDefsByName.get(i);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(i,r)=>i||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",i=this._injector;this._stickyStyler=new Fm(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,i),(this._dir?this._dir.change:vt()).pipe(ae(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let i=typeof requestAnimationFrame<"u"?co:Sc;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(uo(0,i),ae(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,o)=>this._measureRangeSize(r,o)}),ds([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(ae(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let s=0;s<o.elements.length;s++){let a=o.elements[s];if(a){let c=o.offsets[s],l=r!==0?Math.max(r-c,c):-c;for(let d of a)d.style.top=`${-l}px`}}}),ds([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(ae(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let s=0;s<o.elements.length;s++){let a=o.elements[s];if(a)for(let c of a)c.style.bottom=`${r+o.offsets[s]}px`}})}_getOwnDefs(e){return e.filter(i=>!i._table||i._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let i=this._rowOutlet.viewContainer.length===0;if(i===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(i){let o=r.createEmbeddedView(e.templateRef),s=o.rootNodes[0];if(o.rootNodes.length===1&&s?.nodeType===this._document.ELEMENT_NODE){s.setAttribute("role","row"),s.classList.add(...e._contentClassNames);let a=s.querySelectorAll(e._cellSelector);for(let c=0;c<a.length;c++)a[c].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=i,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,i){if(e.start>=e.end||i!=="vertical")return 0;let r=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let s=e.start-r.start,a=e.end-e.start,c,l;for(let p=0;p<a;p++){let h=o.get(p+s);if(h&&h.rootNodes.length){c=l=h.rootNodes[0];break}}for(let p=a-1;p>-1;p--){let h=o.get(p+s);if(h&&h.rootNodes.length){l=h.rootNodes[h.rootNodes.length-1];break}}let d=c?.getBoundingClientRect?.(),u=l?.getBoundingClientRect?.();return d&&u?u.bottom-d.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(i,r,o){if(i&1&&Ot(o,cw,5)(o,Bi,5)(o,Fd,5)(o,ba,5)(o,Vm,5),i&2){let s;k(s=R())&&(r._noDataRow=s.first),k(s=R())&&(r._contentColumnDefs=s),k(s=R())&&(r._contentRowDefs=s),k(s=R())&&(r._contentHeaderRowDefs=s),k(s=R())&&(r._contentFooterRowDefs=s)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(i,r){i&2&&z("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",E],fixedLayout:[2,"fixedLayout","fixedLayout",E],recycleRows:[2,"recycleRows","recycleRows",E]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[ue([{provide:En,useExisting:n},{provide:ya,useValue:null}])],ngContentSelectors:IA,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(ve(xA),O(0),O(1,1),L(2,NA,1,0),L(3,TA,7,0)(4,MA,4,0)),i&2&&(b(2),V(r._isServer?2:-1),b(),V(r._isNativeHtmlTable?3:4))},dependencies:[zm,Hm,$m,Um],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return n})();function Rd(n,t){return n.concat(Array.from(t))}function rw(n,t){let e=t.toUpperCase(),i=n.viewContainer.element.nativeElement;for(;i;){let r=i.nodeType===1?i.nodeName:null;if(r===e)return i;if(r==="TABLE")break;i=i.parentNode}return null}var RA=new _("MATERIAL_ANIMATIONS"),lw=null;function AA(){return f(RA,{optional:!0})?.animationsDisabled||f(Ni,{optional:!0})==="NoopAnimations"?"di-disabled":(lw??=f(pa).matchMedia("(prefers-reduced-motion)").matches,lw?"reduced-motion":"enabled")}function Ze(){return AA()!=="enabled"}var xn=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var OA=["*",[["","matSortHeaderIcon",""]]],PA=["*","[matSortHeaderIcon]"];function FA(n,t){n&1&&(Et(),ke(0,"svg",3),It(1,"path",4),Re())}function LA(n,t){n&1&&(ke(0,"div",2),O(1,1,null,FA,2,0),Re())}var dw=new _("MAT_SORT_DEFAULT_OPTIONS"),Ld=(()=>{class n{_defaultOptions;_initializedStream=new Yn(1);sortables=new Map;_stateChanges=new y;active;start="asc";get direction(){return this._direction}set direction(e){this._direction=e}_direction="";disableClear;disabled=!1;sortChange=new P;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let i=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,r=VA(e.start||this.start,i),o=r.indexOf(this.direction)+1;return o>=r.length&&(o=0),r[o]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(i){return new(i||n)(Ce(dw,8))};static \u0275dir=x({type:n,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",E],disabled:[2,"matSortDisabled","disabled",E]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[Fe]})}return n})();function VA(n,t){let e=["asc","desc"];return n=="desc"&&e.reverse(),t||e.push(""),e}var uw=(()=>{class n{_sort=f(Ld,{optional:!0});_columnDef=f(Bi,{optional:!0});_changeDetectorRef=f(Ee);_focusMonitor=f(di);_elementRef=f(T);_ariaDescriber=f(Nd,{optional:!0});_renderChanges;_animationsDisabled=Ze();_recentlyCleared=Se(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription="Sort";disableClear;constructor(){f(Qe).load(xn);let e=f(dw,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=yt(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),i=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?i:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(i,r){i&1&&X("click",function(){return r._toggleOnInteraction()})("keydown",function(s){return r._handleKeydown(s)})("mouseleave",function(){return r._recentlyCleared.set(null)}),i&2&&(le("aria-sort",r._getAriaSortAttribute()),z("mat-sort-header-disabled",r._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",E],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",E]},exportAs:["matSortHeader"],ngContentSelectors:PA,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(i,r){i&1&&(ve(OA),ke(0,"div",0)(1,"div",1),O(2),Re(),L(3,LA,3,0,"div",2),Re()),i&2&&(z("mat-sort-header-sorted",r._isSorted())("mat-sort-header-position-before",r.arrowPosition==="before")("mat-sort-header-descending",r._sort.direction==="desc")("mat-sort-header-ascending",r._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",r._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",r._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",r._animationsDisabled),le("tabindex",r._isDisabled()?null:0)("role",r._isDisabled()?null:"button"),b(3),V(r._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})}return n})();var fw=(()=>{class n{changes=new y;static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();function Km(n){let t=n.cloneNode(!0),e=t.querySelectorAll("[id]"),i=n.nodeName.toLowerCase();t.removeAttribute("id");for(let r=0;r<e.length;r++)e[r].removeAttribute("id");return i==="canvas"?mw(n,t):(i==="input"||i==="select"||i==="textarea")&&pw(n,t),hw("canvas",n,t,mw),hw("input, textarea, select",n,t,pw),t}function hw(n,t,e,i){let r=t.querySelectorAll(n);if(r.length){let o=e.querySelectorAll(n);for(let s=0;s<r.length;s++)i(r[s],o[s])}}var BA=0;function pw(n,t){t.type!=="file"&&(t.value=n.value),t.type==="radio"&&t.name&&(t.name=`mat-clone-${t.name}-${BA++}`)}function mw(n,t){let e=t.getContext("2d");if(e)try{e.drawImage(n,0,0)}catch(i){}}function tg(n){let t=n.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height,x:t.x,y:t.y}}function Ym(n,t,e){let{top:i,bottom:r,left:o,right:s}=n;return e>=i&&e<=r&&t>=o&&t<=s}function jA(n,t){let e=t.left<n.left,i=t.left+t.width>n.right,r=t.top<n.top,o=t.top+t.height>n.bottom;return e||i||r||o}function wa(n,t,e){n.top+=t,n.bottom=n.top+n.height,n.left+=e,n.right=n.left+n.width}function gw(n,t,e,i){let{top:r,right:o,bottom:s,left:a,width:c,height:l}=n,d=c*t,u=l*t;return i>r-u&&i<s+u&&e>a-d&&e<o+d}var Vd=class{_document;positions=new Map;constructor(t){this._document=t}clear(){this.positions.clear()}cache(t){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),t.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:tg(e)})})}handleScroll(t){let e=$e(t),i=this.positions.get(e);if(!i)return null;let r=i.scrollPosition,o,s;if(e===this._document){let l=this.getViewportScrollPosition();o=l.top,s=l.left}else o=e.scrollTop,s=e.scrollLeft;let a=r.top-o,c=r.left-s;return this.positions.forEach((l,d)=>{l.clientRect&&e!==d&&e.contains(d)&&wa(l.clientRect,a,c)}),r.top=o,r.left=s,{top:a,left:c}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function Tw(n,t){let e=n.rootNodes;if(e.length===1&&e[0].nodeType===t.ELEMENT_NODE)return e[0];let i=t.createElement("div");return e.forEach(r=>i.appendChild(r)),i}function ng(n,t,e){for(let i in t)if(t.hasOwnProperty(i)){let r=t[i];r?n.setProperty(i,r,e?.has(i)?"important":""):n.removeProperty(i)}return n}function Go(n,t){let e=t?"":"none";ng(n.style,{"touch-action":t?"":"none","-webkit-user-drag":t?"":"none","-webkit-tap-highlight-color":t?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function _w(n,t,e){ng(n.style,{position:t?"":"fixed",top:t?"":"0",opacity:t?"":"0",left:t?"":"-999em"},e)}function Bd(n,t){return t&&t!="none"?n+" "+t:n}function vw(n,t){n.style.width=`${t.width}px`,n.style.height=`${t.height}px`,n.style.transform=Ca(t.left,t.top)}function Ca(n,t){return`translate3d(${Math.round(n)}px, ${Math.round(t)}px, 0)`}var Sa={capture:!0},Wm={passive:!1,capture:!0},HA=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(i,r){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    overflow: visible;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2})}return n})(),Hd=(()=>{class n{_ngZone=f(M);_document=f(A);_styleLoader=f(Qe);_renderer=f(je).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new y;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=Se([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new y;pointerUp=new y;registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,Wm)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,i){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(HA),this._activeDragInstances.update(r=>[...r,e]),this._activeDragInstances().length===1)){let r=i.type.startsWith("touch"),o=a=>this.pointerUp.next(a),s=[["scroll",a=>this._scroll.next(a),Sa],["selectstart",this._preventDefaultWhileDragging,Wm]];r?s.push(["touchend",o,Sa],["touchcancel",o,Sa]):s.push(["mouseup",o,Sa]),r||s.push(["mousemove",a=>this.pointerMove.next(a),Wm]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=s.map(([a,c,l])=>this._renderer.listen(this._document,a,c,l))})}}stopDragging(e){this._activeDragInstances.update(i=>{let r=i.indexOf(e);return r>-1?(i.splice(r,1),[...i]):i}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let i=[this._scroll];return e&&e!==this._document&&i.push(new Y(r=>this._ngZone.runOutsideAngular(()=>{let o=this._renderer.listen(e,"scroll",s=>{this._activeDragInstances().length&&r.next(s)},Sa);return()=>{o()}}))),yt(...i)}registerDirectiveNode(e,i){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,i)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();function yw(n){let t=n.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(n)*t}function zA(n){let t=getComputedStyle(n),e=qm(t,"transition-property"),i=e.find(a=>a==="transform"||a==="all");if(!i)return 0;let r=e.indexOf(i),o=qm(t,"transition-duration"),s=qm(t,"transition-delay");return yw(o[r])+yw(s[r])}function qm(n,t){return n.getPropertyValue(t).split(",").map(i=>i.trim())}var UA=new Set(["position"]),Qm=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(t,e,i,r,o,s,a,c,l,d){this._document=t,this._rootElement=e,this._direction=i,this._initialDomRect=r,this._previewTemplate=o,this._previewClass=s,this._pickupPositionOnPage=a,this._initialTransform=c,this._zIndex=l,this._renderer=d}attach(t){this._preview=this._createPreview(),t.appendChild(this._preview),bw(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(t){this._preview.style.transform=t}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(t){this._preview.classList.add(t)}getTransitionDuration(){return zA(this._preview)}addEventListener(t,e){return this._renderer.listen(this._preview,t,e)}_createPreview(){let t=this._previewTemplate,e=this._previewClass,i=t?t.template:null,r;if(i&&t){let o=t.matchSize?this._initialDomRect:null,s=t.viewContainer.createEmbeddedView(i,t.context);s.detectChanges(),r=Tw(s,this._document),this._previewEmbeddedView=s,t.matchSize?vw(r,o):r.style.transform=Ca(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else r=Km(this._rootElement),vw(r,this._initialDomRect),this._initialTransform&&(r.style.transform=this._initialTransform);return ng(r.style,{"pointer-events":"none",margin:bw(r)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},UA),Go(r,!1),r.classList.add("cdk-drag-preview"),r.setAttribute("popover","manual"),r.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(o=>r.classList.add(o)):r.classList.add(e)),r}};function bw(n){return"showPopover"in n}var $A={passive:!0},Sw={passive:!1},GA={passive:!1,capture:!0},WA=800,Dw="cdk-drag-placeholder",ww=new Set(["position"]);function qA(n,t,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let i=n.get(Pe,null,{optional:!0})||n.get(je).createRenderer(null,null);return new Zm(t,e,n.get(A),n.get(M),n.get(Pt),n.get(Hd),i)}var Zm=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=Se(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new y;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=J.EMPTY;_pointerUpSubscription=J.EMPTY;_scrollSubscription=J.EMPTY;_resizeSubscription=J.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(t){t!==this._disabled&&(this._disabled=t,this._toggleNativeDragInteractions(),this._handles.forEach(e=>Go(e,t)))}_disabled=!1;beforeStarted=new y;started=new y;released=new y;ended=new y;entered=new y;exited=new y;dropped=new y;moved=this._moveEvents;data;constrainPosition;constructor(t,e,i,r,o,s,a){this._config=e,this._document=i,this._ngZone=r,this._viewportRuler=o,this._dragDropRegistry=s,this._renderer=a,this.withRootElement(t).withParent(e.parentDragRef||null),this._parentPositions=new Vd(i),s.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(t){this._handles=t.map(i=>rt(i)),this._handles.forEach(i=>Go(i,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(i=>{this._handles.indexOf(i)>-1&&e.add(i)}),this._disabledHandles=e,this}withPreviewTemplate(t){return this._previewTemplate=t,this}withPlaceholderTemplate(t){return this._placeholderTemplate=t,this}withRootElement(t){let e=rt(t);if(e!==this._rootElement){this._removeRootElementListeners();let i=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[i.listen(e,"mousedown",this._pointerDown,Sw),i.listen(e,"touchstart",this._pointerDown,$A),i.listen(e,"dragstart",this._nativeDragStart,Sw)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(t){return this._boundaryElement=t?rt(t):null,this._resizeSubscription.unsubscribe(),t&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(t){return this._parentDragRef=t,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&jA(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let t=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),i=0,r=0;e.left<t.left?i=t.left-e.left:e.right>t.right&&(i=t.right-e.right),e.top<t.top?r=t.top-e.top:e.bottom>t.bottom&&(r=t.bottom-e.bottom);let o=this._activeTransform.x,s=this._activeTransform.y,a=o+i,c=s+r;this._rootElement.style.transform=Ca(a,c),this._activeTransform={x:a,y:c},this._passiveTransform={x:a,y:c}}}disableHandle(t){!this._disabledHandles.has(t)&&this._handles.indexOf(t)>-1&&(this._disabledHandles.add(t),Go(t,!0))}enableHandle(t){this._disabledHandles.has(t)&&(this._disabledHandles.delete(t),Go(t,this.disabled))}withDirection(t){return this._direction=t,this}_withDropContainer(t){this._dropContainer=t}getFreeDragPosition(){let t=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:t.x,y:t.y}}setFreeDragPosition(t){return this._activeTransform={x:0,y:0},this._passiveTransform.x=t.x,this._passiveTransform.y=t.y,this._dropContainer||this._applyRootElementTransform(t.x,t.y),this}withPreviewContainer(t){return this._previewContainer=t,this}_sortFromLastPointerPosition(){let t=this._lastKnownPointerPosition;t&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(t),t)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=t=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(t);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,t)}else this.disabled||this._initializeDragSequence(this._rootElement,t)};_pointerMove=t=>{let e=this._getPointerPositionOnPage(t);if(!this._hasStartedDragging()){let r=Math.abs(e.x-this._pickupPositionOnPage.x),o=Math.abs(e.y-this._pickupPositionOnPage.y);if(r+o>=this._config.dragStartThreshold){let a=Date.now()>=this._dragStartTime+this._getDragStartDelay(t),c=this._dropContainer;if(!a){this._endDragSequence(t);return}(!c||!c.isDragging()&&!c.isReceiving())&&(t.cancelable&&t.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(t)))}return}t.cancelable&&t.preventDefault();let i=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(i),this._dropContainer)this._updateActiveDropContainer(i,e);else{let r=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,o=this._activeTransform;o.x=i.x-r.x+this._passiveTransform.x,o.y=i.y-r.y+this._passiveTransform.y,this._applyRootElementTransform(o.x,o.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:i,event:t,distance:this._getDragDistance(i),delta:this._pointerDirectionDelta})})};_pointerUp=t=>{this._endDragSequence(t)};_endDragSequence(t){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:t}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(t),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(t);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:t})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(t){Da(t)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),i=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",KA,GA)}),i){let r=this._rootElement,o=r.parentNode,s=this._placeholder=this._createPlaceholderElement(),a=this._marker=this._marker||this._document.createComment("");o.insertBefore(a,r),this._initialTransform=r.style.transform||"",this._preview=new Qm(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(o,e)),_w(r,!1,ww),this._document.body.appendChild(o.replaceChild(s,r)),this.started.next({source:this,event:t}),i.start(),this._initialContainer=i,this._initialIndex=i.getItemIndex(this)}else this.started.next({source:this,event:t}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(i?i.getScrollableParents():[])}_initializeDragSequence(t,e){this._parentDragRef&&e.stopPropagation();let i=this.isDragging(),r=Da(e),o=!r&&e.button!==0,s=this._rootElement,a=$e(e),c=!r&&this._lastTouchEventTime&&this._lastTouchEventTime+WA>Date.now(),l=r?Pr(e):Or(e);if(a&&a.draggable&&e.type==="mousedown"&&e.preventDefault(),i||o||c||l)return;if(this._handles.length){let p=s.style;this._rootElementTapHighlight=p.webkitTapHighlightColor||"",p.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(p=>this._updateOnScroll(p)),this._boundaryElement&&(this._boundaryRect=tg(this._boundaryElement));let d=this._previewTemplate;this._pickupPositionInElement=d&&d.template&&!d.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,t,e);let u=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:u.x,y:u.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(t){_w(this._rootElement,!0,ww),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,i=e.getItemIndex(this),r=this._getPointerPositionOnPage(t),o=this._getDragDistance(r),s=e._isOverContainer(r.x,r.y);this.ended.next({source:this,distance:o,dropPoint:r,event:t}),this.dropped.next({item:this,currentIndex:i,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:s,distance:o,dropPoint:r,event:t}),e.drop(this,i,this._initialIndex,this._initialContainer,s,o,r,t),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:t,y:e},{x:i,y:r}){let o=this._initialContainer._getSiblingContainerFromPosition(this,t,e);!o&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(t,e)&&(o=this._initialContainer),o&&o!==this._dropContainer&&this._ngZone.run(()=>{let s=this._dropContainer.getItemIndex(this),a=this._dropContainer.getItemAtIndex(s+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(o,this._dropContainer,a),this._dropContainer=o,this._dropContainer.enter(this,t,e,o===this._initialContainer&&o.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:o,currentIndex:o.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(i,r),this._dropContainer._sortItem(this,t,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(t,e):this._applyPreviewTransform(t-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let t=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(t.left,t.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(i=>{let r=a=>{(!a||this._preview&&$e(a)===this._preview.element&&a.propertyName==="transform")&&(s(),i(),clearTimeout(o))},o=setTimeout(r,e*1.5),s=this._preview.addEventListener("transitionend",r)}))}_createPlaceholderElement(){let t=this._placeholderTemplate,e=t?t.template:null,i;return e?(this._placeholderRef=t.viewContainer.createEmbeddedView(e,t.context),this._placeholderRef.detectChanges(),i=Tw(this._placeholderRef,this._document)):i=Km(this._rootElement),i.style.pointerEvents="none",i.classList.add(Dw),i}_getPointerPositionInElement(t,e,i){let r=e===this._rootElement?null:e,o=r?r.getBoundingClientRect():t,s=Da(i)?i.targetTouches[0]:i,a=this._getViewportScrollPosition(),c=s.pageX-o.left-a.left,l=s.pageY-o.top-a.top;return{x:o.left-t.left+c,y:o.top-t.top+l}}_getPointerPositionOnPage(t){let e=this._getViewportScrollPosition(),i=Da(t)?t.touches[0]||t.changedTouches[0]||{pageX:0,pageY:0}:t,r=i.pageX-e.left,o=i.pageY-e.top;if(this._ownerSVGElement){let s=this._ownerSVGElement.getScreenCTM();if(s){let a=this._ownerSVGElement.createSVGPoint();return a.x=r,a.y=o,a.matrixTransform(s.inverse())}}return{x:r,y:o}}_getConstrainedPointerPosition(t){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:i,y:r}=this.constrainPosition?this.constrainPosition(t,this,this._initialDomRect,this._pickupPositionInElement):t;if(this.lockAxis==="x"||e==="x"?r=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(i=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:o,y:s}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,a=this._boundaryRect,{width:c,height:l}=this._getPreviewRect(),d=a.top+s,u=a.bottom-(l-s),p=a.left+o,h=a.right-(c-o);i=Cw(i,p,h),r=Cw(r,d,u)}return{x:i,y:r}}_updatePointerDirectionDelta(t){let{x:e,y:i}=t,r=this._pointerDirectionDelta,o=this._pointerPositionAtLastDirectionChange,s=Math.abs(e-o.x),a=Math.abs(i-o.y);return s>this._config.pointerDirectionChangeThreshold&&(r.x=e>o.x?1:-1,o.x=e),a>this._config.pointerDirectionChangeThreshold&&(r.y=i>o.y?1:-1,o.y=i),r}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let t=this._handles.length>0||!this.isDragging();t!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=t,Go(this._rootElement,t))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(t=>t()),this._rootElementCleanups=void 0}_applyRootElementTransform(t,e){let i=1/this.scale,r=Ca(t*i,e*i),o=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=o.transform&&o.transform!="none"?o.transform:""),o.transform=Bd(r,this._initialTransform)}_applyPreviewTransform(t,e){let i=this._previewTemplate?.template?void 0:this._initialTransform,r=Ca(t,e);this._preview.setTransform(Bd(r,i))}_getDragDistance(t){let e=this._pickupPositionOnPage;return e?{x:t.x-e.x,y:t.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:t,y:e}=this._passiveTransform;if(t===0&&e===0||this.isDragging()||!this._boundaryElement)return;let i=this._rootElement.getBoundingClientRect(),r=this._boundaryElement.getBoundingClientRect();if(r.width===0&&r.height===0||i.width===0&&i.height===0)return;let o=r.left-i.left,s=i.right-r.right,a=r.top-i.top,c=i.bottom-r.bottom;r.width>i.width?(o>0&&(t+=o),s>0&&(t-=s)):t=0,r.height>i.height?(a>0&&(e+=a),c>0&&(e-=c)):e=0,(t!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:t})}_getDragStartDelay(t){let e=this.dragStartDelay;return typeof e=="number"?e:Da(t)?e.touch:e?e.mouse:0}_updateOnScroll(t){let e=this._parentPositions.handleScroll(t);if(e){let i=$e(t);this._boundaryRect&&i!==this._boundaryElement&&i.contains(this._boundaryElement)&&wa(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=Fr(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(t,e){let i=this._previewContainer||"global";if(i==="parent")return t;if(i==="global"){let r=this._document;return e||r.fullscreenElement||r.webkitFullscreenElement||r.mozFullScreenElement||r.msFullscreenElement||r.body}return rt(i)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=t=>{if(this._handles.length){let e=this._getTargetHandle(t);e&&!this._disabledHandles.has(e)&&!this.disabled&&t.preventDefault()}else this.disabled||t.preventDefault()};_getTargetHandle(t){return this._handles.find(e=>t.target&&(t.target===e||e.contains(t.target)))}_conditionallyInsertAnchor(t,e,i){if(t===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let r=this._anchor??=Km(this._placeholder);r.classList.remove(Dw),r.classList.add("cdk-drag-anchor"),r.style.transform="",i?i.before(r):rt(e.element).appendChild(r)}}};function Cw(n,t,e){return Math.max(t,Math.min(e,n))}function Da(n){return n.type[0]==="t"}function KA(n){n.preventDefault()}function Ea(n,t,e){let i=Ew(t,n.length-1),r=Ew(e,n.length-1);if(i===r)return;let o=n[i],s=r<i?-1:1;for(let a=i;a!==r;a+=s)n[a]=n[a+s];n[r]=o}function Ew(n,t){return Math.max(0,Math.min(t,n))}var jd=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(t){this._dragDropRegistry=t}_previousSwap={drag:null,delta:0,overlaps:!1};start(t){this.withItems(t)}sort(t,e,i,r){let o=this._itemPositions,s=this._getItemIndexFromPointerPosition(t,e,i,r);if(s===-1&&o.length>0)return null;let a=this.orientation==="horizontal",c=o.findIndex(v=>v.drag===t),l=o[s],d=o[c].clientRect,u=l.clientRect,p=c>s?1:-1,h=this._getItemOffsetPx(d,u,p),m=this._getSiblingOffsetPx(c,o,p),g=o.slice();return Ea(o,c,s),o.forEach((v,C)=>{if(g[C]===v)return;let Q=v.drag===t,ye=Q?h:m,Ne=Q?t.getPlaceholderElement():v.drag.getRootElement();v.offset+=ye;let ot=Math.round(v.offset*(1/v.drag.scale));a?(Ne.style.transform=Bd(`translate3d(${ot}px, 0, 0)`,v.initialTransform),wa(v.clientRect,0,ye)):(Ne.style.transform=Bd(`translate3d(0, ${ot}px, 0)`,v.initialTransform),wa(v.clientRect,ye,0))}),this._previousSwap.overlaps=Ym(u,e,i),this._previousSwap.drag=l.drag,this._previousSwap.delta=a?r.x:r.y,{previousIndex:c,currentIndex:s}}enter(t,e,i,r){let o=this._activeDraggables,s=o.indexOf(t),a=t.getPlaceholderElement();s>-1&&o.splice(s,1);let c=r==null||r<0?this._getItemIndexFromPointerPosition(t,e,i):r,l=o[c];if(l===t&&(l=o[c+1]),!l&&(c==null||c===-1||c<o.length-1)&&this._shouldEnterAsFirstChild(e,i)&&(l=o[0]),l&&!this._dragDropRegistry.isDragging(l)){let d=l.getRootElement();d.parentElement.insertBefore(a,d),o.splice(c,0,t)}else this._element.appendChild(a),o.push(t);a.style.transform="",this._cacheItemPositions()}withItems(t){this._activeDraggables=t.slice(),this._cacheItemPositions()}withSortPredicate(t){this._sortPredicate=t}reset(){this._activeDraggables?.forEach(t=>{let e=t.getRootElement();if(e){let i=this._itemPositions.find(r=>r.drag===t)?.initialTransform;e.style.transform=i||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(t){return this._getVisualItemPositions().findIndex(e=>e.drag===t)}getItemAtIndex(t){return this._getVisualItemPositions()[t]?.drag||null}updateOnScroll(t,e){this._itemPositions.forEach(({clientRect:i})=>{wa(i,t,e)}),this._itemPositions.forEach(({drag:i})=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}withElementContainer(t){this._element=t}_cacheItemPositions(){let t=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let i=e.getVisibleElement();return{drag:e,offset:0,initialTransform:i.style.transform||"",clientRect:tg(i)}}).sort((e,i)=>t?e.clientRect.left-i.clientRect.left:e.clientRect.top-i.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(t,e,i){let r=this.orientation==="horizontal",o=r?e.left-t.left:e.top-t.top;return i===-1&&(o+=r?e.width-t.width:e.height-t.height),o}_getSiblingOffsetPx(t,e,i){let r=this.orientation==="horizontal",o=e[t].clientRect,s=e[t+i*-1],a=o[r?"width":"height"]*i;if(s){let c=r?"left":"top",l=r?"right":"bottom";i===-1?a-=s.clientRect[c]-o[l]:a+=o[c]-s.clientRect[l]}return a}_shouldEnterAsFirstChild(t,e){if(!this._activeDraggables.length)return!1;let i=this._itemPositions,r=this.orientation==="horizontal";if(i[0].drag!==this._activeDraggables[0]){let s=i[i.length-1].clientRect;return r?t>=s.right:e>=s.bottom}else{let s=i[0].clientRect;return r?t<=s.left:e<=s.top}}_getItemIndexFromPointerPosition(t,e,i,r){let o=this.orientation==="horizontal",s=this._itemPositions.findIndex(({drag:a,clientRect:c})=>{if(a===t)return!1;if(r){let l=o?r.x:r.y;if(a===this._previousSwap.drag&&this._previousSwap.overlaps&&l===this._previousSwap.delta)return!1}return o?e>=Math.floor(c.left)&&e<Math.floor(c.right):i>=Math.floor(c.top)&&i<Math.floor(c.bottom)});return s===-1||!this._sortPredicate(s,t)?-1:s}},Xm=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(t,e){this._document=t,this._dragDropRegistry=e}start(t){let e=this._element.childNodes;this._relatedNodes=[];for(let i=0;i<e.length;i++){let r=e[i];this._relatedNodes.push([r,r.nextSibling])}this.withItems(t)}sort(t,e,i,r){let o=this._getItemIndexFromPointerPosition(t,e,i),s=this._previousSwap;if(o===-1||this._activeItems[o]===t)return null;let a=this._activeItems[o];if(s.drag===a&&s.overlaps&&s.deltaX===r.x&&s.deltaY===r.y)return null;let c=this.getItemIndex(t),l=t.getPlaceholderElement(),d=a.getRootElement();o>c?d.after(l):d.before(l),Ea(this._activeItems,c,o);let u=this._getRootNode().elementFromPoint(e,i);return s.deltaX=r.x,s.deltaY=r.y,s.drag=a,s.overlaps=d===u||d.contains(u),{previousIndex:c,currentIndex:o}}enter(t,e,i,r){let o=this._activeItems.indexOf(t);o>-1&&this._activeItems.splice(o,1);let s=r==null||r<0?this._getItemIndexFromPointerPosition(t,e,i):r;s===-1&&(s=this._getClosestItemIndexToPointer(t,e,i));let a=this._activeItems[s];a&&!this._dragDropRegistry.isDragging(a)?(this._activeItems.splice(s,0,t),a.getRootElement().before(t.getPlaceholderElement())):(this._activeItems.push(t),this._element.appendChild(t.getPlaceholderElement()))}withItems(t){this._activeItems=t.slice()}withSortPredicate(t){this._sortPredicate=t}reset(){let t=this._element,e=this._previousSwap;for(let i=this._relatedNodes.length-1;i>-1;i--){let[r,o]=this._relatedNodes[i];r.parentNode===t&&r.nextSibling!==o&&(o===null?t.appendChild(r):o.parentNode===t&&t.insertBefore(r,o))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(t){return this._activeItems.indexOf(t)}getItemAtIndex(t){return this._activeItems[t]||null}updateOnScroll(){this._activeItems.forEach(t=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()})}withElementContainer(t){t!==this._element&&(this._element=t,this._rootNode=void 0)}_getItemIndexFromPointerPosition(t,e,i){let r=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(i)),o=r?this._activeItems.findIndex(s=>{let a=s.getRootElement();return r===a||a.contains(r)}):-1;return o===-1||!this._sortPredicate(o,t)?-1:o}_getRootNode(){return this._rootNode||(this._rootNode=Fr(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(t,e,i){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let r=1/0,o=-1;for(let s=0;s<this._activeItems.length;s++){let a=this._activeItems[s];if(a!==t){let{x:c,y:l}=a.getRootElement().getBoundingClientRect(),d=Math.hypot(e-c,i-l);d<r&&(r=d,o=s)}}return o}},xw=.05,Mw=.05,ln=(function(n){return n[n.NONE=0]="NONE",n[n.UP=1]="UP",n[n.DOWN=2]="DOWN",n})(ln||{}),Ft=(function(n){return n[n.NONE=0]="NONE",n[n.LEFT=1]="LEFT",n[n.RIGHT=2]="RIGHT",n})(Ft||{});function YA(n,t){return new Jm(t,n.get(Hd),n.get(A),n.get(M),n.get(Pt))}var Jm=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new y;entered=new y;exited=new y;dropped=new y;sorted=new y;receivingStarted=new y;receivingStopped=new y;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=J.EMPTY;_verticalScrollDirection=ln.NONE;_horizontalScrollDirection=Ft.NONE;_scrollNode;_stopScrollTimers=new y;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(t,e,i,r,o){this._dragDropRegistry=e,this._ngZone=r,this._viewportRuler=o;let s=this.element=rt(t);this._document=i,this.withOrientation("vertical").withElementContainer(s),e.registerDropContainer(this),this._parentPositions=new Vd(i)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(t,e,i,r){this._draggingStarted(),r==null&&this.sortingDisabled&&(r=this._draggables.indexOf(t)),this._sortStrategy.enter(t,e,i,r),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:t,container:this,currentIndex:this.getItemIndex(t)})}exit(t){this._reset(),this.exited.next({item:t,container:this})}drop(t,e,i,r,o,s,a,c){this._reset(),this.dropped.next({item:t,currentIndex:e,previousIndex:i,container:this,previousContainer:r,isPointerOverContainer:o,distance:s,dropPoint:a,event:c})}withItems(t){let e=this._draggables;return this._draggables=t,t.forEach(i=>i._withDropContainer(this)),this.isDragging()&&(e.filter(r=>r.isDragging()).every(r=>t.indexOf(r)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(t){return this._direction=t,this._sortStrategy instanceof jd&&(this._sortStrategy.direction=t),this}connectedTo(t){return this._siblings=t.slice(),this}withOrientation(t){if(t==="mixed")this._sortStrategy=new Xm(this._document,this._dragDropRegistry);else{let e=new jd(this._dragDropRegistry);e.direction=this._direction,e.orientation=t,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,i)=>this.sortPredicate(e,i,this)),this}withScrollableParents(t){let e=this._container;return this._scrollableElements=t.indexOf(e)===-1?[e,...t]:t.slice(),this}withElementContainer(t){if(t===this._container)return this;let e=rt(this.element),i=this._scrollableElements.indexOf(this._container),r=this._scrollableElements.indexOf(t);return i>-1&&this._scrollableElements.splice(i,1),r>-1&&this._scrollableElements.splice(r,1),this._sortStrategy&&this._sortStrategy.withElementContainer(t),this._cachedShadowRoot=null,this._scrollableElements.unshift(t),this._container=t,this}getScrollableParents(){return this._scrollableElements}getItemIndex(t){return this._isDragging?this._sortStrategy.getItemIndex(t):this._draggables.indexOf(t)}getItemAtIndex(t){return this._isDragging?this._sortStrategy.getItemAtIndex(t):this._draggables[t]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(t,e,i,r){if(this.sortingDisabled||!this._domRect||!gw(this._domRect,xw,e,i))return;let o=this._sortStrategy.sort(t,e,i,r);o&&this.sorted.next({previousIndex:o.previousIndex,currentIndex:o.currentIndex,container:this,item:t})}_startScrollingIfNecessary(t,e){if(this.autoScrollDisabled)return;let i,r=ln.NONE,o=Ft.NONE;if(this._parentPositions.positions.forEach((s,a)=>{a===this._document||!s.clientRect||i||gw(s.clientRect,xw,t,e)&&([r,o]=QA(a,s.clientRect,this._direction,t,e),(r||o)&&(i=a))}),!r&&!o){let{width:s,height:a}=this._viewportRuler.getViewportSize(),c={width:s,height:a,top:0,right:s,bottom:a,left:0};r=kw(c,e),o=Rw(c,t),i=window}i&&(r!==this._verticalScrollDirection||o!==this._horizontalScrollDirection||i!==this._scrollNode)&&(this._verticalScrollDirection=r,this._horizontalScrollDirection=o,this._scrollNode=i,(r||o)&&i?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let t=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=t.msScrollSnapType||t.scrollSnapType||"",t.scrollSnapType=t.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let t=this._container.style;t.scrollSnapType=t.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),mf(0,co).pipe(ae(this._stopScrollTimers)).subscribe(()=>{let t=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===ln.UP?t.scrollBy(0,-e):this._verticalScrollDirection===ln.DOWN&&t.scrollBy(0,e),this._horizontalScrollDirection===Ft.LEFT?t.scrollBy(-e,0):this._horizontalScrollDirection===Ft.RIGHT&&t.scrollBy(e,0)})};_isOverContainer(t,e){return this._domRect!=null&&Ym(this._domRect,t,e)}_getSiblingContainerFromPosition(t,e,i){return this._siblings.find(r=>r._canReceive(t,e,i))}_canReceive(t,e,i){if(!this._domRect||!Ym(this._domRect,e,i)||!this.enterPredicate(t,this))return!1;let r=this._getShadowRoot().elementFromPoint(e,i);return r?r===this._container||this._container.contains(r):!1}_startReceiving(t,e){let i=this._activeSiblings;!i.has(t)&&e.every(r=>this.enterPredicate(r,this)||this._draggables.indexOf(r)>-1)&&(i.add(t),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:t,receiver:this,items:e}))}_stopReceiving(t){this._activeSiblings.delete(t),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:t,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(t=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(t);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let t=Fr(this._container);this._cachedShadowRoot=t||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let t=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,t))}};function kw(n,t){let{top:e,bottom:i,height:r}=n,o=r*Mw;return t>=e-o&&t<=e+o?ln.UP:t>=i-o&&t<=i+o?ln.DOWN:ln.NONE}function Rw(n,t){let{left:e,right:i,width:r}=n,o=r*Mw;return t>=e-o&&t<=e+o?Ft.LEFT:t>=i-o&&t<=i+o?Ft.RIGHT:Ft.NONE}function QA(n,t,e,i,r){let o=kw(t,r),s=Rw(t,i),a=ln.NONE,c=Ft.NONE;if(o){let l=n.scrollTop;o===ln.UP?l>0&&(a=ln.UP):n.scrollHeight-l>n.clientHeight&&(a=ln.DOWN)}if(s){let l=n.scrollLeft;e==="rtl"?s===Ft.RIGHT?l<0&&(c=Ft.RIGHT):n.scrollWidth+l>n.clientWidth&&(c=Ft.LEFT):s===Ft.LEFT?l>0&&(c=Ft.LEFT):n.scrollWidth-l>n.clientWidth&&(c=Ft.RIGHT)}return[a,c]}var eg=new _("CDK_DRAG_PARENT");var Aw=new _("CdkDragHandle"),Ow=(()=>{class n{element=f(T);_parentDrag=f(eg,{optional:!0,skipSelf:!0});_dragDropRegistry=f(Hd);_stateChanges=new y;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._stateChanges.next(this)}_disabled=!1;constructor(){this._parentDrag?._addHandle(this)}ngAfterViewInit(){if(!this._parentDrag){let e=this.element.nativeElement.parentElement;for(;e;){let i=this._dragDropRegistry.getDragDirectiveForNode(e);if(i){this._parentDrag=i,i._addHandle(this);break}e=e.parentElement}}}ngOnDestroy(){this._parentDrag?._removeHandle(this),this._stateChanges.complete()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","cdkDragHandle",""]],hostAttrs:[1,"cdk-drag-handle"],inputs:{disabled:[2,"cdkDragHandleDisabled","disabled",E]},features:[ue([{provide:Aw,useExisting:n}])]})}return n})(),Pw=new _("CDK_DRAG_CONFIG"),Fw=new _("CdkDropList"),Lw=(()=>{class n{element=f(T);dropContainer=f(Fw,{optional:!0,skipSelf:!0});_ngZone=f(M);_viewContainerRef=f(ze);_dir=f(pt,{optional:!0});_changeDetectorRef=f(Ee);_selfHandle=f(Aw,{optional:!0,self:!0});_parentDrag=f(eg,{optional:!0,skipSelf:!0});_dragDropRegistry=f(Hd);_destroyed=new y;_handles=new Lt([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new P;released=new P;ended=new P;entered=new P;exited=new P;dropped=new P;moved=new Y(e=>{let i=this._dragRef.moved.pipe(be(r=>({source:this,pointerPosition:r.pointerPosition,event:r.event,delta:r.delta,distance:r.distance}))).subscribe(e);return()=>{i.unsubscribe()}});_injector=f(ee);constructor(){let e=this.dropContainer,i=f(Pw,{optional:!0});this._dragRef=qA(this._injector,this.element,{dragStartThreshold:i&&i.dragStartThreshold!=null?i.dragStartThreshold:5,pointerDirectionChangeThreshold:i&&i.pointerDirectionChangeThreshold!=null?i.pointerDirectionChangeThreshold:5,zIndex:i?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),i&&this._assignDefaults(i),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(ae(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){Je(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let i=e.rootElementSelector,r=e.freeDragPosition;i&&!i.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,r&&!r.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let i=this._handles.getValue();i.push(e),this._handles.next(i)}_removeHandle(e){let i=this._handles.getValue(),r=i.indexOf(e);r>-1&&(i.splice(r,1),this._handles.next(i))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,i=e;this.rootElementSelector&&(i=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(i||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):rt(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let i=this._dir,r=this.dragStartDelay,o=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,s=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof r=="object"&&r?r:Li(r),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(o).withPreviewTemplate(s).withPreviewContainer(this.previewContainer||"global"),i&&e.withDirection(i.value)}}),e.beforeStarted.pipe(On(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let i=this.element.nativeElement.parentElement;for(;i;){let r=this._dragDropRegistry.getDragDirectiveForNode(i);if(r){e.withParent(r._dragRef);break}i=i.parentElement}})}_handleEvents(e){e.started.subscribe(i=>{this.started.emit({source:this,event:i.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(i=>{this.released.emit({source:this,event:i.event})}),e.ended.subscribe(i=>{this.ended.emit({source:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(i=>{this.entered.emit({container:i.container.data,item:this,currentIndex:i.currentIndex})}),e.exited.subscribe(i=>{this.exited.emit({container:i.container.data,item:this})}),e.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,isPointerOverContainer:i.isPointerOverContainer,item:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event})})}_assignDefaults(e){let{lockAxis:i,dragStartDelay:r,constrainPosition:o,previewClass:s,boundaryElement:a,draggingDisabled:c,rootElementSelector:l,previewContainer:d}=e;this.disabled=c??!1,this.dragStartDelay=r||0,this.lockAxis=i||null,o&&(this.constrainPosition=o),s&&(this.previewClass=s),a&&(this.boundaryElement=a),l&&(this.rootElementSelector=l),d&&(this.previewContainer=d)}_setupHandlesListener(){this._handles.pipe(Zt(e=>{let i=e.map(r=>r.element);this._selfHandle&&this.rootElementSelector&&i.push(this.element),this._dragRef.withHandles(i)}),Pn(e=>yt(...e.map(i=>i._stateChanges.pipe(Bt(i))))),ae(this._destroyed)).subscribe(e=>{let i=this._dragRef,r=e.element.nativeElement;e.disabled?i.disableHandle(r):i.enableHandle(r)})}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(i,r){i&2&&z("cdk-drag-disabled",r.disabled)("cdk-drag-dragging",r._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",E],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",ht]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[ue([{provide:eg,useExisting:n}]),Fe]})}return n})(),Iw=new _("CdkDropListGroup");var Vw=(()=>{class n{element=f(T);_changeDetectorRef=f(Ee);_scrollDispatcher=f(Vi);_dir=f(pt,{optional:!0});_group=f(Iw,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new y;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=f(et).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new P;entered=new P;exited=new P;sorted=new P;_unsortedItems=new Set;constructor(){let e=f(Pw,{optional:!0}),i=f(ee);this._dropListRef=YA(i,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(r,o)=>this.enterPredicate(r.data,o.data),this._dropListRef.sortPredicate=(r,o,s)=>this.sortPredicate(r,o.data,s.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),n._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(i=>i._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let i=this._latestSortedRefs.indexOf(e._dragRef);i>-1&&(this._latestSortedRefs.splice(i,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,i)=>e._dragRef.getVisibleElement().compareDocumentPosition(i._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=n._dropLists.indexOf(this);e>-1&&n._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(Bt(this._dir.value),ae(this._destroyed)).subscribe(i=>e.withDirection(i)),e.beforeStarted.subscribe(()=>{let i=ha(this.connectedTo).map(r=>{if(typeof r=="string"){let o=n._dropLists.find(s=>s.id===r);return o}return r});if(this._group&&this._group._items.forEach(r=>{i.indexOf(r)===-1&&i.push(r)}),!this._scrollableParentsResolved){let r=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(o=>o.getElementRef().nativeElement);this._dropListRef.withScrollableParents(r),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let r=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(r)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=Li(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(i.filter(r=>r&&r!==this).map(r=>r._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(i=>i._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(i=>{this.entered.emit({container:this,item:i.item.data,currentIndex:i.currentIndex})}),e.exited.subscribe(i=>{this.exited.emit({container:this,item:i.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(i=>{this.sorted.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,container:this,item:i.item.data})}),e.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,item:i.item.data,isPointerOverContainer:i.isPointerOverContainer,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),yt(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:i,draggingDisabled:r,sortingDisabled:o,listAutoScrollDisabled:s,listOrientation:a}=e;this.disabled=r??!1,this.sortingDisabled=o??!1,this.autoScrollDisabled=s??!1,this.orientation=a||"vertical",this.lockAxis=i||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(i,r){i&2&&(le("id",r.id),z("cdk-drop-list-disabled",r.disabled)("cdk-drop-list-dragging",r._dropListRef.isDragging())("cdk-drop-list-receiving",r._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",E],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",E],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",E],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",E]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[ue([{provide:Iw,useValue:void 0},{provide:Fw,useExisting:n}])]})}return n})();function ig(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Xe(n){return n==null?"":typeof n=="string"?n:`${n}px`}var xa=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},Ia=class extends xa{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(t,e,i,r,o,s){super(),this.component=t,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null,this.directives=s||null}},Ur=class extends xa{templateRef;viewContainerRef;context;injector;constructor(t,e,i,r){super(),this.templateRef=t,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}},rg=class extends xa{element;constructor(t){super(),this.element=t instanceof T?t.nativeElement:t}},og=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof Ia)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof Ur)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof rg)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},zd=class extends og{outletElement;_appRef;_defaultInjector;constructor(t,e,i){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=i}attachComponentPortal(t){let e;if(t.viewContainerRef){let i=t.injector||t.viewContainerRef.injector,r=i.get(Sr,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=t.injector||this._defaultInjector||ee.NULL,o=r.get(Ke,i.injector);e=hd(t.component,{elementInjector:r,environmentInjector:o,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,i=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=t,i}attachDomPortal=t=>{let e=t.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var Bw=tw();function Ww(n){return new Wo(n.get(Pt),n.get(A))}var Wo=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=Xe(-this._previousScrollPosition.left),t.style.top=Xe(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,i=t.style,r=e.style,o=i.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),Bw&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Bw&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function qw(n,t){return new Ud(n.get(Vi),n.get(M),n.get(Pt),t)}var Ud=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,i,r){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(qe(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Na=class{enable(){}disable(){}attach(){}};function sg(n,t){return t.some(e=>{let i=n.bottom<e.top,r=n.top>e.bottom,o=n.right<e.left,s=n.left>e.right;return i||r||o||s})}function jw(n,t){return t.some(e=>{let i=n.top<e.top,r=n.bottom>e.bottom,o=n.left<e.left,s=n.right>e.right;return i||r||o||s})}function Gr(n,t){return new $d(n.get(Vi),n.get(Pt),n.get(M),t)}var $d=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,i,r){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();sg(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Kw=(()=>{class n{_injector=f(ee);noop=()=>new Na;close=e=>qw(this._injector,e);block=()=>Ww(this._injector);reposition=e=>Gr(this._injector,e);static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),Ta=class{positionStrategy;scrollStrategy=new Na;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let i of e)t[i]!==void 0&&(this[i]=t[i])}}};var Gd=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var Yw=(()=>{class n{_attachedOverlays=[];_document=f(A);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),Qw=(()=>{class n extends Yw{_ngZone=f(M);_renderer=f(je).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),Zw=(()=>{class n extends Yw{_platform=f(Oe);_ngZone=f(M);_renderer=f(je).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=$e(e)};_clickListener=e=>{let i=$e(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(Hw(a.overlayElement,i)||Hw(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();function Hw(n,t){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=t;for(;i;){if(i===n)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Xw=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})(),Jw=(()=>{class n{_platform=f(Oe);_containerElement;_document=f(A);_styleLoader=f(Qe);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||ig()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),ig()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Xw)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),ag=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,i,r){this._renderer=e,this._ngZone=i,this.element=t.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents="none",t.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function cg(n){return n&&n.nodeType===1}var Wd=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new y;_attachments=new y;_detachments=new y;_positionStrategy;_scrollStrategy;_locationChanges=J.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new y;_outsidePointerEvents=new y;_afterNextRenderRef;constructor(t,e,i,r,o,s,a,c,l,d=!1,u,p){this._portalOutlet=t,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=d,this._injector=u,this._renderer=p,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Je(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=I(I({},this._config),t),this._updateElementSize()}setDirection(t){this._config=he(I({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=Xe(this._config.width),t.height=Xe(this._config.height),t.minWidth=Xe(this._config.minWidth),t.minHeight=Xe(this._config.minHeight),t.maxWidth=Xe(this._config.maxWidth),t.maxHeight=Xe(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;cg(t)?t.after(this._host):t?.type==="parent"?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(t){}}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ag(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,i){let r=ha(e||[]).filter(o=>!!o);r.length&&(i?t.classList.add(...r):t.classList.remove(...r))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=Je(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}},zw="cdk-overlay-connected-position-bounding-box",ZA=/([A-Za-z%]+)$/;function Ma(n,t){return new qd(t,n.get(Pt),n.get(A),n.get(Oe),n.get(Jw))}var qd=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new y;_resizeSubscription=J.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(zw),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let c=this._getOriginPoint(t,r,a),l=this._getOverlayPoint(c,e,a),d=this._getOverlayFit(l,e,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(d,l,i)){o.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:l,originPoint:c,position:a,overlayRect:e})}if(o.length){let a=null,c=-1;for(let l of o){let d=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);d>c&&(c=d,a=l)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&$r(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(zw),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof T?this._origin.nativeElement:cg(this._origin)?this._origin:null}_getOriginPoint(t,e,i){let r;if(i.originX=="center")r=t.left+t.width/2;else{let s=this._isRtl()?t.right:t.left,a=this._isRtl()?t.left:t.right;r=i.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=t.top+t.height/2:o=i.originY=="top"?t.top:t.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(t,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:t.x+r,y:t.y+o}}_getOverlayFit(t,e,i,r){let o=$w(e),{x:s,y:a}=t,c=this._getOffset(r,"x"),l=this._getOffset(r,"y");c&&(s+=c),l&&(a+=l);let d=0-s,u=s+o.width-i.width,p=0-a,h=a+o.height-i.height,m=this._subtractOverflows(o.width,d,u),g=this._subtractOverflows(o.height,p,h),v=m*g;return{visibleArea:v,isCompletelyWithinViewport:o.width*o.height===v,fitsInViewportVertically:g===o.height,fitsInViewportHorizontally:m==o.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=Uw(this._overlayRef.getConfig().minHeight),a=Uw(this._overlayRef.getConfig().minWidth),c=t.fitsInViewportVertically||s!=null&&s<=r,l=t.fitsInViewportHorizontally||a!=null&&a<=o;return c&&l}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let r=$w(e),o=this._viewportRect,s=Math.max(t.x+r.width-o.width,0),a=Math.max(t.y+r.height-o.height,0),c=Math.max(o.top-i.top-t.y,0),l=Math.max(o.left-i.left-t.x,0),d=0,u=0;return r.width<=o.width?d=l||-s:d=t.x<this._getViewportMarginStart()?o.left-i.left-t.x:0,r.height<=o.height?u=c||-a:u=t.y<this._getViewportMarginTop()?o.top-i.top-t.y:0,this._previousPushAmount={x:d,y:u},{x:t.x+d,y:t.y+u}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!XA(this._lastScrollVisibility,i)){let r=new Gd(t,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=t.overlayY;t.overlayX==="center"?i="center":this._isRtl()?i=t.overlayX==="start"?"right":"left":i=t.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(t,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=t.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let h=Math.min(i.bottom-t.y+i.top,t.y),m=this._lastBoundingBoxSize.height;o=h*2,s=t.y-h,o>m&&!this._isInitialRender&&!this._growAfterOpen&&(s=t.y-m/2)}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,l=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,u,p;if(l)p=i.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=t.x-this._getViewportMarginStart();else if(c)u=t.x,d=i.right-t.x-this._getViewportMarginEnd();else{let h=Math.min(i.right-t.x+i.left,t.x),m=this._lastBoundingBoxSize.width;d=h*2,u=t.x-h,d>m&&!this._isInitialRender&&!this._growAfterOpen&&(u=t.x-m/2)}return{top:s,left:u,bottom:a,right:p,width:d,height:o}}_setBoundingBoxStyles(t,e){let i=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=Xe(i.width),r.height=Xe(i.height),r.top=Xe(i.top)||"auto",r.bottom=Xe(i.bottom)||"auto",r.left=Xe(i.left)||"auto",r.right=Xe(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=Xe(o)),s&&(r.maxWidth=Xe(s))}this._lastBoundingBoxSize=i,$r(this._boundingBox.style,r)}_resetBoundingBoxStyles(){$r(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){$r(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();$r(i,this._getExactOverlayY(e,t,d)),$r(i,this._getExactOverlayX(e,t,d))}else i.position="static";let a="",c=this._getOffset(e,"x"),l=this._getOffset(e,"y");c&&(a+=`translateX(${c}px) `),l&&(a+=`translateY(${l}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=Xe(s.maxHeight):o&&(i.maxHeight="")),s.maxWidth&&(r?i.maxWidth=Xe(s.maxWidth):o&&(i.maxWidth="")),$r(this._pane.style,i)}_getExactOverlayY(t,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),t.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=Xe(o.y);return r}_getExactOverlayX(t,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=t.overlayX==="end"?"left":"right":s=t.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=Xe(o.x);return r}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:jw(t,i),isOriginOutsideView:sg(t,i),isOverlayClipped:jw(e,i),isOverlayOutsideView:sg(e,i)}}_subtractOverflows(t,...e){return e.reduce((i,r)=>i-Math.max(r,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+t-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e==="x"?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&ha(t).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof T)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();t&&(e.style.display="block");let i=e.getBoundingClientRect();return t&&(e.style.display=""),i}};function $r(n,t){for(let e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}function Uw(n){if(typeof n!="number"&&n!=null){let[t,e]=n.split(ZA);return!e||e==="px"?parseFloat(t):null}return n||null}function $w(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function XA(n,t){return n===t?!0:n.isOriginClipped===t.isOriginClipped&&n.isOriginOutsideView===t.isOriginOutsideView&&n.isOverlayClipped===t.isOverlayClipped&&n.isOverlayOutsideView===t.isOverlayOutsideView}var Gw="cdk-global-overlay-wrapper";function eC(n){return new Kd}var Kd=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(Gw),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._xOffset=t,this._xPosition="left",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._xOffset=t,this._xPosition="right",this}start(t=""){return this._xOffset=t,this._xPosition="start",this}end(t=""){return this._xOffset=t,this._xPosition="end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._xPosition="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=i,c=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),l=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,u=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",h="",m="",g="";c?g="flex-start":d==="center"?(g="center",p?m=u:h=u):p?d==="left"||d==="end"?(g="flex-end",h=u):(d==="right"||d==="start")&&(g="flex-start",m=u):d==="left"||d==="start"?(g="flex-start",h=u):(d==="right"||d==="end")&&(g="flex-end",m=u),t.position=this._cssPosition,t.marginLeft=c?"0":h,t.marginTop=l?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=c?"0":m,e.justifyContent=g,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(Gw),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}},tC=(()=>{class n{_injector=f(ee);global(){return eC()}flexibleConnectedTo(e){return Ma(this._injector,e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),ka=new _("OVERLAY_DEFAULT_CONFIG");function Ra(n,t){n.get(Qe).load(Xw);let e=n.get(Jw),i=n.get(A),r=n.get(et),o=n.get(Sn),s=n.get(pt),a=n.get(Pe,null,{optional:!0})||n.get(je).createRenderer(null,null),c=new Ta(t),l=n.get(ka,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,!i.body||!("showPopover"in i.body)?c.usePopover=!1:c.usePopover=t?.usePopover??l;let d=i.createElement("div"),u=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),u.appendChild(d),c.usePopover&&(u.setAttribute("popover","manual"),u.classList.add("cdk-overlay-popover"));let p=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return cg(p)?p.after(u):p?.type==="parent"?p.element.appendChild(u):e.getContainerElement().appendChild(u),new Wd(new zd(d,o,n),u,d,c,n.get(M),n.get(Qw),i,n.get(md),n.get(Zw),t?.disableAnimations??n.get(Ni,null,{optional:!0})==="NoopAnimations",n.get(Ke),a)}var lg=(()=>{class n{scrollStrategies=f(Kw);_positionBuilder=f(tC);_injector=f(ee);create(e){return Ra(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),JA=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],eO=new _("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=f(ee);return()=>Gr(n)}}),qo=(()=>{class n{elementRef=f(T);static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),nC=new _("cdk-connected-overlay-default-config"),Qd=(()=>{class n{_dir=f(pt,{optional:!0});_injector=f(ee);_overlayRef;_templatePortal;_backdropSubscription=J.EMPTY;_attachSubscription=J.EMPTY;_detachSubscription=J.EMPTY;_positionSubscription=J.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=f(eO);_ngZone=f(M);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new P;positionChange=new P;attach=new P;detach=new P;overlayKeydown=new P;overlayOutsideClick=new P;constructor(){let e=f(ft),i=f(ze),r=f(nC,{optional:!0}),o=f(ka,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Ur(e,i),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=JA);let e=this._overlayRef=Ra(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!cn(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let r=this._getOriginElement(),o=$e(i);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new Ta({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Ma(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof qo?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof qo?this.origin.elementRef.nativeElement:this.origin instanceof T?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Df(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",E],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",E],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",E],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",E],push:[2,"cdkConnectedOverlayPush","push",E],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",E],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",E],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Fe]})}return n})();var uC=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||n)(Ce(Pe),Ce(T))};static \u0275dir=x({type:n})}return n})(),nO=(()=>{class n extends uC{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=x({type:n,features:[ce]})}return n})(),au=new _("");var iO={provide:au,useExisting:Ht(()=>fC),multi:!0};function rO(){let n=an()?an().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var oO=new _(""),fC=(()=>{class n extends uC{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!rO())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||n)(Ce(Pe),Ce(T),Ce(oO,8))};static \u0275dir=x({type:n,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&X("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[ue([iO]),ce]})}return n})();function hg(n){return n==null||pg(n)===0}function pg(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var Zo=new _(""),mg=new _(""),sO=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Va=class{static min(t){return aO(t)}static max(t){return cO(t)}static required(t){return hC(t)}static requiredTrue(t){return lO(t)}static email(t){return dO(t)}static minLength(t){return uO(t)}static maxLength(t){return fO(t)}static pattern(t){return hO(t)}static nullValidator(t){return Xd()}static compose(t){return yC(t)}static composeAsync(t){return bC(t)}};function aO(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function cO(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function hC(n){return hg(n.value)?{required:!0}:null}function lO(n){return n.value===!0?null:{required:!0}}function dO(n){return hg(n.value)||sO.test(n.value)?null:{email:!0}}function uO(n){return t=>{let e=t.value?.length??pg(t.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function fO(n){return t=>{let e=t.value?.length??pg(t.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function hO(n){if(!n)return Xd;let t,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),i=>{if(hg(i.value))return null;let r=i.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Xd(n){return null}function pC(n){return n!=null}function mC(n){return Ir(n)?Qt(n):n}function gC(n){let t={};return n.forEach(e=>{t=e!=null?I(I({},t),e):t}),Object.keys(t).length===0?null:t}function _C(n,t){return t.map(e=>e(n))}function pO(n){return!n.validate}function vC(n){return n.map(t=>pO(t)?t:e=>t.validate(e))}function yC(n){if(!n)return null;let t=n.filter(pC);return t.length==0?null:function(e){return gC(_C(e,t))}}function gg(n){return n!=null?yC(vC(n)):null}function bC(n){if(!n)return null;let t=n.filter(pC);return t.length==0?null:function(e){let i=_C(e,t).map(mC);return fs(i).pipe(be(gC))}}function _g(n){return n!=null?bC(vC(n)):null}function iC(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function SC(n){return n._rawValidators}function DC(n){return n._rawAsyncValidators}function dg(n){return n?Array.isArray(n)?n:[n]:[]}function Jd(n,t){return Array.isArray(n)?n.includes(t):n===t}function rC(n,t){let e=dg(t);return dg(n).forEach(r=>{Jd(e,r)||e.push(r)}),e}function oC(n,t){return dg(t).filter(e=>!Jd(n,e))}var eu=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=gg(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=_g(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},Wr=class extends eu{name;get formDirective(){return null}get path(){return null}};var Aa="VALID",Zd="INVALID",Ko="PENDING",Oa="DISABLED",ji=class{},tu=class extends ji{value;source;constructor(t,e){super(),this.value=t,this.source=e}},Fa=class extends ji{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},La=class extends ji{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},Yo=class extends ji{status;source;constructor(t,e){super(),this.status=t,this.source=e}},nu=class extends ji{source;constructor(t){super(),this.source=t}},Qo=class extends ji{source;constructor(t){super(),this.source=t}};function wC(n){return(cu(n)?n.validators:n)||null}function mO(n){return Array.isArray(n)?gg(n):n||null}function CC(n,t){return(cu(t)?t.asyncValidators:n)||null}function gO(n){return Array.isArray(n)?_g(n):n||null}function cu(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function _O(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new S(1e3,"");if(!EC(i,e))throw new S(1001,"")}function vO(n,t,e){n._forEachChild((i,r)=>{if(e[r]===void 0)throw new S(-1002,"")})}var iu=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=Se(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return it(this.statusReactive)}set status(t){it(()=>this.statusReactive.set(t))}_status=Kt(()=>this.statusReactive());statusReactive=Se(void 0);get valid(){return this.status===Aa}get invalid(){return this.status===Zd}get pending(){return this.status===Ko}get disabled(){return this.status===Oa}get enabled(){return this.status!==Oa}errors;get pristine(){return it(this.pristineReactive)}set pristine(t){it(()=>this.pristineReactive.set(t))}_pristine=Kt(()=>this.pristineReactive());pristineReactive=Se(!0);get dirty(){return!this.pristine}get touched(){return it(this.touchedReactive)}set touched(t){it(()=>this.touchedReactive.set(t))}_touched=Kt(()=>this.touchedReactive());touchedReactive=Se(!1);get untouched(){return!this.touched}_events=new y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(rC(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(rC(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(oC(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(oC(t,this._rawAsyncValidators))}hasValidator(t){return Jd(this._rawValidators,t)}hasAsyncValidator(t){return Jd(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(he(I({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new La(!0,i))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),t.onlySelf||this._parent?._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new La(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(he(I({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new Fa(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new Fa(!0,i))}markAsPending(t={}){this.status=Ko;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Yo(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(he(I({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Oa,this.errors=null,this._forEachChild(r=>{r.disable(he(I({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new tu(this.value,i)),this._events.next(new Yo(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(he(I({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Aa,this._forEachChild(i=>{i.enable(he(I({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(he(I({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Aa||this.status===Ko)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new tu(this.value,e)),this._events.next(new Yo(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(he(I({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Oa:Aa}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=Ko,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let i=mC(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(t,e){let i=e?this.get(e):this;return i?.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new Yo(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new P,this.statusChanges=new P}_calculateStatus(){return this._allControlsDisabled()?Oa:this.errors?Zd:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ko)?Ko:this._anyControlsHaveStatus(Zd)?Zd:Aa}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,t.onlySelf||this._parent?._updatePristine(t,e),r&&this._events.next(new Fa(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new La(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){cu(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=mO(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=gO(this._rawAsyncValidators)}_updateHasRequiredValidator(){it(()=>this._hasRequired.set(this.hasValidator(Va.required)))}};function EC(n,t){return Object.hasOwn(n,t)}function yO(n){return n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"}function bO(n,t,e,i){switch(e){case"name":n.setAttribute(t,e,i);break;case"disabled":case"readonly":case"required":i?n.setAttribute(t,e,""):n.removeAttribute(t,e);break;case"max":case"min":case"minLength":case"maxLength":i!==void 0?n.setAttribute(t,e,i.toString()):n.removeAttribute(t,e);break}}var ug=class{kind;context;control;message;constructor({kind:t,context:e,control:i}){this.kind=t,this.context=e,this.control=i}};var SO=(()=>{class n{_validator=Xd;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Xd,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,features:[Fe]})}return n})();var DO={provide:Zo,useExisting:Ht(()=>xC),multi:!0};var xC=(()=>{class n extends SO{required;inputName="required";normalizeInput=E;createValidator=e=>hC;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=x({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&le("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[ue([DO]),ce]})}return n})();var wO=new _(""),lu=new _("",{factory:()=>vg}),vg="always";function CO(n,t){return[...t.path,n]}function sC(n,t,e=vg){yg(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),xO(n,t),NO(n,t),IO(n,t),EO(n,t)}function aC(n,t,e=!0){let i=()=>{};t?.valueAccessor?.registerOnChange(i),t?.valueAccessor?.registerOnTouched(i),ou(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function ru(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function EO(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function yg(n,t){let e=SC(n);t.validator!==null?n.setValidators(iC(e,t.validator)):typeof e=="function"&&n.setValidators([e]);let i=DC(n);t.asyncValidator!==null?n.setAsyncValidators(iC(i,t.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();ru(t._rawValidators,r),ru(t._rawAsyncValidators,r)}function ou(n,t){let e=!1;if(n!==null){if(t.validator!==null){let r=SC(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==t.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(t.asyncValidator!==null){let r=DC(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==t.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let i=()=>{};return ru(t._rawValidators,i),ru(t._rawAsyncValidators,i),e}function xO(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&IC(n,t)})}function IO(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&IC(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function IC(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function NO(n,t){let e=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function NC(n,t){n==null,yg(n,t)}function TO(n,t){return ou(n,t)}function MO(n,t){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function kO(n){return Object.getPrototypeOf(n.constructor)===nO}function TC(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function RO(n,t){if(!t)return null;Array.isArray(t);let e,i,r;return t.forEach(o=>{o.constructor===fC?e=o:kO(o)?i=o:r=o}),r||i||e||null}function AO(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}var OO={provide:wO,useFactory:()=>{let n=f(Hi,{self:!0});return{setParseErrors:t=>{n.setParseErrorSource(t)},set onReset(t){n.onReset=t}}}},Hi=class extends eu{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Qo&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=RO(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(t,e,i){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=i,this.injector?.get(kt)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.injector?.get(Ee);if(!this.control||!t)return;let e=t.markForCheck.bind(t);this.subscription=new J,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof Qo&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),t.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=yO(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof xC))}ngControlUpdate(t,e){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,t.setCustomControlModelInput(i.value)),this.bindControlProperty(t,r,"touched",i.touched),this.bindControlProperty(t,r,"dirty",i.dirty),this.bindControlProperty(t,r,"valid",i.valid),this.bindControlProperty(t,r,"invalid",i.invalid),this.bindControlProperty(t,r,"pending",i.pending),this.bindControlProperty(t,r,"disabled",i.disabled),this.shouldBindRequired&&this.bindControlProperty(t,r,"required",this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let s=this._convertErrors(o);t.setInputOnDirectives("errors",s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(t,e,i,r){if(e[i]===r)return;e[i]=r;let o=t.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i==="disabled"||i==="required")&&this.renderer&&bO(this.renderer,t.nativeElement,i,r)}_convertErrors(t){if(t===null)return[];let e=this.control;return Object.entries(t).map(([i,r])=>new ug({context:r,kind:i,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,i=Kt(()=>{let r=t();return r.length===0?null:r.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>e).bind(this),ii(()=>{e=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}},fg=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var du=(()=>{class n extends fg{constructor(e){super(e)}static \u0275fac=function(i){return new(i||n)(Ce(Hi,2))};static \u0275dir=x({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ce]})}return n})();var su=class extends iu{constructor(t,e,i){super(wC(e),CC(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){let i=this._find(t);return i||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){let i=this._find(t);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){let r=this._find(t);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this._find(t)?.enabled===!0}setValue(t,e={}){it(()=>{vO(this,!0,t),Object.keys(t).forEach(i=>{_O(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let r=this._find(i);r&&r.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,r)=>{i.reset(t?t[r]:null,he(I({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Qo(this))}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return EC(this.controls,t)?this.controls[t]:null}};var PO={provide:Wr,useExisting:Ht(()=>bg)},Pa=Promise.resolve(),bg=(()=>{class n extends Wr{callSetDisabledState;get submitted(){return it(this.submittedReactive)}_submitted=Kt(()=>this.submittedReactive());submittedReactive=Se(!1);_directives=new Set;form;ngSubmit=new P;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new su({},gg(e),_g(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Pa.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Pa.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Pa.then(()=>{let i=this._findContainer(e.path),r=new su({});NC(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Pa.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Pa.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),TC(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new nu(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||n)(Ce(Zo,10),Ce(mg,10),Ce(lu,8))};static \u0275dir=x({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&X("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ue([PO]),ce]})}return n})();function cC(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function lC(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var MC=class extends iu{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(wC(e),CC(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),cu(e)&&(e.nonNullable||e.initialValueIsDefault)&&(lC(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){it(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Qo(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){cC(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){cC(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){lC(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var FO=n=>n instanceof MC;var LO={provide:Hi,useExisting:Ht(()=>Ba)},dC=Promise.resolve(),Ba=(()=>{class n extends Hi{_changeDetectorRef;callSetDisabledState;control=new MC;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new P;constructor(e,i,r,o,s,a,c,l){super(c,l,o),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),MO(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,sC(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,sC(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){dC.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&E(i);dC.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?CO(e,this._parent):[e]}static \u0275fac=function(i){return new(i||n)(Ce(Wr,9),Ce(Zo,10),Ce(mg,10),Ce(au,10),Ce(Ee,8),Ce(lu,8),Ce(ee,8),Ce(Pe,8))};static \u0275dir=x({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[ue([LO,OO]),ce,Fe,Yp(null)]})}return n})();var VO=(()=>{class n extends Wr{callSetDisabledState;get submitted(){return it(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Kt(()=>this._submittedReactive());_submittedReactive=Se(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ou(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return e._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){aC(e.control||null,e,!1),AO(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,TC(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new nu(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(aC(i||null,e),FO(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);NC(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&TO(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){yg(this.form,this),this._oldForm&&ou(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(Ce(Zo,10),Ce(mg,10),Ce(lu,8))};static \u0275dir=x({type:n,features:[ce,Fe]})}return n})();var BO={provide:Wr,useExisting:Ht(()=>Sg)},Sg=(()=>{class n extends VO{form=null;ngSubmit=new P;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=x({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&X("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ue([BO]),ce]})}return n})();var jO=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ae({type:n});static \u0275inj=Te({})}return n})();var uu=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:lu,useValue:e.callSetDisabledState??vg}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ae({type:n});static \u0275inj=Te({imports:[jO]})}return n})();var HO=["*"],RC=(()=>{class n{labelPosition="after";static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(i,r){i&2&&z("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},ngContentSelectors:HO,decls:1,vars:0,template:function(i,r){i&1&&(ve(),O(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return n})();function ja(n){return n!=null&&`${n}`!="false"}var dn=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(dn||{}),Dg=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=dn.HIDDEN;constructor(t,e,i,r=!1){this._renderer=t,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},AC=zo({passive:!0,capture:!0}),wg=class{_events=new Map;addHandler(t,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,AC)})}removeHandler(t,e,i){let r=this._events.get(t);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,AC)))}_delegateEventHandler=t=>{let e=$e(t);e&&this._events.get(t.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(t))})}},Ha={enterDuration:225,exitDuration:150},zO=800,OC=zo({passive:!0,capture:!0}),PC=["mousedown","touchstart"],FC=["mouseup","mouseleave","touchend","touchcancel"],UO=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})(),za=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new wg;constructor(t,e,i,r,o){this._target=t,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=rt(i)),o&&o.get(Qe).load(UO)}fadeInRipple(t,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=I(I({},Ha),i.animation);i.centered&&(t=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||$O(t,e,r),a=t-r.left,c=e-r.top,l=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let u=window.getComputedStyle(d),p=u.transitionProperty,h=u.transitionDuration,m=p==="none"||h==="0s"||h==="0s, 0s"||r.width===0&&r.height===0,g=new Dg(this,d,i,m);d.style.transform="scale3d(1, 1, 1)",g.state=dn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=g);let v=null;return!m&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let C=()=>{v&&(v.fallbackTimer=null),clearTimeout(ye),this._finishRippleTransition(g)},Q=()=>this._destroyRipple(g),ye=setTimeout(Q,l+100);d.addEventListener("transitionend",C),d.addEventListener("transitioncancel",Q),v={onTransitionEnd:C,onTransitionCancel:Q,fallbackTimer:ye}}),this._activeRipples.set(g,v),(m||!l)&&this._finishRippleTransition(g),g}fadeOutRipple(t){if(t.state===dn.FADING_OUT||t.state===dn.HIDDEN)return;let e=t.element,i=I(I({},Ha),t.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",t.state=dn.FADING_OUT,(t._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=rt(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,PC.forEach(i=>{n._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{FC.forEach(e=>{this._triggerElement.addEventListener(e,this,OC)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===dn.FADING_IN?this._startFadeOutTransition(t):t.state===dn.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:i}=t.config;t.state=dn.VISIBLE,!i&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=dn.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=Or(t),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+zO;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Pr(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===dn.VISIBLE||t.config.terminateOnPointerUp&&t.state===dn.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(PC.forEach(e=>n._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(FC.forEach(e=>t.removeEventListener(e,this,OC)),this._pointerUpEventsRegistered=!1))}};function $O(n,t,e){let i=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(i*i+r*r)}var Ua=new _("mat-ripple-global-options"),fu=(()=>{class n{_elementRef=f(T);_animationsDisabled=Ze();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=f(M),i=f(Oe),r=f(Ua,{optional:!0}),o=f(ee);this._globalOptions=r||{},this._rippleRenderer=new za(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:I(I(I({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,I(I({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,I(I({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&z("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var GO=["input"],WO=["*"],Cg={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},qO=new _("mat-checkbox-default-options",{providedIn:"root",factory:()=>Cg}),Tt=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(Tt||{}),Eg=class{source;checked},$a=(()=>{class n{_elementRef=f(T);_changeDetectorRef=f(Ee);_ngZone=f(M);_animationsDisabled=Ze();_options=f(qO,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let i=new Eg;return i.source=this,i.checked=e,i}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new P;indeterminateChange=new P;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=Tt.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){f(Qe).load(xn);let e=f(new Wn("tabindex"),{optional:!0});this._options=this._options||Cg,this.color=this._options.color||Cg.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=f(et).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let i=e!=this._indeterminate();this._indeterminate.set(e),i&&(e?this._transitionCheckState(Tt.Indeterminate):this._transitionCheckState(this.checked?Tt.Checked:Tt.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Se(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let i=this._currentCheckState,r=this._getAnimationTargetElement();if(!(i===e||!r)&&(this._currentAnimationClass&&r.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(i,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){r.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{r.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?Tt.Checked:Tt.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,i){if(this._animationsDisabled)return"";switch(e){case Tt.Init:if(i===Tt.Checked)return this._animationClasses.uncheckedToChecked;if(i==Tt.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case Tt.Unchecked:return i===Tt.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case Tt.Checked:return i===Tt.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case Tt.Indeterminate:return i===Tt.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let i=this._inputElement;i&&(i.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-checkbox"]],viewQuery:function(i,r){if(i&1&&Ue(GO,5),i&2){let o;k(o=R())&&(r._inputElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(i,r){i&2&&(wn("id",r.id),le("tabindex",null)("aria-label",null)("aria-labelledby",null),qt(r.color?"mat-"+r.color:"mat-accent"),z("_mat-animation-noopable",r._animationsDisabled)("mdc-checkbox--disabled",r.disabled)("mat-mdc-checkbox-disabled",r.disabled)("mat-mdc-checkbox-checked",r.checked)("mat-mdc-checkbox-disabled-interactive",r.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",E],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",E],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",E],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:ht(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",E],checked:[2,"checked","checked",E],disabled:[2,"disabled","disabled",E],indeterminate:[2,"indeterminate","indeterminate",E]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[ue([{provide:au,useExisting:Ht(()=>n),multi:!0},{provide:Zo,useExisting:n,multi:!0}]),Fe],ngContentSelectors:WO,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition","for"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-internal-form-field-label","mdc-label"]],template:function(i,r){if(i&1&&(ve(),D(0,"label",3),X("click",function(s){return r._preventBubblingFromLabel(s)}),D(1,"span",4,0),fe(3,"span",5),D(4,"input",6,1),X("blur",function(){return r._onBlur()})("click",function(){return r._onInputClick()})("change",function(s){return r._onInteractionEvent(s)}),w(),fe(6,"span",7),D(7,"span",8),Et(),D(8,"svg",9),fe(9,"path",10),w(),Eo(),fe(10,"span",11),w(),fe(11,"span",12),w(),D(12,"span",13,2),O(14),w()()),i&2){let o=Gn(2);ie("labelPosition",r.labelPosition)("for",r.inputId),b(4),z("mdc-checkbox--selected",r.checked),ie("checked",r.checked)("indeterminate",r.indeterminate)("disabled",r.disabled&&!r.disabledInteractive)("id",r.inputId)("required",r.required)("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex),le("aria-label",r.ariaLabel||null)("aria-labelledby",r.ariaLabelledby)("aria-describedby",r.ariaDescribedby)("aria-checked",r.indeterminate?"mixed":null)("aria-controls",r.ariaControls)("aria-disabled",r.disabled&&r.disabledInteractive?!0:null)("aria-expanded",r.ariaExpanded)("aria-owns",r.ariaOwns)("name",r.name)("value",r.value),b(7),ie("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0)}},dependencies:[fu,RC],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})(),LC=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Ae({type:n});static \u0275inj=Te({imports:[$a,Md]})}return n})();var YO={capture:!0},QO=["focus","mousedown","mouseenter","touchstart"],xg="mat-ripple-loader-uninitialized",Ig="mat-ripple-loader-class-name",VC="mat-ripple-loader-centered",hu="mat-ripple-loader-disabled",pu=(()=>{class n{_document=f(A);_animationsDisabled=Ze();_globalRippleOptions=f(Ua,{optional:!0});_platform=f(Oe);_ngZone=f(M);_injector=f(ee);_eventCleanups;_hosts=new Map;constructor(){let e=f(je).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>QO.map(i=>e.listen(this._document,i,this._onInteraction,YO)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(xg,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(Ig))&&e.setAttribute(Ig,i.className||""),i.centered&&e.setAttribute(VC,""),i.disabled&&e.setAttribute(hu,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(hu,""):e.removeAttribute(hu)}_onInteraction=e=>{let i=$e(e);if(i instanceof HTMLElement){let r=i.closest(`[${xg}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(Ig)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Ha.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??Ha.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(hu),rippleConfig:{centered:e.hasAttribute(VC),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},c=new za(a,this._ngZone,i,this._platform,this._injector),l=!a.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:c,hasSetUpEvents:l}),e.removeAttribute(xg)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();var BC=new _("");var jC=(()=>{class n{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}isSignalErrorState(e){if(!e)return!1;let i=e().invalid(),r=e().touched();return i&&r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();var mu=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(t,e,i,r,o){this._defaultMatcher=t,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o,e?_n(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let t=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==t&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(t){if(this.formField&&t?.isSignalErrorState)return t.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,i=this.ngControl?this.ngControl.control:null;return t?.isErrorState(i,e)??!1}};var Ng=class{_box;_destroyed=new y;_resizeSubject=new y;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new Y(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),i.unsubscribe(),this._elementObservables.delete(t)}}).pipe(qe(e=>e.some(i=>i.target===t)),qc({bufferSize:1,refCount:!0}),ae(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},HC=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=f(M);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Ng(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})();var ZO=["notch"],XO=["*"],zC=["iconPrefixContainer"],UC=["textPrefixContainer"],$C=["iconSuffixContainer"],GC=["textSuffixContainer"],JO=["textField"],eP=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],tP=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function nP(n,t){n&1&&fe(0,"span",21)}function iP(n,t){if(n&1&&(D(0,"label",20),O(1,1),L(2,nP,1,0,"span",21),w()),n&2){let e=W(2);ie("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),le("for",e._control.disableAutomaticLabeling?null:e._control.id),b(2),V(!e.hideRequiredMarker&&e._control.required?2:-1)}}function rP(n,t){if(n&1&&L(0,iP,3,5,"label",20),n&2){let e=W();V(e._hasFloatingLabel()?0:-1)}}function oP(n,t){n&1&&fe(0,"div",7)}function sP(n,t){}function aP(n,t){if(n&1&&xt(0,sP,0,0,"ng-template",13),n&2){W(2);let e=Gn(1);ie("ngTemplateOutlet",e)}}function cP(n,t){if(n&1&&(D(0,"div",9),L(1,aP,1,1,null,13),w()),n&2){let e=W();ie("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),b(),V(e._forceDisplayInfixLabel()?-1:1)}}function lP(n,t){n&1&&(D(0,"div",10,2),O(2,2),w())}function dP(n,t){n&1&&(D(0,"div",11,3),O(2,3),w())}function uP(n,t){}function fP(n,t){if(n&1&&xt(0,uP,0,0,"ng-template",13),n&2){W();let e=Gn(1);ie("ngTemplateOutlet",e)}}function hP(n,t){n&1&&(D(0,"div",14,4),O(2,4),w())}function pP(n,t){n&1&&(D(0,"div",15,5),O(2,5),w())}function mP(n,t){n&1&&fe(0,"div",16)}function gP(n,t){n&1&&(D(0,"div",18),O(1,6),w())}function _P(n,t){if(n&1&&(D(0,"mat-hint",22),pe(1),w()),n&2){let e=W(2);ie("id",e._hintLabelId),b(),Nt(e.hintLabel)}}function vP(n,t){if(n&1&&(D(0,"div",19),L(1,_P,2,2,"mat-hint",22),O(2,7),fe(3,"div",23),O(4,8),w()),n&2){let e=W();b(),V(e.hintLabel?1:-1)}}var WC=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["mat-label"]]})}return n})(),yP=new _("MatError");var qC=(()=>{class n{align="start";id=f(et).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(wn("id",r.id),le("align",null),z("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),bP=new _("MatPrefix");var SP=new _("MatSuffix");var eE=new _("FloatingLabelParent"),KC=(()=>{class n{_elementRef=f(T);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=f(HC);_ngZone=f(M);_parent=f(eE);_resizeSubscription=new J;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return DP(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&z("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function DP(n){let t=n;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var YC="mdc-line-ripple--active",gu="mdc-line-ripple--deactivating",QC=(()=>{class n{_elementRef=f(T);_cleanupTransitionEnd;constructor(){let e=f(M),i=f(Pe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(gu),e.add(YC)}deactivate(){this._elementRef.nativeElement.classList.add(gu)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(gu);e.propertyName==="opacity"&&r&&i.remove(YC,gu)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),ZC=(()=>{class n{_elementRef=f(T);_ngZone=f(M);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Ue(ZO,5),i&2){let o;k(o=R())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&z("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:XO,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(ve(),It(0,"div",1),ke(1,"div",2,0),O(3),Re(),It(4,"div",3))},encapsulation:2})}return n})(),Tg=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n})}return n})();var Mg=new _("MatFormField"),wP=new _("MAT_FORM_FIELD_DEFAULT_OPTIONS"),XC="fill",CP="auto",JC="fixed",EP="translateY(-50%)",tE=(()=>{class n{_elementRef=f(T);_changeDetectorRef=f(Ee);_platform=f(Oe);_idGenerator=f(et);_ngZone=f(M);_defaults=f(wP,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Js("iconPrefixContainer");_textPrefixContainerSignal=Js("textPrefixContainer");_iconSuffixContainerSignal=Js("iconSuffixContainer");_textSuffixContainerSignal=Js("textSuffixContainer");_prefixSuffixContainers=Kt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=cD(WC);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ja(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||CP}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||XC;this._appearanceSignal.set(i)}_appearanceSignal=Se(XC);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||JC}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||JC}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new y;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ze();constructor(){let e=this._defaults,i=f(pt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ii(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Kt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Bt([void 0,void 0]),be(()=>[i.errorState,i.userAriaDescribedBy]),Wc(),qe(([[o,s],[a,c]])=>o!==a||s!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(ae(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),yt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){lm({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Kt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",u=`${s+a}px`,h=`calc(${d} * (${u} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,m=`var(--mat-mdc-form-field-label-transform, ${EP} translateX(${h}))`,g=s+a+c+l;return[m,g]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(ad(o,r._labelChild,WC,5),Ot(o,Tg,5)(o,bP,5)(o,SP,5)(o,yP,5)(o,qC,5)),i&2){ld();let s;k(s=R())&&(r._formFieldControl=s.first),k(s=R())&&(r._prefixChildren=s),k(s=R())&&(r._suffixChildren=s),k(s=R())&&(r._errorChildren=s),k(s=R())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(cd(r._iconPrefixContainerSignal,zC,5)(r._textPrefixContainerSignal,UC,5)(r._iconSuffixContainerSignal,$C,5)(r._textSuffixContainerSignal,GC,5),Ue(JO,5)(zC,5)(UC,5)($C,5)(GC,5)(KC,5)(ZC,5)(QC,5)),i&2){ld(4);let o;k(o=R())&&(r._textField=o.first),k(o=R())&&(r._iconPrefixContainer=o.first),k(o=R())&&(r._textPrefixContainer=o.first),k(o=R())&&(r._iconSuffixContainer=o.first),k(o=R())&&(r._textSuffixContainer=o.first),k(o=R())&&(r._floatingLabel=o.first),k(o=R())&&(r._notchedOutline=o.first),k(o=R())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&z("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ue([{provide:Mg,useExisting:n},{provide:eE,useExisting:n}])],ngContentSelectors:tP,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(ve(eP),xt(0,rP,1,1,"ng-template",null,0,kr),D(2,"div",6,1),X("click",function(s){return r._control.onContainerClick(s)}),L(4,oP,1,0,"div",7),D(5,"div",8),L(6,cP,2,2,"div",9),L(7,lP,3,0,"div",10),L(8,dP,3,0,"div",11),D(9,"div",12),L(10,fP,1,1,null,13),O(11),w(),L(12,hP,3,0,"div",14),L(13,pP,3,0,"div",15),w(),L(14,mP,1,0,"div",16),w(),D(15,"div",17),L(16,gP,2,0,"div",18)(17,vP,5,1,"div",19),w()),i&2){let o;b(2),z("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),b(2),V(!r._hasOutline()&&!r._control.disabled?4:-1),b(2),V(r._hasOutline()?6:-1),b(),V(r._hasIconPrefix?7:-1),b(),V(r._hasTextPrefix?8:-1),b(2),V(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),b(2),V(r._hasTextSuffix?12:-1),b(),V(r._hasIconSuffix?13:-1),b(),V(r._hasOutline()?-1:14),b(),z("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();b(),V((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[KC,ZC,ta,QC,qC],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return n})();var xP=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],IP=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function NP(n,t){n&1&&(D(0,"span",3),O(1,1),w())}function TP(n,t){n&1&&(D(0,"span",6),O(1,2),w())}var MP=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`,kP=[[["","matChipEdit",""]],[["mat-chip-avatar"],["","matChipAvatar",""]],[["","matChipEditInput",""]],"*",[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],RP=["[matChipEdit]","mat-chip-avatar, [matChipAvatar]","[matChipEditInput]","*","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function AP(n,t){n&1&&fe(0,"span",0)}function OP(n,t){n&1&&(D(0,"span",1),O(1),w())}function PP(n,t){n&1&&(D(0,"span",3),O(1,1),w())}function FP(n,t){n&1&&O(0,2)}function LP(n,t){n&1&&fe(0,"span",7)}function VP(n,t){if(n&1&&L(0,FP,1,0)(1,LP,1,0,"span",7),n&2){let e=W();V(e.contentEditInput?0:1)}}function BP(n,t){n&1&&O(0,3)}function jP(n,t){n&1&&(D(0,"span",6),O(1,4),w())}var HP=["*"];var nE=new _("MatChipAvatar"),iE=new _("MatChipTrailingIcon"),rE=new _("MatChipEdit"),oE=new _("MatChipRemove"),Ag=new _("MatChip"),sE=(()=>{class n{_elementRef=f(T);_parentChip=f(Ag);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){f(Qe).load(xn),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,r){i&2&&(le("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),z("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",E],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:ht(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return n})(),aE=(()=>{class n extends sE{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=x({type:n,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,r){i&1&&X("click",function(s){return r._handleClick(s)})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(le("tabindex",r._getTabindex()),z("mdc-evolution-chip__action--presentational",!1))},features:[ce]})}return n})();var Rg=(()=>{class n{_changeDetectorRef=f(Ee);_elementRef=f(T);_tagName=f(aD);_ngZone=f(M);_focusMonitor=f(di);_globalRippleOptions=f(Ua,{optional:!0});_document=f(A);_onFocus=new y;_onBlur=new y;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Ze();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=f(et).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new P;destroyed=new P;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=f(pu);_injector=f(ee);constructor(){let e=f(Qe);e.load(xn),e.load(Lr),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=yt(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let r=i._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,r,o){if(i&1&&Ot(o,nE,5)(o,rE,5)(o,iE,5)(o,oE,5)(o,nE,5)(o,iE,5)(o,rE,5)(o,oE,5),i&2){let s;k(s=R())&&(r.leadingIcon=s.first),k(s=R())&&(r.editIcon=s.first),k(s=R())&&(r.trailingIcon=s.first),k(s=R())&&(r.removeIcon=s.first),k(s=R())&&(r._allLeadingIcons=s),k(s=R())&&(r._allTrailingIcons=s),k(s=R())&&(r._allEditIcons=s),k(s=R())&&(r._allRemoveIcons=s)}},viewQuery:function(i,r){if(i&1&&Ue(aE,5),i&2){let o;k(o=R())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,r){i&1&&X("keydown",function(s){return r._handleKeydown(s)}),i&2&&(wn("id",r.id),le("role",r.role)("aria-label",r.ariaLabel),qt("mat-"+(r.color||"primary")),z("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",E],highlighted:[2,"highlighted","highlighted",E],disableRipple:[2,"disableRipple","disableRipple",E],disabled:[2,"disabled","disabled",E]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[ue([{provide:Ag,useExisting:n}])],ngContentSelectors:IP,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,r){i&1&&(ve(xP),fe(0,"span",0),D(1,"span",1)(2,"span",2),L(3,NP,2,0,"span",3),D(4,"span",4),O(5),fe(6,"span",5),w()()(),L(7,TP,2,0,"span",6)),i&2&&(b(3),V(r.leadingIcon?3:-1),b(4),V(r._hasTrailingIcon()?7:-1))},dependencies:[sE],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return n})();var kg=(()=>{class n{_elementRef=f(T);_document=f(A);initialize(e){this.getNativeElement().focus(),this.setValue(e)}getNativeElement(){return this._elementRef.nativeElement}setValue(e){this.getNativeElement().textContent=e,this._moveCursorToEndOfInput()}getValue(){return this.getNativeElement().textContent||""}_moveCursorToEndOfInput(){let e=this._document.createRange();e.selectNodeContents(this.getNativeElement()),e.collapse(!1);let i=window.getSelection();i.removeAllRanges(),i.addRange(e)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["span","matChipEditInput",""]],hostAttrs:["role","textbox","tabindex","-1","contenteditable","true",1,"mat-chip-edit-input"]})}return n})(),cE=(()=>{class n extends Rg{basicChipAttrName="mat-basic-chip-row";_renderer=f(Pe);_cleanupMousedown;_editStartPending=!1;editable=!1;edited=new P;defaultEditInput;contentEditInput;_alreadyFocused=!1;_isEditing=!1;constructor(){super(),this.role="row",this._onBlur.pipe(ae(this.destroyed)).subscribe(()=>{this._isEditing&&!this._editStartPending&&this._onEditFinish(),this._alreadyFocused=!1})}ngAfterViewInit(){super.ngAfterViewInit(),this._cleanupMousedown=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"mousedown",()=>{this._alreadyFocused=this._hasFocus()}))}ngOnDestroy(){super.ngOnDestroy(),this._cleanupMousedown?.()}_hasLeadingActionIcon(){return!this._isEditing&&!!this.editIcon}_hasTrailingIcon(){return!this._isEditing&&super._hasTrailingIcon()}_handleFocus(){!this._isEditing&&!this.disabled&&this.focus()}_handleKeydown(e){e.keyCode===13&&!this.disabled?this._isEditing?(e.preventDefault(),this._onEditFinish()):this.editable&&this._startEditing(e):this._isEditing?e.stopPropagation():super._handleKeydown(e)}_handleClick(e){!this.disabled&&this.editable&&!this._isEditing&&this._alreadyFocused&&(e.preventDefault(),e.stopPropagation(),this._startEditing(e))}_handleDoubleclick(e){!this.disabled&&this.editable&&this._startEditing(e)}_edit(){this._changeDetectorRef.markForCheck(),this._startEditing()}_startEditing(e){if(!this.primaryAction||this.removeIcon&&e&&this._getSourceAction(e.target)===this.removeIcon)return;let i=this.value;this._isEditing=this._editStartPending=!0,Je(()=>{this._getEditInput().initialize(i),setTimeout(()=>this._ngZone.run(()=>this._editStartPending=!1))},{injector:this._injector})}_onEditFinish(){this._isEditing=this._editStartPending=!1,this.edited.emit({chip:this,value:this._getEditInput().getValue()}),(this._document.activeElement===this._getEditInput().getNativeElement()||this._document.activeElement===this._document.body)&&this.primaryAction.focus()}_isRippleDisabled(){return super._isRippleDisabled()||this._isEditing}_getEditInput(){return this.contentEditInput||this.defaultEditInput}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-chip-row"],["","mat-chip-row",""],["mat-basic-chip-row"],["","mat-basic-chip-row",""]],contentQueries:function(i,r,o){if(i&1&&Ot(o,kg,5),i&2){let s;k(s=R())&&(r.contentEditInput=s.first)}},viewQuery:function(i,r){if(i&1&&Ue(kg,5),i&2){let o;k(o=R())&&(r.defaultEditInput=o.first)}},hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-row","mdc-evolution-chip"],hostVars:29,hostBindings:function(i,r){i&1&&X("focus",function(){return r._handleFocus()})("click",function(s){return r._hasInteractiveActions()?r._handleClick(s):null})("dblclick",function(s){return r._handleDoubleclick(s)}),i&2&&(wn("id",r.id),le("tabindex",r.disabled?null:-1)("aria-label",null)("aria-description",null)("role",r.role),z("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-chip-editing",r._isEditing)("mat-mdc-chip-editable",r.editable)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-leading-action",r._hasLeadingActionIcon())("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon()))},inputs:{editable:"editable"},outputs:{edited:"edited"},features:[ue([{provide:Rg,useExisting:n},{provide:Ag,useExisting:n}]),ce],ngContentSelectors:RP,decls:9,vars:8,consts:[[1,"mat-mdc-chip-focus-overlay"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--leading"],["role","gridcell","matChipAction","",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary",3,"disabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],["aria-hidden","true",1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],["role","gridcell",1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],["matChipEditInput",""]],template:function(i,r){i&1&&(ve(kP),L(0,AP,1,0,"span",0),L(1,OP,2,0,"span",1),D(2,"span",2),L(3,PP,2,0,"span",3),D(4,"span",4),L(5,VP,2,1)(6,BP,1,0),fe(7,"span",5),w()(),L(8,jP,2,0,"span",6)),i&2&&(V(r._isEditing?-1:0),b(),V(r._hasLeadingActionIcon()?1:-1),b(),ie("disabled",r.disabled),le("aria-description",r.ariaDescription)("aria-label",r.ariaLabel),b(),V(r.leadingIcon?3:-1),b(2),V(r._isEditing?5:6),b(3),V(r._hasTrailingIcon()?8:-1))},dependencies:[aE,kg],styles:[MP],encapsulation:2})}return n})(),lE=(()=>{class n{_elementRef=f(T);_changeDetectorRef=f(Ee);_dir=f(pt,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new y;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new ri;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Bt(null),Pn(()=>yt(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Bt(this._chips)).subscribe(e=>{let i=[];e.forEach(r=>r._getActions().forEach(o=>i.push(o))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new ga(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(ae(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(ae(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Bt(null),ae(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(ae(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),s=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),a=o||s;this._isValidIndex(r)&&a&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-chip-set"]],contentQueries:function(i,r,o){if(i&1&&Ot(o,Rg,5),i&2){let s;k(s=R())&&(r._chips=s)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(i,r){i&1&&X("keydown",function(s){return r._handleKeydown(s)}),i&2&&le("role",r.role)},inputs:{disabled:[2,"disabled","disabled",E],role:"role",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ht(e)]},ngContentSelectors:HP,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,r){i&1&&(ve(),ke(0,"div",0),O(1),Re())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return n})();var zP=["tooltip"],UP=20;var $P=new _("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=f(ee);return()=>Gr(n,{scrollThrottle:UP})}}),GP=new _("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var dE="tooltip-panel",WP={passive:!0},qP=8,KP=8,YP=24,QP=200,qr=(()=>{class n{_elementRef=f(T);_ngZone=f(M);_platform=f(Oe);_ariaDescriber=f(Nd);_focusMonitor=f(di);_dir=f(pt);_injector=f(ee);_viewContainerRef=f(ze);_mediaMatcher=f(pa);_document=f(A);_renderer=f(Pe);_animationsDisabled=Ze();_defaultOptions=f(GP,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=uE;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=ja(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=ja(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Li(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Li(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new y;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=qP}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ae(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new Ia(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(ae(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof T)return this._overlayRef;this._detach()}let i=this._injector.get(Vi).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${dE}`,o=Ma(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return o.positionChanges.pipe(ae(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Ra(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get($P)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ae(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ae(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ae(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ae(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(I(I({},r.main),o.main)),this._addOffset(I(I({},r.fallback),o.fallback))])}_addOffset(e){let i=KP,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-i:e.originY==="bottom"?e.offsetY=i:e.originX==="start"?e.offsetX=r?-i:i:e.originX==="end"&&(e.offsetX=r?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"||i=="below"?r={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={originX:"start",originY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:s}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"?r={overlayX:"center",overlayY:"bottom"}:i=="below"?r={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:s}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Je(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:r,originY:o}=e,s;if(i==="center"?this._dir&&this._dir.value==="rtl"?s=r==="end"?"left":"right":s=r==="start"?"left":"right":s=i==="bottom"&&o==="top"?"above":"below",s!==this._currentPosition){let a=this._overlayRef;if(a){let c=`${this._cssClassPrefix}-${dE}-`;a.removePanelClass(c+this._currentPosition),a.addPanelClass(c+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let i=e.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,WP))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let i=this._elementRef.nativeElement,r=i.style;(e==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!i.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Je({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!cn(e):!0;static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,r){i&2&&z("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),uE=(()=>{class n{_changeDetectorRef=f(Ee);_elementRef=f(T);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ze();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new y;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>YP&&e.width>=QP}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(e?o:r),i.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(i);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(i,r){if(i&1&&Ue(zP,7),i&2){let o;k(o=R())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,r){i&1&&X("mouseleave",function(s){return r._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,r){i&1&&(ke(0,"div",1,0),sd("animationend",function(s){return r._handleAnimationEnd(s)}),ke(2,"div",2),pe(3),Re()()),i&2&&(qt(r.tooltipClass),z("mdc-tooltip--multiline",r._isMultiline),b(3),Nt(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return n})();function fE(n){return Error(`Unable to find icon with the name "${n}"`)}function ZP(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function hE(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function pE(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var ui=class{url;svgText;options;svgElement=null;constructor(t,e,i){this.url=t,this.svgText=e,this.options=i}},gE=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new ui(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(at.HTML,r);if(!s)throw pE(r);let a=Vr(s);return this._addSvgIconConfig(e,i,new ui("",a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new ui(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(at.HTML,i);if(!o)throw pE(i);let s=Vr(o);return this._addSvgIconSetConfig(e,new ui("",s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(at.RESOURCE_URL,e);if(!i)throw hE(e);let r=this._cachedIconsByUrl.get(i);return r?vt(_u(r)):this._loadSvgIconFromConfig(new ui(e,null)).pipe(Zt(o=>this._cachedIconsByUrl.set(i,o)),be(o=>_u(o)))}getNamedSvgIcon(e,i=""){let r=mE(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):hf(fE(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?vt(_u(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(be(i=>_u(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return vt(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe($c(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(at.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),vt(null)})));return fs(o).pipe(be(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw fE(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Zt(i=>e.svgText=i),be(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?vt(null):this._fetchIcon(e).pipe(Zt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(Vr("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Vr("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw ZP();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(at.RESOURCE_URL,i);if(!s)throw hE(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(be(l=>Vr(l)),hs(()=>this._inProgressUrlFetches.delete(s)),ps());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(mE(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return XP(o)?new ui(o.url,null,o.options):new ui(o,null)}}static \u0275fac=function(i){return new(i||n)(B(Im,8),B(da),B(A,8),B(jt))};static \u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function _u(n){return n.cloneNode(!0)}function mE(n,t){return n+":"+t}function XP(n){return!!(n.url&&n.options)}var JP=["*"],eF=new _("MAT_ICON_DEFAULT_OPTIONS"),tF=new _("mat-icon-location",{providedIn:"root",factory:()=>{let n=f(A),t=n?n.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}}),_E=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],nF=_E.map(n=>`[${n}]`).join(", "),iF=/^url\(['"]?#(.*?)['"]?\)$/,vu=(()=>{class n{_elementRef=f(T);_iconRegistry=f(gE);_location=f(tF);_errorHandler=f(jt);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=J.EMPTY;constructor(){let e=f(new Wn("aria-hidden"),{optional:!0}),i=f(eF,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(nF),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)_E.forEach(s=>{let a=i[o],c=a.getAttribute(s),l=c?c.match(iF):null;if(l){let d=r.get(a);d||(d=[],r.set(a,d)),d.push({name:s,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(On(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(le("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),qt(r.color?"mat-"+r.color:""),z("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",E],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:JP,decls:1,vars:0,template:function(i,r){i&1&&(ve(),O(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return n})();var rF=["*",[["","progressIndicator",""]]],oF=["*","[progressIndicator]"];function sF(n,t){n&1&&(ke(0,"div",1),O(1,1),Re())}var aF=new _("MAT_BUTTON_CONFIG");function vE(n){return n==null?void 0:ht(n)}var Og=(()=>{class n{_elementRef=f(T);_ngZone=f(M);_animationsDisabled=Ze();_config=f(aF,{optional:!0});_focusMonitor=f(di);_cleanupClick;_renderer=f(Pe);_rippleLoader=f(pu);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=cm(!1,{transform:E});constructor(){f(Qe).load(xn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||n)};static \u0275dir=x({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(i,r){i&2&&(le("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),qt(r.color?"mat-"+r.color:""),z("mat-mdc-button-progress-indicator-shown",r.showProgress())("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",E],disabled:[2,"disabled","disabled",E],ariaDisabled:[2,"aria-disabled","ariaDisabled",E],disabledInteractive:[2,"disabledInteractive","disabledInteractive",E],tabIndex:[2,"tabIndex","tabIndex",vE],_tabindex:[2,"tabindex","_tabindex",vE],showProgress:[1,"showProgress"]}})}return n})(),Pg=(()=>{class n extends Og{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ce],ngContentSelectors:oF,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ve(rF),It(0,"span",0),O(1),L(2,sF,2,0,"div",1),It(3,"span",2)(4,"span",3)),i&2&&(b(2),V(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();var cF=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],lF=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function dF(n,t){n&1&&(ke(0,"div",2),O(1,3),Re())}var yE=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),bE=(()=>{class n extends Og{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=uF(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?yE.get(this._appearance):null,o=yE.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ce],ngContentSelectors:lF,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(ve(cF),It(0,"span",0),O(1),ke(2,"span",1),O(3,1),Re(),O(4,2),L(5,dF,2,0,"div",2),It(6,"span",3)(7,"span",4)),i&2&&(z("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab),b(5),V(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return n})();function uF(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Ga=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new y;bulk={select:t=>this._select(t),deselect:t=>this._deselect(t),setSelection:t=>this._setSelection(t)};constructor(t=!1,e,i=!0,r){this._multiple=t,this._emitChanges=i,this.compareWith=r,e&&e.length&&(t?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){return this._select(t)}deselect(...t){return this._deselect(t)}setSelection(...t){return this._setSelection(t)}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_select(t){this._verifyValueAssignment(t),t.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(t){this._verifyValueAssignment(t),t.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(t){this._verifyValueAssignment(t);let e=this.selected,i=new Set(t.map(o=>this._getConcreteValue(o)));t.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(t,i))return i;return t}else return t}};var Wa=(()=>{class n extends Ld{constructor(){super(...arguments),this.start="asc",this._allDirections=["asc","desc"],this.directions=[],this.actives=[]}ngOnInit(){super.ngOnInit()}sort(e){this.updateMultipleSorts(e),super.sort(e)}updateMultipleSorts(e){let i=this.actives.findIndex(r=>r===e.id);this.isActive(e)?this.activeDirection(e)===(e.start?e.start:this.start)?this.directions.splice(i,1,this.getNextSortDirection(e)):(this.actives.splice(i,1),this.directions.splice(i,1)):(this.actives.push(e.id),this.directions.push(e.start?e.start:this.start))}isActive(e){return this.actives.findIndex(r=>r===e.id)>-1}activeDirection(e){let i=this.actives.findIndex(r=>r===e.id);return this.directions[i]||(e.start?e.start:this.start)}getNextSortDirection(e){let i=this._allDirections.indexOf(this.activeDirection(e));return this._allDirections[(i+1)%this._allDirections.length]}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})()}static{this.\u0275dir=x({type:n,selectors:[["","matMultiSort",""]],exportAs:["matMultiSort"],features:[ce]})}}return n})(),fF=["*"];function hF(n,t){if(n&1&&(ke(0,"div",2),Mo("opacity: 0; transform: translateY(-25%)"),To("opacity: 1; transform: translateY(0)"),Et(),ke(1,"svg",3),It(2,"path",4),Re()()),n&2){let e=W();b(),z("asc",e.getSortDirection()==="asc")("desc",e.getSortDirection()==="desc")}}function pF(n,t){if(n&1&&(ke(0,"div"),pe(1),Re()),n&2){let e=W();b(),Nt(e._sortId())}}var SE=(()=>{class n extends uw{constructor(){let e=f(fw),i=f(Wa,{optional:!0}),r=f(new _("C2_SORT_HEADER_COLUMN_DEF"),{optional:!0});super(),this.start="asc",this.id="",this._intl=e,i&&(this._mySort=i),r&&(this._myColumnDef=r)}_isSorted(){return this._mySort?this._mySort.actives.findIndex(e=>e===this.id)>-1:!1}_sortId(){return this._mySort?this._mySort.actives.findIndex(e=>e===this.id)+1:!1}_renderArrow(){return!this._isDisabled()||this._isSorted()}getSortDirection(){let e=this._mySort?this._mySort.actives.findIndex(r=>r===this.id):0,i=this._mySort?this._mySort.directions[e]:"asc";return this._isSorted()?i:this.start||this._mySort&&this._mySort.start}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=j({type:n,selectors:[["","mat-multi-sort-header",""]],inputs:{id:[0,"mat-multi-sort-header","id"]},exportAs:["matMultiSortHeader"],features:[ue([{provide:Ld,useExisting:Wa}]),ce],ngContentSelectors:fF,decls:5,vars:10,consts:[[1,"mat-sort-header-container"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(i,r){i&1&&(ve(),ke(0,"div",0)(1,"div",1),O(2),Re(),L(3,hF,3,4,"div",2),L(4,pF,2,1,"div"),Re()),i&2&&(z("mat-sort-header-sorted",r._isSorted())("mat-sort-header-position-before",r.arrowPosition==="before")("mat-sort-header-ascending",r.getSortDirection()==="asc")("mat-sort-header-deascending",r.getSortDirection()==="desc"),b(3),V(r._renderArrow()&&r._isSorted()?3:-1),b(),V(r._isSorted()?4:-1))},styles:[`.mat-sort-header-container{display:flex;cursor:pointer;align-items:center}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex}.mat-sort-header-arrow svg{width:24px;height:24px;position:absolute;top:50%;left:50%;transform:translate(-50%) translateY(-50%);transform-origin:top left}.mat-sort-header-arrow svg.asc{rotate:0}.mat-sort-header-arrow svg.desc{rotate:180deg}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}
`],encapsulation:2,changeDetection:1})}}return n})(),mF=["sortIndicator"],gF=["templateRef"],_F=["settingsMenu"],vF=["*"],yF=["#menuRef",""],bF=(n,t)=>({direction:n,columnName:t}),SF=(n,t)=>t.id;function DF(n,t){if(n&1&&ct(0,10),n&2){let e=W().$implicit,i=W();ie("ngTemplateOutlet",i.sortIndicatorRef)("ngTemplateOutletContext",Jp(2,bF,e.direction,e.name))}}function wF(n,t){if(n&1&&(D(0,"div"),pe(1),D(2,"div",12),pe(3),w()()),n&2){let e=W().$implicit,i=W();b(),lt(" ",e.name,": "),b(),ie("matTooltip",i.sortToolTip),b(),lt(" ",e.direction," ")}}function CF(n,t){if(n&1){let e=Dn();D(0,"mat-chip-row",8),X("removed",function(){let r=wt(e).$implicit,o=W();return Ct(o.remove(r.id))})("click",function(){let r=wt(e).$implicit,o=W();return Ct(o.updateDirection(r.id))}),D(1,"div",9),L(2,DF,1,5,"ng-container",10)(3,wF,4,3,"div"),D(4,"mat-icon",11),X("click",function(){let r=wt(e).$implicit,o=W();return Ct(o.remove(r.id))}),pe(5,"cancel"),w()()()}if(n&2){let e=W();b(2),V(e.sortIndicatorRef?2:3)}}function EF(n,t){if(n&1){let e=Dn();D(0,"div",14)(1,"mat-icon",15),pe(2,"drag_indicator"),w(),D(3,"mat-checkbox",16),Pi("ngModelChange",function(r){let o=wt(e).$implicit;return Mr(o.isActive,r)||(o.isActive=r),Ct(r)}),X("change",function(){wt(e);let r=W(2);return Ct(r.toggle())}),pe(4),w(),Cr(),w()}if(n&2){let e=t.$implicit;b(3),Oi("ngModel",e.isActive),Er(),b(),Nt(e.name)}}function xF(n,t){if(n&1){let e=Dn();D(0,"div",13),X("cdkDropListDropped",function(r){wt(e);let o=W();return Ct(o.drop(r))}),Ri(1,EF,5,2,"div",14,Qs),w()}if(n&2){let e=W();b(),Ai(e._tableData.columns)}}var DE=(()=>{class n{constructor(){this.overlay=f(lg),this.viewContainerRef=f(ze),this.viewportRuler=f(Pt),this.sort=[],this.sortToolTip="",this.closeDialogOnChoice=!0,this.scrollStrategy=new Wo(this.viewportRuler,document),this.disableSortIndicators=!1}set tableData(e){this._tableData=e}ngOnInit(){this.sort=this.getSort(),this._tableData.sortObservable.subscribe(()=>this.sort=this.getSort()),this._tableData.onColumnsChange().subscribe(()=>this.sort=this.getSort())}openDialog(){let e=this.buttonRef.nativeElement,r=this.overlay.position().flexibleConnectedTo(e).withFlexibleDimensions(!0).withViewportMargin(10).withGrowAfterOpen(!0).withPush(!0).withPositions([{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}]);this.overlayRef=this.overlay.create({hasBackdrop:!0,backdropClass:"cdk-overlay-transparent-backdrop",panelClass:"column-overlay",positionStrategy:r,scrollStrategy:this.scrollStrategy});let o=new Ur(this.templateRef,this.viewContainerRef);this.overlayRef.attach(o),this.overlayRef.backdropClick().subscribe(()=>{this.overlayRef.dispose()})}drop(e){Ea(this._tableData.columns,e.previousIndex,e.currentIndex),this._tableData.displayedColumns=this._tableData.columns.filter(i=>i.isActive).map(i=>i.id),this._tableData.storeTableSettings()}toggle(){this._tableData.displayedColumns=this._tableData.columns.filter(e=>(e.isActive||(this.sort=this.sort.filter(i=>i.id!==e.id)),e.isActive)).map(e=>e.id),this.updateSort(),this.closeDialogOnChoice&&this.overlayRef.dispose()}dropSort(e){Ea(this.sort,e.previousIndex,e.currentIndex),this.updateSort()}getSort(){let e=[];for(let i=0;i<this._tableData.sortParams.length;i++)e.push({id:this._tableData.sortParams[i],name:this._tableData.columns.find(r=>r.id===this._tableData.sortParams[i])?.name??"",direction:this._tableData.sortDirs[i]});return e}remove(e){this.sort=this.sort.filter(i=>i.id!==e),this.updateSort()}updateDirection(e){let i=this.sort.findIndex(r=>r.id===e);i!==-1&&(this.sort[i].direction==="asc"?this.sort[i].direction="desc":this.sort[i].direction="asc"),this.updateSort()}updateSort(){this._tableData.sortParams=this.sort.map(e=>e.id),this._tableData.sortDirs=this.sort.map(e=>e.direction),this._tableData.updateSortHeaders()}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=j({type:n,selectors:[["mat-multi-sort-table-settings"]],contentQueries:function(i,r,o){if(i&1&&Ot(o,mF,5),i&2){let s;k(s=R())&&(r.sortIndicatorRef=s.first)}},viewQuery:function(i,r){if(i&1&&Ue(gF,7)(_F,5),i&2){let o;k(o=R())&&(r.templateRef=o.first),k(o=R())&&(r.buttonRef=o.first)}},inputs:{sortToolTip:"sortToolTip",closeDialogOnChoice:"closeDialogOnChoice",scrollStrategy:"scrollStrategy",tableData:"tableData",disableSortIndicators:"disableSortIndicators"},ngContentSelectors:vF,decls:11,vars:1,consts:[["settingsMenu",""],["templateRef",""],[1,"table-settings"],[1,"table-settings-sort"],["cdkDropList","","cdkDropListOrientation","horizontal",1,"drag-chip-list",3,"cdkDropListDropped","disabled"],["cdkDrag","",1,"drag-chip"],[2,"flex","1 1 auto"],[1,"table-settings-menu",3,"click"],["cdkDrag","",1,"drag-chip",3,"removed","click"],[1,"chip-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-mdc-chip-trailing-icon",3,"click"],[1,"sorting",3,"matTooltip"],["cdkDropList","",1,"column-list",3,"cdkDropListDropped"],["cdkDrag","",1,"column-item"],["cdkDragHandle",""],[3,"ngModelChange","change","ngModel"]],template:function(i,r){i&1&&(ve(),D(0,"div",2)(1,"div",3)(2,"mat-chip-set",4),X("cdkDropListDropped",function(s){return r.dropSort(s)}),Ri(3,CF,6,1,"mat-chip-row",5,SF),w()(),fe(5,"div",6),D(6,"div",7,0),X("click",function(){return r.openDialog()}),O(8,0,yF),w()(),xt(9,xF,3,0,"ng-template",null,1,kr)),i&2&&(b(2),ie("disabled",r.disableSortIndicators),b(),Ai(r.sort))},dependencies:[LC,$a,Vw,ta,qr,vu,Lw,Ow,uu,du,Ba,lE,cE],styles:[".table-settings[_ngcontent-%COMP%]{display:flex}.table-settings[_ngcontent-%COMP%]   .table-settings-menu[_ngcontent-%COMP%]{margin:8px 16px}.table-settings-sort[_ngcontent-%COMP%]{margin:auto 0}.chip-content[_ngcontent-%COMP%]{display:flex;align-items:center}.chip-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{opacity:.6}.sorting[_ngcontent-%COMP%]{display:inline-block;margin:0 6px}.sorting[_ngcontent-%COMP%]:hover{cursor:pointer}.drag-chip[_ngcontent-%COMP%]{border:solid 1px rgba(0,0,0,.12);background-color:#fff}.drag-chip[_ngcontent-%COMP%]:hover{cursor:move;background-color:#fff}.drag-chip[_ngcontent-%COMP%]:hover:after{opacity:0}.drag-chip[_ngcontent-%COMP%]:focus:after{opacity:0}.drag-chip-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .drag-chip[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.column-list[_ngcontent-%COMP%]{max-height:70vh;overflow:auto;border-radius:4px;padding:1rem;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;background-color:#fff;color:#000000de}.column-item[_ngcontent-%COMP%]{height:48px;display:flex;justify-content:flex-start;align-items:center;margin:1px;padding:0 16px 0 8px}.column-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:16px}.column-item[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{line-height:48px;color:#000000de;font-size:14px;font-weight:400}.column-item[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]:hover{cursor:grab;border-top:solid 1px rgba(0,0,0,.12);border-bottom:solid 1px rgba(0,0,0,.12)}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:var(--%NS%mat-chip-container-shape-radius, 8px);box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;overflow:hidden}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.column-item[_ngcontent-%COMP%]:last-child{border:none}.column-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .column-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"],changeDetection:1})}}return n})();var yu=class{constructor(t){this._key=t,this._columns=[],this._sortParams=[],this._sortDirs=[]}load(){let t=localStorage.getItem(this._key),e=t?JSON.parse(t):void 0;e&&(this._columns=e._columns||[],this._sortDirs=e._sortDirs||[],this._sortParams=e._sortParams||[])}save(){let t=JSON.stringify(this);localStorage.setItem(this._key,t)}get columns(){return this._columns}get sortParams(){return this._sortParams}get sortDirs(){return this._sortDirs}get key(){return this._key}set columns(t){this._columns=t}set sortParams(t){this._sortParams=t}set sortDirs(t){this._sortDirs=t}},bu=class{constructor(t,e){if(this._displayedColumns=[],this.pageSize=0,this.pageIndex=0,this._totalElements=0,this._key="",this._nextObservable=new y,this._previousObservable=new y,this._sizeObservable=new y,this._sortObservable=new y,this._sortHeadersObservable=new y,this._columns=new Lt(t.map(i=>(i.isActive===void 0&&(i.isActive=!0),i))),e){if(e.pageSizeOptions&&e.pageSizeOptions.length<1)throw Error("Array of pageSizeOptions must contain at least one entry");e.defaultSortParams&&e.defaultSortParams.map(i=>{if(this._columns.value.find(r=>r.id===i)===void 0)throw Error(`Provided sort parameter "${i}" is not a column.`)}),this._sortParams=e.defaultSortParams||[],this._sortDirs=e.defaultSortDirs||[],this._sortParams.length!==this._sortDirs.length&&(this._sortDirs=this._sortParams.map(()=>"asc")),this._totalElements=e.totalElements||0,this._pageSizeOptions=e.pageSizeOptions||[10,20,50,100],this._key=e.localStorageKey??""}else this._pageSizeOptions=[10,20,50,100],this._sortParams=[],this._sortDirs=[];this.init()}onSortEvent(){this._sortParams=this._dataSource.sort.actives,this._sortDirs=this._dataSource.sort.directions,this._clientSideSort(),this._sortObservable.next(),this.storeTableSettings()}onPaginationEvent(t){let e=this.pageSize;this.pageSize=t.pageSize,this.pageIndex=t.pageIndex,e!==this.pageSize?this._sizeObservable.next():t.previousPageIndex!==void 0&&t.previousPageIndex<t.pageIndex?this._nextObservable.next():t.previousPageIndex!==void 0&&t.previousPageIndex>t.pageIndex&&this._previousObservable.next()}updateSortHeaders(){let t=Object.assign([],this._displayedColumns);this._sortHeadersObservable.next([]),this._sortHeadersObservable.next(t),this._clientSideSort(),this._sortObservable.next(),this.storeTableSettings()}subscribeSortHeaders(){this._sortHeadersObservable.pipe(yf(0),qe(()=>this._displayedSortDirs!==this.sortDirs&&this._displayedSortParams!==this.sortParams),Zt(t=>{t.length>0&&(this._displayedSortDirs=this.sortDirs,this._displayedSortParams=this.sortParams)})).subscribe(t=>this._displayedColumns=t)}init(){if(this.subscribeSortHeaders(),this._key){let t=new yu(this._key);if(t.load(),t.columns.length>0){this.columns=this.columns.map(e=>{let i=t.columns.find(r=>r.id===e.id);return i?he(I({},i),{name:e.name??i.name}):e}),this.columns=this.orderColumnsBySettings(this.columns,t),this._sortDirs=[],this._sortParams=[];for(let[e,i]of t.sortParams.entries())this.columns.some(r=>r.id===i)&&(this._sortParams.push(i),this._sortDirs.push(t.sortDirs[e]))}}this.displayedColumns=this.columns.filter(t=>t.isActive).map(t=>t.id)}orderColumnsBySettings(t,e){let i=e.columns.map(a=>a.id),r=e.columns.map(a=>t.find(c=>c.id===a.id)).filter(a=>a!==void 0),o=[],s=0;for(let a of t)if(i.includes(a.id)){let c=r[s];c&&(o.push(c),s++)}else o.push(a);return o}_clientSideSort(){this._dataSource.orderData()}storeTableSettings(){if(this._key){let t=new yu(this._key);t.columns=this._columns.value,t.sortParams=this._sortParams,t.sortDirs=this._sortDirs,t.save()}}set totalElements(t){this._totalElements=t}get totalElements(){return this._totalElements}set displayedColumns(t){this._displayedColumns=t,this._columns.next(this._columns.value.map(e=>(e.isActive=this._displayedColumns.includes(e.id),e)))}get displayedColumns(){return this._displayedColumns}set dataSource(t){this._dataSource=t,this._sortParams.length>0&&(this._dataSource.sort.actives=this._sortParams,this._dataSource.sort.directions=this._sortDirs.map(e=>e),this.updateSortHeaders())}get dataSource(){return this._dataSource}set data(t){this._dataSource.data=t,this._clientSideSort()}set columns(t){this._columns.next(t.map(e=>(e.isActive===void 0&&(e.isActive=!0),e)))}onColumnsChange(){return this._columns}updateColumnNames(t){let e={};t.forEach(i=>e[i.id]=i.name),this._columns.next(this._columns.value.map(i=>(i.name=e[i.id]||i.name,i)))}get nextObservable(){return this._nextObservable}get previousObservable(){return this._previousObservable}get sizeObservable(){return this._sizeObservable}get sortObservable(){return this._sortObservable}get sortParams(){return this._sortParams}get sortDirs(){return this._sortDirs}get columns(){return this._columns.value}get pageSizeOptions(){return this._pageSizeOptions}set sortParams(t){this._sortParams=t,this._dataSource.sort.actives=this._sortParams}set sortDirs(t){this._sortDirs=t,this._dataSource.sort.directions=this._sortDirs.map(e=>e)}},Su=class extends _a{constructor(t,e=!1){super(),this._data=new Lt([]),this.sort=t,this.clientSideSorting=e}set data(t){this._data.next(t)}get data(){return this._data.value}connect(){return this._data}disconnect(){this._data.complete()}orderData(){this._data.next(this.sortData(this._data.value,this.sort.actives,this.sort.directions))}sortData(t,e,i){let r=Object.assign(new Array,t);return this.clientSideSorting?r.sort((o,s)=>this._sortData(o,s,e,i)):r}_sortData(t,e,i,r){return t[i[0]]>e[i[0]]?r[0]==="asc"?1:-1:t[i[0]]<e[i[0]]?r[0]==="asc"?-1:1:i.length>1?(i=i.slice(1,i.length),r=r.slice(1,r.length),this._sortData(t,e,i,r)):0}};var Du=["Maia","Asher","Olivia","Atticus","Amelia","Jack","Charlotte","Theodore","Isla","Oliver","Isabella","Jasper","Cora","Levi","Violet","Arthur","Mia","Thomas","Elizabeth"],wE=(()=>{class n{constructor(){this.users=Array.from({length:100},(e,i)=>IF(i+1))}list(e=[],i=[],r=0,o=20){let s=Object.assign([],this.users),a={users:[],page:r,pagesize:o,totalElements:s.length};if(e.length===0)a.users=s.slice(r*o,(r+1)*o);else if(e.length>0){let c=s.sort((l,d)=>this._sortData(l,d,e,i));a.users=c.slice(r*o,(r+1)*o)}return a}_sortData(e,i,r,o){return e[r[0]]>i[r[0]]?o[0]==="asc"?1:-1:e[r[0]]<i[r[0]]?o[0]==="asc"?-1:1:r.length>1?(r=r.slice(1,r.length),o=o.slice(1,o.length),this._sortData(e,i,r,o)):0}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=ne({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function IF(n){let t=Du[Math.round(Math.random()*(Du.length-1))]+" "+Du[Math.round(Math.random()*(Du.length-1))].charAt(0)+".";return{id:n,name:t,progress:Math.round(Math.random()*100)}}var NF=[[["caption"]],[["colgroup"],["col"]],"*"],TF=["caption","colgroup, col","*"];function MF(n,t){n&1&&O(0,2)}function kF(n,t){n&1&&(D(0,"thead",0),ct(1,1),w(),D(2,"tbody",2),ct(3,3)(4,4),w(),D(5,"tfoot",0),ct(6,5),w())}function RF(n,t){n&1&&ct(0,1)(1,3)(2,4)(3,5)}var CE=(()=>{class n extends Gm{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275cmp=j({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(i,r){i&2&&z("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[ue([{provide:Gm,useExisting:n},{provide:En,useExisting:n},{provide:ya,useValue:null}]),ce],ngContentSelectors:TF,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(i,r){i&1&&(ve(NF),O(0),O(1,1),L(2,MF,1,0),L(3,kF,7,0)(4,RF,4,0)),i&2&&(b(2),V(r._isServer?2:-1),b(),V(r._isNativeHtmlTable?3:4))},dependencies:[zm,Hm,$m,Um],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return n})(),EE=(()=>{class n extends Od{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=x({type:n,selectors:[["","matCellDef",""]],features:[ue([{provide:Od,useExisting:n}]),ce]})}return n})(),xE=(()=>{class n extends Pd{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=x({type:n,selectors:[["","matHeaderCellDef",""]],features:[ue([{provide:Pd,useExisting:n}]),ce]})}return n})();var IE=(()=>{class n extends Bi{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=x({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[ue([{provide:Bi,useExisting:n}]),ce]})}return n})(),NE=(()=>{class n extends sw{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=x({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[ce]})}return n})();var TE=(()=>{class n extends aw{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=x({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[ce]})}return n})();var ME=(()=>{class n extends ba{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=x({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",E]},features:[ue([{provide:ba,useExisting:n}]),ce]})}return n})();var kE=(()=>{class n extends Fd{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275dir=x({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[ue([{provide:Fd,useExisting:n}]),ce]})}return n})(),RE=(()=>{class n extends Bm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275cmp=j({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[ue([{provide:Bm,useExisting:n}]),ce],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&ct(0,0)},dependencies:[Hr],encapsulation:2,changeDetection:1})}return n})();var AE=(()=>{class n extends jm{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Me(n)))(r||n)}})();static \u0275cmp=j({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[ue([{provide:jm,useExisting:n}]),ce],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(i,r){i&1&&ct(0,0)},dependencies:[Hr],encapsulation:2,changeDetection:1})}return n})();var OE=(()=>{class n{_animationsDisabled=Ze();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&z("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return n})();var AF=["text"],OF=[[["mat-icon"]],"*"],PF=["mat-icon","*"];function FF(n,t){if(n&1&&fe(0,"mat-pseudo-checkbox",1),n&2){let e=W();ie("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function LF(n,t){if(n&1&&fe(0,"mat-pseudo-checkbox",3),n&2){let e=W();ie("disabled",e.disabled)}}function VF(n,t){if(n&1&&(D(0,"span",4),pe(1),w()),n&2){let e=W();b(),lt("(",e.group.label,")")}}var Lg=new _("MAT_OPTION_PARENT_COMPONENT"),Vg=new _("MatOptgroup");var Fg=class{source;isUserInput;constructor(t,e=!1){this.source=t,this.isUserInput=e}},wu=(()=>{class n{_element=f(T);_changeDetectorRef=f(Ee);_parent=f(Lg,{optional:!0});group=f(Vg,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=f(et).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Se(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new P;_text;_stateChanges=new y;constructor(){let e=f(Qe);e.load(xn),e.load(Lr),this._signalDisableRipple=!!this._parent&&_n(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,i){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(i)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!cn(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Fg(this,e))}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-option"]],viewQuery:function(i,r){if(i&1&&Ue(AF,7),i&2){let o;k(o=R())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(i,r){i&1&&X("click",function(){return r._selectViaInteraction()})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(wn("id",r.id),le("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),z("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",E]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:PF,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(i,r){i&1&&(ve(OF),L(0,FF,1,2,"mat-pseudo-checkbox",1),O(1),D(2,"span",2,0),O(4,1),w(),L(5,LF,1,1,"mat-pseudo-checkbox",3),L(6,VF,2,1,"span",4),fe(7,"div",5)),i&2&&(V(r.multiple?0:-1),b(5),V(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),b(),V(r.group&&r.group._inert?6:-1),b(),ie("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[OE,fu],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();function PE(n,t,e){if(e.length){let i=t.toArray(),r=e.toArray(),o=0;for(let s=0;s<n+1;s++)i[s].group&&i[s].group===r[o]&&o++;return o}return 0}function FE(n,t,e,i){return n<e?n:n+t>e+i?Math.max(0,n-i+t):e}var BF=["trigger"],jF=["panel"],HF=[[["mat-select-trigger"]],"*"],zF=["mat-select-trigger","*"];function UF(n,t){if(n&1&&(D(0,"span",4),pe(1),w()),n&2){let e=W();b(),Nt(e.placeholder)}}function $F(n,t){n&1&&O(0)}function GF(n,t){if(n&1&&(D(0,"span",11),pe(1),w()),n&2){let e=W(2);b(),Nt(e.triggerValue)}}function WF(n,t){if(n&1&&(D(0,"span",5),L(1,$F,1,0)(2,GF,2,1,"span",11),w()),n&2){let e=W();b(),V(e.customTrigger?1:2)}}function qF(n,t){if(n&1){let e=Dn();D(0,"div",12,1),X("keydown",function(r){wt(e);let o=W();return Ct(o._handleKeydown(r))}),O(2,1),w()}if(n&2){let e=W();qt(e.panelClass),z("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),le("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var KF=new _("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=f(ee);return()=>Gr(n)}}),YF=new _("MAT_SELECT_CONFIG"),QF=new _("MatSelectTrigger"),Bg=class{source;value;constructor(t,e){this.source=t,this.value=e}},LE=(()=>{class n{_viewportRuler=f(Pt);_changeDetectorRef=f(Ee);_elementRef=f(T);_dir=f(pt,{optional:!0});_idGenerator=f(et);_renderer=f(Pe);_parentFormField=f(Mg,{optional:!0});ngControl=f(Hi,{self:!0,optional:!0});_liveAnnouncer=f(km);_defaultOptions=f(YF,{optional:!0});_animationsDisabled=Ze();_popoverLocation;_initialized=new y;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let i=this.options.toArray()[e];if(i){let r=this.panel.nativeElement,o=PE(e,this.options,this.optionGroups),s=i._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=FE(s.offsetTop,s.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Bg(this,e)}_scrollStrategyFactory=f(KF);_panelOpen=!1;_compareWith=(e,i)=>e===i;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new y;_errorStateTracker;stateChanges=new y;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Se(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Va.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=pf(()=>{let e=this.options;return e?e.changes.pipe(Bt(e),Pn(()=>yt(...e.map(i=>i.onSelectionChange)))):this._initialized.pipe(Pn(()=>this.optionSelectionChanges))});openedChange=new P;_openedStream=this.openedChange.pipe(qe(e=>e),be(()=>{}));_closedStream=this.openedChange.pipe(qe(e=>!e),be(()=>{}));selectionChange=new P;valueChange=new P;constructor(){let e=f(jC),i=f(bg,{optional:!0}),r=f(Sg,{optional:!0}),o=f(new Wn("tabindex"),{optional:!0}),s=f(ka,{optional:!0}),a=f(BC,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new mu(e,a||this.ngControl,r,i,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Ga(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ae(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ae(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe(Bt(null),ae(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(this._previousControl!==void 0&&i.disabled!==null&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(On(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{i(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,i=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let i=e.keyCode,r=i===40||i===38||i===37||i===39,o=i===13||i===32,s=this._keyManager;if(!s.isTyping()&&o&&!cn(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let a=this.selected;s.onKeydown(e);let c=this.selected;c&&a!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let i=this._keyManager,r=e.keyCode,o=r===40||r===38,s=i.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(r===13||r===32)&&i.activeItem&&!cn(e))e.preventDefault(),i.activeItem._selectViaInteraction();else if(!s&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let a=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(a?c.select():c.deselect())})}else{let a=i.activeItemIndex;i.onKeydown(e),this._multiple&&o&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==a&&i.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!cn(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{let i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let i=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch(o){return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof qo?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ma(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=yt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ae(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),yt(...this.options.map(i=>i._stateChanges)).pipe(ae(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((i,r)=>this.sortComparator?this.sortComparator(i,r,e):e.indexOf(i)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let i;this.multiple?i=this.selected.map(r=>r.value):i=this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,i=e?e+" ":"";return this.ariaLabelledby?i+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(e){let i=$e(e);i&&(i.tagName==="MAT-OPTION"||i.classList.contains("cdk-overlay-backdrop")||i.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-select"]],contentQueries:function(i,r,o){if(i&1&&Ot(o,QF,5)(o,wu,5)(o,Vg,5),i&2){let s;k(s=R())&&(r.customTrigger=s.first),k(s=R())&&(r.options=s),k(s=R())&&(r.optionGroups=s)}},viewQuery:function(i,r){if(i&1&&Ue(BF,5)(jF,5)(Qd,5),i&2){let o;k(o=R())&&(r.trigger=o.first),k(o=R())&&(r.panel=o.first),k(o=R())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(i,r){i&1&&X("keydown",function(s){return r._handleKeydown(s)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),i&2&&(le("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),z("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",E],disableRipple:[2,"disableRipple","disableRipple",E],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ht(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",E],placeholder:"placeholder",required:[2,"required","required",E],multiple:[2,"multiple","multiple",E],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",E],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",ht],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",E]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ue([{provide:Tg,useExisting:n},{provide:Lg,useExisting:n}]),Fe],ngContentSelectors:zF,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(i,r){if(i&1&&(ve(HF),D(0,"div",2,0),X("click",function(){return r.open()}),D(3,"div",3),L(4,UF,2,1,"span",4)(5,WF,3,1,"span",5),w(),D(6,"div",6)(7,"div",7),Et(),D(8,"svg",8),fe(9,"path",9),w()()()(),xt(10,qF,3,16,"ng-template",10),X("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(s){return r._handleOverlayKeydown(s)})),i&2){let o=Gn(1);b(3),le("id",r._valueId),b(),V(r.empty?4:5),b(6),ie("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[qo,Qd],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return n})();function ZF(n,t){if(n&1&&(D(0,"mat-option",17),pe(1),w()),n&2){let e=t.$implicit;ie("value",e),b(),lt(" ",e," ")}}function XF(n,t){if(n&1){let e=Dn();D(0,"mat-form-field",14)(1,"mat-select",16,0),X("selectionChange",function(r){wt(e);let o=W(2);return Ct(o._changePageSize(r.value))}),Ri(3,ZF,2,2,"mat-option",17,Qs),w(),D(5,"div",18),X("click",function(){wt(e);let r=Gn(2);return Ct(r.open())}),w()()}if(n&2){let e=W(2);ie("appearance",e._formFieldAppearance)("color",e.color),b(),ie("value",e.pageSize)("disabled",e.disabled),od("aria-labelledby",e._pageSizeLabelId),ie("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),b(2),Ai(e._displayedPageSizeOptions)}}function JF(n,t){if(n&1&&(D(0,"div",15),pe(1),w()),n&2){let e=W(2);b(),Nt(e.pageSize)}}function e1(n,t){if(n&1&&(D(0,"div",3)(1,"div",13),pe(2),w(),L(3,XF,6,7,"mat-form-field",14),L(4,JF,2,1,"div",15),w()),n&2){let e=W();b(),le("id",e._pageSizeLabelId),b(),lt(" ",e._intl.itemsPerPageLabel," "),b(),V(e._displayedPageSizeOptions.length>1?3:-1),b(),V(e._displayedPageSizeOptions.length<=1?4:-1)}}function t1(n,t){if(n&1){let e=Dn();D(0,"button",19),X("click",function(){wt(e);let r=W();return Ct(r._buttonClicked(0,r._previousButtonsDisabled()))}),Et(),D(1,"svg",8),fe(2,"path",20),w()()}if(n&2){let e=W();ie("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),le("aria-label",e._intl.firstPageLabel)}}function n1(n,t){if(n&1){let e=Dn();D(0,"button",21),X("click",function(){wt(e);let r=W();return Ct(r._buttonClicked(r.getNumberOfPages()-1,r._nextButtonsDisabled()))}),Et(),D(1,"svg",8),fe(2,"path",22),w()()}if(n&2){let e=W();ie("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),le("aria-label",e._intl.lastPageLabel)}}var i1=(()=>{class n{changes=new y;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,i,r)=>{if(r==0||i==0)return`0 of ${r}`;r=Math.max(r,0);let o=e*i,s=o<r?Math.min(o+i,r):o+i;return`${o+1} \u2013 ${s} of ${r}`};static \u0275fac=function(i){return new(i||n)};static \u0275prov=$({token:n,factory:n.\u0275fac})}return n})(),r1=50;var o1=new _("MAT_PAGINATOR_DEFAULT_OPTIONS"),VE=(()=>{class n{_intl=f(i1);_changeDetectorRef=f(Ee);_formFieldAppearance;_pageSizeLabelId=f(et).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new Yn(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(i=>ht(i,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new P;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,i=f(o1,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:r,pageSizeOptions:o,hidePageSize:s,showFirstLastButtons:a}=i;r!=null&&(this._pageSize=r),o!=null&&(this._pageSizeOptions=o),s!=null&&(this.hidePageSize=s),a!=null&&(this.showFirstLastButtons=a)}this._formFieldAppearance=i?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let i=this.pageIndex*this.pageSize,r=this.pageIndex;this.pageIndex=Math.floor(i/e)||0,this.pageSize=e,this._emitPageEvent(r)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:r1),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,i)=>e-i),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let i=this.pageIndex;e!==i&&(this.pageIndex=e,this._emitPageEvent(i))}_buttonClicked(e,i){i||this._navigate(e)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",ht],length:[2,"length","length",ht],pageSize:[2,"pageSize","pageSize",ht],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",E],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",E],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",E]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(i,r){i&1&&(D(0,"div",1)(1,"div",2),L(2,e1,5,4,"div",3),D(3,"div",4)(4,"div",5),pe(5),w(),L(6,t1,3,5,"button",6),D(7,"button",7),X("click",function(){return r._buttonClicked(r.pageIndex-1,r._previousButtonsDisabled())}),Et(),D(8,"svg",8),fe(9,"path",9),w()(),Eo(),D(10,"button",10),X("click",function(){return r._buttonClicked(r.pageIndex+1,r._nextButtonsDisabled())}),Et(),D(11,"svg",8),fe(12,"path",11),w()(),L(13,n1,3,5,"button",12),w()()()),i&2&&(b(2),V(r.hidePageSize?-1:2),b(3),lt(" ",r._intl.getRangeLabel(r.pageIndex,r.pageSize,r.length)," "),b(),V(r.showFirstLastButtons?6:-1),b(),ie("matTooltip",r._intl.previousPageLabel)("matTooltipDisabled",r._previousButtonsDisabled())("disabled",r._previousButtonsDisabled())("tabindex",r._previousButtonsDisabled()?-1:null),le("aria-label",r._intl.previousPageLabel),b(3),ie("matTooltip",r._intl.nextPageLabel)("matTooltipDisabled",r._nextButtonsDisabled())("disabled",r._nextButtonsDisabled())("tabindex",r._nextButtonsDisabled()?-1:null),le("aria-label",r._intl.nextPageLabel),b(3),V(r.showFirstLastButtons?13:-1))},dependencies:[tE,LE,wu,Pg,qr],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})}return n})();var s1=(n,t)=>t.id;function a1(n,t){if(n&1&&(D(0,"mat-icon",11),pe(1),w()),n&2){let e=W().direction;ie("matTooltip","Sortierreihenfolge \xE4ndern"),b(),Nt(e==="asc"?"arrow_upward":"arrow_downward")}}function c1(n,t){if(n&1&&(pe(0),L(1,a1,2,2,"mat-icon",11)),n&2){let e=t.direction,i=t.columnName;lt(" ",i," "),b(),V(e?1:-1)}}function l1(n,t){n&1&&xt(0,c1,2,2,"ng-template",null,0,kr)}function d1(n,t){if(n&1&&(D(0,"th",14),pe(1),w()),n&2){let e=W().$implicit;ie("mat-multi-sort-header",e.id),b(),lt(" ",e.name," ")}}function u1(n,t){if(n&1&&(D(0,"td",15),pe(1),w()),n&2){let e=t.$implicit,i=W().$implicit;b(),lt(" ",e[i.id]," ")}}function f1(n,t){if(n&1&&(Nr(0,7),xt(1,d1,2,2,"th",12)(2,u1,2,1,"td",13),Tr()),n&2){let e=t.$implicit;ie("matColumnDef",e.id)}}function h1(n,t){n&1&&fe(0,"tr",16)}function p1(n,t){n&1&&fe(0,"tr",17)}var BE=(()=>{class n{constructor(){this.dummyService=f(wE),this.changeDetectorRef=f(Ee),this.CLIENT_SIDE=!0,this.CLOSE_MENU_BEHAVIOR=!0,this.TOGGLE_INDICATOR_ICONS=!0,this.table=new bu([{id:"id",name:"ID"},{id:"name",name:"Name"},{id:"progress",name:"Progess"}],{localStorageKey:"settings",defaultSortDirs:["asc","desc"],defaultSortParams:["id","name"]})}ngOnInit(){this.table.nextObservable.subscribe(()=>{this.getData()}),this.table.sortObservable.subscribe(()=>{this.getData()}),this.table.previousObservable.subscribe(()=>{this.getData()}),this.table.sizeObservable.subscribe(()=>{this.getData()}),this.changeDetectorRef.detectChanges(),this.initData()}initData(){this.table.dataSource=new Su(this.sort,this.CLIENT_SIDE),this.CLIENT_SIDE?(this.table.updateColumnNames([{id:"id",name:"Inter ID"},{id:"name",name:"Name des Mitarbeiter"},{id:"progress",name:"Fortschritt"}]),this.getOfflineData()):(this.table.updateColumnNames([{id:"id",name:"ID"},{id:"name",name:"Name"},{id:"progress",name:"Progress"}]),this.table.pageSize=10,this.getData())}getData(){if(!this.CLIENT_SIDE){let e=this.dummyService.list(this.table.sortParams,this.table.sortDirs,this.table.pageIndex,this.table.pageSize);this.table.totalElements=e.totalElements,this.table.pageIndex=e.page,this.table.pageSize=e.pagesize,this.table.data=e.users}}getOfflineData(){let e=this.dummyService.list([],[],0,25);this.table.totalElements=25,this.table.pageIndex=e.page,this.table.pageSize=e.pagesize,this.table.data=e.users}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=j({type:n,selectors:[["app-root"]],viewQuery:function(i,r){if(i&1&&Ue(Wa,5),i&2){let o;k(o=R())&&(r.sort=o.first)}},decls:23,vars:15,consts:[["sortIndicator",""],[1,"mat-elevation-z8",2,"padding","8px","margin-bottom","48px"],[3,"ngModelChange","ngModel"],[1,"mat-elevation-z8",2,"padding","8px"],["sortToolTip","Sortierreihenfolge \xE4ndern",3,"tableData","closeDialogOnChoice","disableSortIndicators"],["mat-stroked-button",""],["mat-table","","matMultiSort","",3,"matSortChange","dataSource"],[3,"matColumnDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"page","pageSize","pageIndex","pageSizeOptions","length","disabled"],[3,"matTooltip"],["mat-header-cell","",3,"mat-multi-sort-header",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","",3,"mat-multi-sort-header"],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(i,r){i&1&&(D(0,"div",1)(1,"p")(2,"mat-checkbox",2),Pi("ngModelChange",function(s){return Mr(r.CLIENT_SIDE,s)||(r.CLIENT_SIDE=s),s}),X("ngModelChange",function(){return r.initData()}),pe(3,"Use client-side sorting and data only (pagination is disabled, only 25 entries available)"),w(),Cr(),w(),D(4,"p")(5,"mat-checkbox",2),Pi("ngModelChange",function(s){return Mr(r.CLOSE_MENU_BEHAVIOR,s)||(r.CLOSE_MENU_BEHAVIOR=s),s}),pe(6,"Close settings menu on selection (if disabled it stays open, so the user can select/deselect multiple items)"),w(),Cr(),w(),D(7,"p")(8,"mat-checkbox",2),Pi("ngModelChange",function(s){return Mr(r.TOGGLE_INDICATOR_ICONS,s)||(r.TOGGLE_INDICATOR_ICONS=s),s}),pe(9," Toggle sort Indicator icons instead of text based labels "),w(),Cr(),w()(),D(10,"div",3)(11,"mat-multi-sort-table-settings",4)(12,"button",5),pe(13," Edit columns \xA0 "),D(14,"mat-icon"),pe(15,"menu"),w()(),L(16,l1,2,0),w(),D(17,"table",6),X("matSortChange",function(){return r.table.onSortEvent()}),Ri(18,f1,3,1,"ng-container",7,s1),xt(20,h1,1,0,"tr",8)(21,p1,1,0,"tr",9),w(),D(22,"mat-paginator",10),X("page",function(s){return r.table.onPaginationEvent(s)}),w()()),i&2&&(b(2),Oi("ngModel",r.CLIENT_SIDE),Er(),b(3),Oi("ngModel",r.CLOSE_MENU_BEHAVIOR),Er(),b(3),Oi("ngModel",r.TOGGLE_INDICATOR_ICONS),Er(),b(3),ie("tableData",r.table)("closeDialogOnChoice",r.CLOSE_MENU_BEHAVIOR)("disableSortIndicators",!1),b(5),V(r.TOGGLE_INDICATOR_ICONS?16:-1),b(),ie("dataSource",r.table.dataSource),b(),Ai(r.table.columns),b(2),ie("matHeaderRowDef",r.table.displayedColumns),b(),ie("matRowDefColumns",r.table.displayedColumns),b(),ie("pageSize",r.table.pageSize)("pageIndex",r.table.pageIndex)("pageSizeOptions",r.table.pageSizeOptions)("length",r.table.totalElements?r.table.totalElements:0)("disabled",r.CLIENT_SIDE))},dependencies:[$a,uu,du,Ba,DE,bE,qr,vu,CE,Wa,IE,NE,SE,xE,TE,EE,RE,ME,AE,kE,VE],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:20%}"],changeDetection:1})}}return n})();var de=(function(n){return n[n.State=0]="State",n[n.Transition=1]="Transition",n[n.Sequence=2]="Sequence",n[n.Group=3]="Group",n[n.Animate=4]="Animate",n[n.Keyframes=5]="Keyframes",n[n.Style=6]="Style",n[n.Trigger=7]="Trigger",n[n.Reference=8]="Reference",n[n.AnimateChild=9]="AnimateChild",n[n.AnimateRef=10]="AnimateRef",n[n.Query=11]="Query",n[n.Stagger=12]="Stagger",n})(de||{}),In="*";function jE(n,t=null){return{type:de.Sequence,steps:n,options:t}}function jg(n){return{type:de.Style,styles:n,offset:null}}var fi=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(t=0,e=0){this.totalTime=t+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let e=t=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Xo=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(t){this.players=t;let e=0,i=0,r=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(s=>{s.onDone(()=>{++e==o&&this._onFinish()}),s.onDestroy(()=>{++i==o&&this._onDestroy()}),s.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((s,a)=>Math.max(s,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let e=t*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,e/i.totalTime):1;i.setPosition(r)})}getPosition(){let t=this.players.reduce((e,i)=>e===null||i.totalTime>e.totalTime?i:e,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let e=t=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},qa="!";function HE(n){return new S(3e3,!1)}function m1(){return new S(3100,!1)}function g1(){return new S(3101,!1)}function _1(n){return new S(3001,!1)}function v1(n){return new S(3003,!1)}function y1(n){return new S(3004,!1)}function UE(n,t){return new S(3005,!1)}function $E(){return new S(3006,!1)}function GE(){return new S(3007,!1)}function WE(n,t){return new S(3008,!1)}function qE(n){return new S(3002,!1)}function KE(n,t,e,i,r){return new S(3010,!1)}function YE(){return new S(3011,!1)}function QE(){return new S(3012,!1)}function ZE(){return new S(3200,!1)}function XE(){return new S(3202,!1)}function JE(){return new S(3013,!1)}function e0(n){return new S(3014,!1)}function t0(n){return new S(3015,!1)}function n0(n){return new S(3016,!1)}function i0(n,t){return new S(3404,!1)}function b1(n){return new S(3502,!1)}function r0(n){return new S(3503,!1)}function o0(){return new S(3300,!1)}function s0(n){return new S(3504,!1)}function a0(n){return new S(3301,!1)}function c0(n,t){return new S(3302,!1)}function l0(n){return new S(3303,!1)}function d0(n,t){return new S(3400,!1)}function u0(n){return new S(3401,!1)}function f0(n){return new S(3402,!1)}function h0(n,t){return new S(3505,!1)}function hi(n){switch(n.length){case 0:return new fi;case 1:return n[0];default:return new Xo(n)}}function $g(n,t,e=new Map,i=new Map){let r=[],o=[],s=-1,a=null;if(t.forEach(c=>{let l=c.get("offset"),d=l==s,u=d&&a||new Map;c.forEach((p,h)=>{let m=h,g=p;if(h!=="offset")switch(m=n.normalizePropertyName(m,r),g){case qa:g=e.get(h);break;case In:g=i.get(h);break;default:g=n.normalizeStyleValue(h,m,g,r);break}u.set(m,g)}),d||o.push(u),a=u,s=l}),r.length)throw b1(r);return o}function Cu(n,t,e,i){switch(t){case"start":n.onStart(()=>i(e&&Hg(e,"start",n)));break;case"done":n.onDone(()=>i(e&&Hg(e,"done",n)));break;case"destroy":n.onDestroy(()=>i(e&&Hg(e,"destroy",n)));break}}function Hg(n,t,e){let i=e.totalTime,r=!!e.disabled,o=Eu(n.element,n.triggerName,n.fromState,n.toState,t||n.phaseName,i??n.totalTime,r),s=n._data;return s!=null&&(o._data=s),o}function Eu(n,t,e,i,r="",o=0,s){return{element:n,triggerName:t,fromState:e,toState:i,phaseName:r,totalTime:o,disabled:!!s}}function zt(n,t,e){let i=n.get(t);return i||n.set(t,i=e),i}function Gg(n){let t=n.indexOf(":"),e=n.substring(1,t),i=n.slice(t+1);return[e,i]}var S1=typeof document>"u"?null:document.documentElement;function xu(n){let t=n.parentNode||n.host||null;return t===S1?null:t}function D1(n){return n.substring(1,6)=="ebkit"}var Kr=null,zE=!1;function p0(n){Kr||(Kr=w1()||{},zE=Kr.style?"WebkitAppearance"in Kr.style:!1);let t=!0;return Kr.style&&!D1(n)&&(t=n in Kr.style,!t&&zE&&(t="Webkit"+n.charAt(0).toUpperCase()+n.slice(1)in Kr.style)),t}function w1(){return typeof document<"u"?document.body:null}function Wg(n,t){for(;t;){if(t===n)return!0;t=xu(t)}return!1}function qg(n,t,e){if(e)return Array.from(n.querySelectorAll(t));let i=n.querySelector(t);return i?[i]:[]}var C1=1e3,Kg="{{",E1="}}",Yg="ng-enter",Iu="ng-leave",Ka="ng-trigger",Ya=".ng-trigger",Qg="ng-animating",Nu=".ng-animating";function qn(n){if(typeof n=="number")return n;let t=n.match(/^(-?[\.\d]+)(m?s)/);return!t||t.length<2?0:zg(parseFloat(t[1]),t[2])}function zg(n,t){return t==="s"?n*C1:n}function Qa(n,t,e){return n.hasOwnProperty("duration")?n:I1(n,t,e)}var x1=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function I1(n,t,e){let i,r=0,o="";if(typeof n=="string"){let s=n.match(x1);if(s===null)return t.push(HE(n)),{duration:0,delay:0,easing:""};i=zg(parseFloat(s[1]),s[2]);let a=s[3];a!=null&&(r=zg(parseFloat(a),s[4]));let c=s[5];c&&(o=c)}else i=n;if(!e){let s=!1,a=t.length;i<0&&(t.push(m1()),s=!0),r<0&&(t.push(g1()),s=!0),s&&t.splice(a,0,HE(n))}return{duration:i,delay:r,easing:o}}function m0(n){return n.length?n[0]instanceof Map?n:n.map(t=>new Map(Object.entries(t))):[]}function Nn(n,t,e){t.forEach((i,r)=>{let o=Tu(r);e&&!e.has(r)&&e.set(r,n.style[o]),n.style[o]=i})}function zi(n,t){t.forEach((e,i)=>{let r=Tu(i);n.style[r]=""})}function Jo(n){return Array.isArray(n)?n.length==1?n[0]:jE(n):n}function g0(n,t,e){let i=t.params||{},r=Zg(n);r.length&&r.forEach(o=>{i.hasOwnProperty(o)||e.push(_1(o))})}var Ug=new RegExp(`${Kg}\\s*(.+?)\\s*${E1}`,"g");function Zg(n){let t=[];if(typeof n=="string"){let e;for(;e=Ug.exec(n);)t.push(e[1]);Ug.lastIndex=0}return t}function es(n,t,e){let i=`${n}`,r=i.replace(Ug,(o,s)=>{let a=t[s];return a==null&&(e.push(v1(s)),a=""),a.toString()});return r==i?n:r}var N1=/-+([a-z0-9])/g;function Tu(n){return n.replace(N1,(...t)=>t[1].toUpperCase())}function _0(n,t){return n===0||t===0}function v0(n,t,e){if(e.size&&t.length){let i=t[0],r=[];if(e.forEach((o,s)=>{i.has(s)||r.push(s),i.set(s,o)}),r.length)for(let o=1;o<t.length;o++){let s=t[o];r.forEach(a=>s.set(a,Mu(n,a)))}}return t}function Ut(n,t,e){switch(t.type){case de.Trigger:return n.visitTrigger(t,e);case de.State:return n.visitState(t,e);case de.Transition:return n.visitTransition(t,e);case de.Sequence:return n.visitSequence(t,e);case de.Group:return n.visitGroup(t,e);case de.Animate:return n.visitAnimate(t,e);case de.Keyframes:return n.visitKeyframes(t,e);case de.Style:return n.visitStyle(t,e);case de.Reference:return n.visitReference(t,e);case de.AnimateChild:return n.visitAnimateChild(t,e);case de.AnimateRef:return n.visitAnimateRef(t,e);case de.Query:return n.visitQuery(t,e);case de.Stagger:return n.visitStagger(t,e);default:throw y1(t.type)}}function Mu(n,t){return window.getComputedStyle(n)[t]}var p_=(()=>{class n{validateStyleProperty(e){return p0(e)}containsElement(e,i){return Wg(e,i)}getParentElement(e){return xu(e)}query(e,i,r){return qg(e,i,r)}computeStyle(e,i,r){return r||""}animate(e,i,r,o,s,a=[],c){return new fi(r,o)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=ne({token:n,factory:n.\u0275fac})}return n})(),Qr=class{static NOOP=new p_},Zr=class{};var T1=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),Pu=class extends Zr{normalizePropertyName(t,e){return Tu(t)}normalizeStyleValue(t,e,i,r){let o="",s=i.toString().trim();if(T1.has(e)&&i!==0&&i!=="0")if(typeof i=="number")o="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(UE(t,i))}return s+o}};var Fu="*";function M1(n,t){let e=[];return typeof n=="string"?n.split(/\s*,\s*/).forEach(i=>k1(i,e,t)):e.push(n),e}function k1(n,t,e){if(n[0]==":"){let c=R1(n,e);if(typeof c=="function"){t.push(c);return}n=c}let i=n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return e.push(t0(n)),t;let r=i[1],o=i[2],s=i[3];t.push(y0(r,s));let a=r==Fu&&s==Fu;o[0]=="<"&&!a&&t.push(y0(s,r))}function R1(n,t){switch(n){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,i)=>parseFloat(i)>parseFloat(e);case":decrement":return(e,i)=>parseFloat(i)<parseFloat(e);default:return t.push(n0(n)),"* => *"}}var ku=new Set(["true","1"]),Ru=new Set(["false","0"]);function y0(n,t){let e=ku.has(n)||Ru.has(n),i=ku.has(t)||Ru.has(t);return(r,o)=>{let s=n==Fu||n==r,a=t==Fu||t==o;return!s&&e&&typeof r=="boolean"&&(s=r?ku.has(n):Ru.has(n)),!a&&i&&typeof o=="boolean"&&(a=o?ku.has(t):Ru.has(t)),s&&a}}var T0=":self",A1=new RegExp(`s*${T0}s*,?`,"g");function M0(n,t,e,i){return new i_(n).build(t,e,i)}var b0="",i_=class{_driver;constructor(t){this._driver=t}build(t,e,i){let r=new r_(e);return this._resetContextStyleTimingState(r),Ut(this,Jo(t),r)}_resetContextStyleTimingState(t){t.currentQuerySelector=b0,t.collectedStyles=new Map,t.collectedStyles.set(b0,new Map),t.currentTime=0}visitTrigger(t,e){let i=e.queryCount=0,r=e.depCount=0,o=[],s=[];return t.name.charAt(0)=="@"&&e.errors.push($E()),t.definitions.forEach(a=>{if(this._resetContextStyleTimingState(e),a.type==de.State){let c=a,l=c.name;l.toString().split(/\s*,\s*/).forEach(d=>{c.name=d,o.push(this.visitState(c,e))}),c.name=l}else if(a.type==de.Transition){let c=this.visitTransition(a,e);i+=c.queryCount,r+=c.depCount,s.push(c)}else e.errors.push(GE())}),{type:de.Trigger,name:t.name,states:o,transitions:s,queryCount:i,depCount:r,options:null}}visitState(t,e){let i=this.visitStyle(t.styles,e),r=t.options&&t.options.params||null;if(i.containsDynamicStyles){let o=new Set,s=r||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(c=>{Zg(c).forEach(l=>{s.hasOwnProperty(l)||o.add(l)})})}),o.size&&e.errors.push(WE(t.name,[...o.values()]))}return{type:de.State,name:t.name,style:i,options:r?{params:r}:null}}visitTransition(t,e){e.queryCount=0,e.depCount=0;let i=Ut(this,Jo(t.animation),e),r=M1(t.expr,e.errors);return{type:de.Transition,matchers:r,animation:i,queryCount:e.queryCount,depCount:e.depCount,options:Yr(t.options)}}visitSequence(t,e){return{type:de.Sequence,steps:t.steps.map(i=>Ut(this,i,e)),options:Yr(t.options)}}visitGroup(t,e){let i=e.currentTime,r=0,o=t.steps.map(s=>{e.currentTime=i;let a=Ut(this,s,e);return r=Math.max(r,e.currentTime),a});return e.currentTime=r,{type:de.Group,steps:o,options:Yr(t.options)}}visitAnimate(t,e){let i=L1(t.timings,e.errors);e.currentAnimateTimings=i;let r,o=t.styles?t.styles:jg({});if(o.type==de.Keyframes)r=this.visitKeyframes(o,e);else{let s=t.styles,a=!1;if(!s){a=!0;let l={};i.easing&&(l.easing=i.easing),s=jg(l)}e.currentTime+=i.duration+i.delay;let c=this.visitStyle(s,e);c.isEmptyStep=a,r=c}return e.currentAnimateTimings=null,{type:de.Animate,timings:i,style:r,options:null}}visitStyle(t,e){let i=this._makeStyleAst(t,e);return this._validateStyleAst(i,e),i}_makeStyleAst(t,e){let i=[],r=Array.isArray(t.styles)?t.styles:[t.styles];for(let a of r)typeof a=="string"?a===In?i.push(a):e.errors.push(qE(a)):i.push(new Map(Object.entries(a)));let o=!1,s=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(s=a.get("easing"),a.delete("easing")),!o)){for(let c of a.values())if(c.toString().indexOf(Kg)>=0){o=!0;break}}}),{type:de.Style,styles:i,easing:s,offset:t.offset,containsDynamicStyles:o,options:null}}_validateStyleAst(t,e){let i=e.currentAnimateTimings,r=e.currentTime,o=e.currentTime;i&&o>0&&(o-=i.duration+i.delay),t.styles.forEach(s=>{typeof s!="string"&&s.forEach((a,c)=>{let l=e.collectedStyles.get(e.currentQuerySelector),d=l.get(c),u=!0;d&&(o!=r&&o>=d.startTime&&r<=d.endTime&&(e.errors.push(KE(c,d.startTime,d.endTime,o,r)),u=!1),o=d.startTime),u&&l.set(c,{startTime:o,endTime:r}),e.options&&g0(a,e.options,e.errors)})})}visitKeyframes(t,e){let i={type:de.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(YE()),i;let r=1,o=0,s=[],a=!1,c=!1,l=0,d=t.steps.map(C=>{let Q=this._makeStyleAst(C,e),ye=Q.offset!=null?Q.offset:F1(Q.styles),Ne=0;return ye!=null&&(o++,Ne=Q.offset=ye),c=c||Ne<0||Ne>1,a=a||Ne<l,l=Ne,s.push(Ne),Q});c&&e.errors.push(QE()),a&&e.errors.push(ZE());let u=t.steps.length,p=0;o>0&&o<u?e.errors.push(XE()):o==0&&(p=r/(u-1));let h=u-1,m=e.currentTime,g=e.currentAnimateTimings,v=g.duration;return d.forEach((C,Q)=>{let ye=p>0?Q==h?1:p*Q:s[Q],Ne=ye*v;e.currentTime=m+g.delay+Ne,g.duration=Ne,this._validateStyleAst(C,e),C.offset=ye,i.styles.push(C)}),i}visitReference(t,e){return{type:de.Reference,animation:Ut(this,Jo(t.animation),e),options:Yr(t.options)}}visitAnimateChild(t,e){return e.depCount++,{type:de.AnimateChild,options:Yr(t.options)}}visitAnimateRef(t,e){return{type:de.AnimateRef,animation:this.visitReference(t.animation,e),options:Yr(t.options)}}visitQuery(t,e){let i=e.currentQuerySelector,r=t.options||{};e.queryCount++,e.currentQuery=t;let[o,s]=O1(t.selector);e.currentQuerySelector=i.length?i+" "+o:o,zt(e.collectedStyles,e.currentQuerySelector,new Map);let a=Ut(this,Jo(t.animation),e);return e.currentQuery=null,e.currentQuerySelector=i,{type:de.Query,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:s,animation:a,originalSelector:t.selector,options:Yr(t.options)}}visitStagger(t,e){e.currentQuery||e.errors.push(JE());let i=t.timings==="full"?{duration:0,delay:0,easing:"full"}:Qa(t.timings,e.errors,!0);return{type:de.Stagger,animation:Ut(this,Jo(t.animation),e),timings:i,options:null}}};function O1(n){let t=!!n.split(/\s*,\s*/).find(e=>e==T0);return t&&(n=n.replace(A1,"")),n=n.replace(/@\*/g,Ya).replace(/@\w+/g,e=>Ya+"-"+e.slice(1)).replace(/:animating/g,Nu),[n,t]}function P1(n){return n?I({},n):null}var r_=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(t){this.errors=t}};function F1(n){if(typeof n=="string")return null;let t=null;if(Array.isArray(n))n.forEach(e=>{if(e instanceof Map&&e.has("offset")){let i=e;t=parseFloat(i.get("offset")),i.delete("offset")}});else if(n instanceof Map&&n.has("offset")){let e=n;t=parseFloat(e.get("offset")),e.delete("offset")}return t}function L1(n,t){if(n.hasOwnProperty("duration"))return n;if(typeof n=="number"){let o=Qa(n,t).duration;return Xg(o,0,"")}let e=n;if(e.split(/\s+/).some(o=>o.charAt(0)=="{"&&o.charAt(1)=="{")){let o=Xg(0,0,"");return o.dynamic=!0,o.strValue=e,o}let r=Qa(e,t);return Xg(r.duration,r.delay,r.easing)}function Yr(n){return n?(n=I({},n),n.params&&(n.params=P1(n.params))):n={},n}function Xg(n,t,e){return{duration:n,delay:t,easing:e}}function m_(n,t,e,i,r,o,s=null,a=!1){return{type:1,element:n,keyframes:t,preStyleProps:e,postStyleProps:i,duration:r,delay:o,totalTime:r+o,easing:s,subTimeline:a}}var Xa=class{_map=new Map;get(t){return this._map.get(t)||[]}append(t,e){let i=this._map.get(t);i||this._map.set(t,i=[]),i.push(...e)}has(t){return this._map.has(t)}clear(){this._map.clear()}},V1=1,B1=":enter",j1=new RegExp(B1,"g"),H1=":leave",z1=new RegExp(H1,"g");function k0(n,t,e,i,r,o=new Map,s=new Map,a,c,l=[]){return new o_().buildKeyframes(n,t,e,i,r,o,s,a,c,l)}var o_=class{buildKeyframes(t,e,i,r,o,s,a,c,l,d=[]){l=l||new Xa;let u=new s_(t,e,l,r,o,d,[]);u.options=c;let p=c.delay?qn(c.delay):0;u.currentTimeline.delayNextStep(p),u.currentTimeline.setStyles([s],null,u.errors,c),Ut(this,i,u);let h=u.timelines.filter(m=>m.containsAnimation());if(h.length&&a.size){let m;for(let g=h.length-1;g>=0;g--){let v=h[g];if(v.element===e){m=v;break}}m&&!m.allowOnlyTimelineStyles()&&m.setStyles([a],null,u.errors,c)}return h.length?h.map(m=>m.buildKeyframes()):[m_(e,[],[],[],0,p,"",!1)]}visitTrigger(t,e){}visitState(t,e){}visitTransition(t,e){}visitAnimateChild(t,e){let i=e.subInstructions.get(e.element);if(i){let r=e.createSubContext(t.options),o=e.currentTimeline.currentTime,s=this._visitSubInstructions(i,r,r.options);o!=s&&e.transformIntoNewTimeline(s)}e.previousNode=t}visitAnimateRef(t,e){let i=e.createSubContext(t.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([t.options,t.animation.options],e,i),this.visitReference(t.animation,i),e.transformIntoNewTimeline(i.currentTimeline.currentTime),e.previousNode=t}_applyAnimationRefDelays(t,e,i){for(let r of t){let o=r?.delay;if(o){let s=typeof o=="number"?o:qn(es(o,r?.params??{},e.errors));i.delayNextStep(s)}}}_visitSubInstructions(t,e,i){let o=e.currentTimeline.currentTime,s=i.duration!=null?qn(i.duration):null,a=i.delay!=null?qn(i.delay):null;return s!==0&&t.forEach(c=>{let l=e.appendInstructionToTimeline(c,s,a);o=Math.max(o,l.duration+l.delay)}),o}visitReference(t,e){e.updateOptions(t.options,!0),Ut(this,t.animation,e),e.previousNode=t}visitSequence(t,e){let i=e.subContextCount,r=e,o=t.options;if(o&&(o.params||o.delay)&&(r=e.createSubContext(o),r.transformIntoNewTimeline(),o.delay!=null)){r.previousNode.type==de.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=Lu);let s=qn(o.delay);r.delayNextStep(s)}t.steps.length&&(t.steps.forEach(s=>Ut(this,s,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),e.previousNode=t}visitGroup(t,e){let i=[],r=e.currentTimeline.currentTime,o=t.options&&t.options.delay?qn(t.options.delay):0;t.steps.forEach(s=>{let a=e.createSubContext(t.options);o&&a.delayNextStep(o),Ut(this,s,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(s=>e.currentTimeline.mergeTimelineCollectedStyles(s)),e.transformIntoNewTimeline(r),e.previousNode=t}_visitTiming(t,e){if(t.dynamic){let i=t.strValue,r=e.params?es(i,e.params,e.errors):i;return Qa(r,e.errors)}else return{duration:t.duration,delay:t.delay,easing:t.easing}}visitAnimate(t,e){let i=e.currentAnimateTimings=this._visitTiming(t.timings,e),r=e.currentTimeline;i.delay&&(e.incrementTime(i.delay),r.snapshotCurrentStyles());let o=t.style;o.type==de.Keyframes?this.visitKeyframes(o,e):(e.incrementTime(i.duration),this.visitStyle(o,e),r.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=t}visitStyle(t,e){let i=e.currentTimeline,r=e.currentAnimateTimings;!r&&i.hasCurrentStyleProperties()&&i.forwardFrame();let o=r&&r.easing||t.easing;t.isEmptyStep?i.applyEmptyStep(o):i.setStyles(t.styles,o,e.errors,e.options),e.previousNode=t}visitKeyframes(t,e){let i=e.currentAnimateTimings,r=e.currentTimeline.duration,o=i.duration,a=e.createSubContext().currentTimeline;a.easing=i.easing,t.styles.forEach(c=>{let l=c.offset||0;a.forwardTime(l*o),a.setStyles(c.styles,c.easing,e.errors,e.options),a.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(a),e.transformIntoNewTimeline(r+o),e.previousNode=t}visitQuery(t,e){let i=e.currentTimeline.currentTime,r=t.options||{},o=r.delay?qn(r.delay):0;o&&(e.previousNode.type===de.Style||i==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=Lu);let s=i,a=e.invokeQuery(t.selector,t.originalSelector,t.limit,t.includeSelf,!!r.optional,e.errors);e.currentQueryTotal=a.length;let c=null;a.forEach((l,d)=>{e.currentQueryIndex=d;let u=e.createSubContext(t.options,l);o&&u.delayNextStep(o),l===e.element&&(c=u.currentTimeline),Ut(this,t.animation,u),u.currentTimeline.applyStylesToKeyframe();let p=u.currentTimeline.currentTime;s=Math.max(s,p)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(s),c&&(e.currentTimeline.mergeTimelineCollectedStyles(c),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=t}visitStagger(t,e){let i=e.parentContext,r=e.currentTimeline,o=t.timings,s=Math.abs(o.duration),a=s*(e.currentQueryTotal-1),c=s*e.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":c=a-c;break;case"full":c=i.currentStaggerTime;break}let d=e.currentTimeline;c&&d.delayNextStep(c);let u=d.currentTime;Ut(this,t.animation,e),e.previousNode=t,i.currentStaggerTime=r.currentTime-u+(r.startTime-i.currentTimeline.startTime)}},Lu={},s_=class n{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=Lu;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(t,e,i,r,o,s,a,c){this._driver=t,this.element=e,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=o,this.errors=s,this.timelines=a,this.currentTimeline=c||new Vu(this._driver,e,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(t,e){if(!t)return;let i=t,r=this.options;i.duration!=null&&(r.duration=qn(i.duration)),i.delay!=null&&(r.delay=qn(i.delay));let o=i.params;if(o){let s=r.params;s||(s=this.options.params={}),Object.keys(o).forEach(a=>{(!e||!s.hasOwnProperty(a))&&(s[a]=es(o[a],s,this.errors))})}}_copyOptions(){let t={};if(this.options){let e=this.options.params;if(e){let i=t.params={};Object.keys(e).forEach(r=>{i[r]=e[r]})}}return t}createSubContext(t=null,e,i){let r=e||this.element,o=new n(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(t),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(t){return this.previousNode=Lu,this.currentTimeline=this.currentTimeline.fork(this.element,t),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(t,e,i){let r={duration:e??t.duration,delay:this.currentTimeline.currentTime+(i??0)+t.delay,easing:""},o=new a_(this._driver,t.element,t.keyframes,t.preStyleProps,t.postStyleProps,r,t.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(t){this.currentTimeline.forwardTime(this.currentTimeline.duration+t)}delayNextStep(t){t>0&&this.currentTimeline.delayNextStep(t)}invokeQuery(t,e,i,r,o,s){let a=[];if(r&&a.push(this.element),t.length>0){t=t.replace(j1,"."+this._enterClassName),t=t.replace(z1,"."+this._leaveClassName);let c=i!=1,l=this._driver.query(this.element,t,c);i!==0&&(l=i<0?l.slice(l.length+i,l.length):l.slice(0,i)),a.push(...l)}return!o&&a.length==0&&s.push(e0(e)),a}},Vu=class n{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(t,e,i,r){this._driver=t,this.element=e,this.startTime=i,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(t){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+t),e&&this.snapshotCurrentStyles()):this.startTime+=t}fork(t,e){return this.applyStylesToKeyframe(),new n(this._driver,t,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=V1,this._loadKeyframe()}forwardTime(t){this.applyStylesToKeyframe(),this.duration=t,this._loadKeyframe()}_updateStyle(t,e){this._localTimelineStyles.set(t,e),this._globalTimelineStyles.set(t,e),this._styleSummary.set(t,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(t){t&&this._previousKeyframe.set("easing",t);for(let[e,i]of this._globalTimelineStyles)this._backFill.set(e,i||In),this._currentKeyframe.set(e,In);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(t,e,i,r){e&&this._previousKeyframe.set("easing",e);let o=r&&r.params||{},s=U1(t,this._globalTimelineStyles);for(let[a,c]of s){let l=es(c,o,i);this._pendingStyles.set(a,l),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??In),this._updateStyle(a,l)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((t,e)=>{this._currentKeyframe.set(e,t)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((t,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,t)}))}snapshotCurrentStyles(){for(let[t,e]of this._localTimelineStyles)this._pendingStyles.set(t,e),this._updateStyle(t,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let t=[];for(let e in this._currentKeyframe)t.push(e);return t}mergeTimelineCollectedStyles(t){t._styleSummary.forEach((e,i)=>{let r=this._styleSummary.get(i);(!r||e.time>r.time)&&this._updateStyle(i,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let t=new Set,e=new Set,i=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,c)=>{let l=new Map([...this._backFill,...a]);l.forEach((d,u)=>{d===qa?t.add(u):d===In&&e.add(u)}),i||l.set("offset",c/this.duration),r.push(l)});let o=[...t.values()],s=[...e.values()];if(i){let a=r[0],c=new Map(a);a.set("offset",0),c.set("offset",1),r=[a,c]}return m_(this.element,r,o,s,this.duration,this.startTime,this.easing,!1)}},a_=class extends Vu{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(t,e,i,r,o,s,a=!1){super(t,e,s.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=a,this.timings={duration:s.duration,delay:s.delay,easing:s.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let t=this.keyframes,{delay:e,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&e){let o=[],s=i+e,a=e/s,c=new Map(t[0]);c.set("offset",0),o.push(c);let l=new Map(t[0]);l.set("offset",S0(a)),o.push(l);let d=t.length-1;for(let u=1;u<=d;u++){let p=new Map(t[u]),h=p.get("offset"),m=e+h*i;p.set("offset",S0(m/s)),o.push(p)}i=s,e=0,r="",t=o}return m_(this.element,t,this.preStyleProps,this.postStyleProps,i,e,r,!0)}};function S0(n,t=3){let e=Math.pow(10,t-1);return Math.round(n*e)/e}function U1(n,t){let e=new Map,i;return n.forEach(r=>{if(r==="*"){i??=t.keys();for(let o of i)e.set(o,In)}else for(let[o,s]of r)e.set(o,s)}),e}function D0(n,t,e,i,r,o,s,a,c,l,d,u,p){return{type:0,element:n,triggerName:t,isRemovalTransition:r,fromState:e,fromStyles:o,toState:i,toStyles:s,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:d,totalTime:u,errors:p}}var Jg={},Bu=class{_triggerName;ast;_stateStyles;constructor(t,e,i){this._triggerName=t,this.ast=e,this._stateStyles=i}match(t,e,i,r){return $1(this.ast.matchers,t,e,i,r)}buildStyles(t,e,i){let r=this._stateStyles.get("*");return t!==void 0&&(r=this._stateStyles.get(t?.toString())||r),r?r.buildStyles(e,i):new Map}build(t,e,i,r,o,s,a,c,l,d){let u=[],p=this.ast.options&&this.ast.options.params||Jg,h=a&&a.params||Jg,m=this.buildStyles(i,h,u),g=c&&c.params||Jg,v=this.buildStyles(r,g,u),C=new Set,Q=new Map,ye=new Map,Ne=r==="void",ot={params:R0(g,p),delay:this.ast.options?.delay},mt=d?[]:k0(t,e,this.ast.animation,o,s,m,v,ot,l,u),Ge=0;return mt.forEach(We=>{Ge=Math.max(We.duration+We.delay,Ge)}),u.length?D0(e,this._triggerName,i,r,Ne,m,v,[],[],Q,ye,Ge,u):(mt.forEach(We=>{let gt=We.element,pi=zt(Q,gt,new Set);We.preStyleProps.forEach(fn=>pi.add(fn));let Xr=zt(ye,gt,new Set);We.postStyleProps.forEach(fn=>Xr.add(fn)),gt!==e&&C.add(gt)}),D0(e,this._triggerName,i,r,Ne,m,v,mt,[...C.values()],Q,ye,Ge))}};function $1(n,t,e,i,r){return n.some(o=>o(t,e,i,r))}function R0(n,t){let e=I({},t);return Object.entries(n).forEach(([i,r])=>{r!=null&&(e[i]=r)}),e}var c_=class{styles;defaultParams;normalizer;constructor(t,e,i){this.styles=t,this.defaultParams=e,this.normalizer=i}buildStyles(t,e){let i=new Map,r=R0(t,this.defaultParams);return this.styles.styles.forEach(o=>{typeof o!="string"&&o.forEach((s,a)=>{s&&(s=es(s,r,e));let c=this.normalizer.normalizePropertyName(a,e);s=this.normalizer.normalizeStyleValue(a,c,s,e),i.set(a,s)})}),i}};function G1(n,t,e){return new l_(n,t,e)}var l_=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(t,e,i){this.name=t,this.ast=e,this._normalizer=i,e.states.forEach(r=>{let o=r.options&&r.options.params||{};this.states.set(r.name,new c_(r.style,o,i))}),w0(this.states,"true","1"),w0(this.states,"false","0"),e.transitions.forEach(r=>{this.transitionFactories.push(new Bu(t,r,this.states))}),this.fallbackTransition=W1(t,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(t,e,i,r){return this.transitionFactories.find(s=>s.match(t,e,i,r))||null}matchStyles(t,e,i){return this.fallbackTransition.buildStyles(t,e,i)}};function W1(n,t,e){let i=[(s,a)=>!0],r={type:de.Sequence,steps:[],options:null},o={type:de.Transition,animation:r,matchers:i,options:null,queryCount:0,depCount:0};return new Bu(n,o,t)}function w0(n,t,e){n.has(t)?n.has(e)||n.set(e,n.get(t)):n.has(e)&&n.set(t,n.get(e))}var q1=new Xa,d_=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(t,e,i){this.bodyNode=t,this._driver=e,this._normalizer=i}register(t,e){let i=[],r=[],o=M0(this._driver,e,i,r);if(i.length)throw r0(i);this._animations.set(t,o)}_buildPlayer(t,e,i){let r=t.element,o=$g(this._normalizer,t.keyframes,e,i);return this._driver.animate(r,o,t.duration,t.delay,t.easing,[],!0)}create(t,e,i={}){let r=[],o=this._animations.get(t),s,a=new Map;if(o?(s=k0(this._driver,e,o,Yg,Iu,new Map,new Map,i,q1,r),s.forEach(d=>{let u=zt(a,d.element,new Map);d.postStyleProps.forEach(p=>u.set(p,null))})):(r.push(o0()),s=[]),r.length)throw s0(r);a.forEach((d,u)=>{d.forEach((p,h)=>{d.set(h,this._driver.computeStyle(u,h,In))})});let c=s.map(d=>{let u=a.get(d.element);return this._buildPlayer(d,new Map,u)}),l=hi(c);return this._playersById.set(t,l),l.onDestroy(()=>this.destroy(t)),this.players.push(l),l}destroy(t){let e=this._getPlayer(t);e.destroy(),this._playersById.delete(t);let i=this.players.indexOf(e);i>=0&&this.players.splice(i,1)}_getPlayer(t){let e=this._playersById.get(t);if(!e)throw a0(t);return e}listen(t,e,i,r){let o=Eu(e,"","","");return Cu(this._getPlayer(t),i,o,r),()=>{}}command(t,e,i,r){if(i=="register"){this.register(t,r[0]);return}if(i=="create"){let s=r[0]||{};this.create(t,e,s);return}let o=this._getPlayer(t);switch(i){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(t);break}}},C0="ng-animate-queued",K1=".ng-animate-queued",e_="ng-animate-disabled",Y1=".ng-animate-disabled",Q1="ng-star-inserted",Z1=".ng-star-inserted",X1=[],A0={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},J1={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},Tn="__ng_removed",Ja=class{namespaceId;value;options;get params(){return this.options.params}constructor(t,e=""){this.namespaceId=e;let i=t&&t.hasOwnProperty("value"),r=i?t.value:t;if(this.value=tL(r),i){let o=t,{value:s}=o,a=Gu(o,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(t){let e=t.params;if(e){let i=this.options.params;Object.keys(e).forEach(r=>{i[r]==null&&(i[r]=e[r])})}}},Za="void",t_=new Ja(Za),u_=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(t,e,i){this.id=t,this.hostElement=e,this._engine=i,this._hostClassName="ng-tns-"+t,un(e,this._hostClassName)}listen(t,e,i,r){if(!this._triggers.has(e))throw c0(i,e);if(i==null||i.length==0)throw l0(e);if(!nL(i))throw d0(i,e);let o=zt(this._elementListeners,t,[]),s={name:e,phase:i,callback:r};o.push(s);let a=zt(this._engine.statesByElement,t,new Map);return a.has(e)||(un(t,Ka),un(t,Ka+"-"+e),a.set(e,t_)),()=>{this._engine.afterFlush(()=>{let c=o.indexOf(s);c>=0&&o.splice(c,1),this._triggers.has(e)||a.delete(e)})}}register(t,e){return this._triggers.has(t)?!1:(this._triggers.set(t,e),!0)}_getTrigger(t){let e=this._triggers.get(t);if(!e)throw u0(t);return e}trigger(t,e,i,r=!0){let o=this._getTrigger(e),s=new ec(this.id,e,t),a=this._engine.statesByElement.get(t);a||(un(t,Ka),un(t,Ka+"-"+e),this._engine.statesByElement.set(t,a=new Map));let c=a.get(e),l=new Ja(i,this.id);if(!(i&&i.hasOwnProperty("value"))&&c&&l.absorbOptions(c.options),a.set(e,l),c||(c=t_),!(l.value===Za)&&c.value===l.value){if(!oL(c.params,l.params)){let g=[],v=o.matchStyles(c.value,c.params,g),C=o.matchStyles(l.value,l.params,g);g.length?this._engine.reportError(g):this._engine.afterFlush(()=>{zi(t,v),Nn(t,C)})}return}let p=zt(this._engine.playersByElement,t,[]);p.forEach(g=>{g.namespaceId==this.id&&g.triggerName==e&&g.queued&&g.destroy()});let h=o.matchTransition(c.value,l.value,t,l.params),m=!1;if(!h){if(!r)return;h=o.fallbackTransition,m=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:t,triggerName:e,transition:h,fromState:c,toState:l,player:s,isFallbackTransition:m}),m||(un(t,C0),s.onStart(()=>{ts(t,C0)})),s.onDone(()=>{let g=this.players.indexOf(s);g>=0&&this.players.splice(g,1);let v=this._engine.playersByElement.get(t);if(v){let C=v.indexOf(s);C>=0&&v.splice(C,1)}}),this.players.push(s),p.push(s),s}deregister(t){this._triggers.delete(t),this._engine.statesByElement.forEach(e=>e.delete(t)),this._elementListeners.forEach((e,i)=>{this._elementListeners.set(i,e.filter(r=>r.name!=t))})}clearElementCache(t){this._engine.statesByElement.delete(t),this._elementListeners.delete(t);let e=this._engine.playersByElement.get(t);e&&(e.forEach(i=>i.destroy()),this._engine.playersByElement.delete(t))}_signalRemovalForInnerTriggers(t,e){let i=this._engine.driver.query(t,Ya,!0);i.forEach(r=>{if(r[Tn])return;let o=this._engine.fetchNamespacesByElement(r);o.size?o.forEach(s=>s.triggerLeaveAnimation(r,e,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(t,e,i,r){let o=this._engine.statesByElement.get(t),s=new Map;if(o){let a=[];if(o.forEach((c,l)=>{if(s.set(l,c.value),this._triggers.has(l)){let d=this.trigger(t,l,Za,r);d&&a.push(d)}}),a.length)return this._engine.markElementAsRemoved(this.id,t,!0,e,s),i&&hi(a).onDone(()=>this._engine.processLeaveNode(t)),!0}return!1}prepareLeaveAnimationListeners(t){let e=this._elementListeners.get(t),i=this._engine.statesByElement.get(t);if(e&&i){let r=new Set;e.forEach(o=>{let s=o.name;if(r.has(s))return;r.add(s);let c=this._triggers.get(s).fallbackTransition,l=i.get(s)||t_,d=new Ja(Za),u=new ec(this.id,s,t);this._engine.totalQueuedPlayers++,this._queue.push({element:t,triggerName:s,transition:c,fromState:l,toState:d,player:u,isFallbackTransition:!0})})}}removeNode(t,e){let i=this._engine;if(t.childElementCount&&this._signalRemovalForInnerTriggers(t,e),this.triggerLeaveAnimation(t,e,!0))return;let r=!1;if(i.totalAnimations){let o=i.players.length?i.playersByQueriedElement.get(t):[];if(o&&o.length)r=!0;else{let s=t;for(;s=s.parentNode;)if(i.statesByElement.get(s)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(t),r)i.markElementAsRemoved(this.id,t,!1,e);else{let o=t[Tn];(!o||o===A0)&&(i.afterFlush(()=>this.clearElementCache(t)),i.destroyInnerAnimations(t),i._onRemovalComplete(t,e))}}insertNode(t,e){un(t,this._hostClassName)}drainQueuedTransitions(t){let e=[];return this._queue.forEach(i=>{let r=i.player;if(r.destroyed)return;let o=i.element,s=this._elementListeners.get(o);s&&s.forEach(a=>{if(a.name==i.triggerName){let c=Eu(o,i.triggerName,i.fromState.value,i.toState.value);c._data=t,Cu(i.player,a.phase,c,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):e.push(i)}),this._queue=[],e.sort((i,r)=>{let o=i.transition.ast.depCount,s=r.transition.ast.depCount;return o==0||s==0?o-s:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(t){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,t)}},f_=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(t,e)=>{};_onRemovalComplete(t,e){this.onRemovalComplete(t,e)}constructor(t,e,i){this.bodyNode=t,this.driver=e,this._normalizer=i}get queuedPlayers(){let t=[];return this._namespaceList.forEach(e=>{e.players.forEach(i=>{i.queued&&t.push(i)})}),t}createNamespace(t,e){let i=new u_(t,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(i,e):(this.newHostElements.set(e,i),this.collectEnterElement(e)),this._namespaceLookup[t]=i}_balanceNamespaceList(t,e){let i=this._namespaceList,r=this.namespacesByHostElement;if(i.length-1>=0){let s=!1,a=this.driver.getParentElement(e);for(;a;){let c=r.get(a);if(c){let l=i.indexOf(c);i.splice(l+1,0,t),s=!0;break}a=this.driver.getParentElement(a)}s||i.unshift(t)}else i.push(t);return r.set(e,t),t}register(t,e){let i=this._namespaceLookup[t];return i||(i=this.createNamespace(t,e)),i}registerTrigger(t,e,i){let r=this._namespaceLookup[t];r&&r.register(e,i)&&this.totalAnimations++}destroy(t,e){t&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(t);this.namespacesByHostElement.delete(i.hostElement);let r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1),i.destroy(e),delete this._namespaceLookup[t]}))}_fetchNamespace(t){return this._namespaceLookup[t]}fetchNamespacesByElement(t){let e=new Set,i=this.statesByElement.get(t);if(i){for(let r of i.values())if(r.namespaceId){let o=this._fetchNamespace(r.namespaceId);o&&e.add(o)}}return e}trigger(t,e,i,r){if(Au(e)){let o=this._fetchNamespace(t);if(o)return o.trigger(e,i,r),!0}return!1}insertNode(t,e,i,r){if(!Au(e))return;let o=e[Tn];if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;let s=this.collectedLeaveElements.indexOf(e);s>=0&&this.collectedLeaveElements.splice(s,1)}if(t){let s=this._fetchNamespace(t);s&&s.insertNode(e,i)}r&&this.collectEnterElement(e)}collectEnterElement(t){this.collectedEnterElements.push(t)}markElementAsDisabled(t,e){e?this.disabledNodes.has(t)||(this.disabledNodes.add(t),un(t,e_)):this.disabledNodes.has(t)&&(this.disabledNodes.delete(t),ts(t,e_))}removeNode(t,e,i){if(Au(e)){let r=t?this._fetchNamespace(t):null;r?r.removeNode(e,i):this.markElementAsRemoved(t,e,!1,i);let o=this.namespacesByHostElement.get(e);o&&o.id!==t&&o.removeNode(e,i)}else this._onRemovalComplete(e,i)}markElementAsRemoved(t,e,i,r,o){this.collectedLeaveElements.push(e),e[Tn]={namespaceId:t,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:o}}listen(t,e,i,r,o){return Au(e)?this._fetchNamespace(t).listen(e,i,r,o):()=>{}}_buildInstruction(t,e,i,r,o){return t.transition.build(this.driver,t.element,t.fromState.value,t.toState.value,i,r,t.fromState.options,t.toState.options,e,o)}destroyInnerAnimations(t){let e=this.driver.query(t,Ya,!0);e.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(t,Nu,!0),e.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(t){let e=this.playersByElement.get(t);e&&e.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(t){let e=this.playersByQueriedElement.get(t);e&&e.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(t=>{if(this.players.length)return hi(this.players).onDone(()=>t());t()})}processLeaveNode(t){let e=t[Tn];if(e&&e.setForRemoval){if(t[Tn]=A0,e.namespaceId){this.destroyInnerAnimations(t);let i=this._fetchNamespace(e.namespaceId);i&&i.clearElementCache(t)}this._onRemovalComplete(t,e.setForRemoval)}t.classList?.contains(e_)&&this.markElementAsDisabled(t,!1),this.driver.query(t,Y1,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(t=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let r=this.collectedEnterElements[i];un(r,Q1)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{e=this._flushAnimations(i,t)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let r=this.collectedLeaveElements[i];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],e.length?hi(e).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(t){throw f0(t)}_flushAnimations(t,e){let i=new Xa,r=[],o=new Map,s=[],a=new Map,c=new Map,l=new Map,d=new Set;this.disabledNodes.forEach(N=>{d.add(N);let H=this.driver.query(N,K1,!0);for(let q=0;q<H.length;q++)d.add(H[q])});let u=this.bodyNode,p=Array.from(this.statesByElement.keys()),h=I0(p,this.collectedEnterElements),m=new Map,g=0;h.forEach((N,H)=>{let q=Yg+g++;m.set(H,q),N.forEach(me=>un(me,q))});let v=[],C=new Set,Q=new Set;for(let N=0;N<this.collectedLeaveElements.length;N++){let H=this.collectedLeaveElements[N],q=H[Tn];q&&q.setForRemoval&&(v.push(H),C.add(H),q.hasAnimation?this.driver.query(H,Z1,!0).forEach(me=>C.add(me)):Q.add(H))}let ye=new Map,Ne=I0(p,Array.from(C));Ne.forEach((N,H)=>{let q=Iu+g++;ye.set(H,q),N.forEach(me=>un(me,q))}),t.push(()=>{h.forEach((N,H)=>{let q=m.get(H);N.forEach(me=>ts(me,q))}),Ne.forEach((N,H)=>{let q=ye.get(H);N.forEach(me=>ts(me,q))}),v.forEach(N=>{this.processLeaveNode(N)})});let ot=[],mt=[];for(let N=this._namespaceList.length-1;N>=0;N--)this._namespaceList[N].drainQueuedTransitions(e).forEach(q=>{let me=q.player,st=q.element;if(ot.push(me),this.collectedEnterElements.length){let _t=st[Tn];if(_t&&_t.setForMove){if(_t.previousTriggersValues&&_t.previousTriggersValues.has(q.triggerName)){let Ui=_t.previousTriggersValues.get(q.triggerName),Yt=this.statesByElement.get(q.element);if(Yt&&Yt.has(q.triggerName)){let tc=Yt.get(q.triggerName);tc.value=Ui,Yt.set(q.triggerName,tc)}}me.destroy();return}}let Mn=!u||!this.driver.containsElement(u,st),$t=ye.get(st),mi=m.get(st),Le=this._buildInstruction(q,i,mi,$t,Mn);if(Le.errors&&Le.errors.length){mt.push(Le);return}if(Mn){me.onStart(()=>zi(st,Le.fromStyles)),me.onDestroy(()=>Nn(st,Le.toStyles)),r.push(me);return}if(q.isFallbackTransition){me.onStart(()=>zi(st,Le.fromStyles)),me.onDestroy(()=>Nn(st,Le.toStyles)),r.push(me);return}let v_=[];Le.timelines.forEach(_t=>{_t.stretchStartingKeyframe=!0,this.disabledNodes.has(_t.element)||v_.push(_t)}),Le.timelines=v_,i.append(st,Le.timelines);let V0={instruction:Le,player:me,element:st};s.push(V0),Le.queriedElements.forEach(_t=>zt(a,_t,[]).push(me)),Le.preStyleProps.forEach((_t,Ui)=>{if(_t.size){let Yt=c.get(Ui);Yt||c.set(Ui,Yt=new Set),_t.forEach((tc,$u)=>Yt.add($u))}}),Le.postStyleProps.forEach((_t,Ui)=>{let Yt=l.get(Ui);Yt||l.set(Ui,Yt=new Set),_t.forEach((tc,$u)=>Yt.add($u))})});if(mt.length){let N=[];mt.forEach(H=>{N.push(h0(H.triggerName,H.errors))}),ot.forEach(H=>H.destroy()),this.reportError(N)}let Ge=new Map,We=new Map;s.forEach(N=>{let H=N.element;i.has(H)&&(We.set(H,H),this._beforeAnimationBuild(N.player.namespaceId,N.instruction,Ge))}),r.forEach(N=>{let H=N.element;this._getPreviousPlayers(H,!1,N.namespaceId,N.triggerName,null).forEach(me=>{zt(Ge,H,[]).push(me),me.destroy()})});let gt=v.filter(N=>N0(N,c,l)),pi=new Map;x0(pi,this.driver,Q,l,In).forEach(N=>{N0(N,c,l)&&gt.push(N)});let fn=new Map;h.forEach((N,H)=>{x0(fn,this.driver,new Set(N),c,qa)}),gt.forEach(N=>{let H=pi.get(N),q=fn.get(N);pi.set(N,new Map([...H?.entries()??[],...q?.entries()??[]]))});let Jr=[],g_=[],__={};s.forEach(N=>{let{element:H,player:q,instruction:me}=N;if(i.has(H)){if(d.has(H)){q.onDestroy(()=>Nn(H,me.toStyles)),q.disabled=!0,q.overrideTotalTime(me.totalTime),r.push(q);return}let st=__;if(We.size>1){let $t=H,mi=[];for(;$t=$t.parentNode;){let Le=We.get($t);if(Le){st=Le;break}mi.push($t)}mi.forEach(Le=>We.set(Le,st))}let Mn=this._buildAnimation(q.namespaceId,me,Ge,o,fn,pi);if(q.setRealPlayer(Mn),st===__)Jr.push(q);else{let $t=this.playersByElement.get(st);$t&&$t.length&&(q.parentPlayer=hi($t)),r.push(q)}}else zi(H,me.fromStyles),q.onDestroy(()=>Nn(H,me.toStyles)),g_.push(q),d.has(H)&&r.push(q)}),g_.forEach(N=>{let H=o.get(N.element);if(H&&H.length){let q=hi(H);N.setRealPlayer(q)}}),r.forEach(N=>{N.parentPlayer?N.syncPlayerEvents(N.parentPlayer):N.destroy()});for(let N=0;N<v.length;N++){let H=v[N],q=H[Tn];if(ts(H,Iu),q&&q.hasAnimation)continue;let me=[];if(a.size){let Mn=a.get(H);Mn&&Mn.length&&me.push(...Mn);let $t=this.driver.query(H,Nu,!0);for(let mi=0;mi<$t.length;mi++){let Le=a.get($t[mi]);Le&&Le.length&&me.push(...Le)}}let st=me.filter(Mn=>!Mn.destroyed);st.length?iL(this,H,st):this.processLeaveNode(H)}return v.length=0,Jr.forEach(N=>{this.players.push(N),N.onDone(()=>{N.destroy();let H=this.players.indexOf(N);this.players.splice(H,1)}),N.play()}),Jr}afterFlush(t){this._flushFns.push(t)}afterFlushAnimationsDone(t){this._whenQuietFns.push(t)}_getPreviousPlayers(t,e,i,r,o){let s=[];if(e){let a=this.playersByQueriedElement.get(t);a&&(s=a)}else{let a=this.playersByElement.get(t);if(a){let c=!o||o==Za;a.forEach(l=>{l.queued||!c&&l.triggerName!=r||s.push(l)})}}return(i||r)&&(s=s.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),s}_beforeAnimationBuild(t,e,i){let r=e.triggerName,o=e.element,s=e.isRemovalTransition?void 0:t,a=e.isRemovalTransition?void 0:r;for(let c of e.timelines){let l=c.element,d=l!==o,u=zt(i,l,[]);this._getPreviousPlayers(l,d,s,a,e.toState).forEach(h=>{let m=h.getRealPlayer();m.beforeDestroy&&m.beforeDestroy(),h.destroy(),u.push(h)})}zi(o,e.fromStyles)}_buildAnimation(t,e,i,r,o,s){let a=e.triggerName,c=e.element,l=[],d=new Set,u=new Set,p=e.timelines.map(m=>{let g=m.element;d.add(g);let v=g[Tn];if(v&&v.removedBeforeQueried)return new fi(m.duration,m.delay);let C=g!==c,Q=rL((i.get(g)||X1).map(Ge=>Ge.getRealPlayer())).filter(Ge=>{let We=Ge;return We.element?We.element===g:!1}),ye=o.get(g),Ne=s.get(g),ot=$g(this._normalizer,m.keyframes,ye,Ne),mt=this._buildPlayer(m,ot,Q);if(m.subTimeline&&r&&u.add(g),C){let Ge=new ec(t,a,g);Ge.setRealPlayer(mt),l.push(Ge)}return mt});l.forEach(m=>{zt(this.playersByQueriedElement,m.element,[]).push(m),m.onDone(()=>eL(this.playersByQueriedElement,m.element,m))}),d.forEach(m=>un(m,Qg));let h=hi(p);return h.onDestroy(()=>{d.forEach(m=>ts(m,Qg)),Nn(c,e.toStyles)}),u.forEach(m=>{zt(r,m,[]).push(h)}),h}_buildPlayer(t,e,i){return e.length>0?this.driver.animate(t.element,e,t.duration,t.delay,t.easing,i):new fi(t.duration,t.delay)}},ec=class{namespaceId;triggerName;element;_player=new fi;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(t,e,i){this.namespaceId=t,this.triggerName=e,this.element=i}setRealPlayer(t){this._containsRealPlayer||(this._player=t,this._queuedCallbacks.forEach((e,i)=>{e.forEach(r=>Cu(t,i,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(t.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(t){this.totalTime=t}syncPlayerEvents(t){let e=this._player;e.triggerCallback&&t.onStart(()=>e.triggerCallback("start")),t.onDone(()=>this.finish()),t.onDestroy(()=>this.destroy())}_queueEvent(t,e){zt(this._queuedCallbacks,t,[]).push(e)}onDone(t){this.queued&&this._queueEvent("done",t),this._player.onDone(t)}onStart(t){this.queued&&this._queueEvent("start",t),this._player.onStart(t)}onDestroy(t){this.queued&&this._queueEvent("destroy",t),this._player.onDestroy(t)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(t){this.queued||this._player.setPosition(t)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(t){let e=this._player;e.triggerCallback&&e.triggerCallback(t)}};function eL(n,t,e){let i=n.get(t);if(i){if(i.length){let r=i.indexOf(e);i.splice(r,1)}i.length==0&&n.delete(t)}return i}function tL(n){return n??null}function Au(n){return n&&n.nodeType===1}function nL(n){return n=="start"||n=="done"}function E0(n,t){let e=n.style.display;return n.style.display=t??"none",e}function x0(n,t,e,i,r){let o=[];e.forEach(c=>o.push(E0(c)));let s=[];i.forEach((c,l)=>{let d=new Map;c.forEach(u=>{let p=t.computeStyle(l,u,r);d.set(u,p),(!p||p.length==0)&&(l[Tn]=J1,s.push(l))}),n.set(l,d)});let a=0;return e.forEach(c=>E0(c,o[a++])),s}function I0(n,t){let e=new Map;if(n.forEach(a=>e.set(a,[])),t.length==0)return e;let i=1,r=new Set(t),o=new Map;function s(a){if(!a)return i;let c=o.get(a);if(c)return c;let l=a.parentNode;return e.has(l)?c=l:r.has(l)?c=i:c=s(l),o.set(a,c),c}return t.forEach(a=>{let c=s(a);c!==i&&e.get(c).push(a)}),e}function un(n,t){n.classList?.add(t)}function ts(n,t){n.classList?.remove(t)}function iL(n,t,e){hi(e).onDone(()=>n.processLeaveNode(t))}function rL(n){let t=[];return O0(n,t),t}function O0(n,t){for(let e=0;e<n.length;e++){let i=n[e];i instanceof Xo?O0(i.players,t):t.push(i)}}function oL(n,t){let e=Object.keys(n),i=Object.keys(t);if(e.length!=i.length)return!1;for(let r=0;r<e.length;r++){let o=e[r];if(!t.hasOwnProperty(o)||n[o]!==t[o])return!1}return!0}function N0(n,t,e){let i=e.get(n);if(!i)return!1;let r=t.get(n);return r?i.forEach(o=>r.add(o)):t.set(n,i),e.delete(n),!0}var ns=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(t,e)=>{};constructor(t,e,i){this._driver=e,this._normalizer=i,this._transitionEngine=new f_(t.body,e,i),this._timelineEngine=new d_(t.body,e,i),this._transitionEngine.onRemovalComplete=(r,o)=>this.onRemovalComplete(r,o)}registerTrigger(t,e,i,r,o){let s=t+"-"+r,a=this._triggerCache[s];if(!a){let c=[],l=[],d=M0(this._driver,o,c,l);if(c.length)throw i0(r,c);a=G1(r,d,this._normalizer),this._triggerCache[s]=a}this._transitionEngine.registerTrigger(e,r,a)}register(t,e){this._transitionEngine.register(t,e)}destroy(t,e){this._transitionEngine.destroy(t,e)}onInsert(t,e,i,r){this._transitionEngine.insertNode(t,e,i,r)}onRemove(t,e,i){this._transitionEngine.removeNode(t,e,i)}disableAnimations(t,e){this._transitionEngine.markElementAsDisabled(t,e)}process(t,e,i,r){if(i.charAt(0)=="@"){let[o,s]=Gg(i),a=r;this._timelineEngine.command(o,e,s,a)}else this._transitionEngine.trigger(t,e,i,r)}listen(t,e,i,r,o){if(i.charAt(0)=="@"){let[s,a]=Gg(i);return this._timelineEngine.listen(s,e,a,o)}return this._transitionEngine.listen(t,e,i,r,o)}flush(t=-1){this._transitionEngine.flush(t)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(t){this._transitionEngine.afterFlushAnimationsDone(t)}};function sL(n,t){let e=null,i=null;return Array.isArray(t)&&t.length?(e=n_(t[0]),t.length>1&&(i=n_(t[t.length-1]))):t instanceof Map&&(e=n_(t)),e||i?new aL(n,e,i):null}var aL=(()=>{class n{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,i,r){this._element=e,this._startStyles=i,this._endStyles=r;let o=n.initialStylesByElement.get(e);o||n.initialStylesByElement.set(e,o=new Map),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&Nn(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Nn(this._element,this._initialStyles),this._endStyles&&(Nn(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(n.initialStylesByElement.delete(this._element),this._startStyles&&(zi(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(zi(this._element,this._endStyles),this._endStyles=null),Nn(this._element,this._initialStyles),this._state=3)}}return n})();function n_(n){let t=null;return n.forEach((e,i)=>{cL(i)&&(t=t||new Map,t.set(i,e))}),t}function cL(n){return n==="display"||n==="position"}var ju=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(t,e,i,r){this.element=t,this.keyframes=e,this.options=i,this._specialStyles=r,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let t=this.keyframes,e=this._triggerWebAnimation(this.element,t,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=t.length?t[t.length-1]:new Map;let i=()=>this._onFinish();return e.addEventListener("finish",i),this.onDestroy(()=>{e.removeEventListener("finish",i)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(t){let e=[];return t.forEach(i=>{e.push(Object.fromEntries(i))}),e}_triggerWebAnimation(t,e,i){let r=this._convertKeyframesToObject(e);try{return t.animate(r,i)}catch(o){return null}}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}play(){let t=this._buildPlayer();t&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),t.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}setPosition(t){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=t*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let t=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,r)=>{r!=="offset"&&t.set(r,this._finished?i:Mu(this.element,r))}),this.currentSnapshot=t}triggerCallback(t){let e=t==="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Hu=class{validateStyleProperty(t){return!0}validateAnimatableStyleProperty(t){return!0}containsElement(t,e){return Wg(t,e)}getParentElement(t){return xu(t)}query(t,e,i){return qg(t,e,i)}computeStyle(t,e,i){return Mu(t,e)}animate(t,e,i,r,o,s=[]){let a=r==0?"both":"forwards",c={duration:i,delay:r,fill:a};o&&(c.easing=o);let l=new Map,d=s.filter(h=>h instanceof ju);_0(i,r)&&d.forEach(h=>{h.currentSnapshot.forEach((m,g)=>l.set(g,m))});let u=m0(e).map(h=>new Map(h));u=v0(t,u,l);let p=sL(t,u);return new ju(t,u,c,p)}};var Ou="@",P0="@.disabled",zu=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(t,e,i,r){this.namespaceId=t,this.delegate=e,this.engine=i,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(t){this.delegate.destroyNode?.(t)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}appendChild(t,e){this.delegate.appendChild(t,e),this.engine.onInsert(this.namespaceId,e,t,!1)}insertBefore(t,e,i,r=!0){this.delegate.insertBefore(t,e,i),this.engine.onInsert(this.namespaceId,e,t,r)}removeChild(t,e,i,r){if(r){this.delegate.removeChild(t,e,i,r);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,i,r){this.delegate.setAttribute(t,e,i,r)}removeAttribute(t,e,i){this.delegate.removeAttribute(t,e,i)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,i,r){this.delegate.setStyle(t,e,i,r)}removeStyle(t,e,i){this.delegate.removeStyle(t,e,i)}setProperty(t,e,i){e.charAt(0)==Ou&&e==P0?this.disableAnimations(t,!!i):this.delegate.setProperty(t,e,i)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,i,r){return this.delegate.listen(t,e,i,r)}disableAnimations(t,e){this.engine.disableAnimations(t,e)}},h_=class extends zu{factory;constructor(t,e,i,r,o){super(e,i,r,o),this.factory=t,this.namespaceId=e}setProperty(t,e,i){e.charAt(0)==Ou?e.charAt(1)=="."&&e==P0?(i=i===void 0?!0:!!i,this.disableAnimations(t,i)):this.engine.process(this.namespaceId,t,e.slice(1),i):this.delegate.setProperty(t,e,i)}listen(t,e,i,r){if(e.charAt(0)==Ou){let o=lL(t),s=e.slice(1),a="";return s.charAt(0)!=Ou&&([s,a]=dL(s)),this.engine.listen(this.namespaceId,o,s,a,c=>{let l=c._data||-1;this.factory.scheduleListenerCallback(l,i,c)})}return this.delegate.listen(t,e,i,r)}};function lL(n){switch(n){case"body":return document.body;case"document":return document;case"window":return window;default:return n}}function dL(n){let t=n.indexOf("."),e=n.substring(0,t),i=n.slice(t+1);return[e,i]}var Uu=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(t,e,i){this.delegate=t,this.engine=e,this._zone=i,e.onRemovalComplete=(r,o)=>{o?.removeChild(null,r)}}createRenderer(t,e){let r=this.delegate.createRenderer(t,e);if(!t||!e?.data?.animation){let l=this._rendererCache,d=l.get(r);if(!d){let u=()=>l.delete(r);d=new zu("",r,this.engine,u),l.set(r,d)}return d}let o=e.id,s=e.id+"-"+this._currentId;this._currentId++,this.engine.register(s,t);let a=l=>{Array.isArray(l)?l.forEach(a):this.engine.registerTrigger(o,s,t,l.name,l)};return e.data.animation.forEach(a),new h_(this,s,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(t,e,i){if(t>=0&&t<this._microtaskId){this._zone.run(()=>e(i));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(o=>{let[s,a]=o;s(a)}),this._animationCallbacksBuffer=[]})}),r.push([e,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(t){this.engine.flush(),this.delegate.componentReplaced?.(t)}};var fL=(()=>{class n extends ns{constructor(e,i,r){super(e,i,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||n)(B(A),B(Qr),B(Zr))};static \u0275prov=ne({token:n,factory:n.\u0275fac})}return n})();function hL(){return new Pu}function pL(){return new Uu(f(sa),f(ns),f(M))}var F0=[{provide:Zr,useFactory:hL},{provide:ns,useClass:fL},{provide:je,useFactory:pL}],cie=[{provide:Qr,useClass:p_},{provide:Ni,useValue:"NoopAnimations"},...F0],mL=[{provide:Qr,useFactory:()=>new Hu},{provide:Ni,useFactory:()=>"BrowserAnimations"},...F0];function L0(){return sn("NgEagerAnimations"),[...mL]}vm(BE,{providers:[L0()]}).catch(n=>console.error(n));

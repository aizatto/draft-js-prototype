(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{233:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(15),c=n.n(o),u=(n(92),n(32)),i=n(235),l=n(236),s=n(0),d={link:{color:"#3b5998",textDecoration:"underline"}};var E,f,D,I=[{strategy:function(e,t,n){e.findEntityRanges(function(e){var t=e.getEntity();return null!==t&&"LINK"===n.getEntity(t).getType()},t)},component:function(e){var t=e.entityKey,n=e.contentState.getEntity(t).getData().url;return a.a.createElement("a",{href:n,style:d.link},e.children)}}],m=s.KeyBindingUtil.isOptionKeyCommand,T=n(181).default,g=(0,n(195).default)();!function(e){e.HANDLED="handled",e.NOT_HANDLED="not-handled"}(E||(E={})),function(e){e.HEADER_ONE="header-one",e.HEADER_TWO="header-two",e.HEADER_THREE="header-three"}(f||(f={})),function(e){e[e.DIGIT_0=48]="DIGIT_0",e[e.DIGIT_1=49]="DIGIT_1",e[e.DIGIT_2=50]="DIGIT_2",e[e.DIGIT_3=51]="DIGIT_3",e[e.DIGIT_9=57]="DIGIT_9",e[e.A=65]="A",e[e.Z=90]="Z"}(D||(D={}));var h=a.a.forwardRef(function(e,t){var n=Object(r.useState)(function(){return s.EditorState.createWithContent(e.defaultContent)}),o=Object(u.a)(n,2),c=o[0],i=o[1],l=Object(r.useRef)(null),d=Object(r.useRef)(!1);Object(r.useEffect)(function(){l&&l.current&&!1===d.current&&(d.current=!0)}),Object(r.useImperativeHandle)(t,function(){return{content:function(){return c.getCurrentContent()},setContent:function(e){var t=s.EditorState.createWithContent(e);i(t)}}},[c]);return a.a.createElement(T,{ref:l,editorState:c,onChange:function(e){i(e)},handleKeyCommand:function(e){switch(e){case f.HEADER_ONE:case f.HEADER_TWO:case f.HEADER_THREE:return i(s.RichUtils.toggleBlockType(c,e)),E.HANDLED;default:return E.NOT_HANDLED}},keyBindingFn:function(e){if(function(e){return m(e)&&e.metaKey}(e))switch(e.keyCode){case D.DIGIT_1:return f.HEADER_ONE;case D.DIGIT_2:return f.HEADER_TWO;case D.DIGIT_3:return f.HEADER_THREE;default:return Object(s.getDefaultKeyBinding)(e)}return Object(s.getDefaultKeyBinding)(e)},plugins:[g],decorators:I})}),_=n(219).stateToMarkdown,w=n(225).stateFromMarkdown,v="\n[test](https://www.example.com/)\n";var y=function(){var e=Object(r.useState)(v),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(r.useRef)(null),s=Object(r.useRef)(null),d=w(n);return a.a.createElement("div",{className:"App"},a.a.createElement(i.a,{className:"pt-3"},"Hello World",a.a.createElement("div",{style:{border:"1px solid #000"}},a.a.createElement(h,{ref:c,defaultContent:d})),a.a.createElement(l.a,{onClick:function(){if(c&&c.current){var e=_(c.current.content());o(e),s&&s.current&&(s.current.value=e)}}},"To Markdown"),a.a.createElement("div",null,a.a.createElement("textarea",{rows:40,cols:100,ref:s,defaultValue:n,onChange:function(e){if(c&&c.current){var t=e.target.value;o(t);var n=w(t);c.current.setContent(n)}}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,n){e.exports=n(233)},92:function(e,t,n){}},[[87,1,2]]]);
//# sourceMappingURL=main.1135248a.chunk.js.map
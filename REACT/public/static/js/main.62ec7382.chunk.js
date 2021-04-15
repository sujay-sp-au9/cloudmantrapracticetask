(this.webpackJsonpcloudmantrapracticetask=this.webpackJsonpcloudmantrapracticetask||[]).push([[0],{193:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a.n(n),c=a(1),i=a(6),s=(a(193),a(0)),o=a.n(s),l=a(60),u=a.n(l),d=a(182),j=o.a.createContext(),b=a(9),h=a(292),m=a(41),O=a(293),f=a(100),x=a(294),g=a(295),v=a(291),S=a(297),p=a(69),y=a(13),E=O.a.Title,k=f.a.Option,C=function(e){var t=e.type,a=e.form,n=e.visible,r=e.SetVisible,c=e.emailExists,i=e.SetExists,s=e.clearForm,l=e.isEmailValid,u=e.checkEmail,d=e.handleOnSubmit,j=e.email;return Object(y.jsxs)(x.a,{footer:null,visible:n,closeIcon:Object(y.jsxs)(o.a.Fragment,{children:[Object(y.jsx)(S.a,{onClick:function(){return s(a)}}),Object(y.jsx)(p.a,{style:{marginLeft:"1vw"},onClick:function(){return r(!1)}})]}),centered:!0,children:[Object(y.jsx)(E,{level:3,children:"Add user"}),Object(y.jsxs)(h.a,{form:a,onFinish:d,layout:"vertical",children:[Object(y.jsx)(h.a.Item,{onChange:function(e){l(e.target.value)&&("Update"===t?j!==e.target.value?u(e.target.value,i):i(!1):u(e.target.value,i))},shouldUpdate:!0,label:"Username",name:"email",rules:[{required:!0,message:"Please Enter your E-mail"},function(){return{validator:function(e,t){return l(t)?Promise.resolve():t.length>0?Promise.reject("Invalid E-mail"):Promise.reject()}}}],children:Object(y.jsx)(g.a,{placeholder:"E-mail"})}),Object(y.jsx)(h.a.Item,{label:"Designation",name:"designation",rules:[{required:!0,message:"Please Select a Designation"}],children:Object(y.jsxs)(f.a,{defaultValue:null,style:{width:"100%"},children:[Object(y.jsx)(k,{value:"SDE",children:"SDE"}),Object(y.jsx)(k,{value:"MGR",children:"MGR"}),Object(y.jsx)(k,{value:"SSDE",children:"SSDE"}),Object(y.jsx)(k,{value:"SMGR",children:"SMGR"})]})}),Object(y.jsx)(h.a.Item,{label:"Location",name:"location",rules:[{required:!0,message:"Please confirm your location"}],children:Object(y.jsx)(g.a,{placeholder:"Location"})}),Object(y.jsx)(h.a.Item,{label:"Date of birth",name:"dob",rules:[{required:!0,message:"Please confirm your date of birth"}],children:Object(y.jsx)(v.a,{})}),Object(y.jsx)(h.a.Item,{children:Object(y.jsx)(m.a,{style:{width:"100%"},onClick:function(){return r(!1)},type:"primary",danger:!0,children:"Cancel"})}),Object(y.jsx)(h.a.Item,{shouldUpdate:!0,children:function(){return Object(y.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,disabled:"Add"===t&&!a.isFieldsTouched(!0)||a.getFieldsError().filter((function(e){return e.errors.length})).length||c,size:"large",children:t})}})]})]})},F="http://localhost:3001/api/v1/users",D=function(e,t){u()({method:"POST",url:"".concat(F,"/add/email"),data:{email:e}}).then((function(e){e.data.exists?(d.b.error("E-mail already exists",[5]),t(!0)):t(!1)})).catch((function(e){return d.b.error(e.message)}))},I=function(e){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)},A=function(e){e.setFieldsValue({email:"",designation:null,location:"",dob:null})},P=function(){var e=o.a.useContext(j),t=Object(i.a)(e,2)[1],a=h.a.useForm(),n=Object(i.a)(a,1)[0],r=o.a.useState(!1),s=Object(i.a)(r,2),l=s[0],O=s[1],f=o.a.useState(!0),x=Object(i.a)(f,2),g=x[0],v=x[1];return Object(y.jsxs)(o.a.Fragment,{children:[Object(y.jsx)(m.a,{style:{margin:"2vh 0"},onClick:function(){return O(!0)},children:"Add User"}),Object(y.jsx)(C,{type:"Add",handleOnSubmit:function(){var e=n.getFieldsValue();A(n),u()({method:"POST",url:"".concat(F,"/add"),data:e}).then((function(e){200===e.status&&(t((function(t){return Object(c.a)(Object(c.a)({},t),{},{users:[e.data.user].concat(Object(b.a)(t.users))})})),O(!1))})).catch((function(e){return d.b.error(e.message)}))},form:n,visible:l,SetVisible:O,emailExists:g,SetExists:v,clearForm:A,isEmailValid:I,checkEmail:D})]})},V=a(101),w=a(131),T=g.a.Search,G=["SDE","SSDE","MGR","SMGR"],R=function(){var e=o.a.useState(1),t=Object(i.a)(e,2),a=t[0],n=t[1],r=o.a.useContext(j),s=Object(i.a)(r,2),l=s[0],u=s[1],d=o.a.useState(l.search),b=Object(i.a)(d,2),h=b[0],m=b[1];return o.a.useEffect((function(){var e=setTimeout((function(){u((function(e){return Object(c.a)(Object(c.a)({},e),{},{search:h})}))}),1e3);return function(){clearTimeout(e)}}),[h]),Object(y.jsxs)("div",{children:[Object(y.jsx)(T,{style:{marginBottom:"1vh"},placeholder:"Search by username",onChange:function(e){return m(e.target.value)}}),Object(y.jsxs)("div",{style:{marginBottom:"1vh"},children:[Object(y.jsx)("span",{style:{marginRight:"1vw"},children:"Filter by designation"}),Object(y.jsx)(V.a.Group,{options:G,onChange:function(e){return u((function(t){return Object(c.a)(Object(c.a)({},t),{},{designation:e})}))}})]}),Object(y.jsxs)("div",{style:{marginBottom:"1vh"},children:[Object(y.jsx)("span",{style:{marginRight:"1vw"},children:"Sort by"}),Object(y.jsxs)(w.a.Group,{onChange:function(e){n(e.target.value),2===e.target.value?u((function(e){return Object(c.a)(Object(c.a)({},e),{},{dob:1})})):1===e.target.value&&u((function(e){return Object(c.a)(Object(c.a)({},e),{},{dob:-1})}))},value:a,children:[Object(y.jsx)(w.a,{value:1,children:"Youngest"}),Object(y.jsx)(w.a,{value:2,children:"Experienced"})]})]})]})},M=a(59),U=a.n(M),_=a(296),z=a(290),B=a(186),L=a(298),q=function(){var e=o.a.useContext(j),t=Object(i.a)(e,2),a=t[0],n=t[1],r=a.users,l=h.a.useForm(),m=Object(i.a)(l,1)[0],O=Object(s.useState)(!1),f=Object(i.a)(O,2),x=f[0],g=f[1],v=Object(s.useState)(!1),S=Object(i.a)(v,2),p=S[0],E=S[1],k=Object(s.useState)(""),P=Object(i.a)(k,2),V=P[0],w=P[1],T=Object(s.useState)(""),G=Object(i.a)(T,2),R=G[0],M=G[1],q=[{title:"Name",dataIndex:"email",key:"name"},{title:"Designation",dataIndex:"designation",key:"designation"},{title:"Address",dataIndex:"location",key:"address"},{title:"DOB",dataIndex:"dob",key:"dob",render:function(e){return new Date(e).toDateString()}},{render:function(e){return Object(y.jsxs)(_.b,{size:"middle",children:[Object(y.jsx)(B.a,{onClick:function(){var t=e.email,a=e.designation,n=e.location,r=e.dob,c=e._id;m.setFieldsValue({email:t,designation:[a],location:n,dob:U()(r)}),M(c),w(t),g(!0)}}),Object(y.jsx)(L.a,{style:{color:"red"},onClick:function(){u()({method:"DELETE",url:"".concat(F,"/all/user/").concat(e._id)}).then((function(t){return 200===t.status&&n((function(t){return Object(c.a)(Object(c.a)({},t),{},{users:t.users.filter((function(t){return!(t._id===e._id)}))})}))})).catch((function(e){return d.b.error(e.message)}))}})]})}}];return Object(y.jsxs)("div",{style:{maxWidth:"100vw",overflow:"auto"},children:[Object(y.jsx)(z.a,{pagination:{position:["bottomLeft"]},style:{maxWidth:"max-content"},dataSource:r,columns:q}),Object(y.jsx)(C,{type:"Update",handleOnSubmit:function(){var e=m.getFieldsValue();Array.isArray(e.designation)&&(e.designation=e.designation[0]),A(m),u()({method:"PATCH",url:"".concat(F,"/all/user/").concat(R),data:e}).then((function(e){200===e.status&&(n((function(t){return Object(c.a)(Object(c.a)({},t),{},{users:[e.data.user].concat(Object(b.a)(t.users.filter((function(e){return!(e._id===R)}))))})})),g(!1))})).catch((function(e){return d.b.error(e.message)}))},form:m,visible:x,SetVisible:g,emailExists:p,SetExists:E,clearForm:A,isEmailValid:I,checkEmail:D,email:V})]})},Z=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(R,{}),Object(y.jsx)(q,{})]})},J=function(){var e=o.a.useState({search:"",designation:[],dob:-1,users:[]}),t=Object(i.a)(e,2),a=t[0],n=t[1];return o.a.useEffect((function(){var e="".concat(F,"/all");a.search&&(e+="/".concat(a.search)),a.designation.length>0?(e+="?",a.designation.forEach((function(t){return e+="designation=".concat(t,"&")})),e+="sort=".concat(-1===a.dob?"-":"","dob")):e+="?sort=".concat(-1===a.dob?"-":"","dob"),u()({method:"GET",url:e}).then((function(e){200===e.status&&n((function(t){return Object(c.a)(Object(c.a)({},t),{},{users:e.data.users})}))})).catch((function(e){return d.b.error(e.message)}))}),[a.designation,a.dob,a.search]),Object(y.jsx)("div",{id:"app",children:Object(y.jsxs)(j.Provider,{value:[a,n],children:[Object(y.jsx)(P,{}),Object(y.jsx)(Z,{})]})})};r.a.render(Object(y.jsx)(J,{}),document.getElementById("root"))}},[[288,1,2]]]);
//# sourceMappingURL=main.62ec7382.chunk.js.map
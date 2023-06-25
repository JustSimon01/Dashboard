"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[870],{8470:function(e,n,s){var a=s(1413),i=s(4236).Z.div((function(e){var n=e.justifyContent,s=e.alignItems,i=e.flexDirection,t=e.gap,l=e.padding,r=e.margin,m={display:"flex",justifyContent:n,alignItems:s,gap:"number"===typeof t?"".concat(t,"px"):t};return i&&(m.flexDirection=i),l&&(m.padding=l),r&&(m.margin=r),(0,a.Z)({},m)}));n.Z=i},6810:function(e,n,s){s.d(n,{j:function(){return a}});var a="https://jsonplaceholder.typicode.com/"},9870:function(e,n,s){s.r(n);var a=s(9439),i=s(2791),t=s(364),l=s(6988),r=s(2962),m=s(5518),c=s(7354),d=s(7615),o=s(6106),u=s(914),x=s(376),h=s(9529),j=s(6443),Z=s(8470),p=s(7689),f=s(7902),y=s(6810),g=s(184);n.default=function(){var e=(0,i.useState)("https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"),n=(0,a.Z)(e,2),s=n[0],b=n[1],v=(0,p.s0)(),P=(0,t.I0)(),I=(0,t.v9)((function(e){return e.userInfo})),C=I.name,k=I.email,N=I.username,F=I.phone,U=I.website,w=I.address,A=I.company,D={url:"".concat(y.j,"users"),method:"PATCH",data:I};(0,i.useEffect)((function(){I.name||v("/app/main/clients/list")}),[]);return I.name&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(Z.Z,{alignItems:"center",mobileFlex:!1,className:"text-center text-md-left",children:[(0,g.jsx)(r.C,{size:90,src:s,icon:(0,g.jsx)(h.Z,{})}),(0,g.jsxs)("div",{className:"ml-3 mt-md-0 mt-3",children:[(0,g.jsx)(m.Z,{onChange:function(e){var n="updatable";"uploading"!==e.file.status?"done"===e.file.status&&(!function(e,n){var s=new FileReader;s.addEventListener("load",(function(){return n(s.result)})),s.readAsDataURL(e)}(e.file.originFileObj,(function(e){return b(e)})),l.ZP.success({content:"Uploaded!",key:n,duration:1.5})):l.ZP.loading({content:"Uploading...",key:n,duration:1e3})},showUploadList:!1,action:s,children:(0,g.jsx)(c.ZP,{type:"primary",children:"Change Avatar"})}),(0,g.jsx)(c.ZP,{className:"ml-2",onClick:function(){b("")},children:"Remove"})]})]}),(0,g.jsx)("div",{className:"mt-4",children:(0,g.jsx)(d.Z,{name:"basicInformation",layout:"vertical",initialValues:{name:C,email:k,username:N,catchPhrase:A.catchPhrase,phone:F,website:U,address:w.street,city:w.city,companyName:A.name},onFinish:function(e){var n="updatable";l.ZP.loading({content:"Updating...",key:n}),P((0,f.Td)(D)),setTimeout((function(){l.ZP.success({content:"Done!",key:n,duration:2})}),1e3)},onFinishFailed:function(e){console.log("Failed:",e)},children:(0,g.jsx)(o.Z,{children:(0,g.jsxs)(u.Z,{xs:24,sm:24,md:24,lg:16,children:[(0,g.jsxs)(o.Z,{gutter:j.KP,children:[(0,g.jsx)(u.Z,{xs:24,sm:24,md:12,children:(0,g.jsx)(d.Z.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:(0,g.jsx)(x.Z,{})})}),(0,g.jsx)(u.Z,{xs:24,sm:24,md:12,children:(0,g.jsx)(d.Z.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:(0,g.jsx)(x.Z,{})})}),(0,g.jsx)(u.Z,{xs:24,sm:24,md:12,children:(0,g.jsx)(d.Z.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter a valid email!"}],children:(0,g.jsx)(x.Z,{})})}),(0,g.jsx)(u.Z,{xs:24,sm:24,md:12,children:(0,g.jsx)(d.Z.Item,{label:"Company Name",name:"companyName",children:(0,g.jsx)(x.Z,{})})}),(0,g.jsx)(u.Z,{xs:24,sm:24,md:12,children:(0,g.jsx)(d.Z.Item,{label:"Phone Number",name:"phone",children:(0,g.jsx)(x.Z,{})})}),(0,g.jsx)(u.Z,{xs:24,sm:24,md:12,children:(0,g.jsx)(d.Z.Item,{label:"Website",name:"website",children:(0,g.jsx)(x.Z,{})})}),(0,g.jsx)(u.Z,{xs:24,sm:24,md:24,children:(0,g.jsx)(d.Z.Item,{label:"Address",name:"address",children:(0,g.jsx)(x.Z,{})})}),(0,g.jsx)(u.Z,{xs:24,sm:24,md:12,children:(0,g.jsx)(d.Z.Item,{label:"City",name:"city",children:(0,g.jsx)(x.Z,{})})})]}),(0,g.jsx)(c.ZP,{type:"primary",htmlType:"submit",children:"Save Change"})]})})})})]})}}}]);
//# sourceMappingURL=870.01baf208.chunk.js.map
var kva={},svgNS="http://www.w3.org/2000/svg",jl0=0,jl1=1,jl2=2,jl3=3,jl4=4,jl5=5,jl6=6,jl7=7,jc0=0,jc1=1,jc2=2,jc3=3,jc4=4,jc5=5,jc6=6,jc7=7,jc8=8,jc9=9,jc10=10,jc11=11,jc12=12,jc13=13,ug_00=null,ug_01=null,ug_02=null,ug_03=0,ug_04="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ug_05=21,ug_06,ug_07=0,ug_08=0,ug_09=0,ug_10=0,ug_11=0,ug_12=65535,ug_13=null,ug_14="DMEFPNJKO";
function voa(a,b,c,e,k,q,u,v){ug_01&&ug_01.close();ug_01=window.open("http://www.voacap.com/voacap.php?year="+a+"&month="+b+"&txname="+c+"&txlat="+k+"&txlon="+q+"&txantenna=3el10m.ant&txpower=0.8000&txmode=24&rxname="+e+"&rxlat="+u+"&rxlon="+v+"&rxantenna=3el10m.ant&path=Short","ug_01","menubar=0,resizable=1,scrollbars=1,status=1,width=730,height=800,left="+(screen.width-730)/2+",top="+(screen.height-800)/2)}
function pe(a){try{var b=document.getElementById("sh5ago"),c;var e=(new Date).getTime()-(new Date(a)).getTime(),k=Math.floor(e/864E5),q=Math.floor(e/31536E6),u=Math.floor(e/2628E6%12);a="";0==q&&0==u&&0==k?c="":(30>k&&(_d=1==k?" day ":" days ",a=k+_d),0!=q&&(_y=1==q?" year ":" years ",a=q+_y),0!=u&&10>q&&(_m=1==u?" month ":" months ",a=a+u+_m),c=a+" ago");b.innerHTML=c}catch(v){}}function fc01(a){return a==ug_12?"<b>UNKNOWN</b>":cty[a][0]}function fc03(a){return a==ug_12?"0":cty[a][2]}
function fc08(a){if(-1==a)return"<tr><td colspan='17'>&nbsp;</td></tr>";ug_03++;var b=l[a][jl0],c=ca[b][jc12],e=ca[b][jc4],k="<tr align='center' class='td"+ug_03%2+"'><td>"+(a+1)+"</td><td class='b"+(l[a][jl1]+1)+"'>"+(0<l[a][jl6]?l[a][jl6]:ba[l[a][jl1]])+"</td><td>"+ma[l[a][jl2]]+"</td><td>",q;q=new Date(sd+6E4*l[a][jl3]);var u=q.getUTCHours(),v=q.getUTCMinutes(),A=q.getUTCDate(),u=9<u?u:"0"+u,v=9<v?v:"0"+v;q=(9<A?A:"0"+A)+"-"+ug_04[q.getUTCMonth()]+"-"+q.getUTCFullYear()+" "+u+":"+v;b=k+q+"</td>"+
("<td class='q"+(6<e?6:e)+"'>"+e+"</td>")+"<td align='left'>"+ca[b][jc0]+"</td><td class='c"+fc03(c)+"'>"+con[fc03(c)]+"</td><td>"+(c==ug_12?"?":cty[c][1])+"</td><td align='left'>"+fc01(c)+"</td><td align='right'>"+10*ca[b][jc8]+"</td><td>"+ca[b][jc9]+"</td><td>"+("<div class='master"+(0!=ca[b][jc13]?"2'>OK":(1<e?"3":"1")+"'>NO")+"</div>")+"</td><td>"+(0!=l[a][jl4]?"<div class='dupe'>Dupe</div>":"")+"</td><td>"+ca[b][jc11]+"</td><td>"+ca[b][jc10]+"</td><td>"+fc09(l[a][jl7])+"</td>";0!=pq&&(b=b+"<td>"+
l[a][jl5]+"</td>");return b+"</tr>"}function fc09(a){return void 0==a?"":a}function lh(){var a="<table width='100%' class='mtc'><tr class='thc'><th>QSO<br/>#</th><th>Band,<br/>kHz</th><th>Mode</th><th>Date, time</th><th>Qs</th><th>Callsign</th><th>Cont.</th><th colspan='2'>Country</th><th>Dist.,<br/>km</th><th colspan='1'>Head.,<br/>&#176;</th><th>In<br/>MASTER</th><th>Dupe</th><th>CQ</th><th>ITU</th><th>Tx</th>";0!=pq&&(a+="<th>Qs<br/>Pts</th>");return a+"</tr>"}
function wl(a,b,c){null!=a?(null!=ug_00&&ug_00.removeAttribute("class"),a.setAttribute("class","mdv"),ug_00=a):(a=document.getElementById("ll0"),null!=a&&(a.setAttribute("class","mdv"),ug_00=a));for(a=lh();b<=c;b++)a+=fc08(b);a+="</table>";document.getElementById("logdiv").innerHTML=a}
function pw(a,b){var c=a.document;c.write('<html><head><meta content="text/html; charset=windows-1252" http-equiv="content-type"/><link rel="stylesheet" href="sh5classic.css" type="text/css"/></head><body><div style="text-align:center;margin-bottom: 5px;" id="pold"></div><script language="javascript" src="l.js">\x3c/script><script language="javascript" src="c.js">\x3c/script><script language="javascript" src="sh5.js">\x3c/script><script language="javascript">var sd=window.opener.sd;var tq=0;var reg=null;document.open();document.write(lh());var ihw="";for(i=0;i<l.length;i++){');switch(b){case 1:c.write("if(ca[l[i][jl0]][jc12]!=p1)continue;");
break;case 2:c.write("if(ca[l[i][jl0]][jc9]<p1||ca[l[i][jl0]][jc9]>p1+9)continue;");break;case 3:c.write("if(i<p1[0]||i>p1[1])continue;");break;case 4:c.write("if(ca[l[i][jl0]][jc8]*10<p1 || ca[l[i][jl0]][jc8]*10>=p1+500)continue;");break;case 5:c.write("if(ca[l[i][jl0]][jc0].search(p1)==-1)continue;");break;case 6:c.write("if(ca[l[i][jl0]][jc10]!=p1)continue;");break;case 7:c.write("if(ca[l[i][jl0]][jc11]!=p1)continue;");break;case 8:c.write("if(fc03(ca[l[i][jl0]][jc12])!=p1)continue;");break;case 10:c.write("if(p1!=3&&l[i][jl2]!=p1)continue;");
break;case 11:c.write("if(ca[l[i][jl0]][jc0].length != p1)continue;");break;case 12:c.write('if (reg==null)reg=new RegExp(p1, "i");if(!reg.test(ca[l[i][jl0]][jc0]))continue;')}c.write('if(p2<21&&l[i][jl1]!=p2)continue;ihw+=fc08(i);tq++;}document.write(ihw);document.write("</table>");');switch(b){case 1:c.write('var t="QSOs with "+fc01(p1);');break;case 2:c.write('var t="QSOs with beam heading "+p1+"-"+(p1+9)+" degrees";');break;case 3:c.write('var t="QSOs #"+(p1[0]+1)+" - "+(p1[1]+1);');break;case 4:c.write('var t="QSOs with distance "+p1+" - "+(p1+500)+" km";');
break;case 5:c.write('var t="QSOs with "+p1;');break;case 6:c.write('var t="QSOs with "+p1+" ITU zone";');break;case 7:c.write('var t="QSOs with "+p1+" CQ zone";');break;case 8:c.write('var t="QSOs with "+con[p1]+" continent";');break;case 10:c.write('var t="QSOs in "+ma[p1];');break;case 11:c.write('var t="QSOs with "+p1+"-char* callsigns";');break;case 12:c.write('var t="QSOs with stations with "+p1+" callsign structure";')}c.write('if(p2<21)t+=", "+ba[p2];t=ct+": "+t+" ("+tq+") - SH5 "+sh5ver;document.title=t;document.getElementById(\'pold\').innerHTML=t;');
c.write("document.close();\x3c/script></body></html>")}function mapf(a,b){var c=screen.width,e=screen.height;ug_02&&ug_02.close();ug_02=window.open("map.html#|"+a+"|"+b,"mapw","location=0,menubar=0,resizable=1,scrollbars=1,status=1,width="+(c-200)+",height="+(e-240)+",left=100,top=120")}
function sqs(a,b,c){0==fg?alert("No log"):(ug_01&&ug_01.close(),ug_01=window.open("","sh5w","location=0,menubar=0,resizable=1,scrollbars=1,status=1,width=900,height=550,left="+(screen.width-900)/2+",top="+(screen.height-550)/2),b.constructor===Array?ug_01.document.write("<script>var p1=["+b+"];var p2="+c+";\x3c/script>"):"string"!=typeof b?ug_01.document.write("<script>var p1="+b+";var p2="+c+";\x3c/script>"):ug_01.document.write("<script>var p1='"+b+"';var p2="+c+";\x3c/script>"),pw(ug_01,a))}
function wsq(a){var b=lh(),c;for(c=0;c<a.length;c++)b+=fc08(a[c]);b+="</table>";document.getElementById("logdiv").innerHTML=b}
function o9(){function a(a,d){return 1==l[a][jl4]||l[a][jl1]!=d&&d!=ug_05}function b(a,d){return l[a][jl2]!=d}function c(a,d){return ca[a][jc12]==ug_12||ca[a][jc12]!=d}function e(a,d){return ca[a][jc12]==ug_12||cty[ca[a][jc12]][2]!=d}function k(a,d){return ca[a][jc8]<50*d||ca[a][jc8]>50*d+50}function q(a,d){return ca[a][jc9]<d||ca[a][jc9]>d+9}function u(a,d){return ca[a][jc11]!=d}function v(a,d){return ca[a][jc10]!=d}function A(a,d){return ca[a][jc5]!=d}function B(a){var d=!1,t=ca[a][jc5],b=ca[a][jc6],
c=ca[a][jc7],h,w,g,e,k;if(-1!=t){h=fc10(t);t=h[0];h=h[1];-1!=b&&(b=b.toString(),1==b.length?(g="0",w=b.charAt(0)):(g=b.charAt(0),w=b.charAt(1)),-1!=c?(e=String.fromCharCode(c%24+65),k=String.fromCharCode(c/24+65)):k=e="");g=t+h+w+g+e+k;4==g.length&&(d=!0);c=kva[g];void 0==c&&(c=0);c++;kva[g]=c;g=fc12(g);ug_08+=g.lng();ug_07+=g.lat();ug_09++;1!=ug_10&&ug_13.extend(g);if(1<c&&10>c&&1!=ug_10)for(t=b=0,w=1,e=0,k=1;k<=c;k++)8==e&&(e=0,w++),e++,1==e&&(b=1,t=0),2==e&&(t=b=1),3==e&&(b=0,t=1),4==e&&(b=-1,
t=1),5==e&&(b=-1,t=0),6==e&&(t=b=-1),7==e&&(b=0,t=-1),8==e&&(b=1,t=-1),k==c-1&&(g=new google.maps.LatLng(g.lat()+1/48*t*w,g.lng()+1/24*b*w));10>c&&new google.maps.Marker({position:g,map:ug_06,title:ca[a][jc0]+(1==d?"*":"")+" - "+ca[a][jc4]+" Qs",icon:0==d?null:"https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png"})}}ug_13=new google.maps.LatLngBounds;var p=location.hash.split("|"),m,t="",w="station",h,g=0;ug_10=parseInt(p[1]);ug_11=parseInt(p[2]);ug_06=new google.maps.Map(document.getElementById("map-canvas"),
{zoom:3,scaleControl:!0});home=new google.maps.Marker({map:ug_06,position:fc12(myqth),title:mycall+" ("+myqth+")",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAACmAAAApgHdff84AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACpQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5lNJigAAAA10Uk5TAAIQIDBggIKeoLDQ7uXlaoAAAABxSURBVBhXY2DAAIwCSByJRgbXEJhE7w2B3Gswibt3G2Ecxt67d2/UXoNL3L179hpcAgiuISSgHKjE3VsCCAmggQgJoIECCAmQFFwCKMUwcy6MfXMmAwMvjHOBAQtn52wkTgIbaRxmY2NjBSYgYcCAAgC51IKRAxRjtAAAAABJRU5ErkJgggf6bd11711d9b5292bd4815d8aee94e1b"});
5==ug_10&&(h=new google.maps.Circle({map:ug_06,radius:5E5*ug_11,fillColor:"#FFFF00",fillOpacity:.2,clickable:!1,editable:!1}),p=new google.maps.Circle({map:ug_06,radius:5E5*(ug_11+1),fillColor:"#FFFF00",fillOpacity:.1,clickable:!1,editable:!1}),h.bindTo("center",home,"position"),p.bindTo("center",home,"position"));switch(ug_10){case 1:m=a;t="Summary - "+ba[ug_11];w="QSO";break;case 2:m=b;break;case 3:m=c;t=cty[ug_11][0];break;case 4:t=con[ug_11];m=e;break;case 5:t="Distance "+500*ug_11+"-"+500*(ug_11+
1)+" km.";m=k;break;case 6:t="Beam heading "+ug_11+"-"+(ug_11+9)+" degrees";m=q;break;case 8:t="CQ zone "+ug_11;m=u;break;case 9:t="ITU zone "+ug_11;m=v;break;case 10:m=fc10(ug_11),t="Field "+m[0]+m[1],m=A}if(1==ug_10||2==ug_10)for(p=0;p<l.length;p++)m(p,ug_11)||(B(l[p][0]),g++);else for(p=0;p<ca.length;p++)m(p,ug_11)||(B(p),g++);w=ct+" - "+t+" - "+g+" "+w+(1==g?"":"s");document.title=w;document.getElementById("ttl").innerHTML=w;10==ug_10?(m=fc10(ug_11),x=20*g65(m[0],0)-180,y=10*g65(m[1],0)-90,new google.maps.Rectangle({strokeColor:"#000000",
strokeOpacity:.8,strokeWeight:2,fillColor:"#ffff00",fillOpacity:.15,map:ug_06,bounds:new google.maps.LatLngBounds(new google.maps.LatLng(y,x),new google.maps.LatLng(y+10,x+20))}),ug_06.setCenter(new google.maps.LatLng(y+5,x+10)),ug_06.setZoom(5)):1==ug_10||1==g?ug_06.setCenter(new google.maps.LatLng(ug_07/ug_09,ug_08/ug_09)):ug_06.fitBounds(ug_13)}
function fc10(a){function b(a){return ug_14.charAt(a)}var c,e;10>a?(0==a&&(c=b(0),e=b(1)),1==a&&(c=b(2),e=b(1)),2==a&&(c=b(3),e=b(1)),3==a&&(c=b(4),e=b(1)),4==a&&(c=b(2),e=b(5)),5==a&&(c=b(3),e=b(5)),6==a&&(c=b(6),e=b(5)),7==a&&(c=b(7),e=b(5)),8==a&&(c=b(6),e=b(8)),9==a&&(c=b(7),e=b(8))):(a-=10,e=String.fromCharCode(a%18+65),c=String.fromCharCode(a/18+65));return[c,e]}function g65(a,b){return a.charCodeAt(b)-65}
function fc12(a){4==a.length&&(a+="LL");var b=20*g65(a,0)-180+2*(a.charCodeAt(2)-48)+2/24*g65(a,4);a=10*g65(a,1)-90+1*(a.charCodeAt(3)-48)+1/24*g65(a,5);return new google.maps.LatLng(a+1/48,b+1/24)}String.prototype.hashCode=function(){var a=0,b,c,e;if(0===this.length)return a;b=0;for(e=this.length;b<e;b++)c=this.charCodeAt(b),a=(a<<5)-a+c,a|=0;return a};
function drawChart(){function a(a,b,c){var g=document.createElement("label"),f=document.createElement("input");f.setAttribute("type","radio");f.setAttribute("name","rb");c&&f.setAttribute("id",c);21==b&&f.setAttribute("checked","true");g.onchange=function(){currentChartBand=b;B(b)};g.appendChild(f);g.innerHTML+=a;return g}function b(a){a=a.hashCode();0>a&&(a*=-1);return p[(a+0)%p.length]}function c(a,b,c,g,f){var d=document.createElementNS(svgNS,"circle");d.setAttributeNS(null,"cx",a);d.setAttributeNS(null,
"cy",b);d.setAttributeNS(null,"r",c);d.setAttributeNS(null,"fill",g);d.setAttributeNS(null,"stroke","none");d.setAttributeNS(null,"fill-opacity","0.5");f&&(a=document.createElementNS(svgNS,"title"),a.textContent=f,d.appendChild(a));return d}function e(a,b,c,g,f,d,e,k){var n=document.createElementNS(svgNS,"text");n.setAttribute("x",a);n.setAttribute("y",b);n.setAttribute("text-anchor",g);n.textContent=c;f&&n.setAttribute("font-weight",f);d&&n.setAttribute("transform","rotate("+d+" "+a+" "+b+")");e&&
n.setAttribute("fill","#"+e);return k?(a=document.createElementNS("http://www.w3.org/2000/svg","a"),a.setAttribute("onclick",k),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",""),n.setAttribute("fill","#0000ff"),a.appendChild(n),a):n}function k(a,b,c,g,f,d){var e=document.createElementNS(svgNS,"line");e.setAttribute("x1",a);e.setAttribute("y1",b);e.setAttribute("x2",c);e.setAttribute("y2",g);e.setAttribute("stroke",f);e.setAttribute("stroke-width",d);return e}function q(){for(var a=
Array(24),b=0;b<a.length;b++)a[b]=[];for(b=0;b<l.length;b++){var h=(new Date(sd+6E4*l[b][jl3])).getUTCHours(),g=Math.floor(ca[l[b][jl0]][jc9]/10);a[h][g]=(a[h][g]||0)+1}h=document.getElementById("gcc");b=document.createElementNS(svgNS,"svg");b.setAttribute("height",640);b.setAttribute("width",915);h.appendChild(b);for(h=0;360>=h;h++)0==h%20&&(b.appendChild(e(50,50+1.5*h,h,"end","bold")),k(b,60,50+1.5*h,865,50+1.5*h,"#eeeeee",1));for(g=0;24>g;g++)k(b,35*g+60,50,35*g+60,590,"#eeeeee",1),b.appendChild(e(35*
g+60,40,9<g?g.toString():"0"+g,"middle","bold"));b.appendChild(e(480,20,"Hour","middle"));b.appendChild(e(20,320,"Beam heading","middle",null,-90));for(g=0;24>g;g++)for(h=0;360>h;h++){var f=a[g][h],d=f;0<f&&(50<f&&(f=50+f/5),b.appendChild(c(35*g+60,15*h+50,f/2,"#0000ff","Qs: "+d+", Hour: "+(9<g?g.toString():"0"+g)+", Beam: "+10*h)))}}function u(){var a=new google.visualization.DataTable;a.addColumn("date","Time");a.addColumn("number","QSOs");a.addColumn("number","Minutes 1");a.addColumn("number",
"Minutes 2");for(var b=[],c=0;c<l.length;c+=5){var e=l[c][jl3],f=new Date(sd+6E4*e),f=new Date(f.getUTCFullYear(),f.getUTCMonth(),f.getUTCDate(),f.getUTCHours(),f.getUTCMinutes(),f.getUTCSeconds());b.push([f,c,e,2*e])}a.addRows(b);(new google.visualization.LineChart(document.getElementById("gcc"))).draw(a,{explorer:{maxZoomOut:2,keepInBounds:!1},vAxes:{0:{title:"QSOs"},1:{title:"Minutes"}}})}function v(a){var b=parseInt(a.substr(0,2),16),c=parseInt(a.substr(2,2),16);a=parseInt(a.substr(4,2),16);return 128<=
(299*b+587*c+114*a)/1E3?"000000":"ffffff"}function A(a,b,c,e,f,d,k){var r=document.createElementNS(svgNS,"rect");r.setAttributeNS(null,"x",b);r.setAttributeNS(null,"y",c);r.setAttributeNS(null,"height",e);r.setAttributeNS(null,"width",f);r.setAttributeNS(null,"fill","#"+d);b=document.createElementNS(svgNS,"title");b.textContent=k;r.appendChild(b);a.appendChild(r)}function k(a,b,c,e,f,d,k){var r=document.createElementNS(svgNS,"line");r.setAttribute("x1",b);r.setAttribute("y1",c);r.setAttribute("x2",
e);r.setAttribute("y2",f);r.setAttribute("stroke","#"+d);r.setAttribute("stroke-width",k);a.appendChild(r)}function B(c){var q=21;c&&(q=c);var h=[];c=0;for(var g=Array(cty.length),f=0;f<l.length;f++)if(21==q||l[f][jl1]==q){var d=ca[l[f][jl0]][jc12];if(ug_12==d)c+=1;else{var m=g[d]||0,m=m+1;g[d]=m}}for(d=f=0;d<cty.length;d++)m=g[d]||0,f+=m,0<m&&h.push([cty[d][0],m,d]);0<c&&(h.push(["Unknown",c]),f+=c);h.sort(function(a,b){result=b[1]-a[1];0==result&&(result=a[0].localeCompare(b[0]));return result});
c=[];g=f;for(d=0;d<h.length;d++)10>c.length&&(f-=h[d][1],c.push(h[d]));0<f&&c.push(["Others",f]);for(h=document.getElementById("gcc");h.firstChild;)h.removeChild(h.firstChild);d=document.getElementById("brbd");if(!d.firstChild)for(m=!1,bandIndex=0;bandIndex<sba.length;bandIndex++)if(0!=sba[bandIndex]){if((f=sba[bandIndex]==sba[21])&&21!=bandIndex){q=bandIndex;break}m||(m=document.createElement("span"),m.innerHTML="Band:",d.appendChild(m),m=!0);var r=a(ba[bandIndex],new Number(bandIndex),f?"selectedBand":
null);d.appendChild(r);if(f)break}d=document.createElementNS(svgNS,"svg");d.setAttribute("height",640);d.setAttribute("width",915);h.appendChild(d);for(var n=f=0,r=m=0;r<c.length;r++){var h=c[r],p=800*h[1]/g,m=m+h[1],f=0==f?50:f+n+3,u=b(h[0]),z=(100*h[1]/g).toFixed(1)+"%";A(d,f,260,70,p,u,h[0]+" - "+h[1]+" Qs - "+z);n=50+16*r;A(d,f+1,n-10,14,45,u);d.appendChild(e(f+25,n,z,"middle",null,null,v(u)));d.appendChild(e(f+50,n,h[0],"start",null,null,"000000",3==h.length?"sqs(1,"+h[2]+","+q+");return false;":
null));15<p&&d.appendChild(e(f+10,265,h[1],"end",null,-90,v(u)));k(d,f+2,n-10,f+2,258,u,3);10>r&&d.appendChild(e(f-4+p,345,r+1,"end",null,null,"000000"));0<r&&(h=f-5+p,z=9==r?"000000":"bbbbbb",k(d,53,n+260+50,f-70+p,n+260+50,z,1),k(d,f-30+p,n+260+50,h,n+260+50,z,1),k(d,f-10+p,n+260+50-3,h,n+260+50,z,2),k(d,f-10+p,n+260+50+3,h,n+260+50,z,2),k(d,53,n+260+50,58,n+260+50-3,z,2),k(d,53,n+260+50,58,n+260+50+3,z,2),k(d,f+p-2,332,f+p-2,n+260+50+5,u,3),h=(100*m/g).toFixed(1),d.appendChild(e(f-35+p,n+260+50+
3,h,"end",null,null,"000000")));n=p}d.appendChild(e(40,50,"%","end",null,-90,"000000"));d.appendChild(e(40,265,"QSOs","end",null,-90,"000000"));d.appendChild(e(40,383,"Accumulated %","end",null,-90,"000000"));d.appendChild(e(450,30,ct+" - Top 10 countries by QSOs - "+ba[q]+" - "+g+" QSOs","middle","bold",null,"000000"));k(d,51,333,50,333+16*(c.length+1),"cccccc",2)}var p="F0F8FF FAEBD7 00FFFF 7FFFD4 F0FFFF F5F5DC FFE4C4 000000 FFEBCD 0000FF 8A2BE2 A52A2A DEB887 5F9EA0 7FFF00 D2691E FF7F50 6495ED FFF8DC DC143C 00FFFF 00008B 008B8B B8860B A9A9A9 A9A9A9 006400 BDB76B 8B008B 556B2F FF8C00 9932CC 8B0000 E9967A 8FBC8F 483D8B 2F4F4F 2F4F4F 00CED1 9400D3 FF1493 00BFFF 696969 696969 1E90FF B22222 FFFAF0 228B22 FF00FF DCDCDC F8F8FF FFD700 DAA520 808080 808080 008000 ADFF2F F0FFF0 FF69B4 CD5C5C 4B0082 FFFFF0 F0E68C E6E6FA FFF0F5 7CFC00 FFFACD ADD8E6 F08080 E0FFFF FAFAD2 D3D3D3 D3D3D3 90EE90 FFB6C1 FFA07A 20B2AA 87CEFA 778899 778899 B0C4DE FFFFE0 00FF00 32CD32 FAF0E6 FF00FF 800000 66CDAA 0000CD BA55D3 9370DB 3CB371 7B68EE 00FA9A 48D1CC C71585 191970 F5FFFA FFE4E1 FFE4B5 FFDEAD 000080 FDF5E6 808000 6B8E23 FFA500 FF4500 DA70D6 EEE8AA 98FB98 AFEEEE DB7093 FFEFD5 FFDAB9 CD853F FFC0CB DDA0DD B0E0E6 800080 663399 FF0000 BC8F8F 4169E1 8B4513 FA8072 F4A460 2E8B57 FFF5EE A0522D C0C0C0 87CEEB 6A5ACD 708090 708090 FFFAFA 00FF7F 4682B4 D2B48C 008080 D8BFD8 FF6347 40E0D0 EE82EE F5DEB3 FFFFFF F5F5F5 FFFF00 9ACD32".split(" ");
1==chartId&&B();2==chartId&&u();3==chartId&&q();var m=document.getElementById("selectedBand");m&&m.focus()};
var transbase={	n: function (s) {		var conflict=["&", " ", "+", "_", ".", "!", "~", "*", "'", "(", ")", "!", "*", ","];		var noconflict=["^134", "^135", "^136", "^137", "^138", "^139", "^140", "^141", "^142", "^143", "^144", "^145", "^146", "^147"];		s=s.split("");		var y=0, z=0;		while(y<s.length) {		while(z<conflict.length) {		if(s[y]==conflict[z]) s[y]=noconflict[z];		z++;}		z=0;y++;}		return encodeURIComponent(s.join(""));	},	a: function (s) {		return s		.replace(/'/g, "&#39;")		.replace(/"/g, "&quot;")		.replace(/{/g, "&#123;")		.replace(/}/g, "&#125;")		.replace(/</g, "&lt;")		.replace(/>/g, "&gt;")		.replace(/%/g, "&#37;")		.replace(/\t/g, "&#9;")		.replace(/\x5c/g, "&#92;")		.replace(/[\r\n]{1,}/g,"&#13;");			},	b: function (s) {		return s		.replace(/&#39;/g, "'")		.replace(/&quot;/g, '"')		.replace(/&#123;/g, '{')		.replace(/&#125;/g, '}')		.replace(/&lt;/g, '<')		.replace(/&gt;/g, '>')		.replace(/&#37;/g, '%')		.replace(/&#9;/g, "\t")		.replace(/&#92;/g, String.fromCharCode(92))		.replace(/&#13;/g, "\n");			},	ajaxliveinfinity: [],	x: function () {		if(window.XMLHttpRequest) transbase.ajaxliveinfinity[transbase.ajaxliveinfinity.length]=new XMLHttpRequest();		else if (window.ActiveXObject) transbase.ajaxliveinfinity[transbase.ajaxliveinfinity.length]=new ActiveXObject("Microsoft.XMLHTTP");		return transbase.ajaxliveinfinity[transbase.ajaxliveinfinity.length-1];	},	q: function (f,s) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=transbase&c=q&s="+transbase.n(s));		}	},	h: function (f) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=transbase&c=h");		}	}	};var admins={	c: function (f,s,g) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=admins&c=c"+(s!=null?("&s="+transbase.n(s)):"")+(g!=null?("&g="+g):""));		}	},	t: function (f,s,g) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=admins&c=t"+(s!=null?("&s="+transbase.n(s)):"")+(g!=null?("&g="+g):""));		}	},	d: function (f,s) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=admins&c=d"+(s!=null?("&s="+transbase.n(s)):""));		}	}	};function Admins(id,login,password,name,descr,status,depart,d_create,d_update) {	this.id=id;	this.login=login;	this.password=password;	this.name=name;	this.descr=descr;	this.status=status;	this.depart=depart;	this.d_create=d_create;	this.d_update=d_update;	};var countries={	c: function (f,s,g) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=countries&c=c"+(s!=null?("&s="+transbase.n(s)):"")+(g!=null?("&g="+g):""));		}	},	t: function (f,s,g) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=countries&c=t"+(s!=null?("&s="+transbase.n(s)):"")+(g!=null?("&g="+g):""));		}	},	d: function (f,s) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=countries&c=d"+(s!=null?("&s="+transbase.n(s)):""));		}	}	};function Countries(id,used,cc,img,ru,en,kz,sletat_id) {	this.id=id;	this.used=used;	this.cc=cc;	this.img=img;	this.ru=ru;	this.en=en;	this.kz=kz;	this.sletat_id=sletat_id;	};var multimenu={	c: function (f,s,g) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=multimenu&c=c"+(s!=null?("&s="+transbase.n(s)):"")+(g!=null?("&g="+g):""));		}	},	t: function (f,s,g) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=multimenu&c=t"+(s!=null?("&s="+transbase.n(s)):"")+(g!=null?("&g="+g):""));		}	},	d: function (f,s) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=multimenu&c=d"+(s!=null?("&s="+transbase.n(s)):""));		}	}	};function Multimenu(id,name,descr,alive,cnt,title,href,targ,parid,stp,lvl,nid,anabl) {	this.id=id;	this.name=name;	this.descr=descr;	this.alive=alive;	this.cnt=cnt;	this.title=title;	this.href=href;	this.targ=targ;	this.parid=parid;	this.stp=stp;	this.lvl=lvl;	this.nid=nid;	this.anabl=anabl;	};var publish={	c: function (f,s,g) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=publish&c=c"+(s!=null?("&s="+transbase.n(s)):"")+(g!=null?("&g="+g):""));		}	},	t: function (f,s,g) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=publish&c=t"+(s!=null?("&s="+transbase.n(s)):"")+(g!=null?("&g="+g):""));		}	},	d: function (f,s) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=publish&c=d"+(s!=null?("&s="+transbase.n(s)):""));		}	}	};function Publish(id,cat,sysn,alive,parcat,name,descr,gorun,hdr,subhdr,notice,poster,pdate,cnt,pict,stp,anabl,linktype,d_create,d_update) {	this.id=id;	this.cat=cat;	this.sysn=sysn;	this.alive=alive;	this.parcat=parcat;	this.name=name;	this.descr=descr;	this.gorun=gorun;	this.hdr=hdr;	this.subhdr=subhdr;	this.notice=notice;	this.poster=poster;	this.pdate=pdate;	this.cnt=cnt;	this.pict=pict;	this.stp=stp;	this.anabl=anabl;	this.linktype=linktype;	this.d_create=d_create;	this.d_update=d_update;	};var safety={	c: function (f,s,g) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=safety&c=c"+(s!=null?("&s="+transbase.n(s)):"")+(g!=null?("&g="+g):""));		}	},	t: function (f,s,g) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=safety&c=t"+(s!=null?("&s="+transbase.n(s)):"")+(g!=null?("&g="+g):""));		}	},	d: function (f,s) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=safety&c=d"+(s!=null?("&s="+transbase.n(s)):""));		}	}	};function Safety(id,name,descr,opt) {	this.id=id;	this.name=name;	this.descr=descr;	this.opt=opt;	};var sections={	c: function (f,s,g) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=sections&c=c"+(s!=null?("&s="+transbase.n(s)):"")+(g!=null?("&g="+g):""));		}	},	t: function (f,s,g) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=sections&c=t"+(s!=null?("&s="+transbase.n(s)):"")+(g!=null?("&g="+g):""));		}	},	d: function (f,s) {		var ali=transbase.x();		if(ali){		ali.open("POST","diver.php");		ali.setRequestHeader("Content-Type","application/x-www-form-urlencoded");		ali.onreadystatechange = function(){		if (ali.readyState == 4 && ali.status == 200){		//alert(ali.responseText);		f(ali.responseText);		}		}		ali.send("t=sections&c=d"+(s!=null?("&s="+transbase.n(s)):""));		}	}	};function Sections(id,name,descr,d_create,d_update,last_editor,fnc,targ,enabl,html,php,css,js,chan,folder,dscf) {	this.id=id;	this.name=name;	this.descr=descr;	this.d_create=d_create;	this.d_update=d_update;	this.last_editor=last_editor;	this.fnc=fnc;	this.targ=targ;	this.enabl=enabl;	this.html=html;	this.php=php;	this.css=css;	this.js=js;	this.chan=chan;	this.folder=folder;	this.dscf=dscf;	};
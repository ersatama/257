$(document).ready(function() {
	eval($("#eval").html());
});
var classes = {
	Homepage: function(a) {
		var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
		b = a.hot_data.list;
		e = '';
		var turkey = '';
		var greece = '';
		var uae = '';
		var egypt = '';
		var thailand = '';
		var dominicana = '';
		for (c=0,d=b.length;c<d;c++) {
			if (b[c].tour_label==='Турция') {
				turkey += '<div class="e-100"><div class="e-101" style="background-image: url(http://kompastour.kz/'+b[c].image+');"></div><div class="e-102"><div class="e-103">'+b[c].title+' '+b[c].tour_time+'</div><div class="e-104" onclick="return page.selTour(this,'+escapeHtml(JSON.stringify({'price':b[c].tour_price,'title':b[c].title+' '+b[c].tour_time,'image':'http://kompastour.kz/'+b[c].image,'label':b[c].tour_label}))+');">'+b[c].tour_price+'</div></div></div>';
			} else if (b[c].tour_label==='Греция') {
				greece += '<div class="e-100"><div class="e-101" style="background-image: url(http://kompastour.kz/'+b[c].image+');"></div><div class="e-102"><div class="e-103">'+b[c].title+' '+b[c].tour_time+'</div><div class="e-104" onclick="return page.selTour(this,'+escapeHtml(JSON.stringify({'price':b[c].tour_price,'title':b[c].title+' '+b[c].tour_time,'image':'http://kompastour.kz/'+b[c].image,'label':b[c].tour_label}))+');">'+b[c].tour_price+'</div></div></div>';
			} else if (b[c].tour_label==='ОАЭ') {
				uae += '<div class="e-100"><div class="e-101" style="background-image: url(http://kompastour.kz/'+b[c].image+');"></div><div class="e-102"><div class="e-103">'+b[c].title+' '+b[c].tour_time+'</div><div class="e-104" onclick="return page.selTour(this,'+escapeHtml(JSON.stringify({'price':b[c].tour_price,'title':b[c].title+' '+b[c].tour_time,'image':'http://kompastour.kz/'+b[c].image,'label':b[c].tour_label}))+');">'+b[c].tour_price+'</div></div></div>';   
			} else if (b[c].tour_label==='Египет') {
				egypt += '<div class="e-100"><div class="e-101" style="background-image: url(http://kompastour.kz/'+b[c].image+');"></div><div class="e-102"><div class="e-103">'+b[c].title+' '+b[c].tour_time+'</div><div class="e-104" onclick="return page.selTour(this,'+escapeHtml(JSON.stringify({'price':b[c].tour_price,'title':b[c].title+' '+b[c].tour_time,'image':'http://kompastour.kz/'+b[c].image,'label':b[c].tour_label}))+');">'+b[c].tour_price+'</div></div></div>';   
			} else if (b[c].tour_label==='Таиланд') {
				thailand += '<div class="e-100"><div class="e-101" style="background-image: url(http://kompastour.kz/'+b[c].image+');"></div><div class="e-102"><div class="e-103">'+b[c].title+' '+b[c].tour_time+'</div><div class="e-104" onclick="return page.selTour(this,'+escapeHtml(JSON.stringify({'price':b[c].tour_price,'title':b[c].title+' '+b[c].tour_time,'image':'http://kompastour.kz/'+b[c].image,'label':b[c].tour_label}))+');">'+b[c].tour_price+'</div></div></div>';   
			} else if (b[c].tour_label==='Доминикана') {
				dominicana += '<div class="e-100"><div class="e-101" style="background-image: url(http://kompastour.kz/'+b[c].image+');"></div><div class="e-102"><div class="e-103">'+b[c].title+' '+b[c].tour_time+'</div><div class="e-104" onclick="return page.selTour(this,'+escapeHtml(JSON.stringify({'price':b[c].tour_price,'title':b[c].title+' '+b[c].tour_time,'image':'http://kompastour.kz/'+b[c].image,'label':b[c].tour_label}))+');">'+b[c].tour_price+'</div></div></div>';   
			}
			e += '<div class="e-23"><div class="e-23a" style="background: url(http://kompastour.kz/'+b[c].image+');"><div class="e-23b">'+b[c].tour_label+'</div></div><div class="e-23c">'+b[c].title+' '+b[c].tour_time+'</div><div class="e-23d" onclick="return page.selTour(this,'+escapeHtml(JSON.stringify({'price':b[c].tour_price,'title':b[c].title+' '+b[c].tour_time,'image':'http://kompastour.kz/'+b[c].image,'label':b[c].tour_label}))+');">'+b[c].tour_price+'</div></div>';
		}
		$("#turkey").html(turkey);
		$("#greece").html(greece);
		$("#uae").html(uae);
		$("#egypt").html(egypt);
		$("#thailand").html(thailand);
		$("#dominicana").html(dominicana);
		$(".e-22").html(e);
		$(".e-22a, .e-21").fadeIn(200);
	}
};
$(document).on('mousedown',function() {

});
$(window).on('scroll',function() {
	if (window.pageYOffset>430) {
		
	} else {
		
	}
});
function escapeHtml(text) {
  return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}
var page = {
	citySel: function(a) {
		var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
		b = parseInt($(a).attr('data-id'));
		if (b===0) {
			$("#main-city-list").removeAttr("style");
			$("#second-city-list").attr("style","display: none !important;");
		} else {
			$("#main-city-list").removeAttr("style");
			$("#second-city-list").attr("style","display: none !important;");
			c = $(".e-109");
			d = c.length;
			for (e=0;e<d;e++) {
				f = c.eq(e);
				if (f.attr('data-id') === $(".e-113").find('span').html()) {
					f.click();
					break;
				}
			}
		}
	},
	setCookie: function(name,value,days) {
    	var expires = "";
    	if (days) {
        	var date = new Date();
        	date.setTime(date.getTime() + (days*24*60*60*1000));
        	expires = "; expires=" + date.toUTCString();
    	}
    	document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    	window.location.reload();
	},
	citySelect: function(a) {
		var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
		b = $(a).attr('data-id');
		page.setCookie('location',JSON.stringify(b),10);
	},
	leaveRequestClient: function() {
		var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
		$(document.body).css({'overflow':'hidden'}).append('<div class="e-86"><div class="e-87" onclick="return page.closeView();"></div><div class="e-88"><div class="e-92">Спасибо за заявку, скоро с Вами свяжутся!</div><div class="e-95">Оставьте заявку</div><div class="e-89"><input type="text" class="e-90" placeholder="Ваше имя"></div><div class="e-89"><input type="text" class="e-90" placeholder="Ваш телефон номер"></div><div class="e-89"><textarea class="e-107" placeholder="Комментарий (* не обязательно)"></textarea></div><div class="e-89"><button class="e-91" onclick="return page.leaveRequestClientForm();">Оставить заявку</button></div></div></div>');
	},
	leaveRequestClientForm: function() {
		var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
		if ($(".e-90").eq(0).val().trim()==='') {
			return $(".e-90").eq(0).focus();
		} else if ($(".e-90").eq(1).val().trim()==='') {
			return $(".e-90").eq(1).focus();
		}
		
		c = {
			'leads':{
				'name': $(".e-90").eq(0).val().trim(),
				'phone': $(".e-90").eq(1).val().trim(),
				'city': '',
				'comment':'Запрос --- связаться --- '+ $(".e-107").eq(0).val().trim(),
				'tour': '/',
				'url':window.location.pathname,
				'type':0,
				'ss':0,
				'company':1
			}
		}
		$.post('https://www.afinadb.kz/ajax.php',c,function(data) {
			console.log(data+"| подбор тура");
		});
		$(".e-92").fadeIn(200);
	},
	closeView: function() {
		var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
		$(".e-86").remove();
		$(document.body).css({'overflow':'auto'});
	},
	leaveReq: function(a,b) {
		var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
		if ($(".e-90").eq(0).val().trim()==='') {
			return $(".e-90").eq(0).focus();
		} else if ($(".e-90").eq(1).val().trim()==='') {
			return $(".e-90").eq(1).focus();
		}
		
		c = {
			'leads':{
				'name': $(".e-90").eq(0).val().trim(),
				'phone': $(".e-90").eq(1).val().trim(),
				'city': '',
				'comment':'Горящие туры --- '+ b.label+" --- "+b.title+" --- "+b.price,
				'tour': '/',
				'url':window.location.pathname,
				'type':0,
				'ss':0,
				'company':1
			}
		}
		$.post('https://www.afinadb.kz/ajax.php',c,function(data) {
			console.log(data+"| подбор тура");
		});
		$(".e-92").fadeIn(200);
	},
	selTour: function(a,b) {
		var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
		
		$(document.body).css({'overflow':'hidden'}).append('<div class="e-86"><div class="e-87" onclick="return page.closeView();"></div><div class="e-88"><div class="e-92">Спасибо за заявку, скоро с Вами свяжутся!</div><div class="e-95">Оставьте заявку</div><div class="e-89"><input type="text" class="e-90" placeholder="Ваше имя"></div><div class="e-89"><input type="text" class="e-90" placeholder="Ваш телефон номер"></div><div class="e-89"><button class="e-91" onclick="return page.leaveReq(this,'+escapeHtml(JSON.stringify(b))+');">Оставить заявку</button></div></div></div>');
	},
	next: function() {
		var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
		
	},
	slideLeft: function() {
		var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
		a = {
			'w':parseInt($(".e-22").css('width')),
			'mw':parseInt($(".e-22a").css('width'))+10,
			'l':Number($(".e-22").css('margin-left').replace(/[^-\d\.]/g, ''))
		};
		b = a.l+a.mw;
		if (b > 0) {
			b = 0;
			$(".e-22b").eq(0).fadeOut(200);
		}
		$(".e-22").animate({'margin-left':b+"px"},250);
		$(".e-22b").eq(1).fadeIn(200);
	},
	slideRight: function() {
		var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
		a = {
			'w':parseInt($(".e-22").css('width')),
			'mw':parseInt($(".e-22a").css('width'))+10,
			'l':Number($(".e-22").css('margin-left').replace(/[^-\d\.]/g, ''))
		};
		b = a.l-a.mw;
		if (b<(a.mw-a.w)) {
			b = a.mw-a.w;
			$(".e-22b").eq(1).fadeOut(200);
		}
		$(".e-22").animate({'margin-left':b+"px"},250);
		$(".e-22b").eq(0).fadeIn(200);
	},
	leaveRequest: function() {
		var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;
		if ($(".e-60").eq(0).val().trim() === '') {
			return $(".e-60").eq(0).focus();
		} else if ($(".e-60").eq(1).val().trim() === '') {
			return $(".e-60").eq(1).focus();
		}
		a = window.location.pathname.split("/");
		b = a[ a.length - 1 ];
		
		c = {
			'leads':{
				'name': $(".e-60").eq(0).val().trim(),
				'phone': $(".e-60").eq(1).val().trim(),
				'city': '',
				'email': '',
				'comment':'Тур --- '+$("#direction").val(),
				'tour': $("#direction").val(),
				'url':window.location.pathname,
				'type':0,
				'company': 1
			}
		};
		$.post('https://www.afinadb.kz/ajax.php',c,function(data) {
			console.log(JSON.stringify(data)+"|");
		});
		$(".e-58").replaceWith('<div class="e-58a">Спасибо за заявку, с Вами скоро свяжутся!</div>');
	}
}
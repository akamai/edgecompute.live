(()=>{(function(e,r,d){let g=e("html"),c=e(r),R=e(d),u=e(".header");e.event.special.widthResize={setup:function(){let t=e(this);t.data("currentWidth",t.width()),t.on("resize.widthResize",function(){let o=t.width(),n=t.data("currentWidth");o!==n&&t.data("currentWidth",o).trigger("widthResize")})},teardown:function(){e(this).off("resize.widthResize")}};let l=()=>c.height(),h=()=>c.width();function a(t,o,n="",s=g){s.css(`--${t}`,`${o}${n}`)}a("dvh",l()*.01,"px"),a("current-dvh",l()*.01,"px"),a("dvw",h(),"px"),a("header-height",u.outerHeight(),"px"),c.on("resize",function(){a("current-dvh",l()*.01,"px"),a("header-height",u.outerHeight(),"px")}),c.on("widthResize",function(){a("dvh",l()*.01,"px"),a("dvw",h(),"px")});function b(t){let o=new Date(t),n=String(o.getDate()).padStart(2,"0"),s=String(o.getMonth()+1).padStart(2,"0"),i=o.getFullYear();return`${n}/${s}/${i}`}function y(t,o){let n=t.match(/github\.com\/([^\/]+)\/([^\/]+)/);if(n){let s=n[1],i=n[2];return`https://api.github.com/repos/${s}/${i}/commits?path=${encodeURIComponent(o)}`}return null}function x(t){let o=t.match(/github\.com\/[^\/]+\/[^\/]+\/tree\/[^\/]+\/(.+)/);if(o){let n=o[1];return decodeURIComponent(n)}return null}function v(t){return new Promise((o,n)=>{e.ajax({url:t,dataType:"text",success:function(s){try{o(s)}catch(i){n(new Error("Failed to stringify data: "+i.message))}},error:function(s,i,m){n(new Error(`Error ${s.status}: ${s.statusText}`))}})})}function C(){let t=e(this),o=t.data("target"),n=t.closest(".js-tabs").find(".tab");t.parent().addClass("current").siblings().removeClass("current"),o=="*"?(n.addClass("current"),t.closest(".js-tabs").addClass("is-both")):(n.eq(o-1).addClass("current").siblings().removeClass("current"),t.closest(".js-tabs").removeClass("is-both"))}function w(t){return t.toLowerCase().replace(/\s+/g,"-")}function U(t){return t.replace(/-/g," ")}e(".js-tabs .tabs__nav span").on("click",C);let p;e(".js-copy-code").on("click",function(){let t=e(this).closest(".tabs-code"),o=t.find(".js-entry-code code").text(),n=e("<textarea>").css({position:"absolute",left:"-9999px",opacity:"0"}).val(o);e("body").append(n),n.select(),d.execCommand("copy"),n.remove(),clearTimeout(p),t.addClass("copied"),p=setTimeout(()=>{t.removeClass("copied")},1e3)}),e("pre[data-ajax]").each(function(){let n=`https://raw.githubusercontent.com${e(this).data("ajax").replace("https://github.com","").replace("/tree","")}/main.js`,s=e(this).find("code");v(n).then(i=>{s.text(i),Prism.highlightElement(s[0])}).catch(i=>{console.error(i),s.text("Source code not available for this example.")})}),e(d).ready(function(){e(".js-time-updated").each(function(){let t=e(this),o=t.data("api-url");if(o){let n=x(o);if(n){let s=y(o,n);s?e.getJSON(s,function(i){if(i&&i.length>0){let m=new Date(i[0].commit.committer.date);t.text(b(m.toISOString()))}else t.text("No updates found")}).fail(function(){t.text("Error fetching data")}):t.text("Invalid GitHub URL")}else t.text("Invalid file path in GitHub URL")}else t.text("GitHub URL is empty")})});let j=r.location.pathname.split("/"),f=U(decodeURIComponent(j[2]));e("#category option").filter((t,o)=>e(o).val()===f).length>0&&e("#category").val(f),e(".js-filters-apply").on("click",function(t){t.preventDefault();let o=w(e("#category").val()),n=r.location.origin+"";o?r.location.href=n+"/categories/"+encodeURIComponent(o)+"/":o===""&&(r.location.href=n+"/examples/")}),e(".js-demos").on("click","a[data-demo-url]",function(t){t.preventDefault(),e(this).parent().addClass("current").siblings().removeClass("current");let o=e(this).data("demo-url");e(".js-demo-iframe").attr("src",o),e(".js-demo-url").text(o)}),e(".btn-play").magnificPopup({type:"iframe",iframe:{patterns:{youtube:{index:"youtube.com/",id:"v=",src:"https://www.youtube.com/embed/%id%?autoplay=1"}}}}),e(".nav-btn").on("click",function(t){e("body").toggleClass("nav-open")})})(jQuery,window,document);})();

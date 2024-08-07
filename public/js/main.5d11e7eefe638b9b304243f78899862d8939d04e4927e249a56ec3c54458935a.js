(()=>{(function(o,c,d){let g=o("html"),r=o(c),R=o(d),u=o(".header");o.event.special.widthResize={setup:function(){let t=o(this);t.data("currentWidth",t.width()),t.on("resize.widthResize",function(){let e=t.width(),n=t.data("currentWidth");e!==n&&t.data("currentWidth",e).trigger("widthResize")})},teardown:function(){o(this).off("resize.widthResize")}};let l=()=>r.height(),h=()=>r.width();function a(t,e,n="",i=g){i.css(`--${t}`,`${e}${n}`)}a("dvh",l()*.01,"px"),a("current-dvh",l()*.01,"px"),a("dvw",h(),"px"),a("header-height",u.outerHeight(),"px"),r.on("resize",function(){a("current-dvh",l()*.01,"px"),a("header-height",u.outerHeight(),"px")}),r.on("widthResize",function(){a("dvh",l()*.01,"px"),a("dvw",h(),"px")});function b(t){let e=new Date(t),n=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),s=e.getFullYear();return`${n}/${i}/${s}`}function y(t,e){let n=t.match(/github\.com\/([^\/]+)\/([^\/]+)/);if(n){let i=n[1],s=n[2];return`https://api.github.com/repos/${i}/${s}/commits?path=${encodeURIComponent(e)}`}return null}function x(t){let e=t.match(/github\.com\/[^\/]+\/[^\/]+\/tree\/[^\/]+\/(.+)/);if(e){let n=e[1];return decodeURIComponent(n)}return null}function v(t){return new Promise((e,n)=>{o.ajax({url:t,dataType:"text",success:function(i){try{e(i)}catch(s){n(new Error("Failed to stringify data: "+s.message))}},error:function(i,s,m){n(new Error(`Error ${i.status}: ${i.statusText}`))}})})}function w(){let t=o(this),e=t.data("target"),n=t.closest(".js-tabs").find(".tab");t.parent().addClass("current").siblings().removeClass("current"),e=="*"?(n.addClass("current"),t.closest(".js-tabs").addClass("is-both")):(n.eq(e-1).addClass("current").siblings().removeClass("current"),t.closest(".js-tabs").removeClass("is-both"))}function C(t){return t.toLowerCase().replace(/\s+/g,"-")}function U(t){return t.replace(/-/g," ")}o(".js-tabs .tabs__nav span").on("click",w);let p;o(".js-copy-code").on("click",function(){let t=o(this).closest(".tabs-code"),e=t.find(".js-entry-code code").text(),n=o("<textarea>").css({position:"absolute",left:"-9999px",opacity:"0"}).val(e);o("body").append(n),n.select(),d.execCommand("copy"),n.remove(),clearTimeout(p),t.addClass("copied"),p=setTimeout(()=>{t.removeClass("copied")},1e3)}),o("pre[data-ajax]").each(function(){let n=`https://raw.githubusercontent.com${o(this).data("ajax").replace("https://github.com","").replace("/tree","")}/main.js`,i=o(this).find("code");v(n).then(s=>{i.text(s),Prism.highlightElement(i[0])}).catch(s=>{console.error(s),i.text("Source code not available for this example.")})}),o(d).ready(function(){o(".js-time-updated").each(function(){let t=o(this),e=t.data("api-url");if(e){let n=x(e);if(n){let i=y(e,n);i?o.getJSON(i,function(s){if(s&&s.length>0){let m=new Date(s[0].commit.committer.date);t.text(b(m.toISOString()))}else t.text("No updates found")}).fail(function(){t.text("Error fetching data")}):t.text("Invalid GitHub URL")}else t.text("Invalid file path in GitHub URL")}else t.text("GitHub URL is empty")})});let j=c.location.pathname.split("/"),f=U(decodeURIComponent(j[2]));o("#category option").filter((t,e)=>o(e).val()===f).length>0&&o("#category").val(f),o(".js-filters-apply").on("click",function(t){t.preventDefault();let e=C(o("#category").val());e?c.location.href="/categories/"+encodeURIComponent(e)+"/":e==""&&(c.location.href="/examples/")}),o(".section__nav").on("click","a[data-demo-url]",function(t){t.preventDefault();let e=o(this).data("demo-url");o(".js-demo-iframe").attr("src",e),o(".js-demo-url").text(e)}),o(".btn-play").magnificPopup({type:"iframe",iframe:{patterns:{youtube:{index:"youtube.com/",id:"v=",src:"https://www.youtube.com/embed/%id%?autoplay=1"}}}}),o(".nav-btn").on("click",function(t){o("body").toggleClass("nav-open")})})(jQuery,window,document);})();

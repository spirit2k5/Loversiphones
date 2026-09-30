(function(){
  const GA_ID="";
  const state={loaded:false,ready:false};

  function loadGA(){
    if(!/^G-[A-Z0-9]+$/i.test(GA_ID)||state.loaded)return;
    state.loaded=true;
    window.dataLayer=window.dataLayer||[];
    window.gtag=window.gtag||function(){dataLayer.push(arguments)};
    window.gtag("js",new Date());
    window.gtag("config",GA_ID,{anonymize_ip:true,send_page_view:true});
    const s=document.createElement("script");
    s.async=true;
    s.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(GA_ID);
    s.onload=()=>state.ready=true;
    document.head.appendChild(s);
  }

  function event(name,params={}){
    if(!/^G-[A-Z0-9]+$/i.test(GA_ID))return;
    loadGA();
    const clean={};
    for(const [k,v] of Object.entries(params)){
      if(v===undefined||v===null)continue;
      clean[k]=typeof v==="string"?v.slice(0,100):v;
    }
    window.gtag&&window.gtag("event",name,clean);
  }

  window.LoversAnalytics={event,isConfigured:()=>/^G-[A-Z0-9]+$/i.test(GA_ID)};

  loadGA();

  document.addEventListener("click",e=>{
    const a=e.target.closest("a,button");
    if(!a)return;
    const href=a.getAttribute("href")||"";
    if(/wa\.me\/27612840013/i.test(href)) event("whatsapp_click",{location:a.closest("footer")?"footer":"site"});
    if(/^tel:/i.test(href)) event("call_click",{location:a.closest("footer")?"footer":"site"});
    if(/^mailto:/i.test(href)) event("email_click");
    if(a.classList.contains("order-card")||a.closest(".order-card")) event("begin_order",{source:"product_card"});
    if(a.classList.contains("photo-thumb")||a.closest(".photo-thumb")) {
      const b=a.closest(".photo-thumb");
      event("choose_colour",{colour:b?.dataset?.colour||""});
    }
    if(a.classList.contains("angle-thumb")||a.closest(".angle-thumb")||a.classList.contains("detail-angle-thumb")||a.closest(".detail-angle-thumb")) {
      event("view_angle");
    }
    if(a.classList.contains("card-detail-link")) {
      event("open_product_page",{product:a.closest(".product-card")?.dataset?.name||""});
    }
  },true);

  document.addEventListener("submit",e=>{
    if(e.target?.id==="orderForm") event("order_form_submit",{form:"main"});
    if(e.target?.id==="quickForm") event("order_form_submit",{form:"quick"});
  },true);

  const search=document.getElementById("searchInput");
  if(search){
    let fired=false;
    search.addEventListener("input",()=>{if(!fired&&search.value.trim()){fired=true;event("catalog_search_used");}});
  }
  const sort=document.getElementById("sortSelect");
  sort?.addEventListener("change",()=>event("catalog_sort",{sort:sort.value}));

  if(location.pathname.startsWith("/phones/")){
    const product=document.querySelector(".phone-detail h1")?.textContent?.trim()||document.title.split("|")[0].trim();
    event("view_phone_page",{product});
  }
})();
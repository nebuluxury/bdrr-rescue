// Big Dog Ranch Rescue - concept site behaviour
(function(){
  // Inject shared icon sprite
  if(!document.getElementById('i-paw')){
    fetch('assets/icons.svg').then(function(r){return r.text();}).then(function(t){
      var d=document.createElement('div');d.style.display='none';d.setAttribute('aria-hidden','true');
      d.innerHTML=t;document.body.insertBefore(d,document.body.firstChild);
    }).catch(function(){});
  }

  // Mobile menu
  var mb=document.getElementById('menuBtn'),nl=document.getElementById('navlinks');
  if(mb&&nl){
    mb.addEventListener('click',function(){nl.classList.toggle('open');});
    nl.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nl.classList.remove('open');});});
  }

  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Count-up stats
  function countUp(el){
    var target=parseFloat(el.getAttribute('data-count'));
    var suffix=el.getAttribute('data-suffix')||'';
    var t0=null,dur=1400;
    function step(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/dur,1);
      var v=Math.floor(target*p);el.textContent=v.toLocaleString()+suffix;
      if(p<1)requestAnimationFrame(step);else el.textContent=target.toLocaleString()+suffix;}
    if(reduce){el.textContent=target.toLocaleString()+suffix;return;}
    requestAnimationFrame(step);
  }
  var statWrap=document.querySelector('[data-stats]');
  if(statWrap&&'IntersectionObserver'in window){
    var done=false;
    new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&!done){done=true;statWrap.querySelectorAll('[data-count]').forEach(countUp);}});},{threshold:.3}).observe(statWrap);
  }

  // ---- Adoptable dogs (sample data; swap for BDRR live feed) ----
  var DOGS=[
    {name:"Biscuit",breed:"Beagle",size:"Small",age:"Adult",sex:"Male",img:16,tags:["Good with kids","Good with dogs"],blurb:"A Ridglan rescue seeing grass for the first time. Gentle, curious, and ready for a couch."},
    {name:"Willow",breed:"Labrador Retriever",size:"Large",age:"Young",sex:"Female",img:22,tags:["High energy","Good with dogs"],blurb:"A goofy, fetch-obsessed girl who would love an active family and a big yard."},
    {name:"Momma Rose",breed:"Terrier Mix",size:"Medium",age:"Senior",sex:"Female",img:38,tags:["House-trained","Lap dog"],blurb:"Ten years young and pure velvet. Momma Rose just wants a quiet lap to call her own."},
    {name:"Diego",breed:"Chihuahua",size:"Small",age:"Adult",sex:"Male",img:45,tags:["Good with cats","Apartment ok"],blurb:"Small but mighty, Diego is a big personality in a five-pound package."},
    {name:"Bear",breed:"German Shepherd",size:"X-Large",age:"Young",sex:"Male",img:58,tags:["Loyal","Needs training"],blurb:"A rescued shepherd with a heart of gold, looking for a confident, loving guide."},
    {name:"Clementine",breed:"Beagle",size:"Small",age:"Puppy",sex:"Female",img:63,tags:["Good with kids","Playful"],blurb:"Born into a lab, now free. Clem is discovering toys, treats, and belly rubs."},
    {name:"Gus",breed:"Hound Mix",size:"Large",age:"Senior",sex:"Male",img:71,tags:["Mellow","House-trained"],blurb:"An old soul with a slow tail wag and a talent for napping in sunbeams."},
    {name:"Pepper",breed:"Pit Bull Mix",size:"Medium",age:"Adult",sex:"Female",img:80,tags:["Cuddly","Good with dogs"],blurb:"Pepper leans in for hugs and never wants to let go. A true velcro dog."},
    {name:"Scout",breed:"Beagle",size:"Small",age:"Adult",sex:"Male",img:88,tags:["Curious","Good with dogs"],blurb:"Nose to the ground, tail in the air. Scout is ready to sniff out his forever home."},
    {name:"Luna",breed:"Husky",size:"Large",age:"Young",sex:"Female",img:95,tags:["High energy","Vocal"],blurb:"Talkative, athletic, and stunning. Luna needs a family who loves adventure."},
    {name:"Winston",breed:"Bulldog",size:"Medium",age:"Senior",sex:"Male",img:104,tags:["Low energy","House-trained"],blurb:"A distinguished gentleman who snores like a freight train and loves like no other."},
    {name:"Daisy",breed:"Dachshund",size:"Small",age:"Adult",sex:"Female",img:112,tags:["Good with cats","Lap dog"],blurb:"A little hot dog with a huge heart, happiest tucked under a blanket."},
    {name:"Rocky",breed:"Boxer",size:"Large",age:"Young",sex:"Male",img:120,tags:["Playful","Needs yard"],blurb:"All wiggles and zoomies, Rocky is a bundle of joy looking for a playmate."},
    {name:"Olive",breed:"Poodle Mix",size:"Small",age:"Puppy",sex:"Female",img:128,tags:["Hypoallergenic","Good with kids"],blurb:"A fluffy, smart little cloud who is eager to learn and even more eager to snuggle."},
    {name:"Duke",breed:"Great Dane",size:"X-Large",age:"Adult",sex:"Male",img:136,tags:["Gentle giant","Good with kids"],blurb:"Duke thinks he is a lap dog. All 130 pounds of him. He is very wrong, and very sweet."},
    {name:"Millie",breed:"Beagle",size:"Small",age:"Senior",sex:"Female",img:144,tags:["Mellow","House-trained"],blurb:"After years in a cage, Millie savors every soft bed and every kind word."},
    {name:"Cooper",breed:"Golden Retriever",size:"Large",age:"Adult",sex:"Male",img:152,tags:["Good with kids","Good with dogs"],blurb:"The classic golden boy: patient, playful, and endlessly loyal."},
    {name:"Ruby",breed:"Terrier Mix",size:"Small",age:"Young",sex:"Female",img:160,tags:["Spunky","Apartment ok"],blurb:"A pocket-sized firecracker with the biggest ears and the sweetest eyes."},
    {name:"Tank",breed:"Mastiff Mix",size:"X-Large",age:"Senior",sex:"Male",img:168,tags:["Gentle giant","Low energy"],blurb:"A big, slow, snuggly senior who asks for nothing but a soft place and a friend."},
    {name:"Poppy",breed:"Australian Shepherd",size:"Medium",age:"Young",sex:"Female",img:176,tags:["Smart","High energy"],blurb:"Brilliant and busy, Poppy would thrive with a job to do and a hand to work with."},
    {name:"Max",breed:"Labrador Retriever",size:"Large",age:"Adult",sex:"Male",img:184,tags:["Good with kids","Mellow"],blurb:"A steady, easygoing companion who is happiest by your side, wherever that is."},
    {name:"Bella",breed:"Chihuahua",size:"Small",age:"Senior",sex:"Female",img:192,tags:["Lap dog","Quiet"],blurb:"Twelve years old and looking for a lap to retire on. Seniors for seniors welcome."}
  ];
  var favs;
  try{favs=JSON.parse(localStorage.getItem('bdrr_favs')||'[]');}catch(e){favs=[];}
  function saveFavs(){try{localStorage.setItem('bdrr_favs',JSON.stringify(favs));}catch(e){}}

  function dogCard(d){
    var seniorBadge=d.age==="Senior"?'<span class="badge senior">Senior</span>':(d.breed==="Beagle"?'<span class="badge">Beagle</span>':'');
    var on=favs.indexOf(d.name)>-1?' on':'';
    var meta='<span>'+d.breed+'</span><span>'+d.age+'</span><span>'+d.size+'</span><span>'+d.sex+'</span>';
    return '<article class="dog">'
      +'<div class="ph"><img loading="lazy" src="https://placedog.net/640/480?id='+d.img+'" alt="'+d.name+'" />'
      +seniorBadge
      +'<button class="fav'+on+'" data-fav="'+d.name+'" aria-label="Save '+d.name+'"><svg class="i"><use href="#i-heart"/></svg></button></div>'
      +'<div class="tx"><h3>'+d.name+'</h3><div class="meta">'+meta+'</div><p>'+d.blurb+'</p>'
      +'<a class="meet" href="#">Meet '+d.name+' <svg class="i"><use href="#i-arrow"/></svg></a></div></article>';
  }

  // Featured dogs on home
  var featured=document.getElementById('featured-dogs');
  if(featured){
    featured.innerHTML=DOGS.slice(0,8).map(dogCard).join('');
  }

  // Full search page
  var results=document.getElementById('dog-results');
  if(results){
    var fSearch=document.getElementById('f-search'),fBreed=document.getElementById('f-breed'),
        fSize=document.getElementById('f-size'),fAge=document.getElementById('f-age'),
        fSex=document.getElementById('f-sex'),fReset=document.getElementById('f-reset'),
        countEl=document.getElementById('result-count'),noMatch=document.getElementById('no-match');
    // populate breeds
    if(fBreed){
      var breeds=DOGS.map(function(d){return d.breed;}).filter(function(v,i,a){return a.indexOf(v)===i;}).sort();
      breeds.forEach(function(b){var o=document.createElement('option');o.value=b;o.textContent=b;fBreed.appendChild(o);});
    }
    function render(){
      var q=(fSearch&&fSearch.value||'').toLowerCase().trim();
      var list=DOGS.filter(function(d){
        if(q && d.name.toLowerCase().indexOf(q)===-1 && d.breed.toLowerCase().indexOf(q)===-1) return false;
        if(fBreed&&fBreed.value&&d.breed!==fBreed.value) return false;
        if(fSize&&fSize.value&&d.size!==fSize.value) return false;
        if(fAge&&fAge.value&&d.age!==fAge.value) return false;
        if(fSex&&fSex.value&&d.sex!==fSex.value) return false;
        return true;
      });
      results.innerHTML=list.map(dogCard).join('');
      if(countEl) countEl.textContent=list.length+(list.length===1?' dog':' dogs')+' looking for a home';
      if(noMatch) noMatch.classList.toggle('show',list.length===0);
    }
    [fSearch,fBreed,fSize,fAge,fSex].forEach(function(el){if(el){el.addEventListener('input',render);el.addEventListener('change',render);}});
    if(fReset) fReset.addEventListener('click',function(){[fSearch,fBreed,fSize,fAge,fSex].forEach(function(el){if(el)el.value='';});render();});
    // preselect senior via ?age=Senior
    var qp=new URLSearchParams(location.search);
    if(qp.get('age')&&fAge){fAge.value=qp.get('age');}
    if(qp.get('breed')&&fBreed){/* set after populate */ setTimeout(function(){fBreed.value=qp.get('breed');render();},0);}
    render();
  }

  // Favorite toggling (event delegation)
  document.addEventListener('click',function(e){
    var b=e.target.closest && e.target.closest('[data-fav]');
    if(!b) return;
    e.preventDefault();
    var n=b.getAttribute('data-fav'),i=favs.indexOf(n);
    if(i>-1){favs.splice(i,1);b.classList.remove('on');}else{favs.push(n);b.classList.add('on');}
    saveFavs();
  });

  // Donate give-triad
  document.querySelectorAll('.give-triad').forEach(function(g){
    g.querySelectorAll('.seg').forEach(function(s){
      s.addEventListener('click',function(){g.querySelectorAll('.seg').forEach(function(x){x.classList.remove('active');});s.classList.add('active');});
    });
  });

  // Forms -> mailto fallback (swap action for a real endpoint later)
  document.querySelectorAll('.rc-form').forEach(function(f){
    f.addEventListener('submit',function(e){
      var action=f.getAttribute('action')||'';
      if(action.indexOf('formspree')===-1 || action.indexOf('YOUR_FORM_ID')!==-1){
        e.preventDefault();
        var data=new FormData(f),lines=[];
        data.forEach(function(v,k){if(k.charAt(0)!=='_'&&v)lines.push(k+': '+v);});
        var subj=encodeURIComponent(f.getAttribute('data-subject')||'Website message');
        var body=encodeURIComponent(lines.join('\n')+'\n\n(Sent from the BDRR website)');
        var ok=f.querySelector('.form-ok');if(ok)ok.style.display='block';
        window.location.href='mailto:saveadog@bdrr.org?subject='+subj+'&body='+body;
      }
    });
  });
})();

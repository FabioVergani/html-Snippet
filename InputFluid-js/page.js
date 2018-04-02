($=>{
	const at=(a,b,c)=>{const f=()=>{a.removeEventListener(b,c)};f();a.addEventListener(b,c);return f};
	let f=at($,'DOMContentLoaded',x=>{
		f();
		f=null;
		const inibit=x=>{x.preventDefault();x.stopPropagation()},$d=x.target,$id=x=>{return $d.getElementById(x)},In=$id('bm-in'),Out=$id('bm-out'),Title=$id('bm-title'),Link=$id('bm-link'),HideShow=(a,b,c)=>{inibit(a);b.style.display='none';c.style.display='block';return c};

		at(Link,'click',(e)=>{
			Title.style.height=Link.scrollHeight+'px';
			HideShow(e,Link,Title).focus();
		});

		at(Title,'change',(e)=>{
			Link.href='#';
			Link.innerHTML=Title.value;
		});

		at(Title,'blur',(e)=>{
			HideShow(e,Title,Link);
		});



		at(Title,'scroll',(e)=>{
			Title.style.height=Title.scrollHeight+'px';
		});


	});
})(window);
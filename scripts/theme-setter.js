const currentTheme = localStorage.getItem('theme');

if(currentTheme){
	document.documentElement.setAttribute('data-theme', currentTheme);
	
	if(currentTheme==='light'){
		toggleSwitch.checked = true;
	}
}
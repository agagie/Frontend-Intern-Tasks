exports.damage = function damageCounter(spellString)
	{
    
    var damage= 0;
    var start = spellString.indexOf('fe');
	var stop = spellString.lastIndexOf('ai');
   	var newString = spellString.substring(stop+2,start);
		
	if (start >= 0 && stop >0 && newString.indexOf('fe',2)<0) {
		damage += 3; // 1-damage of 'fe', 2-damageof 'ai'
		newString = newString.replace('fe','');
		newString = newString.replace('ai','');
		
	if (newString.indexOf('jee')>0) {
		damage += 3; //3-damage of 'jee'
		newString = newString.replace('jee','');
	}
    	if (newString.indexOf('ain')>0) {
		damage += 3; //3-damage of 'ain'
		newString = newString.replace('ain','');
	}
	if (newString.indexOf('dai')>0) {
		damage += 5; //5-damage of 'dai'
		newString = newString.replace('dai','');
	}
	if (newString.indexOf('je')>0) {
		damage += 2;//2-damage of 'je'
		newString = newString.replace('je','');
	}
	if (newString.indexOf('ne')>0) {
		damage += 2; //2-damage of 'ne'
		newString = newString.replace('ne','');
	}
	if (newString.indexOf('ai')>0) {
		damage += 2; //2-damage of 'jee'
		newString = newString.replace('ai','');
	}
	}

	if (newString.length > 0) {
		damage -= newString.length;;
	}
	
	if (damage < 0) {
		damage = 0; 
	 }
	return damage;
    
	
}

	
		
				 
	
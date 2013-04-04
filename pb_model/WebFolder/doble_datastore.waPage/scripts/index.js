
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var idLimit2 = {};	// @textField
	var idLimit = {};	// @slider
// @endregion// @endlock

// eventHandlers// @lock

	idLimit2.keyup = function idLimit2_keyup (event)// @startlock
	{// @endlock
		var theLimit = $$("idLimit2").getValue();
		//poner el valor del slider al input Text
		$$("idLimit").setValue(theLimit);
		
		sources.mayor_cliente.query("edad < " + theLimit + " order by edad");
		sources.menor_cliente.query("edad >= " + theLimit + " order by edad");
	};// @lock

	idLimit.slide = function idLimit_slide (event)// @startlock
	{// @endlock
		//coger el valor del slider
		var theLimit = $$("idLimit").getValue();
		//poner el valor del slider al input Text
		$$("idLimit2").setValue(theLimit);
		
		//devuelve consultas:
		sources.mayor_cliente.query("edad < " + theLimit + " order by edad");
		sources.menor_cliente.query("edad >= " + theLimit + " order by edad");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("idLimit2", "keyup", idLimit2.keyup, "WAF");
	WAF.addListener("idLimit", "slide", idLimit.slide, "WAF");
// @endregion
};// @endlock

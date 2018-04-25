({
	update : function(component, event, helper) {
		 let record = component.get('v.formInputConfig.record'),
            fieldName =  event.getSource().get('v.fieldName');
        
        record[fieldName] = event.getParam('value');
        component.set("v.formInputConfig.record",record);
	}
})
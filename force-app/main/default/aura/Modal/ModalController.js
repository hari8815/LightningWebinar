({
	toogleModal : function(component, event, helper) {
		$A.util.toggleClass(component.find("modal"),'slds-fade-in-open');
        $A.util.toggleClass(component.find("modal-backdrop"),'slds-backdrop--open');
	}
})
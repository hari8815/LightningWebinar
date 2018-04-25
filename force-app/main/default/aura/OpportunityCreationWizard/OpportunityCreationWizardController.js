({
	doinit : function(component, event, helper) {
        helper.initializeFormView(component);
        component.find("oppWizard").openModal();
	},
    next : function(component, event, helper) {
        if(component.get("v.screenName") == 'step1'){
            component.set("v.screenName",'step2'); 
        } else if(component.get("v.screenName") == 'step2'){
            component.set("v.screenName",'step3'); 
        }
	},
    previous : function(component, event, helper) {
        if(component.get("v.screenName") == 'step2'){
            component.set("v.screenName",'step1'); 
        } else if(component.get("v.screenName") == 'step3'){
            component.set("v.screenName",'step2'); 
        }
    },
    closeWizard : function(component, event, helper){
        component.find('oppWizard').closeModal();
        helper.initializeFormView(component);
    },
    save : function(component, event, helper) {
		var formView = component.get('v.formView');   
        console.log(formView);
        var action = component.get("c.saveRecord");

        action.setParams({
            'accountRecord':JSON.stringify(formView.Account.record),
            'contactRecord':JSON.stringify(formView.Contact.record),
            'opportunityRecord':JSON.stringify(formView.Opportunity.record)
        });
        
        action.setCallback(this,function(response){
            console.log(response.getReturnValue());
            if(response.getState() === 'SUCCESS'){
                var navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
                    "recordId": response.getReturnValue()
                });
                navEvt.fire();
            } else {
                console.log(response.getError());
            }
        });
        
        $A.enqueueAction(action);
    },
    update : function(component, event, helper) {
            var fieldName =  event.getSource().get('v.fieldName');
        
       console.log('dfdf',fieldName,event.getParam('value')) ;
	}
})
({
	initializeFormView : function(component) {
		let accountFields = [
            {'fieldName':'Name','label':'Name'},
            {'fieldName':'Industry','label':'Industry'},
            {'fieldName':'Type','label':'Type'},
            {'fieldName':'AnnualRevenue','label':'AnnualRevenue'}
        ];
        
        let contactFields = [
            {'fieldName':'FirstName','label':'FirstName'},
            {'fieldName':'LastName','label':'LastName'},
            {'fieldName':'Birthdate','label':'Birthdate'},
            {'fieldName':'Phone','label':'Phone'},
            {'fieldName':'Email','label':'Email'}
        ];
        
        let opportunityFields = [
            {'fieldName':'Name','label':'Name'},
            {'fieldName':'StageName','label':'StageName'},
            {'fieldName':'CloseDate','label':'CloseDate'},
            {'fieldName':'Amount','label':'Amount'}
        ];

        let formView = {
            'Account':{
            	'sObjectType' :'Account',
                'fields':accountFields,
            	'record':{'sObjectType':'Account','Name':'','Industry':'', 'Type' : '', 'AnnualRevenue' : ''},
                'title':'Account Information'
            },
            'Contact':{
                'sObjectType' :'Contact',
                'fields':contactFields,
                'record':{'sObjectType':'Contact','LastName':'','FirstName':'','Birthdate':'', 'Phone':'', 'Email':''},
                'title':'Contact Information'
             },
            'Opportunity':{
             	'sObjectType' :'Opportunity',
                'fields':opportunityFields,
                'record':{'sObjectType':'Opportunity','Name':'','Amount':'','CloseDate':'','StageName':'','Amount':''},
                'title':'Opportunity Information'
             }
        };
        
        component.set("v.formView",formView);
        component.set("v.screenName",'step1');
	}
})
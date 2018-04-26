public class OpportunityCreationWizard {
	
    @AuraEnabled
    public static Id saveRecord(Account accountRecord,Contact contactRecord, Opportunity opportunityRecord) {
        Account acc = accountRecord;
        Contact con = contactRecord;

        acc.Phone = con.Phone;
        insert acc;
        
        con.AccountId = acc.Id;
        insert con;

        Opportunity opp = opportunityRecord;
        opp.AccountId = acc.Id;
        insert opp;
        
        return opp.Id;
    }
}

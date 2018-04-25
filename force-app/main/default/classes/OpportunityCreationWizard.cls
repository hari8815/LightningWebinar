public class OpportunityCreationWizard {
	
    @AuraEnabled
    public static Id saveRecord(String accountRecord,String contactRecord, String opportunityRecord) {
        Account acc = (Account) JSON.deserialize(accountRecord, Account.Class);
        Contact con = (Contact) JSON.deserialize(contactRecord, Contact.Class);

        acc.Phone = con.Phone;
        insert acc;
        
        con.AccountId = acc.Id;
        insert con;

        Opportunity opp = (Opportunity) JSON.deserialize(opportunityRecord, Opportunity.Class);
        opp.AccountId = acc.Id;
        insert opp;
        
        return opp.Id;
    }
}
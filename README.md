**<h2> Title: </h2>**
   This project contains demo of multi-step wizard process which allows users to create Account, Contact and Opportunity record developed using both Visualforce page and Lightning Component.


**<h3> Steps to deploy to Salesforce: </h3>**

**<h4> Prerequisites:</h4>**
   
   1. Salesforce CLI install latest version  [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli/)
   2. Install [Git include CLI and Bash](https://git-scm.com/downloads)

   **<h4>Steps:</h4>**
   
   1. Download the git project or clone the project in terminal window by the below command

      ```git clone https://github.com/SoftsquareSolutions/LightningWebinar.git```

   2. Extract the zip file and navigate to the `LightningWebinar` folder in the terminal window.

   3. Authenticate with salesforce by

      ```sfdx force:auth:web:login -d -a devHub```

      (It will automatically redirect the default browser to the login.salesforce.com to Authenticate).

   4. Create scratch org

      ```sfdx force:org:create -f config/project-scratch-def.json -s -a devOrg```


   5. Push the meta data components,Lightning Components, Visualforce page and it's controller to the scratch org by the following command:

      ```sfdx force:source:push```


   6. Once you push the meta data components to the scratch org, Open the scratch org by the following command:

      ```sfdx force:org:open```


   7. In the Salesforce org, Click the Apps Icon and find the `Lightning Webinar Demo`, You will see the `Opportunity Wizard - LC `and `Opportunity Wizard - VF` tabs.
   
   
**Visualforce Wizard Demo:**

Comprises of following pages and apex class which used to build the Opportunity creation wizard view:

 **1) Visualforce Pages:**
 
     OpportunityWizardStep1 => Collects the Account information
     
     OpportunityWizardStep2 => Collects the Contact information
     
     OpportunityWizardStep3 => Collect the Opportunity information

 **2) Apex Class:**
     **OpportunityWizardController:**
     
         i) Its the Apex controller which common to the above pages which helps us maintain the state when switching between the wizard steps
         
         ii) Contains the Account, Contact and Opportunity creation.

**Lightning Component Demo:**

 Comprises of following lightning component and controller which used to build the Opportunity creation wizard view:

 **Lightning Components:**

  **FormComponent:**
  
   - FormComponent shows the fields in the edit view based on the JSON data passed to it. 
   - So everytime you interact with the view, the JSON is updated using the change action in the lightning:inputField.

  **OpportunityCreationWizard:**

   - It is the container component which display the wizard flow.
   - Wizard flow is 3 step process which display Account, Contact and Opportunity View.
   - Based on the current step, appropriate view and buttons are shown / hidden based on the 'formView' data passed to the 'FormComponent'.
   - Saving the form will create Account, Contact and Opportunity records in the apex class.

  **Modal:**
   - It is reusable component which can use to show display content in a layer above the app.
   - It has 3 primary attributes:
       header  => Hold the title of the Modal
       content => Hold the content need to shown in the modal
       footer  => Hold the button actions

 **Apex Class:**

  **OpportunityCreationWizard:**
   - It is the apex controller used by the Lightning Component to create the records for the wizard.
   - 'saveRecord' method which accepts 3 parameters: Account, contact and Opportunity instance and inserts them in the database
            


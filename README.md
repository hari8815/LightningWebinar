**Introduction:**
   This project contains demo of multi-step wizard process which allows users to create Account, Contact and Opportunity record developed using both Visualforce page and Lightning Component.

**Prerequisites:**
   
   1. Salesforce CLI install latest version  [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli/).
   2. Install [Git include CLI and Bash](https://git-scm.com/downloads).

**Steps to deploy to Salesforce:**

   1. Download the git project or clone the project in terminal window by

      ```git clone https://github.com/SoftsquareSolutions/LightningWebinar.git```

   2. Extract the zip file and navigate to the `LightningWebinar` folder in the terminal window.

   3. Authenticate with salesforce by

      ```sfdx force:auth:web:login -d -a devHub```

      (It will automatically redirect the default browser to the login.salesforce.com to Authenticate).

   4. Create scratch org

      ```sfdx force:org:create -f config/project-scratch-def.json -s -a devOrg```


   5. Push the meta data components,Lightning Components, Visualforce page and it's controller to the scratch org by the following command,

      ```sfdx force:source:push```


   6. Once you push the meta data components to the scratch org, Open the scratch org by the following command,

      ```sfdx force:org:open```


   7. In the salesforce org, Click the Apps Icon and find the `Lightning Webinar Demo`, You will see the `Opportunity Wizard - LC `and `Opportunity Wizard - VF` tabs.
   
   **Code Explanation:**
   
   

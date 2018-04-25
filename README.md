
**Prerequisite:-**
   
   1. Salesforce CLI Latest version [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli/).
   2. Git [Git include CLI and Bash](https://git-scm.com/downloads).

**Deploy to salesforce:-**

   1. Download the git project or clone the project in terminal window by

      ```$ git clone https://github.com/SoftsquareSolutions/LightningWebinar.git```

   2. Extract the zip file and open the `LightningWebinar` folder in the terminal window.

   3. Authenticate with salesforce by

      ```$ sfdx force:auth:web:login -d -a devHub```

      (It will automatically redirect the default browser to the login.salesforce.com to Authenticate).

   4. Create scratch org

      ```$ sfdx force:org:create -f config/project-scratch-def.json -s -a devOrg```


   5. Push the meta data components,Lightning Components, Visualforce page and it's controller to the scratch org by the following command,

      ```$ sfdx force:source:push```


   6. Once you push the meta data components to the scratch org, Open the scratch org by the following command,

      ```$ sfdx force:org:open```


   7. In the salesforce org, Click the Apps Icon and find the `Lightning Webinar Demo`, You will see the `Opportunity Wizard - LC `and `Opportunity Wizard - VF` taps.

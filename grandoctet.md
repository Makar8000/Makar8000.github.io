---
title: Grand Octet Triggernometry
---

## Grand Octet Triggernometry

### Step 1: Download the Triggernometry Plugin

1. [Download](http://www.mediafire.com/file/x2mebcy52ex3ddb/Triggernometry_1_0_3_2.zip) the latest version (1.0.3.2).
2. Right-click the zip file, then click `Properties`.
3. At the bottom of the properties, make sure to [unblock](https://i.imgur.com/6zBBcYq.png) the zip.
4. Extract the zip and put the Triggernometry.dll file into your ACT or Plugin folder.
5. In ACT, go to `Plugins > Plugin Listing`.
6. Browse for `Triggernometry.dll` in the extracted folder, then click `Add/Enable Plugin`.

### Step 2: Import the Grand Octet Triggernometry XML File

1. [Download](https://puu.sh/yK36S/e3957743c5.zip) the zip file and extract the XML file somewhere.
2. In ACT, go to `Plugins > Triggernometry`, then click `Import` (If it's grayyed out, make sure the "Root" folder is selected).
3. Select `Load from file`.
4. Browse for `TriggernometryExport.xml` in the extracted folder.
5. Click `Next`, make sure the `Grand Octet` folder is selected, then click `Import`.


### Step 3: Modify the trigger for your character name

1. In ACT, expand the `Grand Octet` folder. Make sure all Triggers are checked.
2. Right-click `Grand Octet 4 - Twintania Call`, then choose [Edit](https://i.imgur.com/QERXGPh.png).
2. Click on the `Conditions` tab.
3. Click on the second option in the list (Should be `String expression (${var:list} ...`).
4. Click on `Edit Condition`.
5. In the last box, change `Medori` to the **first name** of your character.
6. Click `Save Changes` on the open windows.

### BONUS: Modify the TTS callout for the trigger

1. In ACT, expand the `Grand Octet` folder.
2. Right-click `Grand Octet 4 - Twintania Call`, then choose [Edit](https://i.imgur.com/QERXGPh.png).
3. In the `Trigger Actions` tab, select the first option (Should be `Say (Twin Dive ...`).
4. Click on `Edit action`.
5. Modify the `Text to say` box as desired.

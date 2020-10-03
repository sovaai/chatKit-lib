# modulesAPI 
This method is responsible for connecting modules


# Usage
To make any changes you need: 
 
* call method `ckAPIMethods.modulesAPI` 
* enter name of event and send data with the required keys  


## Arguments
| Value          |                                 |
|----------------|---------------------------------|
| eventName      | event name                      |
| data           | data depends on the event       |

Description of events and its data read read below.


## List of events
| Event name                                  |                                 |
|---------------------------------------------|---------------------------------|
| [initModule](#initModule)                   | module initialization           |
| [initModuleHistory](#initModuleHistory)     | module history initialization   |
| [switchModule](#switchModule)               | switch module                   |
| [updateModuleConfig](#updateModuleConfig)   | update module configuration     |




### initModule 
module initialization

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

('initModule', module_name)
```

**Data**:

| Key             |   Type     | Required  |  Description            |
|-----------------|------------|-----------|-------------------------|
| module_name     | string     |     +     | module name             |




### initModuleHistory
module history initialization

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

('initModuleHistory', module_name)
```

**Data**:

| Key             |   Type     | Required  |  Description            |
|-----------------|------------|-----------|-------------------------|
| module_name     | string     |     +     | module name             |



### switchModule 
switch module

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

('switchModule', moduleName)
```

**Data**:

| Key             |   Type     | Required  |  Description            |
|-----------------|------------|-----------|-------------------------|
| moduleName      | string     |     +     | module name             |



### updateModuleConfig  
update module configuration

**Usage**:
```javascript
import { ckAPIMethods } from "sova-chatkit"

('updateModuleConfig', updateInfo)
```

**Data**:

| Key             |   Type     | Required  |  Description                   |
|-----------------|------------|-----------|--------------------------------|
| updateInfo      | object     |     +     | data depends of chosen module  |

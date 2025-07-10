---
name: Add Node Documentation
about: Add a new node to the documentation site
title: '[NODE] Add [Node Name] documentation'
labels: ['documentation']
assignees: ''

---

<!-- 
INSTRUCTIONS: 
- Please fill out all sections below with the appropriate information for your node
- Fill in the values directly after the colons (on the same line)
- Remove all instructional text (text in comments like this and placeholder descriptions)
- Ensure your icon (if provided) is base64 encoded and under 128KB
- Keep descriptions concise and informative
-->

## Node Information

### Basic Details
**Title:** Enter node title here
**Category:** Example: input, processing, output, LLM, flow, trigger
**Type:** Enter unique identifier (e.g., str_var, api_node)
**Short Description:** One line description of what the node does
**Difficulty:** Choose one: easy, medium, hard
**Tags:** List up to 5 tags separated by commas

### Icon (Optional)
**Icon Type:** png, jpg, or svg (leave empty if no icon)
**Icon Content:** Base64 encoded image data (leave empty if no icon)

### Detailed Description
**Long Description:** Detailed explanation of the node's functionality (max 500 words)

### Use Cases
**Use Cases:** 
- Use case 1
- Use case 2
- Use case 3

### Technical Specifications

#### Inputs
<!-- List all input connections this node accepts. Format each as:
**Input Name:** [Type] - Description
Example: **Flow:** [Flow] - The flow of the workflow
-->

#### Outputs  
<!-- List all output connections this node provides. Format each as:
**Output Name:** [Type] - Description
Example: **Text:** [Text] - The text entered by the user
-->

#### Fields
<!-- List all configurable fields in the node. Format each as:
**Field Name:** [Type] - Description (Default: value)
For select fields, also list options: (Default: value, Options: option1, option2, option3)
For sliders, include min/max/step: (Default: 0.5, Min: 0, Max: 1, Step: 0.01)
Example: **Temperature:** [Slider] - Creativity of the LLM (Default: 0.5, Min: 0, Max: 1, Step: 0.01)
-->

### Examples (Optional)
**Example Title:** Example name
**Example Description:** What this example demonstrates
**Example Steps:** 
1. Step 1
2. Step 2
3. Step 3

---

<!-- 
VALIDATION CHECKLIST (remove before submitting):
- [ ] All required fields are filled out
- [ ] Category is one of: input, processing, output, LLM, flow, trigger
- [ ] Difficulty is one of: easy, medium, hard  
- [ ] Tags list has 5 or fewer items
- [ ] Long description is under 500 words
- [ ] Icon (if provided) is base64 encoded and under 128KB
- [ ] All instructional text has been removed
-->

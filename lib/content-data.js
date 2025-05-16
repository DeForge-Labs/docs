// Core concepts data
export const coreConcepts = [
  {
    id: "nodes",
    title: "Nodes",
    description: "Learn about the building blocks of Deforge workflows.",
    link: "/docs/nodes-concept",
    icon: "Boxes",
  },
  {
    id: "connections",
    title: "Connections",
    description: "Understand how to connect nodes to create workflows.",
    link: "/docs/connections",
    icon: "Link",
  },
  {
    id: "deployment",
    title: "Deployment",
    description: "Deploy your AI agents to production environments.",
    link: "/docs/deployment",
    icon: "Rocket",
  },
];

// Documentation pages content
export const docPages = [
  {
    id: "introduction",
    title: "Introduction to Deforge",
    description:
      "Learn about Deforge and how it can help you build AI agents without code.",
    sections: [
      {
        id: "what-is-deforge",
        title: "What is Deforge?",
        content:
          "Deforge is a powerful visual platform that allows you to build AI agents without writing a single line of code. Using an intuitive node-based interface, you can create, connect, and deploy sophisticated AI workflows that can automate tasks, process data, and interact with external services.",
      },
      {
        id: "key-features",
        title: "Key Features",
        content:
          "Deforge offers a range of features that make AI development accessible to everyone:",
        subsections: [
          {
            id: "visual-interface",
            title: "Visual Node-Based Interface",
            content:
              "Create complex AI workflows by connecting nodes in a visual canvas. No coding required - just drag, drop, and connect.",
          },
          {
            id: "extensive-node-library",
            title: "Extensive Node Library",
            content:
              "Access a growing library of pre-built nodes for input handling, data processing, API integration, LLM interactions, and more.",
          },
          {
            id: "easy-deployment",
            title: "One-Click Deployment",
            content:
              "Deploy your AI agents with a single click and integrate them into your existing systems and workflows.",
          },
          {
            id: "integrations",
            title: "Third-Party Integrations",
            content:
              "Connect to popular services and APIs, from simple REST endpoints to advanced LLM providers like OpenAI, Google, and Anthropic.",
          },
        ],
      },
      {
        id: "use-cases",
        title: "Common Use Cases",
        content:
          "Deforge can be used to build a wide variety of AI agents, including:",
        subsections: [
          {
            id: "chatbots",
            title: "Conversational Agents",
            content:
              "Build chatbots and virtual assistants that can understand and respond to user queries in natural language using the latest LLM technologies.",
          },
          {
            id: "data-processing",
            title: "Data Processing Pipelines",
            content:
              "Create workflows that collect, transform, and analyze data from multiple sources, with support for various data formats and operations.",
          },
          {
            id: "automation",
            title: "Business Process Automation",
            content:
              "Automate repetitive tasks and business processes with intelligent agents that can make decisions based on data and conditions.",
          },
          {
            id: "api-orchestration",
            title: "API Orchestration",
            content:
              "Connect multiple APIs and services to create complex workflows that leverage the best tools for each task, including advanced AI capabilities.",
          },
        ],
      },
      {
        id: "getting-started",
        title: "Getting Started",
        content:
          "Ready to build your first AI agent? Check out our [Your First AI Agent](/docs/first-agent) guide to get started, or explore the [Node Reference](/docs/nodes) to learn about all the building blocks available in Deforge.",
      },
    ],
  },
  {
    id: "first-agent",
    title: "Your First AI Agent",
    description:
      "Follow this step-by-step guide to build your first AI agent with Deforge.",
    sections: [
      {
        id: "prerequisites",
        title: "Prerequisites",
        content:
          "Before you begin, make sure you have a Deforge account. If you don't have one yet, you can [sign up for free](https://deforge.ai/signup).",
      },
      {
        id: "create-project",
        title: "Step 1: Create a New Project",
        content:
          "Start by creating a new project in Deforge. Click on the 'New Project' button on your dashboard and give your project a name, such as 'My First Chatbot'.",
      },
      {
        id: "add-input-node",
        title: "Step 2: Add an Input Node",
        content:
          "Every agent needs a way to receive input. From the node library, drag a 'User Input' node onto the canvas. This will allow users to enter text that your agent will process.",
        subsections: [
          {
            id: "configure-input",
            title: "Configure the Input Node",
            content:
              "Click on the User Input node to open its configuration panel. Set a placeholder text like 'Ask me anything...' to guide users on what to enter.",
          },
        ],
      },
      {
        id: "add-llm-node",
        title: "Step 3: Add an LLM Node",
        content:
          "Now, let's add a node that will process the user's input using a large language model. For this example, we'll use an 'OpenAI Chat' node to generate intelligent responses.",
        subsections: [
          {
            id: "configure-llm",
            title: "Configure the LLM Node",
            content:
              "Select a model from the dropdown (e.g., 'gpt-3.5-turbo') and set a system prompt like 'You are a helpful assistant that answers questions about technology.' This will guide the AI's responses. Note that the LLM node will automatically receive the workflow flow through its Flow input.",
          },
        ],
      },
      {
        id: "connect-nodes",
        title: "Step 4: Connect the Nodes",
        content:
          "Click and drag from the output port of the User Input node to the 'query' input port of the OpenAI Chat node. This creates a connection that will pass the user's input to the LLM for processing.",
      },
      {
        id: "add-output-node",
        title: "Step 5: Add an Output Node",
        content:
          "Finally, add an 'Output Text' node to display the result to the user. Connect the 'output' port of the OpenAI Chat node to the 'Text' input port of the Output Text node.",
      },
      {
        id: "test-agent",
        title: "Step 6: Test Your Agent",
        content:
          "Click the 'Test' button to try out your agent. Enter a question in the input field and see how your agent processes it and returns a response generated by the LLM.",
      },
      {
        id: "deploy-agent",
        title: "Step 7: Deploy Your Agent",
        content:
          "Once you're satisfied with your agent, click the 'Deploy' button to make it available for use. You'll receive a unique URL that you can share with others.",
      },
      {
        id: "next-steps",
        title: "Next Steps",
        content:
          "Congratulations on building your first AI agent! This is just the beginning of what you can create with Deforge. Try enhancing your agent by adding more nodes, such as a 'Knowledge Base' node to provide specific information to the LLM, or an 'API Call' node to fetch external data. Explore our [Node Reference](/docs/nodes) to discover more nodes and capabilities, or check out our [Example Projects](/examples) for inspiration.",
      },
    ],
  },
  {
    id: "nodes-concept",
    title: "Understanding Nodes",
    description:
      "Learn about the building blocks of Deforge workflows and how to use them effectively.",
    sections: [
      {
        id: "what-are-nodes",
        title: "What Are Nodes?",
        content:
          "Nodes are the fundamental building blocks of any Deforge workflow. Each node represents a specific function or operation that can be connected to other nodes to create complex AI agents. Think of nodes as individual LEGO pieces that you can combine to build sophisticated structures.",
      },
      {
        id: "node-anatomy",
        title: "Anatomy of a Node",
        content: "Every node in Deforge consists of several key components:",
        subsections: [
          {
            id: "inputs",
            title: "Input Ports",
            content:
              "These are connection points on the left side of a node that receive data from other nodes. Different nodes have different input requirements, and some nodes (like input nodes) may not have any input ports at all.",
          },
          {
            id: "outputs",
            title: "Output Ports",
            content:
              "These are connection points on the right side of a node that send data to other nodes. The data type of an output port determines which input ports it can connect to.",
          },
          {
            id: "configuration",
            title: "Configuration Panel",
            content:
              "Each node has a configuration panel that allows you to customize its behavior. The available settings depend on the type of node, but might include things like default values, API endpoints, or processing options.",
          },
        ],
      },
      {
        id: "node-categories",
        title: "Node Categories",
        content:
          "Deforge organizes nodes into several categories based on their function:",
        subsections: [
          {
            id: "input-nodes",
            title: "Input Nodes",
            content:
              "These nodes provide data to your workflow, either from user input, predefined values, or external sources. Examples include the User Input node, Number Input node, and Object Input node.",
          },
          {
            id: "processing-nodes",
            title: "Processing Nodes",
            content:
              "These nodes transform, analyze, or manipulate data. Examples include the API Call node, Objects To Map node, Extract JSON node, and Math Operation node.",
          },
          {
            id: "llm-nodes",
            title: "LLM Nodes",
            content:
              "These nodes connect to large language models to generate text, answer questions, or process natural language. Examples include OpenAI Chat, Google Chat, Anthropic Chat, and Custom Chat nodes.",
          },
          {
            id: "output-nodes",
            title: "Output Nodes",
            content:
              "These nodes display results to users or send data to external systems. Examples include the Output Text node, Output JSON node, and Output Number node.",
          },
          {
            id: "flow-nodes",
            title: "Flow Control Nodes",
            content:
              "These nodes control the execution path of your workflow based on conditions. Examples include the If Condition node, which allows for branching logic based on comparisons.",
          },
          {
            id: "trigger-nodes",
            title: "Trigger Nodes",
            content:
              "These nodes initiate workflows based on events or schedules. Examples include the Cron Trigger node, which starts a workflow at specified time intervals.",
          },
        ],
      },
      {
        id: "node-properties",
        title: "Node Properties",
        content:
          "Each node has specific properties that determine its behavior and capabilities. These properties include:",
        subsections: [
          {
            id: "data-types",
            title: "Data Types",
            content:
              "Nodes work with specific data types, such as Text, Number, Boolean, JSON, Flow, Date, or specialized types like Rag (for knowledge bases). Understanding data types is crucial for creating valid connections between nodes.",
          },
          {
            id: "required-vs-optional",
            title: "Required vs. Optional Inputs",
            content:
              "Some node inputs are required for the node to function, while others are optional. Required inputs are typically marked with an asterisk (*) in the node's configuration panel.",
          },
          {
            id: "default-values",
            title: "Default Values",
            content:
              "Many nodes have default values for their inputs or configuration fields. These values are used when no specific value is provided, making it easier to get started with a node.",
          },
        ],
      },
      {
        id: "using-nodes",
        title: "Using Nodes Effectively",
        content:
          "To make the most of Deforge's node system, keep these best practices in mind:",
        subsections: [
          {
            id: "start-simple",
            title: "Start Simple",
            content:
              "Begin with a small number of nodes and test your workflow frequently. Add complexity gradually as you confirm each part is working as expected.",
          },
          {
            id: "naming-conventions",
            title: "Use Clear Naming",
            content:
              "Give your nodes descriptive names that indicate their purpose in the workflow. This makes it easier to understand and maintain complex agents.",
          },
          {
            id: "organization",
            title: "Organize Your Canvas",
            content:
              "Arrange your nodes in a logical flow from left to right. Group related nodes together and use comments to document complex sections of your workflow.",
          },
          {
            id: "reuse",
            title: "Reuse Common Patterns",
            content:
              "Save frequently used node combinations as templates or subflows that you can reuse across different projects.",
          },
        ],
      },
      {
        id: "next-steps",
        title: "Next Steps",
        content:
          "Now that you understand the basics of nodes, explore the [Node Reference](/docs/nodes) to see all available nodes and their specific capabilities. Then, learn how to [connect nodes](/docs/connections) to create functional workflows.",
      },
    ],
  },
  {
    id: "connections",
    title: "Working with Connections",
    description:
      "Learn how to connect nodes to create powerful workflows in Deforge.",
    sections: [
      {
        id: "what-are-connections",
        title: "What Are Connections?",
        content:
          "Connections are the links between nodes that determine how data flows through your Deforge workflow. They represent the paths that data takes as it moves from one operation to another, allowing you to create complex, multi-step processes without writing code.",
      },
      {
        id: "connection-basics",
        title: "Connection Basics",
        content:
          "Understanding how connections work is fundamental to building effective AI agents:",
        subsections: [
          {
            id: "data-flow",
            title: "Data Flow Direction",
            content:
              "Connections always flow from an output port on one node to an input port on another node. Data moves from left to right in the visual interface, representing the progression of your workflow.",
          },
          {
            id: "type-compatibility",
            title: "Type Compatibility",
            content:
              "Connections can only be made between compatible port types. For example, a Text output can connect to a Text input, but not to a Number input without a conversion node in between.",
          },
          {
            id: "flow-connections",
            title: "Flow Connections",
            content:
              "Many nodes use a special 'Flow' type for connections, which controls the execution order of nodes rather than passing data. Flow connections are particularly important when working with LLM nodes, conditional logic, and triggers. All LLM nodes (Google Chat, Anthropic Chat, OpenAI Chat, Custom Chat) require a Flow input to properly integrate into the workflow execution chain.",
          },
        ],
      },
      {
        id: "creating-connections",
        title: "Creating Connections",
        content:
          "There are several ways to create connections between nodes in Deforge:",
        subsections: [
          {
            id: "drag-and-drop",
            title: "Drag and Drop",
            content:
              "Click and hold on an output port, then drag to an input port and release. If the connection is valid, a line will appear linking the two ports.",
          },
          {
            id: "quick-connect",
            title: "Quick Connect",
            content:
              "When you add a new node to the canvas, Deforge may suggest automatic connections based on the surrounding nodes and compatibility. You can accept these suggestions with a single click.",
          },
          {
            id: "port-selection",
            title: "Port Selection",
            content:
              "Click on an output port to select it, then click on a compatible input port to create a connection. This method is useful when working with nodes that are far apart on the canvas.",
          },
        ],
      },
      {
        id: "managing-connections",
        title: "Managing Connections",
        content:
          "As your workflows grow more complex, you'll need to manage your connections effectively:",
        subsections: [
          {
            id: "editing-connections",
            title: "Editing Connections",
            content:
              "Click on a connection line to select it. You can then delete it with the Delete key, or drag either end to reconnect it to a different port.",
          },
          {
            id: "multiple-connections",
            title: "Multiple Connections",
            content:
              "An output port can connect to multiple input ports, allowing you to send the same data to different parts of your workflow. However, an input port can only receive one connection at a time.",
          },
          {
            id: "organizing-connections",
            title: "Organizing Connections",
            content:
              "For complex workflows, you can organize your connections by rearranging nodes on the canvas. Deforge will automatically adjust the connection lines to follow the new layout.",
          },
        ],
      },
      {
        id: "advanced-connection-features",
        title: "Advanced Connection Features",
        content:
          "Deforge offers several advanced features for working with connections:",
        subsections: [
          {
            id: "data-transformation",
            title: "Data Transformation",
            content:
              "When connecting incompatible data types, you can use transformation nodes to convert data from one type to another. For example, the Text to JSON node can convert text strings to JSON objects, and the Date to Number node can convert dates to numerical values.",
          },
          {
            id: "conditional-connections",
            title: "Conditional Connections",
            content:
              "Using the If Condition node, you can create conditional connections that only pass data when certain conditions are met. This allows for dynamic, responsive workflows that can make decisions based on input data.",
          },
          {
            id: "flow-control",
            title: "Flow Control",
            content:
              "Flow connections (using the Flow data type) allow you to control the execution order of your workflow. This is particularly important when working with trigger nodes like Cron Trigger, which initiate workflows at specific times.",
          },
        ],
      },
      {
        id: "troubleshooting-connections",
        title: "Troubleshooting Connections",
        content:
          "When connections aren't working as expected, check for these common issues:",
        subsections: [
          {
            id: "type-mismatches",
            title: "Type Mismatches",
            content:
              "Ensure that the output and input ports have compatible data types. If they don't, add appropriate transformation nodes between them, such as Text to JSON or Date to Number.",
          },
          {
            id: "missing-required-inputs",
            title: "Missing Required Inputs",
            content:
              "Check that all required inputs have connections or default values. Nodes with missing required inputs won't execute properly.",
          },
          {
            id: "execution-order",
            title: "Execution Order Issues",
            content:
              "Remember that nodes execute in order from left to right, and flow connections can affect this order. If a node depends on data that isn't available yet, rearrange your workflow to ensure proper sequencing.",
          },
        ],
      },
      {
        id: "next-steps",
        title: "Next Steps",
        content:
          "Now that you understand how to work with connections, learn about [deploying your AI agents](/docs/deployment) to make them available to users.",
      },
    ],
  },
  {
    id: "deployment",
    title: "Deploying Your AI Agents",
    description:
      "Learn how to deploy your Deforge AI agents to production environments.",
    sections: [
      {
        id: "deployment-overview",
        title: "Deployment Overview",
        content:
          "Deployment is the process of making your AI agent available for use in real-world scenarios. Deforge simplifies this process with one-click deployment options, allowing you to quickly share your agents with users or integrate them into existing systems.",
      },
      {
        id: "deployment-options",
        title: "Deployment Options",
        content: "Deforge offers several ways to deploy your AI agents:",
        subsections: [
          {
            id: "web-deployment",
            title: "Web Deployment",
            content:
              "Deploy your agent as a web application with a unique URL. Users can interact with your agent directly through a web interface without needing to install anything.",
          },
          {
            id: "api-deployment",
            title: "API Deployment",
            content:
              "Expose your agent as a RESTful API that can be called from other applications or services. This option is ideal for integrating your agent into existing software systems.",
          },
          {
            id: "embedded-deployment",
            title: "Embedded Deployment",
            content:
              "Generate an embeddable widget that you can add to your website or application. This allows users to interact with your agent without leaving your platform.",
          },
          {
            id: "scheduled-deployment",
            title: "Scheduled Deployment",
            content:
              "Deploy agents that run on a schedule using Cron Trigger nodes. These agents can perform automated tasks at specified intervals without user interaction.",
          },
        ],
      },
      {
        id: "deployment-process",
        title: "Deployment Process",
        content: "Deploying an AI agent in Deforge involves these steps:",
        subsections: [
          {
            id: "testing",
            title: "Pre-Deployment Testing",
            content:
              "Before deploying, thoroughly test your agent using Deforge's built-in testing tools. Verify that all nodes are functioning correctly and the agent produces the expected outputs for various inputs.",
          },
          {
            id: "configuration",
            title: "Deployment Configuration",
            content:
              "Configure deployment settings such as environment variables, access controls, and scaling options. These settings determine how your agent will behave in production.",
          },
          {
            id: "one-click-deploy",
            title: "One-Click Deployment",
            content:
              "Once your agent is ready and configured, click the 'Deploy' button in the Deforge interface. The platform will handle the deployment process automatically, including provisioning necessary resources.",
          },
          {
            id: "verification",
            title: "Deployment Verification",
            content:
              "After deployment, verify that your agent is working correctly in the production environment. Test it with real-world inputs and monitor its performance.",
          },
          {
            id: "environment-transition",
            title: "Transitioning Between Environments",
            content:
              "When your agent is ready to move from testing to production, use the 'Deploy to Production' option in the Deforge interface. This creates a locked, production-ready version of your agent that can be safely used by end users. If you need to make changes later, you'll work in the test environment and then redeploy to update the production version.",
          },
        ],
      },
      {
        id: "deployment-environments",
        title: "Deployment Environments",
        content:
          "Deforge supports multiple deployment environments to suit different stages of development:",
        subsections: [
          {
            id: "test-environment",
            title: "Test Environment",
            content:
              "A development environment where nodes can be run freely and tested through the editor. This environment requires authentication and allows you to modify, test, and debug your agent before deploying to production. Changes made in the test environment don't affect your production deployment.",
          },
          {
            id: "production-environment",
            title: "Production Environment",
            content:
              "The live environment where your agent is available to end users. In production, all nodes are locked and production-ready, preventing accidental modifications. This ensures stability and reliability for your deployed agents. To make changes to a production agent, you must first modify it in the test environment and then redeploy.",
          },
        ],
      },
      {
        id: "managing-deployments",
        title: "Managing Deployments",
        content:
          "After deploying your agent, you can manage it through the Deforge dashboard:",
        subsections: [
          {
            id: "monitoring",
            title: "Monitoring and Analytics",
            content:
              "Track your agent's usage, performance, and error rates through the Deforge dashboard. Set up alerts to be notified of any issues that require attention.",
          },
          {
            id: "updates",
            title: "Updating Deployed Agents",
            content:
              "When you make changes to your agent, you can deploy updates with a single click. Deforge handles the update process with zero downtime, ensuring a seamless experience for your users.",
          },
          {
            id: "versioning",
            title: "Version Management",
            content:
              "Deforge maintains a history of your agent's deployments, allowing you to roll back to previous versions if needed. You can also create named versions for major releases.",
          },
          {
            id: "scaling",
            title: "Scaling and Performance",
            content:
              "As your agent's usage grows, Deforge automatically scales resources to maintain performance. You can also manually adjust scaling settings for specific needs.",
          },
        ],
      },
      {
        id: "deployment-best-practices",
        title: "Deployment Best Practices",
        content:
          "Follow these best practices to ensure successful deployments:",
        subsections: [
          {
            id: "thorough-testing",
            title: "Thorough Testing",
            content:
              "Test your agent with a wide range of inputs, including edge cases and potential errors. This helps identify and fix issues before they affect users.",
          },
          {
            id: "environment-workflow",
            title: "Proper Environment Workflow",
            content:
              "Always develop and test your agents in the test environment before deploying to production. Use the test environment to experiment with different configurations, debug issues, and validate functionality. Only deploy to production when you're confident that your agent works as expected and is ready for end users.",
          },
          {
            id: "gradual-rollout",
            title: "Gradual Rollout",
            content:
              "For major updates, consider deploying to a small percentage of users first and gradually increasing the rollout as you confirm everything is working correctly.",
          },
          {
            id: "monitoring-plan",
            title: "Comprehensive Monitoring",
            content:
              "Set up monitoring for all critical aspects of your agent, including performance, error rates, and user satisfaction metrics.",
          },
          {
            id: "documentation",
            title: "User Documentation",
            content:
              "Provide clear documentation for your agent, including its purpose, how to use it, and any limitations or requirements. This improves the user experience and reduces support requests.",
          },
        ],
      },
      {
        id: "next-steps",
        title: "Next Steps",
        content:
          "Now that you know how to deploy your AI agents, explore our [Nodes](/docs/nodes) to learn more about the building blocks of Deforge workflows.",
      },
    ],
  },
];

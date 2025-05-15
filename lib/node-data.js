// Categories metadata
export const categories = [
  {
    id: "input",
    name: "Input Nodes",
    description: "Nodes that provide input data to your AI agents",
    icon: "FileText",
  },
  {
    id: "processing",
    name: "Processing Nodes",
    description: "Nodes that process and transform data",
    icon: "Code",
  },
  {
    id: "output",
    name: "Output Nodes",
    description: "Nodes that output data from your AI agents",
    icon: "Zap",
  },
];

export const nodeData = [
  {
    title: "Number",
    category: "input",
    type: "num_var",
    icon: {
      type: "",
      content: "",
    },
    desc: "Number variable",
    longDescription:
      "The Number node allows you to define numerical values that can be used throughout your workflow. It supports both integers and floating-point numbers, making it versatile for various calculations and operations.",
    inputs: [],
    outputs: [
      {
        desc: "The numerical value output",
        name: "Number",
        type: "Number",
      },
    ],
    fields: [
      {
        desc: "The numerical value to be used",
        name: "Number",
        type: "Number",
        value: 0,
      },
    ],
    diff: "easy",
    tags: ["int", "float", "number"],
    useCases: [
      "Setting numerical constants for calculations",
      "Defining thresholds for conditional operations",
      "Configuring parameters for API calls",
      "Setting delays or timeouts in workflows",
    ],
    examples: [
      {
        title: "Basic Example",
        description: "Using multiple Number nodes for a calculation",
        steps: [
          "Add two Number nodes to your workflow",
          "Set the first value to 10 and the second to 5",
          "Connect both to a Math Operation node",
          "Configure the Math Operation to perform addition",
        ],
      },
    ],
  },
  {
    title: "User Input",
    category: "input",
    type: "str_var",
    icon: {
      type: "",
      content: "",
    },
    desc: "String input from users",
    longDescription:
      "The User Input node allows you to collect text input from users interacting with your AI agent. This is essential for creating interactive experiences where the agent responds to user queries or commands.",
    inputs: [],
    outputs: [
      {
        desc: "The text entered by the user",
        name: "Text",
        type: "Text",
      },
    ],
    fields: [
      {
        desc: "Default text to display in the input field",
        name: "Text",
        type: "Text",
        value: "Enter text here...",
      },
    ],
    diff: "easy",
    tags: ["str", "text", "user", "input"],
    useCases: [
      "Collecting user queries for a chatbot",
      "Getting search parameters from users",
      "Accepting commands for an AI assistant",
      "Gathering user preferences or settings",
    ],
    examples: [
      {
        title: "Basic Usage",
        description: "Creating a simple user input for a chatbot",
        steps: [
          "Add a User Input node to your workflow",
          "Set a placeholder text like 'Ask me anything...'",
          "Connect the output to an AI processing node",
        ],
      },
      {
        title: "Advanced Example",
        description: "Using user input to customize an API request",
        steps: [
          "Add a User Input node for search terms",
          "Connect the output to an API Call node",
          "Configure the API Call to use the input as a query parameter",
        ],
      },
    ],
  },
  {
    title: "API Call",
    category: "processing",
    type: "api_node",
    icon: {
      type: "",
      content: "",
    },
    desc: "call external API",
    longDescription:
      "The API Call node enables your AI agent to interact with external services and data sources through HTTP requests. It supports various methods like GET, POST, PUT, and DELETE, allowing for comprehensive integration with third-party APIs.",
    inputs: [
      {
        desc: "The endpoint of the API",
        name: "endpoint",
        type: "Text",
      },
      {
        desc: "The body of the API",
        name: "body",
        type: "JSON",
      },
      {
        desc: "The headers of the API",
        name: "headers",
        type: "JSON",
      },
    ],
    outputs: [
      {
        desc: "The response of the API",
        name: "output",
        type: "Text",
      },
    ],
    fields: [
      {
        desc: "The method of the API",
        name: "method",
        type: "select",
        value: "GET",
        options: ["GET", "POST", "PUT", "DELETE"],
      },
      {
        desc: "The endpoint of the API",
        name: "endpoint",
        type: "Text",
        value: "endpoint...",
      },
      {
        desc: "The body of the API",
        name: "body",
        type: "Map",
        value: "Enter body here...",
      },
      {
        desc: "The headers of the API",
        name: "headers",
        type: "Map",
        value: "Enter headers here...",
      },
      {
        desc: "Api Key of Telegram Bot",
        name: "TG_API_KEY",
        type: "env",
        defaultValue: "eydnfnuani...",
      },
    ],
    diff: "hard",
    tags: ["api", "http", "external"],
    useCases: [
      "Fetching data from external services",
      "Sending data to external platforms",
      "Integrating with third-party APIs like weather services or payment gateways",
      "Triggering actions in other systems",
    ],
    examples: [
      {
        title: "Basic Usage",
        description: "Making a simple GET request to a public API",
        steps: [
          "Add an API Call node to your workflow",
          "Set the method to GET",
          "Enter a public API endpoint like 'https://api.example.com/data'",
          "Connect the output to a node that processes the response",
        ],
      },
      {
        title: "Advanced Example",
        description: "Making an authenticated POST request with JSON data",
        steps: [
          "Add an API Call node to your workflow",
          "Set the method to POST",
          "Configure the endpoint URL",
          "Add authentication headers with your API key",
          "Structure your request body as JSON",
          "Connect the output to handle the response",
        ],
      },
    ],
  },
  {
    title: "Object Variable",
    category: "input",
    type: "obj_var",
    icon: {
      type: "",
      content: "",
    },
    desc: "Object variable",
    longDescription:
      "The Object Variable node allows you to create and manipulate key-value pairs, which can be combined into complex data structures. This is essential for organizing related data and passing structured information between nodes.",
    inputs: [
      {
        desc: "The key of the object",
        name: "key",
        type: "Text",
      },
      {
        desc: "The value of the object",
        name: "value",
        type: "Text",
      },
    ],
    outputs: [
      {
        desc: "The object of the variable",
        name: "Object",
        type: "JSON",
      },
      {
        desc: "The key of the object",
        name: "key",
        type: "Text",
      },
    ],
    fields: [
      {
        desc: "The key of the object",
        name: "key",
        type: "Text",
        value: "key...",
      },
      {
        desc: "The value of the object",
        name: "value",
        type: "Text",
        value: "value...",
      },
    ],
    diff: "medium",
    tags: ["object", "variable"],
    useCases: [
      "Creating structured data for API requests",
      "Organizing related information in a single container",
      "Building configuration objects for other nodes",
      "Storing multiple properties related to a single entity",
    ],
    examples: [
      {
        title: "Basic Usage",
        description: "Creating a simple key-value pair",
        steps: [
          "Add an Object Variable node to your workflow",
          "Set the key to 'name' and the value to 'John Doe'",
          "Connect the Object output to another node that requires structured data",
        ],
      },
      {
        title: "Advanced Example",
        description:
          "Building a complex object with multiple Object Variable nodes",
        steps: [
          "Add multiple Object Variable nodes for different properties",
          "Configure each with appropriate keys and values",
          "Connect all to an Objects To Map node",
          "Use the resulting map for an API request or data processing",
        ],
      },
    ],
  },
  {
    title: "Objects To Map",
    category: "processing",
    type: "obj_to_map",
    icon: {
      type: "",
      content: "",
    },
    desc: "Convert object to map",
    longDescription:
      "The Objects To Map node takes an array of objects and converts them into a single map (dictionary) structure. This is useful for consolidating multiple key-value pairs into a unified data structure that can be easily processed or sent to external services.",
    inputs: [
      {
        desc: "Objects to convert",
        name: "objects",
        type: "JSON[]",
      },
    ],
    outputs: [
      {
        desc: "The map of the objects",
        name: "map",
        type: "JSON",
      },
    ],
    fields: [
      {
        desc: "Objects to convert",
        name: "objects",
        type: "JSON[]",
        value: "[]",
      },
    ],
    diff: "medium",
    tags: ["object", "map"],
    useCases: [
      "Consolidating multiple Object Variable outputs into a single structure",
      "Preparing data for API requests that require a specific format",
      "Transforming data between different structural representations",
      "Creating configuration objects from multiple sources",
    ],
    examples: [
      {
        title: "Basic Usage",
        description: "Converting multiple objects into a single map",
        steps: [
          "Add several Object Variable nodes to your workflow",
          "Connect all their Object outputs to the Objects To Map node's input",
          "Use the resulting map output for further processing",
        ],
      },
      {
        title: "Advanced Example",
        description:
          "Building a complex request payload from multiple data sources",
        steps: [
          "Collect data from various sources using different nodes",
          "Create Object Variable nodes for each piece of data",
          "Connect all to an Objects To Map node",
          "Use the resulting map as the body for an API Call node",
        ],
      },
    ],
  },
];

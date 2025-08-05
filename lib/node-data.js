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
  {
    id: "LLM",
    name: "LLM Nodes",
    description: "Nodes that interact with Large Language Models",
    icon: "Brain",
  },
  {
    id: "flow",
    name: "Flow Control Nodes",
    description: "Nodes that control the flow of execution",
    icon: "GitBranch",
  },
  {
    id: "trigger",
    name: "Trigger Nodes",
    description: "Nodes that trigger workflows based on events",
    icon: "Clock",
  },
];

// Example projects metadata
export const exampleProjects = [
  {
    title: "Simple Chatbot",
    description: "Build a simple chatbot that responds to user input",
    difficulty: "Beginner",
    link: "/examples/chatbot",
    nodes: ["str_var", "openai_chat_node", "output_text"],
  },
  {
    title: "Weather Forecast",
    description: "Create an agent that fetches and displays weather data",
    difficulty: "Beginner",
    link: "/examples/weather",
    nodes: ["str_var", "api_node", "json_extract", "output_text"],
  },
  {
    title: "Data Processor",
    description: "Process and transform data from various sources",
    difficulty: "Intermediate",
    link: "/examples/data-processor",
    nodes: ["num_var", "obj_var", "obj_to_map", "output_json"],
  },
  {
    title: "API Integration",
    description: "Connect to external APIs and process the responses",
    difficulty: "Intermediate",
    link: "/examples/api-integration",
    nodes: ["api_node", "obj_var", "json_extract"],
  },
  {
    title: "Multi-step Workflow",
    description: "Create a complex workflow with multiple steps and conditions",
    difficulty: "Advanced",
    link: "/examples/workflow",
    nodes: ["str_var", "num_var", "api_node", "if_condition", "obj_to_map"],
  },
  {
    title: "Scheduled Reports",
    description: "Generate and send reports on a schedule",
    difficulty: "Advanced",
    link: "/examples/scheduled-reports",
    nodes: ["cron_trigger", "api_node", "openai_chat_node", "output_json"],
  },
];

export const nodeData = [
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
          "Connect the output to an LLM node for processing",
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
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
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
        type: "JSON",
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
    ],
    diff: "medium",
    tags: ["api", "http", "external"],
    useCases: [
      "Fetching data from external services",
      "Sending data to external platforms",
      "Integrating with third-party APIs like weather services or payment gateways",
      "Retrieving information from databases or content management systems",
    ],
  },
  {
    title: "Number Input",
    category: "input",
    type: "num_var",
    icon: {
      type: "",
      content: "",
    },
    desc: "Number variable",
    longDescription:
      "The Number Input node allows you to define numerical values that can be used throughout your workflow. It supports both integers and floating-point numbers, making it versatile for various calculations and operations.",
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
  },
  {
    title: "Object Input",
    category: "input",
    type: "obj_var",
    icon: {
      type: "",
      content: "",
    },
    desc: "Object variable",
    longDescription:
      "The Object Input node allows you to create and manipulate key-value pairs, which can be combined into complex data structures. This is essential for organizing related data and passing structured information between nodes.",
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
  },
  {
    title: "Google Chat",
    category: "LLM",
    type: "google_chat_node",
    icon: {
      type: "",
      content: "",
    },
    desc: "Chat with Google based LLM",
    longDescription:
      "The Google Chat node enables interaction with Google's large language models (LLMs) like Gemini. It allows your agent to generate human-like text responses based on user input, system prompts, and optional knowledge bases.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "Chat text to send",
        name: "Query",
        type: "Text",
      },
      {
        desc: "System prompt for the LLM",
        name: "System Prompt",
        type: "Text",
      },
      {
        desc: "RAG Knowledge base",
        name: "Rag",
        type: "Rag",
      },
      {
        desc: "Save chat as context for LLM",
        name: "Save Context",
        type: "Boolean",
        value: true,
      },
      {
        desc: "Creativity of the LLM",
        name: "Temperature",
        type: "Number",
      },
    ],
    outputs: [
      {
        desc: "The response of the LLM",
        name: "output",
        type: "Text",
      },
    ],
    fields: [
      {
        desc: "The LLM model",
        name: "model",
        type: "select",
        value: "gemini-2.0-flash",
        options: [
          "gemini-2.5-pro-preview-05-06",
          "gemini-2.5-flash-preview-04-17",
          "gemini-2.0-flash",
          "gemini-1.5-pro-latest",
          "gemini-1.5-flash-latest",
          "gemini-1.5-flash-8b-latest",
        ],
      },
      {
        desc: "Chat text to send",
        name: "Query",
        type: "Textarea",
        value: "Enter text here...",
      },
      {
        desc: "System prompt for the LLM",
        name: "System Prompt",
        type: "Textarea",
        value: "You are a helpful assistant",
      },
      {
        desc: "Save chat as context for LLM",
        name: "Save Context",
        type: "CheckBox",
        value: true,
      },
      {
        desc: "Creativity of the LLM",
        name: "Temperature",
        type: "Slider",
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
      },
    ],
    diff: "medium",
    tags: ["api", "llm", "chatbot"],
    useCases: [
      "Creating conversational AI assistants",
      "Generating creative content like stories or poems",
      "Answering questions based on provided knowledge",
      "Summarizing or explaining complex information",
    ],
  },
  {
    title: "Anthropic Chat",
    category: "LLM",
    type: "claude_chat_node",
    icon: {
      type: "",
      content: "",
    },
    desc: "Chat with Anthropic based LLM",
    longDescription:
      "The Anthropic Chat node connects your agent to Anthropic's Claude language models. Claude models are known for their helpfulness, harmlessness, and honesty, making them suitable for a wide range of conversational and content generation tasks.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "Chat text to send",
        name: "Query",
        type: "Text",
      },
      {
        desc: "System prompt for the LLM",
        name: "System Prompt",
        type: "Text",
      },
      {
        desc: "RAG Knowledge base",
        name: "Rag",
        type: "Rag",
      },
      {
        desc: "Creativity of the LLM",
        name: "Temperature",
        type: "Number",
      },
      {
        desc: "Save chat as context for LLM",
        name: "Save Context",
        type: "Boolean",
        value: true,
      },
    ],
    outputs: [
      {
        desc: "The response of the LLM",
        name: "output",
        type: "Text",
      },
    ],
    fields: [
      {
        desc: "The LLM model",
        name: "model",
        type: "select",
        value: "claude-3-5-sonnet-20241022",
        options: [
          "claude-3-7-sonnet-20250219",
          "claude-3-5-sonnet-20241022",
          "claude-3-5-haiku-20241022",
          "claude-3-opus-20240229",
          "claude-3-sonnet-20240229",
          "claude-3-haiku-20240307",
        ],
      },
      {
        desc: "Chat text to send",
        name: "Query",
        type: "Textarea",
        value: "Enter text here...",
      },
      {
        desc: "System prompt for the LLM",
        name: "System Prompt",
        type: "Textarea",
        value: "You are a helpful assistant",
      },
      {
        desc: "Creativity of the LLM",
        name: "Temperature",
        type: "Slider",
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
      },
      {
        desc: "Save chat as context for LLM",
        name: "Save Context",
        type: "CheckBox",
        value: true,
      },
    ],
    diff: "medium",
    tags: ["api", "llm", "chatbot"],
    useCases: [
      "Building conversational agents with nuanced understanding",
      "Creating content that requires careful reasoning",
      "Developing assistants that can follow complex instructions",
      "Generating detailed explanations and analyses",
    ],
  },
  {
    title: "Custom Chat",
    category: "LLM",
    type: "custom_chat_node",
    icon: {
      type: "",
      content: "",
    },
    desc: "chat with LLMs",
    longDescription:
      "The Custom Chat node allows you to connect to any OpenAI-compatible LLM API endpoint. This provides flexibility to use custom-deployed models, open-source models, or specialized LLMs that aren't directly supported by other nodes.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "The endpoint of the OpenAI compatible LLM API",
        name: "endpoint",
        type: "Text",
      },
      {
        desc: "The LLM model",
        name: "model",
        type: "Text",
      },
      {
        desc: "Chat text to send",
        name: "Query",
        type: "Textarea",
      },
      {
        desc: "System prompt for the LLM",
        name: "System Prompt",
        type: "Textarea",
      },
      {
        desc: "Creativity of the LLM",
        name: "Temperature",
        type: "Number",
      },
      {
        desc: "RAG Knowledge base",
        name: "Rag",
        type: "Rag",
      },
      {
        desc: "Save chat as context for LLM",
        name: "Save Context",
        type: "Boolean",
        value: true,
      },
    ],
    outputs: [
      {
        desc: "The response of the LLM",
        name: "output",
        type: "Text",
      },
    ],
    fields: [
      {
        desc: "The endpoint of the OpenAI compatible LLM API",
        name: "endpoint",
        type: "Text",
        value: "endpoint...",
      },
      {
        desc: "The LLM model",
        name: "model",
        type: "Text",
        value: "llama3-70b",
      },
      {
        desc: "Chat text to send",
        name: "Query",
        type: "Textarea",
        value: "Enter text here...",
      },
      {
        desc: "System prompt for the LLM",
        name: "System Prompt",
        type: "Textarea",
        value: "You are a helpful assistant",
      },
      {
        desc: "Creativity of the LLM",
        name: "Temperature",
        type: "Slider",
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
      },
      {
        desc: "Save chat as context for LLM",
        name: "Save Context",
        type: "CheckBox",
        value: true,
      },
      {
        desc: "Api Key of LLM",
        name: "LLM_API_KEY",
        type: "env",
        defaultValue: "eydnfnuani...",
      },
    ],
    diff: "hard",
    tags: ["api", "llm", "chatbot"],
    useCases: [
      "Connecting to self-hosted open-source models",
      "Using specialized domain-specific LLMs",
      "Integrating with custom-fine-tuned models",
      "Working with models that require specific API configurations",
    ],
  },
  {
    title: "OpenAI Chat",
    category: "LLM",
    type: "openai_chat_node",
    icon: {
      type: "",
      content: "",
    },
    desc: "chat with OpenAI based LLMs",
    longDescription:
      "The OpenAI Chat node connects your agent to OpenAI's powerful language models like GPT-4 and GPT-3.5. These models excel at understanding and generating human-like text for a wide variety of applications.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "Chat text to send",
        name: "query",
        type: "Text",
      },
      {
        desc: "System prompt for the LLM",
        name: "System Prompt",
        type: "Text",
      },
      {
        desc: "Creativity of the LLM",
        name: "Temperature",
        type: "Number",
      },
      {
        desc: "RAG Knowledge base",
        name: "Rag",
        type: "Text",
      },
      {
        desc: "Save chat as context for LLM",
        name: "Save Context",
        type: "Boolean",
        value: true,
      },
    ],
    outputs: [
      {
        desc: "The response of the LLM",
        name: "output",
        type: "Text",
      },
    ],
    fields: [
      {
        desc: "The LLM model",
        name: "model",
        type: "select",
        value: "gpt-4.1",
        options: [
          "gpt-4.1",
          "gpt-4.1-mini",
          "gpt-4.1-nano",
          "gpt-4o",
          "gpt-4o-mini",
          "gpt-4-turbo",
          "gpt-4",
          "gpt-3.5-turbo",
          "o3-mini",
          "o3",
          "o4-mini",
        ],
      },
      {
        desc: "Chat text to send",
        name: "query",
        type: "Textarea",
        value: "Enter text here...",
      },
      {
        desc: "System prompt for the LLM",
        name: "System Prompt",
        type: "Textarea",
        value: "You are a helpful assistant",
      },
      {
        desc: "Creativity of the LLM",
        name: "Temperature",
        type: "Slider",
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
      },
      {
        desc: "Save chat as context for LLM",
        name: "Save Context",
        type: "CheckBox",
        value: true,
      },
    ],
    diff: "medium",
    tags: ["api", "llm", "chatbot"],
    useCases: [
      "Creating sophisticated conversational agents",
      "Generating high-quality content like articles or code",
      "Building assistants that can understand complex instructions",
      "Developing tools that require advanced reasoning capabilities",
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
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
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
  },
  {
    title: "Knowledge Base",
    category: "processing",
    type: "rag_node",
    icon: {
      type: "",
      content: "",
    },
    desc: "Process your Knowledge Base to use it in LLMs",
    longDescription:
      "The Knowledge Base node processes documents or data to create a Retrieval-Augmented Generation (RAG) database that can be used to enhance LLM responses with specific information. This allows your AI agents to access and reference custom knowledge when generating responses.",
    inputs: [],
    outputs: [
      {
        desc: "RAG Database",
        name: "Rag Database",
        type: "Rag",
      },
    ],
    fields: [
      {
        desc: "The knowledge base file link",
        name: "File Link",
        type: "Text",
        value: "https://yourfilelink.com/",
      },
    ],
    diff: "easy",
    tags: ["api", "llm", "knowledge-base", "RAG"],
    useCases: [
      "Creating AI assistants with access to company documentation",
      "Building chatbots that can answer questions about specific products or services",
      "Developing agents that can reference technical manuals or guidelines",
      "Enabling LLMs to access up-to-date or proprietary information",
    ],
  },
  {
    title: "Extract JSON",
    category: "processing",
    type: "json_extract",
    icon: {
      type: "",
      content: "",
    },
    desc: "Gets the Value from JSON and Provided key as input",
    longDescription:
      "The Extract JSON node allows you to retrieve a specific value from a JSON object using a key. This is useful for accessing nested data within complex JSON structures or for extracting specific pieces of information from API responses.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "JSON to parse",
        name: "Object",
        type: "JSON",
      },
      {
        desc: "Key to extract",
        name: "Key",
        type: "Text",
      },
    ],
    outputs: [
      {
        desc: "The value of the key",
        name: "Value",
        type: "Text",
      },
    ],
    fields: [
      {
        desc: "JSON to parse",
        name: "Object",
        type: "Map",
        value: "Enter JSON here...",
      },
      {
        desc: "Key to extract",
        name: "Key",
        type: "Text",
        value: "key",
      },
    ],
    diff: "easy",
    tags: ["json", "extract"],
    useCases: [
      "Extracting specific fields from API responses",
      "Accessing nested data in complex JSON structures",
      "Filtering and processing only relevant information from larger datasets",
      "Preparing data for display or further processing",
    ],
  },
  {
    title: "Math Operation",
    category: "processing",
    type: "math_operation",
    icon: {
      type: "",
      content: "",
    },
    desc: "Performs a mathematical operation on two numbers",
    longDescription:
      "The Math Operation node performs basic arithmetic operations (addition, subtraction, multiplication, division) on two numerical inputs. This allows your agent to perform calculations as part of its workflow.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "First number",
        name: "Number 1",
        type: "Number",
      },
      {
        desc: "Second number",
        name: "Number 2",
        type: "Number",
      },
    ],
    outputs: [
      {
        desc: "The result of the operation",
        name: "Result",
        type: "Number",
      },
    ],
    fields: [
      {
        desc: "First number",
        name: "Number 1",
        type: "Number",
        value: 0,
      },
      {
        desc: "Operation",
        name: "Operation",
        type: "select",
        value: "+",
        options: ["+", "-", "*", "/"],
      },
      {
        desc: "Second number",
        name: "Number 2",
        type: "Number",
        value: 0,
      },
    ],
    diff: "easy",
    tags: ["math", "operation"],
    useCases: [
      "Calculating totals or averages",
      "Performing conversions between units",
      "Computing derived values from input data",
      "Implementing business logic that requires numerical calculations",
    ],
  },
  {
    title: "Text Join",
    category: "processing",
    type: "text_join",
    icon: {
      type: "",
      content: "",
    },
    desc: "Joins multiple text strings into a single string",
    longDescription:
      "The Text Join node combines multiple text strings into a single string, with an optional separator between each part. This is useful for formatting output, building complex messages, or preparing text for display or further processing.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "Text to join",
        name: "Text",
        type: "Text[]",
      },
    ],
    outputs: [
      {
        desc: "The joined text",
        name: "Text",
        type: "Text",
      },
    ],
    fields: [
      {
        desc: "Text to join",
        name: "Text",
        type: "Text[]",
        value: "Enter text here...",
      },
      {
        desc: "Separator",
        name: "Separator",
        type: "Text",
        value: ",",
      },
    ],
    diff: "easy",
    tags: ["text", "join"],
    useCases: [
      "Formatting messages with dynamic content",
      "Building complex strings from multiple data sources",
      "Creating comma-separated lists or other formatted text",
      "Combining user input with template text",
    ],
  },
  {
    title: "Output Text",
    category: "output",
    type: "output_text",
    icon: {
      type: "",
      content: "",
    },
    desc: "Outputs text to the user",
    longDescription:
      "The Output Text node displays text content to the user. This is typically used as the final step in a workflow to show results, messages, or other text-based information to the user.",
    inputs: [
      {
        desc: "Text to output",
        name: "Text",
        type: "Text",
      },
    ],
    outputs: [],
    fields: [
      {
        desc: "Text to output",
        name: "Text",
        type: "Text",
        value: "Enter text here...",
      },
    ],
    diff: "easy",
    tags: ["output", "text"],
    useCases: [
      "Displaying messages or results to users",
      "Showing the output of LLM responses",
      "Presenting formatted information",
      "Providing feedback or instructions to users",
    ],
  },
  {
    title: "Output JSON",
    category: "output",
    type: "output_json",
    icon: {
      type: "",
      content: "",
    },
    desc: "Outputs JSON to the user",
    longDescription:
      "The Output JSON node displays structured JSON data to the user. This is useful for showing complex data structures, API responses, or formatted results in a way that preserves their hierarchical organization.",
    inputs: [
      {
        desc: "JSON to output",
        name: "JSON",
        type: "JSON",
      },
    ],
    outputs: [],
    fields: [
      {
        desc: "JSON to output",
        name: "JSON",
        type: "Map",
        value: "Enter JSON here...",
      },
    ],
    diff: "easy",
    tags: ["output", "json"],
    useCases: [
      "Displaying structured data to users",
      "Showing API responses in their original format",
      "Presenting complex data hierarchies",
      "Debugging or inspecting JSON objects during workflow development",
    ],
  },
  {
    title: "Output Number",
    name: "Output Number",
    category: "output",
    type: "output_number",
    icon: {
      type: "",
      content: "",
    },
    desc: "Outputs number to the user",
    longDescription:
      "The Output Number node displays numerical values to the user. This is useful for showing calculation results, counts, measurements, or any other numerical information that needs to be presented to the user.",
    inputs: [
      {
        desc: "Number to output",
        name: "Number",
        type: "Number",
      },
    ],
    outputs: [],
    fields: [
      {
        desc: "Number to output",
        name: "Number",
        type: "Number",
        value: 0,
      },
    ],
    diff: "easy",
    tags: ["output", "number"],
    useCases: [
      "Displaying calculation results",
      "Showing counts or totals",
      "Presenting metrics or measurements",
      "Outputting numerical values from data processing",
    ],
  },
  {
    title: "If Condition",
    category: "flow",
    type: "if_condition",
    icon: {
      type: "",
      content: "",
    },
    desc: "Performs a conditional operation based on a condition",
    longDescription:
      "The If Condition node evaluates a condition and directs the flow of execution based on whether the condition is true or false. This allows your agent to make decisions and take different actions depending on the input data or other factors.",
    inputs: [
      {
        desc: "First input",
        name: "Input 1",
        type: "Any",
      },
      {
        desc: "Second input",
        name: "Input 2",
        type: "Any",
      },
    ],
    outputs: [
      {
        desc: "The Flow of the Condition if true",
        name: "True",
        type: "Flow",
      },
      {
        desc: "The Flow of the Condition if false",
        name: "False",
        type: "Flow",
      },
    ],
    fields: [
      {
        desc: "Condition",
        name: "Condition",
        type: "select",
        value: "==",
        options: ["==", "!=", ">", "<", ">=", "<="],
      },
    ],
    diff: "easy",
    tags: ["condition", "if"],
    useCases: [
      "Creating branching logic in workflows",
      "Implementing decision-making based on user input",
      "Handling different cases based on API responses",
      "Validating data and taking appropriate actions",
    ],
  },
  {
    title: "Text to JSON",
    category: "processing",
    type: "text_to_json",
    icon: {
      type: "",
      content: "",
    },
    desc: "Converts text to JSON",
    longDescription:
      "The Text to JSON node parses a text string that contains JSON data and converts it into a proper JSON object. This is useful when working with API responses or other sources that provide JSON as a string rather than as a structured object.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "Text to convert",
        name: "Text",
        type: "Text",
      },
    ],
    outputs: [
      {
        desc: "The JSON of the text",
        name: "JSON",
        type: "JSON",
      },
    ],
    fields: [
      {
        desc: "Text to convert",
        name: "Text",
        type: "Text",
        value: "Enter text here...",
      },
    ],
    diff: "easy",
    tags: ["text", "json"],
    useCases: [
      "Parsing JSON strings from API responses",
      "Converting LLM-generated JSON text into actual JSON objects",
      "Processing JSON data received as text",
      "Transforming structured text into manipulable objects",
    ],
  },
  {
    title: "Cron Trigger",
    category: "trigger",
    type: "cron_trigger",
    icon: {
      type: "",
      content: "",
    },
    desc: "Triggers a flow at a specific time",
    longDescription:
      "The Cron Trigger node initiates a workflow at specified time intervals. This allows you to create scheduled tasks, periodic updates, or recurring processes without manual intervention.",
    inputs: [],
    outputs: [
      {
        desc: "The Flow to trigger",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "timeStamp",
        name: "timeStamp",
        type: "Date",
      },
    ],
    fields: [
      {
        desc: "Interval in Hours",
        name: "Interval in Hours",
        type: "Number",
        value: 0,
      },
    ],
    diff: "easy",
    tags: ["trigger", "cron"],
    useCases: [
      "Scheduling regular data updates or synchronizations",
      "Creating automated reports at specific intervals",
      "Performing periodic maintenance tasks",
      "Triggering workflows based on time-based conditions",
    ],
  },
  {
    title: "Date to Number",
    category: "processing",
    type: "date_to_number",
    icon: {
      type: "",
      content: "",
    },
    desc: "Converts date to number",
    longDescription:
      "The Date to Number node converts a date value into a numerical representation (typically a Unix timestamp). This allows dates to be used in mathematical operations, comparisons, or other processes that require numerical values.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "Date to convert",
        name: "Date",
        type: "Date",
      },
    ],
    outputs: [
      {
        desc: "The number of the date",
        name: "Number",
        type: "Number",
      },
    ],
    fields: [
      {
        desc: "Date to convert",
        name: "Date",
        type: "Date",
        value: "Enter date here...",
      },
    ],
    diff: "easy",
    tags: ["date", "number"],
    useCases: [
      "Calculating time differences between dates",
      "Sorting or comparing dates in numerical form",
      "Converting dates for use in mathematical operations",
      "Preparing date values for storage or transmission formats that require numbers",
    ],
  },
  {
    title: "Get Cal.com Schedule",
    category: "processing",
    type: "cal_schedule",
    icon: {
      type: "",
      content: "",
    },
    desc: "Get cal.com schedule",
    longDescription:
      "Fetches available meeting slots from a Cal.com public booking link, allowing users to find suitable times for scheduling. It requires the Cal.com link and the timezone for accurate slot retrieval.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "Cal.com Public Link",
        name: "Meeting Link",
        type: "Text",
      },
      {
        desc: "Timezone of the meeting in IANA format",
        name: "timezone",
        type: "Text",
      },
    ],
    outputs: [
      {
        desc: "Slots of the meeting",
        name: "Slots",
        type: "JSON",
      },
      {
        desc: "The flow of the workflow if error occurs",
        name: "Error",
        type: "Flow",
      },
    ],
    fields: [
      {
        desc: "Cal.com Public Link",
        name: "Meeting Link",
        type: "Text",
        value: "Meeting Link...",
      },
      {
        desc: "The timezone of the meeting in IANA format",
        name: "timezone",
        type: "Text",
        value: "Europe/London",
      },
    ],
    diff: "easy",
    tags: ["cal.com", "schedule", "meeting"],
    useCases: [
      "Automating appointment scheduling",
      "Checking availability before booking meetings",
      "Integrating calendar availability into workflows",
    ],
  },
  {
    title: "Text to Date",
    category: "processing",
    type: "text_to_date",
    icon: {
      type: "",
      content: "",
    },
    desc: "Converts Text(ISO Date String) to Date",
    longDescription:
      "Parses an ISO 8601 date string into a Date object, enabling date-based operations in your workflow.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "Text to convert",
        name: "Text",
        type: "Text",
      },
    ],
    outputs: [
      {
        desc: "The date of the text",
        name: "Date",
        type: "Date",
      },
    ],
    fields: [
      {
        desc: "Text to convert",
        name: "Text",
        type: "Text",
        value: "Enter ISO Date String here...",
      },
    ],
    diff: "easy",
    tags: ["text", "date"],
    useCases: [
      "Converting date strings from APIs",
      "Scheduling tasks based on date inputs",
      "Parsing dates from user input",
    ],
  },
  {
    title: "Telegram Trigger",
    category: "trigger",
    type: "tg_trigger",
    icon: {
      type: "",
      content: "",
    },
    desc: "Triggers the flow when a message is recieved on the telegram bot",
    longDescription:
      "Activates a workflow upon receiving a message by your configured Telegram bot. Allows for dynamic actions based on user input from Telegram.",
    inputs: [
      {
        desc: "Text to send when recieving the /start command",
        name: "On Start",
        type: "Text",
      },
    ],
    outputs: [
      {
        desc: "The Flow to trigger",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "Message recieved by the bot",
        name: "Message",
        type: "Text",
      },
      {
        desc: "Chat ID of the user",
        name: "Chat ID",
        type: "Text",
      },
      {
        desc: "Username of the user",
        name: "Username",
        type: "Text",
      },
      {
        desc: "Is the message a bot command ?",
        name: "Is Command",
        type: "Boolean",
      },
    ],
    fields: [
      {
        desc: "Text to send when recieving the /start command",
        name: "On Start",
        type: "TextArea",
        value: "text here ...",
      },
      {
        desc: "Api Key of your Telegram bot",
        name: "TG_API_KEY",
        type: "env",
        defaultValue: "eydnfnuani...",
      },
    ],
    diff: "easy",
    tags: ["trigger", "telegram", "bot"],
    useCases: [
      "Creating Telegram-based command interfaces",
      "Receiving alerts or notifications via Telegram",
      "Building interactive Telegram bots",
    ],
  },
  {
    title: "JSON to Text",
    category: "processing",
    type: "json_to_text",
    icon: {
      type: "",
      content: "",
    },
    desc: "Converts JSON to text",
    longDescription:
      "Stringifies a JSON object into a text representation, useful for logging, debugging, or sending JSON data as a string.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "JSON to convert",
        name: "JSON",
        type: "JSON",
      },
    ],
    outputs: [
      {
        desc: "The text of the JSON",
        name: "Text",
        type: "Text",
      },
    ],
    fields: [
      {
        desc: "JSON to convert",
        name: "JSON",
        type: "Map",
      },
    ],
    diff: "easy",
    tags: ["text", "json"],
    useCases: [
      "Logging JSON data",
      "Sending JSON data as text messages",
      "Displaying JSON data in a readable format",
    ],
  },
  {
    title: "Book Cal.com Meeting",
    category: "processing",
    type: "cal_book",
    icon: {
      type: "",
      content: "",
    },
    desc: "Book cal.com meeting",
    longDescription:
      "Books a meeting on Cal.com, requiring user details, a meeting link, timezone, and a selected time slot. Automates meeting bookings via your Cal.com account.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "Name of the user",
        name: "Name",
        type: "Text",
      },
      {
        desc: "Email of the user",
        name: "Email",
        type: "Text",
      },
      {
        desc: "Cal.com Public Link",
        name: "Meeting Link",
        type: "Text",
      },
      {
        desc: "Timezone of the meeting in IANA format",
        name: "timezone",
        type: "Text",
      },
      {
        desc: "Slot to book",
        name: "Date",
        type: "Date",
      },
    ],
    outputs: [
      {
        desc: "The flow of the workflow if booking is successful",
        name: "Success",
        type: "Flow",
      },
      {
        desc: "The flow of the workflow if error occurs",
        name: "Error",
        type: "Flow",
      },
    ],
    fields: [
      {
        desc: "Name of the user",
        name: "Name",
        type: "Text",
        value: "Name...",
      },
      {
        desc: "Email of the user",
        name: "Email",
        type: "Text",
        value: "Email...",
      },
      {
        desc: "Cal.com Public Link",
        name: "Meeting Link",
        type: "Text",
        value: "Meeting Link...",
      },
      {
        desc: "The timezone of the meeting in IANA format",
        name: "timezone",
        type: "Text",
        value: "Europe/London",
      },
      {
        desc: "Slot to book",
        name: "Date",
        type: "Date",
      },
      {
        desc: "Duration of the meeting",
        name: "Duration",
        type: "select",
        value: "30mins",
        options: ["30mins", "45mins", "1hr"],
      },
    ],
    diff: "easy",
    tags: ["cal.com", "book", "meeting"],
    useCases: [
      "Automatically booking meetings based on workflow triggers",
      "Scheduling appointments for users via API",
      "Integrating meeting bookings into automated processes",
    ],
  },
  {
    title: "Number to Text",
    category: "processing",
    type: "num_to_text",
    icon: {
      type: "",
      content: "",
    },
    desc: "Converts Number to text",
    longDescription:
      "Converts a numerical value into its string representation, allowing for text-based operations and concatenation.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "Number to convert",
        name: "Number",
        type: "Number",
      },
    ],
    outputs: [
      {
        desc: "The number in text format",
        name: "Text",
        type: "Text",
      },
    ],
    fields: [
      {
        desc: "Number to convert",
        name: "Number",
        type: "Number",
      },
    ],
    diff: "easy",
    tags: ["text", "num"],
    useCases: [
      "Combining numbers with text",
      "Formatting numerical output",
      "Preparing numbers for text-based APIs",
    ],
  },
  {
    title: "Send Telegram Message",
    category: "output",
    type: "tg_msg_send",
    icon: {
      type: "",
      content: "",
    },
    desc: "Send a message via your telegram bot",
    longDescription:
      "Sends a text message via your Telegram bot to a specified chat ID. Allows your workflow to send dynamic messages to Telegram users.",
    inputs: [
      {
        desc: "The flow of the workflow",
        name: "Flow",
        type: "Flow",
      },
      {
        desc: "Text to send",
        name: "Message",
        type: "Text",
      },
      {
        desc: "Chat ID to send the text to",
        name: "ChatID",
        type: "Text",
      },
    ],
    outputs: [],
    fields: [
      {
        desc: "Text to send",
        name: "Message",
        type: "TextArea",
        value: "text here ...",
      },
      {
        desc: "Chat ID to send the text to",
        name: "ChatID",
        type: "Text",
        value: "123456",
      },
      {
        desc: "Api Key of your Telegram bot",
        name: "TG_API_KEY",
        type: "env",
        defaultValue: "eydnfnuani...",
      },
    ],
    diff: "easy",
    tags: ["output", "telegram", "bot"],
    useCases: [
      "Sending notifications via Telegram",
      "Alerting users about events",
      "Providing real-time updates via Telegram bots",
    ],
  },
  {
    "title": "AI Web Search",
    "category": "LLM",
    "type": "web_search_node",
    "icon": {
      "type": "",
      "content": ""
    },
    "desc": "Search the web and get summarised information",
    "inputs": [
      {
        "desc": "The flow of the workflow",
        "name": "Flow",
        "type": "Flow"
      },
      {
        "desc": "Query to search",
        "name": "Query",
        "type": "Text"
      }
    ],
    "outputs": [
      {
        "desc": "The content of all the search results in markdown",
        "name": "output",
        "type": "Text"
      }
    ],
    "fields": [
      {
        "desc": "Query to search",
        "name": "Query",
        "type": "TextArea",
        "value": "Enter text here..."
      },
      {
        "desc": "The preferred search language",
        "name": "Language",
        "type": "select",
        "value": "English",
        "options": [
          "English",
          "Spanish",
          "French",
          "German",
          "Japanese",
          "Chinese",
          "Hindi",
          "Portugese",
          "Italian",
          "Korean",
          "Dutch",
          "Arabic",
          "Sweedish",
          "Hebrew",
          "Afrikaans",
          "Russian"
        ]
      }
    ],
    "tags": [
      "llm",
      "search",
      "web"
    ],
    "longDescription": "The AI Web Search node searches the web, based on your query and preferred language and then returns the output in markdown format. Markdown format makes it easier for LLMs to parse the information from around the web.",
    "useCases": [
      "Gather latest and trending news for automated content generation.",
      "Gather information from around the web for summarisation.",
      "Gather specific information from the web to create newsletters."
    ],
    "diff": "easy"
  },
  {
    "title": "Veo AI Video",
    "category": "GenAI",
    "type": "veo_node",
    "icon": {
      "type": "",
      "content": ""
    },
    "desc": "Generate AI videos using Google Veo",
    "inputs": [
      {
        "desc": "The flow of the workflow",
        "name": "Flow",
        "type": "Flow"
      },
      {
        "desc": "Video generation prompt",
        "name": "Prompt",
        "type": "Text"
      },
      {
        "desc": "Negative video generation prompt",
        "name": "Negative Prompt",
        "type": "Text"
      },
      {
        "desc": "Duration of the video (only applicable for Veo2)",
        "name": "Duration",
        "type": "Number"
      }
    ],
    "outputs": [
      {
        "desc": "Temporary link to the video",
        "name": "Video Link",
        "type": "Text"
      }
    ],
    "fields": [
      {
        "desc": "Video generation prompt",
        "name": "Prompt",
        "type": "TextArea",
        "value": "Enter text here..."
      },
      {
        "desc": "Negative video generation prompt",
        "name": "Negative Prompt",
        "type": "TextArea",
        "value": "Enter text here..."
      },
      {
        "desc": "Duration of the video (only applicable for Veo2)",
        "name": "Duration",
        "type": "Slider",
        "value": 6,
        "min": 5,
        "max": 8,
        "step": 1
      },
      {
        "desc": "Model to be used for video generation",
        "name": "Model",
        "type": "select",
        "value": "Veo3",
        "options": [
          "Veo3",
          "Veo2"
        ]
      },
      {
        "desc": "Aspect ratio of the video (applicable only for Veo2)",
        "name": "Ratio",
        "type": "select",
        "value": "16:9",
        "options": [
          "16:9",
          "9:16"
        ]
      },
      {
        "desc": "Generate audio along with video (applicable only for Veo3)",
        "name": "Generate Audio",
        "type": "CheckBox",
        "value": true
      },
      {
        "desc": "Should people be generated in the video",
        "name": "Person",
        "type": "select",
        "value": "Allow adults",
        "options": [
          "Allow adults",
          "Dont allow"
        ]
      }
    ],
    "tags": [
      "veo",
      "google",
      "ai",
      "video"
    ],
    "longDescription": "Google Veo node allows you to create AI videos using Google Veo2 or Veo3, the choice upto you. The node also has plethora of options to configure your AI video generation. Some options are exclusive to Veo2 and some to Veo3. They are:\n\n- Duration: only applicable to Veo2 (can choose from 5 to 8 seconds. Veo3 can only generate 8 seconds videos)\n- Ratio: only applicable to Veo2 (can also create 9:16 videos while Veo3 can only generate 16:9 videos)\n- Generate Audio: only applicable to Veo3 (only Veo3 can generate audio along with video).",
    "useCases": [
      "Can be used to create automated video uploads to YouTube.",
      "Create videos via telegram messages and easily share among people.",
      "Create videos for work purposes, privately."
    ],
    "diff": "medium"
  },
  {
    "title": "YouTube Upload",
    "category": "social",
    "type": "yt_upload",
    "icon": {
      "type": "",
      "content": ""
    },
    "desc": "Upload videos to your YouTube channel",
    "inputs": [
      {
        "desc": "Link to the video to upload",
        "name": "Link",
        "type": "Text"
      },
      {
        "desc": "Title of the video to upload",
        "name": "Title",
        "type": "Text"
      },
      {
        "desc": "Description of the video to upload",
        "name": "Description",
        "type": "Text"
      },
      {
        "desc": "Tags for the video to upload (Comma separated list of tags)",
        "name": "Tags",
        "type": "Text"
      }
    ],
    "outputs": [
      {
        "desc": "The link of the uploaded video",
        "name": "Video Link",
        "type": "Text"
      }
    ],
    "fields": [
      {
        "desc": "Link to the video to upload",
        "name": "Link",
        "type": "Text",
        "value": "Enter text here..."
      },
      {
        "desc": "Title of the video to upload",
        "name": "Title",
        "type": "Text",
        "value": "Enter text here..."
      },
      {
        "desc": "Description of the video to upload",
        "name": "Description",
        "type": "TextArea",
        "value": "Enter text here..."
      },
      {
        "desc": "Tags for the video to upload (Comma separated list of tags)",
        "name": "Tags",
        "type": "Text",
        "value": "Enter tags here..."
      },
      {
        "desc": "The category of the video",
        "name": "Category",
        "type": "select",
        "value": "People & Blogs",
        "options": [
          "Autos & Vehicles",
          "Comedy",
          "Education",
          "Enterntainment",
          "Film & Animation",
          "Gaming",
          "Howto & Style",
          "Music",
          "News & Politics",
          "Nonprofits & Activism",
          "People & Blogs",
          "Pets & Animals",
          "Science & Technology",
          "Sports",
          "Travel & Events"
        ]
      },
      {
        "desc": "The privacy status of the video",
        "name": "Privacy",
        "type": "select",
        "value": "Public",
        "options": [
          "Public",
          "Private",
          "Unlisted"
        ]
      },
      {
        "desc": "Connect to your YouTube account",
        "name": "YouTube",
        "type": "social",
        "defaultValue": ""
      }
    ],
    "tags": [
      "youtube",
      "video",
      "upload",
      "social"
    ],
    "longDescription": "YouTube upload node allows you to upload a video to your channel. You can set various options for your upload. They range from Category to Privacy. Uploads can only be done after you connect your YouTube account to the workflow.",
    "useCases": [
      "Can be used to upload your AI generated video",
      "Can be used to upload video automatically from another service."
    ],
    "diff": "easy"
  },
  {
    "title": "Chat Bot Trigger",
    "category": "trigger",
    "type": "chatbot_trigger",
    "icon": {
      "type": "",
      "content": ""
    },
    "desc": "Triggers the flow when a message is recieved from the Chat Bot UI",
    "inputs": [],
    "outputs": [
      {
        "desc": "The Flow to trigger",
        "name": "Flow",
        "type": "Flow"
      },
      {
        "desc": "Message recieved by the bot",
        "name": "Message",
        "type": "Text"
      }
    ],
    "fields": [],
    "tags": [
      "trigger",
      "chat",
      "bot"
    ],
    "longDescription": "Activates your workflow upon receiving a message from its corresponding chat UI. Allows you to perform task based on the text sent by user.",
    "useCases": [
      "Creating custom chatbots with specific knowledge base",
      "Perform agentic tasks intelligently with chat commands",
      "Create an intelligent assistant"
    ],
    "diff": "easy"
  },
  {
    "title": "Send Chatbot Response",
    "category": "output",
    "type": "chatbot_msg_send",
    "icon": {
      "type": "",
      "content": ""
    },
    "desc": "Send a response to your chat bot chat",
    "inputs": [
      {
        "desc": "The flow of the workflow",
        "name": "Flow",
        "type": "Flow"
      },
      {
        "desc": "Text to send",
        "name": "Message",
        "type": "Text"
      }
    ],
    "outputs": [
      {
        "desc": "The final output object of chat bot",
        "name": "Result",
        "type": "JSON"
      }
    ],
    "fields": [
      {
        "desc": "Text to send",
        "name": "Message",
        "type": "TextArea",
        "value": "text here ..."
      }
    ],
    "tags": [
      "output",
      "chat",
      "bot"
    ],
    "longDescription": "Send a response to your chat UI corresponding to the workflow that has the chat trigger..",
    "useCases": [
      "Send a message to use the chat UI as a normal chat window for your agent",
      "Send confirmation messages",
      "Send information from your workflow to the UI"
    ],
    "diff": "easy"
  },
  {
    "title": "Widget Trigger",
    "category": "trigger",
    "type": "widget_trigger",
    "icon": {
      "type": "",
      "content": ""
    },
    "desc": "Triggers the flow when a message is recieved from the support bot Widget",
    "inputs": [
      {
        "desc": "Intro message shown by the bot",
        "name": "Intro",
        "type": "Text"
      }
    ],
    "outputs": [
      {
        "desc": "The Flow to trigger",
        "name": "Flow",
        "type": "Flow"
      },
      {
        "desc": "Message recieved by the bot",
        "name": "Message",
        "type": "Text"
      }
    ],
    "fields": [
      {
        "desc": "Intro message shown by the bot",
        "name": "Intro",
        "type": "Text",
        "value": "Welcome! I'm your AI assistant. This is a demo workflow. Ask me anything!"
      }
    ],
    "tags": [
      "trigger",
      "support",
      "bot",
      "widget"
    ],
    "longDescription": "Activates your workflow upon receiving a message from its corresponding widget. Allows you to perform task based on the text sent by user.",
    "useCases": [
      "Creating custom chatbots with specific knowledge base",
      "Perform agentic tasks intelligently with chat commands",
      "Create an intelligent assistant"
    ],
    "diff": "easy"
  },
  {
    "title": "Send Widget Response",
    "category": "output",
    "type": "widget_msg_send",
    "icon": {
      "type": "",
      "content": ""
    },
    "desc": "Send a response to your support bot widget",
    "inputs": [
      {
        "desc": "The flow of the workflow",
        "name": "Flow",
        "type": "Flow"
      },
      {
        "desc": "Text to send",
        "name": "Message",
        "type": "Text"
      }
    ],
    "outputs": [
      {
        "desc": "The final output object of chat bot",
        "name": "Result",
        "type": "JSON"
      }
    ],
    "fields": [
      {
        "desc": "Text to send",
        "name": "Message",
        "type": "TextArea",
        "value": "text here ..."
      }
    ],
    "tags": [
      "output",
      "support",
      "bot",
      "widget"
    ],
    "longDescription": "Send a response to your widget corresponding to the workflow that has the chat trigger.",
    "useCases": [
      "Send a message to use the widget as a normal chat window for your agent",
      "Send confirmation messages",
      "Send information from your workflow to the UI",
      "Send messages to a customer and use the widget for customer support."
    ],
    "diff": "easy"
  },
  {
    "title": "Speech To Text",
    "category": "audio",
    "type": "speech_to_text",
    "icon": {
      "type": "",
      "content": ""
    },
    "desc": "Convert speech to text using Eleven Labs",
    "credit": 100,
    "inputs": [
      {
        "desc": "The Flow to trigger",
        "name": "Flow",
        "type": "Flow"
      },
      {
        "desc": "Link to the Audio to convert",
        "name": "Audio Link",
        "type": "Text"
      }
    ],
    "outputs": [
      {
        "desc": "Transcribed text",
        "name": "Transcription",
        "type": "Text"
      }
    ],
    "fields": [
      {
        "desc": "Link to the Audio to convert",
        "name": "Audio Link",
        "type": "Text",
        "value": "Link here ..."
      },
      {
        "desc": "Model to use for transcription",
        "name": "Model",
        "type": "select",
        "value": "scribe v1",
        "options": [
          "scribe v1",
          "scribe v1 experimental"
        ]
      }
    ],
    "tags": [
      "transcribe",
      "audio",
      "elevenlabs"
    ],
    "longDescription": "Transcribe an audio file containing speech.",
    "useCases": [
      "Transcribing videos to create subtitles",
      "Transcribing user speech to perform further task with what they said",
      "Create a voice activated agent"
    ],
    "diff": "easy"
  },
  {
    "title": "Text to Speech",
    "category": "audio",
    "type": "text_to_speech",
    "icon": {
      "type": "",
      "content": ""
    },
    "desc": "Convert text to speech using Eleven Labs",
    "credit": 100,
    "inputs": [
      {
        "desc": "The Flow to trigger",
        "name": "Flow",
        "type": "Flow"
      },
      {
        "desc": "Text to generate speech for",
        "name": "Content",
        "type": "Text"
      },
      {
        "desc": "Specific voice ID to use (will override the above option)",
        "name": "VoiceID",
        "type": "Text"
      },
      {
        "desc": "Emotional setting of the voice (lower is more emotional)",
        "name": "Emotion",
        "type": "Number"
      },
      {
        "desc": "Speed of the generated speech",
        "name": "Speed",
        "type": "Number"
      }
    ],
    "outputs": [
      {
        "desc": "Generated audio",
        "name": "Audio Link",
        "type": "Text"
      }
    ],
    "fields": [
      {
        "desc": "Text to generate speech for",
        "name": "Content",
        "type": "TextArea",
        "value": "Text here ..."
      },
      {
        "desc": "Voice model to use",
        "name": "Voice",
        "type": "select",
        "value": "George (warm resonance)",
        "options": [
          "Aria (middle aged female calm)",
          "Sarah (young adult woman confident)",
          "Laura (young adult female sunny)",
          "Charlie (young aussie male confident)",
          "George (warm resonance)",
          "Callum (gravelly edgy)"
        ]
      },
      {
        "desc": "Specific voice ID to use (will override the above option)",
        "name": "VoiceID",
        "type": "Text",
        "value": "ID here ..."
      },
      {
        "desc": "Emotional setting of the voice (lower is more emotional)",
        "name": "Emotion",
        "type": "Slider",
        "value": 0.5,
        "min": 0,
        "max": 1,
        "step": 0.1
      },
      {
        "desc": "Speed of the generated speech",
        "name": "Speed",
        "type": "Slider",
        "value": 1,
        "min": 0,
        "max": 2,
        "step": 0.1
      },
      {
        "desc": "Model to use for speech generation",
        "name": "Model",
        "type": "select",
        "value": "eleven_multilingual_v2",
        "options": [
          "eleven_multilingual_v2",
          "eleven_v3",
          "eleven_flash_v2_5",
          "eleven_turbo_v2_5"
        ]
      }
    ],
    "tags": [
      "TTS",
      "audio",
      "elevenlabs"
    ],
    "longDescription": "Convert your text to speech using AI",
    "useCases": [
      "Add voiceover to your videos without actually speaking",
      "Create an agent which can reply with voice",
      "Create an audiobook agent"
    ],
    "diff": "easy"
  },
  {
    "title": "Dub Video Audio",
    "category": "audio",
    "type": "dub_media",
    "icon": {
      "type": "",
      "content": ""
    },
    "desc": "Dub your video or audio to another language using Eleven Labs",
    "credit": 100,
    "inputs": [
      {
        "desc": "The Flow to trigger",
        "name": "Flow",
        "type": "Flow"
      },
      {
        "desc": "Link to the Media to dub",
        "name": "Media Link",
        "type": "Text"
      }
    ],
    "outputs": [
      {
        "desc": "Link to the dubbed media file",
        "name": "Dubbed Link",
        "type": "Text"
      }
    ],
    "fields": [
      {
        "desc": "Link to the Media to dub",
        "name": "Media Link",
        "type": "Text",
        "value": "Link here ..."
      },
      {
        "desc": "Language to dub media into",
        "name": "Dub Language",
        "type": "select",
        "value": "Japanese",
        "options": [
          "English",
          "Hindi",
          "Portuguese",
          "Chinese",
          "Spanish",
          "French",
          "German",
          "Japanese",
          "Arabic",
          "Russian",
          "Korean",
          "Indonesian",
          "Italian",
          "Dutch",
          "Turkish",
          "Polish",
          "Swedish",
          "Filipino",
          "Malay",
          "Romanian",
          "Ukrainian",
          "Greek",
          "Czech",
          "Danish",
          "Finnish",
          "Bulgarian",
          "Croatian",
          "Slovak",
          "Tamil"
        ]
      }
    ],
    "tags": [
      "dubbing",
      "translate",
      "audio",
      "elevenlabs"
    ],
    "longDescription": "Dub a audio or video from one language to another",
    "useCases": [
      "Dub youtube videos to your language for easier consumption",
      "Dub ad campaigns to multiple languages",
      "Use as a realtime translator agent"
    ],
    "diff": "easy"
  },
  {
    "title": "Lyria AI Music",
    "category": "GenAI",
    "type": "lyria_node",
    "icon": {
      "type": "",
      "content": ""
    },
    "desc": "Generate AI music using Google Lyria",
    "credit": 100,
    "inputs": [
      {
        "desc": "The flow of the workflow",
        "name": "Flow",
        "type": "Flow"
      },
      {
        "desc": "Music generation prompt",
        "name": "Prompt",
        "type": "Text"
      },
      {
        "desc": "Negative music generation prompt",
        "name": "Negative Prompt",
        "type": "Text"
      },
      {
        "desc": "Seed value for generation (optional)",
        "name": "Seed",
        "type": "Number"
      }
    ],
    "outputs": [
      {
        "desc": "Temporary link to the audio",
        "name": "Audio Link",
        "type": "Text"
      }
    ],
    "fields": [
      {
        "desc": "Music generation prompt",
        "name": "Prompt",
        "type": "TextArea",
        "value": "Enter text here..."
      },
      {
        "desc": "Negative music generation prompt",
        "name": "Negative Prompt",
        "type": "TextArea",
        "value": "Enter text here..."
      },
      {
        "desc": "Seed value for generation (optional)",
        "name": "Seed",
        "type": "Number",
        "value": 0
      },
      {
        "desc": "Model to be used for music generation",
        "name": "Model",
        "type": "select",
        "value": "lyria-002",
        "options": [
          "lyria-002"
        ]
      }
    ],
    "tags": [
      "lyria",
      "google",
      "ai",
      "music"
    ],
    "longDescription": "Create music via text prompts using Google Lyria",
    "useCases": [
      "Create your own BGM for games, videos, etc.",
      "Create SFXs for your media"
    ],
    "diff": "easy"
  },
  {
    "title": "Imagen AI Images",
    "category": "GenAI",
    "type": "imagen_node",
    "icon": {
      "type": "",
      "content": ""
    },
    "desc": "Generate AI images using Google Imagen",
    "credit": 100,
    "inputs": [
      {
        "desc": "The flow of the workflow",
        "name": "Flow",
        "type": "Flow"
      },
      {
        "desc": "Image generation prompt",
        "name": "Prompt",
        "type": "Text"
      },
      {
        "desc": "Seed value for generation (optional)",
        "name": "Seed",
        "type": "Number"
      },
      {
        "desc": "Quality of the image (applicable only if the output type is jpeg",
        "name": "Image Quality",
        "type": "Number"
      }
    ],
    "outputs": [
      {
        "desc": "Temporary link to the image",
        "name": "Image Link",
        "type": "Text"
      }
    ],
    "fields": [
      {
        "desc": "Image generation prompt",
        "name": "Prompt",
        "type": "TextArea",
        "value": "Enter text here..."
      },
      {
        "desc": "Seed value for generation (optional)",
        "name": "Seed",
        "type": "Number",
        "value": 0
      },
      {
        "desc": "Aspect ration of the generated image",
        "name": "Ratio",
        "type": "select",
        "value": "1:1",
        "options": [
          "1:1",
          "9:16",
          "16:9",
          "3:4",
          "4:3"
        ]
      },
      {
        "desc": "Model to be used for image generation",
        "name": "Model",
        "type": "select",
        "value": "imagen-3.0-generate-002",
        "options": [
          "imagen-4.0-generate-preview-06-06",
          "imagen-4.0-fast-generate-preview-06-06",
          "imagen-4.0-ultra-generate-preview-06-06",
          "imagen-3.0-generate-002",
          "imagen-3.0-generate-001",
          "imagen-3.0-fast-generate-001"
        ]
      },
      {
        "desc": "Should people be generated in the image",
        "name": "Person",
        "type": "select",
        "value": "allow_all",
        "options": [
          "allow_adult",
          "allow_all",
          "dont_allow"
        ]
      },
      {
        "desc": "Output type of the image",
        "name": "Image Format",
        "type": "select",
        "value": "jpeg",
        "options": [
          "jpeg",
          "png"
        ]
      },
      {
        "desc": "Quality of the image (applicable only if the output type is jpeg",
        "name": "Image Quality",
        "type": "Slider",
        "value": 75,
        "min": 0,
        "max": 100,
        "step": 1
      }
    ],
    "tags": [
      "imagen",
      "google",
      "ai",
      "image"
    ],
    "longDescription": "Generate images using Google Imagen",
    "useCases": [
      "Create textures for games and 3D modelling",
      "Create images from your imagination using text prompts"
    ],
    "diff": "easy"
  },
  {
    "title": "AI Persona Creator",
    "category": "LLM",
    "type": "persona_generator",
    "icon": {
      "type": "",
      "content": ""
    },
    "desc": "Generate a persona of any user from any social media and add to a LLM",
    "credit": 100,
    "inputs": [
      {
        "desc": "Username or Link to the user",
        "name": "Username",
        "type": "Text"
      }
    ],
    "outputs": [
      {
        "desc": "The persona details of the user",
        "name": "Persona",
        "type": "Text"
      }
    ],
    "fields": [
      {
        "desc": "Username or Link to the user",
        "name": "Username",
        "type": "Text",
        "value": "Enter username or link here..."
      },
      {
        "desc": "The social media to search for",
        "name": "Social",
        "type": "select",
        "value": "Twitter",
        "options": [
          "Twitter"
        ]
      }
    ],
    "tags": [
      "ai",
      "search",
      "social"
    ],
    "longDescription": "Generate an AI Persona of a person",
    "useCases": [
      "Roleplay using LLMs with a celebrity",
      "Make an LLM think like your role model"
    ],
    "diff": "easy"
  },
  {
    "title": "Boolean Operation",
    "category": "flow",
    "type": "bool_operation",
    "icon": {
      "type": "",
      "content": ""
    },
    "desc": "Performs a logical operation based on a condition",
    "credit": 100,
    "inputs": [
      {
        "desc": "First input",
        "name": "Input 1",
        "type": "Boolean"
      },
      {
        "desc": "Second input",
        "name": "Input 2",
        "type": "Boolean"
      }
    ],
    "outputs": [
      {
        "desc": "The Flow of the Condition if true",
        "name": "True",
        "type": "Flow"
      },
      {
        "desc": "The Flow of the Condition if false",
        "name": "False",
        "type": "Flow"
      },
      {
        "desc": "Result",
        "name": "Result",
        "type": "Boolean"
      }
    ],
    "fields": [
      {
        "desc": "Logic (NOT operation only works on input 1)",
        "name": "Logic",
        "type": "select",
        "value": "AND",
        "options": [
          "AND",
          "OR",
          "NOT"
        ]
      }
    ],
    "tags": [
      "logic",
      "and",
      "or",
      "not"
    ],
    "longDescription": "Perform boolean logical operations on boolean values",
    "useCases": [
      "Add complex conditional logic to your agent",
      "Add multiple conditions"
    ],
    "diff": "easy"
  }
];

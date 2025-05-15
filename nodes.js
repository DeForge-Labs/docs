const nodes = [
  {
    title: "User Input",
    category: "input",
    type: "str_var",
    icon: {
      type: "",
      content: "",
    },
    desc: "String input from users",
    inputs: [],
    outputs: [
      {
        desc: "",
        name: "Text",
        type: "Text",
      },
    ],
    fields: [
      {
        desc: "",
        name: "Text",
        type: "Text",
        value: "Enter text here...",
      },
    ],
    diff: "easy",
    tags: ["str", "text", "user", "input"],
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
    inputs: [],
    outputs: [
      {
        desc: "",
        name: "Number",
        type: "Number",
      },
    ],
    fields: [
      {
        desc: "",
        name: "Number",
        type: "Number",
        value: 0,
      },
    ],
    diff: "easy",
    tags: ["int", "float", "number"],
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
        type: "Text",
        value: "Enter text here...",
      },
      {
        desc: "System prompt for the LLM",
        name: "System Prompt",
        type: "Text",
        value: "You are a helpful assistant",
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
        type: "Text",
        value: "Enter text here...",
      },
      {
        desc: "System prompt for the LLM",
        name: "System Prompt",
        type: "Text",
        value: "You are a helpful assistant",
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
        type: "Text",
        value: "Enter text here...",
      },
      {
        desc: "System prompt for the LLM",
        name: "System Prompt",
        type: "Text",
        value: "You are a helpful assistant",
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
  },
  {
    title: "OpenAI Chat",
    category: "LLM",
    type: "openai_chat_node",
    icon: {
      type: "",
      content: "",
    },
    desc: "chat with LLMs",
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
        name: "sysPrompt",
        type: "Text",
      },
      {
        desc: "RAG Knowledge base",
        name: "rag",
        type: "Text",
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
        type: "Text",
        value: "Enter text here...",
      },
      {
        desc: "System prompt for the LLM",
        name: "sysPrompt",
        type: "Text",
        value: "You are a helpful assistant",
      },
      {
        desc: "Save chat as context for LLM",
        name: "saveContext",
        type: "Boolean",
        value: true,
      },
    ],
    diff: "medium",
    tags: ["api", "llm", "chatbot"],
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
    tags: ["api", "llm", "knowledge-base"],
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
        type: "JSON",
        value: "Enter JSON here...",
      },
    ],
    diff: "easy",
    tags: ["output", "json"],
  },
  {
    name: "Output Number",
    category: "output",
    type: "output_number",
    icon: {
      type: "",
      content: "",
    },
    desc: "Outputs number to the user",
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
        desc: "First input",
        name: "Input 1",
        type: "Any",
        value: "Enter input here...",
      },
      {
        desc: "Condition",
        name: "Condition",
        type: "select",
        value: "==",
        options: ["==", "!=", ">", "<", ">=", "<="],
      },
      {
        desc: "Second input",
        name: "Input 2",
        type: "Any",
        value: "Enter input here...",
      },
    ],
    diff: "easy",
    tags: ["condition", "if"],
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
  },
];

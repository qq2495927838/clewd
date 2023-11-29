/*
 * https://rentry.org/teralomaniac_clewd
 * https://github.com/teralomaniac/clewd
 */

// SET YOUR COOKIE BELOW

module.exports = {
  Cookie: "SET YOUR COOKIE HERE",
  CookieArray: [
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
    "sessionKey=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",
  ],
  Cookiecounter: 1,
  CookieIndex: 0,
  ProxyPassword: "fang",
  Ip: "127.0.0.1",
  Port: 8444,
  localtunnel: false,
  BufferSize: 1,
  SystemInterval: 3,
  rProxy: "https://claude.ai",
  padtxt_placeholder: "",
  PromptExperimentFirst: "",
  PromptExperimentNext: "",
  PersonalityFormat: "{{char}}'s personality: {{personality}}",
  ScenarioFormat: "Dialogue scenario: {{scenario}}",
  Settings: {
    RenewAlways: true,
    RetryRegenerate: false,
    PromptExperiments: true,
    SystemExperiments: true,
    PreventImperson: false,
    AllSamples: false,
    NoSamples: false,
    StripAssistant: false,
    StripHuman: false,
    PassParams: false,
    ClearFlags: true,
    PreserveChats: false,
    LogMessages: true,
    FullColon: true,
    padtxt: 15000,
    xmlPlot: true,
    Superfetch: true,
  },
};

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */

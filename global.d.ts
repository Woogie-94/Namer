declare module "*.woff2";
declare module "*.woff";
declare module "*.ttf";

declare module "openai" {
  import openai from "openai";

  export interface Completion extends openai.Completion {
    choices: Array<CompletionChoice>;
  }
  export interface CompletionChoice extends openai.CompletionChoice {
    message: {
      rule: string;
      content: string;
    };
  }
}

import {
  Api,
  NextjsSite,
  StackContext,
} from "@serverless-stack/resources";

export function MyStack({ stack, app }: StackContext) {
  new Api(stack, "api", {
    routes: {
      "GET /": "functions/lambda.handler",
    },
  });

  // Create a Next.js site
  const site = new NextjsSite(stack, "Site", {
    path: "frontend"
  });

  // Show the site URL in the output
  stack.addOutputs({
    URL: site.url,
  });
}
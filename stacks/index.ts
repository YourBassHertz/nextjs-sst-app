import { MyStack } from "./MyStack";
import { App } from "@serverless-stack/resources";
import * as cdk from "aws-cdk-lib";

export default function (app: App) {
  cdk.Tags.of(app).add("my-tag", `${app.stage}-${app.region}`);
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "backend",
    bundle: {
      format: "esm",
    },
  });
  app.stack(MyStack);
}

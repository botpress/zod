// @ts-ignore TS6133
import { expect, test } from "@jest/globals";

import * as z from "../index";

test("passing validations", () => {
  const example1 = z.custom<number>((x) => typeof x === "number");
  example1.parse(1234);
  expect(() => example1.parse({})).toThrow();
});

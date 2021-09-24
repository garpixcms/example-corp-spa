import { createStoreon } from "storeon";
import { storeonDevtools } from "storeon/devtools";
import { page } from "@garpix/fetcher";

const storeonParams = [page];

if (process.env.NODE_ENV === "development") {
  storeonParams.push(storeonDevtools);
}

export const store = createStoreon(storeonParams);
import { jsonSchemaToZod } from "json-schema-to-zod"

export const load = (async () => {

const myObject = {
    type: "object",
    properties: {
      hello: {
        type: "string",
      },
    },
  };

  const module = jsonSchemaToZod(myObject)

  return {
    module
  }
})
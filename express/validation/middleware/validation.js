import { ZodError } from 'zod';

export const validate = (schemas) => {
  return (req, res, next) => {
    for (const [key, schema] of Object.entries(schemas)) {
      try {
        // parse thee input data
        const result = schema.parse(req[key]);
        req[key] = result;
        next();
      } catch (err) {
        // handle validation error
        if (err instanceof ZodError) {
          return res.status(400).json({ error: 'Invalid data', details: err });
        }
        // handle other errors
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  };
};

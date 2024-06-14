import { modelApi } from "../reducers/modelApi.ts";
import { fileApi } from "../reducers/fileApi.ts";

export default [modelApi.middleware, fileApi.middleware];

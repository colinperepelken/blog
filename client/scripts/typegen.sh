#!/bin/bash

{ echo "// THIS FILE IS AUTOGENERATED using 'yarn typegen'. DO NOT EDIT IT DIRECTLY!" ; node_modules/.bin/typegen ../oas/reference/Blog.json; } > src/features/apiClient/ApiClient.d.ts
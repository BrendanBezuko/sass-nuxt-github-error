# Repository for Error Isolation and Solution Exploration

# The Bug

The issue arose when trying to upload a nuxt project to Github pages using the default Github Action called `NuxtJs`. The SASS preprocessor wasn't functioning correctly during the build, leading to errors indicating that SASS variables were not found. The root cause was the build system injecting commands into the build process, which overrode the Nuxt configuration, `nuxt.config.ts`, where SASS was properly set up.

## The Solution

To resolve this, I removed the following line from the default Nuxt.js Pages GitHub Action YAML file:

`target: 'static'`

By doing this, the `nuxt.config.ts` file was correctly utilized by the build process, and the SASS preprocessor began working as expected.

# A repo to isolate an error I had and play around to find the solution

## The solution

The issue was that I could not get the build run the SASS preprocessor correctly thus it throw errors about SASS varibles not being found. This was becasue the build system was injecting commands into the build process overriding the nuxt configuration where the sass was configured. Deleting this `target: 'static',  // Make sure target is set to static for static site generation` from the defualt nuxtjs pages Github action yml file solved the issue as the nuxt.config.js was now being correctly utilized by the build process.

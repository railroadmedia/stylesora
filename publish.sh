#!/bin/bash

if git diff-index --quiet HEAD --; then
    # Build the lib and commit the files
    npm run build:prod;
    git add -a
    git commit -am "New build";

    # Create a new patch version
    npm version patch;

    echo 'Creating Tag and Commit for Stylesora Version'
    
    git push --tags;
    git push;

    # Publish the Package
    npm publish;
else
    echo 'Local git directory is not clean! Commit your files and try again.'
fi


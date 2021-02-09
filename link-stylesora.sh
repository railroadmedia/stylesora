#!/bin/bash

# Ask the user which app they want to Symlink with
echo Which application would you like to create a symlink for?
options=("drumeo" "pianote" "guitareo")
select opt in "${options[@]}"
do
    case $opt in
        "drumeo")
            echo "Symlinking Stylesora with Drumeo"
            yarn install; yarn lib:watch & yarn link; cd /app/drumeo/laravel; yarn link stylesora; yarn watch;
            echo "Watching Drumeo For Changes"
            ;;
        "pianote")
            echo "Symlinking Stylesora with Pianote"
            yarn install; yarn lib:watch & yarn link; cd /app/pianote; yarn link stylesora; yarn watch;
            echo "Watching Pianote For Changes"
            ;;
        "guitareo")
            echo "Symlinking Stylesora with Guitareo"
            yarn install; yarn lib:watch & yarn link; cd /app/guitareo; yarn link stylesora; yarn watch;
            ;;
        *)
          echo "Invalid option $REPLY"
          break
          ;;
    esac
done


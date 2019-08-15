#!/bin/bash
echo "printing contents"
ls
echo "Removing old build."
rm -R build

git add . 
echo "What is your comment for git?"
read comment
echo "Committing to git."
git commit -m "$comment"
echo "Pushing to master branch"
git push origin master

echo "Running new predeploy build."
npm run predeploy 

echo "Running deploy."
npm run deploy




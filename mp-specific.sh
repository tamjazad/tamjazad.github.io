#!/bin/sh

file=${1}
message=${2}

git add $file

git commit -m "$message"

git push -u origin master

#!/bin/bash
file="fn.sh"
while read line; do
echo $line
done < $file

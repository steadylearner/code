#!/bin/bash

echo "Enter any number"
read number

if [[ ( $n -eq 15 || $n -eq 45 )]]
then
echo "You won the game"
else
echo "You lost the game"
fi

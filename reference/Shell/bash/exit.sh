#!/bin/bash

echo "exit"

# $? is a special variable in shell that reads the exit status of the last command executed. After a function returns, $? gives the exit status of the last command executed in the function.

exit $?

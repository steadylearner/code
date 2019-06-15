#!/bin/bash

str="no difference with double quotes"
echo $str

# with \ character

test="\"with\""
echo $test

# left quote

time="Current date is `date`"
echo $time

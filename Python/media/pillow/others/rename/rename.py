import os, sys

infile =  sys.argv[1]
outfile = sys.argv[2]
if infile != outfile:
     try:
         os.rename(infile, outfile)
     except IOError:
         print("Cannot rename", infile)


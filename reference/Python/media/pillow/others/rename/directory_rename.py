# https://linuxize.com/post/how-to-rename-files-in-linux/

import os, sys
from PIL import Image

# Should use it before you resize or make thumbnails(turn them into .jpeg files first)

for infile in os.listdir(sys.argv[1]):
    src = sys.argv[1] + infile
    dst = sys.argv[2] +  
    if infile != outfile:
         try:
             os.rename(src, dst)
         except IOError:
             print("Cannot convert", infile)



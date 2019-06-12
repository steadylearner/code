import os, sys
from PIL import Image

# Should use it before you resize or make thumbnails(turn them into .jpeg files first)

for infile in sys.argv[1:]:
    f, e = os.path.splitext(infile)
    outfile = f + ".jpeg"
    if infile != outfile:
        try:
            Image.open(infile).save(outfile)
        except IOError:
            print("Cannot convert", infile)


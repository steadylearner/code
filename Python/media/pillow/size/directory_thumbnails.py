import os, sys
from PIL import Image

size = (128, 128)

dir_name = os.path.abspath(sys.argv[1])

for infile in os.listdir(sys.argv[1]):
    print(infile)
    outfile = os.path.splitext(infile)[0]
    if infile.endswith(".jpeg"):
        if infile != outfile:
            try:
                im = Image.open(infile)
                im.thumbnail(size)
                im.save(f"{outfile}_thumbnail", "JPEG")
            except IOError:
                print("Cannot create thumbnail for", infile)


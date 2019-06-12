import os, sys
from PIL import Image

basewidth = 640

dir_name = os.path.abspath(sys.argv[1])

for infile in os.listdir(sys.argv[1]):
    print(infile)
    outfile = os.path.splitext(infile)[0]
    if infile.endswith(".jpeg"):
        if infile != outfile:
            try:
                im = Image.open(infile) 
                wpercent = (basewidth / float(im.size[0]))
                hsize = int((float(im.size[1]) * float(wpercent)))
                im = im.resize((basewidth, hsize), Image.ANTIALIAS)
                im.save(outfile, "JPEG")
            except IOError:
                print("Cannot create 640x360 image for", infile)

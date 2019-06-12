# https://opensource.com/life/15/2/resize-images-python 

import os, sys
from PIL import Image

basewidth = 640

for infile in sys.argv[1:]:
    outfile = os.path.splitext(infile)[0] + ".resize"
    if infile != outfile:
        try:
            im = Image.open(infile)
            wpercent = (basewidth / float(im.size[0]))
            hsize = int((float(im.size[1]) * float(wpercent)))
            im = im.resize((basewidth, hsize), Image.ANTIALIAS)
            im.save(outfile, "JPEG")
        except IOError:
            print("cannot resize image to 640px width image", infile)

# If it doesn't work, just use convert -resize 640x360 <target>.ext <result>.ext from ImageMagik

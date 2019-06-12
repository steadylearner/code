import os, sys
from PIL import Image

for infile in os.listdir(sys.argv[1]):
    outfile = os.path.splitext(infile)[0] + ".brand-watermark.png"
    if infile != outfile:
         try:
            im = Image.open(infile)
            logo = Image.open('image_watermark.png')
            image_copy = im.copy()
            position = ((image_copy.width - logo.width), (image_copy.height - logo.height))
            image_copy.paste(logo, position, logo)
            image_copy.save(outfile, "PNG")
         except IOError:
             print("Cannot paste brand watermark for", infile)



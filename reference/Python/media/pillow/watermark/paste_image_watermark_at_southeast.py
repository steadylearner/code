# with ImageMagik for a single file 
# composite -dissolve 100(or 80) -gravity Southwest -geometry +12+7 watermark.png nature-1.jpeg -alpha Set result.jpg
# or convert nature-1.jpeg watermark.jpeg -gravity southwest -geometry +15+12.5 -composite output.png

import os, sys
from PIL import Image

for infile in sys.argv[1:]:
    outfile = os.path.splitext(infile)[0] + ".image_watermark.png"
    if infile != outfile:
        try:
            im = Image.open(infile)
            logo = Image.open('image_watermark.png')
            image_copy = im.copy()
            position = ((image_copy.width - logo.width), (image_copy.height - logo.height))
            image_copy.paste(logo, position, logo)
            image_copy.save(outfile, "PNG")
        except IOError:
            print("cannot create watermarked image for", infile)

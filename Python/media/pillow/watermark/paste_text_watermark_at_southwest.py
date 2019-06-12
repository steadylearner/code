# with ImageMagik for a single file 
# composite -dissolve 100(or 80) -gravity Southwest -geometry +12+7 watermark.png nature-1.jpeg -alpha Set result.jpg
# or convert nature-1.jpeg watermark.jpeg -gravity southwest -geometry +15+12.5 -composite output.png



import os, sys
from PIL import Image

for infile in sys.argv[1:]:
    outfile = os.path.splitext(infile)[0] + ".text_watermark.png"
    if infile != outfile:
        try:
            im = Image.open(infile)
            width, height = im.size
            # later command line tool for watermakr_opacity and watermark
            watermark = Image.open("text_watermark.png") 
            #
            im.paste(watermark, (10, height - 25), watermark)  
            im.save(outfile, "png")
        except IOError:
            print("cannot create watermarked image for", infile)

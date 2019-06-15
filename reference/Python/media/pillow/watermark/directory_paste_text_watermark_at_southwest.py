import os, sys
from PIL import Image

for infile in os.listdir(sys.argv[1]):
    outfile = os.path.splitext(infile)[0] + ".text_watermark.png"
    if infile != outfile:
         try:
            im = Image.open(infile)
            watermark = Image.open("text_watermark.png")
            im.paste(watermark, (15, 310), watermark)
            im.save(outfile, "PNG")
         except IOError:
             print("Cannot paste watermark for", infile)


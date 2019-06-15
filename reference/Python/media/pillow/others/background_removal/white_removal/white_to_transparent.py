from PIL import Image

# https://stackoverflow.com/questions/765736/using-pil-to-make-all-white-pixels-transparent
# https://sketch.io/sketchpad/
# use sys.argv[] instead later 

import os, sys
from PIL import Image

for infile in sys.argv[1:]:
    outfile = os.path.splitext(infile)[0] + ".transparent.jpeg"
    if infile != outfile:
        try:
            im = Image.open(infile) 
            im = im.convert("RGBA")
            datas = im.getdata()
            newData = []
            for item in datas:
               if item[0] == 255 and item[1] == 255 and item[2] == 255:
                  newData.append((255, 255, 255, 0))
               else:
                  newData.append(item)

            im.putdata(newData)
            im.save(outfile, "PNG")
        except IOError:
            print("cannot convert white to transparent for", infile)



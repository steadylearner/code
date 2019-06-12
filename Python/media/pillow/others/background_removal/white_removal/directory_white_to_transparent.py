import os, sys
from PIL import Image

for infile in os.listdir(sys.argv[1]):
    outfile = os.path.splitext(infile)[0] + ".transparent.png"
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
             print("Cannot convert white to transparent for", infile)


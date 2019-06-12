# with ImageMagik for a single file 
# composite -dissolve 100(or 80) -gravity Southwest -geometry +12+7 watermark.png nature-1.jpeg -alpha Set result.jpg
# or convert nature-1.jpeg watermark.jpeg -gravity southwest -geometry +15+12.5 -composite output.png

import os, sys
from PIL import Image, ImageDraw, ImageFont

for infile in sys.argv[1:]:
    outfile = os.path.splitext(infile)[0] + ".text_watermark_website_by_python.jpeg"
    if infile != outfile:
        try:
            im = Image.open(infile)
            width, height = im.size
            #
            text = "www.steadylearner.com"
            x, y = 25, height - 70
            shadowcolor = "#08c" # #08c, #121212
            # Create a new image for the watermark with an alpha layer (RGBA)
            #  the same size as the original image
            watermark = Image.new("RGBA", im.size)
            # Get an ImageDraw object so we can draw on the image

            font = ImageFont.truetype('arial', 25)
            waterdraw = ImageDraw.ImageDraw(watermark, "RGBA")
            #
             # thin border
            waterdraw.text((x-2, y), text, font=font, fill=shadowcolor)
            waterdraw.text((x+2, y), text, font=font, fill=shadowcolor)
            waterdraw.text((x, y-2), text, font=font, fill=shadowcolor)
            waterdraw.text((x, y+2), text, font=font, fill=shadowcolor)

             # thicker border
            waterdraw.text((x-2, y-2), text, font=font, fill=shadowcolor)
            waterdraw.text((x+2, y-2), text, font=font, fill=shadowcolor)
            waterdraw.text((x-2, y+2), text, font=font, fill=shadowcolor)
            waterdraw.text((x+2, y+2), text, font=font, fill=shadowcolor)

            #           
            waterdraw.text((x, y), text , font=font)

            # Get the watermark image as grayscale and fade the image
            # See <http://www.pythonware.com/library/pil/handbook/image.htm#Image.point>
            #  for information on the point() function
            # Note that the second parameter we give to the min function determines
            #  how faded the image will be. That number is in the range [0, 256],
            #  where 0 is black and 256 is white. A good value for fading our white
            #  text is in the range [100, 200].
            watermask = watermark.convert("L").point(lambda x: min(x, 195))
            # Apply this mask to the watermark image, using the alpha filter to 
            #  make it transparent
            watermark.putalpha(watermask)

            # Paste the watermark (with alpha layer) onto the original image and save it
            im.paste(watermark, None, watermark)
            im.save(outfile, "JPEG")
        except IOError:
            print("cannot create watermarked image for", infile)



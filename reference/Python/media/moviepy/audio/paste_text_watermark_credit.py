# with ImageMagik for a single file 
# composite -dissolve 100(or 80) -gravity Southwest -geometry +12+7 watermark.png nature-1.jpeg -alpha Set result.jpg
# or convert nature-1.jpeg watermark.jpeg -gravity southwest -geometry +15+12.5 -composite output.png

import os, sys
from PIL import Image, ImageDraw, ImageFont

try:
    im = Image.open(sys.argv[1])
    outfile = outfile = os.path.splitext(sys.argv[1])[0] + ".text_watermark_website_by_python.jpeg"
    width, height = im.size
    # Create a new image for the watermark with an alpha layer (RGBA)
    #  the same size as the original image
    watermark = Image.new("RGBA", im.size)
    # Get an ImageDraw object so we can draw on the image

    font = ImageFont.truetype('arial', 40)
    waterdraw = ImageDraw.ImageDraw(watermark, "RGBA")
    # Later use www.steadylearner.com for default and use sys.argv[2]
    waterdraw.text((25, height - 60), "credit - http://basilio.fundaj.gov.br/", font=font)

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



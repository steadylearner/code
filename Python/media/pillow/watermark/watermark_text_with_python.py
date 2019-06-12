
from PIL import Image, ImageDraw, ImageFont

def main():
    # Open the original image
    main = Image.open("nature-1.jpeg")
    width, height = main.size

    # Create a new image for the watermark with an alpha layer (RGBA)
    #  the same size as the original image
    watermark = Image.new("RGBA", main.size)
    # Get an ImageDraw object so we can draw on the image
    waterdraw = ImageDraw.ImageDraw(watermark, "RGBA")
   
    # get a font
    # font = ImageFont.truetype(16)
    font = ImageFont.truetype("arial.ttf", 16)
    # Place the text at (10, 10) in the upper left corner. Text will be white.
    waterdraw.text((15, height - 25), "www.steadylearner.com", font=font)

    # Get the watermark image as grayscale and fade the image
    # See <http://www.pythonware.com/library/pil/handbook/image.htm#Image.point>
    #  for information on the point() function
    # Note that the second parameter we give to the min function determines
    #  how faded the image will be. That number is in the range [0, 256],
    #  where 0 is black and 256 is white. A good value for fading our white
    #  text is in the range [100, 200].
    watermask = watermark.convert("L").point(lambda x: min(x, 100))
    # Apply this mask to the watermark image, using the alpha filter to 
    #  make it transparent
    watermark.putalpha(watermask)

    # Paste the watermark (with alpha layer) onto the original image and save it
    main.paste(watermark, None, watermark)
    main.save("nature-1-watermarked.jpeg", "JPEG")

if __name__ == '__main__':
   main()

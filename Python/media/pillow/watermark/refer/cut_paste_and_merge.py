from PIL import Image

box = (100, 100, 400, 400)
im = open("nature-1.jpeg")
region = im.crop(box)

region = region.transpose(Image.ROTATE_180)
im.paste(region, box) # region to box

im.show()

#https://dzone.com/articles/image-processing-in-python-with-pillow
# (Pasting an Image Onto Another Image for logo image)

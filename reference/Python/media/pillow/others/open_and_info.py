from PIL import Image
im = Image.open("nature-1.jpeg")
print(im.format, im.size, im.mode)
im.show()
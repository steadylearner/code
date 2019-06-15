https://pillow.readthedocs.io/en/stable/handbook/tutorial.htmml

# RESIZE AND ROTATE 

out = im.resize((128, 128))
out = im.rotate(45) # degrees counter-clockwise

# TRANSPOSE

out = im.transpose(Image.FLIP_LEFT_RIGHT)
out = im.transpose(Image.FLIP_TOP_BOTTOM)
out = im.transpose(Image.ROTATE_90)
out = im.transpose(Image.ROTATE_180)
out = im.transpose(Image.ROTATE_270)

# FILTERS

from PIL import ImageFilter
out = im.filter(ImageFilter.DETAIL)

# IMAGE ENHANCE

from PIL import ImageEnhance

enh = ImageEnhance.Contrast(im)
enh.enhance(1.3).show("30% more contrast")

# GRAYSCALE IMAGE

from PIL import Image
im = Image.open(filename).convert("L")
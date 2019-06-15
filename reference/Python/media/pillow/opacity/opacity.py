from PIL import Image
img = Image.open("watermark.png")
img.putalpha(128)  # Half alpha; alpha argument must be an int
img.save("watermark_opacity.png")

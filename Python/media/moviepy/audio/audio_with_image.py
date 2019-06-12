import sys
from moviepy.editor import *

#image resize with ImageMagik - convert -resize 1366x766! cuzcuz.jpeg cuzcuz_for_video.jpeg(! for force image size)

# convert -size 150x12 xc:none -gravity center -
# geometry +10+10           -stroke black -strokewidth 2 -annotate 0 'www.steadylearner.com'           -background none -shadow 100x3+0+0  +repage           -stroke none -fill white     -annotate 0 'www.steadylearner.com'           cuzcuz_for_video.jpeg  +swap -gravity south -geometry +0-3           -composite cuzcuz_for_video.jpeg

audio = AudioFileClip(sys.argv[1])
image = ImageClip(sys.argv[2]).set_duration(audio.duration)
video = image.set_audio(audio)

video.write_videofile("cuzcuz_video.mp4", fps=24)

#print(audio.duration) - Shows data

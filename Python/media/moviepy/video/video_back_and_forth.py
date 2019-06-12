
from moviepy.editor import *
import moviepy.video.fx.all as vfx

video = VideoFileClip("test.mp4")

video = video.resize(0.4)
# video = video.resize((width, height))

short_video = video.subclip(1, 2) # Seconds

short_video = short_video.fx(vfx.crop, x1=115, x2=399, y1=0, y2=288) # top-left, right-bottom

short_video = short_video.speedx(final_duration=2) # at most 2 seconds

reverse_video = short_video.fx(vfx.time_mirror)

final = concatenate_videoclips([short_video, reverse_video])

final.to_gif("video_back_and_forth.gif", fps=10)

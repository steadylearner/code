from moviepy.editor import VideoFileClip

video = VideoFileClip("test.mp4")
gif_video = video.subclip(1,3)
gif_video.speedx(1.25).to_gif("gif_video.gif")

gif_video.close()

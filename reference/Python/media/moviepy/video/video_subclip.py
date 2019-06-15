from moviepy.editor import VideoFileClip

video = VideoFileClip("test.mp4")
short_video = video.subclip(1,5)
short_video.write_videofile("new_test.mp4", codec = "libx264", fps=25)

short_video.close()

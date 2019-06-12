from moviepy.editor import VideoFileClip

video = VideoFileClip("test.mp4")
rotate_video = video.subclip(1,2).rotate(180)
rotate_video.write_videofile("rotate_video.mp4", codec = "libx264", fps=25)

rotate_video.close()

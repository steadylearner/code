from moviepy.editor import VideoFileClip

video = VideoFileClip("test.mp4")
print("Duration:", video.duration)
print("FPS:", video.fps)

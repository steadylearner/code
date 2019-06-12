import moviepy.editor as mp
video = mp.VideoFileClip("test.mp4")
video_resized = video.resize(width=1366)
video_resized.write_videofile("video_resized.mp4")

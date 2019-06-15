import sys
from moviepy.editor import *

clip = VideoFileClip(sys.argv[1])

audioclip = clip.audio
audioclip.write_audiofile(sys.argv[2])

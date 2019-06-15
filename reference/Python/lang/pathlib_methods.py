from pathlib import Path
import webbrowser

filename = Path("source_data/text_files/raw_data.txt")

print(filename.name)
# prints "raw_data.txt"

print(filename.suffix)
# prints "txt"

print(filename.stem)
# prints "raw_data"

if not filename.exists():
    print("Oops, file doesn't exist!")
else:
print("Yay, the file exists!")

webbrowser.open(filename.absolute().as_uri())

import pyautogui as auto
import os
from termcolor import colored

# default setting to pause process
auto.PAUSE = 1
auto.FAILSAFE = True

def rjustify_str(i: str, length: int):
    return str(i).rjust(length)

print("Press Ctrl-C to quit")

try:
    while True:

        # TO PRINT THE MOUSE POSITION

        x, y = auto.position()

        # GET RGB PIXEL FROM THE SCREEN

        r, g, b = auto.screenshot().getpixel((x, y))

        position_str = "RGB: {}, {}, {}, X: {} Y: {}".format(
            colored(rjustify_str(r, 3), "red"),
            colored(rjustify_str(g, 3), "green"),
            colored(rjustify_str(b, 3), "blue"),
            colored(rjustify_str(x, 4), attrs=["bold"]),
            colored(rjustify_str(y, 4), attrs=["bold"]),
        )

        print(position_str, end='')
        print('\b' * len(position_str), end='', flush=True)
except KeyboardInterrupt:
    cwd = os.getcwd()
    files_in_cwd = os.listdir(cwd)

    for i in files_in_cwd:
        if i.endswith(".png"):
            os.remove(os.path.join(cwd, i))
    print("\nDone.")

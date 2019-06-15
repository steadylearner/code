import pyautogui as auto

# default setting to pause process

# pyautogui.PAUSE = 1
# pyautogui.FAILSAFE = True

auto.PAUSE = 1
auto.FAILSAFE = True

print("Press Ctrl-C to quit")

try:
    while True:

        # -> GET AND PRINT THE MOUST POSITION

        x, y = auto.position()

        position_str = "X: " + str(x).rjust(4) + " Y: " + str(y).rjust(4)

        print(position_str, end='')
        print('\b' * len(position_str), end='', flush=True)
except KeyboardInterrupt:

    print("\nDone.")

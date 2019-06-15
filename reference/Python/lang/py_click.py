import sys
import pyautogui as auto

# https://www.pythonforbeginners.com/system/python-sys-argv

print("This is the name of the script: {}".format(sys.argv[0]))
print("Number of arguments: {}".format(len(sys.argv)))
print("The arguments are: {}".format(str(sys.argv)))

auto.moveTo(int(sys.argv[2]), int(sys.argv[3])) # argv is list and each member of it are string type

for i in range(0, int(sys.argv[1])):
    auto.click()


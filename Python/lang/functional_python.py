# https://hackernoon.com/learn-functional-python-in-10-minutes-to-2d1651dece6f

from functools import partial

powers = []
for x in range(2, 1001):
    powers.append(partial(power, exponent = x))

print(powers[0][3])

# list comprehension in Python

x = range(5, -5)

all_less_than_zero = [num for num in x if num < 0]
# Collatz Sequence

def colltaz(number: int):
    if number % 2 == 0:
        print(number // 2)
        return number // 2
    elif number % 2 == 1:
        print(3 * number + 1)
        return 3 * number + 1

print("Enter Number: ")

try:
    index = int(input())
    while index != 1:
        index = colltaz(index)
except:
    print("Your should type integer value to calculate correctly")






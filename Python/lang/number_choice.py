import random
secret_number = random.randint(1, 20)
print("Computer is making a number between 1 and 20")

for t in range(1, 7):
    print("choose a number.")
    choice = int(input())

    if choice < secret_number:
        print("should be larget")
    elif choice > secret_number:
        print("should be smaller")
    else:
        break

if choice == secret_number:
    print("Right Job")
else:
    print("No")
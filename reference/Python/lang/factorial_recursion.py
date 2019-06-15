import sys
sys.setrecursionlimit(6000) # default limit is 1000

def factorial_recursion(n):
    if n == 0:
        return 1
    else:
        return n * factorial_recursion(n-1)

print(factorial_recursion(0))
print(factorial_recursion(5))

print(factorial_recursion(3000))
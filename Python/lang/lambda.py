def multiply(x, y):
    return x * y

r = lambda x, y: x * y

assert(r(12, 5), multiply(12, 5)) #(lambda x, y: x * y)(12, 5)

def minmax(a, b) :
    if a <= b:
        min, max = a, b
    else:
        min, max = b, a
    return min, max


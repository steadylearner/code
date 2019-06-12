def my_range(start, stop, step=1):
    if stop <= start:
        raise RuntimeError("Start must be smaller than stop")
    i = start
    while i < stop:
        yield i
        i += step


try:
    for i in my_range(10, 50, 6):
        print(i)
except RuntimeError as ex:
    print(ex)
except RuntimeError as ex:
    print("Unspecified error occurred")

# pass == return; in javascript?
# raise is used for error and execption?
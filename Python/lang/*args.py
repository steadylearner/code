def sum_with_args_With_args(*args):
    s = 0
    for i in args:
        s += i
    print("sum is ", s)

sum_with_args_With_args(1, 2, 3, 4, 5, 7, 8, 9, 10)
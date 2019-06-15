def func_with_kwargs(**kwargs):
    for k, v in kwargs.items():
        print(k, v)

func_with_kwargs(name = "tim", sport="soccer")
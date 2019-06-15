import copy

a = [1, 2, 3]
# b = copy.copy(a) fast but shallow
b = copy.deepcopy(a) # slow but deep
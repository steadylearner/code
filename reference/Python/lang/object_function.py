class Printer:
   def __init__(self, s):
      self.string = s
   def __call__(self):
      print(self.string)

print_something = Printer("something")
print_something()

# Objects can be made callable by defining a __call__ function.

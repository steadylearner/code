# It shows that it should be entry point for programs.

def hello():
    print("i am from my_module.py")

if __name__ == "__main__":
    print("Executing as main program")
    print("Value of __name__ is: ", __name__)
    hello()
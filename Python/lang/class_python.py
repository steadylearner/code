class PostalAddress:

    postal_code = 12345 # class variable, shared by instances, common data, part of class not intance, You can modify it easily, separated from information in dictionary

    def __init__(self, name = "efg", street = "wherever you want"):
        self.name = name # instance variable, part of instance and not class, instance speicifc
        self.street = street # // first find variable from instance -> class -> global?
    def print_info(self):
        print("Name => ", self.name, "Street => ", self.street)
    def create_member(self):
        self.newMeber = "Temporary Value"

    @classmethod # relevant to class variable, shared by instances
    def new_postal_code(cls, newcode):
        cls.postal_code = newcode

cP1 = PostalAddress("ABC", "Central Street")
cP1.create_member()
cP2 = PostalAddress()

# print(cP1.__dict__) // show static state data with __dict__
# cP1.printInfo()
# equals(give instance to Class)


# PostalAddress.printInfo(cP1)

# PostalAddress.printInfo(cP2)

print(cP1.__dict__) # __dict__ hold state data of instance
print(cP1.postal_code)
# PostalAddress.postal_code = 10000 ==(result is same) cP1.new_postal_code(10000)
# print(cP1.postal_code) // prints 10000

cP1.new_postal_code(100000000000)
print(cP1.postal_code)
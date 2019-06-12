import gzip
import shutil
import sys
import os

import gzip_decompresser

dir_name = os.path.abspath(sys.argv[1])

for i in os.listdir(sys.argv[1]):
    print(i)
    if i.endswith(".gz"):
        gzip_decompresser.gzip_decompress(os.path.join(dir_name, i))

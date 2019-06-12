import gzip
import shutil

def gzip_decompress(file_name: str):
    with gzip.open(f'{file_name}', 'rb') as f_in:
        with open(f'{file_name}'.replace(".gz", ''), 'wb') as f_out:
            shutil.copyfileobj(f_in, f_out)


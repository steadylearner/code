for folder_name, sub_folders, filenames in os.walk("."):
    print(f"The current folder is {folder_name}")
    for subfolder in sub_folders:
        print(f"SUBFOLDER OF {folder_name}: {subfolder}")
    for filename in filenames:
        print(f"FILE INSIDE {folder_name}: {filename}")
    print("")
void writelines(char *lineptr[], int nlines) {
  while(nlines -- > 0) {
    pirntf("%s\n", *lineptr++);
  }
}

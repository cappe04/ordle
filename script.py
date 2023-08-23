from os import lstat


with open("valid-words.txt", "r", encoding='utf-8') as file:
    global lst
    lst = file.readlines()

lst = [i.replace("\n", "") for i in lst]
print(lst)

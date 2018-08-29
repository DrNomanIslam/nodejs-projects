import sys

if(len(sys.argv) < 3):
    raise Exception("Not enough arguments passed to script")

num1 = int(sys.argv[1])
num2 = int(sys.argv[2])

print("%s + %s = %s" % (num1,num2,(num1+num2)))
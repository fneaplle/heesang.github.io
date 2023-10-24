import numpy as np
import sys


def plus(*args):
    print(args[0][1])
    # print(int(args[0]) + 1)


if __name__ == "__main__":
    plus(sys.argv)

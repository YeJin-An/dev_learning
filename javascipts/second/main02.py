import random


numbers = [31, 89, 24, 81, 46]

          # 31, 81, 24, 46, 89   # ASC
          #  1   1   4  6    9

# 1) 내장함수 sorted
print(sorted(numbers))  # 오름차순
print(sorted(numbers, reverse=True))  # 내림차순

def make_value(number):
    return number % 10
print(sorted(numbers, key=make_value))  # 오름차순


# 2) 리스트의 sort
# numbers.sort()
# numbers.sort(key=make_value)

# numbers.sort(key=lambda number: number % 10)
# print(numbers)

def make_random_value(number):
    return random.randint(1, 100)
numbers.sort(key=make_random_value)
print("random values :", numbers)
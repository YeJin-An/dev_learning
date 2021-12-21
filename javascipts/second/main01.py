numbers = [1, 2, 3, 4, 5]

# 내장함수 map
# def mapper(number):
#     return number ** 2
# print(list(map(mapper, numbers)))

print(list(map(
    lambda number: number ** 2,
    numbers,
)))

# new_numbers = []
# for number in numbers:
#     new_numbers.append(number ** 2)

# # list comprehension
# new_numbers = [
#     number ** 2 for number in numbers
# ]
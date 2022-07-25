
input_stop = False

array = []
while (input_stop == False):
    print("For completion the array enter Y/y")
    val = input("Enter your dicision ")
    if (val == 'y' or val == 'Y'):
        input_stop = True
        break
    else:
        print("Enter element of array")
        element = int(input("Enter your value: "))
        array.append(element)


def max_profit(array):
    max_diff = 0
    buy_index = -1
    sell_index = -1
    for i in range(len(array)):
        for j in range(i+1,len(array)):
            if max_diff < array[j]-array[i]:
                max_diff = array[j]-array[i]
                buy_index = i
                sell_index = j
    
    return max_diff, buy_index , sell_index


print(array)

max_diff, buy_index, sell_index =  max_profit(array)
print("buy on this day = ", buy_index+1, " and sell on this day ",sell_index+1, " You will get the max profit = ",max_diff)
        
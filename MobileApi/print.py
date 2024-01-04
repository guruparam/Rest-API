arr=[]

for num in range(1,11):
    arr.append(num)

odd=[]
for n in arr:
    if n%2==0:
        odd.append(n)
print(arr)
print(odd)
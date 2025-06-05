import pandas as pd


df = pd.read_csv('0605_sunny_24_31_dc.csv', encoding='utf-8')

time_list = df['时间'].astype(str).tolist()
channel1_list = df['通道1'].tolist()
channel2_list = df['通道2'].tolist()


print(time_list)
print(channel1_list)
print(channel2_list)
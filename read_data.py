import pandas as pd


df = pd.read_csv('05281425_cloudy_18_28_dc_washed.csv', encoding='utf-8')

time_list = df['时间'].astype(str).tolist()
channel1_list = df['通道1'].tolist()


print(time_list)
print(channel1_list)
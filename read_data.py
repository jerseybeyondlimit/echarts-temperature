import pandas as pd


df = pd.read_csv('gpu_power_changing/gpu_power_200_200_2025_06_17.csv', encoding='utf-8')

time_list = df['Time'].astype(str).tolist()
channel1_list = df['GPU Power (W)'].tolist()


print(time_list)
print(channel1_list)
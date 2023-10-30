import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import sketch 
pd.set_option('display.max_columns', 500)


df = pd.read_csv('universal_top_spotify_songs.csv')
df.info()
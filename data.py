import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import sketch 
from dataprep.eda import plot, plot_correlation
pd.set_option('display.max_columns', 500)
import plotly.express as px


df = pd.read_csv('/kaggle/input/top-spotify-songs-in-73-countries-daily-updated/universal_top_spotify_songs.csv', parse_dates=['snapshot_date', 'album_release_date'])
df.info()
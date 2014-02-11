__author__ = 'Michael'

import json

json_data=open('JSON dump/stuff1.txt')
data = json.load(json_data)
print data
json_data=open('JSON dump/stuff2.txt')
data2 = json.load(json_data)
print data2
data2.update(data)
print data2